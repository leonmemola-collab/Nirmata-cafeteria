
import React from 'react';

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

interface FloatingIndexProps {
  activeCategory: string;
  onCategoryClick: (id: string) => void;
}

const FloatingIndex: React.FC<FloatingIndexProps> = ({ activeCategory, onCategoryClick }) => {
  const navItems: NavItem[] = [
    { id: 'novedades', label: 'Top', icon: 'star' },
    { id: 'calientes', label: 'Calientes', icon: 'local_cafe' },
    { id: 'frios', label: 'Fríos', icon: 'ac_unit' },
    { id: 'especiales', label: 'Especiales', icon: 'auto_awesome' },
    { id: 'mas', label: 'Otros', icon: 'more_horiz' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[50] w-[92%] max-w-lg">
      <div className="bg-white/90 dark:bg-stone-900/90 backdrop-blur-lg border border-stone-200/50 dark:border-stone-800 shadow-2xl rounded-2xl px-2 py-2 flex items-center justify-around theme-transition">
        {navItems.map((item) => {
          const isActive = activeCategory === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onCategoryClick(item.id)}
              className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'text-primary scale-110' 
                  : 'text-stone-400 dark:text-stone-600 hover:text-stone-600 dark:hover:text-stone-400'
              }`}
            >
              <span className={`material-symbols-outlined text-xl ${isActive ? 'fill-1' : ''}`}>
                {item.icon}
              </span>
              <span className={`text-[9px] font-black uppercase tracking-tight ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                {item.label}
              </span>
              {isActive && (
                <div className="w-1 h-1 bg-primary rounded-full absolute -bottom-1"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingIndex;
