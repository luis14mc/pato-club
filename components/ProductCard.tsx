'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

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
      onClick={() => onClick(product)}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalles de ${product.name}`}
    >
      {/* Card Premium - Minimalista y elegante */}
      <div className="group relative overflow-hidden transition-all duration-700 hover:-translate-y-2">
        {/* Imagen protagonista con efecto premium */}
        <div 
          className="relative aspect-[3/4] overflow-hidden mb-6 bg-white"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={`object-cover transition-all duration-1000 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            priority={false}
          />
          
          {/* Overlay sutil en hover para efecto premium */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
          
          {/* Badge Premium - Minimalista */}
          {isValentineEdition && (
            <div className="absolute top-4 left-4 z-10">
              <span 
                className="inline-block px-4 py-2 text-[10px] tracking-[0.25em] uppercase font-bold backdrop-blur-sm"
                style={{
                  border: '1.5px solid #631B26',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  color: '#631B26',  // Rojo vino original
                  fontFamily: 'var(--font-bricolage), serif',
                  fontWeight: '700',
                }}
              >
                VALENTINE'S
              </span>
            </div>
          )}
          
          {/* Botón Premium - Dorado que pasa a Rojo en Valentine's */}
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

        {/* Información Premium - Espaciado generoso */}
        <div className="space-y-4 px-2">
          {/* Categoría ultra sutil */}
          <p 
            className="text-[10px] tracking-[0.25em] uppercase font-semibold"
            style={{ 
              color: '#A27852',
              fontFamily: 'var(--font-work-sans), sans-serif',
            }}
          >
            {product.category}
          </p>

          {/* Nombre del producto - Elegante */}
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
          
          {/* Precio Premium - Destacado */}
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
