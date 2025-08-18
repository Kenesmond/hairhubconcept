// Smooth scroll for navigation links
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('a.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only handle links with hashes
            if (this.hash !== "") {
                e.preventDefault();
                const target = document.querySelector(this.hash);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});