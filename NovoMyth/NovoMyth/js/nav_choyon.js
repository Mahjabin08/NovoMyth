// nav bar section's threedot responsive bar start

const threeline = document.querySelector('.threeline');
const navLinks = document.querySelector('.nav-links');

threeline.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// nav bar section's threedot responsive bar end