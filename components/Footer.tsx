import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500 mb-4">
          &copy; {new Date().getFullYear()} ArgonCraft.pl. Wszelkie prawa zastrzeżone.
        </p>
        <p className="text-slate-600 text-sm flex items-center justify-center gap-1">
          Stworzono z <Heart size={12} className="text-red-500 fill-red-500" /> dla społeczności Minecraft.
        </p>
        <p className="text-slate-700 text-xs mt-4">
          Nie jesteśmy powiązani z Mojang AB. Minecraft jest znakiem towarowym Mojang AB.
        </p>
      </div>
    </footer>
  );
};

export default Footer;