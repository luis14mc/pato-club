'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`¡Gracias por suscribirte! ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid de 3 columnas con espaciado generoso */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Columna 1: Logo y Frase */}
          <div className="space-y-6">
            <Logo variant="white" size={60} />
            <p className="text-sm text-bronze italic font-bold mt-4">
              Hecho con intención.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Streetwear de lujo para los que marcan la diferencia.
            </p>
          </div>

          {/* Columna 2: Enlaces Sociales */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg tracking-wider uppercase font-bold mb-6 text-white">
              Conecta con Nosotros
            </h4>
            <div className="flex flex-col space-y-4">
              <a
                href="https://www.tiktok.com/@patoclub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 hover:text-gold transition-colors duration-200 group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 group-hover:bg-gold group-hover:text-black transition-all duration-200">
                  <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium">TikTok</span>
              </a>
              <a
                href="https://www.instagram.com/patoclub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 hover:text-gold transition-colors duration-200 group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 group-hover:bg-gold group-hover:text-black transition-all duration-200">
                  <Instagram className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/patoclub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 hover:text-gold transition-colors duration-200 group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 group-hover:bg-gold group-hover:text-black transition-all duration-200">
                  <Facebook className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium">Facebook</span>
              </a>
            </div>
          </div>

          {/* Columna 3: Newsletter */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg tracking-wider uppercase font-bold mb-6 text-white">
              Únete al CLUB
            </h4>
            <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
              Recibe noticias exclusivas, lanzamientos y ofertas especiales.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="w-full px-4 py-4 bg-white/10 border-2 border-white/20 text-white placeholder:text-zinc-500 focus:outline-none focus:border-gold transition-colors duration-200"
              />
              <button
                type="submit"
                className="w-full py-4 bg-gold text-black font-bold tracking-wider text-sm hover:bg-bronze hover:text-white transition-colors duration-200 shadow-lg"
              >
                SUSCRIBIRSE
              </button>
            </form>
          </div>
        </div>

        {/* Links de información con espaciado generoso */}
        <div className="border-t-2 border-white/10 pt-12 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <Link href="#" className="text-zinc-400 hover:text-gold transition-colors font-medium">
              Envíos y Devoluciones
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-gold transition-colors font-medium">
              Guía de Tallas
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-gold transition-colors font-medium">
              Cuidado de Productos
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-gold transition-colors font-medium">
              Términos y Condiciones
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t-2 border-white/10 pt-12 text-center text-sm text-zinc-500">
          <p className="font-medium">© 2026 Pato Club. Todos los derechos reservados.</p>
          <p className="mt-2 text-bronze">Barcelona, España</p>
        </div>
      </div>
    </footer>
  );
}
