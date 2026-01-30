'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Determinar si un link está activo
  const isActive = (href: string) => {
    if (href.startsWith('#')) return false;
    return pathname === href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b-2 border-bronze'
          : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - IZQUIERDA EN DESKTOP, CENTRADO EN MOBILE */}
          <div className="flex-1 flex justify-start md:justify-start">
            <Link
              href="/"
              className="hover:opacity-80 transition-opacity duration-200"
            >
              <div className="relative w-[80px] h-[32px]">
                <Image
                  src="/PTMblack.png"
                  alt="Pato Club"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Menú Desktop - CENTRADO */}
          <div className="hidden md:flex flex-[2] items-center justify-center gap-8 lg:gap-10">
            <Link
              href="#valentine-products"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById('valentine-products');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm lg:text-base font-semibold tracking-wider uppercase transition-colors duration-200"
              style={{
                color: '#000000',
                fontFamily: 'var(--font-bricolage), serif',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#D09306'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#000000'}
            >
              NEW ARRIVALS
            </Link>
            
            <Link
              href="#basics-section"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById('basics-section');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm lg:text-base font-semibold tracking-wider uppercase transition-colors duration-200"
              style={{
                color: '#000000',
                fontFamily: 'var(--font-bricolage), serif',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#D09306'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#000000'}
            >
              BÁSICOS
            </Link>

            <Link
              href="#all-products"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById('all-products');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm lg:text-base font-semibold tracking-wider uppercase transition-colors duration-200"
              style={{
                color: '#000000',
                fontFamily: 'var(--font-bricolage), serif',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#D09306'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#000000'}
            >
              PRODUCTOS
            </Link>
          </div>

          {/* Espacio para mantener equilibrio en desktop o menú hamburguesa en mobile */}
          <div className="flex-1 flex items-center justify-end">
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 transition-colors duration-200"
                style={{
                  minWidth: '44px',
                  minHeight: '44px',
                }}
                aria-label="Menú"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-black" strokeWidth={2} />
                ) : (
                  <Menu className="w-6 h-6 text-black" strokeWidth={2} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - FONDO SÓLIDO GARANTIZADO */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden fixed inset-0 w-full h-full bg-[#ECE0C8] z-[9999]"
            style={{
              backgroundColor: '#ECE0C8',
              width: '100vw',
              height: '100vh',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            {/* Header del menú con botón de cierre prominente */}
            <div 
              className="flex items-center justify-between h-20 px-6 border-b-2 border-black/20"
              style={{ backgroundColor: '#ECE0C8' }}
            >
              <div className="relative w-[60px] h-[24px]">
                <Image
                  src="/PTMblack.png"
                  alt="Pato Club"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <button
                onClick={closeMenu}
                className="p-3 bg-black text-white hover:bg-gold hover:text-black rounded-full transition-all duration-200 shadow-lg"
                aria-label="Cerrar menú"
              >
                <X className="w-6 h-6" strokeWidth={3} />
              </button>
            </div>

            {/* Contenido del menú con fondo garantizado */}
            <nav 
              className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] space-y-8 px-6 bg-[#ECE0C8]"
              style={{ backgroundColor: '#ECE0C8' }}
            >
              {/* Logo Superior - PatoTM */}
              <div className="mb-6">
                <div className="relative w-[180px] h-[70px] opacity-90">
                  <Image
                    src="/PatoTMblack.png"
                    alt="Pato Club"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Enlaces de navegación - Simplificados */}
              <Link
                href="#valentine-products"
                onClick={(e) => {
                  e.preventDefault();
                  closeMenu();
                  const section = document.getElementById('valentine-products');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-serif text-4xl md:text-5xl font-bold tracking-tighter transition-colors duration-200"
                style={{
                  color: '#000000',
                  fontFamily: 'var(--font-bricolage), serif',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#D09306'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#000000'}
              >
                NEW ARRIVALS
              </Link>
              
              <Link
                href="#basics-section"
                onClick={(e) => {
                  e.preventDefault();
                  closeMenu();
                  const section = document.getElementById('basics-section');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-serif text-4xl md:text-5xl font-bold tracking-tighter transition-colors duration-200"
                style={{
                  color: '#000000',
                  fontFamily: 'var(--font-bricolage), serif',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#D09306'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#000000'}
              >
                BÁSICOS
              </Link>

              <Link
                href="#all-products"
                onClick={(e) => {
                  e.preventDefault();
                  closeMenu();
                  const section = document.getElementById('all-products');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-serif text-4xl md:text-5xl font-bold tracking-tighter transition-colors duration-200"
                style={{
                  color: '#000000',
                  fontFamily: 'var(--font-bricolage), serif',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#D09306'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#000000'}
              >
                PRODUCTOS
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
