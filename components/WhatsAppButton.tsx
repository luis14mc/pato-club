'use client';

import { SiWhatsapp } from 'react-icons/si';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const handleClick = () => {
    const mensaje = 'Hola Pato Club, tengo una consulta sobre sus productos. ¿Podrían ayudarme?';
    const whatsappUrl = `https://wa.me/50496309525?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-40"
      style={{
        backgroundColor: '#014B28',
        borderRadius: '8px',
        boxShadow: '0 4px 14px 0 rgba(1, 75, 40, 0.39)',
      }}
      aria-label="Chatear con nosotros por WhatsApp"
    >
      {/* Botón Verde Bosque - FORZADO CON INLINE STYLES */}
      <div 
        className="flex items-center gap-3 px-6 py-3.5 transition-all duration-300"
        style={{
          backgroundColor: '#014B28',
          color: '#FFFFFF',
          borderRadius: '8px',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#013a20';
          e.currentTarget.style.boxShadow = '0 6px 20px 0 rgba(1, 75, 40, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#014B28';
          e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(1, 75, 40, 0.39)';
        }}
      >
        <SiWhatsapp className="w-5 h-5" style={{ color: '#FFFFFF' }} />
        <span 
          className="hidden sm:inline"
          style={{
            fontFamily: 'var(--font-bricolage), serif',
            fontSize: '0.875rem',
            fontWeight: '600',
            letterSpacing: '0.05em',
            color: '#FFFFFF',
            textTransform: 'uppercase',
          }}
        >
          CHATEA CON NOSOTROS
        </span>
      </div>
    </motion.button>
  );
}
