const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});