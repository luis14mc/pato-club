'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home } from 'lucide-react';

export default function NotFound() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ backgroundColor: '#ECE0C8' }}
    >
      <div className="max-w-2xl w-full text-center space-y-12">
        {/* Logo Principal */}
        <div className="flex justify-center">
          <div className="relative w-40 h-16 md:w-48 md:h-20">
            <Image
              src="/PatoTMblack.png"
              alt="Pato Club"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Mensaje 404 */}
        <div className="space-y-8">
          <h1 
            className="text-8xl md:text-9xl font-bold tracking-tight"
            style={{
              color: '#000000',
              fontFamily: 'var(--font-bricolage), serif',
            }}
          >
            404
          </h1>

          {/* Logo Pato Anteojos */}
          <div className="flex justify-center py-6">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <Image
                src="/pato_anteojos.png"
                alt="Pato perdido"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <p 
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{
              color: '#000000',
              fontFamily: 'var(--font-bricolage), serif',
            }}
          >
            Parece que te has salido del club.
          </p>
          <p 
            className="text-lg max-w-md mx-auto leading-relaxed"
            style={{
              color: '#000000',
              opacity: 0.7,
              fontFamily: 'var(--font-work-sans), sans-serif',
            }}
          >
            La página que buscas no existe o ha sido movida. Pero no te preocupes, 
            siempre puedes volver a casa.
          </p>
        </div>

        {/* Botón de regreso - DORADO */}
        <div className="pt-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{
              backgroundColor: isHovered ? '#000000' : '#D09306',
              color: isHovered ? '#FFFFFF' : '#000000',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Home className="w-5 h-5" strokeWidth={2} />
            <span 
              className="tracking-widest text-sm font-bold"
              style={{ fontFamily: 'var(--font-bricolage), serif' }}
            >
              VOLVER AL INICIO
            </span>
          </Link>
        </div>

        {/* Decoración minimalista */}
        <div className="pt-12 flex items-center justify-center gap-4 opacity-30">
          <div className="w-16 h-[2px] bg-bronze" />
          <div className="w-2 h-2 bg-bronze rounded-full" />
          <div className="w-16 h-[2px] bg-bronze" />
        </div>
      </div>
    </div>
  );
}
