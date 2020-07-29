/**
 * Fetch all the characters page by page
 * @param {number} page 
 */
export async function fetchCharacters(page = 1) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`); // Template literal para concatenar
    const data = await response.json();//formatea los datos que se encuentran en response en formato .json
    return data;
};

/**
 * Fetch characters given a name
 * @param {string} characterName 
 */
export async function fetchCharactersByName(characterName) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(characterName)}`);
    const data = await response.json();
    return data;
}


/**
 * Fetch characters given a specie name
 * @param {string} specieName 
 */
export async function fetchCharactersBySpecie(specieName) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?species=${specieName}`);
    const data = await response.json();
    return data;
}

/**
 * Organiza una lista de personajes alfabeticamente
 * @param {string} order - a-z, z-a
 * @param {Array} list 
 */
export function sortAlphabetic(order, list) {
    if (!order) {// si order no tiene ningun valor a filtrar devuelve la lista
        return list;
    }
    //se clona el objeto - algoritmo para ordenar.
    const orderedList = [...list];
    orderedList.sort(function (a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            if (order === "z-a") {
                return 1;
            }
            return -1;
        }
        if (nameA > nameB) {
            if (order === "z-a") {
                return -1;
            }
            return 1;
        }

        // names must be equal
        return 0;
    });

    return orderedList;
}