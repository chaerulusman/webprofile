import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, CheckCircle2, FileText, ExternalLink } from 'lucide-react';
import { useCompany } from '../context/CompanyContext';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
  onOpenCompanyProfile: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenQuote,
  onOpenCompanyProfile
}) => {
  const { companyInfo, services } = useCompany();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Pre-Footer Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-8 sm:p-12 mb-16 overflow-hidden border border-blue-500/20 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-3 border border-blue-400/30">
                Akselerasi Bisnis Anda Sekarang
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading tracking-tight leading-tight">
                Siap Melangkah Menuju Standar Baru Keunggulan Digital?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                Jadwalkan sesi konsultasi arsitektur teknologi atau minta proposal penawaran (RFP) resmi bersama tim ahli kami tanpa biaya awal.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-100 transition-all shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Minta Penawaran (RFP)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onOpenCompanyProfile}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Unduh Company Profile</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Columns Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          {/* Col 1 & 2: Brand, Legal, & Office Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-black text-sm">
                ANO
              </div>
              <div>
                <span className="text-base font-extrabold text-white block font-heading uppercase">
                  {companyInfo.name}
                </span>
                <span className="text-xs text-blue-400 font-medium">
                  {companyInfo.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              Perusahaan penyedia solusi teknologi informasi, konsultansi transformasi digital, rekayasa software enterprise, dan keamanan siber terkemuka berbadan hukum resmi di Indonesia.
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Kantor Pusat:</strong> {companyInfo.addressMain}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span><strong>Kantor Cabang:</strong> {companyInfo.addressBranch}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hotline: {companyInfo.phone} • WhatsApp: {companyInfo.whatsappDisplay}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{companyInfo.email}</span>
              </div>
            </div>

            {/* Legal Badges */}
            <div className="pt-3 flex flex-wrap gap-2 text-[11px] text-slate-400">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                ISO 9001:2015 Mutu
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                ISO 27001:2022 SMKI
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                NIB: {companyInfo.nib.split(' ')[0]}
              </span>
            </div>
          </div>

          {/* Col 3: Halaman Utama */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-blue-400 transition-colors">
                  01. Beranda (Home)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-blue-400 transition-colors">
                  02. Tentang Kami (About Us)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-blue-400 transition-colors">
                  03. Layanan & Solusi (Services)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-blue-400 transition-colors">
                  04. Portofolio & Studi Kasus
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('careers')} className="hover:text-blue-400 transition-colors">
                  05. Tim & Peluang Karier
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-blue-400 transition-colors">
                  06. Blog & Artikel Edukasi
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-blue-400 transition-colors">
                  07. Kontak & Lokasi Kantor
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Layanan Unggulan */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Layanan Unggulan
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {services.map((srv) => (
                <li key={srv.id}>
                  <button 
                    onClick={() => onNavigate('services')} 
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Newsletter & Media Sosial */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Wawasan Industri (Newsletter)
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dapatkan rangkuman analisis tren teknologi, keamanan siber, dan transformasi digital korporat dwimingguan.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="email.bisnis@perusahaan.com"
                className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-slate-500"
              />
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors"
              >
                Langganan Wawasan Gratis
              </button>
            </form>

            {subscribed && (
              <p className="text-xs text-emerald-400 flex items-center gap-1.5 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Terima kasih telah berlangganan wawasan PT Anonim!
              </p>
            )}

            <div className="pt-3">
              <span className="text-[11px] text-slate-400 block mb-2 font-medium">Ikuti Kanal Resmi:</span>
              <div className="flex gap-2 text-xs">
                <a 
                  href={companyInfo.socials.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 bg-slate-900 hover:bg-blue-900 hover:text-white rounded-lg border border-slate-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
                <a 
                  href={companyInfo.socials.instagram} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 bg-slate-900 hover:bg-pink-900 hover:text-white rounded-lg border border-slate-800 transition-colors"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
                <a 
                  href={companyInfo.socials.youtube} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 bg-slate-900 hover:bg-red-900 hover:text-white rounded-lg border border-slate-800 transition-colors"
                  aria-label="YouTube"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {companyInfo.name}. Hak Cipta Dilindungi Undang-Undang Republik Indonesia.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>SK Menkumham: {companyInfo.skKemenkumham}</span>
            <span>•</span>
            <span>NPWP: {companyInfo.npwp}</span>
            <span>•</span>
            <span className="text-slate-400">Jakarta & Surabaya</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
