document.addEventListener('DOMContentLoaded', () => {
    // Featured Employers Auto-Scroll
    const employerScroll = document.getElementById('employerScroll');
    let employerScrollAmount = 0;
    const employerScrollSpeed = 0.5;
    let employerAutoScroll;

    function startEmployerAutoScroll() {
        if (!employerScroll) return;
        // Duplicate slides for seamless looping
        const slides = employerScroll.children;
        const slideCount = slides.length / 2; // Half are duplicates
        employerAutoScroll = setInterval(() => {
            employerScrollAmount += employerScrollSpeed;
            if (employerScrollAmount >= employerScroll.scrollWidth / 2) {
                employerScrollAmount = 0;
                employerScroll.scrollLeft = 0;
            }
            employerScroll.scrollLeft = employerScrollAmount;
        }, 30);
    }

    function stopEmployerAutoScroll() {
        clearInterval(employerAutoScroll);
    }

    if (employerScroll) {
        employerScroll.addEventListener('mouseenter', stopEmployerAutoScroll);
        employerScroll.addEventListener('mouseleave', startEmployerAutoScroll);
        startEmployerAutoScroll();
    }

    // Basic form validation for login and sales forms
    const loginForm = document.getElementById('login-form');
    const salesForm = document.getElementById('sales-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('business-email').value;
            const password = document.getElementById('password').value;
            if (email && password) {
                console.log('Login form submitted:', { email, password });
                // Add actual submission logic here
            } else {
                alert('Please fill in all fields');
            }
        });
    }

    if (salesForm) {
        salesForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = salesForm.querySelector('input[type="text"]').value;
            const email = salesForm.querySelector('input[type="email"]').value;
            if (name && email) {
                console.log('Sales form submitted:', { name, email });
                // Add actual submission logic here
            } else {
                alert('Please fill in all fields');
            }
        });
    }
});