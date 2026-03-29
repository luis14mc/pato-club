import Image from 'next/image';

export default function LinenEditionBanner() {
  return (
    <section className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden flex items-center justify-center bg-[#ECE0C8]">
      <Image
        src="/bglinen.webp" // Cambia por la ruta real de la imagen
        alt="Linen Edition"
        fill
        className="object-cover object-center opacity-90"
        priority
      />
      
    </section>
  );
}
