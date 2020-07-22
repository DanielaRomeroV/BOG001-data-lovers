
/*Loading indicator*/
const loadingIndicator = document.querySelector('.loading-indicator');

// isLoading lo usaremos para saber si hay una petición en curso y evitar sobrecargar la API
let isLoading = false;

// Mantiene la cuenta de la pagina actual en la que estamos
let currentPage = 1;

// Mantiene un registro de la cantidad de paginas de personajes que tiene la API
let totalPages = 30;

let charactersContainer = document.querySelector('#characters-container');

let charactersList = [];

let sortOrder = '';

/*Scroll to the top */
const backToTopButton = document.querySelector('#backTop-button');
if (backToTopButton) {
    backToTopButton.addEventListener("click", () => {
        // Cada vez que hacemos click al botón Back To Top se lleva al usuario al principio de la pagina

        window.scrollTo(0, 0);
    });
}

let filtersApplied = false;



/*get characters*/
export async function getCharacters(page = 1) {
    // Si currentPage es 31 ya no dejará pedir más datos a la API porque quiere decir que llegamos al final y ya pedimos todos los personajes
    if (currentPage <= totalPages && !filtersApplied) {

        // Añadimos la clase active a nuestro Loading indicator en el HTML
        loadingIndicator.classList.add('active');
        // Con la variable isLoading podemos saber si la peticion está cargando
        isLoading = true;
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`); // Template literal para concatenar
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

getCharacters();


/*Flip card*/
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



/*Infinite Scroll*/
//Calcula la altura del documento html
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
    /**
     * Con la pocision del scroll se le suman 40 pixeles
     * Si la posicion del scroll es mayor a la altura del documento, quiere decir que hemos llegado al final de la pagina
     */
    const isAtTheEnd = getScrollTop() + 40 > getDocumentHeight() - window.innerHeight;
    if (isAtTheEnd) {
        /**
         * En caso que hayamos llegado al final del documento comprobamos si no está cargando previamente el fetch
         * para evitar que pida datos una tras otro y se sobrecargue
         * 
         * Si no está cargando entonces procedemos a hacer el fetch
         */
        if (!isLoading) {
            // La pagina comienza en 1
            // Cada vez que hacemos scroll aumentamos el paginador en 1
            currentPage++;
            // Luego de aumentar el paginador, hacemos el fetch
            getCharacters(currentPage);
        }
    }
};



//Buscador//

const searchForm = document.querySelector('#searchIn');
const searchButton = document.querySelector('#searchButton');

const filter = async () => {

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

if (searchButton) {
    searchButton.addEventListener('click', filter)
}



/*Sort function*/

const speciesSort = document.querySelector('#filter-input-species');


export const species = async () => {

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

if (speciesSort) {
    speciesSort.addEventListener('change', species)
}

/**
 * Actualiza el HTML de los personajes
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