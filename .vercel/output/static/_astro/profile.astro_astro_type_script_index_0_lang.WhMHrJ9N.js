function w(){const J=localStorage.getItem("isAdmin")==="true",S=localStorage.getItem("dmfk_settings");if(S)try{const e=JSON.parse(S);if(e.visi){const o=document.getElementById("profile-visi-text");o&&(o.textContent=e.visi)}if(e.misi&&Array.isArray(e.misi)){const o=document.getElementById("profile-misi-list");o&&(o.innerHTML=e.misi.map(s=>`
              <li class="flex items-start gap-3">
                <div class="bg-blue-100 p-1 rounded-full mt-1.5 shrink-0">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                </div>
                <span class="text-gray-600 text-base font-medium leading-normal">${s}</span>
              </li>
            `).join(""))}if(e.parliamentName){const o=document.getElementById("profile-parliament-name");o&&(o.textContent=e.parliamentName)}if(e.orgTitle){const o=document.getElementById("profile-org-title");o&&(o.textContent=e.orgTitle)}if(e.orgSubtitle){const o=document.getElementById("profile-org-subtitle");o&&(o.textContent=e.orgSubtitle)}if(e.orgBgImage){const o=document.getElementById("org-hero-bg");o&&(o.style.backgroundImage=`url('${e.orgBgImage}')`)}}catch{}document.querySelectorAll(".admin-only").forEach(e=>{J?e.classList.remove("hidden"):e.classList.add("hidden")});const A=document.getElementById("edit-profile-btn"),p=document.getElementById("profile-modal"),L=document.getElementById("close-profile-modal-btn"),$=document.getElementById("profile-form");A&&p&&A.addEventListener("click",()=>p.showModal()),L&&p&&L.addEventListener("click",()=>p.close());async function h(e){try{const s={...JSON.parse(localStorage.getItem("dmfk_settings")||"{}"),...e};return localStorage.setItem("dmfk_settings",JSON.stringify(s)),await fetch("/api/settings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).catch(()=>{}),!0}catch{return!0}}fetch("/api/settings").then(e=>e.ok?e.json():null).then(e=>{if(e&&e.isCloud&&e.settings&&typeof e.settings=="object"){const o=e.settings,t={...JSON.parse(localStorage.getItem("dmfk_settings")||"{}"),...o},r=localStorage.getItem("dmfk_settings"),d=JSON.stringify(t);if(d!==r){if(localStorage.setItem("dmfk_settings",d),t.visi){const i=document.getElementById("visi-text");i&&(i.textContent=`"${t.visi}"`)}if(Array.isArray(t.misi)&&t.misi.length>0){const i=document.getElementById("misi-container");i&&(i.innerHTML=t.misi.map((y,v)=>`
                  <div class="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/80 border border-gray-100 hover:bg-white hover:shadow-md transition-all group">
                    <span class="flex shrink-0 w-9 h-9 rounded-xl bg-rose-100 text-rose-700 font-extrabold flex items-center justify-center text-base group-hover:scale-110 transition-transform">0${v+1}</span>
                    <p class="text-gray-700 font-medium leading-relaxed my-auto text-base sm:text-lg">${y}</p>
                  </div>
                `).join(""))}if(t.parliamentName){const i=document.getElementById("parliament-name-text");i&&(i.textContent=t.parliamentName)}if(t.parliamentLogo){const i=document.getElementById("parliament-logo-img");i&&(i.src=t.parliamentLogo)}if(t.orgTitle){const i=document.getElementById("org-title-text");i&&(i.textContent=t.orgTitle)}if(t.orgSubtitle){const i=document.getElementById("org-subtitle-text");i&&(i.textContent=t.orgSubtitle)}if(t.orgBgUrl){const i=document.getElementById("org-bg-container");i&&(i.style.backgroundImage=`url('${t.orgBgUrl}')`)}}}}).catch(()=>{}),$&&p&&$.addEventListener("submit",async e=>{e.preventDefault();const o=document.getElementById("visi-input").value.trim(),t=document.getElementById("misi-input").value.split(`
`).map(r=>r.trim()).filter(r=>r);await h({visi:o,misi:t}),p.close(),window.location.reload()});async function g(e,o){const s=e?.files?.[0];return s?new Promise(t=>{const r=new FileReader;r.onload=()=>t(r.result),r.onerror=()=>t(o),r.readAsDataURL(s)}):o}function K(e){if(!e)return"";const o=e.trim(),s=o.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);if(s)return`https://lh3.googleusercontent.com/d/${s[1]}`;const t=o.match(/drive\.google\.com\/(?:open|uc)\?(?:.*&)?id=([a-zA-Z0-9_-]+)/);return t?`https://lh3.googleusercontent.com/d/${t[1]}`:o}const q=document.getElementById("edit-org-bg-btn"),f=document.getElementById("org-bg-modal"),N=document.getElementById("close-org-bg-modal-btn"),C=document.getElementById("org-bg-form");q&&f&&q.addEventListener("click",()=>f.showModal()),N&&f&&N.addEventListener("click",()=>f.close()),C&&f&&C.addEventListener("submit",async e=>{e.preventDefault();const o=document.getElementById("parliament-name-input")?.value.trim(),s=document.getElementById("parliament-logo-url-input")?.value.trim(),t=K(s),r=document.getElementById("parliament-logo-file-input"),d=await g(r,t),i=document.getElementById("org-title-input")?.value.trim(),y=document.getElementById("org-subtitle-input")?.value.trim(),v=document.getElementById("org-bg-url-input")?.value.trim(),x=K(v),I=document.getElementById("org-bg-file-input"),B=await g(I,x);await h({parliamentName:o||"Parlemen Nawa Cita 2026",parliamentLogo:d,orgTitle:i||"Struktur Kepengurusan 2026",orgSubtitle:y||"Pimpinan Utama, BPH, dan Komisi Operasional Organisasi DMFK UM",orgBgImage:B}),f.close(),window.location.reload()});const P=document.getElementById("edit-org-btn"),b=document.getElementById("org-modal"),O=document.getElementById("close-org-modal-btn"),l=document.getElementById("org-form");P&&b&&P.addEventListener("click",()=>{m(),b.showModal()}),O&&b&&O.addEventListener("click",()=>b.close());let n=l?JSON.parse(l.getAttribute("data-org")||"{}"):{};function m(){if(!l)return;const e=document.getElementById("presidium-inputs-container");e&&(e.innerHTML=(n.presidium||[]).map((t,r)=>`
          <div class="bg-white p-3.5 rounded-xl border border-gray-200 space-y-2">
            <div class="flex items-center gap-2">
              <input type="text" value="${t.role||""}" placeholder="Jabatan (e.g. Ketua Umum)" class="pres-role font-bold text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="text" value="${t.name||""}" placeholder="Nama Lengkap" class="pres-name font-bold text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="text" value="${t.dept||""}" placeholder="Prodi / Angkatan" class="pres-dept text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <button type="button" onclick="removePresidiumItem(${r})" class="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg font-bold">✕</button>
            </div>
            <div class="flex items-center gap-2">
              <input type="text" value="${t.avatar||""}" placeholder="URL Foto Personil" class="pres-avatar text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="file" class="pres-file text-[11px] text-gray-500 file:py-1 file:px-2 file:rounded file:border-0 file:bg-gray-200 cursor-pointer" accept="image/*" />
            </div>
          </div>
        `).join(""));const o=document.getElementById("sekben-inputs-container");o&&(o.innerHTML=(n.sekben||[]).map((t,r)=>`
          <div class="bg-white p-3.5 rounded-xl border border-gray-200 space-y-2">
            <div class="flex items-center gap-2">
              <input type="text" value="${t.role||""}" placeholder="Jabatan (e.g. Bendahara)" class="sb-role font-bold text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="text" value="${t.name||""}" placeholder="Nama Lengkap" class="sb-name font-bold text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="text" value="${t.dept||""}" placeholder="Prodi / Angkatan" class="sb-dept text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <button type="button" onclick="removeSekbenItem(${r})" class="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg font-bold">✕</button>
            </div>
            <div class="flex items-center gap-2">
              <input type="text" value="${t.avatar||""}" placeholder="URL Foto Personil" class="sb-avatar text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="file" class="sb-file text-[11px] text-gray-500 file:py-1 file:px-2 file:rounded file:border-0 file:bg-gray-200 cursor-pointer" accept="image/*" />
            </div>
          </div>
        `).join(""));const s=document.getElementById("komisi-inputs-container");s&&(s.innerHTML=(n.komisi||[]).map((t,r)=>`
          <div class="bg-white p-4 rounded-xl border border-gray-300 space-y-3">
            <div class="flex justify-between items-center bg-rose-50/50 p-2 rounded-lg">
              <span class="font-extrabold text-xs text-rose-700">${t.code||"Komisi"}</span>
              <button type="button" onclick="removeKomisiItem(${r})" class="text-xs text-rose-600 font-bold hover:underline">Hapus Komisi</button>
            </div>
            <div class="grid grid-cols-2 gap-2">
              <input type="text" value="${t.code||""}" placeholder="Kode (e.g. Komisi I)" class="kom-code font-bold text-xs p-2 bg-gray-50 border rounded-lg" />
              <input type="text" value="${t.title||""}" placeholder="Nama Komisi" class="kom-title font-bold text-xs p-2 bg-gray-50 border rounded-lg" />
            </div>

            <!-- Ketua Komisi -->
            <div class="p-2.5 bg-gray-50 rounded-lg border space-y-2">
              <span class="text-[10px] font-bold text-gray-500 block">Ketua Komisi</span>
              <div class="grid grid-cols-2 gap-2">
                <input type="text" value="${t.ketua?.name||""}" placeholder="Nama Ketua Komisi" class="kom-ketua-name font-bold text-xs p-2 bg-white border rounded-lg" />
                <input type="text" value="${t.ketua?.dept||""}" placeholder="Prodi / Angkatan" class="kom-ketua-dept text-xs p-2 bg-white border rounded-lg" />
              </div>
              <div class="flex items-center gap-2">
                <input type="text" value="${t.ketua?.avatar||""}" placeholder="URL Foto Ketua Komisi" class="kom-ketua-avatar text-xs p-2 bg-white border rounded-lg flex-1" />
                <input type="file" class="kom-ketua-file text-[11px] text-gray-500 file:py-1 file:px-2 file:rounded file:border-0 file:bg-gray-200 cursor-pointer" accept="image/*" />
              </div>
            </div>

            <!-- Anggota Komisi -->
            <div class="p-2.5 bg-gray-50/80 rounded-lg border space-y-2">
              <div class="flex justify-between items-center">
                <span class="text-[10px] font-bold text-gray-500">Daftar Anggota Komisi</span>
                <button type="button" onclick="addAnggotaItem(${r})" class="text-[10px] font-bold bg-gray-200 hover:bg-gray-300 px-2 py-0.5 rounded">+ Tambah Anggota</button>
              </div>
              <div class="space-y-2">
                ${(t.anggota||[]).map((d,i)=>`
                  <div class="p-2 bg-white rounded-lg border border-gray-200 space-y-1">
                    <div class="flex gap-2 items-center">
                      <input type="text" value="${d.name||""}" placeholder="Nama Anggota" class="kom-mem-name font-bold text-xs p-1.5 bg-gray-50 border rounded-lg flex-1" />
                      <input type="text" value="${d.dept||""}" placeholder="Prodi / Angkatan" class="kom-mem-dept text-xs p-1.5 bg-gray-50 border rounded-lg flex-1" />
                      <button type="button" onclick="removeAnggotaItem(${r}, ${i})" class="text-rose-600 text-xs px-1 font-bold">✕</button>
                    </div>
                    <div class="flex gap-2 items-center">
                      <input type="text" value="${d.avatar||""}" placeholder="URL Foto Anggota" class="kom-mem-avatar text-[11px] p-1.5 bg-gray-50 border rounded-lg flex-1" />
                      <input type="file" class="kom-mem-file text-[10px] text-gray-500 file:py-0.5 file:px-2 file:rounded file:border-0 file:bg-gray-200 cursor-pointer" accept="image/*" />
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        `).join(""))}window.removePresidiumItem=e=>{n.presidium.splice(e,1),m()},window.removeSekbenItem=e=>{n.sekben.splice(e,1),m()},window.removeKomisiItem=e=>{n.komisi.splice(e,1),m()},window.addAnggotaItem=e=>{n.komisi[e].anggota||(n.komisi[e].anggota=[]),n.komisi[e].anggota.push({name:"",dept:"",avatar:""}),m()},window.removeAnggotaItem=(e,o)=>{n.komisi[e].anggota.splice(o,1),m()},document.getElementById("add-presidium-btn")?.addEventListener("click",()=>{n.presidium||(n.presidium=[]),n.presidium.push({role:"Wakil Ketua",name:"",dept:"",avatar:""}),m()}),document.getElementById("add-sekben-btn")?.addEventListener("click",()=>{n.sekben||(n.sekben=[]),n.sekben.push({role:"Sekretaris",name:"",dept:"",avatar:""}),m()}),document.getElementById("add-komisi-btn")?.addEventListener("click",()=>{n.komisi||(n.komisi=[]);const e=n.komisi.length+1;n.komisi.push({id:`komisi-${e}`,code:`Komisi ${e}`,title:`Komisi Baru ${e}`,themeColor:e%2===0?"blue":"rose",ketua:{name:"",dept:"",avatar:""},anggota:[{name:"",dept:"",avatar:""}]}),m()}),l&&b&&l.addEventListener("submit",async e=>{e.preventDefault();const o=document.getElementById("pembina-title")?.value.trim()||"Pembina Organisasi",s=document.getElementById("pembina-name")?.value.trim()||"",t=document.getElementById("pembina-nip")?.value.trim()||"",r=document.getElementById("pembina-avatar")?.value.trim()||"",d=document.getElementById("pembina-file"),i=await g(d,r||n.pembina?.avatar||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"),y={title:o,name:s,nip:t,avatar:i},v=l.querySelectorAll(".pres-role"),x=l.querySelectorAll(".pres-name"),I=l.querySelectorAll(".pres-dept"),B=l.querySelectorAll(".pres-avatar"),D=l.querySelectorAll(".pres-file"),M=[];for(let a=0;a<v.length;a++)if(x[a]?.value.trim()){const c=await g(D[a],B[a]?.value.trim()||n.presidium?.[a]?.avatar||"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80");M.push({role:v[a].value.trim(),name:x[a].value.trim(),dept:I[a]?.value.trim()||"",avatar:c})}const U=l.querySelectorAll(".sb-role"),F=l.querySelectorAll(".sb-name"),_=l.querySelectorAll(".sb-dept"),H=l.querySelectorAll(".sb-avatar"),V=l.querySelectorAll(".sb-file"),T=[];for(let a=0;a<U.length;a++)if(F[a]?.value.trim()){const c=await g(V[a],H[a]?.value.trim()||n.sekben?.[a]?.avatar||"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80");T.push({role:U[a].value.trim(),name:F[a].value.trim(),dept:_[a]?.value.trim()||"",avatar:c})}const E=l.querySelectorAll(".kom-code"),z=l.querySelectorAll(".kom-title"),Z=l.querySelectorAll(".kom-ketua-name"),W=l.querySelectorAll(".kom-ketua-dept"),G=l.querySelectorAll(".kom-ketua-avatar"),Q=l.querySelectorAll(".kom-ketua-file"),j=[];for(let a=0;a<E.length;a++){const c=E[a].closest(".bg-white"),k=c?.querySelectorAll(".kom-mem-name"),X=c?.querySelectorAll(".kom-mem-dept"),Y=c?.querySelectorAll(".kom-mem-avatar"),ee=c?.querySelectorAll(".kom-mem-file"),te=await g(Q[a],G[a]?.value.trim()||n.komisi?.[a]?.ketua?.avatar||"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"),R=[];if(k){for(let u=0;u<k.length;u++)if(k[u].value.trim()){const oe=await g(ee[u],Y[u]?.value.trim()||n.komisi?.[a]?.anggota?.[u]?.avatar||"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80");R.push({name:k[u].value.trim(),dept:X?.[u]?.value.trim()||"",avatar:oe})}}j.push({id:n.komisi?.[a]?.id||`komisi-${a+1}`,code:E[a].value.trim(),title:z[a]?.value.trim()||"",themeColor:n.komisi?.[a]?.themeColor||(a%2===0?"rose":"blue"),ketua:{name:Z[a]?.value.trim()||"",dept:W[a]?.value.trim()||"",avatar:te},anggota:R})}await h({orgStructure:{pembina:y,presidium:M,sekben:T,komisi:j}}),b.close(),window.location.reload()})}w();document.addEventListener("astro:after-swap",w);document.addEventListener("astro:page-load",w);
