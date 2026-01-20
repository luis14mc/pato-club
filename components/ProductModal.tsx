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

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [tallaSeleccionada, setTallaSeleccionada] = useState<string>('');

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
    }
  }, [product]);

  if (!product) return null;

  // Construir mensaje de WhatsApp
  const handleComprar = () => {
    if (!tallaSeleccionada) {
      alert('Por favor selecciona una talla');
      return;
    }

    const mensaje = `Hola Pato Club, me interesa la *${product.name}* en talla *${tallaSeleccionada}*. ¿Tienen disponibilidad?`;
    
    const whatsappUrl = `https://wa.me/50496309525?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Premium */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[110] bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container - MOBILE FIRST - Z-INDEX SUPERIOR AL NAVBAR */}
          <div className="fixed inset-0 z-[120] flex items-end md:items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full md:max-w-6xl md:mx-4 pointer-events-auto overflow-hidden md:rounded-t-lg"
              style={{
                backgroundColor: '#FAF6F1', // Crema suave
                maxHeight: '95vh',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header con Botón de Cierre - ZONA SEGURA CON PADDING */}
              <div 
                className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 md:px-6 md:py-4 pt-6 md:pt-4"
                style={{
                  backgroundColor: '#FAF6F1',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                }}
              >
                <h3 
                  className="text-xs tracking-[0.2em] uppercase font-bold"
                  style={{
                    color: '#000000',
                    fontFamily: 'var(--font-bricolage), serif',
                  }}
                >
                  VISTA RÁPIDA
                </h3>
                
                {/* Botón X - ÁREA TÁCTIL 44x44px - TOP-6 RIGHT-6 */}
                <button
                  onClick={onClose}
                  className="flex items-center justify-center transition-all duration-200 -mr-2"
                  style={{
                    minWidth: '44px',
                    minHeight: '44px',
                    color: '#000000',
                  }}
                  aria-label="Cerrar modal"
                >
                  <X className="w-7 h-7" strokeWidth={2.5} />
                </button>
              </div>

              {/* Contenido con Scroll */}
              <div className="overflow-y-auto" style={{ maxHeight: 'calc(95vh - 72px)' }}>

                {/* Layout RESPONSIVE - Columna única en mobile, dos en desktop */}
                <div className="flex flex-col md:grid md:grid-cols-2">
                  {/* Columna Imagen - AJUSTADA PARA MOBILE */}
                  <div className="relative h-[40vh] sm:h-[50vh] md:h-auto md:min-h-[600px]" style={{ backgroundColor: '#FFFFFF' }}>
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
                  <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col" style={{ backgroundColor: '#FAF6F1' }}>
                  {/* Header del Producto */}
                  <div className="mb-6">
                    <p 
                      className="text-[10px] sm:text-xs tracking-widest uppercase mb-2"
                      style={{
                        color: '#A27852',
                        fontFamily: 'var(--font-work-sans), sans-serif',
                      }}
                    >
                      {product.category}
                    </p>
                    <h2 
                      className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 pr-8"
                      style={{
                        color: '#000000',
                        fontFamily: 'var(--font-bricolage), serif',
                      }}
                    >
                      {product.name}
                    </h2>
                    <p 
                      className="text-xl sm:text-2xl font-semibold"
                      style={{
                        color: '#000000',
                        fontFamily: 'var(--font-bricolage), serif',
                      }}
                    >
                      L. {new Intl.NumberFormat('es-HN', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }).format(product.price)}
                    </p>
                  </div>

                  {/* Descripción - TEXTO AJUSTADO */}
                  <p 
                    className="text-sm sm:text-base leading-relaxed mb-6"
                    style={{
                      color: '#000000',
                      opacity: 0.7,
                      fontFamily: 'var(--font-work-sans), sans-serif',
                    }}
                  >
                    {product.description}
                  </p>

                  {/* Selector de Tallas - WRAP EN MOBILE */}
                  <div className="mb-6">
                    <label 
                      className="block text-xs sm:text-sm tracking-wider uppercase font-bold mb-3"
                      style={{
                        color: '#000000',
                        fontFamily: 'var(--font-bricolage), serif',
                      }}
                    >
                      Selecciona tu talla
                    </label>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {TALLAS.map((talla) => (
                        <button
                          key={talla}
                          onClick={() => setTallaSeleccionada(talla)}
                          className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 border-2"
                          style={
                            tallaSeleccionada === talla
                              ? {
                                  borderColor: '#000000',
                                  backgroundColor: '#000000',
                                  color: '#FFFFFF',
                                  fontFamily: 'var(--font-work-sans), sans-serif',
                                }
                              : {
                                  borderColor: '#D1D5DB',
                                  backgroundColor: 'transparent',
                                  color: '#000000',
                                  fontFamily: 'var(--font-work-sans), sans-serif',
                                }
                          }
                          onMouseEnter={(e) => {
                            if (tallaSeleccionada !== talla) {
                              e.currentTarget.style.borderColor = '#A27852';
                              e.currentTarget.style.color = '#A27852';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (tallaSeleccionada !== talla) {
                              e.currentTarget.style.borderColor = '#D1D5DB';
                              e.currentTarget.style.color = '#000000';
                            }
                          }}
                        >
                          {talla}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Características - COMPACTO EN MOBILE */}
                  {product.features && product.features.length > 0 && (
                    <div className="mb-6">
                      <h3 
                        className="text-xs sm:text-sm tracking-wider uppercase font-bold mb-3"
                        style={{
                          color: '#000000',
                          fontFamily: 'var(--font-bricolage), serif',
                        }}
                      >
                        Características
                      </h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" style={{ color: '#014B28' }} strokeWidth={2.5} />
                            <span 
                              className="text-xs sm:text-sm leading-tight"
                              style={{
                                color: '#000000',
                                opacity: 0.7,
                                fontFamily: 'var(--font-work-sans), sans-serif',
                              }}
                            >{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Botones de Acción - MOBILE FIRST */}
                  <div className="mt-auto pt-6 space-y-3"
                    style={{
                      backgroundColor: '#FAF6F1',
                    }}
                  >
                    <button
                      onClick={handleComprar}
                      disabled={!tallaSeleccionada}
                      style={
                        tallaSeleccionada
                          ? {
                              backgroundColor: '#014B28',
                              color: '#FFFFFF',
                              fontFamily: 'var(--font-work-sans), sans-serif',
                            }
                          : {
                              backgroundColor: '#E5E7EB',
                              color: '#9CA3AF',
                              fontFamily: 'var(--font-work-sans), sans-serif',
                            }
                      }
                      className="w-full h-14 sm:h-16 tracking-widest text-sm sm:text-base font-bold transition-all duration-300 shadow-lg"
                      onMouseEnter={(e) => {
                        if (tallaSeleccionada) {
                          e.currentTarget.style.backgroundColor = '#D09306';
                          e.currentTarget.style.color = '#000000';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (tallaSeleccionada) {
                          e.currentTarget.style.backgroundColor = '#014B28';
                          e.currentTarget.style.color = '#FFFFFF';
                        }
                      }}
                    >
                      PEDIR POR WHATSAPP
                    </button>
                    
                    {!tallaSeleccionada && (
                      <p 
                        className="text-[10px] sm:text-xs text-center font-medium"
                        style={{
                          color: '#000000',
                          opacity: 0.5,
                          fontFamily: 'var(--font-work-sans), sans-serif',
                        }}
                      >
                        ⚠️ Selecciona una talla
                      </p>
                    )}

                    {/* Botón Cerrar Adicional - SEGURIDAD MÓVIL */}
                    <button
                      onClick={onClose}
                      className="w-full h-12 sm:h-14 tracking-widest text-xs sm:text-sm font-bold transition-all duration-300 border-2"
                      style={{
                        borderColor: '#000000',
                        backgroundColor: 'transparent',
                        color: '#000000',
                        fontFamily: 'var(--font-work-sans), sans-serif',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#000000';
                        e.currentTarget.style.color = '#FAF6F1';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#000000';
                      }}
                    >
                      CERRAR
                    </button>
                  </div>
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
