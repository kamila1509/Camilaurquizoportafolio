# Portafolio — Camila Urquizo

Sitio de portafolio personal (bilingüe EN/ES): hero, experiencia, stack, formación y proyectos, con tema claro/oscuro y despliegue estático.

## Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 6](https://vitejs.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) + [tw-animate-css](https://github.com/syntaxfm/tw-animate-css)
- [Motion](https://motion.dev/) (animaciones)
- [Lucide](https://lucide.dev/) (iconos)

## Requisitos

- Node.js 20+ (recomendado)
- npm (incluido con Node)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre la URL que muestre la terminal (por defecto `http://localhost:5173`).

## Build y vista previa

```bash
npm run build
npm run preview
```

## Despliegue en GitHub Pages

El repositorio incluye un workflow en `.github/workflows/deploy-github-pages.yml` que construye y publica el contenido de `dist` en **GitHub Pages** al hacer push a `main` o `master`.

1. En el repositorio: **Settings → Pages**
2. **Build and deployment → Source: GitHub Actions**
3. Revisa en la pestaña **Actions** del repositorio que el workflow se ejecute correctamente (el fichero del workflow declara `pages: write` e `id-token: write`).

La base de ruta de Vite (`/nombre-del-repo/`) se calcula con la variable de entorno `GITHUB_REPOSITORY` en el CI, para que los assets (JS, CSS, imágenes, PDF) carguen correctamente. Para un sitio de usuario u organización en la raíz del dominio (repo `usuario.github.io`), el proyecto ajusta la base a `/`. También se puede forzar con `VITE_BASE` al construir (ver `vite.config.ts`).

## Proyecto de diseño (referencia)

El diseño inicial tomó referencia de un layout en Figma: [Landing Page para Portafolio](https://www.figma.com/design/ZT34d0Opjoh2jsBv3MTDFN/Landing-Page-para-Portafolio).

## Licencia

Código y contenido del portafolio: uso personal de la autora.
