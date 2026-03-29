'use client';

import { useState } from 'react';
import Image from 'next/image';
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
  titleColor?: string;
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
  titleColor,
}: CollectionSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const getBackgroundColor = () => {
    if (isValentine || backgroundColor === 'cream-soft') return '#FAF6F1';
    return '#ECE0C8';
  };

  const categories = ['Todos', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = selectedCategory === 'Todos' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <section 
      id={id} 
      className="py-10 sm:py-12 md:py-16 lg:py-20" 
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="mb-8 sm:mb-10 md:mb-12 text-center pb-0 relative"
        >
          {isValentine ? (
            <div className="flex flex-col items-center mb-0">
              <div className="relative w-full max-w-[800px] aspect-[4/1] mb-0">
                <Image
                  src="/texto_valentines.png"
                  alt="Love is Red"
                  fill
                  className="object-contain"
                  priority
                  unoptimized={true}
                />
              </div>
            </div>
          ) : (
            <>
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8"
                style={{ 
                  letterSpacing: '0.05em',
                  color: titleColor || '#000000',
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
            </>
          )}

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
          
          {isValentine && (
            <div className="flex items-center justify-center mt-0 mb-0 pt-0">
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

        <div 
          className={`relative grid grid-cols-1 gap-8 md:gap-10 lg:gap-12 justify-center ${
            filteredProducts.length === 1
              ? 'max-w-md mx-auto'
              : filteredProducts.length === 2
                ? 'md:grid-cols-2 max-w-4xl mx-auto'
                : filteredProducts.length === 3
                  ? 'md:grid-cols-3 max-w-6xl mx-auto'
                  : 'md:grid-cols-2 lg:grid-cols-4'
          }`}
        >
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={onProductClick}
              isPriority={index < 4}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
