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

/* CONTACTO — assets/js/contacto.js
   Validación del formulario de publicación de evento */

document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('form-publicar-evento');
    if (!form) return;
    
    const inputPrecioTipo = document.getElementById('evento-precio-tipo');
    const inputPrecio = document.getElementById('evento-precio');
    const textarea = document.getElementById('evento-descripcion');
    const contador = document.getElementById('contador-descripcion');
    const msgExito = document.getElementById('form-exito');

    /* ---------- Contador de caracteres del textarea ---------- */
    textarea.addEventListener('input', () => {
        contador.textContent = `${textarea.value.length} / 500`;
    });

    /* ---------- Mostrar campo de precio si es pago ---------- */
    inputPrecioTipo.addEventListener('change', () => {
        if (inputPrecioTipo.value === 'Pago') {
            inputPrecio.classList.remove('form-input-oculto');
            inputPrecio.focus();
        } else {
            inputPrecio.classList.add('form-input-oculto');
            inputPrecio.value = '';
            limpiarError('error-precio');
        }
    });

    /* ---------- Helpers ---------- */
    const mostrarError = (id, mensaje) => {
        const el = document.getElementById(id);
        if (el) el.textContent = mensaje;
    };

    const limpiarError = (id) => {
        const el = document.getElementById(id);
        if (el) el.textContent = '';
    };

    const esUrlValida = (str) => {
        try { new URL(str); return true; }
        catch { return false; }
    };

    /* ---------- Validación completa ---------- */
    const validar = () => {
        let valido = true;

        // Nombre
        const nombre = document.getElementById('evento-nombre').value.trim();
        if (!nombre) {
            mostrarError('error-nombre', 'El nombre del evento es obligatorio.');
            valido = false;
        } else {
            limpiarError('error-nombre');
        }

        // Fecha
        const fecha = document.getElementById('evento-fecha').value;
        if (!fecha) {
            mostrarError('error-fecha', 'Seleccioná una fecha.');
            valido = false;
        } else {
            limpiarError('error-fecha');
        }

        // Hora
        const hora = document.getElementById('evento-hora').value;
        if (!hora) {
            mostrarError('error-hora', 'Ingresá una hora.');
            valido = false;
        } else {
            limpiarError('error-hora');
        }

        // Lugar
        const lugar = document.getElementById('evento-lugar').value.trim();
        if (!lugar) {
            mostrarError('error-lugar', 'El lugar o dirección es obligatorio.');
            valido = false;
        } else {
            limpiarError('error-lugar');
        }

        // Categoría
        const categoria = document.getElementById('evento-categoria').value;
        if (!categoria) {
            mostrarError('error-categoria', 'Seleccioná una categoría.');
            valido = false;
        } else {
            limpiarError('error-categoria');
        }

        // Precio
        const precioTipo = inputPrecioTipo.value;
        if (!precioTipo) {
            mostrarError('error-precio', 'Indicá si el evento es gratuito o pago.');
            valido = false;
        } else if (precioTipo === 'Pago' && !inputPrecio.value.trim()) {
            mostrarError('error-precio', 'Ingresá el valor de la entrada.');
            valido = false;
        } else {
            limpiarError('error-precio');
        }

        // Descripción
        const desc = textarea.value.trim();
        if (!desc) {
            mostrarError('error-descripcion', 'La descripción es obligatoria.');
            valido = false;
        } else if (desc.length < 20) {
            mostrarError('error-descripcion', 'La descripción es muy corta. Contanos un poco más.');
            valido = false;
        } else {
            limpiarError('error-descripcion');
        }

        // Link (opcional, pero si hay algo debe ser URL válida)
        const link = document.getElementById('evento-link').value.trim();
        if (link && !esUrlValida(link)) {
            mostrarError('error-link', 'El link no es válido. Debe empezar con https://');
            valido = false;
        } else {
            limpiarError('error-link');
        }

        return valido;
    };

    /* ---------- Submit ---------- */
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        msgExito.classList.add('form-exito-oculto');

        if (!validar()) return;

        // Guardar en localStorage como historial de solicitudes enviadas
        const solicitud = {
            nombre: document.getElementById('evento-nombre').value.trim(),
            fecha: document.getElementById('evento-fecha').value,
            hora: document.getElementById('evento-hora').value,
            lugar: document.getElementById('evento-lugar').value.trim(),
            categoria: document.getElementById('evento-categoria').value,
            precio: inputPrecioTipo.value === 'Gratis' ? 'Gratis' : inputPrecio.value.trim(),
            descripcion: textarea.value.trim(),
            link: document.getElementById('evento-link').value.trim(),
            enviadoEn: new Date().toISOString()
        };

        const historial = JSON.parse(localStorage.getItem('solicitudesEnviadas') || '[]');
        historial.push(solicitud);
        localStorage.setItem('solicitudesEnviadas', JSON.stringify(historial));

        // Mostrar mensaje de éxito y resetear
        form.reset();
        inputPrecio.classList.add('form-input-oculto');
        contador.textContent = '0 / 500';
        msgExito.classList.remove('form-exito-oculto');
        msgExito.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

});