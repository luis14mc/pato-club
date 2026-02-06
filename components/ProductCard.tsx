'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
  isPriority?: boolean;
}

export default function ProductCard({ product, onClick, isPriority = false }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const shouldPrioritize = product.priority || isPriority;

  // Hydration Shield: Solo activar interacciones en el cliente
  useEffect(() => {
    setIsMounted(true); // eslint-disable-line
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-HN', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const isValentineEdition = product.category === 'Edición Especial';

  return (
    <article 
      className="group cursor-pointer w-full" 
      onClick={() => isMounted && onClick(product)}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalles de ${product.name}`}
      suppressHydrationWarning
    >
      <div className="group relative overflow-hidden transition-all duration-700 hover:-translate-y-2">
        <div 
          className="relative aspect-[3/4] overflow-hidden mb-6 bg-white"
        >
          <Image
            src={product.image}
            alt={`Camiseta Pato Club - ${product.name}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={`object-cover transition-all duration-1000 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              imageRendering: '-webkit-optimize-contrast',
            }}
            onLoad={() => setImageLoaded(true)}
            priority={shouldPrioritize}
            loading={shouldPrioritize ? "eager" : "lazy"}
            quality={95}
            decoding="async"
            unoptimized={true}
          />
          
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
          
          <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out">
            <button 
              className="w-full py-5 font-body font-bold tracking-[0.15em] text-xs uppercase transition-all duration-300"
              style={{ 
                minHeight: '56px',
                backgroundColor: '#D09306',
                color: '#000000',
                fontFamily: 'var(--font-bricolage), serif',
              }}
              onMouseEnter={(e) => {
                if (isValentineEdition) {
                  e.currentTarget.style.backgroundColor = '#631B26';
                  e.currentTarget.style.color = '#FFFFFF';
                } else {
                  e.currentTarget.style.backgroundColor = '#000000';
                  e.currentTarget.style.color = '#FFFFFF';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#D09306';
                e.currentTarget.style.color = '#000000';
              }}
            >
              VISTA RÁPIDA
            </button>
          </div>
        </div>

        <div className="space-y-4 px-2">
          <p 
            className="text-[10px] tracking-[0.25em] uppercase font-semibold"
            style={{ 
              color: '#A27852',
              fontFamily: 'var(--font-work-sans), sans-serif',
            }}
          >
            {product.category}
          </p>

          <h3 
            className="text-lg md:text-xl leading-tight font-medium"
            style={{
              color: '#000000',
              fontFamily: 'var(--font-work-sans), sans-serif',
              lineHeight: '1.3',
            }}
          >
            {product.name}
          </h3>
          
          <p 
            className="text-2xl md:text-3xl font-bold pt-1"
            style={{ 
              fontFamily: 'var(--font-bricolage), serif',
              color: '#000000',
              fontWeight: '700',
              letterSpacing: '-0.01em',
            }}
          >
            L. {formatPrice(product.price)}
          </p>
        </div>
      </div>
    </article>
  );
}
