/**
 * GitHub Sync Helper
 * Commits files and JSON directly into the GitHub repository (dmfkedokteran-um/DMFKUM-Page)
 * so that uploaded media, documents, and data edits live right in the source repository.
 */

const REPO_OWNER = 'dmfkedokteran-um';
const REPO_NAME = 'DMFKUM-Page';
const REPO_BRANCH = 'main';

export function getGitHubToken() {
  return process.env.GITHUB_TOKEN ||
         process.env.GH_TOKEN ||
         process.env.GITHUB_PAT ||
         '';
}

/**
 * Commits or updates a file directly in the GitHub repository via GitHub REST API v3.
 * @param {string} relativeFilePath - Path inside repo (e.g. 'public/uploads/sample.jpg' or 'database/news.json')
 * @param {Buffer|string} content - Buffer or string content of the file
 * @param {string} commitMessage - Commit message
 */
export async function commitFileToGitHub(relativeFilePath, content, commitMessage) {
  const token = getGitHubToken();
  if (!token) {
    console.log(`[GitHubSync] Skipped commit for ${relativeFilePath} (no GITHUB_TOKEN configured)`);
    return { success: false, reason: 'no_token' };
  }

  try {
    const cleanPath = relativeFilePath.replace(/^\/+/, '');
    const apiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${cleanPath}`;

    // 1. Check if file already exists to get its SHA (required for updates)
    let sha = null;
    try {
      const getRes = await fetch(`${apiUrl}?ref=${REPO_BRANCH}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'DMFKUM-Portal'
        }
      });
      if (getRes.ok) {
        const fileInfo = await getRes.json();
        sha = fileInfo.sha;
      }
    } catch (_) {}

    // 2. Prepare Base64 content
    let base64Content;
    if (Buffer.isBuffer(content)) {
      base64Content = content.toString('base64');
    } else if (typeof content === 'string') {
      base64Content = Buffer.from(content, 'utf-8').toString('base64');
    } else {
      base64Content = Buffer.from(JSON.stringify(content, null, 2), 'utf-8').toString('base64');
    }

    // 3. Commit file via PUT
    const putBody = {
      message: commitMessage || `sync: update ${cleanPath} from portal`,
      content: base64Content,
      branch: REPO_BRANCH
    };
    if (sha) {
      putBody.sha = sha;
    }

    const putRes = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        'User-Agent': 'DMFKUM-Portal'
      },
      body: JSON.stringify(putBody)
    });

    if (putRes.ok) {
      const json = await putRes.json();
      console.log(`[GitHubSync] Successfully committed ${cleanPath} to GitHub (${json.commit?.sha?.substring(0, 7)})`);
      return { success: true, commitSha: json.commit?.sha };
    } else {
      const errorText = await putRes.text();
      console.error(`[GitHubSync] Failed to commit ${cleanPath} (HTTP ${putRes.status}):`, errorText);
      return { success: false, error: errorText };
    }
  } catch (err) {
    console.error(`[GitHubSync] Error committing ${relativeFilePath}:`, err);
    return { success: false, error: err.message };
  }
}
