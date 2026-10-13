import React from 'react';
import { 
  Building2, 
  Target, 
  Compass, 
  ShieldCheck, 
  Award, 
  Users, 
  CheckCircle2, 
  FileText, 
  ExternalLink, 
  Linkedin,
  Clock,
  Sparkles,
  Zap,
  Shield,
  CheckCheck,
  Users2
} from 'lucide-react';
import { 
  CORE_VALUES 
} from '../data/companyData';
import { useCompany } from '../context/CompanyContext';
import { PageId } from '../types';

interface AboutSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenCompanyProfile: () => void;
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onNavigate,
  onOpenCompanyProfile,
  onOpenQuote
}) => {
  const { companyInfo, milestones, certifications, teamMembers } = useCompany();
  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* 1. Header Banner */}
      <section className="relative pt-12 sm:pt-16 pb-12 overflow-hidden bg-slate-900 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-12 my-4">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
            02. Tentang Kami • Identitas & Kredibilitas Perusahaan
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading leading-tight">
            Membangun Kepercayaan Melalui <span className="text-blue-400">Integritas</span>, Keahlian Nyata, dan Rekam Jejak 14 Tahun
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            PT Anonim adalah entitas teknologi nasional yang mendedikasikan diri untuk merekayasa inovasi perangkat lunak dan arsitektur data terpercaya bagi akselerasi bisnis di Indonesia.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={onOpenCompanyProfile}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-md cursor-pointer"
            >
              <FileText className="w-4 h-4 text-amber-300" />
              Unduh Dokumen Profil Perusahaan (PDF)
            </button>
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              Konsultasi Bersama Eksekutif
            </button>
          </div>
        </div>
      </section>

      {/* 2. Sejarah dan Latar Belakang Perusahaan */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              Sejarah & Latar Belakang
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
              Lahir dari Semangat Kemandirian Teknologi Indonesia
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Berawal pada tahun 2012 di Jakarta, PT Anonim didirikan oleh sekelompok insinyur perangkat lunak senior yang meyakini bahwa korporasi di Indonesia berhak mendapatkan solusi teknologi kelas dunia tanpa harus bergantung sepenuhnya pada vendor asing berbiaya selangit.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Selama lebih dari satu dekade, kami telah berevolusi dari studio pengembangan aplikasi web menjadi konglomerasi layanan teknologi enterprise menyeluruh yang dipercaya oleh bank nasional, badan usaha milik negara (BUMN), dan institusi pelayanan publik.
            </p>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
              <div className="font-bold text-slate-900">Legalitas Badan Hukum Resmi:</div>
              <div>Akta Pendirian Notaris & SK Kemenkumham RI: <span className="font-mono font-semibold">{companyInfo.skKemenkumham}</span></div>
              <div>Nomor Induk Berusaha (OSS-RBA): <span className="font-mono font-semibold">{companyInfo.nib}</span></div>
            </div>
          </div>

          {/* Interactive Milestone Timeline */}
          <div className="lg:col-span-7">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-200 space-y-8">
              {milestones.map((m, idx) => (
                <div key={idx} className="relative group">
                  {/* Pin Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full bg-white border-4 border-blue-600 group-hover:scale-125 transition-transform shadow-xs" />
                  
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                    <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 text-xs font-bold font-mono inline-block mb-1.5">
                      Tahun {m.year}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 font-heading">
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Visi dan Misi Perusahaan */}
      <section className="bg-slate-100/70 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              Arah Strategis Perusahaan
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-2">
              Visi & Misi PT Anonim
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Pedoman jangka panjang yang menuntun setiap keputusan inovasi dan kemitraan kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Visi Card */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md shadow-blue-500/20">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
                  Visi Korporasi 2030
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-4">
                  Menjadi Katalis Utama Transformasi Digital Nusantara Berdaya Saing Global
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Menjadi mitra rekayasa teknologi dan transformasi digital paling tepercaya di Asia Tenggara yang memberdayakan kemandirian digital korporasi nasional, mendorong efisiensi berkelanjutan, serta menciptakan dampak sosial-ekonomi nyata bagi masyarakat.
                </p>
              </div>
            </div>

            {/* Misi Card */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-6 shadow-md shadow-indigo-500/20">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-1">
                  Misi Strategis Kami
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-4">
                  4 Komitmen Pelaksanaan Misi Utama
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Rekayasa Berkualitas Tinggi:</strong> Menghadirkan solusi software & arsitektur cloud teruji dengan standar keamanan dan kinerja mutakhir.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Kemitraan Jangka Panjang:</strong> Mendampingi mitra dari fase inisiasi strategi hingga transfer knowledge dan SLA purnajual berkelanjutan.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Pemberdayaan Talenta Lokal:</strong> Membina dan mengorbitkan talenta digital Indonesia berakreditasi internasional.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Kepatuhan Tata Kelola & Etika:</strong> Menjunjung transparansi, perlindungan kerahasiaan data (UU PDP), dan integritas tanpa kompromi.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Nilai-Nilai Perusahaan (Core Values) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="px-3.5 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider">
            DNA & Nilai Budaya
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-2">
            Nilai Inti (Core Values) PT Anonim
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Fondasi filosofi kerja yang kami pegang teguh dalam setiap baris kode dan relasi bisnis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((val, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4">
                {idx === 0 && <Shield className="w-6 h-6" />}
                {idx === 1 && <Zap className="w-6 h-6" />}
                {idx === 2 && <CheckCheck className="w-6 h-6" />}
                {idx === 3 && <Users2 className="w-6 h-6" />}
              </div>
              <h3 className="text-base font-bold text-slate-900 font-heading mb-2">
                {val.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Keunggulan Kompetitif (Why Choose Us) */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
              Keunggulan Kompetitif
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-2">
              Mengapa Korporasi Memilih PT Anonim Sebagai Mitra Strategis?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/70 border border-slate-700">
              <div className="text-blue-400 font-black text-3xl font-heading mb-2">100%</div>
              <h3 className="text-lg font-bold text-white mb-2">Hak Milik Penuh Source Code</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Klien memiliki kepemilikan mutlak atas kode sumber, arsitektur, dan aset IP tanpa keterikatan lisensi sepihak (No Vendor Lock-in).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/70 border border-slate-700">
              <div className="text-emerald-400 font-black text-3xl font-heading mb-2">&lt; 15 Mnt</div>
              <h3 className="text-lg font-bold text-white mb-2">Garansi Respons Insiden Kritis</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Dukungan teknis berkontrak SLA ketat dengan Technical Account Manager khusus dan tim siaga pemantauan performa 24/7/365.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/70 border border-slate-700">
              <div className="text-amber-400 font-black text-3xl font-heading mb-2">ISO Ganda</div>
              <h3 className="text-lg font-bold text-white mb-2">Standar Mutu & Keamanan Global</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Tersertifikasi ganda ISO 9001 (Kualitas Proses) dan ISO 27001 (Keamanan Informasi & UU PDP) yang diaudit berkala oleh lembaga terakreditasi internasional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Legalitas dan Sertifikasi Resmi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Akreditasi & Sertifikasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-2">
            Legalitas Hukum & Standar Sertifikasi Resmi
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Memberikan rasa aman dan kepastian kepatuhan hukum bagi tim pengadaan (Procurement & Legal) perusahaan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div key={cert.id} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 text-[11px] font-bold">
                    {cert.badge}
                  </span>
                  <Award className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading mb-1">
                  {cert.title}
                </h3>
                <div className="text-xs font-mono font-semibold text-blue-600 mb-1">
                  {cert.regNumber}
                </div>
                <div className="text-[11px] text-slate-500 mb-3">
                  Penerbit: {cert.issuer}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
                {cert.year}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Profil Pendiri & Jajaran Tim Eksekutif */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              Kepemimpinan Perusahaan
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-2">
              Jajaran Pimpinan & Dewan Eksekutif
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-xl">
              Dipimpin oleh para profesional berpengalaman puluhan tahun di ranah arsitektur enterprise, manajemen risiko, dan transformasi digital.
            </p>
          </div>
          <button
            onClick={() => onNavigate('careers')}
            className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Lihat Budaya Kerja & Lowongan Karier</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all group">
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold">
                    {member.division}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-blue-600 mb-3">
                  {member.role}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {member.bio}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Keahlian Utama:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {member.expertise.map((exp, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
