/* ================================================
   UTILS — Brújula animada del nav
   La brújula apunta a un cuarto diferente (90°)
   según la página HTML actual.
   N=Inicio, E=Eventos, S=Agenda, O=Contacto
   ================================================ */

document.addEventListener('DOMContentLoaded', function () {
  var compass = document.getElementById('nav-compass');
  if (!compass) return;

  // Detectar la página actual por el nombre del archivo
  var pagina = window.location.pathname.split('/').pop().toLowerCase();

  // Asignar rotación: un cuarto de vuelta por cada página
  var rotaciones = {
    'index.html':    0,     // Norte
    'eventos.html':  90,    // Este
    'agenda.html':   180,   // Sur
    'contacto.html': 270    // Oeste
  };

  // Si la URL termina en "/" o está vacía, es index
  if (!pagina || pagina === '' || pagina === '/') {
    pagina = 'index.html';
  }

  var grados = rotaciones[pagina] || 0;

  // Aplicar la rotación con un pequeño delay para que se vea la animación
  setTimeout(function () {
    compass.style.transform = 'rotate(' + grados + 'deg)';
  }, 100);
});
