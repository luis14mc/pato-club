import Link from 'next/link';
import Logo from '@/components/Logo';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center space-y-10">
        {/* Logo */}
        <div className="flex justify-center">
          <Logo variant="black" size={80} />
        </div>

        {/* Mensaje 404 */}
        <div className="space-y-4">
          <h1 className="font-title text-8xl md:text-9xl font-bold text-black tracking-tight">
            404
          </h1>
          <p className="font-title text-3xl md:text-4xl font-bold text-black tracking-tight">
            Parece que te has salido del club.
          </p>
          <p className="font-body text-lg text-zinc-600 max-w-md mx-auto leading-relaxed">
            La página que buscas no existe o ha sido movida. Pero no te preocupes, 
            siempre puedes volver a casa.
          </p>
        </div>

        {/* Botón de regreso */}
        <div className="pt-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 bg-forest text-white px-8 py-4 hover:bg-gold hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5" strokeWidth={2} />
            <span className="tracking-widest text-sm font-body font-bold">
              VOLVER AL INICIO
            </span>
          </Link>
        </div>

        {/* Decoración minimalista */}
        <div className="pt-12 flex items-center justify-center gap-4 opacity-30">
          <div className="w-16 h-[2px] bg-bronze" />
          <div className="w-2 h-2 bg-bronze rounded-full" />
          <div className="w-16 h-[2px] bg-bronze" />
        </div>
      </div>
    </div>
  );
}
