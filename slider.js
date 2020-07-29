//funcion slider//
//funcion slider automatico//
let indice = 1;
muestraSlides(indice);

setInterval(function tiempo() {
    muestraSlides(indice += 1)
}, 8000);
function muestraSlides(n) {
    let i;
    let slides = document.getElementsByClassName('Slider');
    let barras = document.getElementsByClassName('barra');

    if (n > slides.length) {
        indice = 1;
    }
    if (n < 1) {
        indice = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < barras.length; i++) {
        barras[i].className = barras[i].className.replace(" active", "");
    }

    slides[indice - 1].style.display = 'block';
    barras[indice - 1].className += ' active';
}

/*CHARTS*/

const ctx = document.getElementById('myChart').getContext('2d');
Chart.defaults.global.defaultFontColor = '#000000';

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Humans", "Alien", "Humanoid", "Robot", "Animal","Croenberg", "Poopybuthole", "Disease", "Unknown", "Vampire"],
        datasets: [{
          label: 'Kinds of species',
          data: [244, 132, 53, 17, 11, 8,8, 6, 5, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
           
          ]
          
        }]
      }
    }); 