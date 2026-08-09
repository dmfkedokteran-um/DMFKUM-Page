function w(){const R=localStorage.getItem("isAdmin")==="true",A=localStorage.getItem("dmfk_settings");if(A)try{const e=JSON.parse(A);if(e.visi){const t=document.getElementById("profile-visi-text");t&&(t.textContent=e.visi)}if(e.misi&&Array.isArray(e.misi)){const t=document.getElementById("profile-misi-list");t&&(t.innerHTML=e.misi.map(a=>`
              <li class="flex items-start gap-3">
                <div class="bg-blue-100 p-1 rounded-full mt-1.5 shrink-0">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                </div>
                <span class="text-gray-600 text-base font-medium leading-normal">${a}</span>
              </li>
            `).join(""))}if(e.parliamentName){const t=document.getElementById("profile-parliament-name");t&&(t.textContent=e.parliamentName)}if(e.orgTitle){const t=document.getElementById("profile-org-title");t&&(t.textContent=e.orgTitle)}if(e.orgSubtitle){const t=document.getElementById("profile-org-subtitle");t&&(t.textContent=e.orgSubtitle)}if(e.orgBgImage){const t=document.getElementById("org-hero-bg");t&&(t.style.backgroundImage=`url('${e.orgBgImage}')`)}}catch{}document.querySelectorAll(".admin-only").forEach(e=>{R?e.classList.remove("hidden"):e.classList.add("hidden")});const S=document.getElementById("edit-profile-btn"),p=document.getElementById("profile-modal"),L=document.getElementById("close-profile-modal-btn"),$=document.getElementById("profile-form");S&&p&&S.addEventListener("click",()=>p.showModal()),L&&p&&L.addEventListener("click",()=>p.close());async function h(e){try{const a={...JSON.parse(localStorage.getItem("dmfk_settings")||"{}"),...e};return localStorage.setItem("dmfk_settings",JSON.stringify(a)),await fetch("/api/settings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).catch(()=>{}),!0}catch{return!0}}fetch("/api/settings").then(e=>e.ok?e.json():null).then(e=>{if(e&&typeof e=="object"){const a={...JSON.parse(localStorage.getItem("dmfk_settings")||"{}"),...e},n=localStorage.getItem("dmfk_settings"),l=JSON.stringify(a);if(l!==n){if(localStorage.setItem("dmfk_settings",l),a.visi){const i=document.getElementById("visi-text");i&&(i.textContent=`"${a.visi}"`)}if(Array.isArray(a.misi)&&a.misi.length>0){const i=document.getElementById("misi-container");i&&(i.innerHTML=a.misi.map((g,v)=>`
                  <div class="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/80 border border-gray-100 hover:bg-white hover:shadow-md transition-all group">
                    <span class="flex shrink-0 w-9 h-9 rounded-xl bg-rose-100 text-rose-700 font-extrabold flex items-center justify-center text-base group-hover:scale-110 transition-transform">0${v+1}</span>
                    <p class="text-gray-700 font-medium leading-relaxed my-auto text-base sm:text-lg">${g}</p>
                  </div>
                `).join(""))}if(a.parliamentName){const i=document.getElementById("parliament-name-text");i&&(i.textContent=a.parliamentName)}if(a.parliamentLogo){const i=document.getElementById("parliament-logo-img");i&&(i.src=a.parliamentLogo)}if(a.orgTitle){const i=document.getElementById("org-title-text");i&&(i.textContent=a.orgTitle)}if(a.orgSubtitle){const i=document.getElementById("org-subtitle-text");i&&(i.textContent=a.orgSubtitle)}if(a.orgBgUrl){const i=document.getElementById("org-bg-container");i&&(i.style.backgroundImage=`url('${a.orgBgUrl}')`)}}}}).catch(()=>{}),$&&p&&$.addEventListener("submit",async e=>{e.preventDefault();const t=document.getElementById("visi-input").value.trim(),n=document.getElementById("misi-input").value.split(`
`).map(l=>l.trim()).filter(l=>l);await h({visi:t,misi:n}),p.close(),window.location.reload()});async function u(e,t){const a=e?.files?.[0];return a?new Promise(n=>{const l=new FileReader;l.onload=()=>n(l.result),l.onerror=()=>n(t),l.readAsDataURL(a)}):t}function K(e){if(!e)return"";const t=e.trim(),a=t.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);if(a)return`https://lh3.googleusercontent.com/d/${a[1]}`;const n=t.match(/drive\.google\.com\/(?:open|uc)\?(?:.*&)?id=([a-zA-Z0-9_-]+)/);return n?`https://lh3.googleusercontent.com/d/${n[1]}`:t}const q=document.getElementById("edit-org-bg-btn"),f=document.getElementById("org-bg-modal"),N=document.getElementById("close-org-bg-modal-btn"),C=document.getElementById("org-bg-form");q&&f&&q.addEventListener("click",()=>f.showModal()),N&&f&&N.addEventListener("click",()=>f.close()),C&&f&&C.addEventListener("submit",async e=>{e.preventDefault();const t=document.getElementById("parliament-name-input")?.value.trim(),a=document.getElementById("parliament-logo-url-input")?.value.trim(),n=K(a),l=document.getElementById("parliament-logo-file-input"),i=await u(l,n),g=document.getElementById("org-title-input")?.value.trim(),v=document.getElementById("org-subtitle-input")?.value.trim(),y=document.getElementById("org-bg-url-input")?.value.trim(),x=K(y),I=document.getElementById("org-bg-file-input"),B=await u(I,x);await h({parliamentName:t||"Parlemen Nawa Cita 2026",parliamentLogo:i,orgTitle:g||"Struktur Kepengurusan 2026",orgSubtitle:v||"Pimpinan Utama, BPH, dan Komisi Operasional Organisasi DMFK UM",orgBgImage:B}),f.close(),window.location.reload()});const P=document.getElementById("edit-org-btn"),b=document.getElementById("org-modal"),O=document.getElementById("close-org-modal-btn"),s=document.getElementById("org-form");P&&b&&P.addEventListener("click",()=>{d(),b.showModal()}),O&&b&&O.addEventListener("click",()=>b.close());let r=s?JSON.parse(s.getAttribute("data-org")||"{}"):{};function d(){if(!s)return;const e=document.getElementById("presidium-inputs-container");e&&(e.innerHTML=(r.presidium||[]).map((n,l)=>`
          <div class="bg-white p-3.5 rounded-xl border border-gray-200 space-y-2">
            <div class="flex items-center gap-2">
              <input type="text" value="${n.role||""}" placeholder="Jabatan (e.g. Ketua Umum)" class="pres-role font-bold text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="text" value="${n.name||""}" placeholder="Nama Lengkap" class="pres-name font-bold text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="text" value="${n.dept||""}" placeholder="Prodi / Angkatan" class="pres-dept text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <button type="button" onclick="removePresidiumItem(${l})" class="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg font-bold">✕</button>
            </div>
            <div class="flex items-center gap-2">
              <input type="text" value="${n.avatar||""}" placeholder="URL Foto Personil" class="pres-avatar text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="file" class="pres-file text-[11px] text-gray-500 file:py-1 file:px-2 file:rounded file:border-0 file:bg-gray-200 cursor-pointer" accept="image/*" />
            </div>
          </div>
        `).join(""));const t=document.getElementById("sekben-inputs-container");t&&(t.innerHTML=(r.sekben||[]).map((n,l)=>`
          <div class="bg-white p-3.5 rounded-xl border border-gray-200 space-y-2">
            <div class="flex items-center gap-2">
              <input type="text" value="${n.role||""}" placeholder="Jabatan (e.g. Bendahara)" class="sb-role font-bold text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="text" value="${n.name||""}" placeholder="Nama Lengkap" class="sb-name font-bold text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="text" value="${n.dept||""}" placeholder="Prodi / Angkatan" class="sb-dept text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <button type="button" onclick="removeSekbenItem(${l})" class="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg font-bold">✕</button>
            </div>
            <div class="flex items-center gap-2">
              <input type="text" value="${n.avatar||""}" placeholder="URL Foto Personil" class="sb-avatar text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="file" class="sb-file text-[11px] text-gray-500 file:py-1 file:px-2 file:rounded file:border-0 file:bg-gray-200 cursor-pointer" accept="image/*" />
            </div>
          </div>
        `).join(""));const a=document.getElementById("komisi-inputs-container");a&&(a.innerHTML=(r.komisi||[]).map((n,l)=>`
          <div class="bg-white p-4 rounded-xl border border-gray-300 space-y-3">
            <div class="flex justify-between items-center bg-rose-50/50 p-2 rounded-lg">
              <span class="font-extrabold text-xs text-rose-700">${n.code||"Komisi"}</span>
              <button type="button" onclick="removeKomisiItem(${l})" class="text-xs text-rose-600 font-bold hover:underline">Hapus Komisi</button>
            </div>
            <div class="grid grid-cols-2 gap-2">
              <input type="text" value="${n.code||""}" placeholder="Kode (e.g. Komisi I)" class="kom-code font-bold text-xs p-2 bg-gray-50 border rounded-lg" />
              <input type="text" value="${n.title||""}" placeholder="Nama Komisi" class="kom-title font-bold text-xs p-2 bg-gray-50 border rounded-lg" />
            </div>

            <!-- Ketua Komisi -->
            <div class="p-2.5 bg-gray-50 rounded-lg border space-y-2">
              <span class="text-[10px] font-bold text-gray-500 block">Ketua Komisi</span>
              <div class="grid grid-cols-2 gap-2">
                <input type="text" value="${n.ketua?.name||""}" placeholder="Nama Ketua Komisi" class="kom-ketua-name font-bold text-xs p-2 bg-white border rounded-lg" />
                <input type="text" value="${n.ketua?.dept||""}" placeholder="Prodi / Angkatan" class="kom-ketua-dept text-xs p-2 bg-white border rounded-lg" />
              </div>
              <div class="flex items-center gap-2">
                <input type="text" value="${n.ketua?.avatar||""}" placeholder="URL Foto Ketua Komisi" class="kom-ketua-avatar text-xs p-2 bg-white border rounded-lg flex-1" />
                <input type="file" class="kom-ketua-file text-[11px] text-gray-500 file:py-1 file:px-2 file:rounded file:border-0 file:bg-gray-200 cursor-pointer" accept="image/*" />
              </div>
            </div>

            <!-- Anggota Komisi -->
            <div class="p-2.5 bg-gray-50/80 rounded-lg border space-y-2">
              <div class="flex justify-between items-center">
                <span class="text-[10px] font-bold text-gray-500">Daftar Anggota Komisi</span>
                <button type="button" onclick="addAnggotaItem(${l})" class="text-[10px] font-bold bg-gray-200 hover:bg-gray-300 px-2 py-0.5 rounded">+ Tambah Anggota</button>
              </div>
              <div class="space-y-2">
                ${(n.anggota||[]).map((i,g)=>`
                  <div class="p-2 bg-white rounded-lg border border-gray-200 space-y-1">
                    <div class="flex gap-2 items-center">
                      <input type="text" value="${i.name||""}" placeholder="Nama Anggota" class="kom-mem-name font-bold text-xs p-1.5 bg-gray-50 border rounded-lg flex-1" />
                      <input type="text" value="${i.dept||""}" placeholder="Prodi / Angkatan" class="kom-mem-dept text-xs p-1.5 bg-gray-50 border rounded-lg flex-1" />
                      <button type="button" onclick="removeAnggotaItem(${l}, ${g})" class="text-rose-600 text-xs px-1 font-bold">✕</button>
                    </div>
                    <div class="flex gap-2 items-center">
                      <input type="text" value="${i.avatar||""}" placeholder="URL Foto Anggota" class="kom-mem-avatar text-[11px] p-1.5 bg-gray-50 border rounded-lg flex-1" />
                      <input type="file" class="kom-mem-file text-[10px] text-gray-500 file:py-0.5 file:px-2 file:rounded file:border-0 file:bg-gray-200 cursor-pointer" accept="image/*" />
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        `).join(""))}window.removePresidiumItem=e=>{r.presidium.splice(e,1),d()},window.removeSekbenItem=e=>{r.sekben.splice(e,1),d()},window.removeKomisiItem=e=>{r.komisi.splice(e,1),d()},window.addAnggotaItem=e=>{r.komisi[e].anggota||(r.komisi[e].anggota=[]),r.komisi[e].anggota.push({name:"",dept:"",avatar:""}),d()},window.removeAnggotaItem=(e,t)=>{r.komisi[e].anggota.splice(t,1),d()},document.getElementById("add-presidium-btn")?.addEventListener("click",()=>{r.presidium||(r.presidium=[]),r.presidium.push({role:"Wakil Ketua",name:"",dept:"",avatar:""}),d()}),document.getElementById("add-sekben-btn")?.addEventListener("click",()=>{r.sekben||(r.sekben=[]),r.sekben.push({role:"Sekretaris",name:"",dept:"",avatar:""}),d()}),document.getElementById("add-komisi-btn")?.addEventListener("click",()=>{r.komisi||(r.komisi=[]);const e=r.komisi.length+1;r.komisi.push({id:`komisi-${e}`,code:`Komisi ${e}`,title:`Komisi Baru ${e}`,themeColor:e%2===0?"blue":"rose",ketua:{name:"",dept:"",avatar:""},anggota:[{name:"",dept:"",avatar:""}]}),d()}),s&&b&&s.addEventListener("submit",async e=>{e.preventDefault();const t=document.getElementById("pembina-title")?.value.trim()||"Pembina Organisasi",a=document.getElementById("pembina-name")?.value.trim()||"",n=document.getElementById("pembina-nip")?.value.trim()||"",l=document.getElementById("pembina-avatar")?.value.trim()||"",i=document.getElementById("pembina-file"),g=await u(i,l||r.pembina?.avatar||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"),v={title:t,name:a,nip:n,avatar:g},y=s.querySelectorAll(".pres-role"),x=s.querySelectorAll(".pres-name"),I=s.querySelectorAll(".pres-dept"),B=s.querySelectorAll(".pres-avatar"),J=s.querySelectorAll(".pres-file"),M=[];for(let o=0;o<y.length;o++)if(x[o]?.value.trim()){const m=await u(J[o],B[o]?.value.trim()||r.presidium?.[o]?.avatar||"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80");M.push({role:y[o].value.trim(),name:x[o].value.trim(),dept:I[o]?.value.trim()||"",avatar:m})}const U=s.querySelectorAll(".sb-role"),F=s.querySelectorAll(".sb-name"),_=s.querySelectorAll(".sb-dept"),H=s.querySelectorAll(".sb-avatar"),V=s.querySelectorAll(".sb-file"),T=[];for(let o=0;o<U.length;o++)if(F[o]?.value.trim()){const m=await u(V[o],H[o]?.value.trim()||r.sekben?.[o]?.avatar||"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80");T.push({role:U[o].value.trim(),name:F[o].value.trim(),dept:_[o]?.value.trim()||"",avatar:m})}const E=s.querySelectorAll(".kom-code"),z=s.querySelectorAll(".kom-title"),Z=s.querySelectorAll(".kom-ketua-name"),W=s.querySelectorAll(".kom-ketua-dept"),G=s.querySelectorAll(".kom-ketua-avatar"),Q=s.querySelectorAll(".kom-ketua-file"),j=[];for(let o=0;o<E.length;o++){const m=E[o].closest(".bg-white"),k=m?.querySelectorAll(".kom-mem-name"),X=m?.querySelectorAll(".kom-mem-dept"),Y=m?.querySelectorAll(".kom-mem-avatar"),ee=m?.querySelectorAll(".kom-mem-file"),te=await u(Q[o],G[o]?.value.trim()||r.komisi?.[o]?.ketua?.avatar||"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"),D=[];if(k){for(let c=0;c<k.length;c++)if(k[c].value.trim()){const oe=await u(ee[c],Y[c]?.value.trim()||r.komisi?.[o]?.anggota?.[c]?.avatar||"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80");D.push({name:k[c].value.trim(),dept:X?.[c]?.value.trim()||"",avatar:oe})}}j.push({id:r.komisi?.[o]?.id||`komisi-${o+1}`,code:E[o].value.trim(),title:z[o]?.value.trim()||"",themeColor:r.komisi?.[o]?.themeColor||(o%2===0?"rose":"blue"),ketua:{name:Z[o]?.value.trim()||"",dept:W[o]?.value.trim()||"",avatar:te},anggota:D})}await h({orgStructure:{pembina:v,presidium:M,sekben:T,komisi:j}}),b.close(),window.location.reload()})}w();document.addEventListener("astro:after-swap",w);document.addEventListener("astro:page-load",w);
