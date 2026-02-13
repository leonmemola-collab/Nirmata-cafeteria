
import React, { useState, useEffect } from 'react';

interface Slide {
  image: string;
  phrase: string;
  targetId?: string;
}

interface HeroSliderProps {
  onPhraseClick: (targetId: string) => void;
}

const HERO_SLIDES: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
    phrase: "Nirmata"
  },
  {
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop",
    phrase: "Specialty"
  },
  {
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop",
    phrase: "Coffee"
  },
  {
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1200&auto=format&fit=crop",
    phrase: "Llévate Nirmata a casa.",
    targetId: "para-llevar"
  }
];

const HeroSlider: React.FC<HeroSliderProps> = ({ onPhraseClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-6 pt-6">
      <div className="relative h-72 md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-stone-100 border border-beige-light">
        {/* Imágenes del Carrusel */}
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <img 
              src={slide.image} 
              className="w-full h-full object-cover" 
              alt={`Nirmata Slide ${index}`} 
              loading="eager"
              decoding="sync"
            />
          </div>
        ))}

        {/* Capa de Gradiente Estática */}
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black/80 via-matte-black/20 to-transparent z-10" />

        {/* Contenido de Texto */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-12 px-6 text-center select-none">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] bg-primary text-white px-5 py-2 rounded-full shadow-lg mb-6 animate-pulse">
            Abierto ahora
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none uppercase drop-shadow-lg mb-2">
            Nirmata Specialty Coffee
          </h2>
          
          <div className="relative h-8 w-full flex justify-center items-center overflow-hidden">
            {HERO_SLIDES.map((slide, index) => (
              <p 
                key={index} 
                onClick={() => slide.targetId && onPhraseClick(slide.targetId)}
                className={`absolute text-white/95 text-sm md:text-xl font-bold uppercase tracking-[0.2em] transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) ${
                  currentSlide === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                } ${slide.targetId ? 'cursor-pointer hover:text-white underline underline-offset-8 decoration-primary/80 active:scale-95' : ''}`}
              >
                {slide.phrase}
              </p>
            ))}
          </div>
        </div>

        {/* Indicadores de Posición sutiles */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {HERO_SLIDES.map((_, index) => (
            <div 
              key={index}
              className={`h-1 rounded-full transition-all duration-500 ${
                currentSlide === index ? 'w-6 bg-primary' : 'w-1 bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
