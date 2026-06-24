# Entendiendo como funciona vite

tenemos un archivo de entrada (entry point) que es el main.js, es el primer archivo JavaScript que se ejecuta cuando cargas la página.

## Responsabilidades

1. Importa dependencias y estilos
import './style.css'                    // Importa los estilos

2. Manipula el DOM.
document.querySelector('#app').innerHTML = `...`  // Genera HTML

3. Ejecuta funciones de la APP
setupCounter(document.querySelector('#counter'))

### Lo que realmente hace

Monta el contenido HTML en `<div id="app"></div>` - En el archivo Raiz index.html
Carga y conecta los estilos CSS
Configura componentes como el contador
Es responsable de inicializar tu aplicación completa.

Proceso detallado:
Paso Qué ocurre

1. El navegador carga index.html
2. Lee `<script type="module" src="/src/main.js">`
3. Vite intercepta y procesa main.js
4. main.js importa estilos, componentes y assets
5. Todo se "bundlea" (empaqueta) automáticamente
6. Vite inyecta el resultado en el navegador
7. Ves la página web final

### Analogía

main.js = El motor de arranque de tu app
index.html = El marco (estructura)
main.js = Lo que hace que todo funcione

### Concepto: HMR (Hot Module Replacement)

Vite detecta cambios en main.js y actualiza instantáneamente tu navegador sin refrescar la página completa. Por eso el template dice:

"Edit main.js and save to test HMR"

Cuando editas main.js:

1. Guardas el archivo
2. Vite detecta el cambio
3. Recarga solo lo necesario (sin perder el estado)
4. Ves los cambios en 50-100ms
