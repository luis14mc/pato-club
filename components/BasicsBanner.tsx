'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function BasicsBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Efecto Parallax idéntico al de Valentine
  const y = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden bg-black flex items-center justify-center"
    >
      <motion.div 
        className="absolute inset-0 z-0 h-[120%] w-full"
        style={{ y }}
      >
        <Image
          src="/bgbasicos.webp"
          alt="Pato Club Basics"
          fill
          className="object-cover"
          style={{ 
            imageRendering: '-webkit-optimize-contrast'
          }}
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      <div className="relative z-10 w-full h-full flex items-center justify-center text-center px-4 sm:px-6">
        <div className="max-w-4xl space-y-8 md:space-y-10">
          <h2 
            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight text-white"
            style={{
              letterSpacing: '0.05em',
              fontFamily: 'var(--font-bricolage), serif',
            }}
          >
            Hecho con Intención
          </h2>
          
          <p 
            className="text-sm sm:text-sm md:text-base leading-relaxed font-normal text-white uppercase tracking-[0.3em]"
            style={{
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
              opacity: 0.9,
            }}
          >
            Sin etiquetas - Sin Disculpas - Sin Explicaciones
          </p>
        </div>
      </div>
    </section>
  );
}
