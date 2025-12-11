import React from 'react';
import { RuleSection } from '../constants';

interface RuleCardProps {
  rule: RuleSection;
  index: number;
}

const RuleCard: React.FC<RuleCardProps> = ({ rule, index }) => {
  // Parsing text to handle markdown-like bold syntax (**text**)
  const parseText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="mb-8 last:mb-0 bg-cardbg/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-colors shadow-sm">
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-argon-400 shrink-0">
            <rule.icon size={24} />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            {rule.title}
          </h2>
        </div>

        <div className="space-y-6">
          {rule.content.map((item, idx) => (
            <div key={idx} className="group">
              {item.subtitle && (
                <h3 className="text-lg font-semibold text-argon-200 mb-2 flex items-center gap-2">
                  {item.subtitle}
                </h3>
              )}
              
              <div className="text-slate-400 leading-relaxed pl-1">
                {Array.isArray(item.text) ? (
                  <ul className="space-y-2">
                    {item.text.map((line, lIdx) => (
                      <li key={lIdx} className={`${line.startsWith('•') ? 'pl-4' : ''}`}>
                         {parseText(line)}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{parseText(item.text)}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RuleCard;