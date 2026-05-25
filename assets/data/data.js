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

  lista.forEach(card => {
    const cardElement = document.createElement("div");

    cardElement.innerHTML = `
      <img src="/assets/img/expodent.jpg" alt="${card.title}" />
      <h2>${card.title}</h2>
      <p>${card.category}</p>
      <p>${card.date} - ${card.time}</p>
      <p>${card.location}</p>
      <p>Precio: ${card.price}</p>
      <p>Disponibilidad: ${card.availability}</p>

      <button id="btn-ver-mas-${card.id}" onclick="toggleDetalle(${card.id})">Ver más</button>

      <div id="detalle-${card.id}" style="display: none;">
        <p><strong>Organizador:</strong> <a href="${card.organizer}" target="_blank">${card.organizer}</a></p>
        <p><strong>Registro:</strong> <a href="${card.registration}" target="_blank">${card.registration}</a></p>
        <p><strong>Descripción:</strong> ${card.context}</p>
      </div>
    `;

    contenedor.appendChild(cardElement);
  });
}

// -----------------------------------------------
// Función que muestra u oculta el detalle de una card
// -----------------------------------------------
function toggleDetalle(id) {
  const detalle = document.querySelector("#detalle-" + id);
  const boton = document.querySelector("#btn-ver-mas-" + id);

  if (detalle.style.display === "none") {
    detalle.style.display = "block";
    boton.textContent = "Ver menos";
  } else {
    detalle.style.display = "none";
    boton.textContent = "Ver más";
  }
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
