import imgAncla from '../assets/ancla.png'

export default function Header() {
    return `
        <header class="bg-blue-950 text-white p-4 shadow-md border-b-2 border-amber-500">
      <nav class="container mx-auto flex justify-around items-center gap-4">
        <div class="flex items-center">
          <img src=${imgAncla} alt="Logo" class="size-6 mr-4" />
          <h1 class="text-white text-2xl font-bold tracking-wider">
            Grand Line <span class="text-amber-500">Dashboard</span>
          </h1>
        </div>

        <input
          type="text"
          placeholder="Search pirates, ships, devil fruits..."
          class="w-dvw max-w-96 px-4 py-1 rounded-full outline-none border-2 border-blue-500 text-left text-amber-50 placeholder:text-amber-400/50  placeholder:italic placeholder:text-sm"
        />
      </nav>
    </header>
    `
}