'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ValentineBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Efecto Parallax: Aumentamos el rango de movimiento para que sea más notable
  const y = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Background Image con Parallax */}
      <motion.div 
        className="absolute inset-0 z-0 h-[120%] w-full"
        style={{ y }}
      >
        <Image
          src="/bgvalentine.webp"
          alt="Valentine's Special Edition"
          fill
          className="object-cover"
          style={{ 
            imageRendering: '-webkit-optimize-contrast'
          }}
          unoptimized={true}
        />
        {/* Overlay sutil */}
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      {/* Contenido del Banner */}
      <div className="relative z-10 w-full h-full flex flex-col items-center pt-8 px-4">
        <div className="text-center space-y-2">
          <h2 
            className="text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.5em] uppercase text-white opacity-90"
            style={{ fontFamily: 'var(--font-bricolage), serif' }}
          >
            EDICIÓN ESPECIAL PARA CELEBRAR CON ESTILO
          </h2>
          
          <h3 
            className="text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.4em] uppercase"
            style={{ 
              color: '#D90429', // Rojo más brillante y vibrante
              fontFamily: 'var(--font-bricolage), serif',
              textShadow: '0 0-10px rgba(217, 4, 41, 0.3)' // Sutil resplandor
            }}
          >
            VALENTINE´S EDITION
          </h3>
        </div>
      </div>
    </section>
  );
}
