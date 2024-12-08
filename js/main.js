document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

const nav = document.querySelector(".nav-links");
const toggleMenu = () => nav.classList.toggle("show");

document.querySelector(".menu-icon").addEventListener("click", toggleMenu);

// Smooth scrolling for anchor links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Simple animation on hover for form labels
document.querySelectorAll('form label').forEach(label => {
    label.addEventListener('mouseover', () => {
        label.style.color = '#ff0000'; // Highlight in red
    });
    label.addEventListener('mouseout', () => {
        label.style.color = ''; // Reset to default
    });
});
