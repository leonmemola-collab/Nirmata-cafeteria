
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import ReviewSection from './components/ReviewSection';
import StaffPrompt from './components/StaffPrompt';
import Footer from './components/Footer';
import HeroSlider from './components/HeroSlider';
import { MENU_DATA } from './data';
import { MenuItem } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'menu' | 'shop'>('menu');
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].id);
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [isScrollingManual, setIsScrollingManual] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  // Toggle Theme logic
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const handleScroll = useCallback(() => {
    if (isScrollingManual || currentPage !== 'menu') return;

    const scrollPosition = window.scrollY + 180;
    
    for (const category of MENU_DATA) {
      const element = document.getElementById(category.id);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          setActiveCategory(category.id);
          break;
        }
      }
    }
  }, [isScrollingManual, currentPage]);

  const scrollToCategory = (id: string) => {
    if (currentPage !== 'menu') {
      setCurrentPage('menu');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({ top: element.offsetTop - 140, behavior: 'smooth' });
          setActiveCategory(id);
        }
      }, 100);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      setIsScrollingManual(true);
      setActiveCategory(id);
      
      const offset = 140; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setTimeout(() => {
        setIsScrollingManual(false);
      }, 1000);
    }
  };

  const handleNavigate = (page: 'menu' | 'shop') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className={`min-h-screen flex flex-col bg-warm-bg dark:bg-[#121212] theme-transition`}>
      <Header onNavigate={handleNavigate} currentPage={currentPage} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      {currentPage === 'menu' && (
        <CategoryNav 
          categories={MENU_DATA} 
          activeCategory={activeCategory} 
          onCategoryClick={scrollToCategory}
        />
      )}
      
      <main className="flex-grow max-w-2xl mx-auto w-full">
        {currentPage === 'shop' ? (
          /* View: Shop Page (Catalog) */
          <div className="px-6 py-12 min-h-screen animate-fade-in">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6 shadow-xl">
                <span className="material-symbols-outlined text-3xl">shopping_bag</span>
              </div>
              <h2 className="text-3xl font-bold text-matte-black dark:text-white uppercase tracking-tighter mb-2">Nuestros cafés para llevar</h2>
              <p className="text-coffee-muted dark:text-stone-400 text-sm font-medium tracking-wide">Llévate la experiencia Nirmata a casa</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {MENU_DATA.find(c => c.id === 'para-llevar')?.items.map((item) => (
                <ProductCard 
                  key={item.id} 
                  item={item} 
                  onSelect={setSelectedProduct} 
                />
              ))}
            </div>

            <div className="mt-16 text-center">
              <button 
                onClick={() => handleNavigate('menu')}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-coffee-muted dark:text-stone-300 border border-stone-200 dark:border-stone-800 px-8 py-4 rounded-full hover:bg-beige-light dark:hover:bg-stone-800 transition-all"
              >
                Volver a la carta
              </button>
            </div>
          </div>
        ) : (
          /* View: Main Menu */
          <div className="animate-fade-in">
            <HeroSlider onPhraseClick={scrollToCategory} />

            <div className="px-6 py-8">
              {MENU_DATA.map((category) => (
                <section 
                  key={category.id} 
                  id={category.id} 
                  className={`mb-12 scroll-mt-40 p-2 sm:p-4 rounded-3xl transition-all duration-500 ${
                    ['novedades', 'especiales', 'acompañar'].includes(category.id) 
                      ? 'bg-beige-light/50 dark:bg-stone-900/40 border border-beige-light dark:border-stone-800/50 shadow-sm' 
                      : category.id === 'para-llevar'
                        ? 'bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-primary/20'
                        : 'bg-white dark:bg-transparent'
                  }`}
                >
                  <div className="flex flex-col mb-8 px-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center transition-colors ${
                        ['novedades', 'especiales', 'acompañar', 'para-llevar'].includes(category.id) 
                          ? 'bg-primary text-white border-primary shadow-md' 
                          : 'bg-white dark:bg-stone-800 border-beige-light dark:border-stone-700 text-matte-black dark:text-white'
                      }`}>
                        <span className="material-symbols-outlined text-xl">{category.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold text-matte-black dark:text-white tracking-tight uppercase">{category.title}</h3>
                    </div>
                    {category.subtitle && (
                      <p className="text-coffee-muted dark:text-stone-400 text-[10px] font-bold mt-2 opacity-90 uppercase tracking-[0.15em]">
                        {category.subtitle}
                      </p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 gap-5">
                    {(category.id === 'para-llevar' ? category.items.slice(0, 3) : category.items).map((item) => (
                      <ProductCard 
                        key={item.id} 
                        item={item} 
                        onSelect={setSelectedProduct} 
                      />
                    ))}
                  </div>

                  {category.id === 'para-llevar' && (
                    <div className="mt-8 flex justify-center">
                      <button 
                        onClick={() => handleNavigate('shop')}
                        className="text-[10px] font-bold uppercase tracking-widest text-primary border-b border-primary/30 pb-1 hover:text-primary-dark hover:border-primary transition-all"
                      >
                        Ver todos los cafés para llevar
                      </button>
                    </div>
                  )}
                </section>
              ))}
            </div>
            <ReviewSection />
            <StaffPrompt />
          </div>
        )}
      </main>

      <Footer />
      
      <ProductModal 
        item={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />

      <style>{`
        .animate-fade-in { animation: fadeIn 0.4s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default App;
