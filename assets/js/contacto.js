/* contacto.js — Validación del formulario de publicación de evento */

document.addEventListener('DOMContentLoaded', () => {

    const form             = document.getElementById('form-publicar-evento');
    if (!form) return;

    const inputPrecioTipo  = document.getElementById('evento-precio-tipo');
    const inputPrecio      = document.getElementById('evento-precio');
    const textarea         = document.getElementById('evento-descripcion');
    const contador         = document.getElementById('contador-descripcion');
    const msgExito         = document.getElementById('form-exito');

    /* Contador de caracteres */
    textarea.addEventListener('input', () => {
        contador.textContent = `${textarea.value.length} / 500`;
    });

    /* Mostrar/ocultar campo precio detallado */
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

    /* Helpers */
    const mostrarError = (id, msg) => { const el = document.getElementById(id); if (el) el.textContent = msg; };
    const limpiarError = (id)      => { const el = document.getElementById(id); if (el) el.textContent = ''; };
    const esUrlValida  = (s)       => { try { new URL(s); return true; } catch { return false; } }

    /* Validación */
    const validar = () => {
        let ok = true;

        const nombre = document.getElementById('evento-nombre').value.trim();
        if (!nombre) { mostrarError('error-nombre', 'El nombre del evento es obligatorio.'); ok = false; }
        else limpiarError('error-nombre');

        const fecha = document.getElementById('evento-fecha').value;
        if (!fecha) { mostrarError('error-fecha', 'Seleccioná una fecha.'); ok = false; }
        else limpiarError('error-fecha');

        const hora = document.getElementById('evento-hora').value;
        if (!hora) { mostrarError('error-hora', 'Ingresá una hora.'); ok = false; }
        else limpiarError('error-hora');

        const lugar = document.getElementById('evento-lugar').value.trim();
        if (!lugar) { mostrarError('error-lugar', 'El lugar o dirección es obligatorio.'); ok = false; }
        else limpiarError('error-lugar');

        const categoria = document.getElementById('evento-categoria').value;
        if (!categoria) { mostrarError('error-categoria', 'Seleccioná una categoría.'); ok = false; }
        else limpiarError('error-categoria');

        const precioTipo = inputPrecioTipo.value;
        if (!precioTipo) { mostrarError('error-precio', 'Indicá si el evento es gratuito o pago.'); ok = false; }
        else if (precioTipo === 'Pago' && !inputPrecio.value.trim()) { mostrarError('error-precio', 'Ingresá el valor de la entrada.'); ok = false; }
        else limpiarError('error-precio');

        const desc = textarea.value.trim();
        if (!desc) { mostrarError('error-descripcion', 'La descripción es obligatoria.'); ok = false; }
        else if (desc.length < 20) { mostrarError('error-descripcion', 'La descripción es muy corta.'); ok = false; }
        else limpiarError('error-descripcion');

        const link = document.getElementById('evento-link').value.trim();
        if (link && !esUrlValida(link)) { mostrarError('error-link', 'El link no es válido. Debe empezar con https://'); ok = false; }
        else limpiarError('error-link');

        return ok;
    };

    /* ── Helpers de localStorage ── */
    const getSolicitudes = () => {
        try { return JSON.parse(localStorage.getItem('solicitudesEnviadas') || '[]') || []; }
        catch (e) { return []; }
    };

    /* Submit */
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        msgExito.classList.add('form-exito-oculto');
        if (!validar()) return;

        const nombreEvento = document.getElementById('evento-nombre').value.trim();
        const categoria    = document.getElementById('evento-categoria').value;
        const precioTipo   = inputPrecioTipo.value;

        /* Generar ID único con prefijo para distinguirlo de los de data.js */
        const nuevoId = 'custom-' + Date.now();

        const solicitud = {
            /* Campos del formulario */
            id:          nuevoId,
            nombre:      nombreEvento,
            fecha:       document.getElementById('evento-fecha').value,
            hora:        document.getElementById('evento-hora').value,
            lugar:       document.getElementById('evento-lugar').value.trim(),
            categoria:   categoria,
            precio:      precioTipo === 'Gratis' ? 'Gratis' : inputPrecio.value.trim(),
            descripcion: textarea.value.trim(),
            link:        document.getElementById('evento-link').value.trim(),
            enviadoEn:   new Date().toISOString(),

            /* Campos adicionales en formato compatible con cards de eventos.js */
            title:       nombreEvento,
            date:        document.getElementById('evento-fecha').value,
            time:        document.getElementById('evento-hora').value,
            location:    document.getElementById('evento-lugar').value.trim(),
            category:    [categoria],
            price:       precioTipo === 'Gratis' ? 'Gratis' : inputPrecio.value.trim(),
            context:     textarea.value.trim(),
            registration: document.getElementById('evento-link').value.trim() || '#',
            organizer:   '#',
            availability: 'Disponible',
            esPersonalizado: true
        };

        /* Guardar en la lista de solicitudes */
        const historial = getSolicitudes();
        historial.push(solicitud);
        localStorage.setItem('solicitudesEnviadas', JSON.stringify(historial));

        form.reset();
        inputPrecio.classList.add('form-input-oculto');
        contador.textContent = '0 / 500';
        msgExito.classList.remove('form-exito-oculto');
        msgExito.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});
