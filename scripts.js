// Gestion du formulaire de contact
function submitForm(event) {
  event.preventDefault();
  alert('Merci pour votre message, je vous recontacterai rapidement !');
  event.target.reset();
}

// Pour gérer l'activation du menu en scroll (optionnel)
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
