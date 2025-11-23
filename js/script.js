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

// === DESKTOP SIDEBAR ===
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

// === TEMPLATES STORAGE (localStorage) ===
const TemplateManager = {
    KEY: 'email_templates',
    getAll() {
        return JSON.parse(localStorage.getItem(this.KEY) || '{}');
    },
    save(name, subject, body) {
        const templates = this.getAll();
        templates[name] = { subject, body };
        localStorage.setItem(this.KEY, JSON.stringify(templates));
        this.refreshDropdown();
    },
    load(name) {
        const templates = this.getAll();
        return templates[name] || null;
    },
    refreshDropdown() {
        const select = document.getElementById('email-template-select');
        if (!select) return;
        const current = select.value;
        select.innerHTML = '<option value="">-- Select Template --</option>';
        Object.keys(this.getAll()).forEach(name => {
            const opt = document.createElement('option');
            opt.value = name;
            opt.textContent = name;
            select.appendChild(opt);
        });
        if (current) select.value = current;
    }
};

// === GMAIL-STYLE EMAIL POPUP ===
function initGmailEmailPopup() {
    const popup = document.getElementById('email-popup');
    const openBtn = document.getElementById('open-email-popup');
    const closeBtn = document.getElementById('email-close');
    const sendBtn = document.getElementById('email-send');
    const discardBtn = document.getElementById('email-discard');
    const saveTemplateBtn = document.getElementById('save-as-template');
    const templateSelect = document.getElementById('email-template-select');
    const editor = document.getElementById('email-body');
    const fileInput = document.getElementById('file-input');
    const attachBtn = document.getElementById('attach-file');

    if (!popup) return;

    // Show/Hide
    const show = () => {
        popup.classList.add('show');
        document.body.style.overflow = 'hidden';
        editor.focus();
        TemplateManager.refreshDropdown();
    };
    const hide = () => {
        popup.classList.remove('show');
        document.body.style.overflow = '';
    };

    openBtn?.addEventListener('click', e => { e.preventDefault(); show(); });
    closeBtn?.addEventListener('click', hide);
    discardBtn?.addEventListener('click', () => confirm('Discard email?') && hide());
    popup.addEventListener('click', e => e.target === popup && hide());
    document.addEventListener('keydown', e => e.key === 'Escape' && popup.classList.contains('show') && hide());

    // Cc/Bcc Toggle
    document.querySelectorAll('[data-toggle]').forEach(btn => {
        btn.addEventListener('click', () => {
            const field = btn.dataset.toggle;
            document.getElementById(field + '-row').classList.toggle('hidden');
        });
    });

    // Template Load
    templateSelect?.addEventListener('change', () => {
        const name = templateSelect.value;
        if (!name) return;
        const tmpl = TemplateManager.load(name);
        if (tmpl) {
            document.getElementById('email-subject').value = tmpl.subject;
            editor.innerHTML = tmpl.body;
        }
    });

    // Save as Template
    saveTemplateBtn?.addEventListener('click', () => {
        const name = prompt('Enter template name:');
        if (!name?.trim()) return;
        const subject = document.getElementById('email-subject').value;
        const body = editor.innerHTML;
        TemplateManager.save(name.trim(), subject, body);
        alert(`Template "${name}" saved!`);
    });

    // Rich Text & Attachments (unchanged)
    document.querySelectorAll('.editor-btn[data-cmd]').forEach(btn => {
        btn.addEventListener('click', () => {
            const cmd = btn.dataset.cmd;
            document.execCommand(cmd, false, null);
            btn.classList.toggle('active', document.queryCommandState(cmd));
        });
    });

    document.getElementById('font-family')?.addEventListener('change', e => {
        document.execCommand('fontName', false, e.target.value);
    });
    document.getElementById('font-size')?.addEventListener('change', e => {
        document.execCommand('fontSize', false, e.target.value.replace('px', ''));
    });

    attachBtn?.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', () => {
        const preview = document.getElementById('attachment-preview');
        preview.innerHTML = '';
        Array.from(fileInput.files).forEach((file, i) => {
            const chip = document.createElement('span');
            chip.className = 'attachment-chip';
            chip.innerHTML = `<i class="fas fa-paperclip"></i> ${file.name} <button type="button" data-index="${i}">×</button>`;
            preview.appendChild(chip);
        });
        preview.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = btn.dataset.index;
                const dt = new DataTransfer();
                Array.from(fileInput.files).filter((_, i) => i != idx).forEach(f => dt.items.add(f));
                fileInput.files = dt.files;
                btn.parentNode.remove();
            });
        });
    });

    // === VALIDATION & SEND ===
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showFieldError(input, msg) {
        const errorDiv = document.getElementById('error-' + input.id.split('-')[1]);
        input.classList.add('email-field-error');
        if (errorDiv) {
            errorDiv.textContent = msg || input.dataset.error;
            errorDiv.classList.add('show');
        }
    }

    function clearFieldError(input) {
        const errorDiv = document.getElementById('error-' + input.id.split('-')[1]);
        input.classList.remove('email-field-error');
        if (errorDiv) errorDiv.classList.remove('show');
    }

    function showGlobalError(msg) {
        const banner = document.getElementById('email-global-error');
        const text = document.getElementById('email-global-error-text');
        text.textContent = msg;
        banner.classList.remove('hidden');
        banner.classList.add('show');
    }

    function hideGlobalError() {
        const banner = document.getElementById('email-global-error');
        banner.classList.add('hidden');
        banner.classList.remove('show');
    }

    function showToast(message, type = 'error') {
        let toast = document.getElementById('email-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'email-toast';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.className = `email-toast ${type} show`;
        setTimeout(() => toast.classList.remove('show'), 3000);
    }

    sendBtn.addEventListener('click', () => {
        hideGlobalError();
        let hasError = false;

        document.querySelectorAll('#email-popup input').forEach(clearFieldError);
        editor.classList.remove('email-field-error');

        // To is fixed → skip validation
        ['cc', 'bcc'].forEach(field => {
            const row = document.getElementById(field + '-row');
            const input = document.getElementById('email-' + field);
            if (!row.classList.contains('hidden') && input.value && !validateEmail(input.value)) {
                showFieldError(input);
                hasError = true;
            }
        });

        const subject = document.getElementById('email-subject');
        if (!subject.value.trim()) {
            showFieldError(subject);
            hasError = true;
        }

        if (!editor.innerText.trim()) {
            editor.classList.add('email-field-error');
            showToast('Email body cannot be empty', 'error');
            hasError = true;
        }

        if (hasError) {
            showGlobalError('Please fix the errors below before sending.');
            return;
        }

        const data = {
            to: document.getElementById('email-to').value,
            cc: document.getElementById('email-cc').value,
            bcc: document.getElementById('email-bcc').value,
            subject: subject.value,
            body: editor.innerHTML,
            attachments: Array.from(fileInput.files).map(f => f.name)
        };

        console.log('Sending email:', data);
        sendBtn.classList.add('pulse-success');
        showToast('Email sent successfully!', 'success');
        setTimeout(hide, 800);
    });

    // Clear errors on input
    document.querySelectorAll('#email-popup input, #email-body').forEach(el => {
        el.addEventListener('input', () => {
            clearFieldError(el);
            if (el.id === 'email-body') el.classList.remove('email-field-error');
        });
    });
}

// Replace old init
function initEmailPopup() {
    initGmailEmailPopup();
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
        initializeLoginPopup();
    });
    await loadComponent('../Universal/menu.html', 'menu-placeholder');
    await loadComponent('../Universal/search.html', 'search-placeholder');
    initializeMenuFeatures();
    initializeSearchFeatures();
    initializeDesktopSidebar();
    DarkModeManager.setupThemeToggle();
    initEmailPopup(); // Initialize Email Popup
});