
import React from 'react';
import { MenuCategory } from '../types';

interface CategoryNavProps {
  categories: MenuCategory[];
  activeCategory: string;
  onCategoryClick: (id: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ categories, activeCategory, onCategoryClick }) => {
  return (
    <nav className="sticky top-[73px] z-40 bg-white dark:bg-[#121212] border-b border-beige-light dark:border-stone-800 overflow-x-auto hide-scrollbar theme-transition">
      <div className="flex items-center gap-2 px-6 py-3 max-w-2xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryClick(cat.id)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 border outline-none tracking-tight uppercase ${
              activeCategory === cat.id
                ? 'bg-primary text-white border-primary shadow-lg shadow-primary/10 scale-105'
                : 'bg-beige-light dark:bg-stone-800 text-coffee-muted dark:text-stone-300 border-transparent hover:border-stone-200 dark:hover:border-stone-700'
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNav;
