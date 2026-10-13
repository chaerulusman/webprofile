import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail, FileText, ChevronRight, Sparkles, ShieldCheck } from 'lucide-react';
import { useCompany } from '../context/CompanyContext';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
  onOpenCompanyProfile: () => void;
  onOpenAdminPortal: () => void;
  lang: 'ID' | 'EN';
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenQuote,
  onOpenCompanyProfile,
  onOpenAdminPortal,
  lang,
  onToggleLang
}) => {
  const { companyInfo } = useCompany();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string; enLabel: string }[] = [
    { id: 'home', label: 'Beranda', enLabel: 'Home' },
    { id: 'about', label: 'Tentang Kami', enLabel: 'About Us' },
    { id: 'services', label: 'Layanan', enLabel: 'Services' },
    { id: 'projects', label: 'Portofolio', enLabel: 'Projects' },
    { id: 'careers', label: 'Tim & Karier', enLabel: 'Team & Careers' },
    { id: 'blog', label: 'Blog & Artikel', enLabel: 'Articles' },
    { id: 'contact', label: 'Kontak Kami', enLabel: 'Contact' },
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Banner Bar for Enterprise Credibility */}
      <div className="bg-slate-900 text-slate-300 text-[11px] py-1.5 px-4 sm:px-8 border-b border-slate-800/80 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              Sertifikasi ISO 9001:2015 & ISO 27001:2022 • NIB OSS Terverifikasi
            </span>
            <a 
              href={`mailto:${companyInfo.email}`} 
              className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-400"
            >
              <Mail className="w-3 h-3 text-blue-400" />
              {companyInfo.email}
            </a>
            <a 
              href={`tel:${companyInfo.phone}`} 
              className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-400"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              {companyInfo.phone}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenCompanyProfile}
              className="hover:text-white transition-colors text-slate-300 flex items-center gap-1 font-medium cursor-pointer"
            >
              <FileText className="w-3 h-3 text-amber-400" />
              Unduh Profil Perusahaan (PDF)
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={onOpenAdminPortal}
              className="hover:text-white transition-colors px-2.5 py-0.5 rounded bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-400/30 font-semibold text-[10px] flex items-center gap-1 cursor-pointer"
            >
              <ShieldCheck className="w-3 h-3 text-blue-400" />
              Portal Super Admin
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={onToggleLang}
              className="hover:text-white transition-colors px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-semibold text-[10px]"
            >
              {lang === 'ID' ? '🇮🇩 ID (Bahasa)' : '🇬🇧 EN (English)'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-200 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100' 
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Corporate Identity */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-700 to-sky-500 flex items-center justify-center text-white font-black text-sm shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <span className="tracking-tighter">ANO</span>
            </div>
            <div>
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-slate-900 block leading-tight font-heading uppercase">
                {companyInfo.name}
              </span>
              <span className="text-[10px] text-blue-600 font-semibold tracking-wider uppercase block">
                Digital Enterprise Solutions
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? 'text-blue-600 bg-blue-50/80 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {lang === 'ID' ? item.label : item.enLabel}
                </button>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenQuote}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold tracking-wide shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'ID' ? 'Minta Penawaran (RFP)' : 'Request Quote'}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenQuote}
              className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-[11px] font-bold"
            >
              RFP
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{lang === 'ID' ? item.label : item.enLabel}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
          </div>

          <div className="pt-6 mt-4 border-t border-slate-100 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdminPortal();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 text-blue-300 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-slate-800"
            >
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              Masuk Dasbor Super Admin (CMS)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCompanyProfile();
              }}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-slate-50"
            >
              <FileText className="w-4 h-4 text-amber-500" />
              Unduh Profil Perusahaan (PDF)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 px-4 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              Konsultasi & Minta Penawaran (RFP)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
