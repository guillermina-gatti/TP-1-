/* eventos.js — Renderiza cards, filtros y modal en eventos.html */

document.addEventListener('DOMContentLoaded', () => {

    const contenedor   = document.getElementById('contenedor-cards-eventos');
    const inputBuscar  = document.getElementById('filtro-buscar');
    const inputFecha   = document.getElementById('filtro-fecha');
    const selectCat    = document.getElementById('filtro-categoria');
    const selectPrecio = document.getElementById('filtro-precio');
    const selectEstado = document.getElementById('filtro-estado');
    const modalAside   = document.getElementById('modal-detalle-evento');

    /* ── Helpers seguros para localStorage ── */
    const getAgenda = () => {
        try { return JSON.parse(localStorage.getItem('agenda') || '[]') || []; }
        catch (e) { return []; }
    };
    const setAgenda = (arr) => {
        try { localStorage.setItem('agenda', JSON.stringify(arr)); }
        catch (e) { /* silencioso */ }
    };

    /* ── Cargar eventos personalizados desde Contacto ── */
    const getEventosPersonalizados = () => {
        try {
            const solicitudes = JSON.parse(localStorage.getItem('solicitudesEnviadas') || '[]') || [];
            return solicitudes.filter(s => s.title && s.date); // solo los que tienen formato compatible
        } catch (e) { return []; }
    };

    /* ── Combinar cards de data.js con los enviados desde Contacto ── */
    const todosLosEventos = () => {
        const personalizados = getEventosPersonalizados();
        return [...cards, ...personalizados];
    };

    /* ── Botón Random ── */
    const btnRandom = document.querySelector('.btn-random-anim');
    if (btnRandom) {
        btnRandom.addEventListener('click', () => {
            const visibles = contenedor.querySelectorAll('.card-evento');
            if (!visibles.length) return;
            const idx = Math.floor(Math.random() * visibles.length);
            visibles[idx].scrollIntoView({ behavior: 'smooth', block: 'center' });
            visibles[idx].style.outline = '3px solid #C0392B';
            setTimeout(() => visibles[idx].style.outline = '', 1500);
        });
    }

    /* ── Poblar select Categoría (incluye las de eventos personalizados) ── */
    const actualizarSelectCategorias = () => {
        const todos = todosLosEventos();
        const categorias = [...new Set(todos.flatMap(c => c.category))].sort();
        selectCat.innerHTML = '<option value="" disabled selected>Selecciona una opción</option>'
            + '<option value="Todos">Todos</option>'
            + categorias.map(c => `<option value="${c}">${c}</option>`).join('');
    };
    actualizarSelectCategorias();

    /* ── Estado de un evento ── */
    const calcEstado = (fechaStr) => {
        const hoy = new Date(); hoy.setHours(0,0,0,0);
        const ev  = new Date(fechaStr + 'T00:00:00');
        if (ev.getTime() === hoy.getTime()) return 'Hoy';
        if (ev > hoy) return 'Proximamente';
        return 'Finalizado';
    };

    /* ── Renderizar ── */
    const renderizar = () => {
        const buscar  = inputBuscar.value.toLowerCase().trim();
        const fecha   = inputFecha.value;
        const cat     = selectCat.value;
        const precio  = selectPrecio.value;
        const estado  = selectEstado.value;

        const todos = todosLosEventos();

        const filtrados = todos.filter(c => {
            if (buscar  && !c.title.toLowerCase().includes(buscar)) return false;
            if (fecha   && c.date !== fecha) return false;
            if (cat     && cat !== 'Todos' && !c.category.includes(cat)) return false;
            if (precio  && precio !== 'Todos') {
                if (precio === 'Gratuito' && c.price !== 'Gratis') return false;
                if (precio === 'Pago'     && c.price === 'Gratis') return false;
            }
            if (estado && estado !== 'Todos' && calcEstado(c.date) !== estado) return false;
            return true;
        });

        if (!filtrados.length) {
            contenedor.innerHTML = '<p>No se encontraron eventos con esos filtros.</p>';
            return;
        }

        const agenda = getAgenda().map(String); // normalizar a string

        // Ordenar: primero "Hoy", luego "Proximamente" (por fecha más cercana), y al final "Finalizado"
        const hoy = new Date(); hoy.setHours(0,0,0,0);
        filtrados.sort((a, b) => {
            const fechaA = new Date(a.date + 'T00:00:00');
            const fechaB = new Date(b.date + 'T00:00:00');
            const terminoA = fechaA < hoy ? 1 : 0;
            const terminoB = fechaB < hoy ? 1 : 0;
            // Los finalizados van al final
            if (terminoA !== terminoB) return terminoA - terminoB;
            // Dentro del mismo grupo, ordenar por fecha ascendente
            return fechaA - fechaB;
        });

        contenedor.innerHTML = filtrados.map(c => {
            const est = calcEstado(c.date);
            const badgeEstado = est === 'Finalizado'
                ? `<span class="badge badge-terminado">Finalizado</span>`
                : `<span class="badge badge-proximamente">${est}</span>`;

            const enAgenda = agenda.includes(String(c.id));

            /* Badge especial para eventos personalizados */
            const badgePersonalizado = c.esPersonalizado
                ? `<span class="badge badge-personalizado" title="Publicado por la comunidad">★ Comunidad</span>`
                : '';

            return `
            <article class="card-evento" data-id="${c.id}">
                <div class="card-header">
                    <span class="badge badge-categoria">${c.category[0]}</span>
                    ${badgeEstado}
                    ${badgePersonalizado}
                </div>
                <div class="card-body">
                    <h3 class="card-titulo">${c.title}</h3>
                    <p class="card-descripcion">${c.context}</p>
                </div>
                <div class="card-specs">
                    <div class="card-spec-row">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E0E1DD" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        <span>${c.date} — ${c.time} hs</span>
                    </div>
                    <div class="card-spec-row">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E0E1DD" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        <span>${c.location}</span>
                    </div>
                </div>
                <div class="card-footer">
                    <span class="card-precio">${c.price === 'Gratis' ? 'Gratis' : c.price}</span>
                    <button class="card-btn-agregar" data-id="${c.id}" ${enAgenda ? 'disabled' : ''}>
                        ${enAgenda ? '✓ Agendado' : '+ Agenda'}
                    </button>
                </div>
            </article>`;
        }).join('');

        /* click en card → modal */
        contenedor.querySelectorAll('.card-evento').forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.closest('.card-btn-agregar')) return;
                abrirModal(card.dataset.id);
            });
        });

        /* click en botón agregar */
        contenedor.querySelectorAll('.card-btn-agregar').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = String(btn.dataset.id);
                const ag = getAgenda().map(String);
                if (!ag.includes(id)) {
                    ag.push(id);
                    setAgenda(ag);
                    btn.textContent = '✓ Agendado';
                    btn.disabled = true;
                }
            });
        });
    };

    /* ── Modal ── */
    const abrirModal = (id) => {
        const todos = todosLosEventos();
        // Buscar por id (puede ser número o string)
        const c = todos.find(x => String(x.id) === String(id));
        if (!c) return;
        const est = calcEstado(c.date);
        const ag  = getAgenda().map(String);
        const enAgenda = ag.includes(String(id));

        modalAside.className = 'modal-overlay';
        modalAside.innerHTML = `
            <div class="modal-contenido" role="dialog" aria-modal="true" aria-labelledby="modal-titulo">
                <div class="modal-header">
                    <h2 id="modal-titulo">${c.title}</h2>
                    <button class="modal-btn-cerrar" id="modal-cerrar-x" aria-label="Cerrar">✕</button>
                </div>
                <p class="modal-descripcion">${c.context}</p>
                <div class="modal-grid">
                    <div class="modal-campo"><span>Fecha</span><p>${c.date}</p></div>
                    <div class="modal-campo"><span>Hora</span><p>${c.time} hs</p></div>
                    <div class="modal-campo"><span>Lugar</span><p>${c.location}</p></div>
                    <div class="modal-campo"><span>Precio</span><p>${c.price}</p></div>
                    <div class="modal-campo"><span>Estado</span><p>${est}</p></div>
                    <div class="modal-campo"><span>Registro</span><p><a href="${c.registration}" target="_blank">Ver más →</a></p></div>
                </div>
                ${c.esPersonalizado ? '<p class="modal-badge-comunidad">★ Evento publicado por la comunidad</p>' : ''}
                <div class="modal-botones">
                    <button class="modal-btn-registrar" id="modal-btn-agendar" ${enAgenda ? 'disabled' : ''}>
                        ${enAgenda ? '✓ Ya está en tu agenda' : '+ Agregar a mi agenda'}
                    </button>
                    <button class="modal-btn-cerrar-pie" id="modal-cerrar-pie">Cerrar</button>
                </div>
            </div>`;

        document.body.classList.add('modal-abierto');

        const cerrar = () => {
            modalAside.className = 'modal-oculto';
            modalAside.innerHTML = '';
            document.body.classList.remove('modal-abierto');
        };

        document.getElementById('modal-cerrar-x').addEventListener('click', cerrar);
        document.getElementById('modal-cerrar-pie').addEventListener('click', cerrar);
        modalAside.addEventListener('click', (e) => { if (e.target === modalAside) cerrar(); });

        document.getElementById('modal-btn-agendar').addEventListener('click', () => {
            const ag = getAgenda().map(String);
            const idStr = String(c.id);
            if (!ag.includes(idStr)) {
                ag.push(idStr);
                setAgenda(ag);
                const btn = document.getElementById('modal-btn-agendar');
                btn.textContent = '✓ Ya está en tu agenda';
                btn.disabled = true;
                renderizar();
            }
        });
    };

    /* ── Listeners de filtros ── */
    [inputBuscar, inputFecha, selectCat, selectPrecio, selectEstado].forEach(el => {
        el.addEventListener('input', renderizar);
        el.addEventListener('change', renderizar);
    });

    renderizar();
});
