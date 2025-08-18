document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('a.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.hash !== "") {
        e.preventDefault();
        const target = document.querySelector(link.hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Handle contact form submission
  const form = document.querySelector('section#contact form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // prevent page reload
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received.`);
        form.reset(); // clear the form after submission
      } else {
        alert('Please fill out all fields.');
      }
    });
  }
});
