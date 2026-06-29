import getData from '../utils/getData.js';
import ONE_PIECE_BOUNTIES from '../utils/bounties.js';
import ONE_PIECE_ALIAS from '../utils/alias.js';


export default function Cards() {
    showCharacter();
    return `
        <section id="cards-container" class="mt-12 mx-auto max-w-7xl grid grid-cols-4  gap-6">
        </section>
    `
}


const showCharacter = async () => {
    const characters = await getData();
    const container = document.getElementById('cards-container');
    const cleanedCharacters = characters.map(item => {
        return {
            id: item.character.mal_id, //id unico del personaje
            name: item.character.name,
            role: item.role,
            image: item.character.images.jpg.image_url,
            favorites: item.favorites, //Número de fans del personaje
            bounty: ONE_PIECE_BOUNTIES[item.character.mal_id] ?? "0 -", //Recompensa del personaje
            alias: ONE_PIECE_ALIAS[item.character.mal_id] || "Desconocida"//Alias del personaje
        }
    })

    //Filtro personajes principales
    const protagonistas = cleanedCharacters.filter(character => character.role === 'Main');


    //Creación del HTML dinámico para cada personaje
    const view = cleanedCharacters.map(character =>
        `
        <div class="bg-amber-100/50 text-amber-950 p-4 border-amber-800 border-3 shadow-md hover:shadow-2xl transition-shadow duration-300 text-center font-serif mx-6">
            <p class="text-center text-3xl font-bold">WANTED</p>
            <img src=${character.image} alt=${character.name} class="w-full h-72 object-cover mb-4 border-amber-800 border-2" />

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" width="100%" height="10" class="flex-1" preserveAspectRatio="none">
                <line x1="0" y1="5" x2="100" y2="5" stroke="oklch(66.6% 0.179 58.318)" stroke-width="1"/>
            </svg>

            <h3 class="text-lg font-extrabold font-sans mt-2">${character.name}</h3>
            <p class="text-amber-600 mb-2">"${character.alias}"</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" width="100%" height="10" class="flex-1" preserveAspectRatio="none">
                <line x1="0" y1="5" x2="100" y2="5" stroke="oklch(66.6% 0.179 58.318)" stroke-width="1"/>
            </svg>
            <p class="text-amber-700 font-light text-[10px] text-center mt-2">BOUNTY</p>
            <p class="text-xl font-extrabold font-sans text-amber-950"> ฿ ${character.bounty}</p>
        </div>`).join('');

    container.innerHTML = view;
};