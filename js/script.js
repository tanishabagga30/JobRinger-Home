// === TAILWIND CONFIG ===
tailwind.config = {
    darkMode: 'class'
};

// === DARK MODE MANAGER ===
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
        const updateIcons = (moonId, sunId, textId) => {
            const moon = document.getElementById(moonId);
            const sun = document.getElementById(sunId);
            const text = document.getElementById(textId);
            if (!moon || !sun || !text) return;
            if (theme === 'dark') {
                moon.classList.add('hidden');
                sun.classList.remove('hidden');
                text.textContent = 'Toggle Light Mode';
            } else {
                moon.classList.remove('hidden');
                sun.classList.add('hidden');
                text.textContent = 'Toggle Dark Mode';
            }
        };
        updateIcons('theme-icon-moon', 'theme-icon-sun', 'theme-text');
        updateIcons('mobile-theme-icon-moon', 'mobile-theme-icon-sun', 'mobile-theme-text');
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
        const toggles = ['theme-toggle-menu', 'mobile-theme-toggle-menu'];
        toggles.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('click', this.toggleTheme.bind(this));
        });
    }
};
DarkModeManager.init();

// === COMPONENT LOADER ===
async function loadComponent(file, placeholderId, callback) {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const content = await response.text();
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) {
            placeholder.innerHTML = content;
            if (callback) callback(placeholder);
        }
    } catch (error) {
        console.error(`Error loading ${file}:`, error);
    }
}

// === COOKIE CONSENT ===
const CookieManager = {
    COOKIE_KEY: 'cookie_consent_status',
    getConsentStatus() { return localStorage.getItem(this.COOKIE_KEY); },
    setConsentStatus(status) {
        localStorage.setItem(this.COOKIE_KEY, status);
        this.hidePopup();
    },
    showPopup() {
        const popup = document.getElementById('cookie-consent-popup');
        setTimeout(() => popup?.classList.remove('translate-y-full'), 500);
    },
    hidePopup() {
        const popup = document.getElementById('cookie-consent-popup');
        if (popup) {
            popup.classList.add('translate-y-full');
            setTimeout(() => popup.style.display = 'none', 500);
        }
    },
    initializeCookiePopup() {
        if (this.getConsentStatus()) {
            document.getElementById('cookie-consent-popup')?.style.setProperty('display', 'none');
            return;
        }
        this.showPopup();
        document.getElementById('cookie-accept-all')?.addEventListener('click', () => {
            console.log("Cookies Accepted.");
            this.setConsentStatus('accepted');
        });
        document.getElementById('cookie-decline')?.addEventListener('click', () => {
            console.log("Cookies Declined.");
            this.setConsentStatus('declined');
        });
    }
};

// === LOGIN CHOICE POPUP ===
function initializeLoginPopup() {
    const desktopLogin = document.getElementById('login-toggle');
    const mobileLogin = document.querySelector('#mobile-nav a[href="/login.html"]');
    const popup = document.getElementById('login-choice-popup');
    const closeBtn = document.getElementById('close-login-popup');

    if (!popup) return;

    const openPopup = (e) => {
        e.preventDefault();
        popup.classList.add('show');
        document.body.style.overflow = 'hidden';
    };

    const closePopup = () => {
        popup.classList.remove('show');
        document.body.style.overflow = '';
    };

    desktopLogin?.addEventListener('click', openPopup);
    mobileLogin?.addEventListener('click', openPopup);
    closeBtn?.addEventListener('click', closePopup);
    popup.addEventListener('click', (e) => e.target === popup && closePopup());
    document.addEventListener('keydown', (e) => e.key === 'Escape' && popup.classList.contains('show') && closePopup());
}

// === MENU & SEARCH POPUPS ===
function initializeMenuFeatures() {
    const menuPopup = document.getElementById('mobile-menuPopup');
    const menuOverlay = document.getElementById('mobile-menuOverlay');
    const closeMenuBtn = document.getElementById('mobile-closeMenu');
    const openMenuBtn = document.getElementById('openMenu');

    const toggleMenu = (open) => {
        if (!menuPopup || !menuOverlay) return;
        menuPopup.classList.toggle('active', open);
        menuOverlay.classList.toggle('active', open);
        document.body.style.overflow = open ? 'hidden' : '';
    };

    openMenuBtn?.addEventListener('click', (e) => { e.preventDefault(); toggleMenu(true); });
    closeMenuBtn?.addEventListener('click', () => toggleMenu(false));
    menuOverlay?.addEventListener('click', () => toggleMenu(false));
    document.addEventListener('keydown', (e) => e.key === 'Escape' && toggleMenu(false));
}

function initializeSearchFeatures() {
    const searchPopup = document.getElementById('searchPopup');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearchBtn = document.getElementById('closeSearch');
    const openBtns = [document.getElementById('openSearch'), document.getElementById('mobile-openSearch')];

    const toggleSearch = (open) => {
        if (!searchPopup || !searchOverlay) return;
        searchPopup.classList.toggle('active', open);
        searchOverlay.classList.toggle('active', open);
        document.body.style.overflow = open ? 'hidden' : '';
    };

    openBtns.forEach(btn => btn?.addEventListener('click', (e) => { e.preventDefault(); toggleSearch(true); }));
    closeSearchBtn?.addEventListener('click', () => toggleSearch(false));
    searchOverlay?.addEventListener('click', () => toggleSearch(false));
    document.addEventListener('keydown', (e) => e.key === 'Escape' && toggleSearch(false));
}

// === COUNTRY SELECTOR ===
function setupCountrySelector() {
    const btn = document.getElementById("country-selector-btn");
    const container = document.getElementById("country-options");
    const options = document.querySelectorAll(".country-option");
    const flagImg = document.getElementById("selected-flag-img");
    const countryText = document.getElementById("selected-country-text");

    if (!btn || !container) return;

    btn.addEventListener("click", () => container.classList.toggle("hidden"));
    options.forEach(opt => {
        opt.addEventListener("click", (e) => {
            e.preventDefault();
            const name = opt.dataset.country;
            const img = opt.dataset.flagImg;
            if (name && img) {
                countryText.textContent = name;
                flagImg.src = img;
            }
            container.classList.add("hidden");
            document.querySelectorAll(".country-option i").forEach(i => i.classList.add("hidden"));
            opt.querySelector("i")?.classList.remove("hidden");
        });
    });
    document.addEventListener("click", (e) => {
        if (!btn.contains(e.target) && !container.contains(e.target)) {
            container.classList.add("hidden");
        }
    });
}

// === DESKTOP SIDEBAR (Hover Expand) ===
function initializeDesktopSidebar() {
    if (!window.matchMedia('(min-width: 1024px)').matches) return;

    const checkbox = document.getElementById('sidebar-toggle');
    const nav = document.getElementById('desktop-nav');
    if (!checkbox || !nav) return;

    checkbox.checked = false;

    const updateLayout = () => {
        const width = checkbox.checked
            ? getComputedStyle(document.documentElement).getPropertyValue('--expanded').trim()
            : getComputedStyle(document.documentElement).getPropertyValue('--collapsed').trim();
        document.body.style.paddingLeft = width;
    };

    checkbox.addEventListener('change', updateLayout);

    let timeout;
    nav.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        if (!checkbox.checked) {
            checkbox.checked = true;
            updateLayout();
        }
    });
    nav.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
            if (checkbox.checked) {
                checkbox.checked = false;
                updateLayout();
            }
        }, 300);
    });

    updateLayout();
    window.addEventListener('resize', updateLayout);
}

// === MAIN INIT ===
document.addEventListener('DOMContentLoaded', async () => {
    const forceNavLayout = (el) => {
        if (window.matchMedia('(max-width: 1023px)').matches) {
            el.style.display = 'none';
            void el.offsetHeight;
            el.style.display = 'block';
        }
    };

    await loadComponent('../Universal/header.html', 'header-placeholder');
    setupCountrySelector();

    await loadComponent('../Universal/footer.html', 'footer-placeholder');
    CookieManager.initializeCookiePopup();

    await loadComponent('../Universal/nav.html', 'nav-placeholder', (el) => {
        forceNavLayout(el);
        initializeLoginPopup();  // Critical: Initialize popup after nav loads
    });

    await loadComponent('../Universal/menu.html', 'menu-placeholder');
    await loadComponent('../Universal/search.html', 'search-placeholder');

    initializeMenuFeatures();
    initializeSearchFeatures();
    initializeHeaderFeatures();
    initializeDesktopSidebar();
    DarkModeManager.setupThemeToggle();
});

document.addEventListener('DOMContentLoaded', () => {
  // === POPUP HANDLER (Login + Pricing) ===
  function initPopups() {
    const popups = {
      login: document.getElementById('login-choice-popup'),
      pricing: document.getElementById('pricing-choice-popup')
    };

    document.querySelectorAll('[data-popup]').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const type = link.dataset.popup;
        const popup = popups[type];
        if (popup) {
          popup.classList.add('show');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    // Close buttons
    document.querySelectorAll('#close-login-popup, #close-pricing-popup').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.closest('.fixed').classList.remove('show');
        document.body.style.overflow = '';
      });
    });

    // Overlay click
    Object.values(popups).forEach(popup => {
      popup?.addEventListener('click', e => {
        if (e.target === popup) {
          popup.classList.remove('show');
          document.body.style.overflow = '';
        }
      });
    });

    // Esc key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.fixed.show').forEach(p => {
          p.classList.remove('show');
          document.body.style.overflow = '';
        });
      }
    });
  }

  // === DARK MODE ===
  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
  };
  document.getElementById('theme-toggle-menu')?.addEventListener('click', toggleDark);

  // === SIDEBAR TOGGLE (Hover + Click) ===
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const desktopNav = document.getElementById('desktop-nav');
  if (sidebarToggle && desktopNav) {
    desktopNav.addEventListener('mouseenter', () => sidebarToggle.checked = true);
    desktopNav.addEventListener('mouseleave', () => setTimeout(() => {
      if (!desktopNav.matches(':hover')) sidebarToggle.checked = false;
    }, 300));
  }

  // === INIT ALL ===
  setTimeout(initPopups, 800);
});