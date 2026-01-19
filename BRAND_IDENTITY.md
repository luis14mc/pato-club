# 🎨 Identidad Visual - Pato Club

## 📋 Resumen de Implementación

✅ **Fuentes configuradas**: Bricolage Grotesque + Work Sans  
✅ **Paleta de marca actualizada**: Negro, Blanco, Crema, Bronce, Verde Bosque, Dorado  
✅ **Menú móvil corregido**: Fondo sólido crema (#ECE0C8) con texto negro  
✅ **Isotipo y Logotipo**: Implementados en componentes reutilizables  
✅ **Z-index optimizado**: Navbar (100), Menú Mobile (110)  
✅ **Elementos de marca**: Isotipo en productos, menú, footer y hero  

---

## 🎯 Paleta de Colores

### Colores Primarios

```css
--color-black: #000000      /* Texto principal, fondos premium */
--color-white: #FFFFFF      /* Backgrounds, contraste */
--color-cream: #ECE0C8      /* Background principal, menú móvil */
```

### Colores Secundarios

```css
--color-bronze: #A27852    /* Acentos, hover states, CTA */
--color-forest: #014B28    /* Badge "Nuevo", detalles */
--color-gold: #D09306      /* Badge "Agotado", highlights */
```

### Uso de Colores

| Elemento | Color | Clase Tailwind |
|----------|-------|----------------|
| Body background | Cream | `bg-cream` |
| Texto principal | Black | `text-black` |
| Navbar background | White | `bg-white/95` |
| Menú móvil | Cream | `bg-[#ECE0C8]` |
| Hover accents | Bronze | `hover:bg-bronze` |
| Badge "Nuevo" | Forest Green | `bg-forest` |
| Badge "Agotado" | Gold | `bg-gold` |
| Badge "Edición Especial" | Bronze | `bg-bronze` |

---

## 🔤 Tipografía

### Configuración de Fuentes

```typescript
// app/layout.tsx
import { Bricolage_Grotesque, Work_Sans } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});
```

### Jerarquía Tipográfica

| Elemento | Fuente | Clase Tailwind |
|----------|--------|----------------|
| Logo "PATO CLUB" | Bricolage Grotesque | `font-serif` |
| Títulos (H1-H3) | Bricolage Grotesque | `font-serif` |
| Cuerpo de texto | Work Sans | `font-sans` |
| Botones | Work Sans | `font-sans font-bold` |

### Ejemplos de Uso

```tsx
// Logo / Título principal
<h1 className="font-serif text-6xl font-bold tracking-widest">
  PATO CLUB
</h1>

// Subtítulo
<h2 className="font-serif text-4xl font-bold">
  Colección
</h2>

// Cuerpo de texto
<p className="font-sans text-base text-black/70">
  Descripción del producto...
</p>

// Botón
<button className="font-sans font-bold tracking-widest text-sm">
  COMPRAR AHORA
</button>
```

---

## 🦆 Componentes de Marca

### Logo Component

**Archivo**: `components/Logo.tsx`

```tsx
<Logo className="text-2xl" variant="full" />  // "PATO CLUB"
<Logo className="text-xl" variant="compact" /> // "PC"
```

**Props:**
- `className`: Clases CSS personalizadas
- `variant`: `'full'` (PATO CLUB) o `'compact'` (PC)

**Uso:**
- Navbar (centro)
- Footer (izquierda)
- Hero (gigante)
- Menú móvil (header)

---

### Isotipo Component

**Archivo**: `components/Isotipo.tsx`

```tsx
<Isotipo size={24} className="text-bronze" />
```

**Props:**
- `size`: Tamaño en píxeles (default: 24)
- `className`: Clases CSS (incluye color con `text-*`)

**Ubicaciones Implementadas:**

1. **Menú Móvil** (Botón de cierre)
```tsx
<Isotipo size={28} className="text-black" />
```

2. **ProductCard** (Esquina superior derecha)
```tsx
<Isotipo size={32} className="text-black opacity-20" />
```

3. **Footer** (Junto al logo)
```tsx
<Isotipo size={32} className="text-bronze" />
```

4. **Hero** (Fondo decorativo gigante)
```tsx
<Isotipo size={500} className="text-white opacity-5" />
```

5. **Valentine Banner** (Decorativo)
```tsx
<Isotipo size={120} className="text-bronze opacity-10" />
```

---

## 📱 Menú Móvil - Solución Final

### Problema Resuelto
❌ **Antes**: Fondo transparente, texto invisible  
✅ **Ahora**: Fondo sólido crema, texto negro perfectamente legible

### Implementación

```tsx
// components/Navbar.tsx
<motion.div
  className="md:hidden fixed inset-0 z-[110]"
  style={{ backgroundColor: '#ECE0C8' }} // Fondo sólido crema
>
  {/* Header */}
  <div className="h-20 px-6 border-b border-black/10">
    <Logo className="text-2xl text-black" />
    <Isotipo size={28} className="text-black" />
  </div>

  {/* Enlaces */}
  <nav>
    <Link className="font-serif text-4xl font-bold text-black">
      NEW ARRIVALS
    </Link>
  </nav>
</motion.div>
```

### Características Clave

- **Fondo**: `#ECE0C8` (crema sólido, inline style)
- **Z-index**: `110` (sobre el navbar que es `100`)
- **Texto**: `text-black` con `font-serif font-bold`
- **Animación**: Desliza desde la derecha con Framer Motion
- **Cierre**: Click en Isotipo o fuera del menú

---

## 🏷️ Sistema de Badges

### Badge de Edición Especial

**Color**: Bronze (`#A27852`)  
**Uso**: Productos Valentine's Edition

```tsx
<span className="bg-bronze text-white font-bold border border-bronze">
  Edición Especial
</span>
```

### Badge "Nuevo"

**Color**: Forest Green (`#014B28`)  
**Uso**: Productos recién agregados

```tsx
<span className="bg-forest text-white font-bold border border-forest">
  Nuevo
</span>
```

### Badge "Agotado"

**Color**: Gold (`#D09306`)  
**Uso**: Productos sin stock

```tsx
<span className="bg-gold text-black font-bold border border-gold">
  Agotado
</span>
```

### Implementación en ProductCard

```tsx
// components/ProductCard.tsx
{isValentineEdition && (
  <span className="bg-bronze text-white font-bold">
    Edición Especial
  </span>
)}

{isNew && (
  <span className="bg-forest text-white font-bold">
    Nuevo
  </span>
)}

{isSoldOut && (
  <span className="bg-gold text-black font-bold">
    Agotado
  </span>
)}
```

---

## 🎨 Componentes Actualizados

### 1. Navbar (`components/Navbar.tsx`)

**Cambios:**
- Z-index: `z-[100]`
- Menú móvil: `z-[110]` con fondo `#ECE0C8`
- Logo y Isotipo componentes reutilizables
- Hover states con color `bronze`
- Botón hamburguesa cambia a Isotipo al abrir

### 2. Hero (`components/Hero.tsx`)

**Cambios:**
- Isotipo decorativo gigante de fondo
- Botón CTA con colores `bronze` y `gold`
- Scroll indicator con color `bronze`
- Logo componente en lugar de texto hardcodeado

### 3. ProductCard (`components/ProductCard.tsx`)

**Cambios:**
- Isotipo en esquina superior derecha
- Badges con colores de marca (bronze, forest, gold)
- Hover states mejorados
- Texto negro en lugar de zinc-900

### 4. ValentineBanner (`components/ValentineBanner.tsx`)

**Cambios:**
- Fondo `cream` en lugar de rosa
- Badge con color `bronze`
- Isotipo decorativo de fondo
- Botón con hover `bronze → gold`

### 5. Footer (`components/Footer.tsx`)

**Cambios:**
- Isotipo junto al logo
- Botón suscripción con color `bronze`
- Hover states con color `bronze`
- Frase "Hecho con intención" en color `bronze`

### 6. WhatsAppButton (`components/WhatsAppButton.tsx`)

**Sin cambios** - Mantiene verde característico de WhatsApp

---

## 📐 Z-Index Hierarchy

```css
/* Capas de la aplicación */
z-0    : Contenido base
z-10   : Badges, overlays
z-40   : WhatsApp button
z-50   : Product Modal
z-[100]: Navbar
z-[110]: Mobile Menu
```

---

## 🎯 Variables CSS Globales

```css
/* app/globals.css */
@theme {
  /* Fuentes */
  --font-sans: var(--font-work-sans), 'Helvetica Neue', system-ui;
  --font-serif: var(--font-bricolage), 'Bricolage Grotesque', serif;
  
  /* Colores Primarios */
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-cream: #ECE0C8;
  
  /* Colores Secundarios */
  --color-bronze: #A27852;
  --color-forest: #014B28;
  --color-gold: #D09306;
  
  /* Semantic */
  --color-background: #ECE0C8;
  --color-foreground: #000000;
}
```

### Uso en Tailwind

```tsx
// Colores personalizados disponibles:
className="bg-cream"      // #ECE0C8
className="text-bronze"   // #A27852
className="bg-forest"     // #014B28
className="border-gold"   // #D09306
```

---

## 📱 Responsive Breakpoints

### Mobile First Approach

```tsx
// Mobile (< 768px)
className="text-4xl"

// Tablet (768px - 1024px)
className="md:text-6xl"

// Desktop (> 1024px)
className="lg:text-7xl"
```

### Menú Móvil

```tsx
// Visible solo en mobile
className="md:hidden"

// Oculto en mobile
className="hidden md:flex"
```

---

## 🎭 Animaciones

### Framer Motion en Menú Móvil

```tsx
<motion.div
  initial={{ opacity: 0, x: '100%' }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: '100%' }}
  transition={{ duration: 0.3, ease: 'easeInOut' }}
/>
```

### Hover Effects

```tsx
// Zoom en imágenes
className="group-hover:scale-105 transition-transform duration-700"

// Color change
className="hover:text-bronze transition-colors duration-200"

// Background change
className="hover:bg-gold transition-all duration-300"
```

---

## ✅ Checklist de Identidad

- [x] Fuentes configuradas (Bricolage Grotesque + Work Sans)
- [x] Paleta de colores implementada
- [x] Logo componente creado
- [x] Isotipo componente creado
- [x] Menú móvil con fondo sólido crema
- [x] Z-index optimizado (100 navbar, 110 menú)
- [x] Isotipo en botón de cierre del menú
- [x] Isotipo decorativo en ProductCard
- [x] Isotipo en Footer junto a logo
- [x] Isotipo gigante en Hero background
- [x] Badges con colores de marca (bronze, forest, gold)
- [x] Valentine Banner con fondo crema
- [x] Todos los componentes actualizados

---

## 🚀 Próximos Pasos

### Opcionales
1. **Agregar más variantes de Logo**
   - Versión monocromática
   - Versión invertida (blanco sobre negro)

2. **Crear más badges**
   - "Más vendido" (usar gold)
   - "Preventa" (usar bronze)

3. **Animaciones adicionales**
   - Page transitions con Framer Motion
   - Parallax en Hero con Isotipo

4. **Dark Mode**
   - Configurar variantes de colores
   - Toggle en Navbar

---

## 📞 Soporte

Para cualquier duda sobre la implementación de la identidad visual:

1. Revisar este documento
2. Consultar `app/globals.css` para variables CSS
3. Ver componentes `Logo.tsx` y `Isotipo.tsx`
4. Revisar `REFACTOR_COMPLETE.md` para contexto general

---

**Última actualización**: 16/01/2026  
**Versión de la identidad**: 1.0  
**Estado**: ✅ Production Ready
