
function toggleMenu() {
    const menuToggle = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
}