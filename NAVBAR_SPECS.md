# 🧭 Especificaciones del Navbar - Pato Club

## 📐 Layout Desktop (≥768px)

```
┌─────────────────────────────────────────────────────────────────┐
│  NEW ARRIVALS   BASICS          PATO CLUB          🔍  🛍️       │
│  ← Izquierda →                  ← Centro →        ← Derecha →   │
└─────────────────────────────────────────────────────────────────┘
```

### Estructura de Flex
- **Contenedor**: `flex items-center justify-between h-20`
- **Max Width**: `max-w-7xl` (1280px)
- **Padding**: `px-4 sm:px-6 lg:px-8` (responsive)

### Secciones
1. **Enlaces (Izquierda)**: `flex-1` - "NEW ARRIVALS", "BASICS"
2. **Logo (Centro)**: `flex-1 md:flex-initial` - "PATO CLUB"
3. **Iconos (Derecha)**: `flex-1` - Búsqueda, Carrito

---

## 📱 Layout Mobile (<768px)

```
┌──────────────────────────────────────────────────┐
│  PATO CLUB              🔍  🛍️  ☰               │
│  ← Izquierda →          ← Derecha →              │
└──────────────────────────────────────────────────┘
```

### Menú Hamburguesa (Overlay)
Cuando se abre el menú (☰ → ✕):

```
┌──────────────────────────────────────────────────┐
│  PATO CLUB              🔍  🛍️  ✕               │
├──────────────────────────────────────────────────┤
│                                                  │
│                  NEW ARRIVALS                    │
│                                                  │
│                     BASICS                       │
│                                                  │
│                  ─────────                       │
│                                                  │
│                   Nosotros                       │
│                   Contacto                       │
│                                                  │
└──────────────────────────────────────────────────┘
```

---

## 🎨 Estilos y Colores

### Background
```css
/* Estado normal */
bg-white/95 backdrop-blur-md

/* Estado scrolled (scroll > 10px) */
bg-white/90 backdrop-blur-md border-b border-zinc-200/50
```

### Tipografía

#### Logo (PATO CLUB)
```css
font-serif text-2xl md:text-3xl font-bold tracking-widest
color: #1a1a1a
hover: opacity-80
```

#### Enlaces de Navegación
```css
text-sm tracking-wider
color: #52525b (zinc-700)
hover: #000000 (black)
transition: duration-200
```

### Iconos (Lucide React)
```css
w-5 h-5 text-zinc-700 strokeWidth={1.5}
padding: p-2
hover: bg-zinc-100 rounded-full
```

---

## ⚙️ Funcionalidades

### 1. Sticky Navbar
- ✅ `fixed top-0 left-0 right-0 z-50`
- ✅ Se mantiene visible al hacer scroll
- ✅ Cambia de estilo al detectar scroll (border inferior)

### 2. Scroll Detection
```typescript
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### 3. Menú Mobile
- ✅ Overlay full-screen desde la derecha
- ✅ Animación: `translate-x-full` → `translate-x-0`
- ✅ Previene scroll del body cuando está abierto
- ✅ Cierre automático al navegar

```typescript
const [isMenuOpen, setIsMenuOpen] = useState(false);

useEffect(() => {
  if (isMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
  return () => {
    document.body.style.overflow = 'unset';
  };
}, [isMenuOpen]);
```

### 4. Badge del Carrito
```jsx
<span className="absolute top-1 right-1 w-2 h-2 bg-black rounded-full" />
```
Pequeño dot negro para indicar items (actualmente estético)

---

## 🎯 Accesibilidad

### ARIA Labels
```jsx
aria-label="Buscar"
aria-label="Carrito"
aria-label="Menú"
```

### Navegación por Teclado
- ✅ Todos los enlaces son navegables con Tab
- ✅ Enter activa los enlaces
- ✅ Botones tienen estados de foco visibles

### Contraste
- ✅ Texto: `#52525b` sobre `#ffffff` ≥ 4.5:1
- ✅ Logo: `#1a1a1a` sobre `#ffffff` ≥ 7:1

---

## 📊 Breakpoints

| Breakpoint | Comportamiento |
|------------|----------------|
| `< 768px` | Menú hamburguesa, logo izquierda |
| `≥ 768px` | Menú completo, logo centro |

```css
md:flex     /* Muestra en desktop */
md:hidden   /* Oculta en desktop */
hidden md:flex  /* Oculta en mobile, muestra en desktop */
```

---

## 🔧 Integración en Layout

### app/page.tsx
```tsx
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="h-20" /> {/* Espaciador para el navbar fijo */}
      {/* Resto del contenido */}
    </div>
  );
}
```

### Alternativa en layout.tsx
Si quieres que el navbar aparezca en todas las páginas:

```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
```

---

## 🚀 Próximas Mejoras

### Funcionalidad de Búsqueda
```tsx
const [searchOpen, setSearchOpen] = useState(false);

// Modal de búsqueda con input y resultados
```

### Carrito Funcional
```tsx
const [cartCount, setCartCount] = useState(0);

<span className="absolute top-0 right-0 w-5 h-5 bg-black text-white 
      text-xs flex items-center justify-center rounded-full">
  {cartCount}
</span>
```

### Mega Menu para NEW ARRIVALS
```tsx
{/* Dropdown con categorías y productos destacados */}
```

---

## 📦 Dependencias

- **next/link**: Navegación optimizada
- **lucide-react**: Iconos (Search, ShoppingBag, Menu, X)
- **React hooks**: useState, useEffect

---

## ✅ Checklist de Implementación

- [x] Logo centralizado con Playfair Display
- [x] Enlaces de navegación (NEW ARRIVALS, BASICS)
- [x] Iconos de Lucide React (Search, ShoppingBag)
- [x] Sticky navbar con backdrop-blur
- [x] Detección de scroll para cambio de estilo
- [x] Menú hamburguesa responsive
- [x] Overlay full-screen para mobile
- [x] Prevención de scroll al abrir menú
- [x] Animaciones suaves (translate, fade)
- [x] Accesibilidad (ARIA, keyboard navigation)
- [x] Max-width 7xl con padding responsivo
- [x] Colores: #fafafa bg, #1a1a1a texto
- [x] Badge en carrito

---

**Desarrollado siguiendo las mejores prácticas de UI/UX y accesibilidad web.**
