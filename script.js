// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission alert
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    alert('Thank you! Your message has been sent.');
    form.reset(); // Clear the form after submission
});

// Button hover effect
const button = document.querySelector('.home-section button a');
button.addEventListener('mouseover', () => {
    button.style.color = '#fff';
    button.style.backgroundColor = '#4CAF50';
});
button.addEventListener('mouseout', () => {
    button.style.color = '#000';
    button.style.backgroundColor = '#fff';
});
