'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import Logo from './Logo';

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
          {/* Enlaces de navegación - Desktop (Izquierda) */}
          <div className="hidden md:flex items-center gap-8 flex-1">
            <Link
              href="/new-arrivals"
              className={`text-sm tracking-wider transition-colors duration-200 font-semibold ${
                isActive('/new-arrivals')
                  ? 'text-gold'
                  : 'text-black/70 hover:text-bronze'
              }`}
            >
              NEW ARRIVALS
            </Link>
            <Link
              href="/basics"
              className={`text-sm tracking-wider transition-colors duration-200 font-semibold ${
                isActive('/basics')
                  ? 'text-gold'
                  : 'text-black/70 hover:text-bronze'
              }`}
            >
              BASICS
            </Link>
          </div>

          {/* Logo Central */}
          <div className="flex-1 md:flex-initial flex justify-start md:justify-center">
            <Link
              href="/"
              className="hover:opacity-80 transition-opacity duration-200"
            >
              <Logo variant="black" size={50} />
            </Link>
          </div>

          {/* Iconos (Derecha) - Desktop */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-end">
            <button
              className="p-2 hover:bg-cream rounded-full transition-colors duration-200"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5 text-black" strokeWidth={1.5} />
            </button>
            <button
              className="p-2 hover:bg-cream rounded-full transition-colors duration-200 relative"
              aria-label="Carrito"
            >
              <ShoppingBag className="w-5 h-5 text-black" strokeWidth={1.5} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-forest rounded-full" />
            </button>
          </div>

          {/* Iconos Mobile (Derecha) */}
          <div className="flex md:hidden items-center gap-4">
            <button
              className="p-2 hover:bg-cream rounded-full transition-colors duration-200"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5 text-black" strokeWidth={1.5} />
            </button>
            <button
              className="p-2 hover:bg-cream rounded-full transition-colors duration-200 relative"
              aria-label="Carrito"
            >
              <ShoppingBag className="w-5 h-5 text-black" strokeWidth={1.5} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-forest rounded-full" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-cream rounded-full transition-colors duration-200"
              aria-label="Menú"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-black" strokeWidth={2} />
              ) : (
                <Menu className="w-6 h-6 text-black" strokeWidth={1.5} />
              )}
            </button>
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
              <Logo variant="black" size={40} />
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
              {/* Isotipo Superior - MÁS GRANDE */}
              <div className="mb-6">
                <Logo variant="black" size={100} className="opacity-90" />
              </div>

              {/* Enlaces principales - TEXTO MÁS GRANDE Y IMPONENTE */}
              <Link
                href="/new-arrivals"
                onClick={closeMenu}
                className={`font-serif text-4xl md:text-5xl font-bold tracking-tighter transition-colors duration-200 ${
                  isActive('/new-arrivals')
                    ? 'text-gold'
                    : 'text-black hover:text-gold'
                }`}
              >
                NEW ARRIVALS
              </Link>
              
              <Link
                href="/basics"
                onClick={closeMenu}
                className={`font-serif text-4xl md:text-5xl font-bold tracking-tighter transition-colors duration-200 ${
                  isActive('/basics')
                    ? 'text-gold'
                    : 'text-black hover:text-gold'
                }`}
              >
                BASICS
              </Link>

              {/* Línea divisoria con bronce */}
              <div className="w-40 h-[3px] bg-bronze/50 my-4" />

              {/* Enlaces secundarios */}
              <Link
                href="#products"
                onClick={closeMenu}
                className="text-xl tracking-wide text-black/80 hover:text-gold transition-colors duration-200 font-semibold"
              >
                Productos
              </Link>
              <Link
                href="#about"
                onClick={closeMenu}
                className="text-xl tracking-wide text-black/80 hover:text-gold transition-colors duration-200 font-semibold"
              >
                Nosotros
              </Link>
              <Link
                href="#contact"
                onClick={closeMenu}
                className="text-xl tracking-wide text-black/80 hover:text-gold transition-colors duration-200 font-semibold"
              >
                Contacto
              </Link>

              {/* Footer del menú */}
              <div className="mt-8 text-center space-y-3 pb-8">
                <p className="text-xs tracking-widest text-black/60 uppercase font-bold">
                  Síguenos
                </p>
                <p className="text-base text-black font-bold">
                  @patoclub
                </p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
