
/*Loading indicator*/
const loadingIndicator = document.querySelector('.loading-indicator');

// isLoading lo usaremos para saber si hay una petición en curso y evitar sobrecargar la API
let isLoading = false;

// Mantiene la cuenta de la pagina actual en la que estamos
let currentPage = 1;

// Mantiene un registro de la cantidad de paginas de personajes que tiene la API
let totalPages = 30;

let charactersContainer = document.querySelector('#characters-container');

/*Scroll to the top */
const backToTopButton = document.querySelector('#backTop-button');
backToTopButton.addEventListener("click", () => {
    /**
     * Cada vez que hacemos click al botón Back To Top se lleva al usuario al principio de la pagina
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
     */
    window.scrollTo(0, 0);
});


/*get characters*/
async function getCharacters(page = 1) {
    // Si currentPage es 31 ya no dejará pedir más datos a la API porque quiere decir que llegamos al final y ya pedimos todos los personajes
    if (currentPage <= totalPages) {

        // Añadimos la clase active a nuestro Loading indicator en el HTML
        loadingIndicator.classList.add('active');
        // Con la variable isLoading podemos saber si la peticion está cargando
        isLoading = true;
        /**
         * @see https://developers.google.com/web/updates/2015/03/introduction-to-fetch
         * @see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
         */
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`); // Template literal para concatenar
        const data = await response.json();
        // Cuando termina la peticion ponemos isLoading como falso para indicar que terminó y ya no hay nada cargando
        isLoading = false;
        // Quitamos la clase active de nuestro loading indicator en el HTML
        loadingIndicator.classList.remove('active');
        console.log(data);
        totalPages = data.info.pages;
        data.results.forEach(character =>
            charactersContainer.innerHTML += cardCharacter(
                character.image,
                character.name,
                character.status,
                character.location.name,
                character.origin.name,
                character.species
            )
        );
    }
};

getCharacters();

/*Flip card*/
function cardCharacter(urlImage, name, status, location, origin, specie) {
    return (
        `
        <div class="column">
                <div class="card">
                    <img src="${urlImage}" alt="image" class="card-image" />
                    <div class="card-content">
                        <h3 class="card-title">${name}</h3>
                        <p class="card-description">
                            Status: ${status}
                        </p>
                        <p class="card-description">
                            Specie: ${specie}
                        </p>
                        <p class="card-description">
                            Origin: ${origin}
                        </p>
                        <p class="card-description">
                            Current location: ${location}
                        </p>
                    </div>
                </div>
            </div>
        `
    )
};



/*Infinite Scroll*/

/**
 * Calcula la altura del documento html
 */
function getDocumentHeight() {
    const body = document.body; // Obtener todo el body del documento
    const html = document.documentElement; // Obtener todo el documento html

    // Math.max retorna el mayor numero dada una lista de numeros
    return Math.max(
        body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight
    );
};

/**
 * Calcula la posicion actual del scroll
 */
function getScrollTop() {
    return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}


/**
 * Este evento es llamado cada vez que el scroll se mueve
 */

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
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(searchForm.value)}`);
    const data = await response.json();
    console.log(data);
    charactersContainer.innerHTML = "";
    data.results.forEach(character =>
        charactersContainer.innerHTML += cardCharacter(
            character.image,
            character.name,
            character.status,
            character.location.name,
            character.origin.name,
            character.specie
        )
    );
}

searchButton.addEventListener('click', filter)

