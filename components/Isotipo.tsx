import Image from 'next/image';

interface IsotipoProps {
  className?: string;
  size?: number;
}

export default function Isotipo({ className = '', size = 24 }: IsotipoProps) {
  return (
    <Image
      src="/Pato black.png"
      alt="Pato Club Isotipo"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      priority
    />
  );
}
