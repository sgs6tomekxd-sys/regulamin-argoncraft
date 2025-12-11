import React, { useState } from 'react';
import { Copy, Check, Server, Shield } from 'lucide-react';
import { SERVER_INFO } from '../constants';

const HeroSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyIp = () => {
    navigator.clipboard.writeText(SERVER_INFO.ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 overflow-hidden">
        {/* Subtle overlay for hero section legibility if needed, but App.tsx handles global bg */}
        
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-xs font-medium mb-6 animate-fade-in backdrop-blur-sm">
          <Shield size={12} className="text-argon-400"/>
          <span>Oficjalny Regulamin</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 animate-slide-up drop-shadow-xl">
          Zasady <span className="text-transparent bg-clip-text bg-gradient-to-r from-argon-400 to-indigo-400">ArgonCraft</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-slate-200 mb-10 animate-slide-up drop-shadow-md" style={{ animationDelay: '0.1s' }}>
          Tworzymy uczciwą społeczność. Poniżej znajdziesz zbiór zasad, które zapewniają 
          bezpieczną i przyjemną rozgrywkę dla każdego gracza.
        </p>

        {/* IP Copy Bar */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="group relative flex items-center bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl p-1 pr-4 shadow-xl transition-all hover:border-argon-500/50 hover:shadow-argon-500/20">
                <div className="bg-slate-800/80 p-3 rounded-lg mr-3 text-slate-300 group-hover:text-white transition-colors">
                    <Server size={20} />
                </div>
                <div className="text-left mr-4">
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">IP Serwera ({SERVER_INFO.version})</p>
                    <p className="text-white font-mono font-bold text-lg">{SERVER_INFO.ip}</p>
                </div>
                <button 
                    onClick={copyIp}
                    className="ml-auto p-2 rounded-lg bg-slate-700/50 hover:bg-argon-600 text-slate-300 hover:text-white transition-all active:scale-95"
                    title="Kopiuj IP"
                >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
                
                {copied && (
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs py-1 px-2 rounded shadow-lg">
                        Skopiowano!
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;