document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.documentElement.classList.toggle('dark');
            
            // Save preference to localStorage
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('darkMode', isDark);
            
            // Toggle moon/sun icon
            const icon = darkModeToggle.querySelector('i');
            if (isDark) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
    }

    // Apply dark mode preference on load
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        document.documentElement.classList.add('dark');
        const icon = document.querySelector('#dark-mode-toggle i');
        if (icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }

    // Form submission handlers
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('business-email').value;
            const password = document.getElementById('password').value;
            
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            alert('Login form submitted successfully!');
            this.reset();
        });
    }

    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const companyName = document.getElementById('company-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            
            if (!companyName || !email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            if (password.length < 6) {
                alert('Password must be at least 6 characters long');
                return;
            }
            
            alert('Registration form submitted successfully!');
            this.reset();
        });
    }

    const salesForm = document.getElementById('sales-form');
    if (salesForm) {
        salesForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = this.querySelectorAll('input');
            let allFilled = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    allFilled = false;
                }
            });
            
            if (!allFilled) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation for the email field
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value)) {
                    alert('Please enter a valid email address');
                    return;
                }
            }
            
            alert('Sales enquiry submitted successfully! Our team will contact you soon.');
            this.reset();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('.employer-login-page a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Icon hover animation enhancement
    document.querySelectorAll('.employer-login-page .icon-hover-effect').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'translateY(-3px) scale(1.1)';
        });
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add scroll-based animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.employer-login-page .animate-fade-in-scale, .employer-login-page .animate-pop-in, .employer-login-page .animate-slide-in-up').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });
});