'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ValentineBanner from '@/components/ValentineBanner';
import CollectionSection from '@/components/CollectionSection';
import BasicsBanner from '@/components/BasicsBanner';
import Footer from '@/components/Footer';
import ProductModal from '@/components/ProductModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';
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

  const valentineProducts = products.filter(p => p.category === 'Edición Especial');
  const basicsProducts = products.filter(p => p.category === 'Basics');
  const hoodiesProducts = products.filter(p => p.category === 'Hoodies');
  const pantsProducts = products.filter(p => p.category === 'Pantalón Deportivo');
  const tshirtProducts = products.filter(p => p.category === 'Camiseta');
  const allProducts = products; 

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ECE0C8' }}>
      <Navbar />
      <div className="h-20" />
      <Hero />

      <ValentineBanner />
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

      <BasicsBanner />

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
