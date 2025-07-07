function adjustForNavbar() {
    const navbar = document.querySelector('.bottom-navbar');
    const navbarHeight = navbar.offsetHeight+10;
    // Apply to body or specific container
    document.body.style.paddingBottom = navbarHeight + 'px';

    if (mainContent) {
        mainContent.style.paddingBottom = navbarHeight + 'px';
    }
}

// Run on load and resize
window.addEventListener('load', adjustForNavbar);
window.addEventListener('resize', adjustForNavbar);

document.addEventListener('DOMContentLoaded', () => {
    // Load header, footer, nav, search, and menu
    async function loadComponent(file, placeholderId) {
        try {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`Failed to load ${file}`);
            const content = await response.text();
            document.getElementById(placeholderId).innerHTML = content;
        } catch (error) {
            console.error(`Error loading ${file}:`, error);
        }
    }

    // Load components
    loadComponent('header.html', 'header-placeholder');
    loadComponent('footer.html', 'footer-placeholder');
    loadComponent('nav.html', 'nav-placeholder');
    loadComponent('search.html', 'search-placeholder');
    loadComponent('menu.html', 'menu-placeholder');

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

    // Message Slider and Theme Toggle (run after header is loaded)
    function initializeHeaderFeatures() {
        const messageSlides = document.querySelectorAll('.message-slide');
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const htmlElement = document.documentElement;

        if (messageSlides.length > 0) {
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
        }

        if (themeToggle && themeIcon) {
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
        }
    }

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

    // Search Popup Functionality (run after nav and search are loaded)
    function initializeSearchFeatures() {
        const searchPopup = document.getElementById('searchPopup');
        const searchOverlay = document.getElementById('searchOverlay');
        const searchNavBtn = document.querySelector('#nav-placeholder a[href="#"] .fa-search')?.closest('a');
        const closeSearchBtn = document.getElementById('closeSearch');
        
        if (!searchPopup || !searchOverlay || !searchNavBtn || !closeSearchBtn) {
            console.error('Search elements not found');
            return;
        }

        let isSearchOpen = false;

        function toggleSearchPopup() {
            isSearchOpen = !isSearchOpen;
            searchPopup.classList.toggle('active', isSearchOpen);
            searchOverlay.classList.toggle('active', isSearchOpen);
            document.body.style.overflow = isSearchOpen ? 'hidden' : '';
        }

        searchNavBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleSearchPopup();
        });

        closeSearchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (isSearchOpen) {
                toggleSearchPopup();
            }
        });

        searchOverlay.addEventListener('click', toggleSearchPopup);
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isSearchOpen) {
                toggleSearchPopup();
            }
        });
    }

    // Menu Popup Functionality (run after nav and menu are loaded)
    function initializeMenuFeatures() {
        const menuPopup = document.getElementById('menuPopup');
        const menuOverlay = document.getElementById('menuOverlay');
        const menuNavBtn = document.querySelector('#nav-placeholder a#openMenu');
        const closeMenuBtn = document.getElementById('closeMenu');
        
        if (!menuPopup || !menuOverlay || !menuNavBtn || !closeMenuBtn) {
            console.error('Menu elements not found');
            return;
        }

        let isMenuOpen = false;

        function toggleMenuPopup() {
            isMenuOpen = !isMenuOpen;
            menuPopup.classList.toggle('active', isMenuOpen);
            menuOverlay.classList.toggle('active', isMenuOpen);
            document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        }

        menuNavBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleMenuPopup();
        });

        closeMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (isMenuOpen) {
                toggleMenuPopup();
            }
        });

        menuOverlay.addEventListener('click', toggleMenuPopup);
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                toggleMenuPopup();
            }
        });
    }

    // Wait for header, nav, search, and menu to load before initializing dependent features
    const headerPlaceholder = document.getElementById('header-placeholder');
    const navPlaceholder = document.getElementById('nav-placeholder');
    const searchPlaceholder = document.getElementById('search-placeholder');
    const menuPlaceholder = document.getElementById('menu-placeholder');
    const observer = new MutationObserver(() => {
        if (headerPlaceholder.querySelector('header') && 
            navPlaceholder.querySelector('nav') && 
            searchPlaceholder.querySelector('.search-popup') && 
            menuPlaceholder.querySelector('.menu-popup')) {
            initializeHeaderFeatures();
            initializeSearchFeatures();
            initializeMenuFeatures();
            observer.disconnect();
        }
    });
    observer.observe(headerPlaceholder, { childList: true, subtree: true });
    observer.observe(navPlaceholder, { childList: true, subtree: true });
    observer.observe(searchPlaceholder, { childList: true, subtree: true });
    observer.observe(menuPlaceholder, { childList: true, subtree: true });
});