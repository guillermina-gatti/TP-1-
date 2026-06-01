# Informe de Construcción y Prompts — Fase 2: Diseño Responsivo y Menú Móvil

**Proyecto:** Radar Indie (Adaptación Mobile-First y UI)
**Fecha:** 31 de mayo / 1 de junio de 2026

Este documento detalla cronológicamente los prompts (instrucciones) utilizados durante la segunda fase del proyecto, enfocada en adaptar el sitio para dispositivos móviles (Responsive Design) y mejorar la navegación.

---

## 1. Prompt: Refactorización Mobile-First
> *"todo el cambio tenia que ser en la carpeta que ya teniamos con esos archivos, no tenias que crear nada nuevo solo hacerlo responsi para celulares. necesito que hagas responsi todo el codigo y : Actúa como un Desarrollador Web Front-End Senior... Enfoque Mobile-First..."*

### Objetivo
Adaptar todo el proyecto existente para que sea 100% responsivo, diseñado pensando primero en celulares (Mobile-First) y usando unidades fluidas.

### Consecuencias e Implementación
- **Refactorización CSS profunda:** Se reescribieron `styles.css`, `componentes.css` y `responsive.css`. 
- **Cambio de paradigma:** Se eliminaron las reglas `@media (max-width)` (Desktop-first) y se reemplazaron por estilos base para celulares (columnas únicas de `1fr`, sin anchos fijos).
- **Escalabilidad:** Se usó `@media (min-width: 768px)` exclusivamente para escalar el diseño a múltiples columnas en tablets y pantallas de escritorio.
- Todo el sitio pasó a ser fluido y adaptable sin modificar la estructura HTML base.

---

## 2. Prompt: Implementación del Menú Hamburguesa
> *"agrega una opcion que guarde los html en una solo lugar y al momento de apretarlo se vean todas"*

### Objetivo
Resolver el problema de la navegación en dispositivos móviles, donde los enlaces ocupaban mucho espacio en el encabezado, consolidándolos en un solo botón interactivo.

### Consecuencias e Implementación
- **HTML:** Se agregó un botón interactivo (ícono SVG de 3 rayas, conocido como menú hamburguesa) al lado del título en todos los archivos (`index.html`, `eventos.html`, `agenda.html` y `contacto.html`).
- **CSS:** Se configuró para que los enlaces del `<nav>` estén ocultos por defecto en celular y solo aparezcan cuando se activa una clase especial (`.menu-abierto`). En escritorio, el botón se oculta y los enlaces se muestran normalmente.
- **JavaScript:** Se añadió un bloque de código en `utils.js` que escucha el "clic" en el botón SVG y alterna la visibilidad del menú de enlaces.

---

## 3. Prompt: Centrado del Pie de Página (Footer)
> *"que los footers se vean centrados para celular"*

### Objetivo
Mejorar la estética del footer en pantallas estrechas, donde la alineación a la izquierda original se veía desbalanceada.

### Consecuencias e Implementación
- **CSS (`styles.css`):** Se modificaron las clases del footer (`.footer-inner`, `.footer-brand`, `.footer-links`, `.footer-socials`).
- **Alineación móvil:** Se les aplicó `text-align: center`, `justify-content: center` y `align-items: center` por defecto.
- **Restauración en escritorio:** Dentro del bloque `@media (min-width: 768px)`, se devolvieron estas propiedades a `flex-start` y `text-align: left`, manteniendo intacto el diseño original para PC.

---

## 4. Prompt: Overlay Fullscreen para el Menú
> *"al momento de tocar el svg quiero que las opciones se vean en el centro de la pantalla que el fondo se cuelva un poco negro"*

### Objetivo
Transformar el menú desplegable básico en un modal/overlay de pantalla completa (patrón moderno en UI móvil) para maximizar la legibilidad y el enfoque del usuario.

### Consecuencias e Implementación
- **Capa oscura (CSS):** Se cambió la posición del menú a `position: fixed` abarcando el 100% de la pantalla (`100vw` y `100vh`) con un fondo casi negro: `background-color: rgba(0, 0, 0, 0.92)`.
- **Centrado (CSS):** Usando Flexbox, las opciones de navegación se colocaron exactamente en el centro de la pantalla. El tamaño de letra se incrementó (`1.4rem`) para ser más táctil.
- **Jerarquía Visual (Z-index):** El botón SVG se ajustó con `position: relative` y un `z-index: 1001` para asegurar que siempre quede visible por encima del fondo oscuro, permitiendo al usuario cerrar el menú.
- **Bloqueo de Scroll (JS/CSS):** Se modificó `utils.js` para que, al abrir el menú, se agregue la clase `no-scroll` al `<body>`. Esto añade `overflow: hidden`, impidiendo que la página de fondo se mueva mientras el menú está abierto.

---

## 5. Prompt: Documentación Final
> *"hace un informe detalla de todos los ponts quese utilizaron y sus consecuencias en un archivo.md"*

### Objetivo
Generar este registro técnico del proceso de refactorización y toma de decisiones.

### Consecuencias
- Se redactó y guardó este documento (`informe_responsive.md`), estructurando lógicamente el paso a paso del desarrollo responsivo de la aplicación web.

---

## FASE 1: Estructura Base, UI y Lógica de Datos (Prompts Históricos)

A continuación se detallan los prompts fundamentales utilizados en las primeras etapas del proyecto, que el usuario ha solicitado agregar a este informe para tener un registro unificado.

### 6. Prompt: Estilos Globales y Barra de Navegación
> *"Necesito que el NAV tenga el color B8B8B8 de fondo y las letras dentro del nav tienen que ser de color negro. que del lado izquierdo abra un brujula que se mueve cada que el usuario haga clik en 'evento' 'inicio' 'agenda'. el color del resto de la pagina tiene que ser 415A77. El color de la tipografía debajo del nav tiene que utilizar E0E1DD."*

**Objetivo:** Establecer la paleta de colores base del sitio e implementar una identidad interactiva (brújula) en el menú de navegación.
**Consecuencias:** Se configuró el `body` con fondo `#415A77` y texto `#E0E1DD`. El `<nav>` recibió el fondo `#B8B8B8`. Se insertó un SVG de brújula que rota dinámicamente mediante JS según la página en la que se encuentra el usuario.

### 7. Prompt: Organización de Archivos CSS
> *"seme olvido decirle en que archivo.css lo tenia que colocar las modificaciones de css de la pagina ponelas en styles.css , componentes.css es solo para crads o componentes de la pagina"*

**Objetivo:** Mantener una arquitectura CSS limpia y escalable.
**Consecuencias:** Se separaron las responsabilidades. Los estilos estructurales y globales fueron a `styles.css`, mientras que `componentes.css` quedó reservado exclusivamente para la UI modular (tarjetas, botones, filtros).

### 8. Prompt: Arquitectura y Diseño de Cards
> *"solo tenes que utilizar los archivo componentes.cssy eventos.html, quiero q las cards les hagas las siguientes modificación: 1. El Chasis... 2. Indicadores Superiores... 3. Núcleo de Información... 4. Bloque de Especificaciones... 5. Módulo de Transacción (Footer)..."*

**Objetivo:** Construir el componente visual principal del proyecto (la tarjeta de evento) con un alto nivel de detalle UI/UX.
**Consecuencias:** Se creó `.card-evento` en `componentes.css`. Se integró lógica en JS para inyectar dinámicamente etiquetas como "Próximamente" o "Terminado" evaluando fechas. Se reemplazó el botón de "ver más" haciendo que toda la tarjeta sea cliqueable para abrir el modal de detalles.

### 9. Prompt: Evolución del Modelo de Datos (Arrays Multidimensionales)
> *"Antes de hacer esto quería mejorar un poco todo para que las categorías no esten en un solo bloque haci que busque que forma tenia para que la clave tenda mas de un valor... category: ['🏢 Ferias', 'Congresos', 'Expo']... quiero que solo se vea un valor y cuando se aga clik en la card se vean todos los valores..."*

**Objetivo:** Permitir que un evento pertenezca a múltiples categorías y optimizar su visualización en la interfaz.
**Consecuencias:** Se refactorizó `data.js` para que `category` sea un array en lugar de un string simple. En JS se programó que la vista de la card en la grilla solo renderice `category[0]`, mientras que el modal expandido muestra el array completo usando `.join(', ')`.

### 10. Prompt: Algoritmo de Jerarquía Visual en Categorías
> *"quiero que tenga una gerarquia para mostarar en esta gerarquia si la clave tiene lun valor 🏢 Expo siempre se va a mostrar primero y luego cuando se aprete la cards se ven los demas valores..."*

**Objetivo:** Darle peso visual prioritario a categorías específicas.
**Consecuencias:** Se implementó una función de ordenamiento/búsqueda en el renderizado JS que evalúa si el array de categorías incluye el string "Expo" y fuerza a que este sea el que aparezca en el badge principal de la tarjeta.

### 11. Prompt: Panel de Control - Filtro Dinámico de Precio
> *"en la categoria filtros-seccion el precio debe tener dos opciones a elegir gratuito y pago... si tiene un valor numerico lo clasifica como pago y si dice numerico lo clasifica como gratuito"*

**Objetivo:** Desarrollar la lógica de filtrado reactivo basado en el tipo de dato de la clave `price`.
**Consecuencias:** Se construyó la lógica JS que evalúa si el contenido de `price` es procesable como número (`isNaN()`). En base a esta comprobación tipográfica, se clasifican y renderizan las cards según el `select` interactivo elegido por el usuario.

### 12. Prompt: Inyección de Datos Reales (Web Scraping V1)
> *"Actúa como un analista de datos y scraper web experto. Tu objetivo es buscar en internet eventos reales, confirmados y públicos... Si un dato específico... no está publicado, asigna obligatoriamente el valor 'Dato no disponible'..."*

**Objetivo:** Sustituir los datos de prueba (`mock data`) con información real de la ciudad de Buenos Aires para junio 2026.
**Consecuencias:** Se obtuvo un bloque de JSON con 20 eventos reales. Sin embargo, la permisión de usar "Dato no disponible" provocó vacíos en la renderización de las cards en la UI.

### 13. Prompt: Depuración y Scraping Estricto (V2)
> *"Reglas de ejecución y Filtrado Absoluto (Cero Tolerancia a vacíos): Solo selecciona eventos que tengan el 100% de la información... Prohibido el relleno o estimación... IDs empezando por 43. Exactamente 10 eventos."*

**Objetivo:** Corregir los problemas de integridad de datos del volcado anterior aplicando un control de calidad estricto.
**Consecuencias:** Se generó un nuevo array de 10 eventos sin lagunas de información, continuando la secuencia de IDs de manera correlativa. Se logró una renderización perfecta en la interfaz sin espacios vacíos.
/
* *Resultado:* *Aceptado.* Estableció la arquitectura base del almacenamiento persistente a través del objeto global localStorage y definió la función para inyectar dinámicamente las tarjetas horizontales en el árbol del DOM.

### Prompt 2: Estructuración y ubicación de archivos en el árbol (Aceptado)
> "Estos son mis documentos en que parte lo modificaria y el js aun no lo tengo, tengo que crear una carpeta aparte?"

* *Resultado:* *Aceptado.* Permitió identificar la carpeta existente /js para ubicar el nuevo script agenda.js y coordinar la lectura del vector de datos compartido, evitando la creación de subcarpetas redundantes.

### Prompt 3: Vinculación con la base de datos estática (Aceptado)
> "este el el html de eventos" > (Seguido de) "este el el js de la dat de eventos"

* *Resultado:* *Aceptado.* Sirvió para adaptar el script de la agenda de modo que leyera exactamente la clave "agenda" generada por la función nativa agregarAgenda(id) e indexara de forma relacional las propiedades de los objetos dentro del array global cards.

### Prompt 4: Ubicación estética del control de descarte (Rechazado)
> "en la pagina de mi pagina quiero que la x en la esquina superior izquierda de la card, en la version escritorio y en la parte de responsive, que quede esteticamente bien"

* *Resultado:* *Rechazado parcialmente por la IA (Corregido por el alumno).* El asistente sugirió aplicar un posicionamiento absoluto (position: absolute; top: 12px; left: 12px;) directo sobre el botón ✕. Al probarlo en el navegador, esto rompía el flujo responsive en pantallas de celulares de baja resolución, provocando que la cruz se encimara sobre los números del bloque de la fecha. El equipo descartó la sugerencia de coordenadas fijas y ajustó el diseño usando márgenes flexibles.

### Prompt 5: Simetría y reducción del bloque de fecha (Aceptado)
> "en la parte de mi agenda achica mas la letras y el cuadrado de una fecha que sea mas chcio y que se adapte bien al rectangulo, que sea estetico"

* *Resultado:* *Aceptado.* Permitió refinar las dimensiones del contenedor de la insignia (.agenda-date-badge) y de las fuentes tipográficas en una cuadrícula simétrica integrada dentro de la hoja de estilos agenda.css.

### Prompt 6: Extracción automática del nombre de los meses (Rechazado)
> [Consulta para formatear strings de fechas "YYYY-MM-DD" a texto legible]

* *Resultado:* *Rechazado por el alumno.* El código sugerido por la IA utilizaba la función nativa .toLocaleString('es-ES') sobre cadenas directas de fecha. Se descartó por completo debido a que los navegadores interpretaban los husos horarios restando un día de manera errática e introducían puntos ortográficos indeseados (ej: "OCT."). El grupo optó de forma autónoma por implementar un array estático indexado (mesesAbreviados).