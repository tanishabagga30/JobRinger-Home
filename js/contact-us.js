document.addEventListener('DOMContentLoaded', () => {
    // Contact Method Selector
    const methodCards = document.querySelectorAll('.contact-method-card');
    const contactFormH2 = document.querySelector('.contact-form h2');
    const contactFormIcon = contactFormH2.querySelector('i');

    methodCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove active class from all cards
            methodCards.forEach(c => c.classList.remove('active'));
            // Add active class to clicked card
            card.classList.add('active');

            // Update form header based on selected method
            const method = card.dataset.method;
            if (method === 'email') {
                contactFormH2.innerHTML = '<i class="fas fa-envelope mr-2"></i> Send Us a Message';
            } else if (method === 'phone') {
                contactFormH2.innerHTML = '<i class="fas fa-phone-alt mr-2"></i> Contact Us by Phone';
            } else if (method === 'chat') {
                contactFormH2.innerHTML = '<i class="fas fa-comment-dots mr-2"></i> Start a Live Chat';
            }
        });
    });

    // Show/hide sales fields based on subject selection
    const subjectSelect = document.getElementById('subject');
    const salesFields = document.getElementById('salesFields');

    if (subjectSelect && salesFields) {
        subjectSelect.addEventListener('change', () => {
            salesFields.style.display = subjectSelect.value === 'sales' ? 'block' : 'none';
        });
    }

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            const company = document.getElementById('company').value;
            const employees = document.getElementById('employees').value;

            if (name && email && subject && message) {
                console.log('Form submitted:', { name, email, subject, message, company, employees });
                alert('Message sent successfully!');
                contactForm.reset();
                salesFields.style.display = 'none';
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
});