// Mantiene un registro de la cantidad de paginas de personajes que tiene la API
let totalPages = 30;
let filtersApplied = false;
let sortOrder = '';
let charactersList = [];
let charactersContainer = document.querySelector('#characters-container');

/*get characters*/
export async function getCharacters(currentPage = 1, isLoading, loadingIndicator) {
    // Si currentPage es 31 ya no dejará pedir más datos a la API porque quiere decir que llegamos al final y ya pedimos todos los personajes
    if (currentPage <= totalPages && !filtersApplied) {

        // Añadimos la clase active a nuestro Loading indicator en el HTML
        loadingIndicator.classList.add('active');
        // Con la variable isLoading podemos saber si la peticion está cargando
        isLoading = true;
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`); // Template literal para concatenar
        const data = await response.json();
        // Cuando termina la peticion ponemos isLoading como falso para indicar que terminó y ya no hay nada cargando
        isLoading = false;
        // Quitamos la clase active de nuestro loading indicator en el HTML
        loadingIndicator.classList.remove('active');
        totalPages = data.info.pages;
        charactersList = charactersList.concat(data.results);
        updateCharactersHTML();
    }
};

//Buscador//

const searchForm = document.querySelector('#searchIn');
const searchButton = document.querySelector('#searchButton');

if (searchButton) {
    searchButton.addEventListener('click', filter)
}

export async function filter() {

    if (searchForm.value) {
        filtersApplied = true;
    } else {
        filtersApplied = false;
    }
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(searchForm.value)}`);
    const data = await response.json();
    charactersList = data.results;
    updateCharactersHTML();
}

/*Especies function*/

const speciesSort = document.querySelector('#filter-input-species');

if (speciesSort) {
    speciesSort.addEventListener('change', species)
}

export async function species () {

    if (speciesSort.value) {
        filtersApplied = true;
    } else {
        filtersApplied = false;
    }
    const response = await fetch(`https://rickandmortyapi.com/api/character/?species=${speciesSort.value}`);
    const data = await response.json();
    charactersList = data.results;
    updateCharactersHTML();
}


/**
 * Actualiza el HTML de los personajes
 */
export function updateCharactersHTML() {
    charactersList = sortAlphabetic(sortOrder, charactersList);
    let documentFragment = document.createDocumentFragment();
    charactersContainer.innerHTML = "";
    charactersList.forEach(character =>
        documentFragment.appendChild(cardCharacter(
            character.id,
            character.image,
            character.name,
            character.status,
            character.location.name,
            character.origin.name,
            character.species
        )
        ));
    charactersContainer.appendChild(documentFragment);
}


//A-Z

const sortingSelector = document.querySelector('#filter-input-order');

if (sortingSelector) {
    sortingSelector.addEventListener('change', (event) => {
        sortOrder = event.target.value;
        updateCharactersHTML();
    })
}

export function sortAlphabetic(order, list) {
    if (!order) {
        return list;
    }

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

/*Flip card*/
function cardCharacter(id, urlImage, name, status, location, origin, specie) {
    const container = document.createElement('div');
    container.className = "column";
    container.dataset.id = id;

    const cardInnerTemplate = `
            <div class="card flip">
                    <div class="card-container">
                        <div class="card-front">
                            <img src="${urlImage}" alt="image" class="card-image" />
                            <div class="card-content">
                                <h3 class="card-title">${name}</h3>
                            </div>
                        </div>
                        <div class="card-back font-color">
                            <div class="card-content">
                                <p class="card-description">
                                     <div class="conv-icon" id="main-menu-button"> 
                                     <i class="fas fa-heart"></i> Status: ${status}
                                    </div>
                                </p>
                                <p class="card-description">
                                     <div class="conv-icon" id="main-menu-button">
                                    <i class="fas fa-user-circle"></i>  Specie: ${specie}
                                   </div>
                                </p>
                                <p class="card-description"> 
                                    <div class="conv-icon" id="main-menu-button"> 
                                    <i class="fas fa-globe-americas"></i>  Origin: ${origin}
                                   </div>
                                </p>
                                <p class="card-description">
                                     <div class="conv-icon" id="main-menu-button"> 
                                    <i class="fas fa-map-pin"></i> Current location: ${location}
                                   </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
    `;

    container.innerHTML = cardInnerTemplate;

    return container;
};