'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import CollectionSection from '@/components/CollectionSection';
import Footer from '@/components/Footer';
import ProductModal from '@/components/ProductModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';
import LinenEditionBanner from '@/components/LinenEditionBanner';
import { products } from '@/data/products';
import { Product } from '@/types/product';

// Carga dinámica sin SSR para componentes con Framer Motion useScroll
// Esto elimina completamente el hydration mismatch porque estos componentes
// NUNCA se renderizan en el servidor — solo en el cliente.
const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: false,
  loading: () => (
    <section className="relative w-full h-[100vh] bg-black" />
  ),
});



const BasicsBanner = dynamic(() => import('@/components/BasicsBanner'), {
  ssr: false,
  loading: () => (
    <section className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden bg-black" />
  ),
});

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

  const linenEsentialProducts = products.filter(p => p.category === 'Esential Edition');
  const linenpremiumProducts = products.filter(p => p.category === 'Premium Edition');
  const valentineProducts = products.filter(p => p.category === 'Edición Especial');
  const basicsProducts = products.filter(p => p.category === 'Basics');
  const hoodiesProducts = products.filter(p => p.category === 'Hoodies');
  const pantsProducts = products.filter(p => p.category === 'Pantalón Deportivo');
  const tshirtProducts = products.filter(p => p.category === 'Camiseta');
  const allProducts = products;

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#ECE0C8' }}>
      <Navbar />
      <div className="h-20" />


      <Hero />

      

      {/* Sección Linen Edition */}
      <LinenEditionBanner />
      {/* Edición Premium */}
      <CollectionSection
        id="linen-edition-premium"
        title="Edición Premium"
        products={linenpremiumProducts}
        onProductClick={handleProductClick}
        backgroundColor="cream-soft"
        titleColor="#2B5B2B"
      />
      {/* Edición Básico */}
      <CollectionSection
        id="linen-edition-basico"
        title="Edición Esencial"
        products={linenEsentialProducts}
        onProductClick={handleProductClick}
        backgroundColor="cream-soft"
        titleColor="#2B5B2B"
      />

      <BasicsBanner />
      {/* Sección Love is Red (después de Hero) */}
      {valentineProducts.length > 0 && (
        <CollectionSection
          id="valentine-products"
          title="Love is Red"
          description="Edición especial para celebrar con estilo."
          products={valentineProducts}
          isValentine={true}
          onProductClick={handleProductClick}
        />
      )}

      {basicsProducts.length > 0 && (
        <CollectionSection
          id="basics-section"
          title="Básicos"
          description="Esenciales atemporales."
          products={basicsProducts}
          onProductClick={handleProductClick}
        />
      )}

      {hoodiesProducts.length > 0 && (
        <CollectionSection
          id="hoodies-section"
          title="Hoodies"
          description="Comodidad y estilo."
          products={hoodiesProducts}
          onProductClick={handleProductClick}
          backgroundColor="cream-soft"
        />
      )}

      {pantsProducts.length > 0 && (
        <CollectionSection
          id="pants-section"
          title="Pantalón Deportivo"
          description="Confort y movimiento."
          products={pantsProducts}
          onProductClick={handleProductClick}
          backgroundColor="cream"
        />
      )}

      {tshirtProducts.length > 0 && (
        <CollectionSection
          id="tshirts-section"
          title="Camiseta"
          description="Básicos esenciales."
          products={tshirtProducts}
          onProductClick={handleProductClick}
          backgroundColor="cream-soft"
        />
      )}

      {allProducts.length > 0 && (
        <CollectionSection
          id="all-products"
          title="Colección Completa"
          description="Todo nuestro catálogo."
          products={allProducts}
          showFilters={true}
          onProductClick={handleProductClick}
        />
      )}

      <Footer />
      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={handleCloseModal} />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}
