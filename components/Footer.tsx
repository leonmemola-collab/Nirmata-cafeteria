
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 text-center border-t border-beige-light dark:border-stone-800 bg-white dark:bg-[#121212] theme-transition">
      <div className="flex flex-col items-center gap-6">
        <div className="w-12 h-12 rounded-full bg-beige-light dark:bg-stone-900 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">favorite</span>
        </div>
        <p className="text-xl font-bold text-matte-black dark:text-white italic font-logo">"Disfruta tu café ☕"</p>
        <div className="flex gap-6 mt-2">
          <a href="#" className="text-stone-400 dark:text-stone-600 hover:text-matte-black dark:hover:text-stone-300 transition-colors">
            <span className="material-symbols-outlined">public</span>
          </a>
          <a href="#" className="text-stone-400 dark:text-stone-600 hover:text-matte-black dark:hover:text-stone-300 transition-colors">
            <span className="material-symbols-outlined">camera</span>
          </a>
        </div>
        <div className="mt-6 flex flex-col items-center gap-2">
          <p className="text-[9px] text-stone-400 dark:text-stone-600 font-bold uppercase tracking-[0.3em]">
            © 2024 Nirmata Specialty Coffee
          </p>
          <p className="text-[8px] text-stone-300 dark:text-stone-700 font-bold uppercase tracking-widest">
            Diseño Minimalista & Especialidad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
