
import React from 'react';

const ReviewSection: React.FC = () => {
  return (
    <section className="mt-12 mb-16 px-6 max-w-2xl mx-auto">
      <div className="bg-matte-black dark:bg-[#1A1A1A] text-white rounded-[2.5rem] p-10 text-center shadow-2xl relative overflow-hidden group border border-white/5 dark:border-stone-800">
        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:rotate-12 transition-transform duration-700">
           <span className="material-symbols-outlined text-9xl">rate_review</span>
        </div>
        
        <h3 className="text-2xl font-bold mb-3 tracking-tight">¿Te gustó tu café?</h3>
        <p className="text-stone-400 dark:text-stone-500 text-sm mb-8 max-w-xs mx-auto font-medium leading-relaxed">
          Déjanos una reseña en Google y ayuda a otros amantes del café a encontrarnos.
        </p>
        
        <a 
          href="https://www.google.com/maps/place/Nirmata+Specialty+Coffee/reviews" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-10 py-4 rounded-2xl transition-all shadow-xl active:scale-95 uppercase text-xs tracking-widest"
        >
          <span className="material-symbols-outlined">star</span>
          Dejar reseña
        </a>
      </div>
    </section>
  );
};

export default ReviewSection;
