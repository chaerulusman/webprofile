import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Tag, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { useCompany } from '../context/CompanyContext';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onSelectArticle: (article: BlogPost) => void;
  selectedCategoryFilter?: string;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  onSelectArticle,
  selectedCategoryFilter
}) => {
  const { blogPosts } = useCompany();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(selectedCategoryFilter || 'Semua');

  const categories = [
    'Semua',
    'Transformasi Digital',
    'Keamanan Siber',
    'Cloud & Arsitektur',
    'Kecerdasan Buatan',
    'Wawasan Bisnis'
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'Semua' || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* 1. Header Banner */}
      <section className="relative pt-12 sm:pt-16 pb-12 overflow-hidden bg-slate-900 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-12 my-4">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
            06. Blog & Wawasan Industri
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading leading-tight">
            Pemikiran Strategis, Edukasi, & <span className="text-blue-400">Tren Teknologi</span> Terkini
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Kumpulan artikel berbobot yang ditulis langsung oleh para Principal Architect, Lead Engineer, dan Executive Advisor PT Anonim untuk memperkaya wawasan pemangku kepentingan.
          </p>
        </div>
      </section>

      {/* 2. Search & Category Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 font-bold'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Cari topik, AI, security, PDP..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
            />
          </div>
        </div>

        {/* Featured Post (if any) */}
        {filteredPosts.length > 0 && selectedCategory === 'Semua' && !searchQuery && (
          <div 
            onClick={() => onSelectArticle(filteredPosts[0])}
            className="mb-12 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group"
          >
            <div className="lg:col-span-7 h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-900">
              <img
                src={filteredPosts[0].featuredImage}
                alt={filteredPosts[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                  {filteredPosts[0].category}
                </span>
                <span className="text-xs font-semibold text-amber-600 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Artikel Utama
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors font-heading leading-tight">
                {filteredPosts[0].title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                {filteredPosts[0].summary}
              </p>

              <div className="flex items-center gap-3 pt-2">
                <img
                  src={filteredPosts[0].author.avatar}
                  alt={filteredPosts[0].author.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{filteredPosts[0].author.name}</h4>
                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    <span>{filteredPosts[0].publishedAt}</span>
                    <span>•</span>
                    <span>{filteredPosts[0].readTimeMinutes} menit baca</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                  Baca Artikel Selengkapnya
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Regular Articles Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-700">Tidak ada artikel yang cocok</h3>
            <p className="text-xs text-slate-500 mt-1">
              Coba gunakan kata kunci pencarian lain atau pilih kategori Semua.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory === 'Semua' && !searchQuery ? filteredPosts.slice(1) : filteredPosts).map((post) => (
              <div
                key={post.id}
                onClick={() => onSelectArticle(post)}
                className="group rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-2xs hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.publishedAt}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTimeMinutes} mnt baca
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading mb-2 line-clamp-2 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {post.summary}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-2">
                      {post.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-[10px]">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>Baca Selengkapnya</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
