// Universal/template-loader.js

async function loadTemplate() {
    // Set base path depending on current page location
    const basePath = window.location.pathname.includes('jobspage') ? '..' : '.';

    // Define template paths
    const templates = {
        header: `${basePath}/Universal/header.html`,
        footer: `${basePath}/Universal/footer.html`,
        nav: `${basePath}/Universal/nav.html`,
        search: `${basePath}/Universal/search.html`,
        menu: `${basePath}/Universal/menu.html`
    };

    // Load each template
    for (const [key, path] of Object.entries(templates)) {
        try {
            const response = await fetch(path);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const content = await response.text();
            document.getElementById(`${key}-placeholder`).innerHTML = content;
        } catch (error) {
            console.error(`Error loading ${key}:`, error);
            document.getElementById(`${key}-placeholder`).innerHTML = `
                <div class="error">Failed to load ${key} component</div>
            `;
        }
    }


    setupNavigation();

    
    if (typeof initComponents === 'function') {
        initComponents();
    }
}

function setupNavigation() {
    // Highlight current page in nav
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (currentPage.includes(linkPage)) {
            link.classList.add('text-indigo-600');
            link.classList.remove('text-gray-500', 'hover:text-indigo-600');
        }
    });

    // Handle search button
    document.getElementById('openSearch')?.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('search-placeholder').classList.add('active');
    });

    // Handle menu button
    document.getElementById('openMenu')?.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('menu-placeholder').classList.add('active');
    });
}

// Start loading templates when DOM is ready
document.addEventListener('DOMContentLoaded', loadTemplate);