// Tailwind config (keep this as is)
tailwind.config = {
    darkMode: 'class'
};

// --- Dark Mode Manager (Updated for both desktop and mobile toggles) ---
const DarkModeManager = {
    getThemePreference() {
        const stored = localStorage.getItem('theme');
        if (stored) return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    },
    setThemePreference(theme) {
        localStorage.setItem('theme', theme);
    },
    applyTheme(theme) {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        this.updateThemeUI(theme);
    },
    updateThemeUI(theme) {
        // Desktop sidebar theme UI
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
        // Mobile popup theme UI
        const mobileThemeIconMoon = document.getElementById('mobile-theme-icon-moon');
        const mobileThemeIconSun = document.getElementById('mobile-theme-icon-sun');
        const mobileThemeText = document.getElementById('mobile-theme-text');
        if (mobileThemeIconMoon && mobileThemeIconSun && mobileThemeText) {
            if (theme === 'dark') {
                mobileThemeIconMoon.classList.add('hidden');
                mobileThemeIconSun.classList.remove('hidden');
                mobileThemeText.textContent = 'Toggle Light Mode';
            } else {
                mobileThemeIconMoon.classList.remove('hidden');
                mobileThemeIconSun.classList.add('hidden');
                mobileThemeText.textContent = 'Toggle Dark Mode';
            }
        }
    },
    toggleTheme() {
        const newTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
        this.applyTheme(newTheme);
        this.setThemePreference(newTheme);
    },
    init() {
        this.applyTheme(this.getThemePreference());
    },
    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle-menu');
        if (themeToggle) {
            themeToggle.addEventListener('click', this.toggleTheme.bind(this));
        }
        const mobileThemeToggle = document.getElementById('mobile-theme-toggle-menu');
        if (mobileThemeToggle) {
            mobileThemeToggle.addEventListener('click', this.toggleTheme.bind(this));
        }
    }
};
DarkModeManager.init();


// --- Universal Component Loading Function ---
async function loadComponent(file, placeholderId) {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const content = await response.text();
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) {
            placeholder.innerHTML = content;
        } else {
            console.error(`Placeholder not found for ${placeholderId}`);
        }
    } catch (error) {
        console.error(`Error loading ${file}:`, error);
    }
}


// --- Main Script Logic (Runs after HTML is loaded) ---
document.addEventListener('DOMContentLoaded', async () => {
    // ✅ Load all universal components into their placeholders
    await loadComponent(`../Universal/header.html`, 'header-placeholder');
    // CORRECTED: Call the country selector setup function here, after the header is loaded
    setupCountrySelector();
    
    await loadComponent(`../Universal/footer.html`, 'footer-placeholder');
    await loadComponent(`../Universal/nav.html`, 'nav-placeholder'); // Main nav bar (Desktop Sidebar)
    
    await loadComponent(`../Universal/menu.html`, 'menu-placeholder'); 
    
    await loadComponent(`../Universal/search.html`, 'search-placeholder'); // Search popup

    // ✅ Initialize all features AFTER components are loaded
    initializeMenuFeatures();
    initializeSearchFeatures();
    initializeHeaderFeatures(); // For dark mode toggle etc.
    initializeDesktopSidebar(); // New: Handle desktop sidebar padding
    
    // Any page-specific initializations would go here, checking if the elements exist first
});


// --- UPDATED: Desktop Sidebar Padding Adjustment (with better expansion handling) ---
function initializeDesktopSidebar() {
    // Use the new ID for the checkbox
    const checkbox = document.getElementById('checkbox-input');
    const navPlaceholder = document.getElementById('nav-placeholder');
    const header = document.querySelector('header');
    
    if (!checkbox || !window.matchMedia('(min-width: 1024px)').matches) return;

    const updateLayout = () => {
        const isExpanded = checkbox.checked;
        const root = document.documentElement;
        const collapsedWidth = getComputedStyle(root).getPropertyValue('--collapsed').trim();
        const expandedWidth = getComputedStyle(root).getPropertyValue('--expanded').trim();
        const currentWidth = isExpanded ? expandedWidth : collapsedWidth;
        
        // Update body padding
        document.body.style.paddingLeft = currentWidth;
        
        // Update header padding
        if (header) {
            // NOTE: Header positioning and width/padding needs careful CSS adjustment for sticky header + dynamic padding
            // For now, we only update the body padding as the CSS handles the sidebar width transition.
            // If the header doesn't span full width to the right, you might need a different approach.
            // Setting padding-left on the header is generally not needed if it's full-width content.
            // I'm commenting out the header padding update for simplicity based on standard layouts.
            // header.style.paddingLeft = currentWidth;
        }
        
        // Update nav placeholder width (already handled by CSS :has(input:checked), removing from JS)
        // if (navPlaceholder) {
        //     navPlaceholder.style.width = currentWidth;
        // }
        
        // Optional: Add class for additional styling if needed
        document.body.classList.toggle('sidebar-expanded', isExpanded);
    };

    // Listen for checkbox changes
    checkbox.addEventListener('change', updateLayout);
    
    // Initial setup (collapsed by default)
    updateLayout();
    
    // Re-run on resize to ensure consistency
    window.addEventListener('resize', () => {
        if (window.matchMedia('(min-width: 1024px)').matches) {
            updateLayout();
        }
    });
}


// --- MENU INITIALIZATION (Mobile popup only; desktop handled by CSS) ---
function initializeMenuFeatures() {
    const menuPopup = document.getElementById('mobile-menuPopup');
    const menuOverlay = document.getElementById('mobile-menuOverlay');
    const closeMenuBtn = document.getElementById('mobile-closeMenu');
    
    const openMenuBtn = document.getElementById('openMenu');
    
    // Toggle for the desktop sidebar Login sublist
    const loginToggle = document.getElementById('login-toggle');

    const toggleMenuPopup = (isOpen) => {
        // Only run for mobile devices
        if (window.matchMedia('(max-width: 1023px)').matches && menuPopup && menuOverlay) {
            menuPopup.classList.toggle('active', isOpen);
            menuOverlay.classList.toggle('active', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        }
    };

    if (openMenuBtn) {
        openMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleMenuPopup(true);
        });
    }
    
    // Logic to toggle the Login sublist when the sidebar is expanded (only relevant in desktop)
    if (loginToggle) {
        loginToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const parentItem = loginToggle.closest('.sidebar__item');
            const sublist = parentItem ? parentItem.querySelector('.sidebar__sublist') : null;
            
            // Only toggle if the sidebar is expanded (i.e., has input:checked)
            const sidebar = loginToggle.closest('.vertical-sidebar');
            const isExpanded = sidebar ? sidebar.querySelector('#checkbox-input').checked : false;

            if (isExpanded && sublist) {
                // Simple class toggle for basic sublist open/close animation
                sublist.classList.toggle('active');
            }
        });
    }


    // Close listeners for mobile popup only
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', () => toggleMenuPopup(false));
    if (menuOverlay) menuOverlay.addEventListener('click', () => toggleMenuPopup(false));
    document.addEventListener('keydown', (e) => e.key === 'Escape' && toggleMenuPopup(false));
}


function setupCountrySelector() {
    const selectorBtn = document.getElementById("country-selector-btn");
    const optionsContainer = document.getElementById("country-options");
    const countryOptions = document.querySelectorAll(".country-option");
    const selectedFlagImg = document.getElementById("selected-flag-img");
    const selectedCountryText = document.getElementById("selected-country-text");

    if (!selectorBtn || !optionsContainer || !countryOptions.length) {
        console.error("Country selector elements not found."); // helpful for debugging
        return; // safety check
    }

    // Toggle dropdown
    selectorBtn.addEventListener("click", () => {
        optionsContainer.classList.toggle("hidden");
    });

    // Click on an option
    countryOptions.forEach(opt => {
        opt.addEventListener("click", (e) => {
            e.preventDefault();

            const countryName = opt.getAttribute("data-country");
            const flagImg = opt.getAttribute("data-flag-img");

            if (countryName && flagImg) {
                selectedCountryText.textContent = countryName;
                selectedFlagImg.src = flagImg;
            }

            // Hide dropdown
            optionsContainer.classList.add("hidden");

            // Update checkmarks
            countryOptions.forEach(o => {
                const check = o.querySelector("i");
                if (check) check.classList.add("hidden");
            });
            const selectedCheck = opt.querySelector("i");
            if (selectedCheck) selectedCheck.classList.remove("hidden");
        });
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", (e) => {
        if (!selectorBtn.contains(e.target) && !optionsContainer.contains(e.target)) {
            optionsContainer.classList.add("hidden");
        }
    });
}

function initializeSearchFeatures() {
    const searchPopup = document.getElementById('searchPopup');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearchBtn = document.getElementById('closeSearch');
    const desktopOpenSearch = document.getElementById('openSearch');
    const mobileOpenSearch = document.getElementById('mobile-openSearch');

    if (!searchPopup || !searchOverlay || !closeSearchBtn) return;

    const toggleSearchPopup = (isOpen) => {
        searchPopup.classList.toggle('active', isOpen);
        searchOverlay.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    // Add listeners to both desktop and mobile search buttons
    [desktopOpenSearch, mobileOpenSearch].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                toggleSearchPopup(true);
            });
        }
    });

    closeSearchBtn.addEventListener('click', () => toggleSearchPopup(false));
    searchOverlay.addEventListener('click', () => toggleSearchPopup(false));
    document.addEventListener('keydown', (e) => e.key === 'Escape' && toggleSearchPopup(false));
}

function initializeHeaderFeatures() {
    DarkModeManager.setupThemeToggle();
}