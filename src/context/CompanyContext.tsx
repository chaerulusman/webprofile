import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  COMPANY_INFO, 
  SERVICES_DATA, 
  SERVICE_PACKAGES, 
  PROJECT_PORTFOLIO, 
  TEAM_MEMBERS, 
  JOB_OPENINGS, 
  BLOG_POSTS, 
  MILESTONES, 
  CERTIFICATIONS, 
  FAQS,
  TESTIMONIALS
} from '../data/companyData';
import { 
  ServiceItem, 
  ServicePackage, 
  ProjectCaseStudy, 
  TeamMember, 
  JobOpening, 
  BlogPost, 
  Milestone, 
  Certification, 
  FAQItem, 
  Testimonial 
} from '../types';
import { auth, googleAuthProvider } from '../lib/firebase.ts';
import { signInWithPopup, signOut } from 'firebase/auth';

export interface InboundQuote {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  serviceId: string;
  budgetRange: string;
  targetTimeline: string;
  projectScope: string;
  hasNda: boolean;
  submittedAt: string;
  status: 'Baru' | 'Dihubungi' | 'Proposal Terkirim' | 'Selesai';
}

export interface InboundApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  yearsExp: string;
  linkedinUrl: string;
  portfolioUrl: string;
  fileName: string;
  coverLetter: string;
  submittedAt: string;
  status: 'Screening' | 'Interview' | 'Diterima' | 'Ditolak';
}

export interface InboundMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  topic: string;
  message: string;
  submittedAt: string;
  status: 'Belum Dibaca' | 'Sudah Dibalas';
}

export interface SuperAdminUser {
  id: string;
  name: string;
  email: string;
  role: 'SUPER_ADMIN' | 'CONTENT_EDITOR';
  avatar: string;
  lastLogin: string;
}

interface CompanyContextType {
  // Public data
  companyInfo: typeof COMPANY_INFO;
  services: ServiceItem[];
  servicePackages: ServicePackage[];
  projects: ProjectCaseStudy[];
  teamMembers: TeamMember[];
  jobs: JobOpening[];
  blogPosts: BlogPost[];
  milestones: Milestone[];
  certifications: Certification[];
  faqs: FAQItem[];
  testimonials: Testimonial[];
  
  // Super Admin state
  isAdminLoggedIn: boolean;
  adminUser: SuperAdminUser | null;
  authToken: string | null;
  loginAdmin: (email: string, pass: string) => boolean;
  loginWithGoogle: () => Promise<boolean>;
  logoutAdmin: () => void;
  
  // Inbound submissions (Leads & Candidates)
  inboundQuotes: InboundQuote[];
  inboundApplications: InboundApplication[];
  inboundMessages: InboundMessage[];
  addInboundQuote: (quote: Omit<InboundQuote, 'id' | 'submittedAt' | 'status'>) => void;
  addInboundApplication: (app: Omit<InboundApplication, 'id' | 'submittedAt' | 'status'>) => void;
  addInboundMessage: (msg: Omit<InboundMessage, 'id' | 'submittedAt' | 'status'>) => void;
  updateQuoteStatus: (id: string, status: InboundQuote['status']) => void;
  updateApplicationStatus: (id: string, status: InboundApplication['status']) => void;
  updateMessageStatus: (id: string, status: InboundMessage['status']) => void;

  // CMS update methods
  updateCompanyInfo: (newInfo: Partial<typeof COMPANY_INFO>) => void;
  
  // Services
  addService: (service: ServiceItem) => void;
  updateService: (id: string, service: Partial<ServiceItem>) => void;
  deleteService: (id: string) => void;
  
  // Projects
  addProject: (project: ProjectCaseStudy) => void;
  updateProject: (id: string, project: Partial<ProjectCaseStudy>) => void;
  deleteProject: (id: string) => void;
  
  // Jobs
  addJob: (job: JobOpening) => void;
  updateJob: (id: string, job: Partial<JobOpening>) => void;
  deleteJob: (id: string) => void;
  
  // Blog
  addBlogPost: (post: BlogPost) => void;
  updateBlogPost: (id: string, post: Partial<BlogPost>) => void;
  deleteBlogPost: (id: string) => void;
  
  // Team
  addTeamMember: (member: TeamMember) => void;
  updateTeamMember: (id: string, member: Partial<TeamMember>) => void;
  deleteTeamMember: (id: string) => void;

  // FAQs
  addFaq: (faq: FAQItem) => void;
  updateFaq: (index: number, faq: FAQItem) => void;
  deleteFaq: (index: number) => void;

  // System
  resetToDefaultData: () => void;
}

const STORAGE_KEY_PREFIX = 'anonim_cms_v3_';

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export const CompanyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Initial State from localStorage or default
  const [companyInfo, setCompanyInfo] = useState<typeof COMPANY_INFO>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}company_info`);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Ensure latest contact details are preserved if default was requested
      return { ...COMPANY_INFO, ...parsed };
    }
    return COMPANY_INFO;
  });

  const [services, setServices] = useState<ServiceItem[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}services`);
    return saved ? JSON.parse(saved) : SERVICES_DATA;
  });

  const [servicePackages, setServicePackages] = useState<ServicePackage[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}packages`);
    return saved ? JSON.parse(saved) : SERVICE_PACKAGES;
  });

  const [projects, setProjects] = useState<ProjectCaseStudy[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}projects`);
    return saved ? JSON.parse(saved) : PROJECT_PORTFOLIO;
  });

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}team`);
    return saved ? JSON.parse(saved) : TEAM_MEMBERS;
  });

  const [jobs, setJobs] = useState<JobOpening[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}jobs`);
    return saved ? JSON.parse(saved) : JOB_OPENINGS;
  });

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}blog`);
    return saved ? JSON.parse(saved) : BLOG_POSTS;
  });

  const [milestones, setMilestones] = useState<Milestone[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}milestones`);
    return saved ? JSON.parse(saved) : MILESTONES;
  });

  const [certifications, setCertifications] = useState<Certification[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}certifications`);
    return saved ? JSON.parse(saved) : CERTIFICATIONS;
  });

  const [faqs, setFaqs] = useState<FAQItem[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}faqs`);
    return saved ? JSON.parse(saved) : FAQS;
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}testimonials`);
    return saved ? JSON.parse(saved) : TESTIMONIALS;
  });

  // 2. Inbound Leads / Submissions
  const [inboundQuotes, setInboundQuotes] = useState<InboundQuote[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}inbound_quotes`);
    if (saved) return JSON.parse(saved);
    return [
      {
        id: 'RFP-DEMO-1',
        name: 'Bambang Sudarsono',
        company: 'PT Logistik Mandiri Prima',
        email: 'bambang@logistikmandiri.com',
        phone: '081299887766',
        serviceId: 'enterprise-software',
        budgetRange: 'Rp 150 - 350 Juta',
        targetTimeline: '3 - 6 Bulan',
        projectScope: 'Integrasi sistem armada pergudangan dengan IoT sensor dan ERP SAP existing.',
        hasNda: true,
        submittedAt: 'Hari ini, 09:30 WIB',
        status: 'Baru'
      },
      {
        id: 'RFP-DEMO-2',
        name: 'Dian Permata, M.Kom',
        company: 'BPR Sejahtera Nusantara',
        email: 'dian.p@bprsejahtera.co.id',
        phone: '081388771122',
        serviceId: 'cloud-cybersecurity',
        budgetRange: 'Rp 75 - 150 Juta',
        targetTimeline: '1 - 3 Bulan',
        projectScope: 'Audit penetrasi kepatuhan OJK dan migrasi ke hybrid cloud lokal.',
        hasNda: true,
        submittedAt: 'Kemarin, 14:15 WIB',
        status: 'Proposal Terkirim'
      }
    ];
  });

  const [inboundApplications, setInboundApplications] = useState<InboundApplication[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}inbound_apps`);
    if (saved) return JSON.parse(saved);
    return [
      {
        id: 'APP-DEMO-1',
        jobId: 'job-lead-fullstack',
        jobTitle: 'Lead Fullstack Engineer (Golang & Next.js)',
        fullName: 'Dimas Aditya',
        email: 'dimas.aditya.dev@gmail.com',
        phone: '081234567890',
        yearsExp: '5 - 8 Tahun',
        linkedinUrl: 'https://linkedin.com/in/dimasaditya',
        portfolioUrl: 'https://github.com/dimasaditya',
        fileName: 'Dimas_Aditya_Senior_Lead_Resume.pdf',
        coverLetter: 'Memiliki 6 tahun pengalaman mengelola sistem Kafka dan microservices berkinerja tinggi di unicorn e-commerce.',
        submittedAt: '12 Okt 2026, 16:45 WIB',
        status: 'Interview'
      }
    ];
  });

  const [inboundMessages, setInboundMessages] = useState<InboundMessage[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}inbound_msgs`);
    if (saved) return JSON.parse(saved);
    return [
      {
        id: 'MSG-DEMO-1',
        name: 'Rudi Hartono',
        email: 'rudi@hartonocorp.id',
        phone: '08119876543',
        company: 'Hartono Mandiri Group',
        topic: 'Konsultansi Transformasi Digital & Tata Kelola IT',
        message: 'Mohon info ketersediaan waktu untuk discovery meeting bersama tim direksi kami di SCBD minggu depan.',
        submittedAt: '11 Okt 2026, 11:20 WIB',
        status: 'Belum Dibaca'
      }
    ];
  });

  // 3. Super Admin Authentication State
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem(`${STORAGE_KEY_PREFIX}admin_logged`) === 'true';
  });

  const [adminUser, setAdminUser] = useState<SuperAdminUser | null>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}admin_user`);
    return saved ? JSON.parse(saved) : null;
  });

  // Auto-sync state to localStorage
  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}company_info`, JSON.stringify(companyInfo));
  }, [companyInfo]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}services`, JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}projects`, JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}team`, JSON.stringify(teamMembers));
  }, [teamMembers]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}jobs`, JSON.stringify(jobs));
  }, [jobs]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}blog`, JSON.stringify(blogPosts));
  }, [blogPosts]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}faqs`, JSON.stringify(faqs));
  }, [faqs]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}inbound_quotes`, JSON.stringify(inboundQuotes));
  }, [inboundQuotes]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}inbound_apps`, JSON.stringify(inboundApplications));
  }, [inboundApplications]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}inbound_msgs`, JSON.stringify(inboundMessages));
  }, [inboundMessages]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}admin_logged`, isAdminLoggedIn ? 'true' : 'false');
    if (adminUser) {
      localStorage.setItem(`${STORAGE_KEY_PREFIX}admin_user`, JSON.stringify(adminUser));
    } else {
      localStorage.removeItem(`${STORAGE_KEY_PREFIX}admin_user`);
    }
  }, [isAdminLoggedIn, adminUser]);

  // Auth Methods
  const [authToken, setAuthToken] = useState<string | null>(null);

  const loginAdmin = (email: string, pass: string): boolean => {
    // Default Super Admin credentials
    const validEmail = 'admin@anonim.co.id';
    const validPass = 'superadmin2026';
    
    // Also allow clean demo credentials or user contact email
    const cleanInputEmail = email.trim().toLowerCase();
    const isCleanEmail = cleanInputEmail === validEmail || cleanInputEmail === 'chaerulusman166@gmail.com' || cleanInputEmail === 'admin';
    const isCleanPass = pass === validPass || pass === 'admin' || pass === 'superadmin';

    if (isCleanEmail && isCleanPass) {
      const user: SuperAdminUser = {
        id: 'SA-001',
        name: 'Super Administrator PT Anonim',
        email: cleanInputEmail === 'chaerulusman166@gmail.com' ? 'chaerulusman166@gmail.com' : 'admin@anonim.co.id',
        role: 'SUPER_ADMIN',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        lastLogin: new Date().toLocaleDateString('id-ID', { 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };
      setAdminUser(user);
      setIsAdminLoggedIn(true);
      return true;
    }
    return false;
  };

  const loginWithGoogle = async (): Promise<boolean> => {
    try {
      const cred = await signInWithPopup(auth, googleAuthProvider);
      const token = await cred.user.getIdToken();
      setAuthToken(token);

      // Secure backend sync to Cloud SQL users table
      try {
        await fetch('/api/auth/sync-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
      } catch (err) {
        console.warn('Backend Cloud SQL user sync failed, continuing session:', err);
      }

      const user: SuperAdminUser = {
        id: cred.user.uid,
        name: cred.user.displayName || 'Administrator PT Anonim',
        email: cred.user.email || 'chaerulusman166@gmail.com',
        role: 'SUPER_ADMIN',
        avatar: cred.user.photoURL || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        lastLogin: new Date().toLocaleDateString('id-ID', { 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };
      setAdminUser(user);
      setIsAdminLoggedIn(true);
      return true;
    } catch (error) {
      console.error('Google Sign-In failed:', error);
      return false;
    }
  };

  const logoutAdmin = async () => {
    try {
      await signOut(auth);
    } catch {
      // Ignore client signout error
    }
    setAuthToken(null);
    setIsAdminLoggedIn(false);
    setAdminUser(null);
  };

  // Inbound Methods (Persisted locally + Synced to Cloud SQL)
  const addInboundQuote = (quote: Omit<InboundQuote, 'id' | 'submittedAt' | 'status'>) => {
    const quoteCode = `ANO-RFP-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newQuote: InboundQuote = {
      ...quote,
      id: quoteCode,
      submittedAt: 'Baru Saja',
      status: 'Baru'
    };
    setInboundQuotes(prev => [newQuote, ...prev]);

    // Async sync to Cloud SQL PostgreSQL
    fetch('/api/quotes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        quoteCode: newQuote.id,
        name: newQuote.name,
        company: newQuote.company,
        email: newQuote.email,
        phone: newQuote.phone,
        serviceId: newQuote.serviceId,
        budgetRange: newQuote.budgetRange,
        targetTimeline: newQuote.targetTimeline,
        projectScope: newQuote.projectScope,
        hasNda: newQuote.hasNda,
      })
    }).catch(err => console.error('Cloud SQL quote persistence error:', err));
  };

  const addInboundApplication = (app: Omit<InboundApplication, 'id' | 'submittedAt' | 'status'>) => {
    const newApp: InboundApplication = {
      ...app,
      id: `APP-${Date.now().toString().slice(-5)}`,
      submittedAt: 'Baru Saja',
      status: 'Screening'
    };
    setInboundApplications(prev => [newApp, ...prev]);

    // Async sync to Cloud SQL PostgreSQL
    fetch('/api/applications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jobId: newApp.jobId,
        jobTitle: newApp.jobTitle,
        fullName: newApp.fullName,
        email: newApp.email,
        phone: newApp.phone,
        yearsExp: newApp.yearsExp,
        linkedinUrl: newApp.linkedinUrl,
        portfolioUrl: newApp.portfolioUrl,
        fileName: newApp.fileName,
        coverLetter: newApp.coverLetter,
      })
    }).catch(err => console.error('Cloud SQL application persistence error:', err));
  };

  const addInboundMessage = (msg: Omit<InboundMessage, 'id' | 'submittedAt' | 'status'>) => {
    const newMsg: InboundMessage = {
      ...msg,
      id: `MSG-${Date.now().toString().slice(-5)}`,
      submittedAt: 'Baru Saja',
      status: 'Belum Dibaca'
    };
    setInboundMessages(prev => [newMsg, ...prev]);

    // Async sync to Cloud SQL PostgreSQL
    fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: newMsg.name,
        email: newMsg.email,
        phone: newMsg.phone,
        company: newMsg.company,
        topic: newMsg.topic,
        message: newMsg.message,
      })
    }).catch(err => console.error('Cloud SQL message persistence error:', err));
  };

  const updateQuoteStatus = (id: string, status: InboundQuote['status']) => {
    setInboundQuotes(prev => prev.map(q => q.id === id ? { ...q, status } : q));
  };

  const updateApplicationStatus = (id: string, status: InboundApplication['status']) => {
    setInboundApplications(prev => prev.map(a => a.id === id ? { ...a, status } : a));
  };

  const updateMessageStatus = (id: string, status: InboundMessage['status']) => {
    setInboundMessages(prev => prev.map(m => m.id === id ? { ...m, status } : m));
  };

  // Company Info CRUD
  const updateCompanyInfo = (newInfo: Partial<typeof COMPANY_INFO>) => {
    setCompanyInfo(prev => ({ ...prev, ...newInfo }));
    fetch('/api/company-settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newInfo)
    }).catch(err => console.error('Cloud SQL company settings sync error:', err));
  };

  // Services CRUD
  const addService = (service: ServiceItem) => {
    setServices(prev => [service, ...prev]);
  };

  const updateService = (id: string, service: Partial<ServiceItem>) => {
    setServices(prev => prev.map(s => s.id === id ? { ...s, ...service } : s));
  };

  const deleteService = (id: string) => {
    setServices(prev => prev.filter(s => s.id !== id));
  };

  // Projects CRUD
  const addProject = (project: ProjectCaseStudy) => {
    setProjects(prev => [project, ...prev]);
  };

  const updateProject = (id: string, project: Partial<ProjectCaseStudy>) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...project } : p));
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  // Jobs CRUD
  const addJob = (job: JobOpening) => {
    setJobs(prev => [job, ...prev]);
  };

  const updateJob = (id: string, job: Partial<JobOpening>) => {
    setJobs(prev => prev.map(j => j.id === id ? { ...j, ...job } : j));
  };

  const deleteJob = (id: string) => {
    setJobs(prev => prev.filter(j => j.id !== id));
  };

  // Blog CRUD
  const addBlogPost = (post: BlogPost) => {
    setBlogPosts(prev => [post, ...prev]);
  };

  const updateBlogPost = (id: string, post: Partial<BlogPost>) => {
    setBlogPosts(prev => prev.map(b => b.id === id ? { ...b, ...post } : b));
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts(prev => prev.filter(b => b.id !== id));
  };

  // Team CRUD
  const addTeamMember = (member: TeamMember) => {
    setTeamMembers(prev => [...prev, member]);
  };

  const updateTeamMember = (id: string, member: Partial<TeamMember>) => {
    setTeamMembers(prev => prev.map(t => t.id === id ? { ...t, ...member } : t));
  };

  const deleteTeamMember = (id: string) => {
    setTeamMembers(prev => prev.filter(t => t.id !== id));
  };

  // FAQ CRUD
  const addFaq = (faq: FAQItem) => {
    setFaqs(prev => [...prev, faq]);
  };

  const updateFaq = (index: number, faq: FAQItem) => {
    setFaqs(prev => prev.map((f, i) => i === index ? faq : f));
  };

  const deleteFaq = (index: number) => {
    setFaqs(prev => prev.filter((_, i) => i !== index));
  };

  // Reset Data to Default
  const resetToDefaultData = () => {
    setCompanyInfo(COMPANY_INFO);
    setServices(SERVICES_DATA);
    setServicePackages(SERVICE_PACKAGES);
    setProjects(PROJECT_PORTFOLIO);
    setTeamMembers(TEAM_MEMBERS);
    setJobs(JOB_OPENINGS);
    setBlogPosts(BLOG_POSTS);
    setMilestones(MILESTONES);
    setCertifications(CERTIFICATIONS);
    setFaqs(FAQS);
    setTestimonials(TESTIMONIALS);

    // Clear local storage keys
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith(STORAGE_KEY_PREFIX) && key !== `${STORAGE_KEY_PREFIX}admin_logged` && key !== `${STORAGE_KEY_PREFIX}admin_user`) {
        localStorage.removeItem(key);
      }
    });
  };

  return (
    <CompanyContext.Provider value={{
      companyInfo,
      services,
      servicePackages,
      projects,
      teamMembers,
      jobs,
      blogPosts,
      milestones,
      certifications,
      faqs,
      testimonials,
      isAdminLoggedIn,
      adminUser,
      authToken,
      loginAdmin,
      loginWithGoogle,
      logoutAdmin,
      inboundQuotes,
      inboundApplications,
      inboundMessages,
      addInboundQuote,
      addInboundApplication,
      addInboundMessage,
      updateQuoteStatus,
      updateApplicationStatus,
      updateMessageStatus,
      updateCompanyInfo,
      addService,
      updateService,
      deleteService,
      addProject,
      updateProject,
      deleteProject,
      addJob,
      updateJob,
      deleteJob,
      addBlogPost,
      updateBlogPost,
      deleteBlogPost,
      addTeamMember,
      updateTeamMember,
      deleteTeamMember,
      addFaq,
      updateFaq,
      deleteFaq,
      resetToDefaultData
    }}>
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompany = () => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error('useCompany must be used within a CompanyProvider');
  }
  return context;
};
