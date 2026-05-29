const cards = [
  {
    id: 1,
    title: "ExpoDent 2026",
    category: "🏢 Ferias y Congresos",
    date: "2026-05-23",
    time: "10:00",
    location: "Pabellón Verde, La Rural (Av. Sarmiento 2704, CABA)",
    price: "Dato no disponible",
    organizer: "https://larural.com.ar",
    registration: "https://larural.com.ar",
    availability: "Disponible",
    context: "Último día de la exposición enfocada en nuevos desarrollos tecnológicos, demostraciones de productos y tendencias sobre salud bucal."
  },
  {
    id: 2,
    title: "Expo Veterinarias (Día 1)",
    category: "🏢 Ferias y Congresos",
    date: "2026-05-30",
    time: "12:00",
    location: "Pabellón Ocre, La Rural (Av. Sarmiento 2704, CABA)",
    price: "Dato no disponible",
    organizer: "https://larural.com.ar",
    registration: "https://larural.com.ar",
    availability: "Disponible",
    context: "El evento más importante del rubro veterinario llega por primera vez a La Rural para que profesionales puedan capacitarse y generar negocios."
  },
  {
    id: 3,
    title: "Expo Veterinarias (Día 2)",
    category: "🏢 Ferias y Congresos",
    date: "2026-05-31",
    time: "12:00",
    location: "Pabellón Ocre, La Rural (Av. Sarmiento 2704, CABA)",
    price: "Dato no disponible",
    organizer: "https://larural.com.ar",
    registration: "https://larural.com.ar",
    availability: "Disponible",
    context: "Segundo y último día de la feria dedicada a profesionales de la salud animal."
  },
  {
    id: 4,
    title: "De Händel a Strauss (Ciclo Clásica Joven)",
    category: "🎻 Cultura, Música Clásica y Ópera",
    date: "2026-05-27",
    time: "Dato no disponible",
    location: "Salón Dorado, Teatro Colón (Cerrito 628, CABA)",
    price: "Dato no disponible",
    organizer: "https://teatrocolon.org.ar/",
    registration: "https://teatrocolon.org.ar/",
    availability: "Disponible",
    context: "Recital de alumnos de la Carrera de Canto Lírico del Instituto Superior de Arte del Teatro Colón, interpretando obras de Händel, Mozart, Donizetti y Strauss."
  },
  {
    id: 5,
    title: "Música Antigua - Legados",
    category: "🎻 Cultura, Música Clásica y Ópera",
    date: "2026-05-28",
    time: "Dato no disponible",
    location: "Teatro Colón (Cerrito 628, CABA)",
    price: "Dato no disponible",
    organizer: "https://teatrocolon.org.ar/",
    registration: "https://teatrocolon.org.ar/",
    availability: "Disponible",
    context: "Concierto oficial perteneciente al prestigioso ciclo de Música Antigua del teatro porteño."
  },
  {
    id: 6,
    title: "Réquiem de Mozart",
    category: "🎻 Cultura, Música Clásica y Ópera",
    date: "2026-05-30",
    time: "Dato no disponible",
    location: "Teatro Colón (Cerrito 628, CABA)",
    price: "Dato no disponible",
    organizer: "https://teatrocolon.org.ar/",
    registration: "https://teatrocolon.org.ar/",
    availability: "Disponible",
    context: "La Camerata Académica y la Academia Coral del Instituto Superior de Arte del Teatro Colón interpretan el célebre Réquiem en re menor de Wolfgang Amadeus Mozart."
  },
  {
    id: 7,
    title: "Ópera: Dementia (Estreno Mundial)",
    category: "🎻 Cultura, Música Clásica y Ópera",
    date: "2026-05-31",
    time: "Dato no disponible",
    location: "Teatro Colón (Cerrito 628, CABA)",
    price: "Dato no disponible",
    organizer: "https://teatrocolon.org.ar/",
    registration: "https://teatrocolon.org.ar/",
    availability: "Disponible",
    context: "Estreno mundial de la ópera comisionada por el Teatro Colón a Oscar Strasnoy con libreto de Ariana Harwicz. Presenta a una pareja en tres momentos diferentes de sus vidas."
  },
  {
    id: 8,
    title: "Ricardo Arjona",
    category: "🎵 Música y Recitales",
    date: "2026-05-23",
    time: "Dato no disponible",
    location: "Movistar Arena (Humboldt 450, CABA)",
    price: "Dato no disponible",
    organizer: "https://www.movistararena.com.ar",
    registration: "https://www.movistararena.com.ar",
    availability: "Disponible",
    context: "El artista presenta su gira promocionada como la producción más impactante de su trayectoria."
  },
  {
    id: 9,
    title: "La Beriso",
    category: "🎵 Música y Recitales",
    date: "2026-05-23",
    time: "Dato no disponible",
    location: "Teatro Vorterix (Av. Federico Lacroze 3455, CABA)",
    price: "Dato no disponible",
    organizer: "https://vorterix.com/teatro/",
    registration: "https://www.ticketle.com.ar/buenos-aires/may",
    availability: "Disponible",
    context: "Primera fecha del fin de semana de la banda de rock argentino en el recinto de Colegiales."
  },
  {
    id: 10,
    title: "Airbag",
    category: "🎵 Música y Recitales",
    date: "2026-05-23",
    time: "Dato no disponible",
    location: "Estadio José Amalfitani - Vélez Sarsfield (Av. Juan B. Justo 9200, CABA)",
    price: "Dato no disponible",
    organizer: "https://velez.com.ar/",
    registration: "https://www.ticketle.com.ar/buenos-aires/may",
    availability: "Disponible",
    context: "Primer show de la seguidilla de estadios de la banda de los hermanos Sardelli."
  },
  {
    id: 11,
    title: "Airbag",
    category: "🎵 Música y Recitales",
    date: "2026-05-24",
    time: "Dato no disponible",
    location: "Estadio José Amalfitani - Vélez Sarsfield (Av. Juan B. Justo 9200, CABA)",
    price: "$99.060 (Valor de referencia)",
    organizer: "https://velez.com.ar/",
    registration: "https://www.ticketle.com.ar/buenos-aires/may",
    availability: "Disponible",
    context: "Segunda fecha de la serie de recitales masivos de Airbag en Liniers."
  },
  {
    id: 12,
    title: "La Beriso",
    category: "🎵 Música y Recitales",
    date: "2026-05-24",
    time: "Dato no disponible",
    location: "Teatro Vorterix (Av. Federico Lacroze 3455, CABA)",
    price: "Dato no disponible",
    organizer: "https://vorterix.com/teatro/",
    registration: "https://www.ticketle.com.ar/buenos-aires/may",
    availability: "Disponible",
    context: "Segunda función consecutiva de la banda en Vorterix."
  },
  {
    id: 13,
    title: "Andrés Calamaro",
    category: "🎵 Música y Recitales",
    date: "2026-05-26",
    time: "Dato no disponible",
    location: "Movistar Arena (Humboldt 450, CABA)",
    price: "Dato no disponible",
    organizer: "https://www.movistararena.com.ar",
    registration: "https://www.movistararena.com.ar",
    availability: "Disponible",
    context: "El icónico músico de rock nacional presenta su show en el estadio de Villa Crespo, en la primera de cuatro fechas."
  },
  {
    id: 14,
    title: "Drowning Pool",
    category: "🎵 Música y Recitales",
    date: "2026-05-26",
    time: "Dato no disponible",
    location: "Teatro Vorterix (Av. Federico Lacroze 3455, CABA)",
    price: "$41.710 (Valor de referencia)",
    organizer: "https://vorterix.com/teatro/",
    registration: "https://www.ticketle.com.ar/buenos-aires/may",
    availability: "Disponible",
    context: "Show de la conocida banda estadounidense de metal alternativo."
  },
  {
    id: 15,
    title: "El Cuarteto de Nos",
    category: "🎵 Música y Recitales",
    date: "2026-05-28",
    time: "21:00",
    location: "Movistar Arena (Humboldt 450, CABA)",
    price: "Desde $50.000",
    organizer: "https://www.movistararena.com.ar",
    registration: "https://www.movistararena.com.ar",
    availability: "Disponible",
    context: "La banda uruguaya abre las puertas del estadio con un recorrido por clásicos, hits recientes y sus característicos diálogos escénicos."
  },
  {
    id: 16,
    title: "Flor Paz",
    category: "🎵 Música y Recitales",
    date: "2026-05-28",
    time: "Dato no disponible",
    location: "Teatro Vorterix (Av. Federico Lacroze 3455, CABA)",
    price: "Dato no disponible",
    organizer: "https://vorterix.com/teatro/",
    registration: "https://www.ticketle.com.ar/buenos-aires/may",
    availability: "Disponible",
    context: "Presentación en vivo de la cantante folklórica argentina."
  },
  {
    id: 17,
    title: "Los Angeles Azules",
    category: "🎵 Música y Recitales",
    date: "2026-05-29",
    time: "Dato no disponible",
    location: "Movistar Arena (Humboldt 450, CABA)",
    price: "Dato no disponible",
    organizer: "https://www.movistararena.com.ar",
    registration: "https://www.movistararena.com.ar",
    availability: "Disponible",
    context: "La legendaria agrupación mexicana de cumbia llega a Villa Crespo, siendo esta su primera fecha."
  },
  {
    id: 18,
    title: "Natalia Lafourcade (Cancionera Tour)",
    category: "🎵 Música y Recitales",
    date: "2026-05-29",
    time: "Dato no disponible",
    location: "Teatro Gran Rex (Av. Corrientes 857, CABA)",
    price: "Dato no disponible",
    organizer: "https://teatro-granrex.com.ar/",
    registration: "https://teatro-granrex.com.ar/",
    availability: "Disponible",
    context: "La cantautora presenta una gira íntima de guitarra y voz que repasa las canciones más importantes de su carrera."
  },
  {
    id: 19,
    title: "Pomme",
    category: "🎵 Música y Recitales",
    date: "2026-05-30",
    time: "Dato no disponible",
    location: "Teatro Vorterix (Av. Federico Lacroze 3455, CABA)",
    price: "$90.360 (Valor de referencia)",
    organizer: "https://vorterix.com/teatro/",
    registration: "https://www.ticketle.com.ar/buenos-aires/may",
    availability: "Disponible",
    context: "Presentación de la aclamada cantautora francesa en Argentina."
  },
  {
    id: 20,
    title: "Airbag",
    category: "🎵 Música y Recitales",
    date: "2026-05-30",
    time: "Dato no disponible",
    location: "Estadio José Amalfitani - Vélez Sarsfield (Av. Juan B. Justo 9200, CABA)",
    price: "$99.840 (Valor de referencia)",
    organizer: "https://velez.com.ar/",
    registration: "https://www.ticketle.com.ar/buenos-aires/may",
    availability: "Disponible",
    context: "Tercer concierto de la banda programado en Liniers para el mes de mayo."
  },
  {
    id: 21,
    title: "Julia Zenko",
    category: "🎵 Música y Recitales",
    date: "2026-05-30",
    time: "Dato no disponible",
    location: "Café Berlin (Av. San Martín 6656, CABA)",
    price: "$111.210 (Valor de referencia)",
    organizer: "https://cafeberlinbuenosaires.com.ar/",
    registration: "https://www.ticketle.com.ar/buenos-aires/may",
    availability: "Disponible",
    context: "Concierto íntimo de la reconocida cantante en el local musical de Villa Devoto."
  },
  {
    id: 22,
    title: "Airbag",
    category: "🎵 Música y Recitales",
    date: "2026-05-31",
    time: "Dato no disponible",
    location: "Estadio José Amalfitani - Vélez Sarsfield (Av. Juan B. Justo 9200, CABA)",
    price: "$83.410 (Valor de referencia)",
    organizer: "https://velez.com.ar/",
    registration: "https://www.ticketle.com.ar/buenos-aires/may",
    availability: "Disponible",
    context: "Cuarta y última fecha documentada en mayo del masivo show de la banda en el estadio de Vélez."
  }
]
// -----------------------------------------------
// Función auxiliar: convierte el string de precio
// en un número. Devuelve null si no tiene precio.
// -----------------------------------------------
function parsearPrecio(precioStr) {
  // Si no tiene dato, devolvemos null
  if (!precioStr || precioStr.toLowerCase().includes("dato no disponible")) {
    return null;
  }
  // Eliminamos "$", "Desde ", "(Valor de referencia)", puntos de miles
  const soloNumeros = precioStr
    .replace(/Desde\s*/i, "")
    .replace(/\(.*?\)/g, "")
    .replace(/\$/g, "")
    .replace(/\./g, "")   // miles en formato argentino: 99.060 → 99060
    .trim();

  const numero = parseFloat(soloNumeros);
  return isNaN(numero) ? null : numero;
}

// -----------------------------------------------
// Función principal: aplica fecha + precio juntos
// -----------------------------------------------
function aplicarFiltros() {
  const fecha = document.querySelector("#filtro-fecha").value;
  const precioMaximo = document.querySelector("#filtro-precio").value;

  // 1) Filtrar por fecha (si hay fecha seleccionada)
  let resultado = fecha
    ? cards.filter(card => card.date === fecha)
    : [...cards];

  // 2) Filtrar por precio máximo (si el usuario ingresó un valor)
  if (precioMaximo !== "") {
    const limite = parseFloat(precioMaximo);
    resultado = resultado.filter(card => {
      const precio = parsearPrecio(card.price);
      // Si el evento no tiene precio informado, lo excluimos
      if (precio === null) return false;
      return precio <= limite;
    });
  }

  renderCards(resultado);
}

// -----------------------------------------------
// Función que renderiza las cards en el contenedor
// -----------------------------------------------
function renderCards(lista) {
  const contenedor = document.querySelector("#contenedor-cards-eventos");

  // Limpiamos el contenedor antes de renderizar
  contenedor.innerHTML = "";

  // Si no hay resultados, mostramos un mensaje
  if (lista.length === 0) {
    contenedor.innerHTML = "<p>No hay eventos para los filtros seleccionados.</p>";
    return;
  }

  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  lista.forEach(card => {
    // Se utiliza <article> en lugar de <div> porque representa contenido independiente e integrador (una tarjeta).
    const cardElement = document.createElement("article");
    cardElement.classList.add("card-evento");

    // Determinar estado según fecha
    const fechaEvento = new Date(card.date + "T00:00:00");
    const yaTermino = fechaEvento < hoy;
    const estadoTexto = yaTermino ? "Terminado" : "Próximamente";
    const estadoClase = yaTermino ? "badge-terminado" : "badge-proximamente";

    // Formatear fecha para mostrar
    const opcionesFecha = { day: 'numeric', month: 'long', year: 'numeric' };
    const fechaFormateada = fechaEvento.toLocaleDateString('es-AR', opcionesFecha);

    cardElement.innerHTML = `
      <!-- Cabecera de la tarjeta con etiquetas descriptivas -->
      <header class="card-header">
        <span class="badge badge-categoria">${card.category}</span>
        <span class="badge ${estadoClase}">${estadoTexto}</span>
      </header>

      <!-- Cuerpo principal de la tarjeta con el título y la descripción -->
      <section class="card-body">
        <h2 class="card-titulo">${card.title}</h2>
        <p class="card-descripcion">${card.context}</p>
      </section>

      <!-- Sección con los detalles específicos (fecha, hora, lugar) -->
      <section class="card-specs">
        <div class="card-spec-row">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E0E1DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span>${fechaFormateada}</span>
        </div>
        <div class="card-spec-row">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E0E1DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>${card.time}</span>
        </div>
        <div class="card-spec-row">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E0E1DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>${card.location}</span>
        </div>
      </section>

      <!-- Pie de la tarjeta con el precio y la acción principal -->
      <footer class="card-footer">
        <span class="card-precio">${card.price}</span>
        <button class="card-btn-agregar" onclick="event.stopPropagation(); agregarAgenda(${card.id})">Añadir +</button>
      </footer>
    `;

    // Al hacer clic en la card se abre el modal
    cardElement.addEventListener("click", function () {
      abrirModal(card.id);
    });

    contenedor.appendChild(cardElement);
  });
}

// -----------------------------------------------
// MODAL — Abrir con los datos del evento
// -----------------------------------------------
function abrirModal(id) {
  const card = cards.find(c => c.id === id);
  if (!card) return;

  const modal = document.querySelector("#modal-detalle-evento");

  modal.innerHTML = `
    <!-- Capa oscura semitransparente que cubre la página -->
    <div class="modal-overlay" onclick="cerrarModal()">
      <!-- Contenedor principal de la información, usamos article por ser contenido autónomo -->
      <article class="modal-contenido" onclick="event.stopPropagation()">

        <!-- Cabecera del modal con el título y el botón de cerrar -->
        <header class="modal-header">
          <h2>${card.title}</h2>
          <button class="modal-btn-cerrar" onclick="cerrarModal()">✕</button>
        </header>

        <!-- Descripción detallada del evento -->
        <p class="modal-descripcion">${card.context}</p>

        <!-- Sección de cuadrícula para los datos específicos -->
        <section class="modal-grid">
          <div class="modal-campo">
            <span>Categoría</span>
            <p>${card.category}</p>
          </div>
          <div class="modal-campo">
            <span>Precio</span>
            <p>${card.price}</p>
          </div>
          <div class="modal-campo">
            <span>Fecha</span>
            <p>${card.date}</p>
          </div>
          <div class="modal-campo">
            <span>Horario</span>
            <p>${card.time}</p>
          </div>
          <div class="modal-campo">
            <span>Lugar</span>
            <p>${card.location}</p>
          </div>
          <div class="modal-campo">
            <span>Organizador</span>
            <p><a href="${card.organizer}" target="_blank">${card.organizer}</a></p>
          </div>
          <div class="modal-campo">
            <span>Registro</span>
            <p><a href="${card.registration}" target="_blank">${card.registration}</a></p>
          </div>
        </section>

        <!-- Pie del modal con los botones de acción final -->
        <footer class="modal-botones">
          <a href="${card.registration}" target="_blank" class="modal-btn-registrar">Registrarse</a>
          <button class="modal-btn-cerrar-pie" onclick="cerrarModal()">Cerrar</button>
        </footer>

      </article>
    </div>
  `;

  modal.classList.remove("modal-oculto");
  document.body.classList.add("modal-abierto");
}

// -----------------------------------------------
// MODAL — Cerrar
// -----------------------------------------------
function cerrarModal() {
  const modal = document.querySelector("#modal-detalle-evento");
  modal.classList.add("modal-oculto");
  document.body.classList.remove("modal-abierto");
}

// -----------------------------------------------
// AGENDA — Guardar evento en localStorage
// -----------------------------------------------
function agregarAgenda(id) {
  let agenda = JSON.parse(localStorage.getItem("agenda")) || [];

  // Evitar duplicados
  if (agenda.includes(id)) {
    alert("Este evento ya está en tu agenda.");
    return;
  }

  agenda.push(id);
  localStorage.setItem("agenda", JSON.stringify(agenda));

  // Feedback visual: cambiar texto del botón brevemente
  const btn = event.target;
  const textoOriginal = btn.textContent;
  btn.textContent = "✓ Añadido";
  btn.disabled = true;
  setTimeout(function () {
    btn.textContent = textoOriginal;
    btn.disabled = false;
  }, 1500);
}

// -----------------------------------------------
// Inicialización
// -----------------------------------------------
const inputFecha = document.querySelector("#filtro-fecha");
const selectPrecio = document.querySelector("#filtro-precio");
const btnLimpiar = document.querySelector("#btn-limpiar-filtro");

// Ambos controles llaman a la misma función central
inputFecha.addEventListener("change", aplicarFiltros);
// "input" reacciona en tiempo real mientras el usuario escribe
selectPrecio.addEventListener("input", aplicarFiltros);

// Limpiar ambos filtros y mostrar todas las cards
btnLimpiar.addEventListener("click", function () {
  inputFecha.value = "";
  selectPrecio.value = "";
  renderCards(cards);
});

// Mostrar todas las cards al cargar
renderCards(cards);
