import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import RuleCard from './components/RuleCard';
import Footer from './components/Footer';
import { RULES_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans relative isolate">
      {/* Global Background Image */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
          style={{ 
            backgroundImage: "url('https://i.imgur.com/4kAlDfj.png')",
            filter: "blur(8px) brightness(0.25)"
          }}
        />
        {/* Extra overlay for consistent darkness if image fails or is too bright spots */}
        <div className="absolute inset-0 bg-darkbg/50 mix-blend-multiply" />
      </div>

      <NavBar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Rules Container */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 pb-10">
          <div className="space-y-6">
             {RULES_DATA.map((rule, index) => (
               <RuleCard key={rule.id} rule={rule} index={index} />
             ))}
          </div>
        </section>

        {/* CTA Section for Discord/Store */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a 
                  href="https://dc.argoncraft.pl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl bg-[#5865F2] p-8 transition-all hover:scale-[1.01]"
                >
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-2">Dołącz do Discorda</h3>
                        <p className="text-white/80">Bądź na bieżąco z nowościami, przerwami technicznymi i eventami.</p>
                    </div>
                    <div className="absolute right-[-20px] bottom-[-20px] opacity-20 group-hover:opacity-30 transition-opacity transform rotate-12">
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/></svg>
                    </div>
                </a>

                <a 
                  href="https://sklep.argoncraft.pl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-argon-600 to-indigo-600 p-8 transition-all hover:scale-[1.01]"
                >
                     <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-2">ItemShop</h3>
                        <p className="text-white/80">Wesprzyj serwer i odbierz unikalne rangi oraz przedmioty.</p>
                    </div>
                    <div className="absolute right-[-20px] bottom-[-20px] opacity-20 group-hover:opacity-30 transition-opacity transform -rotate-12">
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                    </div>
                </a>
            </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default App;