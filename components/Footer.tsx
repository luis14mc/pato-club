'use client';

import Image from 'next/image';
import { SiInstagram, SiTiktok, SiFacebook } from 'react-icons/si';

export default function Footer() {
  return (
    <footer 
      className="py-12 md:py-16"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          
          {/* Logo Pato Club en Blanco */}
          <div className="relative w-32 h-12 md:w-40 md:h-16">
            <Image
              src="/PatoTMwhite.png"
              alt="Pato Club"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Redes Sociales - Iconos Minimalistas */}
          <div className="space-y-4">
            <p 
              className="text-xs md:text-sm tracking-wider uppercase text-center font-semibold"
              style={{
                color: '#CCCCCC',
                fontFamily: 'var(--font-bricolage), serif',
              }}
            >
              Síguenos en nuestras redes sociales
            </p>
            
            <div className="flex items-center justify-center gap-8">
              <a
                href="https://www.instagram.com/patoclubhn?igsh=MThldzJ3b3I2MzZpZQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <SiInstagram 
                  className="w-6 h-6 md:w-7 md:h-7"
                  style={{ color: '#FFFFFF' }}
                />
              </a>
              
              <a
                href="https://www.tiktok.com/@patoclubhn?_r=1&_t=ZM-93DCHkp2gqh"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-110"
                aria-label="TikTok"
              >
                <SiTiktok 
                  className="w-6 h-6 md:w-7 md:h-7"
                  style={{ color: '#FFFFFF' }}
                />
              </a>

              <a
                href="https://www.facebook.com/share/17oate4viE/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <SiFacebook 
                  className="w-6 h-6 md:w-7 md:h-7"
                  style={{ color: '#FFFFFF' }}
                />
              </a>
            </div>
          </div>

          {/* Copyright - Leyenda Minimalista */}
          <p 
            className="text-xs md:text-sm font-light"
            style={{
              color: '#CCCCCC',
              fontFamily: 'var(--font-work-sans), sans-serif',
              letterSpacing: '0.05em',
            }}
          >
            © 2026 Pato Club - Honduras
          </p>
        </div>
      </div>
    </footer>
  );
}
