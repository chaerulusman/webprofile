import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Briefcase, 
  HeartHandshake, 
  Sparkles, 
  ArrowRight, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Building2, 
  GraduationCap, 
  Laptop, 
  Lightbulb, 
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { 
  WORK_CULTURE, 
  COMPANY_INFO 
} from '../data/companyData';
import { useCompany } from '../context/CompanyContext';
import { JobOpening } from '../types';

interface CareersSectionProps {
  onApplyJob: (job: JobOpening) => void;
  onOpenQuote: () => void;
}

export const CareersSection: React.FC<CareersSectionProps> = ({ onApplyJob, onOpenQuote }) => {
  const { jobs, teamMembers } = useCompany();
  const [selectedJobForDetail, setSelectedJobForDetail] = useState<JobOpening | null>(jobs[0] || null);
  const [activeTab, setActiveTab] = useState<'openings' | 'culture' | 'team'>('openings');

  // Keep in sync with jobs array
  useEffect(() => {
    if (jobs.length > 0 && !jobs.find(j => j.id === selectedJobForDetail?.id)) {
      setSelectedJobForDetail(jobs[0]);
    }
  }, [jobs]);

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* 1. Header Banner */}
      <section className="relative pt-12 sm:pt-16 pb-12 overflow-hidden bg-slate-900 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-12 my-4">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
            05. Tim & Peluang Karier
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading leading-tight">
            Bertumbuh Bersama Para <span className="text-blue-400">Pemberi Solusi</span> di Nusantara
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Kami percaya teknologi hebat diciptakan oleh orang-orang yang diberi ruang untuk berinovasi tanpa batasan birokrasi, didukung budaya saling peduli, dan kompensasi bermartabat.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveTab('openings')}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-md cursor-pointer"
            >
              <Briefcase className="w-4 h-4" />
              Lihat {jobs.length} Lowongan Terbuka
            </button>
          </div>
        </div>
      </section>

      {/* Tab Switcher */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center border-b border-slate-200 mb-12">
          <button
            onClick={() => setActiveTab('openings')}
            className={`py-4 px-6 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'openings'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Lowongan Pekerjaan ({jobs.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('culture')}
            className={`py-4 px-6 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'culture'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <HeartHandshake className="w-4 h-4" />
            <span>Budaya Kerja & Fasilitas</span>
          </button>
          <button
            onClick={() => setActiveTab('team')}
            className={`py-4 px-6 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'team'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Profil Tim Inti</span>
          </button>
        </div>

        {/* Tab 1: Lowongan Kerja */}
        {activeTab === 'openings' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                Posisi Aktif (2026)
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-2">
                Temukan Peran Masa Depan Anda di PT Anonim
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Kirimkan lamaran Anda secara langsung melalui formulir online kami untuk proses peninjauan cepat.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Job List Column */}
              <div className="lg:col-span-5 space-y-3">
                {jobs.map((job) => {
                  const isSelected = selectedJobForDetail?.id === job.id;
                  return (
                    <div
                      key={job.id}
                      onClick={() => setSelectedJobForDetail(job)}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-blue-50/70 border-blue-500 shadow-sm'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold">
                          {job.department}
                        </span>
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                          job.type === 'Remote' ? 'bg-purple-100 text-purple-700' : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          {job.type}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 font-heading mb-1">
                        {job.title}
                      </h3>

                      <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {job.location}
                        </span>
                        <span>•</span>
                        <span>{job.experience}</span>
                      </div>

                      <p className="text-xs text-slate-600 line-clamp-2">
                        {job.summary}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Job Detail & Application Preview */}
              <div className="lg:col-span-7">
                {selectedJobForDetail && (
                  <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                            {selectedJobForDetail.department}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">
                            {selectedJobForDetail.type} • {selectedJobForDetail.location}
                          </span>
                        </div>
                        <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                          {selectedJobForDetail.title}
                        </h3>
                      </div>

                      <button
                        onClick={() => onApplyJob(selectedJobForDetail)}
                        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                      >
                        <span>Lamar Posisi Ini</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                        Ringkasan Peran:
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {selectedJobForDetail.summary}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                        Tanggung Jawab Utama:
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                        {selectedJobForDetail.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                        Kualifikasi & Persyaratan:
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                        {selectedJobForDetail.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                        Fasilitas & Kompensasi yang Didapat:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedJobForDetail.perks.map((perk, idx) => (
                          <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                            <span>{perk}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400">
                        Diposting: {selectedJobForDetail.postedDate}
                      </span>
                      <button
                        onClick={() => onApplyJob(selectedJobForDetail)}
                        className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-sm cursor-pointer"
                      >
                        Buka Formulir Lamaran
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Budaya Kerja */}
        {activeTab === 'culture' && (
          <div className="space-y-16">
            <div className="text-center max-w-2xl mx-auto">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                Workplace Experience
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-2">
                Budaya Kerja yang Mengutamakan Manusia & Inovasi
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Kami membangun tempat kerja di mana setiap talenta dihargai, didengar, dan didorong untuk mencapai potensi tertingginya.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {WORK_CULTURE.map((c, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 shrink-0 flex items-center justify-center">
                    {idx === 0 && <Lightbulb className="w-6 h-6" />}
                    {idx === 1 && <Laptop className="w-6 h-6" />}
                    {idx === 2 && <GraduationCap className="w-6 h-6" />}
                    {idx === 3 && <HeartHandshake className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">
                      {c.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Suasana Kerja Visual Mosaic */}
            <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-6">
              <div className="max-w-xl">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-1">
                  Galeri Suasana Kerja
                </span>
                <h3 className="text-2xl font-bold font-heading">
                  Kolaboratif, Modern, dan Penuh Inspirasi
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="h-56 rounded-2xl overflow-hidden bg-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                    alt="Sesi Brainstorming Tim"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="h-56 rounded-2xl overflow-hidden bg-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                    alt="Kantor SCBD Jakarta"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="h-56 rounded-2xl overflow-hidden bg-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                    alt="Tech Showcase & Knowledge Sharing"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Profil Tim */}
        {activeTab === 'team' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                Para Ahli di Balik PT Anonim
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-2">
                Talenta Berdedikasi dengan Keahlian Multi-Disiplin
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <div key={member.id} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-16 h-16 rounded-2xl object-cover border border-slate-200 shrink-0"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm font-heading">{member.name}</h4>
                      <p className="text-xs font-semibold text-blue-600">{member.role}</p>
                      <span className="text-[10px] text-slate-400 block">{member.division}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1">
                    {member.expertise.map((exp, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px]">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
