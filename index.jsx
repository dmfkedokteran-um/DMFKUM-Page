import React, { useState, useMemo } from 'react';
import { 
  Menu, X, Search, Download, FileText, File, Users, 
  ChevronRight, ArrowRight, Building, BookOpen, 
  Maximize2, Eye, Filter, Mail, MessageCircle, Instagram, Link2,
  Plus, Edit, Trash2, Lock, Unlock, User, Key
} from 'lucide-react';

// --- MOCK DATA ---
const MOCK_NEWS = [
  { id: 1, title: "Pelatihan Kepemimpinan Nasional 2026", date: "10 Jul 2026", category: "Pendidikan", tags: ["Pelatihan", "Leadership"], excerpt: "Kegiatan tahunan yang bertujuan untuk membina calon pemimpin masa depan dari berbagai wilayah.", image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&w=600&q=80", content: "Program pelatihan kepemimpinan ini dirancang khusus untuk memfasilitasi pengembangan diri para calon pemimpin masa depan. Selama kegiatan ini, peserta akan dibekali dengan materi-materi kepemimpinan strategis, manajemen krisis, serta komunikasi efektif.\n\nKami berharap melalui program ini, akan lahir agen-agen perubahan yang siap menghadapi tantangan global dengan membawa nilai-nilai kearifan lokal ke kancah nasional." },
  { id: 2, title: "Simposium Teknologi & Masyarakat", date: "05 Jun 2026", category: "Riset", tags: ["Teknologi", "Seminar"], excerpt: "Diskusi panel membahas dampak AI dan teknologi modern terhadap dinamika sosial.", image: "https://images.unsplash.com/photo-1475721025870-14e414c441c8?auto=format&fit=crop&w=600&q=80", content: "Dalam era digital yang bergerak dengan sangat cepat, adopsi teknologi cerdas (AI) telah membawa transformasi masif dalam struktur sosial masyarakat kita.\n\nSimposium ini menghadirkan para pakar teknologi dan sosiolog terkemuka untuk membahas bagaimana teknologi dapat diarahkan agar tidak hanya meningkatkan efisiensi proses, tetapi juga menjunjung tinggi nilai-nilai kemanusiaan dan keadilan sosial yang ada." },
  { id: 3, title: "Aksi Sosial Donor Darah", date: "20 Mei 2026", category: "Sosial", tags: ["Kesehatan", "Aksi"], excerpt: "Kerjasama dengan PMI pusat dalam rangka hari kesehatan nasional.", image: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?auto=format&fit=crop&w=600&q=80", content: "Sebagai bentuk komitmen terhadap kepedulian sosial, organisasi kami telah sukses menyelenggarakan aksi sosial donor darah berkolaborasi langsung dengan Palang Merah Indonesia (PMI).\n\nKegiatan ini tidak hanya berhasil mengumpulkan ratusan kantong darah yang akan disalurkan kepada mereka yang membutuhkan, tetapi juga membangun kesadaran kolektif masyarakat akan pentingnya saling membantu." },
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
const Navbar = ({ currentView, setView, isAdmin, setIsAdmin, setShowLoginModal }) => {
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
            <div className="absolute inset-0 z-10 w-full h-full"></div>
          </button>
          
          <div className="hidden md:flex items-center">
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
                  <div className="absolute inset-0 z-10 w-full h-full rounded-full"></div>
                </button>
              ))}
            </div>
            
            <div className="ml-6 flex items-center border-l border-gray-200 pl-6">
              <button 
                onClick={() => isAdmin ? setIsAdmin(false) : setShowLoginModal(true)}
                className={`p-3 rounded-full transition-all shadow-sm ${isAdmin ? 'bg-rose-100 text-rose-700 hover:bg-rose-200' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                title={isAdmin ? "Keluar dari Mode Admin" : "Masuk ke Mode Admin"}
              >
                {isAdmin ? <Unlock className="h-5 w-5"/> : <Lock className="h-5 w-5"/>}
              </button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={() => isAdmin ? setIsAdmin(false) : setShowLoginModal(true)}
              className={`p-2.5 rounded-xl transition-all shadow-sm ${isAdmin ? 'bg-rose-100 text-rose-700' : 'bg-gray-100 text-gray-500'}`}
            >
              {isAdmin ? <Unlock className="h-5 w-5"/> : <Lock className="h-5 w-5"/>}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="relative p-2.5 rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-100 focus:outline-none transition-colors flex items-center justify-center min-w-[44px] min-h-[44px] select-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <div className="absolute inset-0 z-10 w-full h-full rounded-2xl"></div>
            </button>
          </div>
        </div>
      </div>

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
const HomeView = ({ setView, newsData }) => (
  <div className="animate-fade-in pb-16">
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-900 via-rose-800 to-rose-950 text-white py-16 px-4 text-center rounded-[3rem] mx-4 mt-4 shadow-2xl shadow-rose-900/20">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20 mix-blend-luminosity pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')" }}
      ></div>

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
        {newsData.slice(0, 3).map(news => (
          <div key={news.id} className="group bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(225,29,72,0.08)] overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-gray-100/50 flex flex-col h-full">
            <div className="relative overflow-hidden shrink-0">
              <img src={news.image} alt={news.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-rose-700 shadow-sm">
                {news.category}
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="text-sm font-semibold text-gray-400 mb-3">{news.date}</div>
              <h3 className="font-extrabold text-xl text-gray-800 mb-3 leading-snug group-hover:text-rose-700 transition-colors">{news.title}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2 flex-grow">{news.excerpt}</p>
              <button onClick={() => setView('proker')} className="text-rose-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
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

    <div className="bg-gradient-to-b from-white to-gray-50 p-12 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-100 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-50 rounded-full filter blur-3xl opacity-60"></div>
      
      <div className="text-center mb-16 relative z-10">
        <h3 className="text-3xl font-extrabold text-gray-900 mb-2">Struktur Eksekutif</h3>
        <p className="text-gray-500 font-medium">Periode Kepengurusan 2026</p>
      </div>
      
      <div className="flex flex-col items-center relative z-10 overflow-x-auto pb-8">
        <div className="bg-gradient-to-br from-rose-700 to-rose-900 text-white px-10 py-5 rounded-3xl shadow-xl shadow-rose-900/20 font-bold text-center z-10 min-w-[240px] transform hover:scale-105 transition-transform cursor-default">
          <span className="block text-xl">Dr. Budi Santoso</span>
          <span className="text-xs font-semibold text-rose-200 uppercase tracking-widest mt-1.5 block">Ketua Umum</span>
        </div>
        
        <div className="w-0.5 h-10 bg-gradient-to-b from-rose-200 to-gray-300"></div>
        <div className="w-[85%] max-w-3xl h-0.5 bg-gray-300 rounded-full"></div>
        
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

const ProkerView = ({ newsData, setNewsData, isAdmin }) => {
  const [lightboxImg, setLightboxImg] = useState(null);
  const [previewNews, setPreviewNews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ title: '', date: '', category: '', tags: '', excerpt: '', image: '', content: '' });
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleOpenForm = (news = null) => {
    if (news) {
      setFormData({ ...news, tags: news.tags.join(', ') });
      setEditId(news.id);
    } else {
      setFormData({ title: '', date: '', category: '', tags: '', excerpt: '', image: '', content: '' });
      setEditId(null);
    }
    setIsModalOpen(true);
  };

  const handleDeleteRequest = (e, id) => {
    e.stopPropagation();
    setItemToDelete(id);
  };

  const confirmDelete = () => {
    setNewsData(prev => prev.filter(item => item.id !== itemToDelete));
    setItemToDelete(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      ...formData,
      id: editId || Date.now(),
      tags: formData.tags.split(',').map(t => t.trim()).filter(t => t !== '')
    };

    if (editId) {
      setNewsData(prev => prev.map(item => item.id === editId ? newEntry : item));
    } else {
      setNewsData(prev => [newEntry, ...prev]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="py-16 px-4 sm:px-8 max-w-6xl mx-auto animate-fade-in pb-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4 px-2 md:px-0">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Karya & Rekam Jejak</h1>
          <p className="text-gray-500 text-lg max-w-2xl font-medium">Jelajahi galeri program kerja, dokumentasi acara, dan publikasi kegiatan terkini dari berbagai divisi.</p>
        </div>
        {isAdmin && (
          <button 
            onClick={() => handleOpenForm()}
            className="flex items-center gap-2 bg-rose-600 text-white px-6 py-3 rounded-full font-bold hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/20 shrink-0"
          >
            <Plus className="h-5 w-5" /> Tambah Berita
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24 px-2 md:px-0">
        {newsData.map(news => (
          <div key={news.id} onClick={() => setPreviewNews(news)} className="group flex flex-col sm:flex-row bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl border border-gray-50 overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer relative h-full">
            <div className="sm:w-2/5 relative overflow-hidden h-56 sm:h-auto">
              <img src={news.image} alt={news.title} className="w-full h-full object-cover min-h-[200px] group-hover:scale-110 transition-transform duration-700" />
              
              {isAdmin && (
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button onClick={(e) => { e.stopPropagation(); handleOpenForm(news); }} className="p-2 bg-white/90 backdrop-blur-md rounded-xl text-blue-600 hover:bg-blue-50 hover:scale-110 transition-all shadow-sm">
                    <Edit className="h-4 w-4"/>
                  </button>
                  <button onClick={(e) => handleDeleteRequest(e, news.id)} className="p-2 bg-white/90 backdrop-blur-md rounded-xl text-rose-600 hover:bg-rose-50 hover:scale-110 transition-all shadow-sm">
                    <Trash2 className="h-4 w-4"/>
                  </button>
                </div>
              )}
            </div>
            
            <div className="p-8 sm:w-3/5 flex flex-col justify-center flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold px-3 py-1.5 bg-rose-50 text-rose-700 rounded-full">{news.category}</span>
                <span className="text-xs font-medium text-gray-400">{news.date}</span>
              </div>
              <h3 className="font-extrabold text-xl text-gray-900 mb-3 leading-tight group-hover:text-rose-700 transition-colors">{news.title}</h3>
              <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed flex-grow">{news.excerpt}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {news.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold text-gray-400 bg-gray-100/80 px-2.5 py-1 rounded-md uppercase tracking-wider">#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-2 md:px-0">
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
      </div>

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
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white z-10 shadow-sm shrink-0">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold px-3 py-1.5 bg-rose-50 text-rose-700 rounded-full">{previewNews.category}</span>
                <span className="text-sm font-medium text-gray-500">{previewNews.date}</span>
              </div>
              <button onClick={() => setPreviewNews(null)} className="p-2.5 hover:bg-gray-100 rounded-full text-gray-500 transition-colors">
                <X className="h-6 w-6" />
              </button>
            </div>

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
                  
                  {previewNews.content ? (
                    previewNews.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))
                  ) : (
                    <p>Konten belum tersedia.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Form CRUD Berita Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-fade-in" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white w-full max-w-2xl rounded-[2rem] p-8 shadow-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-extrabold text-gray-900">{editId ? 'Edit Program/Berita' : 'Tambah Program/Berita'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600"><X className="h-6 w-6" /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Judul Utama</label>
                <input required type="text" placeholder="Masukkan judul..." className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-200 outline-none transition-all" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
              </div>
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-gray-700 mb-1">Kategori</label>
                  <input required type="text" placeholder="Misal: Pendidikan" className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-200 outline-none transition-all" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-gray-700 mb-1">Tanggal</label>
                  <input required type="text" placeholder="Misal: 10 Jul 2026" className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-200 outline-none transition-all" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Tags Kategori (Pisahkan dengan koma)</label>
                <input type="text" placeholder="Sosial, Aksi, Bantuan" className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-200 outline-none transition-all" value={formData.tags} onChange={e => setFormData({...formData, tags: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">URL Gambar Cover</label>
                <input required type="url" placeholder="https://..." className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-200 outline-none transition-all" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Kutipan Singkat (Excerpt)</label>
                <textarea required placeholder="Deskripsi singkat kegiatan..." className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl h-24 focus:ring-2 focus:ring-rose-200 outline-none transition-all" value={formData.excerpt} onChange={e => setFormData({...formData, excerpt: e.target.value})}></textarea>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Konten Lengkap</label>
                <textarea required placeholder="Isi artikel lengkap (Gunakan Enter 2x untuk paragraf baru)..." className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl h-48 focus:ring-2 focus:ring-rose-200 outline-none transition-all" value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})}></textarea>
              </div>
              <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-bold hover:bg-gray-200 transition-colors">Batal</button>
                <button type="submit" className="px-6 py-3 bg-rose-600 text-white rounded-full font-bold hover:bg-rose-700 shadow-lg shadow-rose-600/20 transition-all">Simpan Data</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Konfirmasi Hapus Berita */}
      {itemToDelete && (
        <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-[80] flex items-center justify-center p-4 animate-fade-in" onClick={() => setItemToDelete(null)}>
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Hapus Data?</h3>
            <p className="text-gray-500 mb-6 font-medium">Tindakan ini tidak dapat dibatalkan. Data akan dihapus secara permanen.</p>
            <div className="flex gap-3">
              <button onClick={() => setItemToDelete(null)} className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors">Batal</button>
              <button onClick={confirmDelete} className="flex-1 py-3 bg-rose-600 text-white rounded-xl font-bold hover:bg-rose-700 transition-colors">Ya, Hapus</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const RepositoryView = ({ docsData, setDocsData, isAdmin }) => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Semua');
  const [previewDoc, setPreviewDoc] = useState(null);
  const [downloadsMap, setDownloadsMap] = useState({});
  const [downloadToast, setDownloadToast] = useState(null);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ title: '', category: '', date: '', size: '', ext: 'PDF', fileName: '', fileUrl: null });
  const [docToDelete, setDocToDelete] = useState(null);

  const categories = ["Semua", "Regulasi", "Laporan", "Panduan", "Materi Publik"];

  const filteredDocs = useMemo(() => {
    return docsData.filter(doc => {
      const matchSearch = doc.title.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === 'Semua' || doc.category === category;
      return matchSearch && matchCategory;
    });
  }, [search, category, docsData]);

  const handleDownload = (doc) => {
    setDownloadsMap(prev => ({
      ...prev,
      [doc.id]: (prev[doc.id] || doc.downloads) + 1
    }));
    
    // Jika file asli tersedia (diunggah oleh user), jalankan unduhan sungguhan
    if (doc.fileUrl) {
      const link = document.createElement('a');
      link.href = doc.fileUrl;
      link.download = doc.fileName || doc.title;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Jika mock data, tampilkan toast simulasi
      setDownloadToast(doc.title);
      setTimeout(() => setDownloadToast(null), 3000);
    }
  };

  const handleOpenForm = (doc = null) => {
    if (doc) {
      setFormData({ title: doc.title, category: doc.category, date: doc.date, size: doc.size, ext: doc.ext, fileName: doc.fileName || '', fileUrl: doc.fileUrl || null });
      setEditId(doc.id);
    } else {
      setFormData({ title: '', category: categories[1], date: '', size: '', ext: 'PDF', fileName: '', fileUrl: null });
      setEditId(null);
    }
    setIsModalOpen(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
      let extension = file.name.split('.').pop().toUpperCase();
      if (extension === 'JPEG') extension = 'JPG'; // Normalisasi ekstensi
      
      const fileUrl = URL.createObjectURL(file); // Menyimpan path file asli ke dalam memori
      const titleWithoutExt = file.name.split('.').slice(0, -1).join('.');
      
      const today = new Date();
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
      const dateStr = `${String(today.getDate()).padStart(2, '0')} ${months[today.getMonth()]} ${today.getFullYear()}`;

      setFormData(prev => ({
        ...prev,
        fileName: file.name,
        size: `${sizeInMB} MB`,
        ext: extension.substring(0, 4),
        fileUrl: fileUrl,
        title: prev.title || titleWithoutExt, // Auto-fill Judul
        date: prev.date || dateStr // Auto-fill Tanggal
      }));
    }
  };

  const handleDeleteRequest = (id) => {
    setDocToDelete(id);
  };

  const confirmDelete = () => {
    setDocsData(prev => prev.filter(doc => doc.id !== docToDelete));
    setDocToDelete(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDoc = {
      ...formData,
      id: editId || Date.now(),
      downloads: editId ? (docsData.find(d => d.id === editId)?.downloads || 0) : 0
    };

    if (editId) {
      setDocsData(prev => prev.map(doc => doc.id === editId ? newDoc : doc));
    } else {
      setDocsData(prev => [newDoc, ...prev]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="py-16 px-4 sm:px-8 max-w-6xl mx-auto animate-fade-in pb-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4 px-2 md:px-0">
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Repositori Berkas</h1>
          <p className="text-gray-500 max-w-3xl text-lg font-medium leading-relaxed">
            Pusat pangkalan data publik yang terstruktur. Temukan, pratinjau, dan unduh dokumen resmi organisasi kami dengan cepat.
          </p>
        </div>
        {isAdmin && (
          <button 
            onClick={() => handleOpenForm()}
            className="flex shrink-0 items-center gap-2 bg-rose-600 text-white px-6 py-3 rounded-full font-bold hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/20"
          >
            <Plus className="h-5 w-5" /> Tambah Dokumen
          </button>
        )}
      </div>

      <div className="bg-white/80 backdrop-blur-md p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col md:flex-row gap-6 mb-12 mx-2 md:px-0">
        <div className="relative flex-1">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
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
            <Filter className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select 
              className="w-full pl-14 pr-10 py-4 bg-gray-50/50 hover:bg-gray-50 border border-transparent rounded-[1.5rem] focus:bg-white focus:border-rose-300 focus:ring-4 focus:ring-rose-100 outline-none transition-all font-medium text-gray-700 appearance-none cursor-pointer"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div className="bg-transparent rounded-3xl overflow-hidden px-2 md:px-0">
        {filteredDocs.length === 0 ? (
          <div className="p-16 text-center bg-white rounded-[2rem] border border-gray-100 shadow-sm">
            <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 font-medium text-lg">Tidak ada dokumen yang relevan ditemukan.</p>
          </div>
        ) : (
          <div className="space-y-5">
            {filteredDocs.map(doc => {
              const currentDownloads = downloadsMap[doc.id] || doc.downloads;
              return (
                <div key={doc.id} className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100/80 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8 group">
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-[1.5rem] shrink-0 transition-transform group-hover:scale-110 ${doc.ext === 'PDF' ? 'bg-rose-50 text-rose-600' : doc.ext === 'DOCX' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'}`}>
                      <FileText className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-gray-900 text-xl group-hover:text-rose-700 transition-colors mb-2">{doc.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 font-medium">
                        <span className="bg-gray-100/80 px-3 py-1 rounded-full text-xs text-gray-700">{doc.category}</span>
                        <span>{doc.date}</span>
                        <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gray-300"></span>
                        <span>{doc.size}</span>
                        <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gray-300"></span>
                        <span className="text-rose-600/80 font-semibold">{currentDownloads} Unduhan</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap lg:flex-nowrap gap-3 w-full lg:w-auto">
                    {isAdmin && (
                      <>
                        <button onClick={() => handleOpenForm(doc)} className="flex-1 lg:flex-none p-3 lg:px-4 bg-gray-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors flex justify-center items-center gap-2" title="Edit Data">
                          <Edit className="h-4 w-4" /> <span className="lg:hidden text-sm font-bold">Edit</span>
                        </button>
                        <button onClick={() => handleDeleteRequest(doc.id)} className="flex-1 lg:flex-none p-3 lg:px-4 bg-gray-50 text-rose-600 rounded-full hover:bg-rose-100 transition-colors flex justify-center items-center gap-2" title="Hapus Dokumen">
                          <Trash2 className="h-4 w-4" /> <span className="lg:hidden text-sm font-bold">Hapus</span>
                        </button>
                      </>
                    )}
                    <div className="w-full lg:w-auto flex gap-3 mt-2 lg:mt-0">
                      <button 
                        onClick={() => setPreviewDoc(doc)}
                        className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-gray-50 text-gray-700 rounded-full hover:bg-gray-100 transition-colors text-sm font-bold"
                      >
                        <Eye className="h-4 w-4" /> Buka
                      </button>
                      <button 
                        onClick={() => handleDownload(doc)}
                        className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-all shadow-lg shadow-rose-600/20 hover:shadow-rose-600/40 hover:-translate-y-0.5 text-sm font-bold"
                      >
                        <Download className="h-4 w-4" /> Unduh
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {previewDoc && (
        <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-6 animate-fade-in">
          <div className="bg-white w-full max-w-5xl h-[95vh] sm:h-[90vh] rounded-[2rem] flex flex-col shadow-2xl overflow-hidden ring-1 ring-white/10">
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

            <div className="flex-1 bg-gray-100/50 flex justify-center overflow-y-auto p-4 sm:p-8">
              {previewDoc.fileUrl && (previewDoc.ext === 'PDF' || previewDoc.ext === 'JPG' || previewDoc.ext === 'PNG') ? (
                <div className="bg-white w-full max-w-4xl min-h-[800px] shadow-lg rounded-2xl border border-gray-200 overflow-hidden flex flex-col items-center justify-center">
                  {previewDoc.ext === 'PDF' ? (
                    <iframe src={previewDoc.fileUrl} className="w-full h-full min-h-[800px]" title={previewDoc.title} />
                  ) : (
                    <img src={previewDoc.fileUrl} alt={previewDoc.title} className="w-full h-auto max-h-[90vh] object-contain p-4" />
                  )}
                </div>
              ) : (
                <div className="bg-white w-full max-w-3xl min-h-[800px] shadow-lg rounded-2xl p-12 text-center border border-gray-200">
                  <div className="border-b-2 border-rose-600/20 pb-6 mb-8">
                    <h1 className="text-3xl font-extrabold uppercase text-gray-900 tracking-tight">{previewDoc.title}</h1>
                    <p className="text-gray-400 font-medium mt-3 tracking-wide">Diterbitkan: {previewDoc.date}</p>
                  </div>
                  
                  <div className="text-left text-gray-600 space-y-6 font-medium leading-relaxed">
                    <div className="bg-rose-50/50 border border-rose-100 p-6 rounded-2xl text-center">
                      <span className="text-rose-600 font-bold block mb-2">[ Area Pratinjau Dokumen ]</span>
                      <span className="text-sm text-gray-500">
                        {previewDoc.fileUrl 
                          ? "Pratinjau untuk tipe berkas ini tidak didukung di browser secara langsung. Silakan unduh untuk melihat." 
                          : "Pada implementasi asli, area ini akan diganti dengan iframe Google Docs Viewer atau komponen PDF renderer."}
                      </span>
                    </div>
                    {!previewDoc.fileUrl && (
                      <>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="px-6 py-4 border-t border-gray-100 bg-white flex justify-between items-center z-10">
              <span className="text-sm font-bold text-gray-400">Halaman 1 dari 1</span>
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

      {/* Form CRUD Dokumen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-fade-in" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white w-full max-w-xl rounded-[2rem] p-8 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-extrabold text-gray-900">{editId ? 'Edit Dokumen' : 'Tambah Dokumen'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600"><X className="h-6 w-6" /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Judul Dokumen</label>
                <input required type="text" placeholder="Masukkan judul dokumen..." className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-200 outline-none" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-gray-700 mb-1">Kategori</label>
                  <select className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-200 outline-none" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
                    {categories.filter(c => c !== 'Semua').map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-gray-700 mb-1">Tanggal</label>
                  <input required type="text" placeholder="Misal: 01 Jan 2026" className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-200 outline-none" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-gray-700 mb-1">Ekstensi/Tipe</label>
                  <select className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-200 outline-none" value={formData.ext} onChange={e => setFormData({...formData, ext: e.target.value})}>
                    <option value="PDF">PDF</option>
                    <option value="DOCX">DOCX</option>
                    <option value="PPTX">PPTX</option>
                    <option value="XLSX">XLSX</option>
                    <option value="JPG">JPG</option>
                    <option value="PNG">PNG</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-gray-700 mb-1">Ukuran File</label>
                  <input required type="text" placeholder="Misal: 2.5 MB" className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-200 outline-none" value={formData.size} onChange={e => setFormData({...formData, size: e.target.value})} />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Unggah Dokumen (Simulasi)</label>
                <div className="relative">
                  <input type="file" id="file-upload" onChange={handleFileChange} className="hidden" />
                  <label htmlFor="file-upload" className="w-full flex items-center justify-between p-3.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 border-dashed rounded-xl cursor-pointer transition-all">
                    <span className="text-gray-500 font-medium text-sm">Pilih berkas dari komputer...</span>
                    <div className="bg-rose-100 text-rose-700 px-4 py-1.5 rounded-lg text-xs font-bold shrink-0 shadow-sm">Cari Berkas</div>
                  </label>
                </div>
                {formData.fileName && (
                  <div className="mt-3 bg-rose-50 border border-rose-100 p-3 rounded-xl flex items-center gap-3 animate-fade-in">
                    <div className="p-2 bg-white rounded-lg shadow-sm"><FileText className="h-5 w-5 text-rose-500"/></div>
                    <span className="text-sm font-bold text-rose-800 line-clamp-1">{formData.fileName}</span>
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-bold hover:bg-gray-200 transition-colors">Batal</button>
                <button type="submit" className="px-6 py-3 bg-rose-600 text-white rounded-full font-bold hover:bg-rose-700 shadow-lg shadow-rose-600/20 transition-all">Simpan Dokumen</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Konfirmasi Hapus Dokumen */}
      {docToDelete && (
        <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-[80] flex items-center justify-center p-4 animate-fade-in" onClick={() => setDocToDelete(null)}>
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Hapus Dokumen?</h3>
            <p className="text-gray-500 mb-6 font-medium">Tindakan ini tidak dapat dibatalkan. Dokumen akan dihapus dari repositori.</p>
            <div className="flex gap-3">
              <button onClick={() => setDocToDelete(null)} className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors">Batal</button>
              <button onClick={confirmDelete} className="flex-1 py-3 bg-rose-600 text-white rounded-xl font-bold hover:bg-rose-700 transition-colors">Ya, Hapus</button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Download */}
      {downloadToast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-gray-900/95 backdrop-blur-sm text-white px-6 py-4 rounded-full shadow-2xl z-[100] flex items-center gap-3 animate-fade-in">
          <Download className="h-5 w-5 text-emerald-400 animate-bounce" />
          <span className="font-medium text-sm">Mengunduh <b>{downloadToast}</b>...</span>
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
      <a href="#" className="group bg-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(225,29,72,0.08)] hover:-translate-y-1 transition-all duration-300 border border-gray-50 flex items-center gap-6">
        <div className="bg-rose-50 text-rose-600 p-5 rounded-3xl group-hover:scale-110 transition-transform">
          <Mail className="h-8 w-8" />
        </div>
        <div>
          <h3 className="font-extrabold text-2xl text-gray-900 mb-1">Email Resmi</h3>
          <p className="text-gray-500 font-medium text-lg group-hover:text-rose-600 transition-colors">info@nusabakti.org</p>
        </div>
      </a>

      <a href="#" className="group bg-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(16,185,129,0.12)] hover:-translate-y-1 transition-all duration-300 border border-gray-50 flex items-center gap-6">
        <div className="bg-emerald-50 text-emerald-600 p-5 rounded-3xl group-hover:scale-110 transition-transform">
          <MessageCircle className="h-8 w-8" />
        </div>
        <div>
          <h3 className="font-extrabold text-2xl text-gray-900 mb-1">WhatsApp</h3>
          <p className="text-gray-500 font-medium text-lg group-hover:text-emerald-600 transition-colors">0812-3456-7890</p>
        </div>
      </a>

      <a href="#" className="group bg-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(217,70,239,0.12)] hover:-translate-y-1 transition-all duration-300 border border-gray-50 flex items-center gap-6">
        <div className="bg-fuchsia-50 text-fuchsia-600 p-5 rounded-3xl group-hover:scale-110 transition-transform">
          <Instagram className="h-8 w-8" />
        </div>
        <div>
          <h3 className="font-extrabold text-2xl text-gray-900 mb-1">Instagram</h3>
          <p className="text-gray-500 font-medium text-lg group-hover:text-fuchsia-600 transition-colors">@nusabakti</p>
        </div>
      </a>

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
  const [isAdmin, setIsAdmin] = useState(false); 
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState(false);
  
  const [newsData, setNewsData] = useState(MOCK_NEWS);
  const [docsData, setDocsData] = useState(MOCK_DOCS);

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginForm.username === 'admin' && loginForm.password === 'admin123') {
      setIsAdmin(true);
      setShowLoginModal(false);
      setLoginForm({ username: '', password: '' });
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

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
        
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}} />
      
      <Navbar currentView={currentView} setView={setCurrentView} isAdmin={isAdmin} setIsAdmin={setIsAdmin} setShowLoginModal={setShowLoginModal} />
      
      <main className="flex-1 w-full">
        {currentView === 'home' && <HomeView setView={setCurrentView} newsData={newsData} />}
        {currentView === 'profile' && <ProfileView />}
        {currentView === 'proker' && <ProkerView newsData={newsData} setNewsData={setNewsData} isAdmin={isAdmin} />}
        {currentView === 'repo' && <RepositoryView docsData={docsData} setDocsData={setDocsData} isAdmin={isAdmin} />}
        {currentView === 'contact' && <ContactView />}
      </main>

      {/* Modal Login Admin */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-[70] flex items-center justify-center p-4 animate-fade-in" onClick={() => setShowLoginModal(false)}>
          <div className="bg-white w-full max-w-md rounded-[2.5rem] p-8 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900">Akses Admin</h2>
                <p className="text-sm font-medium text-gray-500 mt-1">Masuk untuk mengelola data portal.</p>
              </div>
              <button onClick={() => setShowLoginModal(false)} className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-400 transition-colors"><X className="h-5 w-5" /></button>
            </div>
            
            {loginError && (
              <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-bold border border-red-100 text-center animate-fade-in">
                Username atau password salah!
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Username</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input 
                    required 
                    type="text" 
                    placeholder="Masukkan username" 
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-rose-200 focus:border-rose-300 outline-none transition-all font-medium"
                    value={loginForm.username} 
                    onChange={e => setLoginForm({...loginForm, username: e.target.value})} 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <Key className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input 
                    required 
                    type="password" 
                    placeholder="Masukkan password" 
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-rose-200 focus:border-rose-300 outline-none transition-all font-medium"
                    value={loginForm.password} 
                    onChange={e => setLoginForm({...loginForm, password: e.target.value})} 
                  />
                </div>
              </div>
              
              <button type="submit" className="w-full mt-6 py-4 bg-rose-600 text-white rounded-xl font-bold hover:bg-rose-700 shadow-lg shadow-rose-600/20 hover:shadow-rose-600/40 hover:-translate-y-0.5 transition-all text-lg">
                Masuk
              </button>
            </form>
            
            <div className="mt-6 text-center text-xs font-medium text-gray-400">
              Gunakan <span className="font-bold text-gray-600">admin</span> / <span className="font-bold text-gray-600">admin123</span>
            </div>
          </div>
        </div>
      )}

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
