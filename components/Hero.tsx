'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

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
          className="object-cover hero-image-overlay"
          priority
          fetchPriority="high"
          unoptimized={true}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-12">
          <h1 className="hero-title text-7xl md:text-8xl lg:text-9xl font-bold">
            Pato CLUB
          </h1>

          <p className="hero-subtitle text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto leading-relaxed tracking-widest uppercase">
            Ser Pato no necesita explicación
          </p>

          <div className="pt-8">
            <button
              onClick={() => {
                const firstSection = document.getElementById('valentine-products');
                firstSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ backgroundColor: '#B07D05', color: '#000000', fontFamily: 'var(--font-bricolage), serif' }}
              className="group inline-flex items-center gap-3 px-10 py-5 transition-all duration-300 shadow-2xl font-bold tracking-widest text-sm"
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#A27852'; e.currentTarget.style.color = '#FFFFFF'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#B07D05'; e.currentTarget.style.color = '#000000'; }}
            >
              <span>EXPLORAR COLECCIÓN</span>
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
      </div>
    </section>
  );
}
