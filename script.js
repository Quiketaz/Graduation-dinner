// script.js

document.addEventListener('DOMContentLoaded', function() {

    const confettiContainer = document.getElementById('confetti-container');
    // Gold and amber shades for confetti
    const colors = ['#FDE047', '#FBBF24', '#F59E0B', '#EAB308', '#D97706']; // Various shades of gold/amber

    function createConfettiDot() {
        if (!confettiContainer) {
            console.warn('Confetti container not found.');
            return;
        }
        const dot = document.createElement('div');
        dot.classList.add('confetti-dot');
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = Math.random() * 100 + '%';
        dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        dot.style.animation = `fall ${Math.random() * 3 + 2.5}s linear ${Math.random() * 2}s infinite`; // Slightly adjusted timing
        confettiContainer.appendChild(dot);
    }

    if (confettiContainer) {
        for (let i = 0; i < 60; i++) { // Increased confetti count slightly
            createConfettiDot();
        }
    } else {
        console.error("Confetti container element not found.");
    }

    // The @keyframes 'fall' animation is defined in style.css
});
