'use client';

import { SiInstagram, SiWhatsapp } from 'react-icons/si';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ComingSoon() {
  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-between px-4 sm:px-6 py-8 sm:py-12 relative overflow-hidden"
      style={{ backgroundColor: '#ECE0C8' }}
    >
      {/* Logo decorativo de fondo (sutil) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none">
        <Image
          src="/isotipo.png"
          alt="Pato Club Background"
          width={600}
          height={600}
          className="object-contain"
          priority
        />
      </div>

      {/* Contenido Principal Centrado */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 flex-1 flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 md:space-y-10 max-w-5xl mx-auto w-full"
      >
        {/* Logo Principal */}
        <div className="flex justify-center">
          <div className="relative w-[200px] h-[80px] sm:w-[240px] sm:h-[100px] md:w-[280px] md:h-[120px]">
            <Image
              src="/PatoTMblack.png"
              alt="Pato Club"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Título Principal */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
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
            className="w-20 sm:w-24 h-[2px]"
            style={{ backgroundColor: '#000000' }}
          />
        </div>

        {/* Subtítulo */}
        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-4"
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
          className="flex items-center justify-center gap-6 sm:gap-8"
        >
          <a
            href="https://www.instagram.com/patoclubhn"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-300 hover:opacity-60"
            aria-label="Instagram"
          >
            <SiInstagram
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              style={{ color: '#000000' }}
            />
          </a>

          <a
            href="https://wa.me/50496309525?text=Hola%20Pato%20Club%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20colecci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-300 hover:opacity-60"
            aria-label="WhatsApp"
          >
            <SiWhatsapp
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              style={{ color: '#000000' }}
            />
          </a>
        </motion.div>

        {/* Tag de Coming Soon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span
            className="inline-block px-5 py-2 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold border"
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
        className="relative z-10 text-center w-full pb-2"
      >
        <p
          className="text-[10px] sm:text-xs"
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
