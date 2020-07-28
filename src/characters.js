import { fetchCharacters, sortAlphabetic, fetchCharactersByName, fetchCharactersBySpecie } from './data.js';

// --------------------- VARIABLES DECLARATION -----------------------------
// isLoading lo usaremos para saber si hay una petición en curso y evitar sobrecargar la API
let isLoading = false;

// Mantiene la cuenta de la pagina actual en la que estamos
let currentPage = 1;

// Mantiene un registro de la cantidad de paginas de personajes que tiene la API
let totalPages = 30;

let charactersContainer = document.querySelector('#characters-container');

/**
 * Guarda la lista de personajes
 */
let charactersList = [];

/**
 * Orden en que vamos a organizar los personajes
 * a-z
 * z-a
 */
let sortOrder = '';

/**
 * Mantiene un registro para saber si hay filtros aplicados o no
 */
let filtersApplied = false;


/**
 * Loads characters per page and update the HTML
 * @param {number} page 
 */
export async function loadCharactersPerPage(page = 1) {
    // Si currentPage es 31 ya no dejará pedir más datos a la API porque quiere decir que llegamos al final y ya pedimos todos los personajes
    if (currentPage <= totalPages && !filtersApplied) {
        loadingIndicatorVisible(true);
        const data = await fetchCharacters(page);
        loadingIndicatorVisible(false);
        totalPages = data.info.pages;
        charactersList = charactersList.concat(data.results);
        updateCharactersHTML();
    }
};

loadCharactersPerPage();

// ---------------------- NAME FILTER --------------------------
const searchForm = document.querySelector('#searchIn');
const searchButton = document.querySelector('#searchButton');
searchButton.addEventListener('click', nameFilter)

async function nameFilter() {
    if (searchForm.value) {
        filtersApplied = true;
    } else {
        filtersApplied = false;
    }
    loadingIndicatorVisible(true);
    const data = await fetchCharactersByName(searchForm.value);
    charactersList = data.results;
    loadingIndicatorVisible(false);
    updateCharactersHTML();
}

// ---------------------- SPECIES FILTER -------------------------
const speciesSort = document.querySelector('#filter-input-species');
speciesSort.addEventListener('change', speciesFilter)

async function speciesFilter() {
    if (speciesSort.value) {
        filtersApplied = true;
    } else {
        filtersApplied = false;
    }
    loadingIndicatorVisible(true);
    const data = await fetchCharactersBySpecie(speciesSort.value);
    charactersList = data.results;
    loadingIndicatorVisible(false);
    updateCharactersHTML();
}


// ---------------------- SORT FILTER ---------------------------
const sortingSelector = document.querySelector('#filter-input-order');

if (sortingSelector) {
    sortingSelector.addEventListener('change', (event) => {
        sortOrder = event.target.value;
        updateCharactersHTML();
    })
}


// ---------------------- SCROLL INFINITE ------------------------------

/*Infinite Scroll Calcula la altura del documento html*/
function getDocumentHeight() {
    const body = document.body; // Obtener todo el body del documento
    const html = document.documentElement; // Obtener todo el documento html

    // Math.max retorna el mayor numero dada una lista de numeros
    return Math.max(
        body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight
    );
};

//Calcula la posicion actual del scroll
function getScrollTop() {
    return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}

//Este evento es llamado cada vez que el scroll se mueve
window.onscroll = function () {
    /* Con la pocision del scroll se le suman 40 pixeles
     * Si la posicion del scroll es mayor a la altura del documento, quiere decir que hemos llegado al final de la pagina */

    const isAtTheEnd = getScrollTop() + 40 > getDocumentHeight() - window.innerHeight;
    if (isAtTheEnd) {
        /*En caso que hayamos llegado al final del documento comprobamos si no está cargando previamente el fetch
         * para evitar que pida datos una tras otro y se sobrecargue
         * Si no está cargando entonces procedemos a hacer el fetch
         */
        if (!isLoading) {
            // La pagina comienza en 1
            // Cada vez que hacemos scroll aumentamos el paginador en 1
            currentPage++;
            // Luego de aumentar el paginador, hacemos el fetch
            loadCharactersPerPage(currentPage);
        }
    }
};


// -------------------- UTILITY FUNCTIONS -----------------------
/**
 * Genera el HTML necesario para pintar una FLIP CARD en la pagina
 * @param {string} id 
 * @param {string} urlImage 
 * @param {string} name 
 * @param {string} status 
 * @param {string} location 
 * @param {string} origin 
 * @param {string} specie 
 */
export function cardCharacter(id, urlImage, name, status, location, origin, specie) {
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

/**
 * Actualiza el HTML con la nueva informacion de personajes
 */
function updateCharactersHTML() {
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

/**
 * Activa o desactiva el indicador de carga en la pagina
 * @param {boolean} visibility 
 */
function loadingIndicatorVisible(visibility) {
    const loadingIndicator = document.querySelector('.loading-indicator');
    if (visibility) {
        // Con la variable isLoading podemos saber si la peticion está cargando
        isLoading = true;
        // Añadimos la clase active a nuestro Loading indicator en el HTML
        loadingIndicator.classList.add('active');
    } else {
        // Cuando termina la peticion ponemos isLoading como falso para indicar que terminó y ya no hay nada cargando
        isLoading = false;
        // Quitamos la clase active de nuestro loading indicator en el HTML
        loadingIndicator.classList.remove('active');
    }
}