import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  HelpCircle, 
  ChevronDown, 
  Layers, 
  ShieldCheck, 
  Sliders, 
  Calculator,
  Code2,
  Shield,
  BrainCircuit,
  Palette,
  Headphones,
  Check
} from 'lucide-react';
import { 
  WORKFLOW_STEPS 
} from '../data/companyData';
import { useCompany } from '../context/CompanyContext';
import { PageId, ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenQuoteWithService?: (serviceId: string) => void;
  onOpenQuote: () => void;
  onNavigate: (page: PageId) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenQuoteWithService,
  onOpenQuote,
  onNavigate
}) => {
  const { services, servicePackages, faqs } = useCompany();
  const [selectedService, setSelectedService] = useState<ServiceItem>(services[0] || {} as ServiceItem);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Keep selectedService in sync if services array changes
  useEffect(() => {
    if (services.length > 0 && !services.find(s => s.id === selectedService?.id)) {
      setSelectedService(services[0]);
    }
  }, [services]);

  // Calculator State
  const [calcPlatform, setCalcPlatform] = useState<'web' | 'mobile' | 'both'>('both');
  const [calcScale, setCalcScale] = useState<'mvp' | 'growth' | 'enterprise'>('growth');
  const [calcSecurity, setCalcSecurity] = useState<boolean>(true);
  const [calcSla, setCalcSla] = useState<boolean>(true);

  const calculateEstimate = () => {
    let base = 50;
    if (calcPlatform === 'web') base = 45;
    if (calcPlatform === 'mobile') base = 55;
    if (calcPlatform === 'both') base = 85;

    if (calcScale === 'mvp') base *= 0.8;
    if (calcScale === 'growth') base *= 1.3;
    if (calcScale === 'enterprise') base *= 2.2;

    if (calcSecurity) base += 20;
    if (calcSla) base += 15;

    const min = Math.round(base);
    const max = Math.round(base * 1.35);
    const weeks = calcScale === 'mvp' ? '6 - 8 Minggu' : calcScale === 'growth' ? '10 - 14 Minggu' : '16 - 24 Minggu';

    return { min, max, weeks };
  };

  const estimate = calculateEstimate();

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* 1. Header Banner */}
      <section className="relative pt-12 sm:pt-16 pb-12 overflow-hidden bg-slate-900 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-12 my-4">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
            03. Layanan & Solusi • Katalog Lengkap
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading leading-tight">
            Solusi Rekayasa Digital <span className="text-blue-400">Terukur & Bergaransi</span> untuk Pertumbuhan Bisnis
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Dari rekayasa perangkat lunak skala enterprise hingga infrastruktur cloud aman dan kecerdasan buatan, kami menghadirkan kapabilitas teknologi yang mentransformasi efisiensi operasional Anda.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-md cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              Minta Penawaran Resmi (RFP)
            </button>
          </div>
        </div>
      </section>

      {/* 2. Interactive Detailed Services View */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            Eksplorasi Solusi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-2">
            Pilih Layanan untuk Mempelajari Manfaat & Deliverable
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Klik salah satu layanan di bawah untuk melihat rincian cakupan kerja, manfaat bisnis, dan estimasi waktu penyelesaian.
          </p>
        </div>

        {/* Service Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {services.map((srv) => {
            const isSelected = selectedService?.id === srv.id;
            return (
              <button
                key={srv.id}
                onClick={() => setSelectedService(srv)}
                className={`p-3.5 rounded-2xl text-left transition-all border cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'
                }`}>
                  <Code2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold font-heading line-clamp-2">
                  {srv.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed Showcase Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Descriptions & Benefits */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
                    {selectedService.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-600">
                    {selectedService.startingPrice}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                  {selectedService.title}
                </h3>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {selectedService.fullDesc}
              </p>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Manfaat Terukur Bagi Pelanggan:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Deliverables, Timeline & CTA */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 space-y-5">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Estimasi Timeline Pengerjaan
                </span>
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base font-heading">
                  <Clock className="w-4 h-4 text-blue-600" />
                  {selectedService.timeline}
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Deliverables & Dokumen yang Diterima:
                </span>
                <ul className="space-y-2 text-xs text-slate-700">
                  {selectedService.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 bg-blue-100/60 rounded-xl text-xs text-blue-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-700" />
                  Garansi Bebas Bug & Pelatihan
                </div>
                <div className="text-[11px] text-blue-800">
                  Termasuk transfer ilmu komprehensif untuk tim internal Anda dan garansi pemeliharaan teknis.
                </div>
              </div>

              <button
                onClick={() => {
                  if (onOpenQuoteWithService) {
                    onOpenQuoteWithService(selectedService.id);
                  } else {
                    onOpenQuote();
                  }
                }}
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Minta Penawaran untuk Layanan Ini</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Alur Kerja (Workflow) & Estimasi */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
              Metodologi Eksekusi
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-2">
              Alur Kerja Terstruktur & Transparan (4 Langkah)
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Siklus pengiriman proyek yang teruji meminimalkan risiko keterlambatan dan menjaga transparansi penuh bagi klien.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((wf, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col justify-between relative group hover:border-blue-500 transition-colors">
                <div>
                  <div className="text-4xl font-black text-blue-500/30 font-heading mb-3 group-hover:text-blue-400 transition-colors">
                    {wf.step}
                  </div>
                  <h3 className="text-base font-bold text-white font-heading mb-1">
                    {wf.title}
                  </h3>
                  <span className="inline-block px-2.5 py-0.5 rounded bg-slate-900 text-blue-300 text-[11px] font-mono mb-3">
                    {wf.duration}
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {wf.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Paket Layanan (Service Packages) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Pilihan Paket Fleksibel
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-2">
            Paket Solusi Sesuai Tahapan Bisnis Anda
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Pilih paket yang paling relevan dengan kapasitas kebutuhan operasional dan anggaran perusahaan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicePackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                pkg.popular
                  ? 'bg-gradient-to-b from-blue-900 to-slate-950 text-white shadow-2xl ring-2 ring-blue-500 relative'
                  : 'bg-white border border-slate-200 text-slate-800 shadow-sm hover:shadow-lg'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                  {pkg.badge}
                </div>
              )}

              <div>
                {!pkg.popular && pkg.badge && (
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-3">
                    {pkg.badge}
                  </span>
                )}
                <h3 className={`text-xl font-extrabold font-heading mb-2 ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>
                  {pkg.name}
                </h3>
                <div className={`text-2xl font-black font-heading mb-3 ${pkg.popular ? 'text-blue-300' : 'text-blue-600'}`}>
                  {pkg.priceEstimate}
                </div>
                <p className={`text-xs leading-relaxed mb-6 ${pkg.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                  {pkg.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-200/20 mb-8">
                  <span className={`text-xs font-bold uppercase tracking-wider block ${pkg.popular ? 'text-slate-400' : 'text-slate-400'}`}>
                    Fitur & Cakupan:
                  </span>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.popular ? 'text-blue-400' : 'text-emerald-600'}`} />
                      <span className={pkg.popular ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className={`text-[11px] mb-4 p-2.5 rounded-xl ${pkg.popular ? 'bg-white/10 text-slate-300' : 'bg-slate-50 text-slate-600'}`}>
                  <strong>Rekomendasi:</strong> {pkg.recommendedFor}
                </div>
                <button
                  onClick={onOpenQuote}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.popular
                      ? 'bg-blue-500 hover:bg-blue-400 text-white'
                      : 'bg-slate-900 hover:bg-blue-600 text-white'
                  }`}
                >
                  <span>Pilih Paket & Ajukan RFP</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Kalkulator Estimasi Biaya & Waktu Proyek Interaktif */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2.5 mb-2">
            <Calculator className="w-6 h-6 text-blue-600" />
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider font-heading">
              Simulasi Cepat (Estimator)
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            Kalkulator Estimasi Anggaran & Waktu Pengerjaan
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 mb-8">
            Pilih parameter kebutuhan Anda untuk melihat perkiraan awal biaya investasi dan timeline penyelesaian.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Input Options */}
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Target Platform Solusi:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'web', label: 'Web Saja' },
                    { id: 'mobile', label: 'Mobile App' },
                    { id: 'both', label: 'Web + Mobile' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setCalcPlatform(p.id as any)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        calcPlatform === p.id
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Skala & Kompleksitas Sistem:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'mvp', label: 'MVP / Startup' },
                    { id: 'growth', label: 'Scale-Up' },
                    { id: 'enterprise', label: 'Enterprise' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setCalcScale(s.id as any)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        calcScale === s.id
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-200">
                <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={calcSecurity}
                    onChange={(e) => setCalcSecurity(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600 border-slate-300"
                  />
                  <span>Audit Keamanan Siber (Penetration Test) & Kepatuhan ISO 27001</span>
                </label>
                <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={calcSla}
                    onChange={(e) => setCalcSla(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600 border-slate-300"
                  />
                  <span>Dukungan SLA Managed Pemeliharaan 24/7 (12 Bulan)</span>
                </label>
              </div>
            </div>

            {/* Estimated Output Result Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-md text-center space-y-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Perkiraan Nilai Investasi Proyek:
              </span>
              <div className="text-3xl sm:text-4xl font-black text-blue-600 font-heading">
                Rp {estimate.min} - {estimate.max} Juta
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                <Clock className="w-3.5 h-3.5 text-blue-500" />
                Estimasi Durasi: {estimate.weeks}
              </div>
              <p className="text-[11px] text-slate-400">
                *Estimasi ini bersifat indikatif awal. Nilai final akan disesuaikan dengan dokumen spesifikasi kebutuhan detail (SRS).
              </p>
              <button
                onClick={onOpenQuote}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-sm cursor-pointer"
              >
                Konfirmasi Kebutuhan Ini via RFP
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Interaktif (Accordion) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            Pertanyaan Umum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-2">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Jawaban langsung seputar kontrak, kerahasiaan data (NDA), kepemilikan kode, dan alur pengerjaan.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 font-heading">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
