// Smooth scrolling for nav and footer links
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    e.preventDefault();
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple contact form handler (no backend yet)
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! This demo form is not yet connected to a backend.');
    contactForm.reset();
  });
}
