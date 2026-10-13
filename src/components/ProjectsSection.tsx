import React, { useState } from 'react';
import { 
  FolderGit2, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Building, 
  Calendar, 
  Clock, 
  ExternalLink,
  Filter
} from 'lucide-react';
import { CLIENT_LOGOS } from '../data/companyData';
import { useCompany } from '../context/CompanyContext';
import { ProjectCaseStudy } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (projectId: string) => void;
  onOpenQuote: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onOpenQuote
}) => {
  const { projects } = useCompany();
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const categories = [
    'Semua',
    'Finansial & Perbankan',
    'BUMN & Smart City',
    'Kesehatan & Medis',
    'E-Commerce & Retail',
    'Manufaktur & Logistik'
  ];

  const filteredProjects = activeCategory === 'Semua'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* 1. Header Banner */}
      <section className="relative pt-12 sm:pt-16 pb-12 overflow-hidden bg-slate-900 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-12 my-4">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
            04. Portofolio & Proyek Pilihan
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading leading-tight">
            Membuktikan Kemampuan Nyata Melalui <span className="text-blue-400">Hasil & Dampak Konkret</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Jelajahi galeri proyek implementasi kami di berbagai sektor industri strategis di Indonesia, lengkap dengan analisis komparasi kondisi sebelum dan sesudah.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-md cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              Konsultasikan Proyek Serupa
            </button>
          </div>
        </div>
      </section>

      {/* 2. Portfolio Gallery with Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 shrink-0 mr-2">
            <Filter className="w-3.5 h-3.5" />
            Kategori:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 font-bold'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => onSelectProject(proj.id)}
              className="group rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={proj.thumbnail}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold">
                      {proj.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-blue-300" />
                      {proj.duration}
                    </span>
                    <span className="font-mono font-bold bg-white/20 px-2 py-0.5 rounded text-white text-[11px]">
                      {proj.year}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-blue-600 font-semibold mb-1">
                    <Building className="w-3.5 h-3.5" />
                    <span>{proj.client}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading mb-2 leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-5">
                    {proj.overview}
                  </p>

                  {/* Quantifiable KPI Box */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1 mb-4">
                    <div className="text-[11px] text-slate-500 font-medium">
                      {proj.results[0].label}:
                    </div>
                    <div className="text-xl font-extrabold text-blue-700 font-heading">
                      {proj.results[0].value}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {proj.results[0].subtext}
                    </div>
                  </div>

                  {/* Before / After Preview snippet */}
                  <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 text-[11px] text-emerald-900 space-y-1">
                    <span className="font-bold block text-emerald-800">Dampak Transformasi:</span>
                    <p className="line-clamp-2 text-slate-600">
                      {proj.beforeAfter.afterText}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <span className="text-xs font-bold text-blue-600 group-hover:text-blue-700 flex items-center gap-1">
                  Buka Studi Kasus Lengkap
                </span>
                <div className="w-8 h-8 rounded-full bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Logo Klien yang Telah Memberikan Izin Publikasi */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="px-3.5 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider">
            Mitra Terkemuka
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-2 mb-8">
            Klien yang Telah Mempercayakan Transformasi Digital Kepada PT Anonim
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {CLIENT_LOGOS.map((c, i) => (
              <div key={i} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs flex flex-col items-center justify-center">
                <span className="text-base font-extrabold text-slate-800 font-heading">
                  {c.logoText}
                </span>
                <span className="text-[10px] text-slate-400 mt-1">
                  {c.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
