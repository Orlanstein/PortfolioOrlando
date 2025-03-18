// Obtener los elementos necesarios
const darkModeButtons = document.querySelectorAll('.dark-mode-toggle');
const hamburgerMenuButton = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.body;

// Función para alternar el modo oscuro/claro
darkModeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const icon = button.querySelector('i');
    if (body.classList.contains('light-mode')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });
});

// Función para alternar la visibilidad del menú móvil
hamburgerMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Cerrar el menú móvil al hacer clic fuera de él
document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && !hamburgerMenuButton.contains(e.target)) {
    mobileMenu.classList.remove('active');
  }
});

// Cerrar el menú móvil al hacer clic en un enlace
mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});