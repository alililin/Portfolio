const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

function submitForm(event) {
  event.preventDefault();
  alert('Merci pour votre message, je vous recontacterai rapidement !');
  event.target.reset();
}
