import {getCharacters}  from './data.js';

// isLoading lo usaremos para saber si hay una petición en curso y evitar sobrecargar la API
let isLoading = false;
// Numero inicial de la pagina
let currentPage = 1;
/*Loading indicator*/
const loadingIndicator = document.querySelector('.loading-indicator');
getCharacters(currentPage, isLoading, loadingIndicator);



/* menu*/
const buttonMenu = document.querySelector('#main-menu-button');
buttonMenu.addEventListener('click', toggleMenu);

/**
 * Toggles main menu
 * @param {Event} event 
 */
function toggleMenu(event) {
    const mainMenu = document.querySelector('.main-menu');
    mainMenu.classList.toggle('active');
}

//funcion slider//

const slidesElement = document.querySelector(".slider");
const indicatorElement = document.querySelector(".slider-indicator");

if (slidesElement && indicatorElement) {
    const slides = slidesElement.children;
    const indicator = indicatorElement.children;

    for (let i = 0; i < indicator.length; i++) {
        indicator[i].addEventListener("click", function () {

            for (let j = 0; j < indicator.length; j++) {
                indicator[j].classList.remove("active");
            }
            this.classList.add("active");
            const id = this.getAttribute("data-id");
            for (let j = 0; j < slides.length; j++) {
                slides[j].classList.remove("active");
            }

            slides[id].classList.add("active");

        })
    }
}

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




/*Scroll to the top */
const backToTopButton = document.querySelector('#backTop-button');
if (backToTopButton) {
    backToTopButton.addEventListener("click", () => {
        // Cada vez que hacemos click al botón Back To Top se lleva al usuario al principio de la pagina

        window.scrollTo(0, 0);
    });
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
            //loadingIndicator.classList.add('active');
            getCharacters(currentPage, isLoading, loadingIndicator);
            //loadingIndicator.classList.remove('active');
        }
    }
};