import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  Code2, 
  BrainCircuit, 
  ShieldAlert, 
  ChevronRight, 
  Building2, 
  FileText,
  PhoneCall,
  Laptop
} from 'lucide-react';
import { 
  CLIENT_LOGOS 
} from '../data/companyData';
import { useCompany } from '../context/CompanyContext';
import { PageId } from '../types';

interface HomeSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
  onOpenCompanyProfile: () => void;
  onSelectProject: (projectId: string) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  onNavigate,
  onOpenQuote,
  onOpenCompanyProfile,
  onSelectProject
}) => {
  const { companyInfo, services, projects, testimonials } = useCompany();
  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* 1. Hero Section */}
      <section className="relative pt-12 sm:pt-20 pb-16 overflow-hidden">
        {/* Ambient Gradient Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden -z-10">
          <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-blue-400/15 rounded-full blur-3xl" />
          <div className="absolute -top-12 right-1/4 w-[450px] h-[450px] bg-indigo-400/15 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & CTA */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>{companyInfo.shortName} • Mitra Rekayasa Digital Berintegritas</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] font-heading">
                Akselerasi Solusi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-600">Digital Berkelanjutan</span> untuk Kemajuan Nusantara
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {companyInfo.subheadline}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <button
                  onClick={onOpenQuote}
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-blue-200" />
                  <span>Konsultasi & Penawaran Gratis</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-200 hover:border-slate-300 transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Laptop className="w-4 h-4 text-slate-500" />
                  <span>Jelajahi 6 Layanan Unggulan</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-500">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ISO 9001:2015 Mutu
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  ISO 27001:2022 Keamanan Data
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  NIB OSS-RBA Legal Resmi
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Corporate Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Card */}
                <div className="relative rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-2xl border border-slate-800 overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-2xl pointer-events-none" />

                  <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                    <div>
                      <span className="text-[11px] font-mono tracking-wider text-blue-400 uppercase block font-semibold">
                        KILAS PENCAPAIAN
                      </span>
                      <h3 className="text-xl font-bold font-heading">
                        Performa Operasional PT Anonim
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
                      Aktif 2026
                    </span>
                  </div>

                  {/* 4 Key Numbers Grid */}
                  <div className="grid grid-cols-2 gap-4 py-6">
                    {companyInfo.stats.map((st: { value: string; label: string; sub: string }, idx: number) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/50">
                        <div className="text-2xl sm:text-3xl font-black text-white font-heading">
                          {st.value}
                        </div>
                        <div className="text-xs font-semibold text-blue-300 mt-1">
                          {st.label}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5">
                          {st.sub}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quick Highlight Feature */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950 to-indigo-950 border border-blue-500/30 text-xs space-y-2">
                    <div className="flex items-center justify-between text-blue-200">
                      <span className="font-semibold flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-blue-400" />
                        Jaminan SLA & Tata Kelola
                      </span>
                      <span className="text-emerald-400 font-mono font-bold">99.98% Uptime</span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      Dukungan tim respon cepat &lt; 15 menit, penandatanganan NDA resmi, dan kepemilikan source code 100% tanpa vendor lock-in.
                    </p>
                  </div>

                  {/* Button in Card */}
                  <div className="pt-4 flex items-center justify-between gap-3">
                    <button
                      onClick={onOpenCompanyProfile}
                      className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5 underline decoration-slate-600 underline-offset-4 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-amber-400" />
                      Unduh Company Profile (PDF)
                    </button>
                    <button
                      onClick={() => onNavigate('about')}
                      className="text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      Profil Lengkap
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Floating pill element */}
                <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">4.9 / 5.0 Rating Klien</div>
                    <div className="text-[11px] text-slate-500">Dari 150+ Ulasan Korporat</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Client Trust Logos Bar */}
      <section className="border-y border-slate-200/80 bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 font-heading">
            Dipercaya Oleh Perusahaan Terkemuka, BUMN, & Institusi Nasional di Indonesia
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
            {CLIENT_LOGOS.map((client, idx) => (
              <div 
                key={idx} 
                className="p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:bg-slate-100/80 transition-all flex flex-col items-center justify-center group"
              >
                <span className="text-base font-extrabold text-slate-700 group-hover:text-blue-700 tracking-tight font-heading">
                  {client.logoText}
                </span>
                <span className="text-[10px] text-slate-400 truncate max-w-full">
                  {client.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Ringkasan Layanan Unggulan */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              Layanan & Solusi Komprehensif
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-2">
              Solusi Teknologi End-to-End untuk Pertumbuhan Bisnis
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              Kami mendesain, mengimplementasikan, dan memelihara ekosistem digital mutakhir yang menjawab kompleksitas operasional korporasi Anda.
            </p>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 shrink-0 group cursor-pointer"
          >
            <span>Lihat Semua Layanan & Detail Alur Kerja</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="group p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[11px] font-semibold">
                    {service.category}
                  </span>
                  <span className="text-xs font-bold text-blue-600 font-mono">
                    {service.startingPrice}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 font-heading">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100 mb-6">
                  {service.benefits.slice(0, 2).map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                <span className="text-[11px] text-slate-400">
                  Estimasi: {service.timeline.split('(')[0]}
                </span>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                >
                  Detail Solusi
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Proyek Pilihan & Studi Kasus Unggulan */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                Portofolio & Rekam Jejak Nyata
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-2">
                Studi Kasus Keberhasilan Mitra Kami
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                Bukan sekadar klaim; lihat bagaimana kami memecahkan hambatan bisnis nyata dengan metrik performa sebelum dan sesudah yang terverifikasi.
              </p>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="text-xs sm:text-sm font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 shrink-0 group cursor-pointer"
            >
              <span>Lihat Semua 6+ Studi Kasus & Filter Kategori</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((proj) => (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj.id)}
                className="group bg-slate-800/80 rounded-2xl border border-slate-700 overflow-hidden hover:border-blue-500 hover:shadow-2xl transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-950">
                    <img 
                      src={proj.thumbnail} 
                      alt={proj.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold">
                        {proj.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-md bg-blue-600/90 text-white text-xs font-mono font-bold">
                        {proj.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-[11px] text-blue-400 font-semibold block mb-1">
                      Klien: {proj.client}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-2 mb-2 font-heading">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                      {proj.overview}
                    </p>

                    {/* Metric Highlight */}
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/60 flex items-center justify-between">
                      <span className="text-xs text-slate-400">{proj.results[0].label}:</span>
                      <span className="text-sm font-extrabold text-emerald-400 font-mono">
                        {proj.results[0].value}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-700/50 mt-2 flex items-center justify-between text-xs font-semibold text-blue-400">
                  <span>Lihat Sebelum vs Sesudah</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimoni Klien & Reputasi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Pengakuan Kredibilitas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-2">
            Apa Kata Para Pemimpin Bisnis Tentang PT Anonim?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Kepuasan klien kami bukan kebetulan, melainkan hasil dari komitmen kode berkualitas tinggi, tata kelola transparan, dan SLA yang dipegang teguh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testi) => (
            <div 
              key={testi.id} 
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{testi.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img 
                  src={testi.avatar} 
                  alt={testi.name} 
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{testi.name}</h4>
                  <p className="text-[11px] text-slate-500">{testi.role}</p>
                  <p className="text-[11px] font-semibold text-blue-600">{testi.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Ajakan Konsultasi Cepat (CTA Bar) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-sky-700 p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase">
              Konsultasi Cepat 1-on-1
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
              Punya Pertanyaan Spesifik Mengenai Kebutuhan IT Anda?
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
              Tim Solution Architect kami siap mendiskusikan studi kelayakan, estimasi biaya, dan pilihan arsitektur terbaik via WhatsApp atau pertemuan tatap muka di kantor Anda.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-xs sm:text-sm hover:bg-slate-100 transition-colors shadow-md text-center cursor-pointer"
            >
              Hubungi Tim Kontak Kami
            </button>
            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm border border-white/20 transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              Isi Formulir RFP (1 Menit)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
