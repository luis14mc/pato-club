import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'black' | 'white';
  size?: number;
}

export default function Logo({ className = '', variant = 'black', size = 120 }: LogoProps) {
  const logoSrc = variant === 'white' ? '/Pato white.png' : '/Pato black.png';
  
  return (
    <Image
      src={logoSrc}
      alt="Pato Club"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      priority
    />
  );
}
