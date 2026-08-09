function w(){const D=localStorage.getItem("isAdmin")==="true",B=localStorage.getItem("dmfk_settings");if(B)try{const e=JSON.parse(B);if(e.visi){const a=document.getElementById("profile-visi-text");a&&(a.textContent=e.visi)}if(e.misi&&Array.isArray(e.misi)){const a=document.getElementById("profile-misi-list");a&&(a.innerHTML=e.misi.map(l=>`
              <li class="flex items-start gap-3">
                <div class="bg-blue-100 p-1 rounded-full mt-1.5 shrink-0">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                </div>
                <span class="text-gray-600 text-base font-medium leading-normal">${l}</span>
              </li>
            `).join(""))}if(e.parliamentName){const a=document.getElementById("profile-parliament-name");a&&(a.textContent=e.parliamentName)}if(e.orgTitle){const a=document.getElementById("profile-org-title");a&&(a.textContent=e.orgTitle)}if(e.orgSubtitle){const a=document.getElementById("profile-org-subtitle");a&&(a.textContent=e.orgSubtitle)}if(e.orgBgImage){const a=document.getElementById("org-hero-bg");a&&(a.style.backgroundImage=`url('${e.orgBgImage}')`)}}catch{}document.querySelectorAll(".admin-only").forEach(e=>{D?e.classList.remove("hidden"):e.classList.add("hidden")});const E=document.getElementById("edit-profile-btn"),p=document.getElementById("profile-modal"),A=document.getElementById("close-profile-modal-btn"),S=document.getElementById("profile-form");E&&p&&E.addEventListener("click",()=>p.showModal()),A&&p&&A.addEventListener("click",()=>p.close());async function k(e){try{const l={...JSON.parse(localStorage.getItem("dmfk_settings")||"{}"),...e};return localStorage.setItem("dmfk_settings",JSON.stringify(l)),await fetch("/api/settings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).catch(()=>{}),!0}catch{return!0}}S&&p&&S.addEventListener("submit",async e=>{e.preventDefault();const a=document.getElementById("visi-input").value.trim(),i=document.getElementById("misi-input").value.split(`
`).map(r=>r.trim()).filter(r=>r);await k({visi:a,misi:i}),p.close(),window.location.reload()});async function u(e,a){const l=e?.files?.[0];if(!l)return a;const i=new FormData;i.append("file",l);try{const r=await fetch("/api/upload",{method:"POST",body:i});if(r.ok)return(await r.json()).fileUrl||a}catch(r){console.error("File upload failed",r)}return a}const L=document.getElementById("edit-org-bg-btn"),g=document.getElementById("org-bg-modal"),$=document.getElementById("close-org-bg-modal-btn"),K=document.getElementById("org-bg-form");L&&g&&L.addEventListener("click",()=>g.showModal()),$&&g&&$.addEventListener("click",()=>g.close()),K&&g&&K.addEventListener("submit",async e=>{e.preventDefault();const a=document.getElementById("parliament-name-input")?.value.trim(),l=document.getElementById("parliament-logo-url-input")?.value.trim(),i=document.getElementById("parliament-logo-file-input"),r=await u(i,l),d=document.getElementById("org-title-input")?.value.trim(),f=document.getElementById("org-subtitle-input")?.value.trim(),h=document.getElementById("org-bg-url-input")?.value.trim(),v=document.getElementById("org-bg-file-input"),y=await u(v,h);await k({parliamentName:a||"Parlemen Nawa Cita 2026",parliamentLogo:r,orgTitle:d||"Struktur Kepengurusan 2026",orgSubtitle:f||"Pimpinan Utama, BPH, dan Komisi Operasional Organisasi DMFK UM",orgBgImage:y}),g.close(),window.location.reload()});const q=document.getElementById("edit-org-btn"),b=document.getElementById("org-modal"),N=document.getElementById("close-org-modal-btn"),n=document.getElementById("org-form");q&&b&&q.addEventListener("click",()=>{s(),b.showModal()}),N&&b&&N.addEventListener("click",()=>b.close());let o=n?JSON.parse(n.getAttribute("data-org")||"{}"):{};function s(){if(!n)return;const e=document.getElementById("presidium-inputs-container");e&&(e.innerHTML=(o.presidium||[]).map((i,r)=>`
          <div class="bg-white p-3.5 rounded-xl border border-gray-200 space-y-2">
            <div class="flex items-center gap-2">
              <input type="text" value="${i.role||""}" placeholder="Jabatan (e.g. Ketua Umum)" class="pres-role font-bold text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="text" value="${i.name||""}" placeholder="Nama Lengkap" class="pres-name font-bold text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="text" value="${i.dept||""}" placeholder="Prodi / Angkatan" class="pres-dept text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <button type="button" onclick="removePresidiumItem(${r})" class="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg font-bold">✕</button>
            </div>
            <div class="flex items-center gap-2">
              <input type="text" value="${i.avatar||""}" placeholder="URL Foto Personil" class="pres-avatar text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="file" class="pres-file text-[11px] text-gray-500 file:py-1 file:px-2 file:rounded file:border-0 file:bg-gray-200 cursor-pointer" accept="image/*" />
            </div>
          </div>
        `).join(""));const a=document.getElementById("sekben-inputs-container");a&&(a.innerHTML=(o.sekben||[]).map((i,r)=>`
          <div class="bg-white p-3.5 rounded-xl border border-gray-200 space-y-2">
            <div class="flex items-center gap-2">
              <input type="text" value="${i.role||""}" placeholder="Jabatan (e.g. Bendahara)" class="sb-role font-bold text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="text" value="${i.name||""}" placeholder="Nama Lengkap" class="sb-name font-bold text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="text" value="${i.dept||""}" placeholder="Prodi / Angkatan" class="sb-dept text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <button type="button" onclick="removeSekbenItem(${r})" class="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg font-bold">✕</button>
            </div>
            <div class="flex items-center gap-2">
              <input type="text" value="${i.avatar||""}" placeholder="URL Foto Personil" class="sb-avatar text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="file" class="sb-file text-[11px] text-gray-500 file:py-1 file:px-2 file:rounded file:border-0 file:bg-gray-200 cursor-pointer" accept="image/*" />
            </div>
          </div>
        `).join(""));const l=document.getElementById("komisi-inputs-container");l&&(l.innerHTML=(o.komisi||[]).map((i,r)=>`
          <div class="bg-white p-4 rounded-xl border border-gray-300 space-y-3">
            <div class="flex justify-between items-center bg-rose-50/50 p-2 rounded-lg">
              <span class="font-extrabold text-xs text-rose-700">${i.code||"Komisi"}</span>
              <button type="button" onclick="removeKomisiItem(${r})" class="text-xs text-rose-600 font-bold hover:underline">Hapus Komisi</button>
            </div>
            <div class="grid grid-cols-2 gap-2">
              <input type="text" value="${i.code||""}" placeholder="Kode (e.g. Komisi I)" class="kom-code font-bold text-xs p-2 bg-gray-50 border rounded-lg" />
              <input type="text" value="${i.title||""}" placeholder="Nama Komisi" class="kom-title font-bold text-xs p-2 bg-gray-50 border rounded-lg" />
            </div>

            <!-- Ketua Komisi -->
            <div class="p-2.5 bg-gray-50 rounded-lg border space-y-2">
              <span class="text-[10px] font-bold text-gray-500 block">Ketua Komisi</span>
              <div class="grid grid-cols-2 gap-2">
                <input type="text" value="${i.ketua?.name||""}" placeholder="Nama Ketua Komisi" class="kom-ketua-name font-bold text-xs p-2 bg-white border rounded-lg" />
                <input type="text" value="${i.ketua?.dept||""}" placeholder="Prodi / Angkatan" class="kom-ketua-dept text-xs p-2 bg-white border rounded-lg" />
              </div>
              <div class="flex items-center gap-2">
                <input type="text" value="${i.ketua?.avatar||""}" placeholder="URL Foto Ketua Komisi" class="kom-ketua-avatar text-xs p-2 bg-white border rounded-lg flex-1" />
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
                ${(i.anggota||[]).map((d,f)=>`
                  <div class="p-2 bg-white rounded-lg border border-gray-200 space-y-1">
                    <div class="flex gap-2 items-center">
                      <input type="text" value="${d.name||""}" placeholder="Nama Anggota" class="kom-mem-name font-bold text-xs p-1.5 bg-gray-50 border rounded-lg flex-1" />
                      <input type="text" value="${d.dept||""}" placeholder="Prodi / Angkatan" class="kom-mem-dept text-xs p-1.5 bg-gray-50 border rounded-lg flex-1" />
                      <button type="button" onclick="removeAnggotaItem(${r}, ${f})" class="text-rose-600 text-xs px-1 font-bold">✕</button>
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
        `).join(""))}window.removePresidiumItem=e=>{o.presidium.splice(e,1),s()},window.removeSekbenItem=e=>{o.sekben.splice(e,1),s()},window.removeKomisiItem=e=>{o.komisi.splice(e,1),s()},window.addAnggotaItem=e=>{o.komisi[e].anggota||(o.komisi[e].anggota=[]),o.komisi[e].anggota.push({name:"",dept:"",avatar:""}),s()},window.removeAnggotaItem=(e,a)=>{o.komisi[e].anggota.splice(a,1),s()},document.getElementById("add-presidium-btn")?.addEventListener("click",()=>{o.presidium||(o.presidium=[]),o.presidium.push({role:"Wakil Ketua",name:"",dept:"",avatar:""}),s()}),document.getElementById("add-sekben-btn")?.addEventListener("click",()=>{o.sekben||(o.sekben=[]),o.sekben.push({role:"Sekretaris",name:"",dept:"",avatar:""}),s()}),document.getElementById("add-komisi-btn")?.addEventListener("click",()=>{o.komisi||(o.komisi=[]);const e=o.komisi.length+1;o.komisi.push({id:`komisi-${e}`,code:`Komisi ${e}`,title:`Komisi Baru ${e}`,themeColor:e%2===0?"blue":"rose",ketua:{name:"",dept:"",avatar:""},anggota:[{name:"",dept:"",avatar:""}]}),s()}),n&&b&&n.addEventListener("submit",async e=>{e.preventDefault();const a=document.getElementById("pembina-title")?.value.trim()||"Pembina Organisasi",l=document.getElementById("pembina-name")?.value.trim()||"",i=document.getElementById("pembina-nip")?.value.trim()||"",r=document.getElementById("pembina-avatar")?.value.trim()||"",d=document.getElementById("pembina-file"),f=await u(d,r||o.pembina?.avatar||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"),h={title:a,name:l,nip:i,avatar:f},v=n.querySelectorAll(".pres-role"),y=n.querySelectorAll(".pres-name"),U=n.querySelectorAll(".pres-dept"),j=n.querySelectorAll(".pres-avatar"),R=n.querySelectorAll(".pres-file"),P=[];for(let t=0;t<v.length;t++)if(y[t]?.value.trim()){const m=await u(R[t],j[t]?.value.trim()||o.presidium?.[t]?.avatar||"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80");P.push({role:v[t].value.trim(),name:y[t].value.trim(),dept:U[t]?.value.trim()||"",avatar:m})}const F=n.querySelectorAll(".sb-role"),O=n.querySelectorAll(".sb-name"),J=n.querySelectorAll(".sb-dept"),H=n.querySelectorAll(".sb-avatar"),V=n.querySelectorAll(".sb-file"),C=[];for(let t=0;t<F.length;t++)if(O[t]?.value.trim()){const m=await u(V[t],H[t]?.value.trim()||o.sekben?.[t]?.avatar||"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80");C.push({role:F[t].value.trim(),name:O[t].value.trim(),dept:J[t]?.value.trim()||"",avatar:m})}const I=n.querySelectorAll(".kom-code"),_=n.querySelectorAll(".kom-title"),W=n.querySelectorAll(".kom-ketua-name"),z=n.querySelectorAll(".kom-ketua-dept"),G=n.querySelectorAll(".kom-ketua-avatar"),Q=n.querySelectorAll(".kom-ketua-file"),M=[];for(let t=0;t<I.length;t++){const m=I[t].closest(".bg-white"),x=m?.querySelectorAll(".kom-mem-name"),X=m?.querySelectorAll(".kom-mem-dept"),Y=m?.querySelectorAll(".kom-mem-avatar"),Z=m?.querySelectorAll(".kom-mem-file"),ee=await u(Q[t],G[t]?.value.trim()||o.komisi?.[t]?.ketua?.avatar||"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"),T=[];if(x){for(let c=0;c<x.length;c++)if(x[c].value.trim()){const te=await u(Z[c],Y[c]?.value.trim()||o.komisi?.[t]?.anggota?.[c]?.avatar||"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80");T.push({name:x[c].value.trim(),dept:X?.[c]?.value.trim()||"",avatar:te})}}M.push({id:o.komisi?.[t]?.id||`komisi-${t+1}`,code:I[t].value.trim(),title:_[t]?.value.trim()||"",themeColor:o.komisi?.[t]?.themeColor||(t%2===0?"rose":"blue"),ketua:{name:W[t]?.value.trim()||"",dept:z[t]?.value.trim()||"",avatar:ee},anggota:T})}await k({orgStructure:{pembina:h,presidium:P,sekben:C,komisi:M}}),b.close(),window.location.reload()})}w();document.addEventListener("astro:after-swap",w);document.addEventListener("astro:page-load",w);
