# Indie Events Radar

## Descripción
Agenda de eventos independientes de Buenos Aires: talleres, charlas, recitales, ferias, muestras y meetups. El sitio permite explorar la cartelera completa, filtrar eventos por categoría, precio y fecha, guardar los que te interesan en una agenda personal y enviar una solicitud para publicar tu propio evento.

---

## 🌐 Link al proyecto
*(Pegar link de Netlify acá)*

---

## 🛠️ Tecnologías utilizadas
- HTML5 / CSS3 (Estructura semántica y diseño responsivo)
- JavaScript vanilla (Filtros, modales, carrusel y control de estados)
- localStorage (Persistencia de la agenda personal y solicitudes de contacto)
- Git / GitHub (Control de versiones y trabajo colaborativo)
- Netlify (Despliegue automático)
- Trello (Organización ágil en equipo)

---

## 📁 Estructura del proyecto
```
TP1/
├── assets/
│   ├── css/
│   │   ├── componentes.css      # Estilos de cards, modales, formulario y botones
│   │   ├── responsive.css       # Adaptabilidad para móviles y tablets
│   │   └── styles.css           # Estilos generales y base del sitio
│   ├── data/
│   │   └── eventos.js           # Array de objetos con los datos de eventos
│   ├── img/                     # Imágenes, logos y fondos del sitio
│   └── js/
│       ├── agenda.js            # Lógica de Mi Agenda (localStorage)
│       ├── contacto.js          # Validación y envío del formulario de contacto
│       ├── eventos.js           # Lógica de filtros, cards y modales
│       ├── index.js             # Lógica del carrusel hero
│       └── utils.js             # Brújula animada del nav
│   └── pages/
│       ├── agenda.html          # Eventos guardados (Mi Agenda)
│       ├── contacto.html        # Formulario para publicar un evento
│       └── eventos.html         # Cartelera completa con filtros
├── index.html                   # Página principal (Inicio)
├── informe-ia.md                # Documentación de uso de IA
└── README.md                    # Este archivo
```

---

## 🖥️ Páginas y funcionalidades

### index.html — Inicio
Presentación de la comunidad y carrusel dinámico de eventos destacados con soporte táctil y navegación por puntos.

### eventos.html — Eventos
Cartelera con filtros dinámicos por categoría, precio y fecha. Estados visuales diferenciados para eventos pasados, de hoy y futuros. Modal de detalle e incorporación a la agenda personal.

### agenda.html — Mi Agenda
Renderizado dinámico de eventos guardados con localStorage, opción de eliminar tarjetas individualmente y mensaje adaptativo cuando la agenda está vacía.

### contacto.html — Contacto
Formulario para solicitar la publicación de un evento, con validaciones desde el DOM y guardado de la solicitud en localStorage.

---

## ⚙️ Funcionalidades JavaScript
1. **Filtros dinámicos** por categoría, precio y fecha en la cartelera de eventos.
2. **Agenda personal** con localStorage: guardar y eliminar eventos, persistencia entre sesiones.
3. **Estados visuales** de eventos: pasado, hoy y próximo, diferenciados en las cards.
4. **Modal de detalle** por evento con información completa.
5. **Carrusel hero** animado con autoavance, soporte táctil y navegación por teclado.
6. **Formulario de contacto** con validaciones en el DOM y guardado de solicitud en localStorage.

---

## 📖 Instrucciones de uso

1. Abrí el sitio desde el link de deploy.
2. En **Inicio** explorá los eventos destacados en el carrusel.
3. En **Eventos** filtrá la cartelera por categoría, precio o fecha.
4. Hacé clic en una card para ver el detalle completo del evento.
5. Usá el botón **Agregar a agenda** para guardar los eventos que te interesen.
6. En **Mi Agenda** encontrás todos tus eventos guardados y podés eliminarlos.
7. En **Contacto** completá el formulario para solicitar publicar tu propio evento.

---

## 📊 Metodología y control de versiones (Git)

| Rama | Rol | Descripción |
|---|---|---|
| `main` | Producción | Código estable. Conectada a Netlify para el deploy automático. Solo recibe cambios por Pull Request. |
| `feature-developer` | Desarrollo | Rama de trabajo diario. Acá se desarrolla, prueba y unifica el código antes de subir a main. |

El flujo de trabajo fue: desarrollar en `feature-developer` → probar → Pull Request hacia `main` cuando el código estaba estable.

---

## 🎯 Estado final
- Sitio 100% completo, responsivo y funcional.
- Código modularizado en arquitectura limpia (`css/`, `js/`, `data/` e `img/` separados por responsabilidad).
- Flujo de Git y Trello coordinados para el trabajo colaborativo.

---

## 👥 Integrantes
- Brandon Velasquez
- Ayelén Ortega
- Guillermina Gatti

---

## 📌 Proyecto
**Idea 7: Indie Events Radar**
Nicho: Cultura, eventos y comunidad.