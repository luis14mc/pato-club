'use client';

import { useState, useEffect } from 'react';
import { SiWhatsapp } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.getElementById('valentine-products');
      if (firstSection) {
        const rect = firstSection.getBoundingClientRect();
        // Bloqueado en el Hero: Solo mostrar cuando la primera sección llegue a la mitad superior de la pantalla
        if (rect.top <= window.innerHeight * 0.3) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificar estado inicial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const mensaje = 'Hola Pato Club, tengo una consulta sobre sus productos. ¿Podrían ayudarme?';
    const whatsappUrl = `https://wa.me/50496309525?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={handleClick}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-[100] w-14 h-14 flex items-center justify-center shadow-2xl"
          style={{
            backgroundColor: '#014B28',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(1, 75, 40, 0.4)',
          }}
          aria-label="Chatear con nosotros por WhatsApp"
        >
          <SiWhatsapp className="w-7 h-7 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
