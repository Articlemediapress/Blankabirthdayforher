document.querySelectorAll('.confetti-trigger').forEach(img => {
    img.addEventListener('click', (event) => {
        createConfetti(event.clientX, event.clientY);
    });
});

function createConfetti(x, y) {
    for (let i = 0; i < 20; i++) {
        let confetti = document.createElement('div');
        confetti.className = 'confetti';
        document.body.appendChild(confetti);
        
        let colors = ['#ff0', '#f00', '#0f0', '#00f', '#ff9900'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        let startX = x + (Math.random() - 0.5) * 50;
        let startY = y;
        confetti.style.left = `${startX}px`;
        confetti.style.top = `${startY}px`;

        let animationTime = Math.random() * 1.5 + 1;
        confetti.style.animation = `fall ${animationTime}s linear forwards`;

        setTimeout(() => confetti.remove(), animationTime * 1000);
    }
}
