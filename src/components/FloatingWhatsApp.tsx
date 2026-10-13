import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { useCompany } from '../context/CompanyContext';

export const FloatingWhatsApp: React.FC = () => {
  const { companyInfo } = useCompany();
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('Halo tim PT Anonim, saya ingin berkonsultasi mengenai solusi teknologi dan penawaran untuk perusahaan kami.');

  const handleSend = () => {
    const cleanNumber = companyInfo.whatsapp.replace('+', '').replace(/\s+/g, '');
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(userMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Popover Chat Box */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden mb-2 animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-xs">
                  ANO
                </div>
                <div className="w-3 h-3 bg-emerald-400 border-2 border-white rounded-full absolute bottom-0 right-0" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Konsultasi Bisnis PT Anonim</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  Online • Biasanya membalas &lt; 10 menit
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/10 text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 space-y-3 text-xs">
            <div className="bg-white p-3 rounded-2xl rounded-tl-sm border border-slate-100 shadow-2xs text-slate-700">
              <p className="font-semibold text-slate-900 mb-1">
                Selamat Datang di PT Anonim! 👋
              </p>
              <p className="text-slate-600 leading-relaxed">
                Ada proyek transformasi digital, pembuatan software enterprise, atau audit keamanan siber yang ingin Anda diskusikan hari ini?
              </p>
              <span className="text-[10px] text-slate-400 block text-right mt-1">Hari ini, Siaga</span>
            </div>

            {/* Quick Prompt Chips */}
            <div className="space-y-1.5">
              <span className="text-[11px] text-slate-500 font-medium block">Pilih topik cepat:</span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Pengembangan Software Custom",
                  "Konsultasi Transformasi Digital",
                  "Permintaan Presentasi & RFP"
                ].map((chip, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setUserMsg(`Halo PT Anonim, saya ingin informasi mengenai ${chip}.`)}
                    className="px-2.5 py-1 bg-white hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200 text-slate-600 rounded-lg text-[11px] transition-colors text-left"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Input area */}
            <div className="pt-2">
              <textarea
                rows={2}
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
                placeholder="Tulis pesan Anda..."
                className="w-full p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs text-slate-800 resize-none"
              ></textarea>
              <button
                onClick={handleSend}
                className="mt-2 w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                Mulai Chat di WhatsApp ({companyInfo.whatsappDisplay})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 group"
        aria-label="Hubungi WhatsApp Bisnis"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5" />
          <span className="w-2.5 h-2.5 bg-amber-400 rounded-full absolute -top-1 -right-1 ring-2 ring-emerald-600" />
        </div>
        <span className="text-xs sm:text-sm font-semibold tracking-wide hidden sm:inline">
          Konsultasi WhatsApp
        </span>
      </button>
    </div>
  );
};
