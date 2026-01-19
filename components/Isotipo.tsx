import Image from 'next/image';

interface IsotipoProps {
  className?: string;
  size?: number;
  variant?: 'color' | 'white' | 'black';
}

export default function Isotipo({ className = '', size = 24, variant = 'color' }: IsotipoProps) {
  // Si existe isotipo.png lo usamos, si no, usamos el logo pero más pequeño
  const src = variant === 'white' ? '/Pato white.png' : '/Pato black.png';
  
  return (
    <Image
      src={src}
      alt="Pato Club Isotipo"
      width={size}
      height={size}
      className={`object-contain ${className}`}
    />
  );
}
