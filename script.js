// script.js

document.addEventListener('DOMContentLoaded', function() {

    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#FDE047', '#FBBF24', '#F59E0B', '#EAB308', '#D97706'];

    function createConfettiDot() {
        if (!confettiContainer) {
            // console.warn('Confetti container not found.'); // Already handled
            return;
        }
        const dot = document.createElement('div');
        dot.classList.add('confetti-dot');
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = Math.random() * 100 + '%';
        dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        dot.style.animation = `fall ${Math.random() * 3 + 2.5}s linear ${Math.random() * 2}s infinite`;
        confettiContainer.appendChild(dot);
    }

    if (confettiContainer) {
        // Reduce confetti on smaller screens
        const isMobile = window.innerWidth < 768; // md breakpoint in Tailwind
        const confettiCount = isMobile ? 30 : 50; // Fewer dots on mobile

        for (let i = 0; i < confettiCount; i++) {
            createConfettiDot();
        }
    } else {
        console.error("Confetti container element not found.");
    }
});
