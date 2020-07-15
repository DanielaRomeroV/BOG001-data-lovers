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

const slides=document.querySelector(".slider").children;
const indicator=document.querySelector(".slider-indicator").children;

 for(let i=0; i<indicator.length; i++){
     indicator[i].addEventListener("click",function(){
      
        for(let j=0; j<indicator.length; j++){
          indicator[j].classList.remove("active");
        }
         this.classList.add("active");
         const id=this.getAttribute("data-id");
        for(let j=0; j<slides.length; j++){
            slides[j].classList.remove("active");
        }

         slides[id].classList.add("active");

     })
 }
