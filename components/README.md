# Componentes de Pato Club

## Navbar.tsx

Navbar profesional sticky con diseño luxury/streetwear.

### Características

✅ **Sticky con Backdrop Blur**: Se mantiene fijo en la parte superior con efecto de desenfoque sutil
✅ **Logo Centralizado**: "PATO CLUB" en mayúsculas con `tracking-widest` y fuente Playfair Display
✅ **Enlaces de Navegación**: "NEW ARRIVALS" y "BASICS" a la izquierda (desktop)
✅ **Iconos Funcionales**: Búsqueda y Carrito con Lucide React a la derecha
✅ **Responsive**: Menú hamburguesa para móvil con animación suave
✅ **Accesibilidad**: Labels ARIA, navegación por teclado, gestión de scroll

### Estructura (Desktop)

```
[NEW ARRIVALS] [BASICS]  |  PATO CLUB  |  [Search] [Cart]
    (Izquierda)          |  (Centro)   |    (Derecha)
```

### Estructura (Mobile)

```
PATO CLUB  |  [Search] [Cart] [Menu]
(Izquierda)|      (Derecha)
```

### Props

No requiere props, es un componente autónomo.

### Uso

```tsx
import Navbar from '@/components/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="h-20" /> {/* Espaciador */}
      {children}
    </>
  );
}
```

### Personalización

**Colores**:
- Background: `bg-white/90 backdrop-blur-md`
- Texto: `text-zinc-700` hover `text-black`
- Border: `border-zinc-200/50`

**Tipografía**:
- Logo: `font-serif text-3xl font-bold tracking-widest`
- Enlaces: `text-sm tracking-wider`

**Animaciones**:
- Transiciones: `duration-200` o `duration-300`
- Menu mobile: `ease-in-out`

### Estado

- `isMenuOpen`: Controla el menú hamburguesa mobile
- `isScrolled`: Detecta scroll para cambiar estilos del navbar

### Comportamiento Mobile

1. El menú se abre en overlay full-screen
2. Previene scroll del body cuando está abierto
3. Se cierra al hacer clic en un enlace
4. Animación slide desde la derecha

---

## Hero.tsx

Hero section full-screen con scroll suave.

### Características

- Altura: `min-h-[calc(100vh-5rem)]` (resta altura del navbar)
- Background: Negro con patrón sutil
- Botón CTA con scroll suave a productos
- Indicador de scroll animado

---

## ProductCard.tsx

Tarjeta de producto con hover effects.

### Props

```typescript
interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}
```

---

## Modal.tsx

Modal accesible reutilizable.

### Características

- Gestión automática de foco
- Cierre con tecla ESC
- Backdrop blur y overlay
- Trap de foco

### Props

```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
```

---

## ProductDetailModal.tsx

Modal de detalle de producto con características.

### Props

```typescript
interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}
```
