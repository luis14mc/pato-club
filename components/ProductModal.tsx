'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Check } from 'lucide-react';
import { Product } from '@/types/product';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const TALLAS = ['XS-S', 'M-L', 'XL', 'XXL'];
const COLORES = [
  { name: 'Negro', hex: '#000000' },
  { name: 'Rojo', hex: '#DC2626' },
  { name: 'Blanco', hex: '#FFFFFF' },
];

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [tallaSeleccionada, setTallaSeleccionada] = useState<string>('');
  const [colorSeleccionado, setColorSeleccionado] = useState<string>('');

  // Cerrar con tecla ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Resetear selecciones al abrir nuevo producto
  useEffect(() => {
    if (product) {
      setTallaSeleccionada('');
      setColorSeleccionado('');
    }
  }, [product]);

  if (!product) return null;

  // Construir mensaje de WhatsApp
  const handleComprar = () => {
    if (!tallaSeleccionada || !colorSeleccionado) {
      alert('Por favor selecciona una talla y un color');
      return;
    }

    const mensaje = `Hola Pato Club, me interesa el producto *${product.name}* (Código: ${product.id}) en talla *${tallaSeleccionada}* y color *${colorSeleccionado}*. ¿Tienen disponibilidad?`;
    
    const whatsappUrl = `https://wa.me/50433333333?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop con blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-xl"
            onClick={onClose}
          />

          {/* Modal Container - RESPONSIVE OPTIMIZADO */}
          <div className="fixed inset-0 z-[80] flex items-center justify-center p-2 sm:p-4 pointer-events-none overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-6xl my-4 bg-white shadow-2xl pointer-events-auto max-h-[95vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón de Cierre - MEJORADO PARA MOBILE */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-[100] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black text-white hover:bg-gold hover:text-black rounded-full transition-all duration-200 shadow-2xl"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
              </button>

              {/* Layout RESPONSIVE - Columna única en mobile, dos en desktop */}
              <div className="flex flex-col md:grid md:grid-cols-2 max-h-[95vh] overflow-y-auto">
                {/* Columna Imagen - AJUSTADA PARA MOBILE */}
                <div className="relative bg-zinc-50 h-[40vh] sm:h-[50vh] md:h-auto md:min-h-[600px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Columna Información - PADDING OPTIMIZADO */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col">
                  {/* Header del Producto */}
                  <div className="mb-6">
                    <p className="text-[10px] sm:text-xs tracking-widest uppercase text-zinc-500 mb-2">
                      {product.category}
                    </p>
                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 pr-8">
                      {product.name}
                    </h2>
                    <p className="text-xl sm:text-2xl font-semibold text-black">
                      L. {new Intl.NumberFormat('es-HN', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }).format(product.price)}
                    </p>
                  </div>

                  {/* Descripción - TEXTO AJUSTADO */}
                  <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Selector de Tallas - WRAP EN MOBILE */}
                  <div className="mb-6">
                    <label className="block text-xs sm:text-sm tracking-wider uppercase text-black font-bold mb-3">
                      Selecciona tu talla
                    </label>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {TALLAS.map((talla) => (
                        <button
                          key={talla}
                          onClick={() => setTallaSeleccionada(talla)}
                          className={`px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 ${
                            tallaSeleccionada === talla
                              ? 'border-2 border-black bg-black text-white'
                              : 'border-2 border-zinc-300 text-black hover:border-bronze hover:text-bronze'
                          }`}
                        >
                          {talla}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Selector de Colores */}
                  <div className="mb-6">
                    <label className="block text-xs sm:text-sm tracking-wider uppercase text-black font-bold mb-3">
                      Color
                    </label>
                    <div className="flex gap-3">
                      {COLORES.map((color) => (
                        <button
                          key={color.name}
                          onClick={() => setColorSeleccionado(color.name)}
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-200 ${
                            colorSeleccionado === color.name
                              ? 'ring-4 ring-offset-2 ring-black scale-110'
                              : 'ring-2 ring-zinc-300 hover:scale-105 hover:ring-bronze'
                          }`}
                          style={{ backgroundColor: color.hex }}
                          aria-label={color.name}
                          title={color.name}
                        >
                          {color.hex === '#FFFFFF' && (
                            <span className="w-full h-full block rounded-full border-2 border-zinc-300" />
                          )}
                        </button>
                      ))}
                    </div>
                    {colorSeleccionado && (
                      <p className="text-xs sm:text-sm text-zinc-600 mt-2 font-medium">
                        Color: <span className="text-black font-bold">{colorSeleccionado}</span>
                      </p>
                    )}
                  </div>

                  {/* Características - COMPACTO EN MOBILE */}
                  {product.features && product.features.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-xs sm:text-sm tracking-wider uppercase text-black font-bold mb-3">
                        Características
                      </h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-forest flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                            <span className="text-xs sm:text-sm text-zinc-700 leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Botón de Comprar - STICKY EN MOBILE */}
                  <div className="mt-auto pt-4 sm:pt-6 space-y-2 sm:space-y-3 sticky bottom-0 bg-white pb-4">
                    <button
                      onClick={handleComprar}
                      disabled={!tallaSeleccionada || !colorSeleccionado}
                      className={`w-full h-12 sm:h-14 tracking-widest text-xs sm:text-sm font-bold transition-all duration-300 shadow-lg ${
                        tallaSeleccionada && colorSeleccionado
                          ? 'bg-forest text-white hover:bg-gold hover:text-black'
                          : 'bg-zinc-200 text-zinc-400 cursor-not-allowed'
                      }`}
                    >
                      COMPRAR VÍA WHATSAPP
                    </button>
                    
                    {(!tallaSeleccionada || !colorSeleccionado) && (
                      <p className="text-[10px] sm:text-xs text-zinc-500 text-center font-medium">
                        ⚠️ Selecciona talla y color
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
