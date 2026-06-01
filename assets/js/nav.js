/* nav.js — Menú hamburguesa responsive */
document.addEventListener('DOMContentLoaded', () => {
    const btn  = document.getElementById('nav-hamburger');
    const menu = document.querySelector('body > header nav');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        const abierto = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!abierto));
        btn.classList.toggle('is-open', !abierto);
        menu.classList.toggle('nav-open', !abierto);
    });

    // Cerrar al hacer click en un link
    menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            btn.setAttribute('aria-expanded', 'false');
            btn.classList.remove('is-open');
            menu.classList.remove('nav-open');
        });
    });
});
