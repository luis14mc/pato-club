'use client';

import { useState } from 'react';
import { Product } from '@/types/product';
import ProductCard from './ProductCard';

interface CollectionSectionProps {
  id?: string;
  title: string;
  description?: string;
  products: Product[];
  isValentine?: boolean;
  backgroundColor?: 'cream' | 'cream-soft';
  showFilters?: boolean;
  onProductClick: (product: Product) => void;
}

export default function CollectionSection({
  id,
  title,
  description,
  products,
  isValentine = false,
  backgroundColor = 'cream',
  showFilters = false,
  onProductClick,
}: CollectionSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const getBackgroundColor = () => {
    if (isValentine || backgroundColor === 'cream-soft') return '#FAF6F1';
    return '#ECE0C8';
  };

  // Obtener categorías únicas
  const categories = ['Todos', ...Array.from(new Set(products.map(p => p.category)))];

  // Filtrar productos según categoría seleccionada
  const filteredProducts = selectedCategory === 'Todos' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <section 
      id={id} 
      className="py-20 sm:py-24 md:py-32 lg:py-40" 
      style={{ backgroundColor: getBackgroundColor() }}
    >
      {/* Contenedor CENTRADO con mucho spacing */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header minimalista con borde Valentine's si aplica */}
        <div 
          className="mb-16 sm:mb-20 md:mb-24 text-center pb-8 relative"
        >
          {/* Logo decorativo al costado - Solo Valentine's - VISIBLE EN TODAS LAS RESOLUCIONES */}
          {isValentine && (
            <div 
              className="absolute left-0 top-0 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 pointer-events-none"
              style={{
                backgroundImage: 'url(/Pato_hoodie_SF.png)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                opacity: 0.15,
              }}
            />
          )}
          
          {isValentine && (
            <div className="mb-6 relative z-10">
              <span 
                className="inline-block px-4 py-1.5 text-xs tracking-[0.3em] uppercase font-semibold"
                style={{
                  border: '1px solid #631B26',
                  color: '#631B26',  // Rojo vino original
                  fontFamily: 'var(--font-bricolage), serif',
                }}
              >
                Valentine's Edition
              </span>
            </div>
          )}
          
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8"
            style={{ 
              letterSpacing: '0.05em',
              color: isValentine ? '#631B26' : '#000000',  // Rojo vino original para Valentine's
              fontFamily: 'var(--font-bricolage), serif',
            }}
          >
            {title}
          </h2>
          
          {description && (
            <p 
              className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal px-4"
              style={{ 
                color: '#000000',
                fontFamily: 'var(--font-work-sans), sans-serif',
                opacity: 0.7,
              }}
            >
              {description}
            </p>
          )}

          {/* Filtros de Categoría - Solo si showFilters es true */}
          {showFilters && (
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8 px-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="px-5 py-2 text-xs sm:text-sm tracking-wider uppercase font-semibold transition-all duration-300"
                  style={{
                    backgroundColor: selectedCategory === category ? '#000000' : 'transparent',
                    color: selectedCategory === category ? '#FFFFFF' : '#000000',
                    border: '2px solid #000000',
                    fontFamily: 'var(--font-work-sans), sans-serif',
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category) {
                      e.currentTarget.style.backgroundColor = '#D09306';
                      e.currentTarget.style.borderColor = '#D09306';
                      e.currentTarget.style.color = '#000000';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.borderColor = '#000000';
                      e.currentTarget.style.color = '#000000';
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
          
          {/* Línea decorativa romántica - Solo Valentine's - RESPONSIVE */}
          {isValentine && (
            <div className="flex items-center justify-center mt-8 md:mt-12 mb-0 pt-6 md:pt-8">
              <div className="flex items-center gap-2 md:gap-4">
                <div style={{ 
                  width: '40px', 
                  height: '1px', 
                  background: `linear-gradient(to left, #631B26, transparent)` 
                }} className="md:w-[60px]" />
                <span style={{ color: '#631B26', fontSize: '10px' }} className="md:text-xs">♥</span>
                <div style={{ 
                  width: '15px', 
                  height: '1px', 
                  backgroundColor: '#631B26' 
                }} className="md:w-[20px]" />
                <span style={{ color: '#631B26', fontSize: '6px' }} className="md:text-[8px]">●</span>
                <div style={{ 
                  width: '15px', 
                  height: '1px', 
                  backgroundColor: '#631B26' 
                }} className="md:w-[20px]" />
                <span style={{ color: '#631B26', fontSize: '10px' }} className="md:text-xs">♥</span>
                <div style={{ 
                  width: '40px', 
                  height: '1px', 
                  background: `linear-gradient(to right, #631B26, transparent)` 
                }} className="md:w-[60px]" />
              </div>
            </div>
          )}
        </div>

        {/* Grid limpio con mucho spacing - productos protagonistas */}
        <div 
          className={`grid grid-cols-1 gap-8 md:gap-10 lg:gap-12 ${
            isValentine && filteredProducts.length === 2
              ? 'md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto'
              : 'md:grid-cols-2 lg:grid-cols-4'
          }`}
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={onProductClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
