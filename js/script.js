// Tailwind config (keep this as is)
tailwind.config = {
    darkMode: 'class'
};

// --- Dark Mode Manager (No changes needed) ---
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
    await loadComponent(`../Universal/nav.html`, 'nav-placeholder'); // Main nav bar
    await loadComponent(`../Universal/menu.html`, 'menu-placeholder');   // Menu popup
    await loadComponent(`../Universal/search.html`, 'search-placeholder'); // Search popup

    // ✅ Initialize all features AFTER components are loaded
    initializeMenuFeatures();
    initializeSearchFeatures();
    initializeHeaderFeatures(); // For dark mode toggle etc.
    
    // Any page-specific initializations would go here, checking if the elements exist first
});


// --- FINAL POPUP INITIALIZATION FUNCTIONS ---

// ✅ This function now works universally for mobile and desktop
function initializeMenuFeatures() {
    const menuPopup = document.getElementById('menuPopup');
    const menuOverlay = document.getElementById('menuOverlay');
    const closeMenuBtn = document.getElementById('closeMenu');
    const openMenuBtn = document.getElementById('openMenu'); // Universal selector

    if (!menuPopup || !menuOverlay || !openMenuBtn || !closeMenuBtn) return;

    const toggleMenuPopup = (isOpen) => {
        menuPopup.classList.toggle('active', isOpen);
        menuOverlay.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    openMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMenuPopup(true);
    });

    closeMenuBtn.addEventListener('click', () => toggleMenuPopup(false));
    menuOverlay.addEventListener('click', () => toggleMenuPopup(false));
    document.addEventListener('keydown', (e) => e.key === 'Escape' && toggleMenuPopup(false));
}

// REMOVED redundant document.addEventListener block
// document.addEventListener('DOMContentLoaded', () => {
//     setupCountrySelector();
// });
// document.addEventListener("DOMContentLoaded", () => {
//     setupCountrySelector();
// });

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

// REMOVED redundant optionsMenu listener
//     // --- 3. Handle selection from the dropdown ---
//     optionsMenu.addEventListener('click', (e) => {
//         const option = e.target.closest('.country-option');
//         if (!option) return;
//         
//         e.preventDefault();
//
//         const newCountry = option.dataset.country;
//         
//         // Update the button text
//         selectedCountryInfo.textContent = newCountry;
//
//         // Update the checkmarks
//         // First, hide all checkmarks
//         optionsMenu.querySelectorAll('.fa-check').forEach(icon => {
//             icon.classList.add('hidden');
//         });
//         // Then, show the checkmark for the selected option
//         option.querySelector('.fa-check').classList.remove('hidden');
//
//         // Hide the dropdown after selection
//         optionsMenu.classList.add('hidden');
//
//         // You can add further logic here, like reloading jobs for the selected country
//         console.log(`Country changed to: ${newCountry}`);
//     });

// This whole block is now redundant, as the universal loading function handles it.
// document.addEventListener('DOMContentLoaded', () => {
//     // Function to inject HTML content into a placeholder element
//     const injectComponent = (id, htmlContent) => {
//         const placeholder = document.getElementById(id);
//         if (placeholder) {
//             placeholder.innerHTML = htmlContent;
//         }
//     };
//
//     // --- Universal Header Component ---
//     const headerHTML = `
//         <header class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
//             <div class="flex items-center justify-between">
//                 <div class="flex items-center space-x-2">
//                     <i class="fas fa-briefcase text-xl text-cyan-600 dark:text-cyan-400"></i>
//                     <span class="text-xl font-bold">jobRinger</span>
//                 </div>
//                 <div class="flex items-center space-x-4">
//                     <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-cyan-600 transition-colors">Jobs</a>
//                     <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-cyan-600 transition-colors">Services</a>
//                     <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-cyan-600 transition-colors">Subscription</a>
//                     <div class="profile-info">Hello Tanisha</div>
//                 </div>
//             </div>
//         </header>
//     `;
//     injectComponent('header-placeholder', headerHTML);
//
//     // --- Universal Footer Component ---
//     const footerHTML = `
//         <footer class="bg-gray-100 dark:bg-gray-800 p-6 text-sm text-center border-t border-gray-200 dark:border-gray-700">
//             <div class="container mx-auto">
//                 <p>&copy; 2024 JobRinger. All rights reserved.</p>
//             </div>
//         </footer>
//     `;
//     injectComponent('footer-placeholder', footerHTML);
//
//     // --- Universal Mobile Navigation Component ---
//     const navHTML = `
//         <div class="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-50 shadow-lg">
//             <nav class="flex justify-around p-2">
//                 <a href="#" class="flex flex-col items-center text-sm p-1 text-gray-600 dark:text-gray-300 hover:text-cyan-600 transition-colors">
//                     <i class="fas fa-tachometer-alt text-lg"></i>
//                     <span class="text-xs">Dashboard</span>
//                 </a>
//                 <a href="#" class="flex flex-col items-center text-sm p-1 text-gray-600 dark:text-gray-300 hover:text-cyan-600 transition-colors">
//                     <i class="fas fa-search text-lg"></i>
//                     <span class="text-xs">Search</span>
//                 </a>
//                 <a href="#" class="flex flex-col items-center text-sm p-1 text-gray-600 dark:text-gray-300 hover:text-cyan-600 transition-colors">
//                     <i class="fas fa-bell text-lg"></i>
//                     <span class="text-xs">Alerts</span>
//                 </a>
//                 <a href="#" class="flex flex-col items-center text-sm p-1 text-gray-600 dark:text-gray-300 hover:text-cyan-600 transition-colors">
//                     <i class="fas fa-bookmark text-lg"></i>
//                     <span class="text-xs">Saved</span>
//                 </a>
//                 <a href="#" class="flex flex-col items-center text-sm p-1 text-gray-600 dark:text-gray-300 hover:text-cyan-600 transition-colors">
//                     <i class="fas fa-user-circle text-lg"></i>
//                     <span class="text-xs">Profile</span>
//                 </a>
//             </nav>
//         </div>
//     `;
//     injectComponent('nav-placeholder', navHTML);
//     
// });
// ✅ This function now works universally for mobile and desktop
function initializeSearchFeatures() {
    const searchPopup = document.getElementById('searchPopup');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearchBtn = document.getElementById('closeSearch');
    const openSearchBtn = document.getElementById('openSearch'); // Universal selector

    if (!searchPopup || !searchOverlay || !openSearchBtn || !closeSearchBtn) return;

    const toggleSearchPopup = (isOpen) => {
        searchPopup.classList.toggle('active', isOpen);
        searchOverlay.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    openSearchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleSearchPopup(true);
    });

    closeSearchBtn.addEventListener('click', () => toggleSearchPopup(false));
    searchOverlay.addEventListener('click', () => toggleSearchPopup(false));
    document.addEventListener('keydown', (e) => e.key === 'Escape' && toggleSearchPopup(false));
}

function initializeHeaderFeatures() {
    DarkModeManager.setupThemeToggle();
}