'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';
import Logo from './Logo';

export default function ValentineBanner() {
  return (
    <section className="relative bg-cream py-32 overflow-hidden border-y-2 border-gold/30">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-bronze rounded-full blur-3xl" />
      </div>

      {/* Logo decorativo de fondo */}
      <div className="absolute top-8 right-8 opacity-10">
        <Logo variant="black" size={150} />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge con Dorado #D09306 */}
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-gold/20 text-gold border-2 border-gold text-xs tracking-widest uppercase font-bold mb-8 shadow-lg">
          <Heart className="w-5 h-5 fill-gold" />
          Edición Especial
        </div>

        {/* Título con Bricolage Grotesque */}
        <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-8 tracking-tighter">
          Valentine's Edition
        </h2>

        {/* Descripción */}
        <p className="text-xl md:text-2xl text-black/70 max-w-3xl mx-auto mb-12 leading-relaxed">
          Celebra el amor con diseños únicos y atrevidos. 
          Piezas exclusivas que no siguen las reglas.
        </p>

        {/* Botón */}
        <Link
          href="#products"
          className="inline-block px-12 py-5 bg-black text-white font-bold tracking-widest text-sm hover:bg-gold hover:text-black transition-all duration-300 shadow-2xl hover:shadow-gold/50"
        >
          DESCUBRIR COLECCIÓN
        </Link>

        {/* Texto adicional */}
        <p className="mt-10 text-sm text-black/50 italic font-medium">
          Edición limitada • Mientras duren las existencias
        </p>
      </div>
    </section>
  );
}
