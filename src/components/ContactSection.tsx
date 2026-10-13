import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Building2, 
  ExternalLink, 
  ShieldCheck, 
  Globe 
} from 'lucide-react';
import { useCompany } from '../context/CompanyContext';

export const ContactSection: React.FC = () => {
  const { companyInfo, services, addInboundMessage } = useCompany();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    topic: services[0]?.title || 'Pengembangan Perangkat Lunak Enterprise',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      addInboundMessage({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        topic: formData.topic,
        message: formData.message
      });
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 650);
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo PT Anonim, saya ${formData.name || 'calon klien'}${formData.company ? ' dari ' + formData.company : ''}. Saya ingin berkonsultasi mengenai ${formData.topic}. Mohon informasinya.`
    );
    const cleanNumber = companyInfo.whatsapp.replace('+', '').replace(/\s+/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* 1. Header Banner */}
      <section className="relative pt-12 sm:pt-16 pb-12 overflow-hidden bg-slate-900 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-12 my-4">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
            07. Hubungi Kami • Layanan & Konsultasi
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading leading-tight">
            Mari Mulai Percakapan Menuju <span className="text-blue-400">Solusi Nyata</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Apakah Anda memiliki proyek baru, memerlukan kajian audit arsitektur, atau sekadar ingin menjajaki kemungkinan kolaborasi strategis? Tim kami siap menyambut Anda.
          </p>
        </div>
      </section>

      {/* 2. Form & Direct Communication Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form Konsultasi */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900 font-heading mb-2">
              Kirimkan Pesan atau Pertanyaan
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Isi data di bawah ini dan perwakilan Solution Advisor kami akan membalas dalam waktu maksimal 1x24 jam kerja.
            </p>

            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Pesan Anda Telah Diterima!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6">
                  Terima kasih <strong className="text-slate-800">{formData.name}</strong>. Salinan konfirmasi telah dicatat di sistem helpdesk kami. Tim kami akan segera menindaklanjuti.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        topic: services[0]?.title || 'Layanan Solusi Digital',
                        message: ''
                      });
                    }}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 cursor-pointer"
                  >
                    Kirim Pesan Lain
                  </button>
                  <button
                    onClick={handleOpenWhatsApp}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Lanjutkan ke WhatsApp
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Irwan Pratama"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nama Perusahaan / Organisasi
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Bank Daerah / PT Retail Mandiri"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Bisnis Resmi *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="irwan@perusahaan.co.id"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nomor WhatsApp / HP *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0812-xxxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Topik Konsultasi / Layanan yang Diminati
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Kerjasama Strategis / Kemitraan">Kerjasama Strategis / Kemitraan Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Detail Pesan / Kebutuhan
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Deskripsikan kebutuhan, pertanyaan, atau tantangan bisnis yang dihadapi..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Data Anda dijaga kerahasiaannya dan tidak dibagikan ke pihak ketiga.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      'Mengirim Pesan...'
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Kirim Formulir Konsultasi</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Kontak Resmi, WhatsApp, Jam Operasional */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Quick Chat Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-100 flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp Bisnis Resmi
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-semibold">
                  Respon Cepat
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading">
                  Konsultasi Langsung via WhatsApp
                </h3>
                <p className="text-emerald-100 text-xs mt-1 leading-relaxed">
                  Ingin berbicara langsung dengan tim teknis kami saat ini? Klik tombol di bawah untuk membuka obrolan instan.
                </p>
              </div>

              <div className="text-lg font-mono font-bold tracking-wider">
                {companyInfo.whatsappDisplay}
              </div>

              <button
                type="button"
                onClick={handleOpenWhatsApp}
                className="w-full py-3 rounded-xl bg-white text-emerald-800 font-bold text-xs sm:text-sm hover:bg-emerald-50 transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Mulai Chat WhatsApp Sekarang</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Kantor & Jam Operasional Details */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5 text-xs text-slate-700">
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-600" />
                  Alamat Kantor Fisik
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="font-bold text-slate-900 block mb-0.5">Kantor Pusat (Jakarta):</span>
                    <p className="text-slate-600 leading-relaxed">{companyInfo.addressMain}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="font-bold text-slate-900 block mb-0.5">Kantor Cabang (Surabaya):</span>
                    <p className="text-slate-600 leading-relaxed">{companyInfo.addressBranch}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span><strong>Jam Kerja:</strong> {companyInfo.operationalHours}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Telepon Hotline:</strong> {companyInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Email Umum:</strong> {companyInfo.email}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-purple-600 shrink-0" />
                  <span><strong>Email Rekrutmen:</strong> {companyInfo.emailCareers}</span>
                </div>
              </div>

              {/* Media Sosial Links */}
              <div className="pt-2 border-t border-slate-100">
                <span className="font-bold text-slate-900 block mb-2">Media Sosial Resmi:</span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <a
                    href={companyInfo.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={companyInfo.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-pink-50 hover:text-pink-700 text-slate-700 transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href={companyInfo.socials.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-700 transition-colors"
                  >
                    YouTube
                  </a>
                  <a
                    href={companyInfo.socials.x}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  >
                    X (Twitter)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Google Maps Embed Responsif */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                Lokasi Kantor Fisik
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Peta Lokasi Kantor Pusat: SCBD Jakarta Selatan
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=District+8+SCBD+Jakarta"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              Buka di Google Maps
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Responsive Map Embed Container */}
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 relative">
            <iframe
              title="Lokasi Kantor PT Anonim di SCBD Jakarta"
              src="https://maps.google.com/maps?q=District%208%20SCBD%20Jakarta&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};
