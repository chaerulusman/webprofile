import React, { useState } from 'react';
import { X, Calendar, Clock, Share2, Bookmark, Check, ThumbsUp } from 'lucide-react';
import { BlogPost } from '../types';

interface ArticleModalProps {
  article: BlogPost | null;
  onClose: () => void;
  onSelectCategory: (cat: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, onSelectCategory }) => {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cover image & close button */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-900">
          <img 
            src={article.featuredImage} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-sm transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <button 
              onClick={() => {
                onClose();
                onSelectCategory(article.category);
              }}
              className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold mb-2 shadow-sm hover:bg-blue-700 transition-colors"
            >
              {article.category}
            </button>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-heading leading-snug drop-shadow-md">
              {article.title}
            </h2>
          </div>
        </div>

        {/* Article Meta Header */}
        <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <img 
                src={article.author.avatar} 
                alt={article.author.name} 
                className="w-10 h-10 rounded-full object-cover border border-slate-200"
              />
              <div>
                <span className="text-xs font-bold text-slate-900 block">{article.author.name}</span>
                <span className="text-[11px] text-slate-500">{article.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.publishedAt}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTimeMinutes} menit baca
              </span>
            </div>
          </div>

          {/* Content Body */}
          <div className="py-6 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
            <p className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed bg-blue-50/60 p-4 rounded-xl border-l-4 border-blue-600">
              {article.summary}
            </p>

            {article.content.map((paragraph, index) => (
              <p key={index} className="text-slate-700">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-4 pb-6 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Topik Terkait
            </h4>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, i) => (
                <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Social Interactions */}
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLiked(!liked)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  liked 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>{liked ? 'Bermanfaat (Disukai)' : 'Artikel Bermanfaat'}</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Link Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Bagikan Artikel</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100/70 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors shadow-sm"
          >
            Tutup Pembaca
          </button>
        </div>
      </div>
    </div>
  );
};
