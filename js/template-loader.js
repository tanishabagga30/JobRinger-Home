// Universal/template-loader.js

async function loadTemplate() {
    // Set base path depending on current page location
    const basePath = "new.jobringer.com";

    // Define template paths
    const templates = {
        header: `/Universal/header.html`,
        footer: `/Universal/footer.html`,
        nav: `/Universal/nav.html`,
        search: `/Universal/search.html`,
        menu: `/Universal/menu.html`
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
    const menuNavBtn = document.querySelector('#nav-placeholder a#openMenu');
    menuNavBtn.addEventListener('click', (e) => {
        
        e.preventDefault();
        toggleMenuPopup();
    });

    // document.getElementById('openMenu')?.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     document.getElementById('menu-placeholder').classList.add('active');
    // });
}

// Start loading templates when DOM is ready
document.addEventListener('DOMContentLoaded', loadTemplate);