document.addEventListener('DOMContentLoaded', () => {
    // Banner Slider
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 5000);

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Featured Employers Auto-Scroll
    const employerScroll = document.getElementById('employerScroll');
    let employerScrollAmount = 0;
    const employerScrollSpeed = 0.5;
    let employerAutoScroll;

    function startEmployerAutoScroll() {
        employerAutoScroll = setInterval(() => {
            employerScrollAmount += employerScrollSpeed;
            if (employerScrollAmount >= employerScroll.scrollWidth - employerScroll.clientWidth) {
                employerScrollAmount = 0;
            }
            employerScroll.scrollLeft = employerScrollAmount;
        }, 30);
    }

    function stopEmployerAutoScroll() {
        clearInterval(employerAutoScroll);
    }

    employerScroll.addEventListener('mouseenter', stopEmployerAutoScroll);
    employerScroll.addEventListener('mouseleave', startEmployerAutoScroll);
    startEmployerAutoScroll();

    // Message Slider
    const messageSlides = document.querySelectorAll('.message-slide');
    let currentMessageSlide = 0;

    function showMessageSlide(index) {
        messageSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextMessageSlide() {
        currentMessageSlide = (currentMessageSlide + 1) % messageSlides.length;
        showMessageSlide(currentMessageSlide);
    }

    showMessageSlide(currentMessageSlide);
    setInterval(nextMessageSlide, 3500);

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');

    themeToggle.addEventListener('click', () => {
        if (htmlElement.classList.contains('light')) {
            htmlElement.classList.remove('light');
            htmlElement.classList.add('dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            htmlElement.classList.remove('dark');
            htmlElement.classList.add('light');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });

    // Job Vacancies Category Switching
    const buttons = document.querySelectorAll('.vacancy-category-btn');
    const viewLink = document.getElementById('view-all-link');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const cat = btn.dataset.category;
            viewLink.textContent = `View all jobs by ${cat.charAt(0).toUpperCase() + cat.slice(1)} >`;
        });
    });
});