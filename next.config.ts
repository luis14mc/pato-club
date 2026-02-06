import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 requiere que las calidades permitidas se declaren explícitamente
    // si usas el prop 'quality' en el componente <Image />
    qualities: [75, 95], 
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 1080, 1920],
    imageSizes: [16, 32, 64, 96],
    dangerouslyAllowSVG: true,
    minimumCacheTTL: 31536000,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Esto quita el warning de "metadataBase property"
  // Es vital para que las imágenes de WhatsApp (OpenGraph) funcionen en patohn.com
  metadataBase: new URL('https://patohn.com'), 
  
  // Como usas Turbopack, esto ayuda a que el desarrollo sea aún más veloz
  experimental: {
    turbo: {
      // Configuraciones específicas de Turbo si las necesitas
    },
  },
  
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
