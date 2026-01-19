# 🚀 Cómo Iniciar y Detener el Servidor

## ▶️ Para INICIAR el Servidor

### Opción 1: Desde tu Terminal en Cursor
```powershell
npm run dev
```

### Opción 2: Desde PowerShell Externa
```powershell
cd C:\Users\sopor\pato-club
npm run dev
```

Verás:
```
▲ Next.js 16.1.2 (Turbopack)
- Local:         http://localhost:3000
✓ Ready in XXXms
```

Luego abre: **http://localhost:3000**

---

## ⏹️ Para DETENER el Servidor

### Si está en tu Terminal
1. Ve a la terminal donde corre `npm run dev`
2. Presiona: **Ctrl + C**
3. Espera a que diga "Process exited"

### Si No Responde (Forzar Detención)
```powershell
taskkill /F /IM node.exe
```

Este comando detiene TODOS los procesos de Node.js de una vez.

---

## 🔄 Para REINICIAR (con cache limpio)

```powershell
# 1. Detener (si está corriendo)
taskkill /F /IM node.exe

# 2. Limpiar cache
Remove-Item -Path .next -Recurse -Force

# 3. Iniciar
npm run dev
```

---

## 🆘 Si Dice "Port 3000 is in use"

Significa que hay otro proceso usando el puerto 3000.

**Solución rápida:**
```powershell
taskkill /F /IM node.exe
npm run dev
```

---

## ✅ Estado Actual

**Servidor**: ⏹️ DETENIDO  
**Cache**: 🧹 LIMPIADO  
**Listo para**: Iniciar cuando quieras

---

## 📝 Comandos Útiles

### Ver si hay procesos de Node corriendo
```powershell
Get-Process node -ErrorAction SilentlyContinue
```

### Matar proceso específico por PID
```powershell
taskkill /F /PID 12345
```

### Ver qué está usando el puerto 3000
```powershell
netstat -ano | findstr :3000
```

---

## 🎯 Para Continuar Trabajando

1. **Abre tu terminal** en Cursor (Ctrl + `)
2. **Ejecuta**: `npm run dev`
3. **Abre navegador**: http://localhost:3000
4. **Para detener**: Ctrl + C en la terminal

---

**Tip**: Mantén la terminal del servidor visible mientras trabajas. Así verás los errores en tiempo real.
