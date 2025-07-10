// Tailwind config (keep this as is)
tailwind.config = {
    darkMode: 'class'
}

// Dark mode utility functions
const DarkModeManager = {
    // Get stored theme preference or system preference
    getThemePreference() {
        const stored = localStorage.getItem('theme');
        if (stored) {
            return stored;
        }
        
        // Check system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    },
    
    // Store theme preference
    setThemePreference(theme) {
        localStorage.setItem('theme', theme);
    },
    
    // Apply theme to HTML element
    applyTheme(theme) {
        const htmlElement = document.documentElement;
        
        // Remove existing theme classes
        htmlElement.classList.remove('light', 'dark');
        
        // Add new theme class
        htmlElement.classList.add(theme);
        
        // Update UI elements if they exist
        this.updateThemeUI(theme);
    },
    
    // Update theme toggle UI elements
    updateThemeUI(theme) {
        const themeIconMoon = document.getElementById('theme-icon-moon');
        const themeIconSun = document.getElementById('theme-icon-sun');
        const themeText = document.getElementById('theme-text');
        
        if (themeIconMoon && themeIconSun && themeText) {
            if (theme === 'dark') {
                themeIconMoon.classList.add('hidden');
                themeIconSun.classList.remove('hidden');
                themeText.textContent = 'Toggle Light Mode';
            } else {
                themeIconMoon.classList.remove('hidden');
                themeIconSun.classList.add('hidden');
                themeText.textContent = 'Toggle Dark Mode';
            }
        }
    },
    
    // Toggle between light and dark themes
    toggleTheme() {
        const htmlElement = document.documentElement;
        const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        this.applyTheme(newTheme);
        this.setThemePreference(newTheme);
    },
    
    // Initialize theme on page load
    init() {
        const savedTheme = this.getThemePreference();
        this.applyTheme(savedTheme);
        
        // Set up theme toggle event listener (with retry logic)
        this.setupThemeToggle();
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            // Only auto-switch if user hasn't manually set a preference
            if (!localStorage.getItem('theme')) {
                const systemTheme = e.matches ? 'dark' : 'light';
                this.applyTheme(systemTheme);
            }
        });
    },
    
    // Setup theme toggle with retry logic for dynamically loaded elements
    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle-menu');
        if (themeToggle) {
            // Remove existing listener to prevent duplicates
            themeToggle.removeEventListener('click', this.toggleTheme.bind(this));
            // Add new listener
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }
};

// Initialize immediately (before DOMContentLoaded to prevent flash)
DarkModeManager.init();

// Optional: Add this to your CSS to prevent flash of unstyled content
const style = document.createElement('style');
style.textContent = `
    html:not(.light):not(.dark) {
        display: none;
    }
`;
document.head.appendChild(style);

// In script.js (root level)
loadComponent(`../Universal/header.html`, 'header-placeholder');
loadComponent(`../Universal/footer.html`, 'footer-placeholder');
loadComponent(`../Universal/nav.html`, 'nav-placeholder');
loadComponent(`../Universal/search.html`, 'search-placeholder');
loadComponent(`../Universal/menu.html`, 'menu-placeholder');

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
        });
    });

    // Job Vacancy Options (click handling)
    const vacancyOptionsContainer = document.getElementById('vacancy-options');
    if (vacancyOptionsContainer) {
        vacancyOptionsContainer.addEventListener('click', (e) => {
            const option = e.target.closest('.job-vacancy-option');
            if (option) {
                vacancyOptionsContainer.querySelectorAll('.job-vacancy-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                option.classList.add('active');
                console.log(`Selected job vacancy option: ${option.textContent}`);
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

    if((prevBtn!=null)){
        prevBtn.addEventListener('click', prevSlide);
    }
    if((nextBtn!=null)){
        nextBtn.addEventListener('click', nextSlide);
    }

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

    if(employerScroll!=null){
        employerScroll.addEventListener('mouseenter', stopEmployerAutoScroll);
        employerScroll.addEventListener('mouseleave', startEmployerAutoScroll);
        startEmployerAutoScroll();
    }

    // Message Slider and Theme Toggle
    function initializeHeaderFeatures() {
        const messageSlides = document.querySelectorAll('.message-slide');
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

        // Initialize theme toggle for dynamically loaded elements
        DarkModeManager.setupThemeToggle();
        // Update UI to match current theme
        const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
        DarkModeManager.updateThemeUI(currentTheme);
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
    
    if(getJobBtn!=null){
        getJobBtn.classList.add('active');
        getJobBtn.classList.remove('inactive');
        postJobBtn.classList.add('inactive');
        postJobBtn.classList.remove('active');
        getJobBtn.addEventListener('click', function(e) {
            e.preventDefault();
            postJobBtn.classList.remove('active');
            postJobBtn.classList.add('inactive');
            getJobBtn.classList.remove('inactive');
            getJobBtn.classList.add('active');
        });
    }

    if(postJobBtn!=null){
        postJobBtn.addEventListener('click', function(e) {
            e.preventDefault();
            getJobBtn.classList.remove('active');
            getJobBtn.classList.add('inactive');
            postJobBtn.classList.remove('inactive');
            postJobBtn.classList.add('active');
        });
    }
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