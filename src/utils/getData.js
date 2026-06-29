const API = 'https://api.jikan.moe/v4/anime/21/characters';

const getData = async () => {
    try {
        const response = await fetch(API);
        const data = await response.json();
        return data.data
    }catch (error) {
        console.error('Error en la travesia de datos:', error);
    }
}

export default getData;