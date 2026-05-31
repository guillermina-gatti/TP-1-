const cards = [
  {
    id: 1,
    title: "ExpoDent 2026",
    category: ["🏢 Expo", "Congresos", "Ferias"],
    date: "2026-05-23",
    time: "10:00",
    location: "Pabellón Verde, La Rural (Av. Sarmiento 2704, CABA)",
    price: "Gratis",
    organizer: "https://larural.com.ar",
    registration: "https://larural.com.ar",
    availability: "Disponible",
    context: "Último día de la exposición enfocada en nuevos desarrollos tecnológicos, demostraciones de productos y tendencias sobre salud bucal."
  },
  {
    id: 2,
    title: "Expo Veterinarias (Día 1)",
    category: ["🏢 Expo", "Congresos", "Ferias"],
    date: "2026-05-30",
    time: "12:00",
    location: "Pabellón Ocre, La Rural (Av. Sarmiento 2704, CABA)",
    price: "Gratis",
    organizer: "https://larural.com.ar",
    registration: "https://larural.com.ar",
    availability: "Disponible",
    context: "El evento más importante del rubro veterinario llega por primera vez a La Rural para que profesionales puedan capacitarse y generar negocios."
  },
  {
    id: 3,
    title: "Expo Veterinarias (Día 2)",
    category: ["🏢 Expo", "Congresos", "Ferias"],
    date: "2026-05-31",
    time: "12:00",
    location: "Pabellón Ocre, La Rural (Av. Sarmiento 2704, CABA)",
    price: "Gratis",
    organizer: "https://larural.com.ar",
    registration: "https://larural.com.ar",
    availability: "Disponible",
    context: "Segundo y último día de la feria dedicada a profesionales de la salud animal."
  },
  {
    id: 4,
    title: "De Händel a Strauss (Ciclo Clásica Joven)",
    category: ["🎻 Música Clásica", "Cultura", "Ópera"],
    date: "2026-05-27",
    time: "No disponible",
    location: "Salón Dorado, Teatro Colón (Cerrito 628, CABA)",
    price: "Gratis",
    organizer: "https://teatrocolon.org.ar/",
    registration: "https://teatrocolon.org.ar/",
    availability: "Disponible",
    context: "Recital de alumnos de la Carrera de Canto Lírico del Instituto Superior de Arte del Teatro Colón, interpretando obras de Händel, Mozart, Donizetti y Strauss."
  },
  {
    id: 5,
    title: "Música Antigua - Legados",
    category: ["🎻 Música Clásica", "Cultura", "Ópera"],
    date: "2026-05-28",
    time: "No disponible",
    location: "Teatro Colón (Cerrito 628, CABA)",
    price: "Gratis",
    organizer: "https://teatrocolon.org.ar/",
    registration: "https://teatrocolon.org.ar/",
    availability: "Disponible",
    context: "Concierto oficial perteneciente al prestigioso ciclo de Música Antigua del teatro porteño."
  },
  {
    id: 6,
    title: "Réquiem de Mozart",
    category: ["🎻 Música Clásica", "Cultura", "Ópera"],
    date: "2026-05-30",
    time: "No disponible",
    location: "Teatro Colón (Cerrito 628, CABA)",
    price: "Gratis",
    organizer: "https://teatrocolon.org.ar/",
    registration: "https://teatrocolon.org.ar/",
    availability: "Disponible",
    context: "La Camerata Académica y la Academia Coral del Instituto Superior de Arte del Teatro Colón interpretan el célebre Réquiem en re menor de Wolfgang Amadeus Mozart."
  },
  {
    id: 7,
    title: "Ópera: Dementia (Estreno Mundial)",
    category: ["🎻 Música Clásica", "Cultura", "Ópera"],
    date: "2026-05-31",
    time: "No disponible",
    location: "Teatro Colón (Cerrito 628, CABA)",
    price: "Gratis",
    organizer: "https://teatrocolon.org.ar/",
    registration: "https://teatrocolon.org.ar/",
    availability: "Disponible",
    context: "Estreno mundial de la ópera comisionada por el Teatro Colón a Oscar Strasnoy con libreto de Ariana Harwicz. Presenta a una pareja en tres momentos diferentes de sus vidas."
  },
  {
    id: 8,
    title: "Ricardo Arjona",
    category: ["🎵 Música", "Recitales"],
    date: "2026-05-23",
    time: "No disponible",
    location: "Movistar Arena (Humboldt 450, CABA)",
    price: "Gratis",
    organizer: "https://www.movistararena.com.ar",
    registration: "https://www.movistararena.com.ar",
    availability: "Disponible",
    context: "El artista presenta su gira promocionada como la producción más impactante de su trayectoria."
  },
  {
    id: 9,
    title: "La Beriso",
    category: ["🎵 Música", "Recitales"],
    date: "2026-05-23",
    time: "No disponible",
    location: "Teatro Vorterix (Av. Federico Lacroze 3455, CABA)",
    price: "Gratis",
    organizer: "https://vorterix.com/teatro/",
    registration: "https://www.ticketle.com.ar/buenos-aires/may",
    availability: "Disponible",
    context: "Primera fecha del fin de semana de la banda de rock argentino en el recinto de Colegiales."
  },
  {
    id: 10,
    title: "Airbag",
    category: ["🎵 Música", "Recitales"],
    date: "2026-05-23",
    time: "No disponible",
    location: "Estadio José Amalfitani - Vélez Sarsfield (Av. Juan B. Justo 9200, CABA)",
    price: "Gratis",
    organizer: "https://velez.com.ar/",
    registration: "https://www.ticketle.com.ar/buenos-aires/may",
    availability: "Disponible",
    context: "Primer show de la seguidilla de estadios de la banda de los hermanos Sardelli."
  },
  {
    id: 11,
    title: "Airbag",
    category: ["🎵 Música", "Recitales"],
    date: "2026-05-24",
    time: "No disponible",
    location: "Estadio José Amalfitani - Vélez Sarsfield (Av. Juan B. Justo 9200, CABA)",
    price: "$99.060",
    organizer: "https://velez.com.ar/",
    registration: "https://www.ticketle.com.ar/buenos-aires/may",
    availability: "Disponible",
    context: "Segunda fecha de la serie de recitales masivos de Airbag en Liniers."
  },
  {
    id: 12,
    title: "La Beriso",
    category: ["🎵 Música", "Recitales"],
    date: "2026-05-24",
    time: "No disponible",
    location: "Teatro Vorterix (Av. Federico Lacroze 3455, CABA)",
    price: "Gratis",
    organizer: "https://vorterix.com/teatro/",
    registration: "https://www.ticketle.com.ar/buenos-aires/may",
    availability: "Disponible",
    context: "Segunda función consecutiva de la banda en Vorterix."
  },
  {
    id: 13,
    title: "Andrés Calamaro",
    category: ["🎵 Música", "Recitales"],
    date: "2026-05-26",
    time: "No disponible",
    location: "Movistar Arena (Humboldt 450, CABA)",
    price: "Gratis",
    organizer: "https://www.movistararena.com.ar",
    registration: "https://www.movistararena.com.ar",
    availability: "Disponible",
    context: "El icónico músico de rock nacional presenta su show en el estadio de Villa Crespo, en la primera de cuatro fechas."
  },
  {
    id: 14,
    title: "Drowning Pool",
    category: ["🎵 Música", "Recitales"],
    date: "2026-05-26",
    time: "No disponible",
    location: "Teatro Vorterix (Av. Federico Lacroze 3455, CABA)",
    price: "$41.710",
    organizer: "https://vorterix.com/teatro/",
    registration: "https://www.ticketle.com.ar/buenos-aires/may",
    availability: "Disponible",
    context: "Show de la conocida banda estadounidense de metal alternativo."
  },
  {
    id: 15,
    title: "El Cuarteto de Nos",
    category: ["🎵 Música", "Recitales"],
    date: "2026-05-28",
    time: "21:00",
    location: "Movistar Arena (Humboldt 450, CABA)",
    price: "$50.000",
    organizer: "https://www.movistararena.com.ar",
    registration: "https://www.movistararena.com.ar",
    availability: "Disponible",
    context: "La banda uruguaya abre las puertas del estadio con un recorrido por clásicos, hits recientes y sus característicos diálogos escénicos."
  },
  {
    id: 16,
    title: "Flor Paz",
    category: ["🎵 Música", "Recitales"],
    date: "2026-05-28",
    time: "No disponible",
    location: "Teatro Vorterix (Av. Federico Lacroze 3455, CABA)",
    price: "Gratis",
    organizer: "https://vorterix.com/teatro/",
    registration: "https://www.ticketle.com.ar/buenos-aires/may",
    availability: "Disponible",
    context: "Presentación en vivo de la cantante folklórica argentina."
  },
  {
    id: 17,
    title: "Los Angeles Azules",
    category: ["🎵 Música", "Recitales"],
    date: "2026-05-29",
    time: "No disponible",
    location: "Movistar Arena (Humboldt 450, CABA)",
    price: "Gratis",
    organizer: "https://www.movistararena.com.ar",
    registration: "https://www.movistararena.com.ar",
    availability: "Disponible",
    context: "La legendaria agrupación mexicana de cumbia llega a Villa Crespo, siendo esta su primera fecha."
  },
  {
    id: 18,
    title: "Natalia Lafourcade (Cancionera Tour)",
    category: ["🎵 Música", "Recitales"],
    date: "2026-05-29",
    time: "No disponible",
    location: "Teatro Gran Rex (Av. Corrientes 857, CABA)",
    price: "Gratis",
    organizer: "https://teatro-granrex.com.ar/",
    registration: "https://teatro-granrex.com.ar/",
    availability: "Disponible",
    context: "La cantautora presenta una gira íntima de guitarra y voz que repasa las canciones más importantes de su carrera."
  },
  {
    id: 19,
    title: "Pomme",
    category: ["🎵 Música", "Recitales"],
    date: "2026-05-30",
    time: "No disponible",
    location: "Teatro Vorterix (Av. Federico Lacroze 3455, CABA)",
    price: "$90.360",
    organizer: "https://vorterix.com/teatro/",
    registration: "https://www.ticketle.com.ar/buenos-aires/may",
    availability: "Disponible",
    context: "Presentación de la aclamada cantautora francesa en Argentina."
  },
  {
    id: 20,
    title: "Airbag",
    category: ["🎵 Música", "Recitales"],
    date: "2026-05-30",
    time: "No disponible",
    location: "Estadio José Amalfitani - Vélez Sarsfield (Av. Juan B. Justo 9200, CABA)",
    price: "$99.840",
    organizer: "https://velez.com.ar/",
    registration: "https://www.ticketle.com.ar/buenos-aires/may",
    availability: "Disponible",
    context: "Tercer concierto de la banda programado en Liniers para el mes de mayo."
  },
  {
    id: 21,
    title: "Julia Zenko",
    category: ["🎵 Música", "Recitales"],
    date: "2026-05-30",
    time: "No disponible",
    location: "Café Berlin (Av. San Martín 6656, CABA)",
    price: "$111.210",
    organizer: "https://cafeberlinbuenosaires.com.ar/",
    registration: "https://www.ticketle.com.ar/buenos-aires/may",
    availability: "Disponible",
    context: "Concierto íntimo de la reconocida cantante en el local musical de Villa Devoto."
  },
  {
    id: 22,
    title: "Airbag",
    category: ["🎵 Música", "Recitales"],
    date: "2026-05-31",
    time: "No disponible",
    location: "Estadio José Amalfitani - Vélez Sarsfield (Av. Juan B. Justo 9200, CABA)",
    price: "$83.410",
    organizer: "https://velez.com.ar/",
    registration: "https://www.ticketle.com.ar/buenos-aires/may",
    availability: "Disponible",
    context: "Cuarta y última fecha documentada en mayo del masivo show de la banda en el estadio de Vélez."
  },
  {
    id: 23,
    title: "Soda Stereo 'Ecos'",
    category: ["🎵 Música", "Rock/Pop"],
    date: "2026-06-04",
    time: "No disponible",
    location: "Movistar Arena - Humboldt 450, CABA",
    price: "Gratis",
    organizer: "No disponible",
    registration: "No disponible",
    availability: "Disponible",
    context: "Este evento musical imperdible reúne a los mejores artistas de la escena local para brindar un espectáculo único e inolvidable en el centro de la Ciudad Autónoma de Buenos Aires durante junio de 2026."
  },
  {
    id: 24,
    title: "Andrés Calamaro",
    category: ["🎵 Música", "Rock Nacional"],
    date: "2026-06-03",
    time: "21:00",
    location: "Movistar Arena - Humboldt 450, CABA",
    price: "Gratis",
    organizer: "No disponible",
    registration: "No disponible",
    availability: "Disponible",
    context: "Este evento musical imperdible reúne a los mejores artistas de la escena local para brindar un espectáculo único e inolvidable en el centro de la Ciudad Autónoma de Buenos Aires durante junio de 2026."
  },
  {
    id: 25,
    title: "Babasónicos",
    category: ["🎵 Música", "Rock/Pop"],
    date: "2026-06-25",
    time: "21:00",
    location: "Movistar Arena - Humboldt 450, CABA",
    price: "$55.000",
    organizer: "No disponible",
    registration: "No disponible",
    availability: "Disponible",
    context: "Este evento musical imperdible reúne a los mejores artistas de la escena local para brindar un espectáculo único e inolvidable en el centro de la Ciudad Autónoma de Buenos Aires durante junio de 2026."
  },
  {
    id: 26,
    title: "Barbi Recanati y Lucy Patané",
    category: ["🎵 Música", "Indie/Rock"],
    date: "2026-06-05",
    time: "19:00",
    location: "Teatro Flores - Av. Rivadavia 7806, CABA",
    price: "Gratis",
    organizer: "No disponible",
    registration: "No disponible",
    availability: "Disponible",
    context: "Este evento musical imperdible reúne a los mejores artistas de la escena local para brindar un espectáculo único e inolvidable en el centro de la Ciudad Autónoma de Buenos Aires durante junio de 2026."
  },
  {
    id: 27,
    title: "Asspera - Back to the bizarra actitud",
    category: ["🎵 Música", "Metal"],
    date: "2026-06-06",
    time: "19:00",
    location: "Teatro Flores - Av. Rivadavia 7806, CABA",
    price: "Gratis",
    organizer: "No disponible",
    registration: "No disponible",
    availability: "Disponible",
    context: "Este evento musical imperdible reúne a los mejores artistas de la escena local para brindar un espectáculo único e inolvidable en el centro de la Ciudad Autónoma de Buenos Aires durante junio de 2026."
  },
  {
    id: 28,
    title: "Bizarren Miusik Parti",
    category: ["🎉 Fiesta", "Música Popular"],
    date: "2026-06-12",
    time: "23:00",
    location: "Teatro Flores - Av. Rivadavia 7806, CABA",
    price: "Gratis",
    organizer: "No disponible",
    registration: "No disponible",
    availability: "Disponible",
    context: "Este evento musical imperdible reúne a los mejores artistas de la escena local para brindar un espectáculo único e inolvidable en el centro de la Ciudad Autónoma de Buenos Aires durante junio de 2026."
  },
  {
    id: 29,
    title: "La Chancha Muda",
    category: ["🎵 Música", "Rock Nacional"],
    date: "2026-06-13",
    time: "19:00",
    location: "Teatro Flores - Av. Rivadavia 7806, CABA",
    price: "Gratis",
    organizer: "No disponible",
    registration: "No disponible",
    availability: "Disponible",
    context: "Este evento musical imperdible reúne a los mejores artistas de la escena local para brindar un espectáculo único e inolvidable en el centro de la Ciudad Autónoma de Buenos Aires durante junio de 2026."
  },
  {
    id: 30,
    title: "Fiesta Ricotera XXL 100% Redondo",
    category: ["🎵 Música", "Tributo"],
    date: "2026-06-13",
    time: "23:30",
    location: "Teatro Flores - Av. Rivadavia 7806, CABA",
    price: "Gratis",
    organizer: "No disponible",
    registration: "No disponible",
    availability: "Disponible",
    context: "Este evento musical imperdible reúne a los mejores artistas de la escena local para brindar un espectáculo único e inolvidable en el centro de la Ciudad Autónoma de Buenos Aires durante junio de 2026."
  },
  {
    id: 31,
    title: "Martín Delp celebra a Nat king Cole Trio",
    category: ["🎵 Música", "Jazz"],
    date: "2026-06-02",
    time: "16:00",
    location: "Bebop Club - Uriarte 1658, CABA",
    price: "Gratis",
    organizer: "No disponible",
    registration: "No disponible",
    availability: "No disponible",
    context: "Este evento musical imperdible reúne a los mejores artistas de la escena local para brindar un espectáculo único e inolvidable en el centro de la Ciudad Autónoma de Buenos Aires durante junio de 2026."
  },
  {
    id: 32,
    title: "Getz & Gilberto",
    category: ["🎵 Música", "Jazz"],
    date: "2026-06-07",
    time: "09:00",
    location: "Bebop Club - Uriarte 1658, CABA",
    price: "Gratis",
    organizer: "No disponible",
    registration: "No disponible",
    availability: "No disponible",
    context: "Este evento musical imperdible reúne a los mejores artistas de la escena local para brindar un espectáculo único e inolvidable en el centro de la Ciudad Autónoma de Buenos Aires durante junio de 2026."
  },
  {
    id: 33,
    title: "Elis & Tom",
    category: ["🎵 Música", "Jazz"],
    date: "2026-06-10",
    time: "16:00",
    location: "Bebop Club - Uriarte 1658, CABA",
    price: "Gratis",
    organizer: "No disponible",
    registration: "No disponible",
    availability: "No disponible",
    context: "Este evento musical imperdible reúne a los mejores artistas de la escena local para brindar un espectáculo único e inolvidable en el centro de la Ciudad Autónoma de Buenos Aires durante junio de 2026."
  },
  {
    id: 34,
    title: "Eve Cornelious + 6",
    category: ["🎵 Música", "Jazz"],
    date: "2026-06-18",
    time: "16:00",
    location: "Bebop Club - Uriarte 1658, CABA",
    price: "Gratis",
    organizer: "No disponible",
    registration: "No disponible",
    availability: "No disponible",
    context: "Este evento musical imperdible reúne a los mejores artistas de la escena local para brindar un espectáculo único e inolvidable en el centro de la Ciudad Autónoma de Buenos Aires durante junio de 2026."
  },
  {
    id: 35,
    title: "Chet Baker Sings",
    category: ["🎵 Música", "Jazz"],
    date: "2026-06-23",
    time: "16:00",
    location: "Bebop Club - Uriarte 1658, CABA",
    price: "Gratis",
    organizer: "No disponible",
    registration: "No disponible",
    availability: "No disponible",
    context: "Este evento musical imperdible reúne a los mejores artistas de la escena local para brindar un espectáculo único e inolvidable en el centro de la Ciudad Autónoma de Buenos Aires durante junio de 2026."
  },
  {
    id: 36,
    title: "The Ella Fitzgerald Songbook",
    category: ["🎵 Música", "Jazz"],
    date: "2026-06-25",
    time: "16:00",
    location: "Bebop Club - Uriarte 1658, CABA",
    price: "Gratis",
    organizer: "No disponible",
    registration: "No disponible",
    availability: "No disponible",
    context: "Este evento musical imperdible reúne a los mejores artistas de la escena local para brindar un espectáculo único e inolvidable en el centro de la Ciudad Autónoma de Buenos Aires durante junio de 2026."
  },
  {
    id: 37,
    title: "Vision Sakamoto",
    category: ["🎵 Música", "Jazz/Instrumental"],
    date: "2026-06-28",
    time: "17:30",
    location: "Bebop Club - Uriarte 1658, CABA",
    price: "Gratis",
    organizer: "No disponible",
    registration: "No disponible",
    availability: "No disponible",
    context: "Este evento musical imperdible reúne a los mejores artistas de la escena local para brindar un espectáculo único e inolvidable en el centro de la Ciudad Autónoma de Buenos Aires durante junio de 2026."
  },
  {
    id: 38,
    title: "Mel Muñiz y Rodrigo Núñez",
    category: ["🎵 Música", "Voz y Piano"],
    date: "2026-06-30",
    time: "16:00",
    location: "Bebop Club - Uriarte 1658, CABA",
    price: "Gratis",
    organizer: "No disponible",
    registration: "No disponible",
    availability: "No disponible",
    context: "Este evento musical imperdible reúne a los mejores artistas de la escena local para brindar un espectáculo único e inolvidable en el centro de la Ciudad Autónoma de Buenos Aires durante junio de 2026."
  },
  {
    id: 39,
    title: "Malena W. y Vera con Joaquín Ponferrada",
    category: ["🎵 Música", "Piano y Voz"],
    date: "2026-06-30",
    time: "18:30",
    location: "Bebop Club - Uriarte 1658, CABA",
    price: "Gratis",
    organizer: "No disponible",
    registration: "No disponible",
    availability: "Disponible",
    context: "Este evento musical imperdible reúne a los mejores artistas de la escena local para brindar un espectáculo único e inolvidable en el centro de la Ciudad Autónoma de Buenos Aires durante junio de 2026."
  },
  {
    id: 40,
    title: "El Plan De La Mariposa",
    category: ["🎵 Música", "Rock/Fusión"],
    date: "2026-06-13",
    time: "No disponible",
    location: "Movistar Arena - Humboldt 450, CABA",
    price: "$88.300",
    organizer: "No disponible",
    registration: "No disponible",
    availability: "Disponible",
    context: "Este evento musical imperdible reúne a los mejores artistas de la escena local para brindar un espectáculo único e inolvidable en el centro de la Ciudad Autónoma de Buenos Aires durante junio de 2026."
  },
  {
    id: 41,
    title: "Jóvenes Pordioseros",
    category: ["🎵 Música", "Rock Nacional"],
    date: "2026-06-13",
    time: "No disponible",
    location: "Teatro Vorterix - Av. Federico Lacroze 3455, CABA",
    price: "$35.050",
    organizer: "No disponible",
    registration: "No disponible",
    availability: "Disponible",
    context: "Este evento musical imperdible reúne a los mejores artistas de la escena local para brindar un espectáculo único e inolvidable en el centro de la Ciudad Autónoma de Buenos Aires durante junio de 2026."
  },
  {
    id: 42,
    title: "Argentina Rail-Tech Forum 2026",
    category: ["👔 Negocios", "Tecnología"],
    date: "2026-06-10",
    time: "09:00",
    location: "Sala Legamaster, AHK Argentina - Av. Corrientes 327, CABA",
    price: "Gratis",
    organizer: "No disponible",
    registration: "No disponible",
    availability: "Disponible",
    context: "Este prestigioso evento corporativo internacional conecta a líderes y empresas clave de la región, fomentando el desarrollo de la industria en la vibrante Ciudad Autónoma de Buenos Aires en el 2026!!."
  },
  {
    id: 43,
    title: "Billy Elliot El Musical",
    category: ["🎭 Teatro", "Musical"],
    date: "2026-06-05",
    time: "20:00",
    location: "Teatro Opera - Av. Corrientes 860, CABA",
    price: "$82.623",
    organizer: "https://www.linkedin.com/company/teatro-opera/",
    registration: "https://www.entradafan.com.ar/entradas-billy-elliot-buenos-aires/e/15972",
    availability: "Disponible",
    context: "Llega a la vibrante calle Corrientes la aclamada obra Billy Elliot El Musical. Esta súper producción internacional promete emocionar al público de Buenos Aires con su increíble historia de superación, coreografías espectaculares y la música original de Elton John. Una cita teatral absolutamente imperdible para este mes de junio."
  },
  {
    id: 44,
    title: "FITHEP LATAM – EXPOALIMENTARIA 2026",
    category: ["👔 Negocios", "Alimentación"],
    date: "2026-06-01",
    time: "13:00",
    location: "La Rural, Pabellón Azul - Av. Sarmiento 2704, CABA",
    price: "Gratis",
    organizer: "https://www.linkedin.com/company/la-rural-s.a./",
    registration: "https://larural.com.ar/calendario/",
    availability: "Disponible",
    context: "FITHEP Expoalimentaria 2026 abre sus puertas en La Rural para mostrar lo último en tecnología e innovación para la elaboración de alimentos fuera del hogar. Profesionales gastronómicos de toda Latinoamérica se reúnen en Buenos Aires para potenciar sus negocios, descubrir nuevas tendencias en el mercado y concretar alianzas estratégicas internacionales."
  },
  {
    id: 45,
    title: "BATEV 30º Exposición Internacional de la Construcción y la Vivienda",
    category: ["🏗️ Exposiciones", "Construcción"],
    date: "2026-06-24",
    time: "14:00",
    location: "La Rural, Pabellón Azul - Av. Sarmiento 2704, CABA",
    price: "Gratis",
    organizer: "https://www.linkedin.com/company/la-rural-s.a./",
    registration: "https://larural.com.ar/calendario/",
    availability: "Disponible",
    context: "BATEV celebra su trigésima edición consolidándose como la exposición líder de la construcción y la vivienda en la región. Durante cuatro días, los referentes de la industria exhibirán las innovaciones más recientes del mercado, debatiendo el futuro del sector arquitectónico en Argentina y brindando seminarios de actualización profesional de primer nivel."
  },
  {
    id: 46,
    title: "Ritmos Argentinos: Edición Rock",
    category: ["🎵 Música", "Rock/Pop"],
    date: "2026-06-05",
    time: "17:00",
    location: "Palacio Libertad, Plaza Seca - Sarmiento 151, CABA",
    price: "Gratis",
    organizer: "https://www.linkedin.com/company/ministeriodeculturaar/",
    registration: "https://palaciolibertad.gob.ar/agenda/",
    availability: "Disponible",
    context: "El Palacio Libertad inaugura el mes con una espectacular edición rockera de su clásico ciclo Ritmos Argentinos. Las bandas emergentes más destacadas del circuito local se presentan de forma libre y gratuita en la emblemática Plaza Seca, ofreciendo a los ciudadanos un atardecer lleno de energía, música en vivo y un profundo recorrido por nuestra identidad cultural y musical."
  },
  {
    id: 47,
    title: "XVI Congreso Internacional de TangoTerapia",
    category: ["💃 Danza", "Tango/Salud"],
    date: "2026-06-10",
    time: "14:00",
    location: "Palacio Libertad, Sala Federal - Sarmiento 151, CABA",
    price: "Gratis",
    organizer: "https://www.linkedin.com/company/ministeriodeculturaar/",
    registration: "https://palaciolibertad.gob.ar/agenda/",
    availability: "Disponible",
    context: "El prestigioso Congreso Internacional de TangoTerapia llega a la Sala Federal del Palacio Libertad para explorar los increíbles beneficios terapéuticos del baile porteño por excelencia. Médicos, psicólogos y bailarines compartirán talleres, ponencias y demostraciones prácticas sobre cómo el abrazo tanguero impacta positivamente en la rehabilitación neurológica y emocional de las personas."
  },
  {
    id: 48,
    title: "Federico Pereiro Quinteto con Paula Castignola",
    category: ["🎵 Música", "Tango"],
    date: "2026-06-12",
    time: "19:00",
    location: "Palacio Libertad, Plaza Seca - Sarmiento 151, CABA",
    price: "Gratis",
    organizer: "https://www.linkedin.com/company/ministeriodeculturaar/",
    registration: "https://palaciolibertad.gob.ar/agenda/",
    availability: "Disponible",
    context: "En el marco del exitoso ciclo Otoño Tango, el virtuoso bandoneonista Federico Pereiro se presenta junto a su quinteto y la inigualable voz de Paula Castignola. Este concierto de entrada libre promete deslumbrar al público porteño con arreglos contemporáneos que revitalizan los clásicos inmortales del cancionero arrabalero argentino."
  },
  {
    id: 49,
    title: "Sciammarella Tango: Concierto y Conferencia",
    category: ["🎵 Música", "Tango/Historia"],
    date: "2026-06-12",
    time: "19:00",
    location: "Palacio Libertad, Salón de Honor - Sarmiento 151, CABA",
    price: "Gratis",
    organizer: "https://www.linkedin.com/company/ministeriodeculturaar/",
    registration: "https://palaciolibertad.gob.ar/agenda/",
    availability: "Disponible",
    context: "La aclamada orquesta femenina Sciammarella Tango protagoniza una noche mágica en el Salón de Honor del Palacio Libertad. Más allá de deleitar con su impecable interpretación musical, el evento incluye una fascinante conferencia sobre la recuperación del patrimonio cultural oculto de las mujeres que hicieron grande la historia del tango en Buenos Aires."
  },
  {
    id: 50,
    title: "Mirta Alvarez: Concierto de Guitarra y Cuerdas",
    category: ["🎵 Música", "Tango Instrumental"],
    date: "2026-06-13",
    time: "18:00",
    location: "Palacio Libertad, Salón de Honor - Sarmiento 151, CABA",
    price: "Gratis",
    organizer: "https://www.linkedin.com/company/ministeriodeculturaar/",
    registration: "https://palaciolibertad.gob.ar/agenda/",
    availability: "Disponible",
    context: "La destacada guitarrista argentina Mirta Alvarez ofrecerá un concierto sublime en el Salón de Honor, acompañada por un ensamble de cuerdas de primer nivel. En esta presentación en vivo, interpretará piezas fundamentales del folklore y el tango, destacando la riqueza armónica y la profunda sensibilidad poética que la consagró internacionalmente."
  },
  {
    id: 51,
    title: "Proyección Piazzolla: Homenaje a Astor",
    category: ["🎵 Música", "Tango/Homenaje"],
    date: "2026-06-14",
    time: "19:00",
    location: "Palacio Libertad, Salón de Honor - Sarmiento 151, CABA",
    price: "Gratis",
    organizer: "https://www.linkedin.com/company/ministeriodeculturaar/",
    registration: "https://palaciolibertad.gob.ar/agenda/",
    availability: "Disponible",
    context: "Los amantes del tango vanguardista tienen una cita ineludible en el Palacio Libertad para conmemorar el inmenso legado de Astor Piazzolla. Destacados instrumentistas y cantantes del ámbito local recorrerán su obra vocal menos conocida, rindiendo un emotivo tributo musical a uno de los compositores más revolucionarios del siglo veinte."
  },
  {
    id: 52,
    title: "Mitos y Leyendas de Argentina: La Salamanca",
    category: ["🎭 Teatro", "Cultura/Folklore"],
    date: "2026-06-25",
    time: "20:00",
    location: "Palacio Libertad, Sala Argentina - Sarmiento 151, CABA",
    price: "Gratis",
    organizer: "https://www.linkedin.com/company/ministeriodeculturaar/",
    registration: "https://palaciolibertad.gob.ar/agenda/",
    availability: "Disponible",
    context: "Una fascinante obra inmersiva que se adentra en el corazón del folklore nacional para explorar los misterios de La Salamanca. A través de una impactante puesta en escena, narrativas cautivadoras y música autóctona, los asistentes viajarán por las creencias más arraigadas del norte argentino en la majestuosa Sala Argentina del Palacio Libertad."
  },
]
// -----------------------------------------------
// Función auxiliar: convierte el string de precio
// en un número. Devuelve null si no tiene precio.
// -----------------------------------------------
function parsearPrecio(precioStr) {
  // Si no tiene dato, devolvemos null
  if (!precioStr || precioStr.toLowerCase().includes("no disponible")) {
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
// Función para cargar dinámicamente las categorías
// -----------------------------------------------
function cargarCategorias() {
  const selectCategoria = document.querySelector("#filtro-categoria");
  if (!selectCategoria) return;

  const categoriasSet = new Set();
  cards.forEach(card => {
    if (Array.isArray(card.category) && card.category.length > 0) {
      categoriasSet.add(card.category[0]);
    } else if (card.category) {
      categoriasSet.add(card.category);
    }
  });

  const categoriasUnicas = Array.from(categoriasSet).sort();

  const optionTodas = document.createElement("option");
  optionTodas.value = "Todas";
  optionTodas.textContent = "Todas";
  selectCategoria.appendChild(optionTodas);

  categoriasUnicas.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    selectCategoria.appendChild(option);
  });
}

// -----------------------------------------------
// Función principal: aplica fecha + precio + categoría
// -----------------------------------------------
function aplicarFiltros() {
  const busqueda = document.querySelector("#filtro-buscar")?.value.toLowerCase().trim();
  const fecha = document.querySelector("#filtro-fecha")?.value;
  const precioOpcion = document.querySelector("#filtro-precio")?.value;
  const categoriaOpcion = document.querySelector("#filtro-categoria")?.value;
  const estadoOpcion = document.querySelector("#filtro-estado")?.value;

  let resultado = [...cards];

  // 1) Filtrar por búsqueda (título)
  if (busqueda) {
    resultado = resultado.filter(card => card.title && card.title.toLowerCase().includes(busqueda));
  }

  // 2) Filtrar por fecha (si hay fecha seleccionada)
  if (fecha) {
    resultado = resultado.filter(card => card.date === fecha);
  }

  // 3) Filtrar por precio ("Gratuito" o "Pago")
  if (precioOpcion === "Gratuito") {
    resultado = resultado.filter(card => card.price && card.price.toLowerCase().includes("gratuito"));
  } else if (precioOpcion === "Pago") {
    resultado = resultado.filter(card => {
      const precioNum = parsearPrecio(card.price);
      return precioNum !== null && !isNaN(precioNum);
    });
  }

  // 4) Filtrar por categoría (solo la categoría principal)
  if (categoriaOpcion && categoriaOpcion !== "Todas" && categoriaOpcion !== "") {
    resultado = resultado.filter(card => {
      if (Array.isArray(card.category)) {
        return card.category[0] === categoriaOpcion;
      }
      return card.category === categoriaOpcion;
    });
  }

  // 5) Filtrar por estado (Hoy / Proximamente / Finalizado)
  if (estadoOpcion && estadoOpcion !== "") {
    const hoyFiltro = new Date();
    hoyFiltro.setHours(0, 0, 0, 0);

    resultado = resultado.filter(card => {
      const fechaEvento = new Date(card.date + "T00:00:00");
      if (estadoOpcion === "Hoy") {
        return fechaEvento.getTime() === hoyFiltro.getTime();
      } else if (estadoOpcion === "Proximamente") {
        return fechaEvento > hoyFiltro;
      } else if (estadoOpcion === "Finalizado") {
        return fechaEvento < hoyFiltro;
      }
      return true;
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

  let agenda = JSON.parse(localStorage.getItem("agenda")) || [];

  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  // Ordenar: primero "Próximamente", luego "Terminado"
  const listaOrdenada = [...lista].sort((a, b) => {
    const fechaA = new Date(a.date + "T00:00:00");
    const fechaB = new Date(b.date + "T00:00:00");
    const terminoA = fechaA < hoy ? 1 : 0;
    const terminoB = fechaB < hoy ? 1 : 0;
    // Si uno terminó y el otro no, el que terminó va después
    if (terminoA !== terminoB) return terminoA - terminoB;
    // Dentro del mismo grupo, ordenar por fecha ascendente
    return fechaA - fechaB;
  });

  listaOrdenada.forEach(card => {
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

    const yaEnAgenda = agenda.includes(card.id);
    const textoBoton = yaEnAgenda ? "✓ Añadido" : "Añadir +";
    const atributoDisabled = yaEnAgenda ? "disabled" : "";

    cardElement.innerHTML = `
      <!-- Cabecera de la tarjeta con etiquetas descriptivas -->
      <header class="card-header">
        <span class="badge badge-categoria">${Array.isArray(card.category) ? (card.category.includes("🏢 Expo") ? "🏢 Expo" : card.category[0]) : card.category}</span>
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
        <button class="card-btn-agregar" onclick="event.stopPropagation(); agregarAgenda(${card.id})" ${atributoDisabled}>${textoBoton}</button>
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
            <p>${Array.isArray(card.category) ? card.category.join(", ") : card.category}</p>
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

  // Feedback visual: cambiar texto del botón permanentemente
  const btn = event.target;
  btn.textContent = "✓ Añadido";
  btn.disabled = true;
}

// -----------------------------------------------
// Inicialización
// -----------------------------------------------
// Cargar el dropdown de categorías dinámicamente
cargarCategorias();

const inputBuscar = document.querySelector("#filtro-buscar");
const inputFecha = document.querySelector("#filtro-fecha");
const selectPrecio = document.querySelector("#filtro-precio");
const selectCategoria = document.querySelector("#filtro-categoria");
const selectEstado = document.querySelector("#filtro-estado");
const btnLimpiar = document.querySelector("#btn-limpiar-filtro");

// Controles llaman a la misma función central
if (inputBuscar) inputBuscar.addEventListener("input", aplicarFiltros);
if (inputFecha) inputFecha.addEventListener("change", aplicarFiltros);
if (selectPrecio) selectPrecio.addEventListener("change", aplicarFiltros);
if (selectCategoria) selectCategoria.addEventListener("change", aplicarFiltros);
if (selectEstado) selectEstado.addEventListener("change", aplicarFiltros);

if (btnLimpiar) {
  btnLimpiar.addEventListener("click", function () {
    if (inputBuscar) inputBuscar.value = "";
    if (inputFecha) inputFecha.value = "";
    if (selectPrecio) selectPrecio.value = "";
    if (selectCategoria) selectCategoria.value = "";
    if (selectEstado) selectEstado.value = "";
    renderCards(cards);
  });
}

// Mostrar todas las cards al cargar
renderCards(cards);
