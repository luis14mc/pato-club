'use client';

import { Instagram } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ComingSoon() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden"
      style={{ backgroundColor: '#ECE0C8' }}
    >
      {/* Logo decorativo de fondo (muy sutil) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <Image
          src="/pato oficial.png"
          alt="Pato Club Background"
          width={800}
          height={800}
          className="object-contain"
          priority
        />
      </div>

      {/* Contenido Principal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center space-y-12 max-w-4xl mx-auto"
      >
        {/* Logo Principal */}
        <div className="flex justify-center mb-12">
          <Image
            src="/Pato TM black.png"
            alt="Pato Club"
            width={200}
            height={80}
            className="object-contain"
            priority
          />
        </div>

        {/* Título Principal */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
          style={{
            color: '#000000',
            fontFamily: 'var(--font-bricolage), serif',
            letterSpacing: '0.05em',
          }}
        >
          EL LUJO ESTÁ LLEGANDO
          <br />
          A HONDURAS
        </h1>

        {/* Línea decorativa */}
        <div className="flex justify-center">
          <div
            className="w-24 h-[2px]"
            style={{ backgroundColor: '#000000' }}
          />
        </div>

        {/* Subtítulo */}
        <p
          className="text-lg sm:text-xl md:text-2xl leading-relaxed"
          style={{
            color: '#000000',
            fontFamily: 'var(--font-work-sans), sans-serif',
            opacity: 0.8,
          }}
        >
          Valentine's Edition & Core Collection.
          <br />
          <span className="italic">Muy pronto.</span>
        </p>

        {/* Iconos de Redes Sociales */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-16 flex items-center justify-center gap-8"
        >
          <a
            href="https://www.instagram.com/patoclub"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-300 hover:opacity-60"
            aria-label="Instagram"
          >
            <Instagram
              className="w-7 h-7 sm:w-8 sm:h-8"
              style={{ color: '#000000' }}
              strokeWidth={1.5}
            />
          </a>

          <a
            href="https://www.tiktok.com/@patoclub"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-300 hover:opacity-60"
            aria-label="TikTok"
          >
            <SiTiktok
              className="w-7 h-7 sm:w-8 sm:h-8"
              style={{ color: '#000000' }}
            />
          </a>
        </motion.div>

        {/* Tag de Coming Soon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-8"
        >
          <span
            className="inline-block px-6 py-2 text-xs tracking-[0.3em] uppercase font-bold border"
            style={{
              color: '#000000',
              borderColor: '#000000',
              fontFamily: 'var(--font-bricolage), serif',
            }}
          >
            Coming Soon
          </span>
        </motion.div>
      </motion.div>

      {/* Footer Legal Minimalista */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 text-center"
      >
        <p
          className="text-xs"
          style={{
            color: '#000000',
            fontFamily: 'var(--font-work-sans), sans-serif',
            opacity: 0.4,
          }}
        >
          © 2026 Pato Club. Honduras.
        </p>
      </motion.div>
    </div>
  );
}
