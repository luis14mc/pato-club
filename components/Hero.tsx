'use client';

import Image from 'next/image';
import Isotipo from './Isotipo';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background pattern rayado */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            white 2px,
            white 4px
          )`
        }} />
      </div>

      {/* Logo decorativo gigante de fondo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Image
          src="/Pato_oficial_blanco.png"
          alt="Pato Club Background"
          width={600}
          height={600}
          className="object-contain"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-12">
          <h1 
            className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold"
            style={{
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-bricolage), serif',
            }}
          >
            Pato CLUB
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Ser Pato no necesita explicación
          </p>

          <div className="pt-8">
            <button
              onClick={() => {
                const firstSection = document.getElementById('valentine-products');
                firstSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-3 px-10 py-5 transition-all duration-300 shadow-2xl font-bold tracking-widest text-sm"
              style={{
                backgroundColor: '#D09306',
                color: '#000000',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#A27852';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#D09306';
                e.currentTarget.style.color = '#000000';
              }}
            >
              <span>
                EXPLORAR COLECCIÓN
              </span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll indicator con color dorado */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 rounded-full flex justify-center pt-2" style={{ borderColor: 'rgba(208, 147, 6, 0.5)' }}>
            <div className="w-1 h-3 rounded-full" style={{ backgroundColor: '#D09306' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
