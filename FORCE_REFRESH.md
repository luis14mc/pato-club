# 🔄 CÓMO FORZAR LA RECARGA DE CAMBIOS

## ❗ El Problema
Los cambios están guardados pero el navegador muestra versión en cache.

## ✅ SOLUCIÓN RÁPIDA

### En tu Navegador (http://localhost:3000)

**Chrome/Edge:**
```
Ctrl + Shift + R  (Hard Refresh)
o
Ctrl + F5
```

**Firefox:**
```
Ctrl + Shift + R
o
Ctrl + F5
```

**Si no funciona, prueba:**
```
1. Abre DevTools (F12)
2. Click derecho en el botón de recargar
3. Selecciona "Vaciar caché y recargar de forma forzada"
```

---

## 🔧 Si Aún No Se Ve

### Limpia el Cache de Next.js

En tu terminal de PowerShell:

```powershell
# 1. Detén el servidor (Ctrl + C en la terminal que corre pnpm run dev)

# 2. Limpia cache
Remove-Item -Path .next -Recurse -Force

# 3. Reinicia
pnpm run dev

# 4. Recarga el navegador con Ctrl + Shift + R
```

---

## 📋 Verificación Rápida

### Los cambios que YA están guardados:

✅ Panel del menú: `w-[85%] max-w-sm`
✅ Texto: `text-zinc-900` (más oscuro)
✅ Línea: `h-[2px] bg-zinc-800` (más gruesa)
✅ Enlaces secundarios: `text-base text-zinc-800`
✅ Overlay: `bg-black/60`
✅ Z-index: `z-50`

---

## 🎯 Pasos Exactos AHORA

1. **Ve a tu navegador** (http://localhost:3000)
2. **Presiona**: `Ctrl + Shift + R`
3. **Espera** 2 segundos
4. **Abre el menú** mobile (reduce ventana y click en ☰)
5. **Deberías ver**:
   - Texto negro sólido legible
   - Línea divisoria oscura
   - Overlay más oscuro (60%)
   - Panel 85% del ancho

---

## 🔍 Si TODAVÍA no se ve

Intenta esto en orden:

### Opción 1: Abrir en Incógnito
```
Ctrl + Shift + N  (Chrome/Edge)
Ctrl + Shift + P  (Firefox)

Luego ve a http://localhost:3000
```

### Opción 2: Limpiar TODO el Cache
```
En Chrome/Edge:
1. Ctrl + Shift + Delete
2. Selecciona "Imágenes y archivos en caché"
3. Click en "Borrar datos"
4. Recarga la página
```

### Opción 3: Reiniciar Completamente
```powershell
# En terminal de PowerShell:
taskkill /F /IM node.exe
Remove-Item -Path .next -Recurse -Force
pnpm run dev
```

Luego en navegador:
```
Ctrl + Shift + R
```

---

## ✨ TIP PRO

**Trabaja con DevTools abierto:**
```
F12 para abrir DevTools
→ Ve a Network tab
→ Marca "Disable cache"
→ Deja las DevTools abiertas

Ahora TODOS los cambios se verán inmediatamente sin cache
```

---

**Los cambios YA ESTÁN EN EL CÓDIGO. Solo necesitas refrescar el navegador.** 🔄
