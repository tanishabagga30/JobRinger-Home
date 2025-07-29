document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
        });
    }

    // Apply dark mode preference on load
    if (localStorage.getItem('darkMode') === 'true') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Form submission handlers
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Login form submitted!');
        // Here you would typically send data to your server
        this.reset();
    });

    document.getElementById('register-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Registration form submitted!');
        // Here you would typically send data to your server
        this.reset();
    });

    document.getElementById('sales-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Sales enquiry submitted!');
        // Here you would typically send data to your server
        this.reset();
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Input focus effects
    document.querySelectorAll('.form-input, .sales-input').forEach(input => {
        input.addEventListener('focus', function() {
            this.style.boxShadow = 'inset 0 0 0 4px rgba(30, 172, 198, 0.3)';
        });
        
        input.addEventListener('blur', function() {
            this.style.boxShadow = '';
        });
    });

    // Button hover effects
    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 8px 15px -3px rgba(0, 0, 0, 0.1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
            this.style.boxShadow = 'inset 0 1px 3px rgba(0, 0, 0, 0.2)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 8px 15px -3px rgba(0, 0, 0, 0.1)';
        });
    });

    // Card hover effects
    document.querySelectorAll('.feature-card, .form-container, .offer-container, .service-card, .partner-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 12px 25px -3px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 10px -1px rgba(0, 0, 0, 0.1)';
        });
    });

    // Icon hover effects
    document.querySelectorAll('.icon-hover-effect, .form-icon, .offer-icon, .feature-icon, .step-icon').forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.color = 'var(--primary-700)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.color = 'var(--primary-600)';
        });
    });
});