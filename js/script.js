// Tailwind config (keep this as is)
tailwind.config = {
    darkMode: 'class'
}

// Dark mode utility functions (keep as is)
const DarkModeManager = {
    getThemePreference() {
        const stored = localStorage.getItem('theme');
        if (stored) {
            return stored;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    },

    setThemePreference(theme) {
        localStorage.setItem('theme', theme);
    },

    applyTheme(theme) {
        const htmlElement = document.documentElement;
        htmlElement.classList.remove('light', 'dark');
        htmlElement.classList.add(theme);
        this.updateThemeUI(theme);
    },

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

    toggleTheme() {
        const htmlElement = document.documentElement;
        const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        this.applyTheme(newTheme);
        this.setThemePreference(newTheme);
    },

    init() {
        const savedTheme = this.getThemePreference();
        this.applyTheme(savedTheme);

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                const systemTheme = e.matches ? 'dark' : 'light';
                this.applyTheme(systemTheme);
            }
        });
    },

    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle-menu');
        if (themeToggle) {
            // Remove existing listener to prevent duplicates if called multiple times
            themeToggle.removeEventListener('click', this.toggleTheme.bind(this));
            // Add new listener
            themeToggle.addEventListener('click', this.toggleTheme.bind(this)); // Bind `this` for correct context
        }
    }
};

// Initialize DarkModeManager immediately (before DOMContentLoaded to prevent flash)
DarkModeManager.init();

// Optional: Add this to your CSS to prevent flash of unstyled content
const style = document.createElement('style');
style.textContent = `
    html:not(.light):not(.dark) {
        display: none;
    }
`;
document.head.appendChild(style);

// --- Component Loading Function (moved to be accessible by all calls) ---
async function loadComponent(file, placeholderId) {
    // console.log(`Attempting to load: ${file}`); // Uncomment for debugging
    try {
        const response = await fetch(file);
        // console.log(`Response status for ${file}: ${response.status}`); // Uncomment for debugging

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const content = await response.text();
        // console.log(`Successfully loaded ${file}`); // Uncomment for debugging
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) {
            placeholder.innerHTML = content;
        } else {
            console.error(`Placeholder not found for ${placeholderId}`);
        }
    } catch (error) {
        console.error(`Error loading ${file}:`, error);
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) {
            placeholder.innerHTML = `
                <div style="color:red; padding:10px; border: 1px solid red; margin: 10px;">
                    Failed to load component: ${file}
                    <br>Error: ${error.message}
                    <br>Please check the path and server status.
                </div>
            `;
        }
    }
}
// --- END Component Loading Function ---


// --- Main DOMContentLoaded Logic ---
document.addEventListener('DOMContentLoaded', async () => { // Made async to use await for component loading

    // Load components first and wait for them
    await loadComponent(`../Universal/header.html`, 'header-placeholder');
    await loadComponent(`../Universal/footer.html`, 'footer-placeholder');
    await loadComponent(`../Universal/nav.html`, 'nav-placeholder');
    await loadComponent(`../Universal/search.html`, 'search-placeholder');
    await loadComponent(`../Universal/menu.html`, 'menu-placeholder');

    // After all components are loaded, then initialize features that depend on them
    initializeHeaderFeatures();
    initializeSearchFeatures();
    initializeMenuFeatures();
    adjustForNavbar(); // Call this after nav is loaded

    // Existing functions that need elements present on page load (or after dynamic load)
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
            if (viewLink) viewLink.textContent = `View all jobs by ${cat.charAt(0).toUpperCase() + cat.slice(1)} >`;
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

    if (slides.length > 0) { // Only initialize if slides exist
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

        if (prevBtn != null) {
            prevBtn.addEventListener('click', prevSlide);
        }
        if (nextBtn != null) {
            nextBtn.addEventListener('click', nextSlide);
        }
    }


    // Featured Employers Auto-Scroll
    const employerScroll = document.getElementById('employerScroll');
    let employerScrollAmount = 0;
    const employerScrollSpeed = 0.5;
    let employerAutoScroll;

    function startEmployerAutoScroll() {
        if (!employerScroll) return; // Add check here too
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

    if (employerScroll != null) {
        employerScroll.addEventListener('mouseenter', stopEmployerAutoScroll);
        employerScroll.addEventListener('mouseleave', startEmployerAutoScroll);
        startEmployerAutoScroll();
    }

    // NEW JAVASCRIPT FOR JOB CARD SLIDER
    const jobCardWrapper = document.getElementById('jobCardWrapper');
    const jobPrevBtn = document.getElementById('jobPrevBtn');
    const jobNextBtn = document.getElementById('jobNextBtn');

    if (jobCardWrapper && jobPrevBtn && jobNextBtn) {
        let jobCardCurrentSlide = 0;
        const jobCards = jobCardWrapper.children;

        function showJobCards() {
            if (jobCards.length === 0) return;
            const firstCard = jobCards[0];
            const cardComputedStyle = window.getComputedStyle(firstCard);
            const cardWidth = firstCard.offsetWidth + parseFloat(cardComputedStyle.marginRight);

            jobCardWrapper.style.transform = `translateX(-${jobCardCurrentSlide * cardWidth}px)`;
        }

        jobNextBtn.addEventListener('click', () => {
            const cardsPerView = Math.floor(jobCardWrapper.clientWidth / jobCards[0].offsetWidth);
            if (jobCardCurrentSlide < jobCards.length - cardsPerView) {
                jobCardCurrentSlide++;
            } else {
                jobCardCurrentSlide = 0;
            }
            showJobCards();
        });

        jobPrevBtn.addEventListener('click', () => {
            const cardsPerView = Math.floor(jobCardWrapper.clientWidth / jobCards[0].offsetWidth);
            if (jobCardCurrentSlide > 0) {
                jobCardCurrentSlide--;
            } else {
                jobCardCurrentSlide = Math.max(0, jobCards.length - cardsPerView);
            }
            showJobCards();
        });

        showJobCards();
        window.addEventListener('resize', showJobCards);

        let jobCardAutoSlide = setInterval(() => {
            jobNextBtn.click();
        }, 3000);

        jobCardWrapper.addEventListener('mouseenter', () => clearInterval(jobCardAutoSlide));
        jobCardWrapper.addEventListener('mouseleave', () => {
            jobCardAutoSlide = setInterval(() => {
                jobNextBtn.click();
            }, 3000);
        });
    }

    // Job Toggle Buttons (Moved inside DOMContentLoaded)
    const getJobBtn = document.getElementById('getJobBtn');
    const postJobBtn = document.getElementById('postJobBtn');

    if (getJobBtn) { // Check if elements exist before adding listeners
        getJobBtn.classList.add('active');
        getJobBtn.classList.remove('inactive');
        if (postJobBtn) {
            postJobBtn.classList.add('inactive');
            postJobBtn.classList.remove('active');
        }

        getJobBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (postJobBtn) {
                postJobBtn.classList.remove('active');
                postJobBtn.classList.add('inactive');
            }
            getJobBtn.classList.remove('inactive');
            getJobBtn.classList.add('active');
        });
    }

    if (postJobBtn) { // Check if elements exist
        postJobBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (getJobBtn) {
                getJobBtn.classList.remove('active');
                getJobBtn.classList.add('inactive');
            }
            postJobBtn.classList.remove('inactive');
            postJobBtn.classList.add('active');
        });
    }
});


// Functions for features that rely on dynamically loaded content (moved outside DOMContentLoaded)
// These should be called *after* the components are in the DOM
function initializeHeaderFeatures() {
    const messageSlides = document.querySelectorAll('.message-slide');
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
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
    DarkModeManager.updateThemeUI(currentTheme);
}

function initializeSearchFeatures() {
    const searchPopup = document.getElementById('searchPopup');
    const searchOverlay = document.getElementById('searchOverlay');
    // More robust selector for searchNavBtn as it's inside #nav-placeholder
    const searchNavBtn = document.querySelector('#nav-placeholder .mobile-nav-item a[href="#search-popup"], #nav-placeholder a.search-icon');
    const closeSearchBtn = document.getElementById('closeSearch');

    if (!searchPopup || !searchOverlay || !searchNavBtn || !closeSearchBtn) {
        // console.error('Search elements not found for initialization.'); // Uncomment for debugging
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

function initializeMenuFeatures() {
    const menuPopup = document.getElementById('menuPopup');
    const menuOverlay = document.getElementById('menuOverlay');
    // More robust selector for menuNavBtn as it's inside #nav-placeholder
    const menuNavBtn = document.querySelector('#nav-placeholder a#openMenu');
    const closeMenuBtn = document.getElementById('closeMenu');

    if (!menuPopup || !menuOverlay || !menuNavBtn || !closeMenuBtn) {
        // console.error('Menu elements not found for initialization.'); // Uncomment for debugging
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

function adjustForNavbar() {
    const navbar = document.querySelector('nav');
    const navbarHeight = navbar ? navbar.offsetHeight + 10 : 60; // Fallback to 60px if nav not found
    document.body.style.paddingBottom = navbarHeight + 'px';
}

window.addEventListener('load', adjustForNavbar);
window.addEventListener('resize', adjustForNavbar);