function I(){const D=localStorage.getItem("isAdmin")==="true";document.querySelectorAll(".admin-only").forEach(t=>{D?t.classList.remove("hidden"):t.classList.add("hidden")});const A=document.getElementById("edit-profile-btn"),p=document.getElementById("profile-modal"),B=document.getElementById("close-profile-modal-btn"),E=document.getElementById("profile-form");A&&p&&A.addEventListener("click",()=>p.showModal()),B&&p&&B.addEventListener("click",()=>p.close());async function k(t){try{const l={...JSON.parse(localStorage.getItem("dmfk_settings")||"{}"),...t};return localStorage.setItem("dmfk_settings",JSON.stringify(l)),await fetch("/api/settings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).catch(()=>{}),!0}catch{return!0}}E&&p&&E.addEventListener("submit",async t=>{t.preventDefault();const i=document.getElementById("visi-input").value.trim(),o=document.getElementById("misi-input").value.split(`
`).map(r=>r.trim()).filter(r=>r);await k({visi:i,misi:o}),p.close(),window.location.reload()});async function u(t,i){const l=t?.files?.[0];if(!l)return i;const o=new FormData;o.append("file",l);try{const r=await fetch("/api/upload",{method:"POST",body:o});if(r.ok)return(await r.json()).fileUrl||i}catch(r){console.error("File upload failed",r)}return i}const S=document.getElementById("edit-org-bg-btn"),g=document.getElementById("org-bg-modal"),L=document.getElementById("close-org-bg-modal-btn"),K=document.getElementById("org-bg-form");S&&g&&S.addEventListener("click",()=>g.showModal()),L&&g&&L.addEventListener("click",()=>g.close()),K&&g&&K.addEventListener("submit",async t=>{t.preventDefault();const i=document.getElementById("parliament-name-input")?.value.trim(),l=document.getElementById("parliament-logo-url-input")?.value.trim(),o=document.getElementById("parliament-logo-file-input"),r=await u(o,l),d=document.getElementById("org-title-input")?.value.trim(),v=document.getElementById("org-subtitle-input")?.value.trim(),h=document.getElementById("org-bg-url-input")?.value.trim(),f=document.getElementById("org-bg-file-input"),y=await u(f,h);await k({parliamentName:i||"Parlemen Nawa Cita 2026",parliamentLogo:r,orgTitle:d||"Struktur Kepengurusan 2026",orgSubtitle:v||"Pimpinan Utama, BPH, dan Komisi Operasional Organisasi DMFK UM",orgBgImage:y}),g.close(),window.location.reload()});const $=document.getElementById("edit-org-btn"),b=document.getElementById("org-modal"),q=document.getElementById("close-org-modal-btn"),n=document.getElementById("org-form");$&&b&&$.addEventListener("click",()=>{s(),b.showModal()}),q&&b&&q.addEventListener("click",()=>b.close());let a=n?JSON.parse(n.getAttribute("data-org")||"{}"):{};function s(){if(!n)return;const t=document.getElementById("presidium-inputs-container");t&&(t.innerHTML=(a.presidium||[]).map((o,r)=>`
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
        `).join(""));const i=document.getElementById("sekben-inputs-container");i&&(i.innerHTML=(a.sekben||[]).map((o,r)=>`
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
        `).join(""));const l=document.getElementById("komisi-inputs-container");l&&(l.innerHTML=(a.komisi||[]).map((o,r)=>`
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
                ${(o.anggota||[]).map((d,v)=>`
                  <div class="p-2 bg-white rounded-lg border border-gray-200 space-y-1">
                    <div class="flex gap-2 items-center">
                      <input type="text" value="${d.name||""}" placeholder="Nama Anggota" class="kom-mem-name font-bold text-xs p-1.5 bg-gray-50 border rounded-lg flex-1" />
                      <input type="text" value="${d.dept||""}" placeholder="Prodi / Angkatan" class="kom-mem-dept text-xs p-1.5 bg-gray-50 border rounded-lg flex-1" />
                      <button type="button" onclick="removeAnggotaItem(${r}, ${v})" class="text-rose-600 text-xs px-1 font-bold">✕</button>
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
        `).join(""))}window.removePresidiumItem=t=>{a.presidium.splice(t,1),s()},window.removeSekbenItem=t=>{a.sekben.splice(t,1),s()},window.removeKomisiItem=t=>{a.komisi.splice(t,1),s()},window.addAnggotaItem=t=>{a.komisi[t].anggota||(a.komisi[t].anggota=[]),a.komisi[t].anggota.push({name:"",dept:"",avatar:""}),s()},window.removeAnggotaItem=(t,i)=>{a.komisi[t].anggota.splice(i,1),s()},document.getElementById("add-presidium-btn")?.addEventListener("click",()=>{a.presidium||(a.presidium=[]),a.presidium.push({role:"Wakil Ketua",name:"",dept:"",avatar:""}),s()}),document.getElementById("add-sekben-btn")?.addEventListener("click",()=>{a.sekben||(a.sekben=[]),a.sekben.push({role:"Sekretaris",name:"",dept:"",avatar:""}),s()}),document.getElementById("add-komisi-btn")?.addEventListener("click",()=>{a.komisi||(a.komisi=[]);const t=a.komisi.length+1;a.komisi.push({id:`komisi-${t}`,code:`Komisi ${t}`,title:`Komisi Baru ${t}`,themeColor:t%2===0?"blue":"rose",ketua:{name:"",dept:"",avatar:""},anggota:[{name:"",dept:"",avatar:""}]}),s()}),n&&b&&n.addEventListener("submit",async t=>{t.preventDefault();const i=document.getElementById("pembina-title")?.value.trim()||"Pembina Organisasi",l=document.getElementById("pembina-name")?.value.trim()||"",o=document.getElementById("pembina-nip")?.value.trim()||"",r=document.getElementById("pembina-avatar")?.value.trim()||"",d=document.getElementById("pembina-file"),v=await u(d,r||a.pembina?.avatar||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"),h={title:i,name:l,nip:o,avatar:v},f=n.querySelectorAll(".pres-role"),y=n.querySelectorAll(".pres-name"),U=n.querySelectorAll(".pres-dept"),j=n.querySelectorAll(".pres-avatar"),T=n.querySelectorAll(".pres-file"),P=[];for(let e=0;e<f.length;e++)if(y[e]?.value.trim()){const m=await u(T[e],j[e]?.value.trim()||a.presidium?.[e]?.avatar||"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80");P.push({role:f[e].value.trim(),name:y[e].value.trim(),dept:U[e]?.value.trim()||"",avatar:m})}const F=n.querySelectorAll(".sb-role"),N=n.querySelectorAll(".sb-name"),R=n.querySelectorAll(".sb-dept"),J=n.querySelectorAll(".sb-avatar"),H=n.querySelectorAll(".sb-file"),O=[];for(let e=0;e<F.length;e++)if(N[e]?.value.trim()){const m=await u(H[e],J[e]?.value.trim()||a.sekben?.[e]?.avatar||"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80");O.push({role:F[e].value.trim(),name:N[e].value.trim(),dept:R[e]?.value.trim()||"",avatar:m})}const w=n.querySelectorAll(".kom-code"),V=n.querySelectorAll(".kom-title"),_=n.querySelectorAll(".kom-ketua-name"),W=n.querySelectorAll(".kom-ketua-dept"),z=n.querySelectorAll(".kom-ketua-avatar"),G=n.querySelectorAll(".kom-ketua-file"),M=[];for(let e=0;e<w.length;e++){const m=w[e].closest(".bg-white"),x=m?.querySelectorAll(".kom-mem-name"),Q=m?.querySelectorAll(".kom-mem-dept"),X=m?.querySelectorAll(".kom-mem-avatar"),Y=m?.querySelectorAll(".kom-mem-file"),Z=await u(G[e],z[e]?.value.trim()||a.komisi?.[e]?.ketua?.avatar||"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"),C=[];if(x){for(let c=0;c<x.length;c++)if(x[c].value.trim()){const ee=await u(Y[c],X[c]?.value.trim()||a.komisi?.[e]?.anggota?.[c]?.avatar||"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80");C.push({name:x[c].value.trim(),dept:Q?.[c]?.value.trim()||"",avatar:ee})}}M.push({id:a.komisi?.[e]?.id||`komisi-${e+1}`,code:w[e].value.trim(),title:V[e]?.value.trim()||"",themeColor:a.komisi?.[e]?.themeColor||(e%2===0?"rose":"blue"),ketua:{name:_[e]?.value.trim()||"",dept:W[e]?.value.trim()||"",avatar:Z},anggota:C})}await k({orgStructure:{pembina:h,presidium:P,sekben:O,komisi:M}}),b.close(),window.location.reload()})}I();document.addEventListener("astro:after-swap",I);document.addEventListener("astro:page-load",I);
