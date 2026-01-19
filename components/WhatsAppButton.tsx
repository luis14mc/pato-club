'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const handleClick = () => {
    const mensaje = 'Hola Pato Club, tengo una consulta sobre sus productos. ¿Podrían ayudarme?';
    const whatsappUrl = `https://wa.me/50433333333?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-40 group"
      aria-label="Chatear con nosotros por WhatsApp"
    >
      {/* Botón principal */}
      <div className="relative">
        {/* Pulso animado */}
        <motion.div
          className="absolute inset-0 bg-forest rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Botón - Verde Bosque #014B28 */}
        <div className="relative flex items-center gap-3 px-6 py-4 bg-forest text-white shadow-2xl hover:bg-[#013a20] transition-all duration-300 group-hover:shadow-forest/50">
          <MessageCircle className="w-6 h-6" strokeWidth={2} />
          <span className="font-semibold tracking-wide hidden sm:inline">
            CHATEA CON NOSOTROS
          </span>
        </div>
      </div>
    </motion.button>
  );
}
