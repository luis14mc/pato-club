'use client';

import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer 
      className="py-20 md:py-24 lg:py-28"
      style={{ backgroundColor: '#ECE0C8' }}  // Crema oficial
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid de 2 columnas minimalista */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 mb-20">
          {/* Columna 1: Logo y Frase */}
          <div className="space-y-6 text-center md:text-left">
            <Logo variant="black" size={50} />
            <p 
              className="text-sm font-medium italic"
              style={{ 
                color: '#000000',
                fontFamily: 'var(--font-bricolage), serif',
              }}
            >
              Hecho con intención.
            </p>
          </div>

          {/* Columna 2: Redes Sociales */}
          <div className="space-y-6 text-center md:text-left">
            <h3 
              className="text-sm tracking-[0.3em] uppercase font-bold"
              style={{
                color: '#000000',
                fontFamily: 'var(--font-bricolage), serif',
              }}
            >
              Conecta con Nosotros
            </h3>
            
            {/* Iconos limpios - Solo glyphs sin fondos */}
            <div className="flex items-center justify-center md:justify-start gap-6">
              <a
                href="https://www.tiktok.com/@patoclub"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-200 hover:opacity-60"
                aria-label="TikTok"
              >
                <SiTiktok 
                  className="w-5 h-5"
                  style={{ color: '#000000' }}
                />
              </a>
              
              <a
                href="https://www.instagram.com/patoclub"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-200 hover:opacity-60"
                aria-label="Instagram"
              >
                <Instagram 
                  className="w-5 h-5"
                  style={{ color: '#000000' }}
                  strokeWidth={1.5}
                />
              </a>
              
              <a
                href="https://www.facebook.com/patoclub"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-200 hover:opacity-60"
                aria-label="Facebook"
              >
                <Facebook 
                  className="w-5 h-5"
                  style={{ color: '#000000' }}
                  strokeWidth={1.5}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Enlaces de información */}
        <div className="border-t border-black/10 pt-12 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-center md:text-left">
            <Link 
              href="#"
              className="transition-opacity duration-200 hover:opacity-60"
              style={{
                color: '#000000',
                fontFamily: 'var(--font-work-sans), sans-serif',
              }}
            >
              Envíos y Devoluciones
            </Link>
            <Link 
              href="#"
              className="transition-opacity duration-200 hover:opacity-60"
              style={{
                color: '#000000',
                fontFamily: 'var(--font-work-sans), sans-serif',
              }}
            >
              Guía de Tallas
            </Link>
            <Link 
              href="#"
              className="transition-opacity duration-200 hover:opacity-60"
              style={{
                color: '#000000',
                fontFamily: 'var(--font-work-sans), sans-serif',
              }}
            >
              Cuidado de Productos
            </Link>
            <Link 
              href="#"
              className="transition-opacity duration-200 hover:opacity-60"
              style={{
                color: '#000000',
                fontFamily: 'var(--font-work-sans), sans-serif',
              }}
            >
              Términos y Condiciones
            </Link>
          </div>
        </div>

        {/* Copyright y Ubicación - Texto legal minimalista */}
        <div className="border-t border-black/10 pt-12 text-center space-y-3">
          <p 
            className="text-xs font-normal"
            style={{
              color: '#000000',
              fontFamily: 'var(--font-work-sans), sans-serif',
              opacity: 0.5,
            }}
          >
            © 2026 Pato Club. Todos los derechos reservados.
          </p>
          <p 
            className="text-[10px] font-light tracking-wider uppercase"
            style={{
              color: '#000000',
              fontFamily: 'var(--font-work-sans), sans-serif',
              opacity: 0.4,
            }}
          >
            Honduras
          </p>
        </div>
      </div>
    </footer>
  );
}
