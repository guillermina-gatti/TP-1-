/* INDEX — assets/js/index.js
Lógica del carrusel hero de index.html*/

document.addEventListener('DOMContentLoaded', () => {

    const track = document.getElementById('carrusel-track');       // contenedor que se desliza horizontalmente
    const prev = document.getElementById('carrusel-prev');        // botón flecha izquierda
    const next = document.getElementById('carrusel-next');        // botón flecha derecha
    const dots = document.querySelectorAll('.carrusel-dot');      // puntos indicadores de slide activo
    const total = 5;                                               // cantidad total de slides
    let actual = 0;                                               // índice del slide visible en este momento
    let timer;                                                     // referencia al intervalo de avance automático

    const irASlide = (idx) => {
        actual = (idx + total) % total;                            // calcula el índice correcto dando la vuelta si llega al límite
        track.style.transform = `translateX(-${actual * 100}%)`;  // desplaza el track al slide correspondiente
        dots.forEach((d, i) => {
            d.classList.toggle('activo', i === actual);            // marca el punto del slide activo
            d.setAttribute('aria-selected', i === actual ? 'true' : 'false'); // accesibilidad: informa el estado al lector de pantalla
        });
    };

    const reiniciarTimer = () => {
        clearInterval(timer);                                      // cancela el intervalo anterior para no acumular timers
        timer = setInterval(() => irASlide(actual + 1), 5000);    // arranca uno nuevo que avanza un slide cada 5 segundos
    };

    prev.addEventListener('click', () => { irASlide(actual - 1); reiniciarTimer(); }); // retrocede un slide al hacer clic en la flecha izquierda
    next.addEventListener('click', () => { irASlide(actual + 1); reiniciarTimer(); }); // avanza un slide al hacer clic en la flecha derecha

    dots.forEach((d, i) => {
        d.addEventListener('click', () => { irASlide(i); reiniciarTimer(); }); // al tocar un punto va directo al slide correspondiente
    });

    /* Swipe táctil */
    let touchInicioX = 0;
    track.addEventListener('touchstart', (e) => { touchInicioX = e.touches[0].clientX; }, { passive: true }); // guarda la posición X donde empezó el swipe
    track.addEventListener('touchend', (e) => {
        const diff = touchInicioX - e.changedTouches[0].clientX;                              // calcula cuánto y en qué dirección se deslizó el dedo
        if (Math.abs(diff) > 40) { irASlide(actual + (diff > 0 ? 1 : -1)); reiniciarTimer(); } // si el swipe superó 40px, cambia de slide según la dirección
    });

    reiniciarTimer(); // inicia el avance automático al cargar la página
});
