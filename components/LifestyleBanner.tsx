'use client';

interface LifestyleBannerProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function LifestyleBanner({
  title,
  subtitle,
  buttonText,
  onButtonClick,
}: LifestyleBannerProps) {
  return (
    <section 
      className="relative w-full py-32 md:py-40 lg:py-48"
      style={{ backgroundColor: '#000000' }}  // Negro para contraste
    >
      {/* Contenido minimalista */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4 sm:px-6">
        <div className="max-w-3xl space-y-8 md:space-y-10">
          {/* Título elegante */}
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            style={{
              letterSpacing: '0.1em',
              color: '#FFFFFF',
              fontFamily: 'var(--font-bricolage), serif',
            }}
          >
            {title}
          </h2>
          
          {/* Subtítulo minimalista */}
          <p 
            className="text-base sm:text-lg md:text-xl leading-relaxed font-normal"
            style={{
              color: '#FFFFFF',
              fontFamily: 'var(--font-work-sans), sans-serif',
              opacity: 0.7,
            }}
          >
            {subtitle}
          </p>
          
          {buttonText && onButtonClick && (
            <div className="pt-8">
              <button
                onClick={onButtonClick}
                className="inline-flex items-center gap-3 px-10 py-4 font-bold tracking-widest text-sm transition-all duration-300"
                style={{ 
                  minHeight: '44px',
                  border: '2px solid #FFFFFF',
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-bricolage), serif',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#000000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                {buttonText}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
