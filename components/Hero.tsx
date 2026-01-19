'use client';

import Isotipo from './Isotipo';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background pattern */}
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

      {/* Isotipo decorativo gigante de fondo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Isotipo size={600} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-12">
          {/* Isotipo principal (pato) */}
          <div className="flex justify-center">
            <Isotipo size={180} className="mb-8" />
          </div>
          
          <h1 
            className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold"
            style={{
              letterSpacing: '0.15em',
              fontFamily: 'var(--font-bricolage), serif',
            }}
          >
            Pato CLUB
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Streetwear de lujo para los que no siguen tendencias.
            <br />
            Crean las suyas.
          </p>

          <div className="pt-8">
            <button
              onClick={() => {
                const productsSection = document.getElementById('products');
                productsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-3 bg-bronze text-white px-10 py-5 hover:bg-gold hover:text-black transition-all duration-300 shadow-2xl hover:shadow-bronze/50 font-bold tracking-widest text-sm"
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

        {/* Scroll indicator con color bronce */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-bronze/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-bronze rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
