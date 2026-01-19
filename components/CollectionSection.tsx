import { Product } from '@/types/product';
import ProductCard from './ProductCard';

interface CollectionSectionProps {
  id?: string;
  title: string;
  description?: string;
  products: Product[];
  isValentine?: boolean;
  onProductClick: (product: Product) => void;
}

export default function CollectionSection({
  id,
  title,
  description,
  products,
  isValentine = false,
  onProductClick,
}: CollectionSectionProps) {
  return (
    <section 
      id={id} 
      className="py-20 sm:py-24 md:py-32 lg:py-40" 
      style={{ backgroundColor: '#ECE0C8' }}  // Crema siempre
    >
      {/* Contenedor CENTRADO con mucho spacing */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header minimalista con borde Valentine's si aplica */}
        <div 
          className="mb-16 sm:mb-20 md:mb-24 text-center pb-8"
          style={isValentine ? { 
            borderBottom: '1px solid #000000',
            marginBottom: '4rem'
          } : {}}
        >
          {isValentine && (
            <div className="mb-6">
              <span 
                className="inline-block px-4 py-1.5 text-xs tracking-[0.3em] uppercase font-semibold"
                style={{
                  border: '1px solid #000000',
                  color: '#000000',
                  fontFamily: 'var(--font-bricolage), serif',
                }}
              >
                Valentine's Edition
              </span>
            </div>
          )}
          
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8"
            style={{ 
              letterSpacing: '0.05em',
              color: '#000000',
              fontFamily: 'var(--font-bricolage), serif',
            }}
          >
            {title}
          </h2>
          
          {description && (
            <p 
              className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal px-4"
              style={{ 
                color: '#000000',
                fontFamily: 'var(--font-work-sans), sans-serif',
                opacity: 0.7,
              }}
            >
              {description}
            </p>
          )}
        </div>

        {/* Grid limpio con mucho spacing - productos protagonistas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={onProductClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
