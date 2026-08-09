# Workspace Agent Rules

## Command Shortcuts & Procedures

### `restart` Command Procedure
When the user mentions "restart" or requests a server/ecosystem restart, execute the following 4-step sequence:

1. **Rebuild Application**:
   Run `export PATH="./.node/bin:$PATH" && npm run build` in the workspace directory.

2. **Clear Existing Port**:
   Run `lsof -ti:4321 | xargs kill -9 2>/dev/null || true` to free port 4321.

3. **Relaunch Server**:
   Run `export PATH="./.node/bin:$PATH" && npm run preview` in the background.

4. **Verify Ecosystem Health**:
   Run `curl -I "http://localhost:4321/" && curl -I "http://localhost:4321/proker" && curl -I "http://localhost:4321/repo" && curl -I "http://localhost:4321/profile" && curl -I "http://localhost:4321/contact"` to confirm all pages return `HTTP 200 OK`.
