# 🔄 Instrucciones para Reiniciar el Servidor

## Problema Actual
Hay dos instancias de Next.js corriendo (puerto 3000 y 3001), lo que causa conflictos.

## Solución

### Opción 1: Desde tu terminal (PowerShell)
```powershell
# 1. Presiona Ctrl + C en la terminal donde corre npm run dev
# 2. Espera a que se detenga completamente
# 3. Limpia el cache de Next.js
Remove-Item -Path .next -Recurse -Force
# 4. Reinicia el servidor
npm run dev
```

### Opción 2: Matar todos los procesos de Node
```powershell
# Mata todos los procesos de Node.js
taskkill /F /IM node.exe

# Limpia el cache
Remove-Item -Path .next -Recurse -Force

# Inicia de nuevo
npm run dev
```

### Opción 3: Desde VS Code/Cursor
1. Ve a la terminal donde corre el servidor
2. Presiona `Ctrl + C`
3. Espera a que diga "Process exited"
4. Ejecuta: `npm run dev`

## Verificación
Después de reiniciar, deberías ver:
```
▲ Next.js 16.1.2 (Turbopack)
- Local:         http://localhost:3000
✓ Ready in XXXms
```

## ¿Qué Cambiamos?

### Antes (Configuración Incorrecta)
- ❌ Tenía `tailwind.config.ts` (sintaxis v3)
- ❌ Usaba `@tailwind base/components/utilities` (v3)
- ❌ Configuración mixta

### Ahora (Configuración Correcta v4)
- ✅ Sin `tailwind.config.ts` (no se necesita en v4)
- ✅ `@import "tailwindcss";` en globals.css
- ✅ Configuración en `@theme {}` dentro del CSS
- ✅ PostCSS configurado correctamente

## Si Sigue Sin Funcionar
Prueba reconstruir todo desde cero:

```powershell
# 1. Detén el servidor (Ctrl + C)

# 2. Borra node_modules y cache
Remove-Item -Path node_modules -Recurse -Force
Remove-Item -Path .next -Recurse -Force
Remove-Item -Path package-lock.json -Force

# 3. Reinstala dependencias
npm install

# 4. Inicia el servidor
npm run dev
```

## Lo que Deberías Ver Ahora
- Navbar sticky con backdrop blur
- Logo "PATO CLUB" con Playfair Display
- Colores suaves (#fafafa bg, #1a1a1a texto)
- Iconos de Lucide React funcionando
- Hover states y transiciones suaves
