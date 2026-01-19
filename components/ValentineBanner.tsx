'use client';

export default function ValentineBanner() {
  return (
    <section 
      className="relative py-20 sm:py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#ECE0C8' }}  // Crema - minimalismo
    >
      {/* Contenedor con padding móvil */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-6 sm:space-y-8 text-center">
        {/* Badge minimalista - Borde fino */}
        <span 
          className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm tracking-[0.3em] uppercase font-bold"
          style={{
            border: '1px solid #000000',  // Borde negro fino
            backgroundColor: 'transparent',
            color: '#000000',
            fontFamily: 'var(--font-bricolage), serif',
          }}
        >
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          Valentine's Edition
        </span>

        {/* Título minimalista - Negro sobre crema */}
        <h2 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          style={{
            letterSpacing: '0.05em',
            color: '#000000',
            fontFamily: 'var(--font-bricolage), serif',
          }}
        >
          Love is Red
        </h2>

        {/* Descripción limpia */}
        <p 
          className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal"
          style={{ 
            color: '#000000',
            fontFamily: 'var(--font-work-sans), sans-serif',
            opacity: 0.8,
          }}
        >
          Edición especial para celebrar con estilo.
        </p>

        {/* Botón minimalista - Outline */}
        <div className="pt-6 sm:pt-8">
          <button
            onClick={() => {
              const productsSection = document.getElementById('valentine-products');
              productsSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 py-3 sm:py-4 font-bold tracking-widest text-xs sm:text-sm transition-all duration-300"
            style={{ 
              minHeight: '44px',
              border: '2px solid #000000',
              backgroundColor: 'transparent',
              color: '#000000',
              fontFamily: 'var(--font-bricolage), serif',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#000000';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#000000';
            }}
          >
            <span>VER COLECCIÓN</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
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
    </section>
  );
}
