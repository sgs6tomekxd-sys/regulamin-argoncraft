import React, { useState } from 'react';
import { Menu, X, ShoppingCart, ExternalLink } from 'lucide-react';
import { SERVER_INFO } from '../constants';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-slate-800 bg-darkbg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img 
              src="https://i.imgur.com/cThRtug.png" 
              alt="ArgonCraft" 
              className="w-10 h-10 object-contain drop-shadow-lg"
            />
            <span className="text-white font-bold text-xl tracking-tight">
              Argon<span className="text-argon-400">Craft</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href={SERVER_INFO.wiki} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 group">
                Wiki <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity"/>
              </a>
              <a href={SERVER_INFO.discord} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 group">
                Discord <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity"/>
              </a>
              <a 
                href={SERVER_INFO.store} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-argon-600 hover:bg-argon-500 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-argon-500/25 flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <ShoppingCart size={16} />
                Sklep
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 animate-slide-up">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href={SERVER_INFO.wiki} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Wiki</a>
            <a href={SERVER_INFO.discord} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Discord</a>
            <a 
              href={SERVER_INFO.store} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-argon-400 hover:text-argon-300 block px-3 py-2 rounded-md text-base font-bold flex items-center gap-2"
            >
              <ShoppingCart size={18} />
              Sklep Serwera
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;