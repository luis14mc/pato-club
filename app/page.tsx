'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import ValentineBanner from '@/components/ValentineBanner';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Product } from '@/types/product';
import { products } from '@/data/products';

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

  return (
    <div className="min-h-screen">
      {/* Navbar importado */}
      <Navbar />

      {/* Espaciador para el navbar fijo */}
      <div className="h-20" />

      {/* Hero Section */}
      <Hero />

      {/* Products Section - Espaciado generoso (menos es más) */}
      <section id="products" className="bg-white max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-40">
        {/* Header de la Colección */}
        <div className="mb-32 text-center">
          <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-black tracking-tighter">
            Colección
          </h2>
          <p className="text-black/70 text-xl max-w-3xl mx-auto leading-relaxed">
            Cada pieza está diseñada para durar. Materiales premium,
            construcción impecable y diseño atemporal.
          </p>
        </div>

        {/* Grid de Productos con espaciado amplio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-28">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={handleProductClick}
            />
          ))}
        </div>

        {/* Espaciador inferior generoso */}
        <div className="mt-40" />
      </section>

      {/* About Section - Espaciado generoso */}
      <section id="about" className="bg-black text-white py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
            Sobre Nosotros
          </h2>
          <div className="space-y-8 text-xl text-zinc-400 leading-relaxed">
            <p>
              Pato Club nació de la necesidad de crear piezas que trasciendan
              las tendencias fugaces del streetwear convencional.
            </p>
            <p>
              Trabajamos con los mejores materiales y fabricantes para
              garantizar que cada producto no solo se vea excepcional, sino que
              dure toda una vida.
            </p>
            <p className="text-gold font-bold text-2xl mt-12">
              No seguimos tendencias. Las creamos.
            </p>
          </div>
        </div>
      </section>

      {/* Valentine's Banner */}
      <ValentineBanner />

      {/* Footer */}
      <Footer />

      {/* Product Modal con Framer Motion */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Botón Flotante de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}
