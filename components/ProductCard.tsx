
import React from 'react';
import { MenuItem } from '../types';

interface ProductCardProps {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
}

const ProductCard: React.FC<ProductCardProps> = React.memo(({ item, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(item)}
      className="group bg-white dark:bg-[#1E1E1E] rounded-3xl p-4 flex gap-5 border border-beige-light dark:border-stone-800 hover:border-primary/30 dark:hover:border-primary/50 shadow-sm active:scale-[0.99] transition-all cursor-pointer overflow-hidden theme-transition"
    >
      <div className="relative w-28 h-28 rounded-2xl overflow-hidden shrink-0 shadow-inner bg-beige-light dark:bg-stone-800">
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
        {(item.isTop || item.isNew) && (
          <div className={`absolute top-2 left-2 px-3 py-1 rounded-lg text-[9px] font-bold uppercase text-white shadow-md ${item.isTop ? 'bg-primary' : 'bg-matte-black dark:bg-stone-700'}`}>
            {item.isTop ? 'Top' : 'Nuevo'}
          </div>
        )}
      </div>
      
      <div className="flex flex-col justify-between flex-1 py-1">
        <div>
          <h4 className="text-lg font-bold text-matte-black dark:text-white group-hover:text-primary transition-colors leading-tight">{item.name}</h4>
          <p className="text-xs text-coffee-muted dark:text-stone-400 line-clamp-2 mt-2 leading-relaxed font-medium">
            {item.description}
          </p>
        </div>
        
        <div className="flex items-center gap-4 mt-3 flex-wrap">
          {item.prices.length > 0 ? (
            item.prices.map((price, idx) => (
              <div key={idx} className="flex items-baseline gap-1.5">
                {price.label && (
                  <span className="text-[9px] font-bold text-coffee-muted dark:text-stone-500 uppercase tracking-tighter">
                    {price.label === 'P' ? 'P' : price.label === 'G' ? 'G' : price.label}
                  </span>
                )}
                <span className="text-md font-bold text-matte-black dark:text-white">
                  {price.value.toFixed(2)}€
                </span>
              </div>
            ))
          ) : (
            <span className="text-[10px] font-bold text-coffee-muted dark:text-stone-500 italic uppercase tracking-widest">Consultar precio</span>
          )}
        </div>
      </div>
    </div>
  );
});

export default ProductCard;
