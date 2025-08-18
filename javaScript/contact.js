document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for internal navigation links
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

  // Handle form submission
  const form = document.querySelector('.contact-form form');
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload

    // Collect form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation (HTML already has required, but extra check)
    if (name && email && message) {
      // Here you could send data via AJAX if you have a backend
      // For demo, just show an alert
      alert(`Thank you, ${name}! Your message has been received.`);

      // Optionally, reset the form
      form.reset();
    } else {
      alert('Please fill out all fields.');
    }
  });
});
