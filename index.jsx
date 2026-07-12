import React, { useState, useMemo } from 'react';
import { 
  Menu, X, Search, Download, FileText, File, Users, 
  ChevronRight, ArrowRight, Building, BookOpen, 
  Maximize2, Eye, Filter, Mail, MessageCircle, Instagram, Link2
} from 'lucide-react';

// --- MOCK DATA ---
const MOCK_NEWS = [
  { id: 1, title: "Pelatihan Kepemimpinan Nasional 2026", date: "10 Jul 2026", category: "Pendidikan", tags: ["Pelatihan", "Leadership"], excerpt: "Kegiatan tahunan yang bertujuan untuk membina calon pemimpin masa depan dari berbagai wilayah.", image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&w=600&q=80" },
  { id: 2, title: "Simposium Teknologi & Masyarakat", date: "05 Jun 2026", category: "Riset", tags: ["Teknologi", "Seminar"], excerpt: "Diskusi panel membahas dampak AI dan teknologi modern terhadap dinamika sosial.", image: "https://images.unsplash.com/photo-1475721025870-14e414c441c8?auto=format&fit=crop&w=600&q=80" },
  { id: 3, title: "Aksi Sosial Donor Darah", date: "20 Mei 2026", category: "Sosial", tags: ["Kesehatan", "Aksi"], excerpt: "Kerjasama dengan PMI pusat dalam rangka hari kesehatan nasional.", image: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?auto=format&fit=crop&w=600&q=80" },
];

const MOCK_DOCS = [
  { id: 101, title: "AD/ART Organisasi Tahun 2026", category: "Regulasi", date: "01 Jan 2026", size: "2.4 MB", ext: "PDF", downloads: 432 },
  { id: 102, title: "Laporan Pertanggungjawaban Kuartal 1", category: "Laporan", date: "15 Apr 2026", size: "5.1 MB", ext: "PDF", downloads: 156 },
  { id: 103, title: "Buku Panduan Kaderisasi", category: "Panduan", date: "10 Feb 2026", size: "8.7 MB", ext: "PDF", downloads: 890 },
  { id: 104, title: "Materi Simposium Teknologi 2026", category: "Materi Publik", date: "06 Jun 2026", size: "12.3 MB", ext: "PPTX", downloads: 345 },
  { id: 105, title: "SOP Kesekretariatan", category: "Regulasi", date: "20 Jan 2026", size: "1.2 MB", ext: "DOCX", downloads: 112 },
];

const MOCK_GALLERY = [
  "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1475721025870-14e414c441c8?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
];

// --- COMPONENTS ---

// 1. Navigation
const Navbar = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'profile', label: 'Profil' },
    { id: 'proker', label: 'Program & Berita' },
    { id: 'repo', label: 'Repositori' },
    { id: 'contact', label: 'Kontak' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Area */}
          <button 
            className="flex items-center gap-2 cursor-pointer group outline-none relative select-none" 
            onClick={() => setView('home')}
          >
            <div className="bg-rose-50 p-2 rounded-xl group-hover:bg-rose-100 transition-colors flex items-center justify-center">
              <Building className="h-6 w-6 text-rose-700" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-red-900">
              NusaBakti
            </span>
            {/* Invisible Hitbox Shield */}
            <div className="absolute inset-0 z-10 w-full h-full"></div>
          </button>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setView(item.id)}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center outline-none select-none ${
                    currentView === item.id 
                    ? 'bg-rose-50 text-rose-700 shadow-sm' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span>{item.label}</span>
                  {/* Invisible Hitbox Shield */}
                  <div className="absolute inset-0 z-10 w-full h-full rounded-full"></div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="relative p-3 rounded-2xl bg-gray-50 text-gray-600 hover:bg-gray-100 focus:outline-none transition-colors flex items-center justify-center min-w-[48px] min-h-[48px] select-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              {/* Invisible Hitbox Shield */}
              <div className="absolute inset-0 z-10 w-full h-full rounded-2xl"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full shadow-lg shadow-gray-200/50">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => { setView(item.id); setIsOpen(false); }}
                className={`relative block w-full text-left px-5 py-3 rounded-2xl text-base font-semibold transition-colors select-none ${
                  currentView === item.id ? 'bg-rose-50 text-rose-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {item.label}
                {/* Invisible Hitbox Shield */}
                <div className="absolute inset-0 z-10 w-full h-full rounded-2xl"></div>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// 2. Views
const HomeView = ({ setView }) => (
  <div className="animate-fade-in pb-16">
    {/* Floating Hero Section */}
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-900 via-rose-800 to-rose-950 text-white py-16 px-4 text-center rounded-[3rem] mx-4 mt-4 shadow-2xl shadow-rose-900/20">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20 mix-blend-luminosity pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')" }}
      ></div>

      {/* Decorative Orbs */}
      <div className="absolute top-0 left-10 w-64 h-64 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-red-500/20 rounded-full mix-blend-overlay filter blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="relative max-w-4xl mx-auto z-10">
        <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-rose-100 text-sm font-semibold mb-6 tracking-wide">
          Official Platform 2026
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
          Membangun Sinergi,<br className="hidden md:block"/> Menginspirasi Negeri.
        </h1>
        <p className="text-lg md:text-xl text-rose-100/90 mb-8 max-w-2xl mx-auto font-light">
          Jelajahi portal cerdas kami. Temukan pembaruan terkini, rekam jejak inovasi, dan akses ekosistem dokumen publik secara instan.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={() => setView('repo')} className="group bg-white text-rose-900 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 hover:bg-rose-50 transition-all duration-300 flex items-center justify-center gap-3">
            <BookOpen className="h-5 w-5 text-rose-600 group-hover:scale-110 transition-transform" /> Akses Repositori
          </button>
          <button onClick={() => setView('profile')} className="border-2 border-white/30 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-rose-900 transition-all duration-300">
            Pelajari Profil
          </button>
        </div>
      </div>
    </section>

    {/* Highlight Section */}
    <section className="py-20 px-4 max-w-7xl mx-auto mt-8">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 tracking-tight">Kilas Berita Terbaru</h2>
          <p className="text-gray-500 mt-2 font-medium text-lg">Publikasi dan jejak langkah terkini kami.</p>
        </div>
        <button onClick={() => setView('proker')} className="hidden md:flex text-rose-700 font-bold items-center gap-2 hover:gap-3 bg-rose-50 px-5 py-2.5 rounded-full transition-all duration-300">
          Lihat Semua <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {MOCK_NEWS.map(news => (
          <div key={news.id} className="group bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(225,29,72,0.08)] overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-gray-100/50">
            <div className="relative overflow-hidden">
              <img src={news.image} alt={news.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-rose-700 shadow-sm">
                {news.category}
              </div>
            </div>
            <div className="p-8">
              <div className="text-sm font-semibold text-gray-400 mb-3">{news.date}</div>
              <h3 className="font-extrabold text-xl text-gray-800 mb-3 leading-snug group-hover:text-rose-700 transition-colors">{news.title}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">{news.excerpt}</p>
              <button className="text-rose-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Selengkapnya <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const ProfileView = () => (
  <div className="py-16 px-4 max-w-7xl mx-auto animate-fade-in pb-24">
    <div className="text-center mb-16">
      <span className="text-rose-600 font-bold tracking-wider uppercase text-sm mb-2 block">Tentang Kami</span>
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Identitas & Tujuan</h1>
      <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">Menyelami lebih dalam esensi visi, misi, dan struktur motor penggerak inovasi di organisasi kami.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
      <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 hover:shadow-[0_8px_30px_rgb(225,29,72,0.06)] transition-all">
        <div className="bg-rose-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
          <Eye className="h-8 w-8 text-rose-600" />
        </div>
        <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Visi Utama</h3>
        <p className="text-gray-600 text-lg leading-relaxed font-medium">
          Menjadi organisasi pelopor yang inovatif, transparan, dan berdampak nyata bagi pembangunan kapasitas masyarakat dan kemajuan keilmuan nasional pada tahun 2030.
        </p>
      </div>
      <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 hover:shadow-[0_8px_30px_rgb(225,29,72,0.06)] transition-all">
        <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
          <Users className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Misi Strategis</h3>
        <ul className="space-y-4">
          {[
            "Mengembangkan program kerja berbasis riset & pengabdian.",
            "Mewujudkan ekosistem administrasi transparan.",
            "Menjalin kemitraan kolaboratif lintas sektor."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <div className="bg-blue-100 p-1.5 rounded-full mt-1"><div className="w-2 h-2 bg-blue-600 rounded-full"></div></div>
              <span className="text-gray-600 text-lg font-medium leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Modern Org Chart */}
    <div className="bg-gradient-to-b from-white to-gray-50 p-12 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-100 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-50 rounded-full filter blur-3xl opacity-60"></div>
      
      <div className="text-center mb-16 relative z-10">
        <h3 className="text-3xl font-extrabold text-gray-900 mb-2">Struktur Eksekutif</h3>
        <p className="text-gray-500 font-medium">Periode Kepengurusan 2026</p>
      </div>
      
      <div className="flex flex-col items-center relative z-10 overflow-x-auto pb-8">
        {/* Ketua */}
        <div className="bg-gradient-to-br from-rose-700 to-rose-900 text-white px-10 py-5 rounded-3xl shadow-xl shadow-rose-900/20 font-bold text-center z-10 min-w-[240px] transform hover:scale-105 transition-transform cursor-default">
          <span className="block text-xl">Dr. Budi Santoso</span>
          <span className="text-xs font-semibold text-rose-200 uppercase tracking-widest mt-1.5 block">Ketua Umum</span>
        </div>
        
        {/* Line down */}
        <div className="w-0.5 h-10 bg-gradient-to-b from-rose-200 to-gray-300"></div>
        {/* Horizontal Line */}
        <div className="w-[85%] max-w-3xl h-0.5 bg-gray-300 rounded-full"></div>
        
        {/* Divisi */}
        <div className="flex justify-between w-[85%] max-w-3xl mt-0">
          {[
            { name: "Siti Aminah", role: "Sekretaris Jenderal", color: "blue" },
            { name: "Andi Wijaya", role: "Ketua Div. Riset", color: "emerald" },
            { name: "Rina Sari", role: "Ketua Div. Kominfo", color: "purple" }
          ].map((person, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-0.5 h-10 bg-gray-300"></div>
              <div className="bg-white border-2 border-gray-100 px-6 py-4 rounded-2xl shadow-sm group-hover:shadow-lg group-hover:border-gray-200 text-center min-w-[180px] transition-all duration-300 cursor-default group-hover:-translate-y-1">
                <p className="font-extrabold text-gray-800 text-lg">{person.name}</p>
                <p className={`text-xs font-bold text-${person.color}-600 uppercase tracking-wider mt-1`}>{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ProkerView = () => {
  const [lightboxImg, setLightboxImg] = useState(null);
  const [previewNews, setPreviewNews] = useState(null);

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto animate-fade-in pb-24">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Karya & Rekam Jejak</h1>
        <p className="text-gray-500 text-lg max-w-2xl font-medium">Jelajahi galeri program kerja, dokumentasi acara, dan publikasi kegiatan terkini dari berbagai divisi.</p>
      </div>

      {/* Modern List/Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {MOCK_NEWS.map(news => (
          <div key={news.id} onClick={() => setPreviewNews(news)} className="group flex flex-col sm:flex-row bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl border border-gray-50 overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <div className="sm:w-2/5 relative overflow-hidden">
              <img src={news.image} alt={news.title} className="w-full h-full object-cover min-h-[200px] group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-6 sm:w-3/5 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold px-3 py-1.5 bg-rose-50 text-rose-700 rounded-full">{news.category}</span>
                <span className="text-xs font-medium text-gray-400">{news.date}</span>
              </div>
              <h3 className="font-extrabold text-xl text-gray-900 mb-3 leading-tight group-hover:text-rose-700 transition-colors">{news.title}</h3>
              <p className="text-gray-500 text-sm mb-5 line-clamp-2 leading-relaxed">{news.excerpt}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {news.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold text-gray-400 bg-gray-100/80 px-2.5 py-1 rounded-md uppercase tracking-wider">#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Section */}
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">Galeri Dokumentasi</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {MOCK_GALLERY.map((img, idx) => (
          <div key={idx} className="relative group cursor-pointer overflow-hidden rounded-3xl aspect-square shadow-sm hover:shadow-xl transition-all duration-300" onClick={() => setLightboxImg(img)}>
            <img src={img} alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <Maximize2 className="h-6 w-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setLightboxImg(null)}>
          <button className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all">
            <X className="h-6 w-6" />
          </button>
          <img src={lightboxImg} alt="Enlarged gallery" className="max-w-[95vw] max-h-[90vh] object-contain rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      {/* News Preview Modal */}
      {previewNews && (
        <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-6 animate-fade-in" onClick={() => setPreviewNews(null)}>
          <div className="bg-white w-full max-w-4xl h-[95vh] sm:h-[90vh] rounded-[2rem] flex flex-col shadow-2xl overflow-hidden ring-1 ring-white/10" onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white z-10 shadow-sm shrink-0">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold px-3 py-1.5 bg-rose-50 text-rose-700 rounded-full">{previewNews.category}</span>
                <span className="text-sm font-medium text-gray-500">{previewNews.date}</span>
              </div>
              <button onClick={() => setPreviewNews(null)} className="p-2.5 hover:bg-gray-100 rounded-full text-gray-500 transition-colors">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-0 bg-white">
              <div className="relative h-64 sm:h-96 w-full">
                <img src={previewNews.image} alt={previewNews.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6 sm:p-12 -mt-20 relative z-10 bg-white rounded-t-[3rem]">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">{previewNews.title}</h1>
                
                <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-100 pb-8">
                  {previewNews.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg uppercase tracking-wider">#{tag}</span>
                  ))}
                </div>

                <div className="text-gray-600 font-medium leading-relaxed space-y-6 text-lg">
                  <p className="text-xl text-gray-800 font-semibold mb-4 leading-snug">{previewNews.excerpt}</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
                  <p>Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum.</p>
                  <div className="bg-rose-50/50 border-l-4 border-rose-500 p-6 rounded-r-2xl my-8">
                    <p className="text-rose-900 font-bold italic">"Komitmen kami adalah terus berinovasi untuk memberikan manfaat nyata bagi seluruh lapisan masyarakat."</p>
                  </div>
                  <p>Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const RepositoryView = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Semua');
  const [previewDoc, setPreviewDoc] = useState(null);
  const [downloadsMap, setDownloadsMap] = useState({});

  const categories = ["Semua", "Regulasi", "Laporan", "Panduan", "Materi Publik"];

  const filteredDocs = useMemo(() => {
    return MOCK_DOCS.filter(doc => {
      const matchSearch = doc.title.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === 'Semua' || doc.category === category;
      return matchSearch && matchCategory;
    });
  }, [search, category]);

  const handleDownload = (doc) => {
    setDownloadsMap(prev => ({
      ...prev,
      [doc.id]: (prev[doc.id] || doc.downloads) + 1
    }));
    alert(`File ${doc.title} mulai diunduh!`);
  };

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto animate-fade-in pb-24">
      <div className="text-center md:text-left mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Repositori Berkas</h1>
        <p className="text-gray-500 max-w-3xl text-lg font-medium leading-relaxed">
          Pusat pangkalan data publik yang terstruktur. Temukan, pratinjau, dan unduh dokumen resmi organisasi kami dengan cepat.
        </p>
      </div>

      {/* Glassy Filter Bar */}
      <div className="bg-white/80 backdrop-blur-md p-4 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-1">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Ketik judul dokumen..."
            className="w-full pl-14 pr-6 py-4 bg-gray-50/50 hover:bg-gray-50 border border-transparent rounded-[1.5rem] focus:bg-white focus:border-rose-300 focus:ring-4 focus:ring-rose-100 outline-none transition-all font-medium text-gray-700"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 min-w-[200px]">
          <div className="relative w-full">
            <Filter className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select 
              className="w-full pl-12 pr-10 py-4 bg-gray-50/50 hover:bg-gray-50 border border-transparent rounded-[1.5rem] focus:bg-white focus:border-rose-300 focus:ring-4 focus:ring-rose-100 outline-none transition-all font-medium text-gray-700 appearance-none cursor-pointer"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Document List */}
      <div className="bg-transparent rounded-3xl overflow-hidden">
        {filteredDocs.length === 0 ? (
          <div className="p-16 text-center bg-white rounded-[2rem] border border-gray-100 shadow-sm">
            <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 font-medium text-lg">Tidak ada dokumen yang relevan ditemukan.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredDocs.map(doc => {
              const currentDownloads = downloadsMap[doc.id] || doc.downloads;
              return (
                <div key={doc.id} className="bg-white p-5 md:p-6 rounded-[2rem] shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-100 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6 group">
                  <div className="flex items-start gap-5">
                    <div className={`p-4 rounded-2xl shrink-0 transition-transform group-hover:scale-110 ${doc.ext === 'PDF' ? 'bg-rose-50 text-rose-600' : doc.ext === 'DOCX' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'}`}>
                      <FileText className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-gray-900 text-lg group-hover:text-rose-700 transition-colors">{doc.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-2 font-medium">
                        <span className="bg-gray-100/80 px-3 py-1 rounded-full text-xs text-gray-600">{doc.category}</span>
                        <span>{doc.date}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span>{doc.size}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span className="text-rose-600/80">{currentDownloads} Unduhan</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 sm:ml-auto w-full sm:w-auto">
                    <button 
                      onClick={() => setPreviewDoc(doc)}
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-50 text-gray-700 rounded-full hover:bg-gray-100 transition-colors text-sm font-bold"
                    >
                      <Eye className="h-4 w-4" /> Buka
                    </button>
                    <button 
                      onClick={() => handleDownload(doc)}
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-all shadow-lg shadow-rose-600/20 hover:shadow-rose-600/40 hover:-translate-y-0.5 text-sm font-bold"
                    >
                      <Download className="h-4 w-4" /> Unduh
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Embedded Document Viewer Modal */}
      {previewDoc && (
        <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-6 animate-fade-in">
          <div className="bg-white w-full max-w-5xl h-[95vh] sm:h-[90vh] rounded-[2rem] flex flex-col shadow-2xl overflow-hidden ring-1 ring-white/10">
            
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white z-10 shadow-sm">
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-xl ${previewDoc.ext === 'PDF' ? 'bg-rose-50 text-rose-600' : 'bg-blue-50 text-blue-600'}`}>
                   <File className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-gray-900 line-clamp-1">{previewDoc.title}</h3>
                  <p className="text-xs font-bold text-gray-400 mt-0.5 tracking-wider uppercase">{previewDoc.ext} • {previewDoc.size}</p>
                </div>
              </div>
              <button onClick={() => setPreviewDoc(null)} className="p-2.5 hover:bg-gray-100 rounded-full text-gray-500 transition-colors">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Simulated Viewer Area */}
            <div className="flex-1 bg-gray-100/50 flex justify-center overflow-y-auto p-4 sm:p-8">
              <div className="bg-white w-full max-w-3xl min-h-[800px] shadow-lg rounded-2xl p-12 text-center border border-gray-200">
                <div className="border-b-2 border-rose-600/20 pb-6 mb-8">
                  <h1 className="text-3xl font-extrabold uppercase text-gray-900 tracking-tight">{previewDoc.title}</h1>
                  <p className="text-gray-400 font-medium mt-3 tracking-wide">Diterbitkan: {previewDoc.date}</p>
                </div>
                
                <div className="text-left text-gray-600 space-y-6 font-medium leading-relaxed">
                  <div className="bg-rose-50/50 border border-rose-100 p-6 rounded-2xl text-center">
                    <span className="text-rose-600 font-bold block mb-2">[ Area Pratinjau Dokumen ]</span>
                    <span className="text-sm text-gray-500">
                      Pada implementasi asli, area ini akan diganti dengan <code>iframe Google Docs Viewer</code> atau komponen PDF renderer.
                    </span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-gray-100 bg-white flex justify-between items-center z-10">
              <span className="text-sm font-bold text-gray-400">Halaman 1 dari 12</span>
              <button 
                onClick={() => { handleDownload(previewDoc); setPreviewDoc(null); }}
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-rose-600/20 hover:-translate-y-0.5 transition-all"
              >
                <Download className="h-5 w-5" /> Unduh Dokumen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ContactView = () => (
  <div className="py-16 px-4 max-w-5xl mx-auto animate-fade-in pb-24">
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Mari Terhubung</h1>
      <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
        Pilih salah satu platform di bawah ini untuk terhubung langsung dengan tim kami. Kami siap merespons Anda.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {/* Email */}
      <a href="mailto:info@nusabakti.org" className="group bg-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(225,29,72,0.08)] hover:-translate-y-1 transition-all duration-300 border border-gray-50 flex items-center gap-6">
        <div className="bg-rose-50 text-rose-600 p-5 rounded-3xl group-hover:scale-110 transition-transform">
          <Mail className="h-8 w-8" />
        </div>
        <div>
          <h3 className="font-extrabold text-2xl text-gray-900 mb-1">Email Resmi</h3>
          <p className="text-gray-500 font-medium text-lg group-hover:text-rose-600 transition-colors">info@nusabakti.org</p>
        </div>
      </a>

      {/* WhatsApp */}
      <a href="#" className="group bg-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(16,185,129,0.12)] hover:-translate-y-1 transition-all duration-300 border border-gray-50 flex items-center gap-6">
        <div className="bg-emerald-50 text-emerald-600 p-5 rounded-3xl group-hover:scale-110 transition-transform">
          <MessageCircle className="h-8 w-8" />
        </div>
        <div>
          <h3 className="font-extrabold text-2xl text-gray-900 mb-1">WhatsApp</h3>
          <p className="text-gray-500 font-medium text-lg group-hover:text-emerald-600 transition-colors">0812-3456-7890</p>
        </div>
      </a>

      {/* Instagram */}
      <a href="#" className="group bg-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(217,70,239,0.12)] hover:-translate-y-1 transition-all duration-300 border border-gray-50 flex items-center gap-6">
        <div className="bg-fuchsia-50 text-fuchsia-600 p-5 rounded-3xl group-hover:scale-110 transition-transform">
          <Instagram className="h-8 w-8" />
        </div>
        <div>
          <h3 className="font-extrabold text-2xl text-gray-900 mb-1">Instagram</h3>
          <p className="text-gray-500 font-medium text-lg group-hover:text-fuchsia-600 transition-colors">@nusabakti</p>
        </div>
      </a>

      {/* Linktree */}
      <a href="#" className="group bg-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300 border border-gray-50 flex items-center gap-6">
        <div className="bg-blue-50 text-blue-600 p-5 rounded-3xl group-hover:scale-110 transition-transform">
          <Link2 className="h-8 w-8" />
        </div>
        <div>
          <h3 className="font-extrabold text-2xl text-gray-900 mb-1">Linktree</h3>
          <p className="text-gray-500 font-medium text-lg group-hover:text-blue-600 transition-colors">linktr.ee/nusabakti</p>
        </div>
      </a>
    </div>

    <div className="bg-gray-50/50 border border-gray-100 rounded-3xl p-8 text-center text-gray-600 font-medium">
      <p><strong className="text-gray-900">Sekretariat Pusat:</strong> Gedung Inovasi Lt. 3, Jl. Merdeka No. 45, Jakarta</p>
    </div>
  </div>
);

// 3. Main App Container
export default function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50/30 flex flex-col selection:bg-rose-200 selection:text-rose-900" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&display=swap');
        
        input, button, textarea, select { font-family: inherit; }
        
        .animate-fade-in { animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeIn { 
          from { opacity: 0; transform: translateY(15px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        
        /* Custom scrollbar for modern feel */
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}} />
      
      <Navbar currentView={currentView} setView={setCurrentView} />
      
      <main className="flex-1 w-full">
        {currentView === 'home' && <HomeView setView={setCurrentView} />}
        {currentView === 'profile' && <ProfileView />}
        {currentView === 'proker' && <ProkerView />}
        {currentView === 'repo' && <RepositoryView />}
        {currentView === 'contact' && <ContactView />}
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12 text-center rounded-t-[3rem] mt-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-6 text-white font-extrabold text-2xl tracking-tight">
            <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm">
              <Building className="h-6 w-6 text-rose-400" />
            </div>
            NusaBakti
          </div>
          <p className="mb-6 font-medium text-gray-500 max-w-sm mx-auto">Platform Pintar Repositori Publik & Etalase Digital Organisasi Masa Depan.</p>
          <div className="w-16 h-1 bg-gray-800 rounded-full mx-auto mb-6"></div>
          <p className="text-sm font-bold tracking-wider uppercase text-gray-600">© 2026 Organisasi NusaBakti. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
