'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Formatear precio con Intl.NumberFormat
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-HN', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  // Detectar si es edición especial Valentine's
  const isValentineEdition = 
    product.name.toLowerCase().includes('valentine') || 
    product.name.toLowerCase().includes('love is red');

  // Para futuras implementaciones de badges
  const isNew = false; // Cambiar según lógica de negocio
  const isSoldOut = false; // Cambiar según lógica de negocio

  return (
    <article
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(product);
        }
      }}
    >
      {/* Contenedor de Imagen */}
      <div className="relative aspect-[3/4] overflow-hidden bg-zinc-50 mb-6">
        {/* Imagen con efecto zoom */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          priority={false}
        />

        {/* Badges de Estado - USO DE DORADO PARA EDICIÓN ESPECIAL */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {/* Badge de Edición Especial - DORADO #D09306 */}
          {isValentineEdition && (
            <span className="inline-block px-3 py-1 text-[10px] tracking-[0.2em] uppercase bg-gold text-black font-bold border border-gold shadow-md">
              Edición Especial
            </span>
          )}

          {/* Badge de Nuevo - Verde Bosque */}
          {isNew && (
            <span className="inline-block px-3 py-1 text-[10px] tracking-[0.2em] uppercase bg-forest text-white font-bold border border-forest shadow-md">
              Nuevo
            </span>
          )}

          {/* Badge de Agotado - Bronce */}
          {isSoldOut && (
            <span className="inline-block px-3 py-1 text-[10px] tracking-[0.2em] uppercase bg-bronze text-white font-bold border border-bronze shadow-md">
              Agotado
            </span>
          )}
        </div>

        {/* Botón "VISTA RÁPIDA" */}
        <div
          className={`absolute inset-x-0 bottom-0 flex items-end justify-center pb-6 transition-all duration-500 ease-out ${
            isHovered
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <button
            className="px-8 py-3 bg-white text-black text-sm tracking-widest font-bold hover:bg-bronze hover:text-white transition-colors duration-300 shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              onClick(product);
            }}
          >
            VISTA RÁPIDA
          </button>
        </div>

        {/* Overlay sutil en hover */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${
            isHovered ? 'opacity-5' : 'opacity-0'
          }`}
        />
      </div>

      {/* Información del Producto */}
      <div className="space-y-2">
        {/* Categoría */}
        <p className="text-[11px] tracking-[0.15em] uppercase text-zinc-500 font-medium">
          {product.category}
        </p>

        {/* Nombre del Producto */}
        <h3 className="text-base font-normal text-black leading-snug">
          {product.name}
        </h3>

        {/* Precio */}
        <p className="text-base font-bold text-black">
          L. {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
