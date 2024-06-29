// Example JavaScript (optional)
document.addEventListener('DOMContentLoaded', function() {
    // Example: Add smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Example: Form submission handling (you may need backend processing)
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Example: Send form data to a server or show a confirmation message
        alert('Form submitted!');
    });
});
