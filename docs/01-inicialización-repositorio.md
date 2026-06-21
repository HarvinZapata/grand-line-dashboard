# Bitácora 01

## Inicialización del Proyecto, Git y GitHub

**Fecha:** 21/06/2026

**Proyecto:** Grand Line Dashboard (One Piece)

**Objetivo:** Crear la estructura base del proyecto, inicializar el control de versiones local con git y conectarlo con el repositorio remoto en GitHub.

### 1. Creación del Proyecto con Vite

Para este proyecto decidí usar **Vite** en lugar de configuraciones manuales con Webpack o usar plantillas pesadas. Vite me permite tener un entorno de desarrollo ultrarrápido y un servidor local que se actualiza en tiempo real, con la aplicación de Hot Module Replacement.

**Comando ejecutado:**

`npm create vite@latest grand-line-dashboard -- --template vanilla` - código completo en la terminal.

***Nota:*** Elegí el template `vanilla` porque el objetivo es dominar las bases de JavaScript (Vanilla JS) y los Web Components antes de saltar a frameworks como React o Vue.

***Short:*** `npm create vite@latest`, este comando en terminal me pregunta automáticamente el nombre del proyecto 'grand-line-dashboard', que template voy a utilizar, que para este proyecto se utilizó vanilla, JavaScript, también pregunta si se van instalar las dependencias inmediatamente, sino...

Una vez creado el proyecto con vite, entrar a la carpeta del proyecto e instalar las dependencias iniciales:
`cd grand-line-dashboard` - Para ingresar a la carpeta del proyecto
`npm install` - instalación de dependencias npm.

### 2. Inicialización de Git (Entorno Local)

El control de versiones se configura desde el minuto cero, no cuando el proyecto ya está terminado.

**Comandos ejecutados:**
`git init`
`git add .`
`git commit -m "inicialización del proyecto con Vite"`

*¿Por qué "chore"?* Es una buena práctica usar Conventional Commits. "chore" indica tareas de mantenimiento o configuración que no modifican código de producción.

## 3. Conexión con GitHub (Entorno Remoto)

Para respaldar mi código y construir mi portafolio profesional, conecté este repositorio local con GitHub.

**Pasos realizados:**
1. Fui a mi perfil (https://github.com/HarvinZapata) y creé un nuevo repositorio vacío llamado `grand-line-dashboard` (sin README ni .gitignore, porque Vite ya me generó el .gitignore).
2. Vinculé mi repositorio local con el remoto usando los siguientes comandos:

`git remote add origin https://github.com/HarvinZapata/grand-line-dashboard.git`
`git branch -M main`
`git push -u origin main`

*Recordatorio:* El comando `git branch -M main` renombra la rama principal a `main` (el estándar actual, reemplazando a `master`). El flag `-u` (upstream) le dice a Git que, en el futuro, solo necesite escribir `git push` para subir los cambios a esta rama.

## 4. Creación de esta Bitácora

Para asegurar el aprendizaje activo (Active Recall) y no caer en el *Tutorial Hell*, creé una carpeta dedicada a la documentación.

**Comandos ejecutados:**
`mkdir docs`
`cd docs`
`touch 01-inicializacion-y-repositorio.md`

De esta manera, el código y la documentación viven en el mismo ecosistema. En el `README.md` principal dejaré un índice apuntando a estos archivos para que los reclutadores puedan ver mi proceso de pensamiento, no solo el resultado final.