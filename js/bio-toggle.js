document.addEventListener('DOMContentLoaded', function() {
    const toggleHeaders = document.querySelectorAll('.toggle-header');

    toggleHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.classList.toggle('content-hidden');
            this.classList.toggle('expanded');
        });
    });
});