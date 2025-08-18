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

  // Optional: Add interactivity to service cards (e.g., alert on click)
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.card-title').innerText;
      alert(`Explore more about: ${title}`);
    });
  });
});
