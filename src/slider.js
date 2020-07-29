//funcion slider//
//funcion slider automatico//
let indice = 1;//Indice hace referencia a la posición del slide a mostrar
muestraSlides(indice);

setInterval(function tiempo() {
    muestraSlides(indice += 1)
}, 8000);

function muestraSlides(n) {
    let i;
    let slides = document.getElementsByClassName('Slider');
    

    if (n > slides.length) {
        indice = 1;
    }
    if (n < 1) {
        indice = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    

    slides[indice - 1].style.display = 'block';
    
}

