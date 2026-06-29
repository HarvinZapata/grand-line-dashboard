import Cards from './cards.js'

export default function Main() {
    return `
    <main class="grow container mx-auto p-6">
      <p class="text-amber-700 font-light text-sm text-center mb-4">MARINE HEADQUARTERS · CLASSIFIED REGISTRY</p>
      <h2 class="text-amber-950 font-extrabold text-5xl text-center mb-4">BOUNTY REGISTRY</h2>

      <div class="flex items-center justify-center gap-3 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" width="40" height="10" class="flex-1" preserveAspectRatio="none">
          <line x1="65" y1="5" x2="100" y2="5" stroke="#C10007" stroke-width="1"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="15" height="15">
          <g fill="none" stroke="#C10007" stroke-width="10" stroke-linecap="round" stroke-linejoin="round">
            <path d="M 48 118 A 66 66 0 1 1 152 118 C 152 126, 140 124, 140 134 L 140 168 Q 140 184, 124 184 L 76 184 Q 60 184, 60 168 L 60 134 C 60 124, 48 126, 48 118 Z" />
            <circle cx="70" cy="82" r="16" />
            <circle cx="130" cy="82" r="16" />
            <path d="M 93 114 l -5 10 M 107 114 l 5 10" />
            <path d="M 60 142 Q 60 152, 70 152 L 130 152 Q 140 152, 140 142" />
            <path d="M 76 140 v 24 M 92 140 v 24 M 108 140 v 24 M 124 140 v 24" />
          </g>
        </svg>

        <p class="text-red-700 font-bold text-xs">DEAD OR ALIVE</p>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="15" height="15">
          <g fill="none" stroke="#C10007" stroke-width="10" stroke-linecap="round" stroke-linejoin="round">
            <path d="M 48 118 A 66 66 0 1 1 152 118 C 152 126, 140 124, 140 134 L 140 168 Q 140 184, 124 184 L 76 184 Q 60 184, 60 168 L 60 134 C 60 124, 48 126, 48 118 Z" />
            <circle cx="70" cy="82" r="16" />
            <circle cx="130" cy="82" r="16" />
            <path d="M 93 114 l -5 10 M 107 114 l 5 10" />
            <path d="M 60 142 Q 60 152, 70 152 L 130 152 Q 140 152, 140 142" />
            <path d="M 76 140 v 24 M 92 140 v 24 M 108 140 v 24 M 124 140 v 24" />
          </g>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" width="40" height="10" class="flex-1" preserveAspectRatio="none">
          <line x1="0" y1="5" x2="35" y2="5" stroke="#C10007" stroke-width="1"/>
        </svg>
      </div>

      <div class="grid grid-cols-7 mx-auto max-w-2xl text-amber-700 mb-8">
        <aside class="col-span-2 text-center text-[10px] border-e border-amber-600">
          <p>ACTIVE RECORDS</p>
          <p id="contador" class="text-xl font-bold">0</p>
        </aside>

        <section class="col-span-3 text-center text-[10px] border-e border-amber-600">
          <p>TOTAL BOUNTIES</p>
          <p id="total-bounties" class="text-xl font-bold text-amber-950">฿ 0</p>
        </section>

        <aside class="col-span-2 text-center text-[10px]">
          <p>STATUS</p>
          <p id="status-label" class="text-xl font-bold text-red-700">LOADING</p>
        </aside>
      </div>

      ${Cards()}
    </main>
    `
}

