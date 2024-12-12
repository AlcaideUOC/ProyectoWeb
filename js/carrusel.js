const carrusel = document.querySelector('.carrusel-contenido');
const botonPrev = document.querySelector('.boton-prev');
const botonNext = document.querySelector('.boton-next');

let indice = 0; // Índice de la posición actual
const tarjetas = document.querySelectorAll('.tarjeta-evento'); // Todas las tarjetas
const totalTarjetas = tarjetas.length;

function actualizarCarrusel() {
    const tarjetasVisibles = window.innerWidth <= 768 ? 1 : 3; // 1 tarjeta en móvil, 3 en desktop
    const anchoTarjeta = tarjetas[0].offsetWidth + 20; // Ancho de tarjeta + gap
    carrusel.style.transform = `translateX(-${indice * anchoTarjeta}px)`;
}

// Botón Siguiente
botonNext.addEventListener('click', () => {
    const tarjetasVisibles = window.innerWidth <= 768 ? 1 : 3;
    if (indice < totalTarjetas - tarjetasVisibles) {
        indice++;
    } else {
        indice = 0; // Reinicia al inicio
    }
    actualizarCarrusel();
});

// Botón Anterior
botonPrev.addEventListener('click', () => {
    const tarjetasVisibles = window.innerWidth <= 768 ? 1 : 3;
    if (indice > 0) {
        indice--;
    } else {
        indice = totalTarjetas - tarjetasVisibles; // Va al final
    }
    actualizarCarrusel();
});

// Ajustar al redimensionar la pantalla
window.addEventListener('resize', actualizarCarrusel);

// Inicializar el carrusel
actualizarCarrusel();


