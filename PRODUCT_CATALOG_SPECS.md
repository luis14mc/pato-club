# 🛍️ Especificaciones del Catálogo de Productos - Pato Club

## 📋 Implementación Completada

### ✅ ProductCard.tsx - Tarjeta Premium

#### Características Implementadas

**1. Diseño Minimalista Sin Bordes** ✅
```tsx
// Sin bordes, fondo limpio
<div className="relative aspect-[3/4] overflow-hidden bg-zinc-50">
```

**2. Efecto Hover con Zoom Sutil** ✅
```tsx
// Scale-105 en 700ms con ease-out
className="transition-transform duration-700 ease-out group-hover:scale-105"
```

**3. Botón "VISTA RÁPIDA" desde Abajo** ✅
```tsx
// Aparece suavemente con translate-y y opacity
className={`transition-all duration-500 ease-out ${
  isHovered
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-4'
}`}
```

**4. Formato de Precio Internacional** ✅
```tsx
// Usa Intl.NumberFormat para "L. 745.00"
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-HN', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};
// Output: "L. 745.00"
```

**5. Badge de Edición Especial Valentine's** ✅
```tsx
// Detecta productos Valentine's automáticamente
const isValentineEdition = 
  product.name.toLowerCase().includes('valentine') || 
  product.name.toLowerCase().includes('love is red');

// Badge minimalista negro
<span className="px-3 py-1 text-[10px] tracking-[0.2em] uppercase bg-black text-white">
  Edición Especial
</span>
```

**6. Tipografía Limpia** ✅
- **Categoría**: `text-[11px] tracking-[0.15em] uppercase text-zinc-500`
- **Nombre**: `text-base font-normal text-zinc-900` (sans-serif)
- **Precio**: `text-base font-semibold text-black` (negrita suave)

---

## 🎨 Grid Responsivo

### Configuración
```tsx
// Grid de alta gama con espaciado amplio
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
```

### Breakpoints
| Dispositivo | Columnas | Gap Horizontal | Gap Vertical |
|-------------|----------|----------------|--------------|
| Mobile (<640px) | 1 | - | 80px |
| Tablet (640-1024px) | 2 | 32px | 80px |
| Desktop (≥1024px) | 4 | 32px | 80px |

### Sensación de Lujo
- ✅ Gap vertical de `80px` (gap-y-20) para respiración
- ✅ Gap horizontal de `32px` (gap-x-8) para separación clara
- ✅ Max-width de `1400px` para no sentirse apretado
- ✅ Padding amplio: `px-6 sm:px-8 lg:px-12`

---

## 🖼️ Imágenes Placeholder Elegantes

### Características
- **Gradiente suave**: De gris muy claro a gris claro
- **Círculo decorativo**: Elemento visual sutil con opacidad baja
- **Tipografía minimalista**: Marca y nombre del producto
- **Colores**: #f5f5f5 → #e8e8e8 (gris muy suave)

### Productos con Badge
1. **anti-valentines/negro** (PC001800) - Badge "Edición Especial"
2. **love is red** (PC001600) - Badge "Edición Especial"

---

## 📐 Anatomía de la ProductCard

```
┌─────────────────────────────────────┐
│  [Badge]                    ┌─────┐ │
│                             │     │ │
│                             │     │ │
│         IMAGEN              │ 3:4 │ │
│      (con zoom hover)       │     │ │
│                             │     │ │
│                             └─────┘ │
│    [VISTA RÁPIDA] ← aparece hover  │
└─────────────────────────────────────┘
  CATEGORÍA (uppercase, pequeño)
  Nombre del Producto
  L. 745.00 (bold)
```

---

## 🎯 Efectos y Transiciones

### 1. Zoom de Imagen
```css
transition-transform: 700ms ease-out
transform: scale(1) → scale(1.05)
```

### 2. Botón Vista Rápida
```css
transition: all 500ms ease-out
opacity: 0 → 1
transform: translateY(16px) → translateY(0)
```

### 3. Overlay Sutil
```css
transition: opacity 500ms
opacity: 0 → 0.05 (negro)
```

### 4. Botón Hover Secundario
```css
bg: white → black
color: black → white
transition: 300ms
```

---

## 📦 Productos Configurados

### Lista Completa

| ID | Nombre | Precio | Badge | Categoría |
|----|--------|--------|-------|-----------|
| PC001800 | anti-valentines/negro | L. 745.00 | ✅ | Camisetas |
| PC002250 | pants WIDE Legs | L. 745.00 | ❌ | Pantalones |
| PC003500 | Hoodie Semi-Oversize | L. 745.00 | ❌ | Hoodies |
| PC001600 | love is red | L. 945.00 | ✅ | Camisetas |
| PC001250 | camiseta básica | L. 545.00 | ❌ | Camisetas |

---

## 💎 Vibe Check - Sensación de Lujo

### ✅ Implementado

**Espaciado Amplio**
- Container: `max-w-[1400px]` (más ancho que 7xl)
- Padding exterior: `px-6 sm:px-8 lg:px-12` (generoso)
- Gap entre productos: `gap-x-8 gap-y-20` (muy amplio)
- Margen superior de sección: `py-32` (mucho espacio)

**Minimalismo**
- Sin bordes en las tarjetas
- Fondo limpio: `bg-zinc-50` para imagen
- Tipografía simple y legible
- Solo elementos esenciales

**Efectos Premium**
- Transiciones largas (500ms, 700ms)
- Ease-out para suavidad
- Zoom sutil (1.05x, no exagerado)
- Overlay discreto (5% opacidad)

**Detalles Refinados**
- Letter-spacing amplio en mayúsculas
- Badge minimalista con tracking
- Botón con shadow-lg
- Formato de precio profesional

---

## 🎨 Paleta de Colores del Catálogo

```css
/* Fondos */
--card-bg: #fafafa (fondo principal)
--image-bg: #f5f5f5 (placeholder imagen)
--gradient-start: #f5f5f5
--gradient-end: #e8e8e8

/* Textos */
--category: #71717a (zinc-500)
--title: #18181b (zinc-900)
--price: #000000 (black)
--badge-bg: #000000
--badge-text: #ffffff

/* Botones */
--btn-bg: #ffffff
--btn-text: #000000
--btn-hover-bg: #000000
--btn-hover-text: #ffffff
```

---

## 📱 Responsive Showcase

### Mobile (375px)
```
┌─────────┐
│ Producto│
│    1    │
└─────────┘

┌─────────┐
│ Producto│
│    2    │
└─────────┘
```

### Tablet (768px)
```
┌─────────┐  ┌─────────┐
│ Prod. 1 │  │ Prod. 2 │
└─────────┘  └─────────┘

┌─────────┐  ┌─────────┐
│ Prod. 3 │  │ Prod. 4 │
└─────────┘  └─────────┘
```

### Desktop (1280px+)
```
┌───────┐  ┌───────┐  ┌───────┐  ┌───────┐
│ Prod 1│  │ Prod 2│  │ Prod 3│  │ Prod 4│
└───────┘  └───────┘  └───────┘  └───────┘

┌───────┐
│ Prod 5│
└───────┘
```

---

## 🔧 Personalización Fácil

### Cambiar Espaciado
```tsx
// En page.tsx, ajusta el gap:
gap-x-8 gap-y-20  // Actual (lujo)
gap-x-6 gap-y-16  // Más compacto
gap-x-10 gap-y-24 // Más espacioso
```

### Cambiar Columnas Desktop
```tsx
// De 4 a 3 columnas:
lg:grid-cols-4 → lg:grid-cols-3
```

### Ajustar Velocidad de Animación
```tsx
// En ProductCard.tsx:
duration-700 → duration-500 // Más rápido
duration-700 → duration-1000 // Más lento
```

### Modificar Badge
```tsx
// Cambiar criterio:
const isValentineEdition = 
  product.category === 'Limited Edition' ||
  product.price > 900;
```

---

## ✨ Resultado Final

### Lo que Logra el Diseño

1. **Primera Impresión**: Clean, profesional, luxury
2. **Interacción**: Suave, responsive, intuitiva
3. **Jerarquía Visual**: Clara, nombre → precio → acción
4. **Respiración**: Mucho espacio en blanco
5. **Feedback**: Hover states claros pero sutiles

### Sensación al Usuario

- 🎨 "Se ve caro"
- ✨ "Está muy pulido"
- 🖱️ "Es agradable navegar"
- 📱 "Funciona perfecto en móvil"
- 🛍️ "Dan ganas de comprar"

---

## 📊 Métricas de Performance

### Optimizaciones Aplicadas

- ✅ `next/image` con lazy loading
- ✅ `priority={false}` en imágenes (carga diferida)
- ✅ `sizes` configurado para responsive
- ✅ Transiciones CSS puras (no JS)
- ✅ Estado local mínimo (`isHovered`)

### Tamaños de Imagen Sugeridos
```
Mobile: 640px width
Tablet: 384px width (50vw)
Desktop: 320px width (25vw)
```

---

**Estado**: ✅ **PRODUCTION READY**

El catálogo está completo y listo para recibir imágenes reales de productos.
