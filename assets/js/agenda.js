// js/agenda.js

document.addEventListener('DOMContentLoaded', () => {
    const eventosContainer = document.getElementById('eventos-container');
    const mensajeVacio = document.getElementById('mensaje-vacio');
    const filterButtons = document.querySelectorAll('.btn-filter');

    // Estado inicial de la pestaña (coincide con tu HTML "hoy")
    let filtroActual = 'hoy'; 

    function renderizarAgenda() {
        // 1. Traer los IDs que guardó eventos.js (si no hay, inicializa vacío)
        const idsAgendados = JSON.parse(localStorage.getItem('agenda')) || [];
        
        // Limpiar el contenedor antes de renderizar
        eventosContainer.innerHTML = '';
        
        // 2. Mapear los IDs con los objetos completos de tu base de datos global "cards"
        // Nota: "cards" viene del archivo asignado '../data/data.js'
        const misEventosCompletos = cards.filter(card => idsAgendados.includes(card.id));

        // Obtener la fecha de hoy normalizada a las 00:00:00
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);

        // 3. Filtrar los eventos correspondientes según la pestaña activa
        const eventosFiltrados = misEventosCompletos.filter(evento => {
            const fechaEvento = new Date(evento.date + 'T00:00:00');

            if (filtroActual === 'finalizado') {
                return fechaEvento < hoy;
            } else if (filtroActual === 'hoy') {
                return fechaEvento.getTime() === hoy.getTime();
            } else if (filtroActual === 'proximo') {
                return fechaEvento > hoy;
            }
            return false;
        });

        // 4. Controlar si la sección está vacía
        if (eventosFiltrados.length === 0) {
            mensajeVacio.classList.remove('oculto');
            
            if (filtroActual === 'hoy') {
                mensajeVacio.textContent = 'El dia de hoy no hay ningun evento.';
            } else if (filtroActual === 'finalizado') {
                mensajeVacio.textContent = 'No tienes eventos finalizados en tu agenda.';
            } else {
                mensajeVacio.textContent = 'No tienes próximos eventos agendados.';
            }
            return;
        }

        // Si hay elementos, ocultamos el aviso de vacío
        mensajeVacio.classList.add('oculto');

        // 5. Inyectar los carteles con el formato exacto de tu diseño
        eventosFiltrados.forEach(evento => {
            const fechaObj = new Date(evento.date + 'T00:00:00');
            const dia = fechaObj.getDate();
            
            // Extraer el mes en tres letras mayúsculas (ej: "MAY", "OCT")
            const mes = fechaObj.toLocaleString('es-ES', { month: 'short' }).replace('.', '').toUpperCase();

            // Sanear campos por si dicen "Dato no disponible"
            const horarioMostrado = evento.time === 'Dato no disponible' ? 'Horario a confirmar' : `${evento.time} p.m.`;

            const tarjetaElemento = document.createElement('div');
            tarjetaElemento.className = 'agenda-card';
            if (filtroActual === 'finalizado') {
                tarjetaElemento.classList.add('agenda-card--finalizado');
            } else if (filtroActual === 'proximo') {
                tarjetaElemento.classList.add('agenda-card--proximo');
            }
            tarjetaElemento.innerHTML = `
                <div class="agenda-date-badge">
                    <span class="badge-day">${dia}</span>
                    <span class="badge-month">${mes}</span>
                </div>
                <div class="agenda-details">
                    <h4 class="agenda-title">${evento.title}</h4>
                    <div class="agenda-meta">
                        <span>🕒 ${horarioMostrado}</span>
                        <span>📍 ${evento.location}</span>
                        <span>💵 ${evento.price}</span>
                    </div>
                </div>
                <button class="btn-quitar-agenda" data-id="${evento.id}" title="Quitar de la agenda">✕</button>
            `;

            eventosContainer.appendChild(tarjetaElemento);
        });
    }

    // Cambiar dinámicamente entre pestañas
    filterButtons.forEach(boton => {
        boton.addEventListener('click', () => {
            document.querySelector('.btn-filter.active').classList.remove('active');
            boton.classList.add('active');

            filtroActual = boton.getAttribute('data-filter');
            renderizarAgenda();
        });
    });

    // Permitir al usuario remover el cartel cliqueando en la '✕'
    eventosContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-quitar-agenda')) {
            const idAEliminar = parseInt(e.target.getAttribute('data-id'), 10);
            let idsAgendados = JSON.parse(localStorage.getItem('agenda')) || [];
            
            // Sobreescribimos la lista quitando el ID
            idsAgendados = idsAgendados.filter(id => id !== idAEliminar);
            localStorage.setItem('agenda', JSON.stringify(idsAgendados));
            
            // Refrescar pantalla de inmediato
            renderizarAgenda();
        }
    });

    // Carga inicial al entrar a la página
    renderizarAgenda();
});