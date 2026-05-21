# Indie Events Radar - TP Integrador

Link al proyecto 🌐  
*(Coloca aquí el link de Netlify cuando hagas el deploy)*

## 🛠️ Tecnologías utilizadas

* HTML5 / CSS3 (Estructura semántica y diseño responsivo)
* JavaScript (Filtros, modales, carrusel y control de estados)
* LocalStorage (Persistencia de la agenda personal)
* Git / GitHub (Estrategia de ramificación avanzada)
* Netlify (Despliegue automático)
* Trello (Organización ágil en equipo)

---

## 📁 Estructura del proyecto

```text
TP1/
├── assets/
│   ├── css/
│   │   ├── componentes.css      # Estilos de cards, modales y botones
│   │   ├── responsive.css       # Adaptabilidad para móviles y tablets
│   │   └── styles.css           # Estilos generales y variables
│   ├── data/
│   │   └── eventos.js           # Array de objetos de eventos
│   ├── img/                     # Imágenes, logos y fondos del sitio
│   └── js/
│       ├── agenda.js            # Lógica de Mi Agenda
│       ├── data.js              # Carga centralizada de datos
│       ├── eventos.js           # Lógica de filtros, cards y modales
│       └── utils.js             # Funciones auxiliares reutilizables
├── agenda.html                  # Eventos guardados (Mi Agenda)
├── contacto.html                # Formulario de contacto
├── eventos.html                 # Cartelera completa con filtros
├── index.html                   # Página principal (Inicio)
├── informe-ia.md                # Documentación de uso de IA
└── README.md                    # Este archivo
🖥️ Páginas y Funcionalidades
index.html — Inicio: Presentación de la comunidad, carrusel dinámico de destacados y botón flotante de WhatsApp.

eventos.html — Eventos: Cartelera con filtros por categoría, precio y fecha. Desafío de estados visuales (pasado/hoy/futuro), modales de detalle e incorporación a la agenda.

agenda.html — Mi agenda: Renderizado dinámico de eventos guardados con LocalStorage, opción de eliminar tarjetas y mensaje adaptativo de agenda vacía.

contacto.html — Contacto: Formulario de atención con validaciones nativas y desde el DOM, enlaces a redes sociales y botón de asistencia.

📊 Metodología y Control de Versiones (Git)
Se utilizó un tablero Trello basado en Scrum para la división de tareas en microrrequerimientos y un flujo de trabajo estructurado en tres niveles de ramas:

main: Código estable conectado a Netlify para producción.

testing: Rama intermedia para integrar tareas y testear errores antes de subir a main.

dev: Rama base de trabajo diario donde se unifica el desarrollo general.

feature/...: Ramas temporales creadas desde dev para resolver las tarjetas individuales de Trello de forma segura.

Flujo de comandos básico:
Bash
git checkout dev
git pull origin dev
git checkout -b feature/nombre-tarea
# (Se programa la tarea en el editor de código)
git add .
git commit -m "Descripción corta de la tarea resuelta"
git checkout dev
git merge feature/nombre-tarea
git push origin dev
🎯 Estado final
Sitio 100% completo, responsivo y funcional.

Código modularizado en arquitectura limpia (css/, js/, data/ e img/ separados por responsabilidades).

Flujo coordinado de Git Flow y Trello implementados con éxito para el trabajo colaborativo.

👥 Integrantes
Alumno 1: [Nombre]

Alumno 2: [Nombre]

Alumno 3: [Nombre]

Proyecto: Idea 7: Indie Events Radar (Nicho: Cultura, eventos y comunidad)