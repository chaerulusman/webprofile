import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Clock, Calendar, Building, Sparkles } from 'lucide-react';
import { ProjectCaseStudy } from '../types';

interface ProjectDetailModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onRequestSimilar: (serviceCategory: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onRequestSimilar
}) => {
  const [activeTab, setActiveTab] = useState<'case' | 'before-after'>('case');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Hero with Backdrop */}
        <div className="relative min-h-[220px] bg-slate-900 text-white overflow-hidden">
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10 p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-blue-500/30 border border-blue-400/40 text-blue-300 text-xs font-semibold">
                {project.category}
              </span>
              <span className="flex items-center gap-1 text-slate-300 text-xs">
                <Calendar className="w-3.5 h-3.5" />
                Tahun {project.year}
              </span>
              <span className="flex items-center gap-1 text-slate-300 text-xs">
                <Clock className="w-3.5 h-3.5" />
                Durasi {project.duration}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-2 leading-tight">
              {project.title}
            </h3>
            
            <p className="flex items-center gap-2 text-slate-300 text-sm font-medium">
              <Building className="w-4 h-4 text-blue-400" />
              Klien: <span className="text-white font-semibold">{project.client}</span>
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="relative z-10 flex border-t border-white/10 bg-slate-950/60 px-6 sm:px-8">
            <button
              onClick={() => setActiveTab('case')}
              className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all ${
                activeTab === 'case'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              Studi Kasus Lengkap
            </button>
            <button
              onClick={() => setActiveTab('before-after')}
              className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all flex items-center gap-1.5 ${
                activeTab === 'before-after'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Perbandingan: Sebelum & Sesudah
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-8">
          {activeTab === 'case' ? (
            <>
              {/* Overview */}
              <div>
                <h4 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                  Ringkasan Eksekutif
                </h4>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  {project.overview}
                </p>
              </div>

              {/* Challenge vs Solution 2-Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200/80">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-2.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Tantangan & Hambatan Awal
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200/80">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Solusi Terapan PT Anonim
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Quantitative Results */}
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Pencapaian & Dampak Konkret (Key Results)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.results.map((res, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                      <div className="text-2xl sm:text-3xl font-extrabold text-blue-700 font-heading">
                        {res.value}
                      </div>
                      <div className="text-xs font-semibold text-slate-800 mt-1">
                        {res.label}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        {res.subtext}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial if available */}
              {project.testimonial && (
                <div className="p-5 rounded-xl bg-blue-900/5 border border-blue-200/60 relative">
                  <p className="text-slate-700 italic text-sm leading-relaxed mb-3">
                    "{project.testimonial.quote}"
                  </p>
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">{project.testimonial.author}</span>
                    <span className="text-slate-500">{project.testimonial.role}</span>
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                  Teknologi & Framework yang Digunakan
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* Before and After Tab */
            <div className="space-y-6">
              <div className="text-center max-w-lg mx-auto">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase">
                  Dampak Transformasi Digital
                </span>
                <h4 className="text-xl font-bold text-slate-900 mt-2">
                  Kondisi Sebelum vs Sesudah Implementasi
                </h4>
                <p className="text-slate-600 text-xs mt-1">
                  Bukti nyata efisiensi dan peningkatan performa operasional yang dirasakan langsung oleh mitra kami.
                </p>
              </div>

              {/* Metric Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-rose-50 border border-rose-200 text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-700">Sebelum Intervensi</span>
                  <div className="text-xl sm:text-2xl font-bold text-rose-900 mt-2">
                    {project.beforeAfter.beforeMetric}
                  </div>
                  <p className="text-xs text-rose-800/80 mt-2 leading-relaxed">
                    {project.beforeAfter.beforeText}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Sesudah Transformasi PT Anonim</span>
                  <div className="text-xl sm:text-2xl font-bold text-emerald-900 mt-2">
                    {project.beforeAfter.afterMetric}
                  </div>
                  <p className="text-xs text-emerald-800/80 mt-2 leading-relaxed">
                    {project.beforeAfter.afterText}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                <span>
                  Seluruh data metrik telah diverifikasi oleh tim quality assurance PT Anonim dan disetujui untuk dipublikasikan oleh pihak manajemen klien terkait.
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Ingin mengembangkan solusi serupa untuk bisnis Anda?
          </div>
          <div className="flex gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2 text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-800 rounded-xl transition-colors"
            >
              Tutup
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestSimilar(project.category);
              }}
              className="flex-1 sm:flex-initial px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-medium transition-all shadow-sm flex items-center justify-center gap-2"
            >
              Konsultasikan Proyek Serupa
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
