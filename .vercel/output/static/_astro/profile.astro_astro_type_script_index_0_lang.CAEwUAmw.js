function E(){const j=localStorage.getItem("isAdmin")==="true",A=localStorage.getItem("dmfk_settings");if(A)try{const e=JSON.parse(A);if(e.visi){const t=document.getElementById("profile-visi-text");t&&(t.textContent=e.visi)}if(e.misi&&Array.isArray(e.misi)){const t=document.getElementById("profile-misi-list");t&&(t.innerHTML=e.misi.map(l=>`
              <li class="flex items-start gap-3">
                <div class="bg-blue-100 p-1 rounded-full mt-1.5 shrink-0">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                </div>
                <span class="text-gray-600 text-base font-medium leading-normal">${l}</span>
              </li>
            `).join(""))}if(e.parliamentName){const t=document.getElementById("profile-parliament-name");t&&(t.textContent=e.parliamentName)}if(e.orgTitle){const t=document.getElementById("profile-org-title");t&&(t.textContent=e.orgTitle)}if(e.orgSubtitle){const t=document.getElementById("profile-org-subtitle");t&&(t.textContent=e.orgSubtitle)}if(e.orgBgImage){const t=document.getElementById("org-hero-bg");t&&(t.style.backgroundImage=`url('${e.orgBgImage}')`)}}catch{}document.querySelectorAll(".admin-only").forEach(e=>{j?e.classList.remove("hidden"):e.classList.add("hidden")});const S=document.getElementById("edit-profile-btn"),p=document.getElementById("profile-modal"),L=document.getElementById("close-profile-modal-btn"),$=document.getElementById("profile-form");S&&p&&S.addEventListener("click",()=>p.showModal()),L&&p&&L.addEventListener("click",()=>p.close());async function k(e){try{const l={...JSON.parse(localStorage.getItem("dmfk_settings")||"{}"),...e};return localStorage.setItem("dmfk_settings",JSON.stringify(l)),await fetch("/api/settings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).catch(()=>{}),!0}catch{return!0}}$&&p&&$.addEventListener("submit",async e=>{e.preventDefault();const t=document.getElementById("visi-input").value.trim(),o=document.getElementById("misi-input").value.split(`
`).map(r=>r.trim()).filter(r=>r);await k({visi:t,misi:o}),p.close(),window.location.reload()});async function c(e,t){const l=e?.files?.[0];return l?new Promise(o=>{const r=new FileReader;r.onload=()=>o(r.result),r.onerror=()=>o(t),r.readAsDataURL(l)}):t}function K(e){if(!e)return"";const t=e.trim(),l=t.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);if(l)return`https://lh3.googleusercontent.com/d/${l[1]}`;const o=t.match(/drive\.google\.com\/(?:open|uc)\?(?:.*&)?id=([a-zA-Z0-9_-]+)/);return o?`https://lh3.googleusercontent.com/d/${o[1]}`:t}const q=document.getElementById("edit-org-bg-btn"),g=document.getElementById("org-bg-modal"),N=document.getElementById("close-org-bg-modal-btn"),P=document.getElementById("org-bg-form");q&&g&&q.addEventListener("click",()=>g.showModal()),N&&g&&N.addEventListener("click",()=>g.close()),P&&g&&P.addEventListener("submit",async e=>{e.preventDefault();const t=document.getElementById("parliament-name-input")?.value.trim(),l=document.getElementById("parliament-logo-url-input")?.value.trim(),o=K(l),r=document.getElementById("parliament-logo-file-input"),u=await c(r,o),f=document.getElementById("org-title-input")?.value.trim(),h=document.getElementById("org-subtitle-input")?.value.trim(),v=document.getElementById("org-bg-url-input")?.value.trim(),y=K(v),I=document.getElementById("org-bg-file-input"),w=await c(I,y);await k({parliamentName:t||"Parlemen Nawa Cita 2026",parliamentLogo:u,orgTitle:f||"Struktur Kepengurusan 2026",orgSubtitle:h||"Pimpinan Utama, BPH, dan Komisi Operasional Organisasi DMFK UM",orgBgImage:w}),g.close(),window.location.reload()});const F=document.getElementById("edit-org-btn"),b=document.getElementById("org-modal"),M=document.getElementById("close-org-modal-btn"),i=document.getElementById("org-form");F&&b&&F.addEventListener("click",()=>{s(),b.showModal()}),M&&b&&M.addEventListener("click",()=>b.close());let n=i?JSON.parse(i.getAttribute("data-org")||"{}"):{};function s(){if(!i)return;const e=document.getElementById("presidium-inputs-container");e&&(e.innerHTML=(n.presidium||[]).map((o,r)=>`
          <div class="bg-white p-3.5 rounded-xl border border-gray-200 space-y-2">
            <div class="flex items-center gap-2">
              <input type="text" value="${o.role||""}" placeholder="Jabatan (e.g. Ketua Umum)" class="pres-role font-bold text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="text" value="${o.name||""}" placeholder="Nama Lengkap" class="pres-name font-bold text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="text" value="${o.dept||""}" placeholder="Prodi / Angkatan" class="pres-dept text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <button type="button" onclick="removePresidiumItem(${r})" class="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg font-bold">✕</button>
            </div>
            <div class="flex items-center gap-2">
              <input type="text" value="${o.avatar||""}" placeholder="URL Foto Personil" class="pres-avatar text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="file" class="pres-file text-[11px] text-gray-500 file:py-1 file:px-2 file:rounded file:border-0 file:bg-gray-200 cursor-pointer" accept="image/*" />
            </div>
          </div>
        `).join(""));const t=document.getElementById("sekben-inputs-container");t&&(t.innerHTML=(n.sekben||[]).map((o,r)=>`
          <div class="bg-white p-3.5 rounded-xl border border-gray-200 space-y-2">
            <div class="flex items-center gap-2">
              <input type="text" value="${o.role||""}" placeholder="Jabatan (e.g. Bendahara)" class="sb-role font-bold text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="text" value="${o.name||""}" placeholder="Nama Lengkap" class="sb-name font-bold text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="text" value="${o.dept||""}" placeholder="Prodi / Angkatan" class="sb-dept text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <button type="button" onclick="removeSekbenItem(${r})" class="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg font-bold">✕</button>
            </div>
            <div class="flex items-center gap-2">
              <input type="text" value="${o.avatar||""}" placeholder="URL Foto Personil" class="sb-avatar text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="file" class="sb-file text-[11px] text-gray-500 file:py-1 file:px-2 file:rounded file:border-0 file:bg-gray-200 cursor-pointer" accept="image/*" />
            </div>
          </div>
        `).join(""));const l=document.getElementById("komisi-inputs-container");l&&(l.innerHTML=(n.komisi||[]).map((o,r)=>`
          <div class="bg-white p-4 rounded-xl border border-gray-300 space-y-3">
            <div class="flex justify-between items-center bg-rose-50/50 p-2 rounded-lg">
              <span class="font-extrabold text-xs text-rose-700">${o.code||"Komisi"}</span>
              <button type="button" onclick="removeKomisiItem(${r})" class="text-xs text-rose-600 font-bold hover:underline">Hapus Komisi</button>
            </div>
            <div class="grid grid-cols-2 gap-2">
              <input type="text" value="${o.code||""}" placeholder="Kode (e.g. Komisi I)" class="kom-code font-bold text-xs p-2 bg-gray-50 border rounded-lg" />
              <input type="text" value="${o.title||""}" placeholder="Nama Komisi" class="kom-title font-bold text-xs p-2 bg-gray-50 border rounded-lg" />
            </div>

            <!-- Ketua Komisi -->
            <div class="p-2.5 bg-gray-50 rounded-lg border space-y-2">
              <span class="text-[10px] font-bold text-gray-500 block">Ketua Komisi</span>
              <div class="grid grid-cols-2 gap-2">
                <input type="text" value="${o.ketua?.name||""}" placeholder="Nama Ketua Komisi" class="kom-ketua-name font-bold text-xs p-2 bg-white border rounded-lg" />
                <input type="text" value="${o.ketua?.dept||""}" placeholder="Prodi / Angkatan" class="kom-ketua-dept text-xs p-2 bg-white border rounded-lg" />
              </div>
              <div class="flex items-center gap-2">
                <input type="text" value="${o.ketua?.avatar||""}" placeholder="URL Foto Ketua Komisi" class="kom-ketua-avatar text-xs p-2 bg-white border rounded-lg flex-1" />
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
                ${(o.anggota||[]).map((u,f)=>`
                  <div class="p-2 bg-white rounded-lg border border-gray-200 space-y-1">
                    <div class="flex gap-2 items-center">
                      <input type="text" value="${u.name||""}" placeholder="Nama Anggota" class="kom-mem-name font-bold text-xs p-1.5 bg-gray-50 border rounded-lg flex-1" />
                      <input type="text" value="${u.dept||""}" placeholder="Prodi / Angkatan" class="kom-mem-dept text-xs p-1.5 bg-gray-50 border rounded-lg flex-1" />
                      <button type="button" onclick="removeAnggotaItem(${r}, ${f})" class="text-rose-600 text-xs px-1 font-bold">✕</button>
                    </div>
                    <div class="flex gap-2 items-center">
                      <input type="text" value="${u.avatar||""}" placeholder="URL Foto Anggota" class="kom-mem-avatar text-[11px] p-1.5 bg-gray-50 border rounded-lg flex-1" />
                      <input type="file" class="kom-mem-file text-[10px] text-gray-500 file:py-0.5 file:px-2 file:rounded file:border-0 file:bg-gray-200 cursor-pointer" accept="image/*" />
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        `).join(""))}window.removePresidiumItem=e=>{n.presidium.splice(e,1),s()},window.removeSekbenItem=e=>{n.sekben.splice(e,1),s()},window.removeKomisiItem=e=>{n.komisi.splice(e,1),s()},window.addAnggotaItem=e=>{n.komisi[e].anggota||(n.komisi[e].anggota=[]),n.komisi[e].anggota.push({name:"",dept:"",avatar:""}),s()},window.removeAnggotaItem=(e,t)=>{n.komisi[e].anggota.splice(t,1),s()},document.getElementById("add-presidium-btn")?.addEventListener("click",()=>{n.presidium||(n.presidium=[]),n.presidium.push({role:"Wakil Ketua",name:"",dept:"",avatar:""}),s()}),document.getElementById("add-sekben-btn")?.addEventListener("click",()=>{n.sekben||(n.sekben=[]),n.sekben.push({role:"Sekretaris",name:"",dept:"",avatar:""}),s()}),document.getElementById("add-komisi-btn")?.addEventListener("click",()=>{n.komisi||(n.komisi=[]);const e=n.komisi.length+1;n.komisi.push({id:`komisi-${e}`,code:`Komisi ${e}`,title:`Komisi Baru ${e}`,themeColor:e%2===0?"blue":"rose",ketua:{name:"",dept:"",avatar:""},anggota:[{name:"",dept:"",avatar:""}]}),s()}),i&&b&&i.addEventListener("submit",async e=>{e.preventDefault();const t=document.getElementById("pembina-title")?.value.trim()||"Pembina Organisasi",l=document.getElementById("pembina-name")?.value.trim()||"",o=document.getElementById("pembina-nip")?.value.trim()||"",r=document.getElementById("pembina-avatar")?.value.trim()||"",u=document.getElementById("pembina-file"),f=await c(u,r||n.pembina?.avatar||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"),h={title:t,name:l,nip:o,avatar:f},v=i.querySelectorAll(".pres-role"),y=i.querySelectorAll(".pres-name"),I=i.querySelectorAll(".pres-dept"),w=i.querySelectorAll(".pres-avatar"),J=i.querySelectorAll(".pres-file"),O=[];for(let a=0;a<v.length;a++)if(y[a]?.value.trim()){const d=await c(J[a],w[a]?.value.trim()||n.presidium?.[a]?.avatar||"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80");O.push({role:v[a].value.trim(),name:y[a].value.trim(),dept:I[a]?.value.trim()||"",avatar:d})}const C=i.querySelectorAll(".sb-role"),U=i.querySelectorAll(".sb-name"),H=i.querySelectorAll(".sb-dept"),_=i.querySelectorAll(".sb-avatar"),V=i.querySelectorAll(".sb-file"),D=[];for(let a=0;a<C.length;a++)if(U[a]?.value.trim()){const d=await c(V[a],_[a]?.value.trim()||n.sekben?.[a]?.avatar||"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80");D.push({role:C[a].value.trim(),name:U[a].value.trim(),dept:H[a]?.value.trim()||"",avatar:d})}const B=i.querySelectorAll(".kom-code"),z=i.querySelectorAll(".kom-title"),Z=i.querySelectorAll(".kom-ketua-name"),W=i.querySelectorAll(".kom-ketua-dept"),G=i.querySelectorAll(".kom-ketua-avatar"),Q=i.querySelectorAll(".kom-ketua-file"),T=[];for(let a=0;a<B.length;a++){const d=B[a].closest(".bg-white"),x=d?.querySelectorAll(".kom-mem-name"),X=d?.querySelectorAll(".kom-mem-dept"),Y=d?.querySelectorAll(".kom-mem-avatar"),ee=d?.querySelectorAll(".kom-mem-file"),te=await c(Q[a],G[a]?.value.trim()||n.komisi?.[a]?.ketua?.avatar||"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"),R=[];if(x){for(let m=0;m<x.length;m++)if(x[m].value.trim()){const ae=await c(ee[m],Y[m]?.value.trim()||n.komisi?.[a]?.anggota?.[m]?.avatar||"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80");R.push({name:x[m].value.trim(),dept:X?.[m]?.value.trim()||"",avatar:ae})}}T.push({id:n.komisi?.[a]?.id||`komisi-${a+1}`,code:B[a].value.trim(),title:z[a]?.value.trim()||"",themeColor:n.komisi?.[a]?.themeColor||(a%2===0?"rose":"blue"),ketua:{name:Z[a]?.value.trim()||"",dept:W[a]?.value.trim()||"",avatar:te},anggota:R})}await k({orgStructure:{pembina:h,presidium:O,sekben:D,komisi:T}}),b.close(),window.location.reload()})}E();document.addEventListener("astro:after-swap",E);document.addEventListener("astro:page-load",E);
