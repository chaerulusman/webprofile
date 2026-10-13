import React, { useState } from 'react';
import { X, CheckCircle2, UploadCloud, Briefcase, User, Mail, Phone, Globe, FileText } from 'lucide-react';
import { useCompany } from '../context/CompanyContext';
import { JobOpening } from '../types';

interface JobApplyModalProps {
  job: JobOpening | null;
  onClose: () => void;
}

export const JobApplyModal: React.FC<JobApplyModalProps> = ({ job, onClose }) => {
  const { addInboundApplication } = useCompany();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolioUrl: '',
    linkedinUrl: '',
    yearsExp: '3-5 Tahun',
    fileName: '',
    coverLetter: '',
    agreePrivacy: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!job) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      addInboundApplication({
        jobId: job.id,
        jobTitle: job.title,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        yearsExp: formData.yearsExp,
        linkedinUrl: formData.linkedinUrl,
        portfolioUrl: formData.portfolioUrl,
        fileName: formData.fileName || 'Curriculum_Vitae.pdf',
        coverLetter: formData.coverLetter
      });
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-900 p-6 sm:p-7 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            Formulir Lamaran Pekerjaan
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-heading">
            {job.title}
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Departemen: {job.department} • Penempatan: {job.location} ({job.type})
          </p>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 max-h-[72vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">
                Lamaran Berhasil Dikirim!
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                Terima kasih atas minat Anda bergabung dengan PT Anonim, <strong className="text-slate-900">{formData.fullName}</strong>. Tim People & Culture kami akan meninjau profil Anda dan menghubungi kandidat terpilih dalam kurun 5-7 hari kerja.
              </p>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs space-y-2 mb-6 max-w-md mx-auto font-mono text-slate-700">
                <div className="flex justify-between">
                  <span>Nomor Referensi:</span>
                  <span className="font-bold text-blue-600">APP-ANO-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Posisi:</span>
                  <span className="font-bold">{job.title}</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="text-emerald-600 font-bold">Dalam Tahap Screening Awal</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow-sm"
              >
                Kembali ke Halaman Karier
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Nama Lengkap *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Indah"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Email Aktif *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="maya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Nomor Telepon / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="0812-xxxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Lama Pengalaman Kerja *
                  </label>
                  <select
                    value={formData.yearsExp}
                    onChange={(e) => setFormData({ ...formData, yearsExp: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-slate-50/50"
                  >
                    <option value="Fresh Graduate / < 1 Tahun">Fresh Graduate / &lt; 1 Tahun</option>
                    <option value="1 - 3 Tahun">1 - 3 Tahun</option>
                    <option value="3 - 5 Tahun">3 - 5 Tahun</option>
                    <option value="5 - 8 Tahun">5 - 8 Tahun</option>
                    <option value="> 8 Tahun">&gt; 8 Tahun</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Profil LinkedIn / Resume Online
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/username"
                      value={formData.linkedinUrl}
                      onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Tautan Portofolio / GitHub / Dribbble
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="url"
                      placeholder="https://github.com/ atau link drive"
                      value={formData.portfolioUrl}
                      onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-slate-50/50"
                    />
                  </div>
                </div>
              </div>

              {/* Upload CV */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Upload Curriculum Vitae (CV / Resume) *
                </label>
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 text-center hover:border-blue-400 transition-colors bg-slate-50/50">
                  <input
                    type="file"
                    id="cv-upload"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="cv-upload" className="cursor-pointer flex flex-col items-center">
                    <UploadCloud className="w-8 h-8 text-blue-600 mb-1" />
                    <span className="text-xs font-semibold text-slate-800">
                      {formData.fileName ? formData.fileName : 'Pilih file CV (PDF / DOCX)'}
                    </span>
                    <span className="text-[11px] text-slate-400 mt-0.5">Maksimum ukuran 10MB</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Pesan Pengantar / Mengapa Tertarik Bergabung?
                </label>
                <textarea
                  rows={3}
                  placeholder="Ceritakan secara singkat keahlian utama Anda dan mengapa Anda bersemangat untuk tumbuh bersama PT Anonim..."
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-slate-50/50 resize-none"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="career-privacy"
                  checked={formData.agreePrivacy}
                  onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded border-slate-300"
                />
                <label htmlFor="career-privacy" className="text-xs text-slate-600 cursor-pointer">
                  Saya menyatakan data yang diisi adalah benar dan menyetujui pemrosesan data untuk keperluan rekrutmen.
                </label>
              </div>

              <div className="pt-3 flex justify-end gap-3">
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
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-all shadow-md flex items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Lamaran Pekerjaan'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
