
import React from 'react';
import { MenuItem } from '../types';
import { EXTRAS } from '../data';

interface ProductModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Overlay con desenfoque */}
      <div className="absolute inset-0 bg-matte-black/40 dark:bg-black/70 backdrop-blur-sm" onClick={onClose} />
      
      {/* Contenedor principal del modal */}
      <div className="relative w-full max-w-lg bg-white dark:bg-[#1A1A1A] rounded-t-[3rem] sm:rounded-[3rem] shadow-2xl overflow-hidden animate-slide-up sm:animate-fade-in border border-beige-light dark:border-stone-800 flex flex-col max-h-[92vh] theme-transition">
        
        {/* Encabezado Fijo para el botón de cierre */}
        <div className="sticky top-0 z-50 w-full bg-white/90 dark:bg-[#1A1A1A]/90 backdrop-blur-md flex justify-end items-center px-4 py-2 border-b border-beige-light/50 dark:border-stone-800/50">
          <button 
            onClick={onClose}
            className="w-12 h-12 flex items-center justify-center text-[#333333] dark:text-stone-300 hover:text-black dark:hover:text-white transition-all active:scale-90 focus:outline-none"
            aria-label="Cerrar detalle de producto"
          >
            <span className="material-symbols-outlined text-3xl font-light">close</span>
          </button>
        </div>

        {/* Contenido Scrollable */}
        <div className="overflow-y-auto hide-scrollbar flex-1">
          {/* Imagen del producto */}
          <div className="h-72 sm:h-96 w-full overflow-hidden bg-beige-light dark:bg-stone-900">
            <img 
              src={item.imageUrl} 
              alt={item.name} 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="p-8 sm:p-10">
            {/* Título y Precio */}
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-matte-black dark:text-white tracking-tighter leading-none">{item.name}</h2>
                <div className="flex gap-2 mt-4">
                   {item.isTop && <span className="bg-primary/10 text-primary text-[9px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-primary/10">Top ventas</span>}
                   {item.isNew && <span className="bg-beige-light dark:bg-stone-800 text-matte-black dark:text-stone-200 text-[9px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-matte-black/10 dark:border-white/10">Novedad</span>}
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                {item.prices.map((p, idx) => (
                  <div key={idx} className="flex items-baseline gap-2">
                    {p.label && (
                      <span className="text-[10px] text-coffee-muted dark:text-stone-500 font-bold uppercase tracking-widest">
                        {p.label === 'P' ? 'Pequeño' : p.label === 'G' ? 'Grande' : p.label}
                      </span>
                    )}
                    <span className="text-3xl font-bold text-primary leading-none">
                      {p.value.toFixed(2)}€
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Descripción */}
            <div className="mt-8 p-6 bg-beige-light dark:bg-stone-900/50 rounded-3xl border border-beige-light/50 dark:border-stone-800/50">
              <p className="text-matte-black dark:text-stone-300 text-sm leading-relaxed font-medium">
                {item.description}
              </p>
            </div>

            {/* Extras */}
            <div className="mt-10">
              <h3 className="text-[10px] font-bold text-coffee-muted dark:text-stone-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                <span className="w-6 h-px bg-stone-200 dark:bg-stone-800"></span>
                Extras Sugeridos
                <span className="flex-grow h-px bg-stone-200 dark:bg-stone-800"></span>
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {EXTRAS.map((extra, idx) => (
                  <div key={idx} className="flex justify-between items-center px-5 py-4 rounded-2xl bg-white dark:bg-stone-800 border border-beige-light dark:border-stone-700/50 hover:border-primary/20 dark:hover:border-primary/40 transition-all cursor-default">
                    <span className="text-xs font-bold text-matte-black dark:text-white">{extra.name}</span>
                    <span className="text-xs font-bold text-primary">+{extra.price.toFixed(2)}€</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action en barra */}
            <div className="mt-10 flex items-center justify-center gap-3 p-5 bg-matte-black dark:bg-stone-800 text-white rounded-[2rem] shadow-xl">
              <span className="material-symbols-outlined text-white text-xl">payments</span>
              <p className="text-[10px] font-bold uppercase tracking-widest">Pide directamente en la barra</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-fade-in { animation: fade-in 0.4s ease-out; }
      `}</style>
    </div>
  );
};

export default ProductModal;
