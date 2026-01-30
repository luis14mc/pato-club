# Pato Club - E-commerce Website

Sitio web oficial de Pato Club, marca de streetwear premium de Honduras.

## 🦆 Sobre el Proyecto

Pato Club es una tienda en línea minimalista y elegante que muestra colecciones exclusivas de streetwear de alta gama. El sitio está diseñado con un enfoque en la experiencia visual y la facilidad de uso, permitiendo a los clientes explorar productos y realizar pedidos directamente vía WhatsApp.

## 🚀 Tecnologías

- **Framework:** Next.js 16 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React, React Icons
- **Fuentes:** Bricolage Grotesque, Work Sans
- **Optimización:** WebP, Next.js Image, SEO Metadata

## 📦 Instalación

```bash
# Clonar el repositorio
git clone [url-del-repositorio]

# Navegar al directorio
cd pato-club

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 🎨 Paleta de Colores

- **Crema Principal:** `#ECE0C8` (Fondo principal)
- **Crema Suave:** `#FAF6F1` (Modales y secciones alternas)
- **Verde Bosque:** `#014B28` (Botones de acción y acentos)
- **Dorado:** `#D09306` (Hover y elementos premium)
- **Rojo Vino:** `#631B26` (Edición especial Valentine's)

## 📱 Características

- ✅ **SEO Optimizado:** Meta tags configuradas para OpenGraph, Twitter y buscadores.
- ✅ **Diseño Responsive:** Experiencia fluida en móvil, tablet y desktop.
- ✅ **Modal de Producto:** Vista detallada con scroll personalizado, selección de talla/color y características.
- ✅ **Integración WhatsApp:** Pedidos directos y botón flotante de contacto dinámico.
- ✅ **Optimización de Rendimiento:** Uso de imágenes WebP, `image-rendering` optimizado y carga diferida.
- ✅ **Navegación Fluida:** Scroll suave entre secciones y menú móvil animado.

## 📂 Estructura Completa del Proyecto

```text
pato-club/
├── app/                        # Núcleo de la aplicación (App Router)
│   ├── layout.tsx              # Estructura global, SEO y Fuentes
│   ├── page.tsx                # Página principal (Home)
│   ├── globals.css             # Estilos globales y scrollbars personalizados
│   └── not-found.tsx           # Manejo de errores 404
├── components/                 # Componentes de la interfaz
│   ├── Navbar.tsx              # Navegación principal y menú móvil
│   ├── Hero.tsx                # Sección de impacto inicial con Parallax
│   ├── CollectionSection.tsx   # Motor de renderizado de colecciones y filtros
│   ├── ProductCard.tsx         # Tarjeta de producto individual con efectos hover
│   ├── ProductModal.tsx        # Modal detallado con lógica de compra
│   ├── ValentineBanner.tsx     # Banner temático de edición especial
│   ├── BasicsBanner.tsx        # Banner de transición a básicos
│   ├── Footer.tsx              # Pie de página minimalista
│   ├── WhatsAppButton.tsx      # Botón flotante de contacto directo
│   ├── ScrollToTop.tsx         # Botón de navegación rápida hacia arriba
│   ├── Logo.tsx                # Componente de marca principal
│   └── Isotipo.tsx             # Componente de marca secundario
├── data/                       # Gestión de datos
│   └── products.ts             # Catálogo maestro de productos (Single Source of Truth)
├── public/                     # Recursos estáticos optimizados
│   ├── products/               # Galería de productos organizada por categorías
│   ├── PTMwhite.png            # Favicon y logos de marca
│   ├── hero.webp               # Imagen principal optimizada
│   └── og-preview.webp         # Vista previa para compartir en redes
├── types/                      # Definiciones de tipos
│   └── product.ts              # Interfaces de TypeScript para productos
└── package.json                # Dependencias y scripts del proyecto
```

## 🛍️ Colecciones y Secciones

1.  **Love is Red (Valentine's):** Edición limitada con estética romántica.
2.  **Básicos:** Esenciales atemporales (Hoodie Boxy, Pantalón Wide Leg, Camiseta Dos Tonos).
3.  **Hoodies:** Colección completa de sudaderas en 6 colores premium.
4.  **Pantalón Deportivo:** Siluetas Wide Leg diseñadas para el movimiento.
5.  **Camisetas:** Cortes Semi-Oversize en materiales de alta calidad.

## 📞 Canales Oficiales

- **WhatsApp:** [+504 9630 9525](https://wa.me/50496309525)
- **Instagram:** [@patoclubhn](https://www.instagram.com/patoclubhn)
- **TikTok:** [@patoclubhn](https://www.tiktok.com/@patoclubhn)

## 📄 Licencia

© 2026 Pato Club. Todos los derechos reservados. Este software y sus activos son propiedad exclusiva de Pato Club. El uso, reproducción o distribución sin autorización previa está estrictamente prohibido.

---

**Hecho con intención en Honduras 🇭🇳**

## 👨‍💻 Desarrollado por

**Luis Martínez Cerrato**  
Full Stack Developer
