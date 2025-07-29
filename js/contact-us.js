// Contact Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Toggle sales fields
    const subjectSelect = document.getElementById('subject');
    const salesFields = document.getElementById('salesFields');
    
    if (subjectSelect && salesFields) {
        subjectSelect.addEventListener('change', function() {
            if (this.value === 'sales') {
                salesFields.style.display = 'block';
                document.getElementById('company').required = true;
                document.getElementById('employees').required = true;
            } else {
                salesFields.style.display = 'none';
                document.getElementById('company').required = false;
                document.getElementById('employees').required = false;
            }
        });
    }

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message!');
            this.reset();
            if (salesFields) salesFields.style.display = 'none';
        });
    }

    // Smooth scrolling
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
});