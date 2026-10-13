/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CompanyProvider, useCompany } from './context/CompanyContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CareersSection } from './components/CareersSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { QuoteModal } from './components/QuoteModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { JobApplyModal } from './components/JobApplyModal';
import { ArticleModal } from './components/ArticleModal';
import { CompanyProfileDownloadModal } from './components/CompanyProfileDownloadModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AdminLoginModal } from './components/admin/AdminLoginModal';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { PageId, ProjectCaseStudy, JobOpening, BlogPost } from './types';
import { ArrowUp, ShieldCheck, Sliders, LogOut } from 'lucide-react';

function AppContent() {
  const { isAdminLoggedIn, adminUser, logoutAdmin, projects } = useCompany();

  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [lang, setLang] = useState<'ID' | 'EN'>('ID');
  const [viewMode, setViewMode] = useState<'public' | 'admin'>('public');
  
  // Modals state
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteServiceId, setQuoteServiceId] = useState<string | undefined>(undefined);
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll to top on page change
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenQuoteWithService = (serviceId: string) => {
    setQuoteServiceId(serviceId);
    setIsQuoteModalOpen(true);
  };

  const handleSelectProjectById = (projectId: string) => {
    const found = projects.find(p => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  const handleToggleLang = () => {
    setLang(lang === 'ID' ? 'EN' : 'ID');
  };

  // If user enters admin view mode
  if (viewMode === 'admin' && isAdminLoggedIn) {
    return (
      <AdminDashboard 
        onBackToPublicWebsite={() => setViewMode('public')} 
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      {/* Super Admin Top Quick Bar (Visible when Super Admin is Logged In) */}
      {isAdminLoggedIn && (
        <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white px-4 py-2 border-b border-blue-500/30 text-xs flex items-center justify-between sticky top-0 z-50 shadow-md">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold flex items-center gap-1.5 text-blue-200">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              Sesi Super Admin Aktif:
            </span>
            <span className="text-slate-300 font-medium hidden sm:inline">{adminUser?.name}</span>
            <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-[10px]">
              SUPER_ADMIN
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setViewMode('admin')}
              className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
            >
              <Sliders className="w-3.5 h-3.5" />
              Buka Dasbor CMS Super Admin
            </button>
            <button
              onClick={logoutAdmin}
              className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Logout Super Admin"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuote={() => {
          setQuoteServiceId(undefined);
          setIsQuoteModalOpen(true);
        }}
        onOpenCompanyProfile={() => setIsProfileModalOpen(true)}
        onOpenAdminPortal={() => {
          if (isAdminLoggedIn) {
            setViewMode('admin');
          } else {
            setIsAdminLoginOpen(true);
          }
        }}
        lang={lang}
        onToggleLang={handleToggleLang}
      />

      {/* Main Content View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeSection
            onNavigate={handleNavigate}
            onOpenQuote={() => {
              setQuoteServiceId(undefined);
              setIsQuoteModalOpen(true);
            }}
            onOpenCompanyProfile={() => setIsProfileModalOpen(true)}
            onSelectProject={handleSelectProjectById}
          />
        )}

        {currentPage === 'about' && (
          <AboutSection
            onNavigate={handleNavigate}
            onOpenCompanyProfile={() => setIsProfileModalOpen(true)}
            onOpenQuote={() => {
              setQuoteServiceId(undefined);
              setIsQuoteModalOpen(true);
            }}
          />
        )}

        {currentPage === 'services' && (
          <ServicesSection
            onOpenQuoteWithService={handleOpenQuoteWithService}
            onOpenQuote={() => {
              setQuoteServiceId(undefined);
              setIsQuoteModalOpen(true);
            }}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsSection
            onSelectProject={handleSelectProjectById}
            onOpenQuote={() => {
              setQuoteServiceId(undefined);
              setIsQuoteModalOpen(true);
            }}
          />
        )}

        {currentPage === 'careers' && (
          <CareersSection
            onApplyJob={(job) => setSelectedJob(job)}
            onOpenQuote={() => {
              setQuoteServiceId(undefined);
              setIsQuoteModalOpen(true);
            }}
          />
        )}

        {currentPage === 'blog' && (
          <BlogSection
            onSelectArticle={(art) => setSelectedArticle(art)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactSection />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={() => {
          setQuoteServiceId(undefined);
          setIsQuoteModalOpen(true);
        }}
        onOpenCompanyProfile={() => setIsProfileModalOpen(true)}
      />

      {/* Floating Action Buttons */}
      <FloatingWhatsApp />

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-30 p-3 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-sm shadow-lg hover:shadow-xl transition-all cursor-pointer group"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* Modals */}
      <AdminLoginModal
        isOpen={isAdminLoginOpen}
        onClose={() => setIsAdminLoginOpen(false)}
        onLoginSuccess={() => setViewMode('admin')}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialServiceId={quoteServiceId}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={(category) => {
          setIsQuoteModalOpen(true);
        }}
      />

      <JobApplyModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onSelectCategory={() => {
          setCurrentPage('blog');
        }}
      />

      <CompanyProfileDownloadModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <CompanyProvider>
      <AppContent />
    </CompanyProvider>
  );
}
