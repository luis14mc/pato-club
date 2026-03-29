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

const TALLAS_DEFAULT = ['XS-S', 'M-L', 'XL', 'XXL'];

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [tallaSeleccionada, setTallaSeleccionada] = useState<string>('');
  const [colorSeleccionado, setColorSeleccionado] = useState<any>(null);

  const TALLAS_DISPONIBLES = product?.sizes || [];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (product) {
      setTallaSeleccionada('');
      setColorSeleccionado(null);
    }
  }, [product]);

  if (!product) return null;

  const currentImage = colorSeleccionado?.image || product.image;
  // Lógica para saber si hay colores o tallas
  const hasColors = product.colors && product.colors.length > 0;
  const hasSizes = product.sizes && product.sizes.length > 0;
  // El botón solo se deshabilita si hay colores/tallas y no se han seleccionado
  const isButtonDisabled = (hasColors && !colorSeleccionado) || (hasSizes && !tallaSeleccionada);

  const handleComprar = () => {
    if (isButtonDisabled) return;
    let mensaje = `Hola Pato Club, me interesa la *${product.name}*`;
    if (hasColors && colorSeleccionado) {
      mensaje += ` en color *${colorSeleccionado.name}*`;
    }
    if (hasSizes && tallaSeleccionada) {
      mensaje += ` en talla *${tallaSeleccionada}*`;
    }
    mensaje += '. ¿Tienen disponibilidad?';
    const whatsappUrl = `https://wa.me/50496309525?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[140] bg-black/70 backdrop-blur-md"
            onClick={onClose}
          />

          <div className="fixed inset-0 z-[150] flex items-center justify-center p-0 sm:p-4 md:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-5xl bg-[#FAF6F1] pointer-events-auto overflow-hidden sm:rounded-2xl shadow-2xl flex flex-col z-[150]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 bg-[#FAF6F1] border-b border-black/5 z-30">
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-black/40" style={{ fontFamily: 'var(--font-bricolage), serif' }}>
                    Detalles del Producto
                  </span>
                  <div className="hidden md:flex items-center gap-1 mt-1">
                    <motion.div 
                      animate={{ y: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <svg className="w-3 h-3 text-[#A27852]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </motion.div>
                    <span className="text-[8px] uppercase tracking-widest text-[#A27852] font-semibold">Desliza para ver más</span>
                  </div>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                  <X className="w-6 h-6 text-black" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto scroll-smooth custom-scrollbar">
                <div className="flex flex-col md:flex-row h-full">
                  
                <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-0 border-r border-black/5">
                  <div className="relative w-full h-[50vh] md:h-full">
                    <Image
                      src={currentImage}
                      alt={product.name}
                      fill
                      className="object-contain md:object-cover transition-transform duration-700"
                      priority
                      unoptimized
                    />
                  </div>
                </div>

                  <div className="w-full md:w-1/2 p-6 md:p-10 lg:p-12 space-y-8">
                    <div className="space-y-3">
                      <p className="text-[10px] tracking-[0.2em] uppercase text-[#A27852] font-semibold" style={{ fontFamily: 'var(--font-work-sans), sans-serif' }}>
                        {product.category}
                      </p>
                      <h2 className="text-2xl md:text-4xl font-bold text-black leading-tight" style={{ fontFamily: 'var(--font-bricolage), serif' }}>
                        {product.name}
                      </h2>
                      <p className="text-xl md:text-2xl font-bold text-black" style={{ fontFamily: 'var(--font-bricolage), serif' }}>
                        L. {new Intl.NumberFormat('es-HN', { minimumFractionDigits: 2 }).format(product.price)}
                      </p>
                    </div>

                    <p className="text-xs md:text-sm text-black/60 leading-relaxed" style={{ fontFamily: 'var(--font-work-sans), sans-serif' }}>
                      {product.description}
                    </p>

                    {/* Selectores */}
                    <div className="space-y-6">
                      {/* Colores */}
                      {hasColors && (
                        <div className="space-y-3">
                          <span className="text-[10px] font-bold tracking-widest uppercase text-black/40" style={{ fontFamily: 'var(--font-bricolage), serif' }}>
                            Color: <span className="text-black">{colorSeleccionado?.name || 'Selecciona'}</span>
                          </span>
                          <div className="flex flex-wrap gap-3">
                            {product.colors!.map((color) => (
                              <button
                                key={color.name}
                                onClick={() => setColorSeleccionado(color)}
                                className={`w-10 h-10 rounded-full border transition-all ${
                                  colorSeleccionado?.name === color.name ? 'border-black scale-110 ring-2 ring-[#FAF6F1] ring-offset-2 ring-offset-black' : 'border-black/10'
                                }`}
                                style={{ 
                                  backgroundColor: color.hex,
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tallas */}
                      {hasSizes && (
                        <div className="space-y-3">
                          <span className="text-[10px] font-bold tracking-widest uppercase text-black/40" style={{ fontFamily: 'var(--font-bricolage), serif' }}>
                            Talla: <span className="text-black">{tallaSeleccionada || 'Selecciona'}</span>
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {TALLAS_DISPONIBLES.map((talla) => (
                              <button
                                key={talla}
                                onClick={() => setTallaSeleccionada(talla)}
                                className={`px-6 py-3 text-[10px] font-bold border transition-all ${
                                  tallaSeleccionada === talla ? 'bg-black text-white border-black' : 'bg-transparent text-black border-black/10 hover:border-black'
                                }`}
                                style={{ fontFamily: 'var(--font-work-sans), sans-serif' }}
                              >
                                {talla}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Características */}
                    {product.features && (
                      <div className="space-y-4 pt-4">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-black/40" style={{ fontFamily: 'var(--font-bricolage), serif' }}>
                          Características
                        </span>
                        <ul className="grid grid-cols-1 gap-3">
                          {product.features.map((f, i) => (
                            <li key={i} className="flex items-center gap-3 text-[11px] text-black/70" style={{ fontFamily: 'var(--font-work-sans), sans-serif' }}>
                              <Check className="w-4 h-4 text-[#014B28]" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer Fijo con Botón */}
              <div className="p-6 bg-[#FAF6F1] border-t border-black/5 z-40">
                <button
                  onClick={handleComprar}
                  disabled={isButtonDisabled}
                  className={`w-full h-16 text-xs font-bold tracking-[0.3em] transition-all duration-300 shadow-lg ${
                    isButtonDisabled ? 'bg-black/10 text-black/20 cursor-not-allowed' : 'bg-[#014B28] text-white hover:bg-[#01351c]'
                  }`}
                  style={{ fontFamily: 'var(--font-bricolage), serif' }}
                >
                  {isButtonDisabled
                    ? hasColors && hasSizes
                      ? 'SELECCIONA COLOR Y TALLA'
                      : hasColors
                        ? 'SELECCIONA COLOR'
                        : hasSizes
                          ? 'SELECCIONA TALLA'
                          : 'PEDIR POR WHATSAPP'
                    : 'PEDIR POR WHATSAPP'}
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
