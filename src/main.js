import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-amber-100 flex flex-col font-sans text-slate-800">

    <header class="bg-blue-950 text-white p-4 shadow-md">
      <nav class="container mx-auto flex justify-between items-center">
        <h1 class="text-white text-2xl font-bold tracking-wider">
          GRAND LINE
        </h1>
        <input
          type="text"
          placeholder="Buscar pirata..."
          class="px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-amber-500"
        />

      </nav>
    </header>

    <main class="grow container mx-auto p-6">
      <div class="bg-white/50 backdrop-blur-sm rounded-lg p-8 border-2 border-dashed border-amber-300 text-center">
        <p class="text-amber-800 font-medium">
          Aquí se desplegará la grilla con tus Web Components de One Piece. ¡El cascarón funciona!
        </p>
      </div>
    </main>

    <footer class="bg-slate-900 text-slate-400 text-center py-4 text-xs">
      Platzi Frontend Dev | Proyecto One Piece
    </footer>

  </div>
`