import getData from '../utils/getData.js';
import ONE_PIECE_BOUNTIES from '../utils/bounties.js';
import ONE_PIECE_ALIAS from '../utils/alias.js';
import { calculateTotals, filterCharacters } from '../utils/characters.js';

export default function Cards() {
    return `
        <section class="mt-8">
            <div id="search-feedback" class="text-center text-sm text-amber-700 mb-4"></div>
            <div id="cards-container" class="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"></div>
        </section>
    `;
}

const renderCharacters = (characters) => {
    const container = document.getElementById('cards-container');
    const feedback = document.getElementById('search-feedback');

    if (!container) return;

    if (!characters.length) {
        container.innerHTML = '<p class="col-span-full text-center text-amber-800">No se encontraron registros.</p>';
        feedback.textContent = 'No hay resultados para esa búsqueda.';
        return;
    }

    feedback.textContent = `${characters.length} registros encontrados`; //textContent cambia el texto del elemento, innerHTML cambia el contenido HTML del elemento, es decir que si se pone un <p> dentro de innerHTML, se va a renderizar como un párrafo, mientras que textContent lo va a mostrar como texto plano.

    const view = characters.map((character) => `
        <article class="bg-amber-100/50 text-amber-950 p-4 border-amber-800 border-3 shadow-md hover:shadow-2xl transition-shadow duration-300 text-center font-serif">
            <p class="text-center text-3xl font-bold">WANTED</p>
            <img src="${character.image}" alt="${character.name}" class="w-full h-72 object-cover mb-4 border-amber-800 border-2" />

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" width="100%" height="10" class="flex-1" preserveAspectRatio="none">
                <line x1="0" y1="5" x2="100" y2="5" stroke="oklch(66.6% 0.179 58.318)" stroke-width="1"/>
            </svg>

            <h3 class="text-lg font-extrabold font-sans mt-2">${character.name}</h3>
            <p class="text-amber-600 mb-2">"${character.alias}"</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" width="100%" height="10" class="flex-1" preserveAspectRatio="none">
                <line x1="0" y1="5" x2="100" y2="5" stroke="oklch(66.6% 0.179 58.318)" stroke-width="1"/>
            </svg>
            <p class="text-amber-700 font-light text-[10px] text-center mt-2">BOUNTY</p>
            <p class="text-xl font-extrabold font-sans text-amber-950">฿ ${character.bounty}</p>
        </article>`).join('');

    container.innerHTML = view;
};

const updateSummary = (characters) => {
    const counter = document.getElementById('contador');
    const totalBounties = document.getElementById('total-bounties');
    const statusLabel = document.getElementById('status-label');

    if (!counter || !totalBounties || !statusLabel) return;

    const { count, totalBounty } = calculateTotals(characters);
    counter.textContent = `${count}`;
    totalBounties.textContent = `฿ ${totalBounty}`;
    statusLabel.textContent = characters.length ? 'ACTIVE THREAT' : 'NO MATCH';
};

const showCharacter = async () => {
    const container = document.getElementById('cards-container');
    if (!container) return;

    container.innerHTML = '<p class="text-center text-amber-800">Cargando registros...</p>';

    try {
        const characters = await getData();
        const cleanedCharacters = characters.map((item) => ({
            id: item.character.mal_id,
            name: item.character.name,
            role: item.role,
            image: item.character.images.jpg.image_url,
            bounty: ONE_PIECE_BOUNTIES[item.character.mal_id] ?? '0 -',
            alias: ONE_PIECE_ALIAS[item.character.mal_id] || 'Desconocida'
        }));

        const protagonists = cleanedCharacters.filter((character) => character.role === 'Main');
        renderCharacters(cleanedCharacters);
        updateSummary(cleanedCharacters);
        const searchInput = document.querySelector('input[type="text"]');

        if (searchInput) {
            searchInput.addEventListener('input', (event) => {
                const query = event.target.value;
                const filteredCharacters = filterCharacters(cleanedCharacters, query);
                renderCharacters(filteredCharacters);
                updateSummary(filteredCharacters);
            });
        }
    } catch (error) {
        container.innerHTML = '<p class="text-center text-red-700">No se pudieron cargar los registros.</p>';
        console.error('Error cargando personajes', error);
    }
};

export function initCards() {
    showCharacter();
}