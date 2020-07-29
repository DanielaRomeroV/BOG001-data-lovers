/* menu*/
const buttonMenu = document.querySelector('#main-menu-button');
buttonMenu.addEventListener('click', toggleMenu);

const mainMenu = document.querySelector('.main-menu');

let menuOpened = false;

/**
 * Toggles main menu
 * @param {Event} event 
 */
function toggleMenu() {
    mainMenu.classList.toggle('active');
    menuOpened = !menuOpened;
}

//funcion que oculta el menu
window.addEventListener('click', (event) => {
    if (menuOpened && !mainMenu.contains(event.target) && !buttonMenu.contains(event.target)) {
        mainMenu.classList.remove('active');
        menuOpened = false;
    }
});

/*Scroll to the top */
const backToTopButton = document.querySelector('#backTop-button');

    backToTopButton.addEventListener("click", () => {
        // Cada vez que hacemos click al botón Back To Top se lleva al usuario al principio de la pagina

        window.scrollTo(0, 0);
    });
