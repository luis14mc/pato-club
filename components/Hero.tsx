'use client';

import Image from 'next/image';
import Isotipo from './Isotipo';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Efecto Parallax: La imagen se mueve hacia abajo mientras hacemos scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[100vh] flex items-center justify-center bg-black text-white overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 z-0 h-[120%] w-full"
        style={{ y }}
      >
        <Image
          src="/hero.webp"
          alt="Pato Club Streetwear Honduras"
          fill
          className="object-cover"
          style={{ 
            opacity: 0.5,
            imageRendering: '-webkit-optimize-contrast'
          }}
          priority
          fetchPriority="high"
          unoptimized={true}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-12">
          <h1 
            className="font-serif text-7xl md:text-8xl lg:text-9xl font-bold"
            style={{
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-bricolage), serif',
            }}
          >
            Pato CLUB
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto leading-relaxed tracking-widest uppercase"
            style={{
              fontFamily: 'var(--font-bricolage), serif',
            }}
          >
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
                backgroundColor: '#B07D05',
                color: '#000000',
                fontFamily: 'var(--font-bricolage), serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#A27852';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#B07D05';
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

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 rounded-full flex justify-center pt-2" style={{ borderColor: 'rgba(176, 125, 5, 0.5)' }}>
            <div className="w-1 h-3 rounded-full" style={{ backgroundColor: '#B07D05' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
