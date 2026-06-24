# Bitácora 02: Instalación y Configuración de Tailwind CSS

**Fecha:** 21/06/2026
**Proyecto:** Grand Line Dashboard (One Piece)
**Objetivo:** Instalar Tailwind CSS en un entorno de Vite (Vanilla JS), configurar los motores de procesamiento de CSS y preparar el archivo de estilos global.

## 1. Instalación de Dependencias

A diferencia de un CDN (Content Delivery Network o Red de Entrega de Contenidos), usar Tailwind en un entorno profesional requiere instalarlo a través de NPM para que pueda compilar solo las clases que realmente usemos (purgado de CSS).

**Comando ejecutado:**
`npm install -D tailwindcss postcss autoprefixer`

*Nota:* - La bandera `-D` instala estas herramientas como "Dependencias de Desarrollo". No irán al código final de producción, solo me ayudan a construir el proyecto.

- **PostCSS** es el motor que transforma el código CSS usando plugins.

- **Autoprefixer** es un plugin que añade automáticamente los prefijos de los navegadores (como `-webkit-` o `-moz-`) para asegurar compatibilidad.

## 2. Creación de Archivos de Configuración

Para que Tailwind y PostCSS sepan cómo comportarse, necesito generar sus archivos de configuración iniciales.

**Comando ejecutado:**
`npx tailwindcss init -p`

*¿Por qué la bandera `-p`?* Esto es un salvavidas. Genera dos archivos de golpe: `tailwind.config.js` y `postcss.config.js`. Sin el `-p`, tendría que crear el archivo de PostCSS manualmente.

## 3. Configuración de Rutas (El paso donde todos fallan)

Tailwind necesita saber exactamente en qué archivos voy a escribir sus clases para poder escanearlos y compilar el CSS final. Para ello, modifiqué el archivo `tailwind.config.js` recién creado:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Escanea todos los archivos JS en la carpeta src
  ],
  theme: {
    extend: {
      // Aquí en el futuro podré agregar los colores personalizados de One Piece (ej. pergamino, rojo pirata)
    },
  },
  plugins: [],
}