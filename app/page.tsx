'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ValentineBanner from '@/components/ValentineBanner';
import CollectionSection from '@/components/CollectionSection';
import LifestyleBanner from '@/components/LifestyleBanner';
import Footer from '@/components/Footer';
import ProductModal from '@/components/ProductModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import { products } from '@/data/products';
import { Product } from '@/types/product';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  // Filtrar productos
  const valentineProducts = products.filter(p => p.category === 'Edición Especial');
  const basicsProducts = products.filter(p => p.category === 'Basics');
  const hoodiesProducts = products.filter(p => p.category === 'Hoodies');
  const allOtherProducts = products.filter(
    p => !['Edición Especial', 'Basics', 'Hoodies'].includes(p.category)
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ECE0C8' }}>
      <Navbar />
      <div className="h-20" />
      <Hero />

      {/* Valentine's - Minimalista con borde sutil */}
      <ValentineBanner />
      
      {valentineProducts.length > 0 && (
        <CollectionSection
          id="valentine-products"
          title="Edición Especial"
          description="Piezas únicas para celebrar con estilo."
          products={valentineProducts}
          isValentine={true}
          onProductClick={handleProductClick}
        />
      )}

      {/* Lifestyle - Contraste negro */}
      <LifestyleBanner
        title="Hecho con Intención"
        subtitle="Streetwear que trasciende tendencias."
        buttonText="EXPLORAR"
        onButtonClick={() => {
          const basicsSection = document.getElementById('basics-section');
          basicsSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Resto de colecciones - Todo crema */}
      {basicsProducts.length > 0 && (
        <CollectionSection
          id="basics-section"
          title="Basics"
          description="Esenciales atemporales."
          products={basicsProducts}
          onProductClick={handleProductClick}
        />
      )}

      {hoodiesProducts.length > 0 && (
        <CollectionSection
          title="Hoodies"
          description="Comodidad y estilo."
          products={hoodiesProducts}
          onProductClick={handleProductClick}
        />
      )}

      {allOtherProducts.length > 0 && (
        <CollectionSection
          title="Colección Completa"
          description="Todo nuestro catálogo."
          products={allOtherProducts}
          onProductClick={handleProductClick}
        />
      )}

      <Footer />
      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={handleCloseModal} />
      <WhatsAppButton />
    </div>
  );
}
