tailwind.config = {
    darkMode: 'class'
}

function adjustForNavbar() {
    const navbar = document.querySelector('nav');
    const navbarHeight = navbar ? navbar.offsetHeight + 10 : 60;
    document.body.style.paddingBottom = navbarHeight + 'px';
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.style.paddingBottom = navbarHeight + 'px';
    }
}

window.addEventListener('load', adjustForNavbar);
window.addEventListener('resize', adjustForNavbar);

document.addEventListener('DOMContentLoaded', () => {
    // Load components
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

// In script.js (root level)
const basePath = window.location.pathname.includes('HomePage') ? '..' : '.';

loadComponent(`${basePath}/Universal/header.html`, 'header-placeholder');
loadComponent(`${basePath}/Universal/footer.html`, 'footer-placeholder');
loadComponent(`${basePath}/Universal/nav.html`, 'nav-placeholder');
loadComponent(`${basePath}/Universal/search.html`, 'search-placeholder');
loadComponent(`${basePath}/Universal/menu.html`, 'menu-placeholder');
    // Vacancy Data for "Find job vacancies by"
    const vacancyData = {
        skills: ['Python', 'SQL', 'Java', 'AWS', 'Javascript', 'Git', 'Excel', 'Azure', 'Sales', 'Docker', 'Kubernetes', 'Data Analysis', 'MS Office', 'Project Management'],
        location: ['Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Gurgaon'],
        industry: ['Technology', 'Finance', 'Healthcare', 'Education', 'Retail', 'Manufacturing', 'Media'],
        functions: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations', 'Design'],
        roles: ['Software Engineer', 'Data Analyst', 'Product Manager', 'Marketing Manager', 'Sales Executive', 'UX Designer'],
        company: ['TechCorp', 'FinServe', 'HealthPlus', 'EduTech', 'RetailHub', 'ManuCo', 'MediaWorks']
    };

    function populateVacancyOptions(category) {
        const vacancyOptions = document.getElementById('vacancy-options');
        if (!vacancyOptions) return;
        vacancyOptions.innerHTML = '';
        vacancyData[category].forEach(option => {
            const span = document.createElement('span');
            span.className = 'job-vacancy-option';
            span.textContent = option;
            vacancyOptions.appendChild(span);
        });
    }

    // Job Vacancies Category Switching (Find job vacancies by)
    const vacancyButtons = document.querySelectorAll('#vacancy-categories .vacancy-category-btn');
    const viewLink = document.getElementById('view-all-link');

    vacancyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            vacancyButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.dataset.category;
            viewLink.textContent = `View all jobs by ${cat.charAt(0).toUpperCase() + cat.slice(1)} >`;
            populateVacancyOptions(cat);
        });
    });

    // Top Picks Buttons (separate action)
    const topPicksButtons = document.querySelectorAll('.top-picks .vacancy-category-btn');
    topPicksButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            topPicksButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.dataset.category;
            console.log(`Selected Top Picks category: ${cat}`); // Placeholder action
            // Add your desired action here, e.g., filter jobs or navigate
        });
    });

    // Job Vacancy Options (click handling)
    const vacancyOptionsContainer = document.getElementById('vacancy-options');
    if (vacancyOptionsContainer) {
        vacancyOptionsContainer.addEventListener('click', (e) => {
            const option = e.target.closest('.job-vacancy-option');
            if (option) {
                // Remove active class from all job-vacancy-options
                vacancyOptionsContainer.querySelectorAll('.job-vacancy-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                // Add active class to clicked option
                option.classList.add('active');
                console.log(`Selected job vacancy option: ${option.textContent}`); // Placeholder action
                // Add your desired action here, e.g., filter jobs or navigate
            }
        });
    }

    // Initialize with default category for Find job vacancies by
    populateVacancyOptions('skills');

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

    // Message Slider and Theme Toggle
    function initializeHeaderFeatures() {
        const messageSlides = document.querySelectorAll('.message-slide');
        const themeToggle = document.getElementById('theme-toggle-menu');
        const themeIconMoon = document.getElementById('theme-icon-moon');
        const themeIconSun = document.getElementById('theme-icon-sun');
        const themeText = document.getElementById('theme-text');
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

        if (themeToggle && themeIconMoon && themeIconSun && themeText) {
            themeToggle.addEventListener('click', () => {
                if (htmlElement.classList.contains('light')) {
                    htmlElement.classList.remove('light');
                    htmlElement.classList.add('dark');
                    themeIconMoon.classList.add('hidden');
                    themeIconSun.classList.remove('hidden');
                    themeText.textContent = 'Toggle Light Mode';
                } else {
                    htmlElement.classList.remove('dark');
                    htmlElement.classList.add('light');
                    themeIconMoon.classList.remove('hidden');
                    themeIconSun.classList.add('hidden');
                    themeText.textContent = 'Toggle Dark Mode';
                }
            });
        }
    }

    // Search Popup Functionality
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

    // Menu Popup Functionality
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

    // Initialize features after components load
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

    // Job Toggle Buttons
    const getJobBtn = document.getElementById('getJobBtn');
    const postJobBtn = document.getElementById('postJobBtn');
    
    getJobBtn.classList.add('active');
    getJobBtn.classList.remove('inactive');
    postJobBtn.classList.add('inactive');
    postJobBtn.classList.remove('active');
    
    postJobBtn.addEventListener('click', function(e) {
        e.preventDefault();
        getJobBtn.classList.remove('active');
        getJobBtn.classList.add('inactive');
        postJobBtn.classList.remove('inactive');
        postJobBtn.classList.add('active');
    });
    
    getJobBtn.addEventListener('click', function(e) {
        e.preventDefault();
        postJobBtn.classList.remove('active');
        postJobBtn.classList.add('inactive');
        getJobBtn.classList.remove('inactive');
        getJobBtn.classList.add('active');
    });
});
async function loadComponent(file, placeholderId) {
    console.log(`Attempting to load: ${file}`);
    try {
        const fullPath = new URL(file, window.location.origin).href;
        console.log(`Full path: ${fullPath}`);
        
        const response = await fetch(file);
        console.log(`Response status: ${response.status}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const content = await response.text();
        console.log(`Successfully loaded ${file}`);
        document.getElementById(placeholderId).innerHTML = content;
    } catch (error) {
        console.error(`Error loading ${file}:`, error);
        document.getElementById(placeholderId).innerHTML = `
            <div style="color:red; padding:10px;">
                Failed to load component: ${file}
                <br>Error: ${error.message}
            </div>
        `;
    }
}