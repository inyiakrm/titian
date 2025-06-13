document.addEventListener('DOMContentLoaded', function() {
    // Script untuk scroll halus ketika mengklik tautan navigasi di homepage
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Hanya berlaku untuk tautan internal (ke ID di halaman yang sama)
            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});