import luffyImage from '../assets/monkey.jpg';

export default function Cards() {
    return `
    <section class="mt-12 mx-auto max-w-7xl grid grid-cols-4  gap-6">

        <div class="bg-amber-100/50 text-amber-950 p-4 border-amber-800 border-3 shadow-md hover:shadow-2xl transition-shadow duration-300 text-center font-serif">
            <p class="text-center text-3xl font-bold">WANTED</p>
            <img src=${luffyImage} alt="Monkey D. Luffy" class="w-full h-64 object-cover mb-4 border-amber-800 border-2" />

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" width="100%" height="10" class="flex-1" preserveAspectRatio="none">
                <line x1="0" y1="5" x2="100" y2="5" stroke="oklch(66.6% 0.179 58.318)" stroke-width="1"/>
            </svg>

            <h3 class="text-lg font-extrabold font-sans mt-2">MONKEY D. LUFFY</h3>
            <p class="text-amber-600 mb-2">"Straw Hat"</p>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" width="100%" height="10" class="flex-1" preserveAspectRatio="none">
                <line x1="0" y1="5" x2="100" y2="5" stroke="oklch(66.6% 0.179 58.318)" stroke-width="1"/>
            </svg>
            <p class="text-amber-700 font-light text-[10px] text-center mt-2">BOUNTY</p>
            <p class="text-xl font-extrabold font-sans text-amber-950"> ฿ 1,500,000,000</p>
        </div>

    </section>
    `
}