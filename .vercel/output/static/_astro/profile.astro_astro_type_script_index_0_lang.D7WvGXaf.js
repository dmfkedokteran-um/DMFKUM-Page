function w(){const T=localStorage.getItem("isAdmin")==="true";document.querySelectorAll(".admin-only").forEach(t=>{T?t.classList.remove("hidden"):t.classList.add("hidden")});const I=document.getElementById("edit-profile-btn"),u=document.getElementById("profile-modal"),B=document.getElementById("close-profile-modal-btn"),A=document.getElementById("profile-form");I&&u&&I.addEventListener("click",()=>u.showModal()),B&&u&&B.addEventListener("click",()=>u.close()),A&&u&&A.addEventListener("submit",async t=>{t.preventDefault();const r=document.getElementById("visi-input").value.trim(),o=document.getElementById("misi-input").value.split(`
`).map(l=>l.trim()).filter(l=>l);(await fetch("/api/settings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({visi:r,misi:o})})).ok?(u.close(),window.location.reload()):alert("Gagal menyimpan Visi & Misi ke server.")});async function p(t,r){const s=t?.files?.[0];if(!s)return r;const o=new FormData;o.append("file",s);try{const i=await fetch("/api/upload",{method:"POST",body:o});if(i.ok)return(await i.json()).fileUrl||r}catch(i){console.error("File upload failed",i)}return r}const E=document.getElementById("edit-org-bg-btn"),g=document.getElementById("org-bg-modal"),S=document.getElementById("close-org-bg-modal-btn"),L=document.getElementById("org-bg-form");E&&g&&E.addEventListener("click",()=>g.showModal()),S&&g&&S.addEventListener("click",()=>g.close()),L&&g&&L.addEventListener("submit",async t=>{t.preventDefault();const r=document.getElementById("parliament-name-input")?.value.trim(),s=document.getElementById("parliament-logo-url-input")?.value.trim(),o=document.getElementById("parliament-logo-file-input"),i=await p(o,s),l=document.getElementById("org-title-input")?.value.trim(),f=document.getElementById("org-subtitle-input")?.value.trim(),k=document.getElementById("org-bg-url-input")?.value.trim(),v=document.getElementById("org-bg-file-input"),y=await p(v,k);(await fetch("/api/settings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({parliamentName:r||"Parlemen Nawa Cita 2026",parliamentLogo:i,orgTitle:l||"Struktur Kepengurusan 2026",orgSubtitle:f||"Pimpinan Utama, BPH, dan Komisi Operasional Organisasi DMFK UM",orgBgImage:y})})).ok?(g.close(),window.location.reload()):alert("Gagal menyimpan banner & parlemen.")});const K=document.getElementById("edit-org-btn"),b=document.getElementById("org-modal"),$=document.getElementById("close-org-modal-btn"),n=document.getElementById("org-form");K&&b&&K.addEventListener("click",()=>{d(),b.showModal()}),$&&b&&$.addEventListener("click",()=>b.close());let a=n?JSON.parse(n.getAttribute("data-org")||"{}"):{};function d(){if(!n)return;const t=document.getElementById("presidium-inputs-container");t&&(t.innerHTML=(a.presidium||[]).map((o,i)=>`
          <div class="bg-white p-3.5 rounded-xl border border-gray-200 space-y-2">
            <div class="flex items-center gap-2">
              <input type="text" value="${o.role||""}" placeholder="Jabatan (e.g. Ketua Umum)" class="pres-role font-bold text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="text" value="${o.name||""}" placeholder="Nama Lengkap" class="pres-name font-bold text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="text" value="${o.dept||""}" placeholder="Prodi / Angkatan" class="pres-dept text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <button type="button" onclick="removePresidiumItem(${i})" class="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg font-bold">✕</button>
            </div>
            <div class="flex items-center gap-2">
              <input type="text" value="${o.avatar||""}" placeholder="URL Foto Personil" class="pres-avatar text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="file" class="pres-file text-[11px] text-gray-500 file:py-1 file:px-2 file:rounded file:border-0 file:bg-gray-200 cursor-pointer" accept="image/*" />
            </div>
          </div>
        `).join(""));const r=document.getElementById("sekben-inputs-container");r&&(r.innerHTML=(a.sekben||[]).map((o,i)=>`
          <div class="bg-white p-3.5 rounded-xl border border-gray-200 space-y-2">
            <div class="flex items-center gap-2">
              <input type="text" value="${o.role||""}" placeholder="Jabatan (e.g. Bendahara)" class="sb-role font-bold text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="text" value="${o.name||""}" placeholder="Nama Lengkap" class="sb-name font-bold text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="text" value="${o.dept||""}" placeholder="Prodi / Angkatan" class="sb-dept text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <button type="button" onclick="removeSekbenItem(${i})" class="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg font-bold">✕</button>
            </div>
            <div class="flex items-center gap-2">
              <input type="text" value="${o.avatar||""}" placeholder="URL Foto Personil" class="sb-avatar text-xs p-2 bg-gray-50 border rounded-lg flex-1" />
              <input type="file" class="sb-file text-[11px] text-gray-500 file:py-1 file:px-2 file:rounded file:border-0 file:bg-gray-200 cursor-pointer" accept="image/*" />
            </div>
          </div>
        `).join(""));const s=document.getElementById("komisi-inputs-container");s&&(s.innerHTML=(a.komisi||[]).map((o,i)=>`
          <div class="bg-white p-4 rounded-xl border border-gray-300 space-y-3">
            <div class="flex justify-between items-center bg-rose-50/50 p-2 rounded-lg">
              <span class="font-extrabold text-xs text-rose-700">${o.code||"Komisi"}</span>
              <button type="button" onclick="removeKomisiItem(${i})" class="text-xs text-rose-600 font-bold hover:underline">Hapus Komisi</button>
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
                <button type="button" onclick="addAnggotaItem(${i})" class="text-[10px] font-bold bg-gray-200 hover:bg-gray-300 px-2 py-0.5 rounded">+ Tambah Anggota</button>
              </div>
              <div class="space-y-2">
                ${(o.anggota||[]).map((l,f)=>`
                  <div class="p-2 bg-white rounded-lg border border-gray-200 space-y-1">
                    <div class="flex gap-2 items-center">
                      <input type="text" value="${l.name||""}" placeholder="Nama Anggota" class="kom-mem-name font-bold text-xs p-1.5 bg-gray-50 border rounded-lg flex-1" />
                      <input type="text" value="${l.dept||""}" placeholder="Prodi / Angkatan" class="kom-mem-dept text-xs p-1.5 bg-gray-50 border rounded-lg flex-1" />
                      <button type="button" onclick="removeAnggotaItem(${i}, ${f})" class="text-rose-600 text-xs px-1 font-bold">✕</button>
                    </div>
                    <div class="flex gap-2 items-center">
                      <input type="text" value="${l.avatar||""}" placeholder="URL Foto Anggota" class="kom-mem-avatar text-[11px] p-1.5 bg-gray-50 border rounded-lg flex-1" />
                      <input type="file" class="kom-mem-file text-[10px] text-gray-500 file:py-0.5 file:px-2 file:rounded file:border-0 file:bg-gray-200 cursor-pointer" accept="image/*" />
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        `).join(""))}window.removePresidiumItem=t=>{a.presidium.splice(t,1),d()},window.removeSekbenItem=t=>{a.sekben.splice(t,1),d()},window.removeKomisiItem=t=>{a.komisi.splice(t,1),d()},window.addAnggotaItem=t=>{a.komisi[t].anggota||(a.komisi[t].anggota=[]),a.komisi[t].anggota.push({name:"",dept:"",avatar:""}),d()},window.removeAnggotaItem=(t,r)=>{a.komisi[t].anggota.splice(r,1),d()},document.getElementById("add-presidium-btn")?.addEventListener("click",()=>{a.presidium||(a.presidium=[]),a.presidium.push({role:"Wakil Ketua",name:"",dept:"",avatar:""}),d()}),document.getElementById("add-sekben-btn")?.addEventListener("click",()=>{a.sekben||(a.sekben=[]),a.sekben.push({role:"Sekretaris",name:"",dept:"",avatar:""}),d()}),document.getElementById("add-komisi-btn")?.addEventListener("click",()=>{a.komisi||(a.komisi=[]);const t=a.komisi.length+1;a.komisi.push({id:`komisi-${t}`,code:`Komisi ${t}`,title:`Komisi Baru ${t}`,themeColor:t%2===0?"blue":"rose",ketua:{name:"",dept:"",avatar:""},anggota:[{name:"",dept:"",avatar:""}]}),d()}),n&&b&&n.addEventListener("submit",async t=>{t.preventDefault();const r=document.getElementById("pembina-title")?.value.trim()||"Pembina Organisasi",s=document.getElementById("pembina-name")?.value.trim()||"",o=document.getElementById("pembina-nip")?.value.trim()||"",i=document.getElementById("pembina-avatar")?.value.trim()||"",l=document.getElementById("pembina-file"),f=await p(l,i||a.pembina?.avatar||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"),k={title:r,name:s,nip:o,avatar:f},v=n.querySelectorAll(".pres-role"),y=n.querySelectorAll(".pres-name"),q=n.querySelectorAll(".pres-dept"),j=n.querySelectorAll(".pres-avatar"),D=n.querySelectorAll(".pres-file"),P=[];for(let e=0;e<v.length;e++)if(y[e]?.value.trim()){const m=await p(D[e],j[e]?.value.trim()||a.presidium?.[e]?.avatar||"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80");P.push({role:v[e].value.trim(),name:y[e].value.trim(),dept:q[e]?.value.trim()||"",avatar:m})}const O=n.querySelectorAll(".sb-role"),F=n.querySelectorAll(".sb-name"),U=n.querySelectorAll(".sb-dept"),R=n.querySelectorAll(".sb-avatar"),J=n.querySelectorAll(".sb-file"),N=[];for(let e=0;e<O.length;e++)if(F[e]?.value.trim()){const m=await p(J[e],R[e]?.value.trim()||a.sekben?.[e]?.avatar||"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80");N.push({role:O[e].value.trim(),name:F[e].value.trim(),dept:U[e]?.value.trim()||"",avatar:m})}const h=n.querySelectorAll(".kom-code"),H=n.querySelectorAll(".kom-title"),V=n.querySelectorAll(".kom-ketua-name"),G=n.querySelectorAll(".kom-ketua-dept"),W=n.querySelectorAll(".kom-ketua-avatar"),z=n.querySelectorAll(".kom-ketua-file"),M=[];for(let e=0;e<h.length;e++){const m=h[e].closest(".bg-white"),x=m?.querySelectorAll(".kom-mem-name"),Q=m?.querySelectorAll(".kom-mem-dept"),X=m?.querySelectorAll(".kom-mem-avatar"),Y=m?.querySelectorAll(".kom-mem-file"),Z=await p(z[e],W[e]?.value.trim()||a.komisi?.[e]?.ketua?.avatar||"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"),C=[];if(x){for(let c=0;c<x.length;c++)if(x[c].value.trim()){const _=await p(Y[c],X[c]?.value.trim()||a.komisi?.[e]?.anggota?.[c]?.avatar||"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80");C.push({name:x[c].value.trim(),dept:Q?.[c]?.value.trim()||"",avatar:_})}}M.push({id:a.komisi?.[e]?.id||`komisi-${e+1}`,code:h[e].value.trim(),title:H[e]?.value.trim()||"",themeColor:a.komisi?.[e]?.themeColor||(e%2===0?"rose":"blue"),ketua:{name:V[e]?.value.trim()||"",dept:G[e]?.value.trim()||"",avatar:Z},anggota:C})}(await fetch("/api/settings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({orgStructure:{pembina:k,presidium:P,sekben:N,komisi:M}})})).ok?(b.close(),window.location.reload()):alert("Gagal menyimpan perubahan Bagan Organisasi.")})}w();document.addEventListener("astro:after-swap",w);document.addEventListener("astro:page-load",w);
