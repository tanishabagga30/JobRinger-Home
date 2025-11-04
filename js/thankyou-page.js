document.addEventListener('DOMContentLoaded', () => {
    // Calculate activation date (tomorrow)
    const today = new Date();
    const activationDate = new Date(today);
    activationDate.setDate(today.getDate() + 1);
    const formattedDate = activationDate.toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('activationDate').textContent = `Activates on: ${formattedDate}`;

    // Logic for the 'Activate Now' button removed

    // Remove loading state and trigger animations
    setTimeout(() => {
        document.body.classList.remove('loading');
        
        // Start background animations
        const ellipses = document.querySelectorAll('.bg-ellipse');
        ellipses.forEach(ellipse => {
            ellipse.style.animationPlayState = 'running';
        });

        // Trigger success animation sequence
        setTimeout(() => {
            const ring = document.querySelector('.success-ring');
            const checkmark = document.querySelector('.checkmark-svg');
            ring.style.animationPlayState = 'running';
            setTimeout(() => {
                checkmark.style.animationPlayState = 'running';
                checkmark.querySelector('path').style.animationPlayState = 'running';
            }, 300);
        }, 200);
    }, 100);

    // Smooth card hover interactions
    document.querySelectorAll('.info-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Updated transform for smaller buttons
            card.style.transform = 'translateY(-4px) scale(1.01)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});