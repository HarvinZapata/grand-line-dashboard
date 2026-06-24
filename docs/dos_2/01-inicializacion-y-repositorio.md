# Bitacora 1

## Inicialización del proyecto con vite

`npm create vite@latest` luego le damos el nombre al proyecto que vamos a crear en vite, seleccionamos el template a utilizar y JavaScript.

Posterior a ello instalamos las dependencias del proyecto con `npm install`.

En donde para visualizar el proyecto ejecutamos el comando `npm run dev`.

## 2. Inicialización con Git

**Comandos ejecutados:**
`git init` -> Para iniciar con git

Luego agregamos los comabios y generamos nuestro primer commit con los siguientes comandos

`git add .`
`git commit -m "chore:inicialización del proyecto con Vite"`

*¿Por qué "chore"?* Es una buena práctica usar Conventional Commits. "chore" indica tareas de mantenimiento o configuración que no modifican código de producción.

## 3. Conexión con GitHub (Entorno Remoto)

Una vez creado el repositorio en GitHub, en el entorno local ejecutamos el siguiente código

`git remote add origin https://github.com/HarvinZapata/grand-line-dashboard.git`

y subimos los cambios al repositorio remoto `git push -u origin main`

Nota: El flag `-u` (upstream) le dice a Git que, en el futuro, solo necesite escribir `git push` para subir los cambios a esta rama.
