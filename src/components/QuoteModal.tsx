import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Building2, Phone, Mail, User } from 'lucide-react';
import { useCompany } from '../context/CompanyContext';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialServiceId }) => {
  const { services, companyInfo, addInboundQuote } = useCompany();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceId: initialServiceId || (services[0]?.id || 'enterprise-software'),
    budgetRange: 'Rp 50 - 100 Juta',
    targetTimeline: '1 - 3 Bulan',
    projectScope: '',
    hasNda: true
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      addInboundQuote({
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        serviceId: formData.serviceId,
        budgetRange: formData.budgetRange,
        targetTimeline: formData.targetTimeline,
        projectScope: formData.projectScope,
        hasNda: formData.hasNda
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-900 p-6 sm:p-8 text-white">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Building2 className="w-3.5 h-3.5" />
            Permintaan Penawaran Resmi (RFP)
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-heading">
            Konsultasikan Kebutuhan Proyek Anda
          </h3>
          <p className="text-slate-300 text-sm mt-2 max-w-lg">
            Dapatkan estimasi biaya, analisis kelayakan arsitektur teknis, dan timeline proyek terperinci dari Solution Architect kami dalam 1x24 jam kerja.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">
                Permintaan Penawaran Terkirim!
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                Terima kasih, Bapak/Ibu <strong className="text-slate-800">{formData.name}</strong> dari <strong className="text-slate-800">{formData.company}</strong>. Tim Enterprise Solutions kami akan menghubungi Anda melalui email dan WhatsApp dalam waktu 1x24 jam kerja.
              </p>
              
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs space-y-2 mb-6 max-w-md mx-auto">
                <div className="flex justify-between text-slate-600">
                  <span>Nomor Tiket Proposal:</span>
                  <span className="font-mono font-bold text-blue-600">ANO-RFP-2026-{Math.floor(1000 + Math.random() * 9000)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Layanan Dipilih:</span>
                  <span className="font-semibold text-slate-800">
                    {services.find((s: { id: string; title: string }) => s.id === formData.serviceId)?.title || formData.serviceId}
                  </span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Status NDA:</span>
                  <span className="text-emerald-700 font-medium">Draft Standar Kerahasiaan Disiapkan</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow-sm"
                >
                  Selesai & Kembali
                </button>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Halo Tim PT Anonim, saya baru saja mengirimkan formulir RFP untuk ${formData.company} (${formData.name}). Mohon tindak lanjutnya.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-medium text-sm transition-colors"
                >
                  Konfirmasi via WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nama Lengkap *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Budi Santoso"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nama Perusahaan / Organisasi *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. PT Nusantara Maju Bersama"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Bisnis Resmi *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="nama@perusahaan.co.id"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nomor WhatsApp / Telepon *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="0812-xxxx-xxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-slate-50/50"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Fokus Solusi / Layanan yang Dibutuhkan *
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-slate-50/50"
                >
                  {services.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.title} ({srv.category})
                    </option>
                  ))}
                  <option value="custom">Solusi Kustom / Integrasi Khusus Lainnya</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Estimasi Anggaran Proyek
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-slate-50/50"
                  >
                    <option value="Rp 35 - 75 Juta">Rp 35 - 75 Juta (Fase MVP / Startup)</option>
                    <option value="Rp 75 - 150 Juta">Rp 75 - 150 Juta (Skala Menengah)</option>
                    <option value="Rp 150 - 350 Juta">Rp 150 - 350 Juta (Pertumbuhan / Enterprise)</option>
                    <option value="> Rp 350 Juta">&gt; Rp 350 Juta (Strategic Corporate / BUMN)</option>
                    <option value="Belum Ditentukan">Belum Ditentukan / Perlu Diskusi</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Target Waktu Penyelesaian
                  </label>
                  <select
                    value={formData.targetTimeline}
                    onChange={(e) => setFormData({ ...formData, targetTimeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-slate-50/50"
                  >
                    <option value="Mendesak (< 1 Bulan)">Mendesak (&lt; 1 Bulan)</option>
                    <option value="1 - 3 Bulan">1 - 3 Bulan (Standar)</option>
                    <option value="3 - 6 Bulan">3 - 6 Bulan (Kompleks)</option>
                    <option value="Fleksibel">Fleksibel / Tahap Perencanaan</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Ringkasan Ruang Lingkup & Ekspektasi Masalah
                </label>
                <textarea
                  rows={3}
                  placeholder="Jelaskan secara singkat latar belakang tantangan yang ingin diselesaikan, fitur utama yang diharapkan, atau sistem yang ingin diintegrasikan..."
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-slate-50/50 resize-none"
                ></textarea>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50/60 rounded-xl border border-blue-100">
                <input
                  type="checkbox"
                  id="nda-checkbox"
                  checked={formData.hasNda}
                  onChange={(e) => setFormData({ ...formData, hasNda: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                />
                <label htmlFor="nda-checkbox" className="text-xs text-slate-700 flex items-center gap-1.5 cursor-pointer">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  Kirimkan draf NDA (Non-Disclosure Agreement) otomatis bersama proposal demi perlindungan data.
                </label>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl text-slate-600 hover:text-slate-800 text-sm font-medium transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Memproses RFP...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Kirim Permintaan Penawaran
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
