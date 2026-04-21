# 🐶 Callie - Mascota Kawaii Integration Guide

Callie es la adorable mascota de este portfolio, una perrita tierna con un pañuelo rojo que acompaña a los usuarios a través de toda la experiencia.

## 📍 Ubicaciones de Callie

### 1. **Chatbot (ChatBot.tsx)** 🤖
- **FAB (Floating Action Button)**: Callie aparece en un botón flotante en la esquina inferior izquierda
- **Avatar del Chat**: También aparece en el header del chat como avatar principal
- **Animación**: Rebote vertical continuo
- **Efecto Dark Mode**: Glow rosa neón (`drop-shadow-[0_0_15px_rgba(255,110,199,0.8)]`)

```tsx
// FAB con Callie
<motion.img
  src={callieImg}
  alt="Callie"
  className="w-16 h-16 dark:drop-shadow-[0_0_15px_rgba(255,110,199,0.8)]"
  animate={{ y: [0, -5, 0] }}
/>
```

### 2. **Hero Section (HeroSection.tsx)** ⭐
- **Posición**: Flotando junto al nombre de Camila Urquizo
- **Detalle Especial**: Tiene un sticker de React (⚛️) en su pañuelo rojo
- **Animación**: Movimiento flotante + rotación suave
- **Efecto Dark Mode**: Glow intenso (`drop-shadow-[0_0_20px_rgba(255,110,199,0.9)]`)

```tsx
// Callie con React sticker
<img src={callieImg} className="w-24 h-24 lg:w-32 lg:h-32" />
<motion.div className="absolute top-2 right-2 w-8 h-8 bg-[#61DAFB] rounded-full">
  ⚛️
</motion.div>
```

### 3. **Experience Section (ExperienceSection.tsx)** 💼
- **Posición**: Al final de la línea de tiempo (timeline)
- **Rol**: Guía que acompaña los logros profesionales
- **Animación**: Rebote vertical suave
- **Efecto Dark Mode**: Glow rosa (`drop-shadow-[0_0_18px_rgba(255,110,199,0.8)]`)

```tsx
// Callie como guía
<img 
  src={callieImg} 
  alt="Callie Guide" 
  className="w-20 h-20 dark:drop-shadow-[0_0_18px_rgba(255,110,199,0.8)]" 
/>
```

### 4. **Loader (KawaiiLoader.tsx)** ⏳
- **Uso**: Pantalla de carga inicial (2 segundos)
- **Animación**: Rebote grande + rotación + sparkles alrededor
- **Efecto Dark Mode**: Glow máximo (`drop-shadow-[0_0_25px_rgba(255,110,199,1)]`)

```tsx
// Callie rebotando mientras carga
<motion.img
  src={callieImg}
  className="w-32 h-32 dark:drop-shadow-[0_0_25px_rgba(255,110,199,1)]"
  animate={{ y: [0, -40, 0], rotate: [0, 10, -10, 0] }}
/>
```

### 5. **404 Page (NotFound404.tsx)** 😢
- **Posición**: En el centro del número "0" del "404"
- **Estado**: Triste (con emoji 😢 como overlay)
- **Animación**: Movimiento flotante + rotación sutil
- **Efecto Dark Mode**: Glow rosa (`drop-shadow-[0_0_22px_rgba(255,110,199,0.9)]`)

```tsx
// Callie triste en 404
<img src={callieImg} className="w-24 h-24 lg:w-32 lg:h-32 dark:drop-shadow-[0_0_22px_rgba(255,110,199,0.9)]" />
<motion.div className="absolute -top-2 -right-2 text-3xl">😢</motion.div>
```

## 🎨 Efectos Dark Mode

En modo oscuro, Callie tiene un **glow rosa neón** para mantener su visibilidad y esencia kawaii:

| Componente | Intensidad Glow | Color |
|------------|----------------|-------|
| ChatBot FAB | 15px | `rgba(255,110,199,0.8)` |
| ChatBot Avatar | 10px | `rgba(255,110,199,0.6)` |
| Hero Section | 20px | `rgba(255,110,199,0.9)` |
| Experience Guide | 18px | `rgba(255,110,199,0.8)` |
| Loader | 25px | `rgba(255,110,199,1)` |
| 404 Page | 22px | `rgba(255,110,199,0.9)` |

## 🔧 Implementación Técnica

### Importación
```tsx
import callieImg from "../../imports/callie.png";
```

### Tamaños Recomendados
- **Pequeño** (Guía): `w-20 h-20` (80px)
- **Mediano** (FAB, Avatar): `w-16 h-16` (64px) o `w-12 h-12` (48px)
- **Grande** (Hero, 404): `w-24 h-24 lg:w-32 lg:h-32` (96px/128px)
- **Extra Grande** (Loader): `w-32 h-32` (128px)

### Animaciones Comunes
```tsx
// Rebote vertical
animate={{ y: [0, -10, 0] }}
transition={{ duration: 2.5, repeat: Infinity }}

// Rotación suave
animate={{ rotate: [0, 5, -5, 0] }}
transition={{ duration: 3, repeat: Infinity }}
```

## 💡 Tips de Diseño

1. **Siempre incluye `drop-shadow-lg`** en modo claro
2. **Siempre incluye el glow rosa** en modo oscuro con `dark:drop-shadow-[...]`
3. **Usa Motion de motion/react** para animaciones suaves
4. **Mantén la proporción 1:1** (width = height)
5. **Añade `alt="Callie [contexto]"`** para accesibilidad

## 🚀 Cómo Usar Componentes

### Usar el Loader
```tsx
import { KawaiiLoader } from "./components/KawaiiLoader";

// Mostrar mientras carga
{isLoading && <KawaiiLoader language={language} />}
```

### Usar 404 Page
```tsx
import { NotFound404 } from "./components/NotFound404";

// En tu router
<NotFound404 language={language} onGoHome={() => navigate('/')} />
```

---

✨ **Callie hace que esta landing page sea única, adorable y memorable!** 🐶💖
