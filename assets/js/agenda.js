// js/agenda.js

document.addEventListener('DOMContentLoaded', () => {
    const eventosContainer = document.getElementById('eventos-container');
    const mensajeVacio     = document.getElementById('mensaje-vacio');
    const filterButtons    = document.querySelectorAll('.btn-filter');

    let filtroActual = 'todos';

    /* ── Helpers localStorage ── */
    const getAgenda = () => {
        try { return JSON.parse(localStorage.getItem('agenda') || '[]') || []; }
        catch (e) { return []; }
    };
    const setAgenda = (arr) => {
        try { localStorage.setItem('agenda', JSON.stringify(arr)); }
        catch (e) { /* silencioso */ }
    };

    /* ── Eventos personalizados desde Contacto ── */
    const getEventosPersonalizados = () => {
        try {
            const sol = JSON.parse(localStorage.getItem('solicitudesEnviadas') || '[]') || [];
            return sol.filter(s => s.title && s.date);
        } catch (e) { return []; }
    };

    /* ── Pool completo de eventos ── */
    const todosLosEventos = () => [...cards, ...getEventosPersonalizados()];

    /* ── Normalizar IDs siempre a String para comparar ── */
    const idStr = (id) => String(id);

    function renderizarAgenda() {
        const idsAgendados = getAgenda().map(idStr); // normalizar todo a string

        eventosContainer.innerHTML = '';

        const misEventos = todosLosEventos().filter(ev =>
            idsAgendados.includes(idStr(ev.id))
        );

        const hoy = new Date(); hoy.setHours(0, 0, 0, 0);

        const filtrados = misEventos.filter(ev => {
            const fecha = new Date(ev.date + 'T00:00:00');
            if (filtroActual === 'todos')      return true;
            if (filtroActual === 'finalizado') return fecha < hoy;
            if (filtroActual === 'hoy')        return fecha.getTime() === hoy.getTime();
            if (filtroActual === 'proximo')    return fecha > hoy;
            return false;
        });

        if (filtrados.length === 0) {
            mensajeVacio.classList.remove('oculto');
            const mensajes = {
                todos:      'Aún no agregaste ningún evento. ¡Explorá y agregá los que te interesen!',
                hoy:        'No tenés eventos para hoy en tu agenda.',
                finalizado: 'No tenés eventos finalizados en tu agenda.',
                proximo:    'No tenés próximos eventos agendados.'
            };
            mensajeVacio.textContent = mensajes[filtroActual] || '';
            return;
        }

        mensajeVacio.classList.add('oculto');

        // Ordenar por fecha
        filtrados.sort((a, b) => new Date(a.date) - new Date(b.date));

        filtrados.forEach(evento => {
            const fechaObj    = new Date(evento.date + 'T00:00:00');
            const dia         = fechaObj.getDate();
            const mes         = fechaObj.toLocaleString('es-ES', { month: 'short' }).replace('.', '').toUpperCase();
            const esFinalizado = fechaObj < hoy;
            const esHoy        = fechaObj.getTime() === hoy.getTime();
            const horario      = (!evento.time || evento.time === 'Dato no disponible') ? 'Horario a confirmar' : `${evento.time} hs`;

            const card = document.createElement('div');
            card.className = 'agenda-card' +
                (esFinalizado ? ' agenda-card--finalizado' : !esHoy ? ' agenda-card--proximo' : '');

            card.innerHTML = `
                <div class="agenda-date-badge">
                    <span class="badge-day">${dia}</span>
                    <span class="badge-month">${mes}</span>
                </div>
                <div class="agenda-details">
                    <h4 class="agenda-title">${evento.title}</h4>
                    ${evento.esPersonalizado ? '<span class="agenda-badge-comunidad">★ Comunidad</span>' : ''}
                    <div class="agenda-meta">
                        <span>🕒 ${horario}</span>
                        <span>📍 ${evento.location}</span>
                        <span>💵 ${evento.price}</span>
                    </div>
                </div>
                <button class="btn-quitar-agenda" data-id="${evento.id}" title="Quitar de la agenda">✕</button>
            `;
            eventosContainer.appendChild(card);
        });
    }

    /* ── Filtros ── */
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.btn-filter.active')?.classList.remove('active');
            btn.classList.add('active');
            filtroActual = btn.dataset.filter;
            renderizarAgenda();
        });
    });

    // Activar "Todos" al inicio
    const btnTodos = document.querySelector('.btn-filter[data-filter="todos"]');
    if (btnTodos) {
        filterButtons.forEach(b => b.classList.remove('active'));
        btnTodos.classList.add('active');
    }

    /* ── Quitar evento ── */
    eventosContainer.addEventListener('click', (e) => {
        if (!e.target.classList.contains('btn-quitar-agenda')) return;
        const idQuitar = idStr(e.target.dataset.id);
        setAgenda(getAgenda().filter(id => idStr(id) !== idQuitar));
        renderizarAgenda();
    });

    renderizarAgenda();
});
