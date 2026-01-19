# 🎬 Cómo Usar el ProductModal

## 🚀 Quick Start

El modal ya está integrado en la página principal. Solo necesitas:

1. **Click en cualquier producto** del catálogo
2. Se abre el modal con animación
3. Selecciona talla y color
4. Click en "COMPRAR VÍA WHATSAPP"
5. Se abre WhatsApp con mensaje pre-escrito

---

## 📝 Paso a Paso

### 1. Abrir el Modal

El modal se abre automáticamente cuando haces click en una tarjeta de producto:

```tsx
<ProductCard
  product={product}
  onClick={handleProductClick}  // ← Abre el modal
/>
```

### 2. Seleccionar Talla

Click en uno de los botones de talla:
- **XS-S**: Extra Small - Small
- **M-L**: Medium - Large  
- **XL**: Extra Large
- **XXL**: Extra Extra Large

**Visual:**
- Talla no seleccionada: Borde gris
- Talla seleccionada: Fondo negro, texto blanco

### 3. Seleccionar Color

Click en uno de los círculos de color:
- ⚫ **Negro**: Para el clásico atemporal
- 🔴 **Rojo**: Para destacar
- ⚪ **Blanco**: Para el minimalismo

**Visual:**
- Color no seleccionado: Ring gris delgado
- Color seleccionado: Ring negro grueso + escala

### 4. Comprar

Click en **"COMPRAR VÍA WHATSAPP"**

Se abre WhatsApp con mensaje:
```
Hola Pato Club, me interesa el producto *Pato Club anti-valentines/negro* 
(Código: PC001800) en talla *M-L* y color *Negro*. 
¿Tienen disponibilidad?
```

---

## 🔐 Cerrar el Modal

### 3 Formas de Cerrar:

**1. Botón X**
- Click en la X de la esquina superior derecha

**2. Click Fuera**
- Click en cualquier parte del fondo oscuro

**3. Tecla ESC**
- Presiona `Esc` en tu teclado

---

## ⚙️ Configuración

### Cambiar el Número de WhatsApp

**Archivo**: `components/ProductModal.tsx`  
**Línea**: 63

```typescript
// Busca esta línea:
const whatsappUrl = `https://wa.me/50433333333?text=${...}`;

// Cámbiala por tu número real:
const whatsappUrl = `https://wa.me/50412345678?text=${...}`;
```

**Formato del Número:**
- Sin espacios ni guiones
- Con código de país
- Sin el + inicial
- Ejemplo Honduras: 50412345678
- Ejemplo España: 34612345678

### Cambiar las Tallas Disponibles

**Archivo**: `components/ProductModal.tsx`  
**Línea**: 13

```typescript
// Actual:
const TALLAS = ['XS-S', 'M-L', 'XL', 'XXL'];

// Cambiar a:
const TALLAS = ['S', 'M', 'L', 'XL', 'XXL'];
```

### Agregar Más Colores

**Archivo**: `components/ProductModal.tsx`  
**Líneas**: 14-18

```typescript
// Actual:
const COLORES = [
  { name: 'Negro', hex: '#000000' },
  { name: 'Rojo', hex: '#DC2626' },
  { name: 'Blanco', hex: '#FFFFFF' },
];

// Agregar más:
const COLORES = [
  { name: 'Negro', hex: '#000000' },
  { name: 'Rojo', hex: '#DC2626' },
  { name: 'Blanco', hex: '#FFFFFF' },
  { name: 'Azul', hex: '#3B82F6' },
  { name: 'Verde', hex: '#10B981' },
];
```

---

## 🎨 Personalizar el Mensaje de WhatsApp

**Archivo**: `components/ProductModal.tsx`  
**Líneas**: 57-61

```typescript
// Mensaje actual:
const mensaje = `Hola Pato Club, me interesa el producto *${product.name}* (Código: ${product.id}) en talla *${tallaSeleccionada}* y color *${colorSeleccionado}*. ¿Tienen disponibilidad?`;

// Personaliza como quieras:
const mensaje = `¡Hola! 👋
Quiero ordenar:
📦 Producto: ${product.name}
🔢 Código: ${product.id}
👕 Talla: ${tallaSeleccionada}
🎨 Color: ${colorSeleccionado}
💰 Precio: L. ${product.price}

¿Está disponible?`;
```

---

## 🐛 Resolución de Problemas

### El Modal No Se Abre

**Causa**: Posible error de JavaScript

**Solución**:
1. Abre la consola del navegador (F12)
2. Busca errores en rojo
3. Recarga la página con `Ctrl + Shift + R`

### El Botón "COMPRAR" No Funciona

**Causa**: No has seleccionado talla o color

**Solución**:
- El botón está deshabilitado (gris) hasta que selecciones ambos
- Selecciona una talla Y un color
- El botón se pondrá negro y será clickeable

### WhatsApp No Se Abre

**Causa 1**: Bloqueador de pop-ups

**Solución**:
- Permite pop-ups para localhost:3000
- En Chrome: Click en el icono de "Pop-up bloqueado" en la barra de direcciones

**Causa 2**: WhatsApp no instalado

**Solución**:
- Instala WhatsApp Desktop
- O usa WhatsApp Web (se abrirá en el navegador)

### Las Animaciones No Son Suaves

**Causa**: Rendimiento del navegador

**Solución**:
1. Cierra otras pestañas
2. Verifica que no estés en modo "bajo consumo"
3. Actualiza tu navegador

---

## 📱 Testing en Diferentes Dispositivos

### Desktop
- Abre en pantalla completa
- Verifica layout de 2 columnas
- Prueba los 3 métodos de cierre

### Tablet
- Reduce la ventana a ~800px
- Verifica que siga siendo 2 columnas
- Prueba touch en los selectores

### Mobile
- Reduce a ~400px
- Verifica layout de 1 columna (imagen arriba)
- Prueba scroll si es necesario

---

## ✨ Tips Pro

### 1. Navegar Rápido
- Usa `Esc` para cerrar rápidamente
- Click en el fondo oscuro para cerrar y volver al catálogo

### 2. Probar Productos
- Abre varios productos seguidos
- Las selecciones se resetean automáticamente

### 3. Compartir con Clientes
- El enlace de WhatsApp se abre en nueva pestaña
- Puedes copiar el mensaje antes de enviar
- Personaliza el mensaje según el cliente

---

## 🎯 Flujo de Compra Completo

```
1. Usuario ve catálogo
   ↓
2. Click en producto
   ↓
3. Modal se abre con animación
   ↓
4. Usuario lee descripción
   ↓
5. Selecciona talla (botón se pone negro)
   ↓
6. Selecciona color (círculo con ring)
   ↓
7. Click en "COMPRAR VÍA WHATSAPP"
   ↓
8. WhatsApp se abre en nueva pestaña
   ↓
9. Usuario ve mensaje pre-escrito
   ↓
10. Usuario puede editar y enviar
```

---

## 🔄 Actualizar en Vivo

Cuando cambies algo en el código:

```powershell
# El servidor recarga automáticamente
# Solo recarga el navegador:
Ctrl + Shift + R
```

---

**¿Listo para vender?** 🦆💰

Ahora tienes un sistema completo de e-commerce conectado directo a WhatsApp. Cada click en "COMPRAR" es una venta potencial.
