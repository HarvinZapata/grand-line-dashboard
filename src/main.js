import './style.css'
import './variables.css'
import Header from './components/Header.js'
import Main from './components/Main.js'
import { initCards } from './components/cards.js'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-amber-100/50 flex flex-col font-sans text-slate-800">

    ${Header()}
    ${Main()}

    <footer class="bg-slate-900 text-slate-400 text-center py-4 text-xs">
      Platzi Frontend Dev | Proyecto One Piece | Grand Line Dashboard | Hazavi 2024 | Clasification: Top Secret | Marine Headquarters
    </footer>

  </div>
`

initCards();