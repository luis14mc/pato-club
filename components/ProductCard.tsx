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
      {/* Card minimalista - SOLO imagen sobre crema */}
      <div className="group relative overflow-hidden transition-all duration-500 hover:-translate-y-1">
        {/* Imagen protagonista */}
        <div 
          className="relative aspect-[3/4] overflow-hidden mb-6"
          style={{ backgroundColor: '#ECE0C8' }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={`object-cover transition-all duration-700 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            priority={false}
          />
          
          {/* Badge minimalista - Solo borde */}
          {isValentineEdition && (
            <div className="absolute top-3 left-3 z-10">
              <span 
                className="inline-block px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-bold"
                style={{
                  border: '1px solid #000000',
                  backgroundColor: 'rgba(236, 224, 200, 0.95)',  // Crema semi-transparente
                  color: '#000000',
                  fontFamily: 'var(--font-bricolage), serif',
                  fontWeight: '700',
                }}
              >
                VALENTINE'S
              </span>
            </div>
          )}
          
          {/* Botón minimalista - outline */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <button 
              className="w-full py-4 font-body font-bold tracking-widest text-xs uppercase transition-colors duration-200"
              style={{ 
                minHeight: '44px',
                border: '1px solid #000000',
                backgroundColor: 'rgba(236, 224, 200, 0.98)',
                color: '#000000',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#000000';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(236, 224, 200, 0.98)';
                e.currentTarget.style.color = '#000000';
              }}
            >
              VISTA RÁPIDA
            </button>
          </div>
        </div>

        {/* Información limpia - minimalismo máximo */}
        <div className="space-y-3">
          {/* Categoría sutil */}
          <p 
            className="text-[11px] tracking-[0.2em] uppercase font-medium"
            style={{ 
              color: '#000000',
              opacity: 0.5,
            }}
          >
            {product.category}
          </p>

          {/* Nombre del producto - protagonista */}
          <h3 
            className="text-base md:text-lg leading-tight font-normal"
            style={{
              color: '#000000',
              fontFamily: 'var(--font-work-sans), sans-serif',
              lineHeight: '1.4',
            }}
          >
            {product.name}
          </h3>
          
          {/* Precio destacado con mucho espacio */}
          <p 
            className="text-xl md:text-2xl font-bold pt-2"
            style={{ 
              fontFamily: 'var(--font-bricolage), serif',
              color: '#000000',
              fontWeight: '700',
              letterSpacing: '-0.02em',
            }}
          >
            L. {formatPrice(product.price)}
          </p>
        </div>
      </div>
    </article>
  );
}
