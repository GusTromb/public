const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
    // Añade o quita la clase 'active' al contenedor de enlaces
    navLinks.classList.toggle('active');
});