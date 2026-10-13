import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Building2, 
  Code2, 
  FolderGit2, 
  Users, 
  Briefcase, 
  FileText, 
  MessageSquare, 
  HelpCircle, 
  LogOut, 
  Eye, 
  Plus, 
  Edit3, 
  Trash2, 
  Check, 
  Sparkles, 
  AlertCircle, 
  Save, 
  RotateCcw, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Search, 
  Sliders, 
  Download,
  Mail,
  Phone,
  FileCheck
} from 'lucide-react';
import { useCompany } from '../../context/CompanyContext';
import { ServiceItem, ProjectCaseStudy, JobOpening, BlogPost, TeamMember, FAQItem } from '../../types';

interface AdminDashboardProps {
  onBackToPublicWebsite: () => void;
}

type AdminTab = 
  | 'overview' 
  | 'company' 
  | 'services' 
  | 'projects' 
  | 'careers' 
  | 'blog' 
  | 'inbound' 
  | 'faqs';

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBackToPublicWebsite }) => {
  const {
    companyInfo,
    updateCompanyInfo,
    services,
    addService,
    updateService,
    deleteService,
    projects,
    addProject,
    updateProject,
    deleteProject,
    jobs,
    addJob,
    updateJob,
    deleteJob,
    blogPosts,
    addBlogPost,
    updateBlogPost,
    deleteBlogPost,
    teamMembers,
    addTeamMember,
    updateTeamMember,
    deleteTeamMember,
    faqs,
    addFaq,
    updateFaq,
    deleteFaq,
    inboundQuotes,
    updateQuoteStatus,
    inboundApplications,
    updateApplicationStatus,
    inboundMessages,
    updateMessageStatus,
    adminUser,
    logoutAdmin,
    resetToDefaultData
  } = useCompany();

  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [saveToast, setSaveToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setSaveToast(msg);
    setTimeout(() => setSaveToast(null), 3000);
  };

  const [editCompanyForm, setEditCompanyForm] = useState({
    name: companyInfo.name,
    tagline: companyInfo.tagline,
    headline: companyInfo.headline,
    subheadline: companyInfo.subheadline,
    email: companyInfo.email,
    phone: companyInfo.phone,
    whatsapp: companyInfo.whatsapp,
    addressMain: companyInfo.addressMain,
    addressBranch: companyInfo.addressBranch,
    nib: companyInfo.nib,
    skKemenkumham: companyInfo.skKemenkumham
  });

  useEffect(() => {
    setEditCompanyForm({
      name: companyInfo.name,
      tagline: companyInfo.tagline,
      headline: companyInfo.headline,
      subheadline: companyInfo.subheadline,
      email: companyInfo.email,
      phone: companyInfo.phone,
      whatsapp: companyInfo.whatsapp,
      addressMain: companyInfo.addressMain,
      addressBranch: companyInfo.addressBranch,
      nib: companyInfo.nib,
      skKemenkumham: companyInfo.skKemenkumham
    });
  }, [companyInfo]);

  const handleSaveCompanyInfo = (e: React.FormEvent) => {
    e.preventDefault();
    updateCompanyInfo(editCompanyForm);
    showToast('Profil dan informasi publik perusahaan berhasil diperbarui!');
  };

  // ------------------- SERVICES CRUD STATE -------------------
  const [editingServiceId, setEditingServiceId] = useState<string | null>(null);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [serviceForm, setServiceForm] = useState<Partial<ServiceItem>>({
    title: '',
    shortDesc: '',
    fullDesc: '',
    category: 'Software Engineering',
    startingPrice: 'Mulai Rp 50.000.000',
    timeline: '4 - 8 Minggu',
    benefits: ['Efisiensi operasional', 'Arsitektur cloud teruji'],
    deliverables: ['Dokumen SRS & Arsitektur', 'Source code & garansi']
  });

  const handleOpenAddService = () => {
    setEditingServiceId(null);
    setServiceForm({
      id: `service-${Date.now()}`,
      title: '',
      shortDesc: '',
      fullDesc: '',
      category: 'Software Engineering',
      startingPrice: 'Mulai Rp 50.000.000',
      timeline: '4 - 8 Minggu',
      benefits: ['Efisiensi operasional hingga 40%', 'Arsitektur cloud teruji'],
      deliverables: ['Dokumentasi SRS & Arsitektur', 'Source code 100% hak milik']
    });
    setServiceModalOpen(true);
  };

  const handleOpenEditService = (srv: ServiceItem) => {
    setEditingServiceId(srv.id);
    setServiceForm({ ...srv });
    setServiceModalOpen(true);
  };

  const handleSaveService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceForm.title) return;

    if (editingServiceId) {
      updateService(editingServiceId, serviceForm);
      showToast(`Layanan "${serviceForm.title}" berhasil diperbarui!`);
    } else {
      addService(serviceForm as ServiceItem);
      showToast(`Layanan baru "${serviceForm.title}" berhasil ditambahkan ke publik!`);
    }
    setServiceModalOpen(false);
  };

  // ------------------- PROJECTS CRUD STATE -------------------
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [projectForm, setProjectForm] = useState<Partial<ProjectCaseStudy>>({
    title: '',
    client: '',
    category: 'Finansial & Perbankan',
    year: '2026',
    duration: '4 Bulan',
    overview: '',
    challenge: '',
    solution: '',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    results: [{ label: 'Peningkatan Efisiensi', value: '+250%', subtext: 'Hasil audit operasional' }],
    beforeAfter: {
      beforeText: 'Proses manual lambat dan sering terjadi kesalahan data.',
      afterText: 'Sistem otomatis real-time berkinerja tinggi.',
      beforeMetric: 'Lama proses: 5 hari',
      afterMetric: 'Lama proses: Real-time'
    },
    techStack: ['React', 'Golang', 'PostgreSQL']
  });

  const handleOpenAddProject = () => {
    setEditingProjectId(null);
    setProjectForm({
      id: `proj-${Date.now()}`,
      title: '',
      client: '',
      category: 'Finansial & Perbankan',
      year: '2026',
      duration: '4 Bulan',
      overview: '',
      challenge: '',
      solution: '',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      results: [{ label: 'Peningkatan Efisiensi', value: '+250%', subtext: 'Hasil audit operasional' }],
      beforeAfter: {
        beforeText: 'Proses manual lambat dan sering terjadi kesalahan data.',
        afterText: 'Sistem otomatis real-time berkinerja tinggi.',
        beforeMetric: 'Lama proses: 5 hari',
        afterMetric: 'Lama proses: Real-time'
      },
      techStack: ['React', 'Golang', 'PostgreSQL']
    });
    setProjectModalOpen(true);
  };

  const handleOpenEditProject = (proj: ProjectCaseStudy) => {
    setEditingProjectId(proj.id);
    setProjectForm({ ...proj });
    setProjectModalOpen(true);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectForm.title) return;

    if (editingProjectId) {
      updateProject(editingProjectId, projectForm);
      showToast(`Proyek "${projectForm.title}" berhasil diperbarui!`);
    } else {
      addProject(projectForm as ProjectCaseStudy);
      showToast(`Studi kasus baru "${projectForm.title}" berhasil dipublikasikan!`);
    }
    setProjectModalOpen(false);
  };

  // ------------------- BLOG POSTS CRUD STATE -------------------
  const [blogModalOpen, setBlogModalOpen] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const [blogForm, setBlogForm] = useState<Partial<BlogPost>>({
    title: '',
    slug: '',
    summary: '',
    content: ['Paragraf pertama wawasan industri...'],
    category: 'Transformasi Digital',
    author: {
      name: adminUser?.name || 'Tim Riset PT Anonim',
      role: 'Super Administrator',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    publishedAt: 'Oktober 2026',
    readTimeMinutes: 5,
    tags: ['Teknologi', 'Enterprise'],
    featuredImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80'
  });

  const handleOpenAddBlog = () => {
    setEditingBlogId(null);
    setBlogForm({
      id: `article-${Date.now()}`,
      title: '',
      slug: 'artikel-baru',
      summary: '',
      content: ['Tuliskan pembahasan mendalam artikel di sini...'],
      category: 'Transformasi Digital',
      author: {
        name: adminUser?.name || 'Tim Riset PT Anonim',
        role: 'Super Administrator',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
      },
      publishedAt: 'Oktober 2026',
      readTimeMinutes: 5,
      tags: ['Transformasi', 'Teknologi'],
      featuredImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80'
    });
    setBlogModalOpen(true);
  };

  const handleOpenEditBlog = (post: BlogPost) => {
    setEditingBlogId(post.id);
    setBlogForm({ ...post });
    setBlogModalOpen(true);
  };

  const handleSaveBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogForm.title) return;

    if (editingBlogId) {
      updateBlogPost(editingBlogId, blogForm);
      showToast(`Artikel "${blogForm.title}" berhasil diperbarui!`);
    } else {
      addBlogPost(blogForm as BlogPost);
      showToast(`Artikel baru "${blogForm.title}" berhasil dipublikasikan!`);
    }
    setBlogModalOpen(false);
  };

  // ------------------- JOBS CRUD STATE -------------------
  const [jobModalOpen, setJobModalOpen] = useState(false);
  const [editingJobId, setEditingJobId] = useState<string | null>(null);
  const [jobForm, setJobForm] = useState<Partial<JobOpening>>({
    title: '',
    department: 'Engineering',
    type: 'Hybrid',
    location: 'Jakarta Selatan (SCBD)',
    experience: '3+ Tahun',
    summary: '',
    responsibilities: ['Tanggung jawab pekerjaan 1'],
    requirements: ['Persyaratan kualifikasi 1'],
    perks: ['Gaji kompetitif + asuransi'],
    postedDate: 'Aktif Dibuka'
  });

  const handleOpenAddJob = () => {
    setEditingJobId(null);
    setJobForm({
      id: `job-${Date.now()}`,
      title: '',
      department: 'Engineering',
      type: 'Hybrid',
      location: 'Jakarta Selatan (SCBD)',
      experience: '3+ Tahun',
      summary: '',
      responsibilities: ['Mengembangkan sistem perangkat lunak skala enterprise'],
      requirements: ['Pengalaman minimal 3 tahun di bidang terkait'],
      perks: ['Gaji kompetitif + Asuransi keluarga lengkap'],
      postedDate: 'Aktif Dibuka'
    });
    setJobModalOpen(true);
  };

  const handleOpenEditJob = (jb: JobOpening) => {
    setEditingJobId(jb.id);
    setJobForm({ ...jb });
    setJobModalOpen(true);
  };

  const handleSaveJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobForm.title) return;

    if (editingJobId) {
      updateJob(editingJobId, jobForm);
      showToast(`Lowongan "${jobForm.title}" berhasil diperbarui!`);
    } else {
      addJob(jobForm as JobOpening);
      showToast(`Lowongan baru "${jobForm.title}" berhasil diterbitkan ke publik!`);
    }
    setJobModalOpen(false);
  };

  // ------------------- FAQ STATE -------------------
  const [faqModalOpen, setFaqModalOpen] = useState(false);
  const [editingFaqIndex, setEditingFaqIndex] = useState<number | null>(null);
  const [faqForm, setFaqForm] = useState<FAQItem>({
    question: '',
    answer: ''
  });

  const handleOpenAddFaq = () => {
    setEditingFaqIndex(null);
    setFaqForm({ question: '', answer: '' });
    setFaqModalOpen(true);
  };

  const handleOpenEditFaq = (idx: number, f: FAQItem) => {
    setEditingFaqIndex(idx);
    setFaqForm({ ...f });
    setFaqModalOpen(true);
  };

  const handleSaveFaq = (e: React.FormEvent) => {
    e.preventDefault();
    if (!faqForm.question || !faqForm.answer) return;

    if (editingFaqIndex !== null) {
      updateFaq(editingFaqIndex, faqForm);
      showToast('Pertanyaan FAQ berhasil diperbarui!');
    } else {
      addFaq(faqForm);
      showToast('FAQ baru berhasil ditambahkan!');
    }
    setFaqModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      {/* Toast Notification */}
      {saveToast && (
        <div className="fixed top-5 right-5 z-50 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 animate-in slide-in-from-top duration-200 text-xs font-semibold">
          <CheckCircle2 className="w-4 h-4" />
          <span>{saveToast}</span>
        </div>
      )}

      {/* Top Super Admin Header */}
      <header className="bg-slate-950 border-b border-slate-800 px-4 sm:px-8 py-3.5 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-black text-white text-xs shadow-md">
            ANO
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-extrabold text-white font-heading tracking-tight">
                PUSAT KENDALI SUPER ADMIN
              </h1>
              <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-bold border border-blue-400/30">
                CMS LIVE
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Pengaturan Publikasi Website • PT Anonim
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* View Public Website */}
          <button
            onClick={onBackToPublicWebsite}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
          >
            <Eye className="w-4 h-4" />
            <span className="hidden sm:inline">Lihat Tampilan Publik</span>
          </button>

          {/* User Profile Snippet */}
          <div className="hidden md:flex items-center gap-2.5 pl-3 border-l border-slate-800 text-right">
            <div>
              <span className="text-xs font-bold text-slate-200 block leading-tight">
                {adminUser?.name || 'Super Admin'}
              </span>
              <span className="text-[10px] text-emerald-400 font-mono">
                {adminUser?.role || 'SUPER_ADMIN'}
              </span>
            </div>
            <img
              src={adminUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
              alt="Admin"
              className="w-8 h-8 rounded-full object-cover border border-slate-700"
            />
          </div>

          {/* Logout */}
          <button
            onClick={() => {
              logoutAdmin();
              onBackToPublicWebsite();
            }}
            className="p-2 rounded-xl bg-slate-800 hover:bg-rose-950/80 hover:text-rose-400 text-slate-400 transition-colors cursor-pointer"
            title="Keluar dari Admin"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Admin Console Layout */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Sidebar Navigation */}
        <aside className="w-full lg:w-64 bg-slate-950 border-r border-slate-800 p-4 space-y-1.5 shrink-0 overflow-y-auto">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3 py-2">
            Modul Publikasi Konten
          </div>

          {[
            { id: 'overview', label: 'Ringkasan & Status', icon: LayoutDashboard, badge: 'Live' },
            { id: 'company', label: 'Profil & Info Beranda', icon: Building2 },
            { id: 'services', label: 'Layanan & Paket Harga', icon: Code2, count: services.length },
            { id: 'projects', label: 'Portofolio & Studi Kasus', icon: FolderGit2, count: projects.length },
            { id: 'careers', label: 'Tim & Lowongan Karier', icon: Briefcase, count: jobs.length },
            { id: 'blog', label: 'Blog & Artikel Edukasi', icon: FileText, count: blogPosts.length },
            { id: 'inbound', label: 'Inbox Penawaran (RFP)', icon: MessageSquare, count: inboundQuotes.length + inboundApplications.length, highlight: true },
            { id: 'faqs', label: 'Pertanyaan Umum (FAQ)', icon: HelpCircle, count: faqs.length },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as AdminTab)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </div>
                {item.count !== undefined && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                    item.highlight && !isActive
                      ? 'bg-amber-500/20 text-amber-300'
                      : isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {item.count}
                  </span>
                )}
                {item.badge && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-6 mt-6 border-t border-slate-800/80 px-2 space-y-2">
            <button
              onClick={() => {
                if (window.confirm('Kembalikan semua data konten ke default bawaan PT Anonim?')) {
                  resetToDefaultData();
                  showToast('Data berhasil dikembalikan ke standar awal.');
                }
              }}
              className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-[11px] text-slate-400 hover:text-slate-200 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
              <span>Reset Data ke Bawaan</span>
            </button>
          </div>
        </aside>

        {/* Main Content Workspace */}
        <main className="flex-1 p-4 sm:p-8 bg-slate-900 overflow-y-auto">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-8 max-w-6xl">
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                  Ikhtisar Konten Publik
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1">
                  Status Publikasi & Metrik Web Profil
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Seluruh perubahan yang Anda lakukan di dasbor ini langsung tersimpan dan tampil seketika bagi pengunjung publik.
                </p>
              </div>

              {/* Status Banner */}
              <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-950 border border-blue-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-heading">
                      Website Publik Beroperasi Normal (LIVE)
                    </h3>
                    <p className="text-xs text-slate-300">
                      Domain: <span className="text-blue-300 font-mono">anonim.co.id</span> • Terverifikasi ISO 9001 & ISO 27001
                    </p>
                  </div>
                </div>

                <button
                  onClick={onBackToPublicWebsite}
                  className="px-5 py-2.5 rounded-xl bg-white text-slate-950 font-bold text-xs hover:bg-slate-100 transition-colors shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  Buka Web Sebagai Pengunjung
                </button>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">Layanan Aktif</span>
                  <div className="text-3xl font-black text-white font-heading">{services.length}</div>
                  <span className="text-[11px] text-blue-400 mt-1 block">Tampil di beranda</span>
                </div>
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">Studi Kasus Proyek</span>
                  <div className="text-3xl font-black text-white font-heading">{projects.length}</div>
                  <span className="text-[11px] text-emerald-400 mt-1 block">Sebelum & Sesudah</span>
                </div>
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">Lowongan Karier</span>
                  <div className="text-3xl font-black text-white font-heading">{jobs.length}</div>
                  <span className="text-[11px] text-purple-400 mt-1 block">Posisi dibuka</span>
                </div>
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">Artikel Terbit</span>
                  <div className="text-3xl font-black text-white font-heading">{blogPosts.length}</div>
                  <span className="text-[11px] text-amber-400 mt-1 block">Wawasan industri</span>
                </div>
              </div>

              {/* Quick Jump & Inbound Leads Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-blue-400" />
                      Permintaan Penawaran (RFP) Terbaru
                    </h3>
                    <button
                      onClick={() => setActiveTab('inbound')}
                      className="text-xs text-blue-400 hover:text-blue-300 font-semibold cursor-pointer"
                    >
                      Lihat Semua ({inboundQuotes.length})
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {inboundQuotes.slice(0, 3).map((q) => (
                      <div key={q.id} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs flex items-center justify-between">
                        <div>
                          <span className="font-bold text-white block">{q.name} ({q.company})</span>
                          <span className="text-slate-400 text-[11px]">{q.budgetRange} • {q.targetTimeline}</span>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 font-semibold text-[10px]">
                          {q.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-emerald-400" />
                      Lamaran Pekerjaan Masuk
                    </h3>
                    <button
                      onClick={() => setActiveTab('inbound')}
                      className="text-xs text-blue-400 hover:text-blue-300 font-semibold cursor-pointer"
                    >
                      Lihat Semua ({inboundApplications.length})
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {inboundApplications.slice(0, 3).map((a) => (
                      <div key={a.id} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs flex items-center justify-between">
                        <div>
                          <span className="font-bold text-white block">{a.fullName}</span>
                          <span className="text-slate-400 text-[11px] truncate max-w-xs">{a.jobTitle}</span>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-semibold text-[10px]">
                          {a.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: COMPANY INFO & HERO EDIT */}
          {activeTab === 'company' && (
            <div className="space-y-6 max-w-4xl">
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                  01. Beranda & Identitas
                </span>
                <h2 className="text-2xl font-extrabold text-white font-heading mt-1">
                  Pengaturan Profil & Teks Beranda Publik
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Ubah headline, slogan, kontak hotline, legalitas, dan alamat kantor resmi.
                </p>
              </div>

              <form onSubmit={handleSaveCompanyInfo} className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Nama Resmi Perusahaan
                    </label>
                    <input
                      type="text"
                      required
                      value={editCompanyForm.name}
                      onChange={(e) => setEditCompanyForm({ ...editCompanyForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Slogan / Tagline Perusahaan
                    </label>
                    <input
                      type="text"
                      required
                      value={editCompanyForm.tagline}
                      onChange={(e) => setEditCompanyForm({ ...editCompanyForm, tagline: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Headline Utama Beranda (Hero)
                  </label>
                  <input
                    type="text"
                    required
                    value={editCompanyForm.headline}
                    onChange={(e) => setEditCompanyForm({ ...editCompanyForm, headline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Deskripsi Singkat / Subheadline Beranda
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={editCompanyForm.subheadline}
                    onChange={(e) => setEditCompanyForm({ ...editCompanyForm, subheadline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500 resize-none"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-slate-800">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Email Bisnis Resmi
                    </label>
                    <input
                      type="email"
                      required
                      value={editCompanyForm.email}
                      onChange={(e) => setEditCompanyForm({ ...editCompanyForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Nomor Telepon Hotline
                    </label>
                    <input
                      type="text"
                      required
                      value={editCompanyForm.phone}
                      onChange={(e) => setEditCompanyForm({ ...editCompanyForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      WhatsApp Bisnis
                    </label>
                    <input
                      type="text"
                      required
                      value={editCompanyForm.whatsapp}
                      onChange={(e) => setEditCompanyForm({ ...editCompanyForm, whatsapp: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Alamat Kantor Pusat (SCBD Jakarta)
                    </label>
                    <textarea
                      rows={2}
                      value={editCompanyForm.addressMain}
                      onChange={(e) => setEditCompanyForm({ ...editCompanyForm, addressMain: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500 resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Alamat Kantor Cabang (Surabaya)
                    </label>
                    <textarea
                      rows={2}
                      value={editCompanyForm.addressBranch}
                      onChange={(e) => setEditCompanyForm({ ...editCompanyForm, addressBranch: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500 resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      NIB OSS-RBA
                    </label>
                    <input
                      type="text"
                      value={editCompanyForm.nib}
                      onChange={(e) => setEditCompanyForm({ ...editCompanyForm, nib: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      SK Kemenkumham RI
                    </label>
                    <input
                      type="text"
                      value={editCompanyForm.skKemenkumham}
                      onChange={(e) => setEditCompanyForm({ ...editCompanyForm, skKemenkumham: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    Simpan & Publikasikan Perubahan
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 3: SERVICES MANAGEMENT */}
          {activeTab === 'services' && (
            <div className="space-y-6 max-w-5xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                    03. Manajemen Layanan
                  </span>
                  <h2 className="text-2xl font-extrabold text-white font-heading mt-1">
                    Daftar Layanan Publik ({services.length})
                  </h2>
                  <p className="text-xs text-slate-400">
                    Tambah, perbarui harga awal, rincian benefit, atau hapus layanan yang dipublikasikan.
                  </p>
                </div>

                <button
                  onClick={handleOpenAddService}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md cursor-pointer shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  Tambah Layanan Baru
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((srv) => (
                  <div key={srv.id} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold">
                          {srv.category}
                        </span>
                        <span className="text-xs font-mono font-bold text-emerald-400">
                          {srv.startingPrice}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white font-heading mb-1">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2">
                        {srv.shortDesc}
                      </p>
                      <div className="mt-3 text-[11px] text-slate-500">
                        Durasi pengerjaan: {srv.timeline}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleOpenEditService(srv)}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-blue-900/40 text-blue-400 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm(`Hapus layanan "${srv.title}" dari publikasi?`)) {
                            deleteService(srv.id);
                            showToast(`Layanan "${srv.title}" berhasil dihapus.`);
                          }
                        }}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-rose-950/60 text-rose-400 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Hapus
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: PROJECTS MANAGEMENT */}
          {activeTab === 'projects' && (
            <div className="space-y-6 max-w-5xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                    04. Manajemen Portofolio
                  </span>
                  <h2 className="text-2xl font-extrabold text-white font-heading mt-1">
                    Daftar Studi Kasus Proyek ({projects.length})
                  </h2>
                  <p className="text-xs text-slate-400">
                    Kelola studi kasus sebelum & sesudah, hasil metrik KPI, dan logo mitra.
                  </p>
                </div>

                <button
                  onClick={handleOpenAddProject}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md cursor-pointer shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  Tambah Studi Kasus Proyek
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((proj) => (
                  <div key={proj.id} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-4">
                    <div className="flex gap-4">
                      <img
                        src={proj.thumbnail}
                        alt={proj.title}
                        className="w-20 h-20 rounded-xl object-cover shrink-0 border border-slate-800"
                      />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-bold">
                            {proj.category}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400 font-semibold">{proj.year}</span>
                        </div>
                        <h3 className="text-sm font-bold text-white font-heading line-clamp-1">
                          {proj.title}
                        </h3>
                        <p className="text-[11px] text-blue-400 font-medium">Klien: {proj.client}</p>
                        <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                          {proj.overview}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-[11px] text-emerald-400 font-mono font-bold">
                        {proj.results[0]?.value} ({proj.results[0]?.label})
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleOpenEditProject(proj)}
                          className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-blue-900/40 text-blue-400 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Hapus studi kasus "${proj.title}"?`)) {
                              deleteProject(proj.id);
                              showToast(`Proyek "${proj.title}" berhasil dihapus.`);
                            }
                          }}
                          className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-rose-950/60 text-rose-400 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: CAREERS & TEAM */}
          {activeTab === 'careers' && (
            <div className="space-y-6 max-w-5xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                    05. Tim & Karier
                  </span>
                  <h2 className="text-2xl font-extrabold text-white font-heading mt-1">
                    Lowongan Pekerjaan Aktif ({jobs.length})
                  </h2>
                  <p className="text-xs text-slate-400">
                    Buka atau tutup lowongan, ubah kualifikasi dan lokasi kerja.
                  </p>
                </div>

                <button
                  onClick={handleOpenAddJob}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md cursor-pointer shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  Terbitkan Lowongan Baru
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {jobs.map((jb) => (
                  <div key={jb.id} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px] font-bold">
                          {jb.department}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                          {jb.type}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white font-heading mb-1">
                        {jb.title}
                      </h3>
                      <div className="text-xs text-slate-400">
                        {jb.location} • Pengalaman: {jb.experience}
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-2 mt-2">
                        {jb.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleOpenEditJob(jb)}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-blue-900/40 text-blue-400 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm(`Hapus lowongan "${jb.title}"?`)) {
                            deleteJob(jb.id);
                            showToast(`Lowongan "${jb.title}" berhasil dihapus.`);
                          }
                        }}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-rose-950/60 text-rose-400 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Hapus
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: BLOG CMS */}
          {activeTab === 'blog' && (
            <div className="space-y-6 max-w-5xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                    06. Blog & Artikel Edukasi
                  </span>
                  <h2 className="text-2xl font-extrabold text-white font-heading mt-1">
                    CMS Artikel Terpublikasi ({blogPosts.length})
                  </h2>
                  <p className="text-xs text-slate-400">
                    Tulis artikel wawasan baru, tips industri, atau kabar pembaruan perusahaan.
                  </p>
                </div>

                <button
                  onClick={handleOpenAddBlog}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md cursor-pointer shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  Tulis Artikel Baru
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blogPosts.map((post) => (
                  <div key={post.id} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-4">
                    <div className="flex gap-4">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-20 h-20 rounded-xl object-cover shrink-0 border border-slate-800"
                      />
                      <div>
                        <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-bold block w-fit mb-1">
                          {post.category}
                        </span>
                        <h3 className="text-sm font-bold text-white font-heading line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-[11px] text-slate-400 mt-1">
                          Penulis: {post.author.name} • {post.readTimeMinutes} menit baca
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleOpenEditBlog(post)}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-blue-900/40 text-blue-400 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        Edit Konten
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm(`Hapus artikel "${post.title}"?`)) {
                            deleteBlogPost(post.id);
                            showToast(`Artikel "${post.title}" berhasil dihapus.`);
                          }
                        }}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-rose-950/60 text-rose-400 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Hapus
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: INBOUND LEADS & APPLICATIONS */}
          {activeTab === 'inbound' && (
            <div className="space-y-8 max-w-5xl">
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                  07. Kotak Masuk Permintaan
                </span>
                <h2 className="text-2xl font-extrabold text-white font-heading mt-1">
                  Permintaan Penawaran (RFP), Lamaran, & Pesan Masuk
                </h2>
                <p className="text-xs text-slate-400">
                  Data yang dikirimkan oleh calon klien atau pelamar kerja melalui website publik.
                </p>
              </div>

              {/* RFP List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-blue-400" />
                    Permintaan Penawaran Resmi / RFP ({inboundQuotes.length})
                  </h3>
                </div>

                <div className="space-y-3">
                  {inboundQuotes.map((q) => (
                    <div key={q.id} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-blue-400">{q.id}</span>
                            <span className="text-xs text-slate-500">• {q.submittedAt}</span>
                          </div>
                          <h4 className="text-base font-bold text-white mt-0.5">
                            {q.name} — <span className="text-blue-300">{q.company}</span>
                          </h4>
                        </div>

                        {/* Status Select */}
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-400">Status:</span>
                          <select
                            value={q.status}
                            onChange={(e) => updateQuoteStatus(q.id, e.target.value as any)}
                            className="bg-slate-900 border border-slate-700 text-xs text-white rounded-xl px-3 py-1.5 focus:outline-none font-semibold"
                          >
                            <option value="Baru">Baru</option>
                            <option value="Dihubungi">Dihubungi</option>
                            <option value="Proposal Terkirim">Proposal Terkirim</option>
                            <option value="Selesai">Selesai</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-300">
                        <div><strong>Kontak:</strong> {q.phone} / {q.email}</div>
                        <div><strong>Anggaran:</strong> {q.budgetRange}</div>
                        <div><strong>Target:</strong> {q.targetTimeline}</div>
                      </div>

                      <div className="p-3 bg-slate-900/60 rounded-xl text-xs text-slate-300 border border-slate-800/80">
                        <strong className="text-slate-400 block mb-1">Cakupan Kebutuhan:</strong>
                        {q.projectScope || 'Tidak ada catatan tambahan.'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Job Applications */}
              <div className="space-y-4 pt-6 border-t border-slate-800">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-emerald-400" />
                  Lamaran Pekerjaan Masuk ({inboundApplications.length})
                </h3>

                <div className="space-y-3">
                  {inboundApplications.map((app) => (
                    <div key={app.id} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-emerald-400">{app.id}</span>
                            <span className="text-xs text-slate-500">• {app.submittedAt}</span>
                          </div>
                          <h4 className="text-base font-bold text-white mt-0.5">
                            {app.fullName}
                          </h4>
                          <span className="text-xs text-blue-400 font-semibold">{app.jobTitle}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-400">Status:</span>
                          <select
                            value={app.status}
                            onChange={(e) => updateApplicationStatus(app.id, e.target.value as any)}
                            className="bg-slate-900 border border-slate-700 text-xs text-white rounded-xl px-3 py-1.5 focus:outline-none font-semibold"
                          >
                            <option value="Screening">Screening</option>
                            <option value="Interview">Interview</option>
                            <option value="Diterima">Diterima</option>
                            <option value="Ditolak">Ditolak</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-300">
                        <div><strong>Kontak:</strong> {app.phone} / {app.email}</div>
                        <div><strong>Pengalaman:</strong> {app.yearsExp}</div>
                        <div><strong>Berkas:</strong> {app.fileName || 'CV.pdf'}</div>
                      </div>

                      {app.coverLetter && (
                        <div className="p-3 bg-slate-900/60 rounded-xl text-xs text-slate-300 border border-slate-800/80">
                          <strong className="text-slate-400 block mb-1">Surat Pengantar:</strong>
                          {app.coverLetter}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: FAQS MANAGEMENT */}
          {activeTab === 'faqs' && (
            <div className="space-y-6 max-w-4xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                    Pertanyaan Umum (FAQ)
                  </span>
                  <h2 className="text-2xl font-extrabold text-white font-heading mt-1">
                    Kelola FAQ Publik ({faqs.length})
                  </h2>
                  <p className="text-xs text-slate-400">
                    Tambah atau sunting jawaban seputar legalitas, NDA, garansi, dan cara kerja sama.
                  </p>
                </div>

                <button
                  onClick={handleOpenAddFaq}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md cursor-pointer shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  Tambah Pertanyaan FAQ
                </button>
              </div>

              <div className="space-y-3">
                {faqs.map((f, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-sm font-bold text-white font-heading">
                        {idx + 1}. {f.question}
                      </h3>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => handleOpenEditFaq(idx, f)}
                          className="p-1.5 rounded-lg bg-slate-900 hover:bg-blue-900/40 text-blue-400 transition-colors cursor-pointer"
                          title="Edit FAQ"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm('Hapus pertanyaan FAQ ini?')) {
                              deleteFaq(idx);
                              showToast('FAQ berhasil dihapus.');
                            }
                          }}
                          className="p-1.5 rounded-lg bg-slate-900 hover:bg-rose-950/60 text-rose-400 transition-colors cursor-pointer"
                          title="Hapus FAQ"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {f.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ----------------- SUB-MODAL: SERVICE FORM ----------------- */}
      {serviceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 text-white w-full max-w-xl rounded-3xl p-6 sm:p-8 space-y-4 my-8">
            <h3 className="text-xl font-bold font-heading">
              {editingServiceId ? 'Edit Layanan Publik' : 'Tambah Layanan Baru'}
            </h3>

            <form onSubmit={handleSaveService} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Judul Layanan *</label>
                <input
                  type="text"
                  required
                  value={serviceForm.title || ''}
                  onChange={(e) => setServiceForm({ ...serviceForm, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Kategori</label>
                  <input
                    type="text"
                    value={serviceForm.category || ''}
                    onChange={(e) => setServiceForm({ ...serviceForm, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Harga Mulai</label>
                  <input
                    type="text"
                    value={serviceForm.startingPrice || ''}
                    onChange={(e) => setServiceForm({ ...serviceForm, startingPrice: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Deskripsi Singkat</label>
                <textarea
                  rows={2}
                  required
                  value={serviceForm.shortDesc || ''}
                  onChange={(e) => setServiceForm({ ...serviceForm, shortDesc: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500 resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Deskripsi Lengkap Solusi</label>
                <textarea
                  rows={3}
                  required
                  value={serviceForm.fullDesc || ''}
                  onChange={(e) => setServiceForm({ ...serviceForm, fullDesc: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500 resize-none"
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setServiceModalOpen(false)}
                  className="px-4 py-2 text-xs text-slate-400 hover:text-white"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs"
                >
                  Simpan Layanan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ----------------- SUB-MODAL: PROJECT FORM ----------------- */}
      {projectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 text-white w-full max-w-2xl rounded-3xl p-6 sm:p-8 space-y-4 my-8 max-h-[85vh] overflow-y-auto">
            <h3 className="text-xl font-bold font-heading">
              {editingProjectId ? 'Edit Studi Kasus Proyek' : 'Tambah Studi Kasus Proyek'}
            </h3>

            <form onSubmit={handleSaveProject} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Judul Proyek *</label>
                  <input
                    type="text"
                    required
                    value={projectForm.title || ''}
                    onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Nama Klien *</label>
                  <input
                    type="text"
                    required
                    value={projectForm.client || ''}
                    onChange={(e) => setProjectForm({ ...projectForm, client: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Kategori</label>
                  <select
                    value={projectForm.category}
                    onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none"
                  >
                    <option value="Finansial & Perbankan">Finansial & Perbankan</option>
                    <option value="BUMN & Smart City">BUMN & Smart City</option>
                    <option value="Kesehatan & Medis">Kesehatan & Medis</option>
                    <option value="E-Commerce & Retail">E-Commerce & Retail</option>
                    <option value="Manufaktur & Logistik">Manufaktur & Logistik</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Tahun</label>
                  <input
                    type="text"
                    value={projectForm.year || '2026'}
                    onChange={(e) => setProjectForm({ ...projectForm, year: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Durasi</label>
                  <input
                    type="text"
                    value={projectForm.duration || '6 Bulan'}
                    onChange={(e) => setProjectForm({ ...projectForm, duration: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Ringkasan Proyek</label>
                <textarea
                  rows={2}
                  required
                  value={projectForm.overview || ''}
                  onChange={(e) => setProjectForm({ ...projectForm, overview: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none resize-none"
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Tantangan Awal</label>
                  <textarea
                    rows={3}
                    value={projectForm.challenge || ''}
                    onChange={(e) => setProjectForm({ ...projectForm, challenge: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none resize-none"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Solusi Terapan PT Anonim</label>
                  <textarea
                    rows={3}
                    value={projectForm.solution || ''}
                    onChange={(e) => setProjectForm({ ...projectForm, solution: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setProjectModalOpen(false)}
                  className="px-4 py-2 text-xs text-slate-400 hover:text-white"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs"
                >
                  Simpan Proyek
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ----------------- SUB-MODAL: BLOG FORM ----------------- */}
      {blogModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 text-white w-full max-w-xl rounded-3xl p-6 sm:p-8 space-y-4 my-8">
            <h3 className="text-xl font-bold font-heading">
              {editingBlogId ? 'Edit Artikel Publik' : 'Tulis Artikel Baru'}
            </h3>

            <form onSubmit={handleSaveBlog} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Judul Artikel *</label>
                <input
                  type="text"
                  required
                  value={blogForm.title || ''}
                  onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Kategori</label>
                  <select
                    value={blogForm.category}
                    onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value as any })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none"
                  >
                    <option value="Transformasi Digital">Transformasi Digital</option>
                    <option value="Keamanan Siber">Keamanan Siber</option>
                    <option value="Cloud & Arsitektur">Cloud & Arsitektur</option>
                    <option value="Kecerdasan Buatan">Kecerdasan Buatan</option>
                    <option value="Wawasan Bisnis">Wawasan Bisnis</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Waktu Baca (Menit)</label>
                  <input
                    type="number"
                    value={blogForm.readTimeMinutes || 5}
                    onChange={(e) => setBlogForm({ ...blogForm, readTimeMinutes: Number(e.target.value) })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Ringkasan Eksekutif (Summary)</label>
                <textarea
                  rows={2}
                  required
                  value={blogForm.summary || ''}
                  onChange={(e) => setBlogForm({ ...blogForm, summary: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Isi Konten Artikel (Paragraf)</label>
                <textarea
                  rows={4}
                  required
                  value={Array.isArray(blogForm.content) ? blogForm.content.join('\n\n') : ''}
                  onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value.split('\n\n') })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none"
                  placeholder="Gunakan enter ganda untuk memisahkan antar paragraf..."
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setBlogModalOpen(false)}
                  className="px-4 py-2 text-xs text-slate-400 hover:text-white"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs"
                >
                  Publikasikan Artikel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ----------------- SUB-MODAL: JOB FORM ----------------- */}
      {jobModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 text-white w-full max-w-lg rounded-3xl p-6 sm:p-8 space-y-4 my-8">
            <h3 className="text-xl font-bold font-heading">
              {editingJobId ? 'Edit Lowongan Pekerjaan' : 'Buka Lowongan Baru'}
            </h3>

            <form onSubmit={handleSaveJob} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Posisi Jabatan *</label>
                <input
                  type="text"
                  required
                  value={jobForm.title || ''}
                  onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Departemen</label>
                  <input
                    type="text"
                    value={jobForm.department || 'Engineering'}
                    onChange={(e) => setJobForm({ ...jobForm, department: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Tipe Kerja</label>
                  <select
                    value={jobForm.type}
                    onChange={(e) => setJobForm({ ...jobForm, type: e.target.value as any })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none"
                  >
                    <option value="Hybrid">Hybrid</option>
                    <option value="Remote">Remote (Full Remote)</option>
                    <option value="Full-time">Onsite / Full-time</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Ringkasan Lowongan</label>
                <textarea
                  rows={2}
                  required
                  value={jobForm.summary || ''}
                  onChange={(e) => setJobForm({ ...jobForm, summary: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none resize-none"
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setJobModalOpen(false)}
                  className="px-4 py-2 text-xs text-slate-400 hover:text-white"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs"
                >
                  Simpan Lowongan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ----------------- SUB-MODAL: FAQ FORM ----------------- */}
      {faqModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 text-white w-full max-w-lg rounded-3xl p-6 sm:p-8 space-y-4 my-8">
            <h3 className="text-xl font-bold font-heading">
              {editingFaqIndex !== null ? 'Edit Pertanyaan FAQ' : 'Tambah FAQ Baru'}
            </h3>

            <form onSubmit={handleSaveFaq} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Pertanyaan *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Bagaimana proses pengerjaan proyek?"
                  value={faqForm.question}
                  onChange={(e) => setFaqForm({ ...faqForm, question: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Jawaban Resmi *</label>
                <textarea
                  rows={4}
                  required
                  value={faqForm.answer}
                  onChange={(e) => setFaqForm({ ...faqForm, answer: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none"
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setFaqModalOpen(false)}
                  className="px-4 py-2 text-xs text-slate-400 hover:text-white"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs"
                >
                  Simpan FAQ
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
