import React, { useState } from 'react';
import { X, Download, FileCheck, CheckCircle2, Building, ShieldCheck, Mail, Phone, Award } from 'lucide-react';
import { useCompany } from '../context/CompanyContext';

interface CompanyProfileDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompanyProfileDownloadModal: React.FC<CompanyProfileDownloadModalProps> = ({ isOpen, onClose }) => {
  const { companyInfo, certifications } = useCompany();
  const [downloadStep, setDownloadStep] = useState<'preview' | 'downloading' | 'completed'>('preview');

  if (!isOpen) return null;

  const triggerDownload = () => {
    setDownloadStep('downloading');
    setTimeout(() => {
      setDownloadStep('completed');
    }, 1200);
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
            <FileCheck className="w-3.5 h-3.5" />
            Dokumen Resmi Perusahaan
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-heading">
            Company Profile PT Anonim (2026)
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Ringkasan Eksekutif, Portofolio Proyek, Rekam Jejak 14 Tahun, & Dokumen Legalitas Lengkap.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-5">
          {downloadStep === 'completed' ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                Dokumen Berhasil Diunduh!
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                File PDF ringkasan profil perusahaan telah berhasil dibuat dan disimpan ke perangkat Anda. Silakan hubungi tim kami jika memerlukan dokumen kualifikasi lelang / tender khusus.
              </p>
              <button
                type="button"
                onClick={() => {
                  setDownloadStep('preview');
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow-sm"
              >
                Tutup Jendela
              </button>
            </div>
          ) : (
            <>
              {/* Executive Snapshot Card */}
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-blue-600" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{companyInfo.name}</h4>
                      <p className="text-xs text-slate-500">{companyInfo.tagline}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-md">
                    EDISI 2026
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-2.5 bg-white rounded-lg border border-slate-100 shadow-2xs">
                    <div className="text-lg font-bold text-blue-600">14+ Thn</div>
                    <div className="text-[11px] text-slate-500">Berdiri 2012</div>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-slate-100 shadow-2xs">
                    <div className="text-lg font-bold text-blue-600">480+</div>
                    <div className="text-[11px] text-slate-500">Proyek Selesai</div>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-slate-100 shadow-2xs">
                    <div className="text-lg font-bold text-blue-600">98.7%</div>
                    <div className="text-[11px] text-slate-500">Kepuasan Klien</div>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-slate-100 shadow-2xs">
                    <div className="text-lg font-bold text-blue-600">120+</div>
                    <div className="text-[11px] text-slate-500">Talenta Tim</div>
                  </div>
                </div>

                <div className="text-xs space-y-1.5 pt-2 text-slate-600">
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-700">Nomor Induk Berusaha (NIB):</span>
                    <span className="font-mono text-slate-900">{companyInfo.nib}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-700">SK Kemenkumham RI:</span>
                    <span className="font-mono text-slate-900">{companyInfo.skKemenkumham}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-700">Akreditasi Mutu & Keamanan:</span>
                    <span className="text-emerald-700 font-semibold">ISO 9001:2015 & ISO 27001:2022</span>
                  </div>
                </div>
              </div>

              {/* Contents Table */}
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Daftar Isi Dokumen (38 Halaman PDF):
                </h4>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-5">
                  <li>Surat Pengantar & Sambutan Dewan Direksi</li>
                  <li>Profil Legalitas, Struktur Organisasi, & Tata Kelola Perusahaan</li>
                  <li>Katalog Solusi: Rekayasa Software, Cloud, Cyber Defense, & AI</li>
                  <li>Metodologi Agile Delivery, SLA, & Quality Assurance Matrix</li>
                  <li>6 Studi Kasus Nyata: Sektor Finansial, Smart City, Energi, & Medis</li>
                  <li>Profil Dewan Direksi & Ahli Bersertifikasi Internasional</li>
                  <li>Lampiran Sertifikasi ISO, NIB OSS, dan Rekomendasi Klien Terkemuka</li>
                </ul>
              </div>

              <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-200/60 text-xs text-slate-700 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                <span>
                  Dokumen ini telah distempel secara digital dan sah untuk digunakan dalam kelengkapan administrasi pengadaan (Procurement / Vendor Registration).
                </span>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl text-slate-600 hover:text-slate-800 text-sm font-medium transition-colors"
                >
                  Tutup
                </button>
                <button
                  type="button"
                  onClick={triggerDownload}
                  disabled={downloadStep === 'downloading'}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-medium transition-all shadow-md flex items-center gap-2"
                >
                  {downloadStep === 'downloading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Mempersiapkan PDF (3.8 MB)...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      Unduh Company Profile (PDF)
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
