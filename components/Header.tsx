
import React, { useState } from 'react';

interface HeaderProps {
  onNavigate: (page: 'menu' | 'shop') => void;
  currentPage: 'menu' | 'shop';
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage, toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (page: 'menu' | 'shop') => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#121212]/95 backdrop-blur-md border-b border-beige-light dark:border-stone-800 shadow-sm theme-transition">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex flex-col items-start select-none cursor-pointer" onClick={() => handleLinkClick('menu')}>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-matte-black dark:text-white lowercase font-logo leading-none">
              nirmata
            </h1>
            <div className="w-full flex justify-end -mt-1 sm:-mt-2">
              <p className="text-[10px] sm:text-[12px] text-coffee-muted dark:text-stone-400 font-semibold tracking-widest lowercase font-logo uppercase">
                specialty coffee
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-1">
             <button 
               onClick={toggleTheme}
               className="p-2 text-coffee-muted dark:text-stone-400 hover:text-primary dark:hover:text-primary transition-all active:rotate-[20deg]"
               title={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
             >
               <span className="material-symbols-outlined text-2xl">
                 {isDarkMode ? 'light_mode' : 'dark_mode'}
               </span>
             </button>
             <button className="p-2 text-coffee-muted dark:text-stone-400 hover:text-primary transition-colors">
               <span className="material-symbols-outlined text-2xl">info</span>
             </button>
          </div>
        </div>
      </header>

      {/* Botón Flotante de Menú (FAB) en la esquina inferior derecha */}
      <button 
        onClick={() => setIsMenuOpen(true)}
        className="fixed bottom-8 right-6 z-[55] w-14 h-14 bg-matte-black dark:bg-primary text-white rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-all hover:bg-primary dark:hover:bg-primary-dark group"
        aria-label="Abrir menú de navegación"
      >
        <span className="material-symbols-outlined text-3xl group-hover:rotate-180 transition-transform duration-500">menu</span>
      </button>

      {/* Side Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-matte-black/40 dark:bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Side Menu Content */}
      <div className={`fixed top-0 left-0 bottom-0 z-[70] w-72 bg-white dark:bg-[#1A1A1A] shadow-2xl transition-transform duration-300 ease-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} theme-transition`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-bold font-logo lowercase tracking-tighter dark:text-white">nirmata</h2>
            <button onClick={() => setIsMenuOpen(false)} className="text-coffee-muted dark:text-stone-400">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <nav className="flex flex-col gap-6">
            <button 
              onClick={() => handleLinkClick('menu')}
              className={`flex items-center gap-4 text-lg font-bold uppercase tracking-widest text-left ${currentPage === 'menu' ? 'text-primary' : 'text-coffee-muted dark:text-stone-400'}`}
            >
              <span className="material-symbols-outlined">home</span>
              Inicio
            </button>
            <button 
              onClick={() => handleLinkClick('shop')}
              className={`flex items-center gap-4 text-lg font-bold uppercase tracking-widest text-left ${currentPage === 'shop' ? 'text-primary' : 'text-coffee-muted dark:text-stone-400'}`}
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              Para llevar
            </button>
          </nav>

          <div className="mt-auto pt-8 border-t border-beige-light dark:border-stone-800">
             <p className="text-[9px] text-stone-400 font-bold uppercase tracking-[0.3em] mb-2">
              Nirmata Specialty Coffee
            </p>
            <p className="text-xs text-coffee-muted dark:text-stone-300 font-medium">C. de l'Amistat, 20, 08005 Barcelona</p>
          </div>
        </div>
      </div>
      
      <style>{`
        .animate-fade-in { animation: opacity 0.3s ease-out; }
        @keyframes opacity { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </>
  );
};

export default Header;
