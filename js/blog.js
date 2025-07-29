let currentPage = 1;
const blogsPerPage = 6;

async function loadBlogs() {
    const container = document.getElementById('blogs-container');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const sidebarMobile = document.querySelector('.sidebar-mobile');
    if (!container || !sidebarMobile) {
        console.warn("Element with ID 'blogs-container' or class 'sidebar-mobile' not found in the DOM.");
        return;
    }

    container.innerHTML = `
        <div class="loading">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Loading blogs...</p>
        </div>
    `;

    try {
        console.log(`Fetching blogs from: https://jobringer.com/api/blog_list_api.php?page=${currentPage}&limit=${blogsPerPage}`);
        const response = await fetch(`https://jobringer.com/api/blog_list_api.php?page=${currentPage}&limit=${blogsPerPage}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log('API Response:', data);

        if (!data || !Array.isArray(data.blogs)) {
            throw new Error('Invalid API response format: No "blogs" array found');
        }

        renderBlogs(data.blogs);

        if (data.blogs.length < blogsPerPage) {
            loadMoreBtn.classList.add('hidden');
        } else {
            loadMoreBtn.classList.remove('hidden');
        }

        // Debug: Check number of loaded blogs
        const loadedBlogs = container.querySelectorAll('.blog-card').length;
        console.log('Loaded blogs count:', loadedBlogs);

        // Show sidebar-mobile on mobile after initial load or more blogs
        if (window.innerWidth <= 767 && (loadedBlogs >= 6 || currentPage > 1)) {
            sidebarMobile.style.display = 'block';
            const widgets = sidebarMobile.querySelectorAll('.widget');
            widgets.forEach(widget => {
                widget.style.display = 'inline-block';
                widget.style.width = 'auto';
                widget.style.marginRight = '1rem';
            });
            const timelines = sidebarMobile.querySelectorAll('.timeline');
            timelines.forEach(timeline => {
                timeline.style.display = 'flex';
                timeline.style.justifyContent = 'space-between';
                timeline.style.padding = '0';
            });
            const timelineItems = sidebarMobile.querySelectorAll('.timeline-item');
            timelineItems.forEach(item => {
                item.style.width = '30%';
                item.style.textAlign = 'center';
            });
        }
    } catch (error) {
        console.error("Error loading blogs:", error);
        // Fallback mock data for testing
        const mockData = {
            blogs: [
                { title: "Test Blog 1", description: "Test content", date: "2025-07-27", read_time: "5", category: "General", image: "https://via.placeholder.com/800x450", url: "#" },
                { title: "Test Blog 2", description: "Test content", date: "2025-07-26", read_time: "4", category: "Career", image: "https://via.placeholder.com/800x450", url: "#" }
            ]
        };
        console.log("Using mock data due to error:", mockData);
        renderBlogs(mockData.blogs);
        loadMoreBtn.classList.add('hidden');
        if (window.innerWidth <= 767 && mockData.blogs.length >= 6) {
            sidebarMobile.style.display = 'block';
            const widgets = sidebarMobile.querySelectorAll('.widget');
            widgets.forEach(widget => {
                widget.style.display = 'inline-block';
                widget.style.width = 'auto';
                widget.style.marginRight = '1rem';
            });
            const timelines = sidebarMobile.querySelectorAll('.timeline');
            timelines.forEach(timeline => {
                timeline.style.display = 'flex';
                timeline.style.justifyContent = 'space-between';
                timeline.style.padding = '0';
            });
            const timelineItems = sidebarMobile.querySelectorAll('.timeline-item');
            timelineItems.forEach(item => {
                item.style.width = '30%';
                item.style.textAlign = 'center';
            });
        }
    }
}

function renderBlogs(blogs) {
    const container = document.getElementById('blogs-container');
    if (!container) {
        console.warn("Element with ID 'blogs-container' not found in the DOM.");
        return;
    }

    if (blogs.length === 0 && currentPage === 1) {
        container.innerHTML = `
            <div class="no-results">
                <i class="far fa-folder-open"></i>
                <p>No blogs found</p>
            </div>
        `;
        return;
    }

    const blogHtml = blogs.map(blog => `
        <article class="blog-card">
            <div class="image-container">
                <img src="${blog.image || 'https://via.placeholder.com/800x450'}"
                     alt="${blog.title || 'Blog post'}">
                <div class="category">${blog.category || 'General'}</div>
            </div>
            <div class="content">
                <div class="meta">
                    ${new Date(blog.date || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} • ${blog.read_time || '5'} min read
                    <div class="read-progress">
                        <div class="read-progress-bar" style="width: ${(blog.read_time / 10) * 100 || 50}%;"></div>
                    </div>
                </div>
                <h3>${blog.title || 'Untitled Blog Post'}</h3>
                <p>${blog.description || 'No description available.'}</p>
                <a href="${blog.url || '#'}" class="read-more">
                    Explore Article <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </article>
    `).join('');

    if (currentPage === 1) {
        container.innerHTML = blogHtml;
    } else {
        container.innerHTML += blogHtml;
    }
}

function showErrorState() {
    const container = document.getElementById('blogs-container');
    if (!container) {
        console.warn("Element with ID 'blogs-container' not found in the DOM.");
        return;
    }
    container.innerHTML = `
        <div class="error">
            <i class="fas fa-exclamation-circle"></i>
            Failed to load blogs. Please try again later.
        </div>
    `;
}

function loadMoreBlogs() {
    currentPage++;
    loadBlogs();
}

async function loadComponent(file, placeholderId) {
    try {
        const response = await fetch(file);
        if (!response.ok) {
            console.error(`Failed to load ${file}: ${response.status}`);
            return;
        }
        const content = await response.text();
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) {
            placeholder.innerHTML = content;
        } else {
            console.error(`Placeholder ${placeholderId} not found`);
        }
    } catch (error) {
        console.error(`Error loading ${file}:`, error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded, initializing blog page');
    loadBlogs();
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreBlogs);
    }

    // Handle window resize to adjust layout
    window.addEventListener('resize', () => {
        const sidebarMobile = document.querySelector('.sidebar-mobile');
        const loadedBlogs = document.querySelectorAll('#blogs-container .blog-card').length;
        if (window.innerWidth > 767) {
            sidebarMobile.style.display = 'none';
            const widgets = sidebarMobile.querySelectorAll('.widget');
            widgets.forEach(widget => {
                widget.style.display = 'block';
                widget.style.width = '100%';
                widget.style.marginRight = '0';
            });
            const timelines = sidebarMobile.querySelectorAll('.timeline');
            timelines.forEach(timeline => {
                timeline.style.display = 'block';
                timeline.style.justifyContent = 'inherit';
                timeline.style.padding = '1rem 0';
            });
            const timelineItems = sidebarMobile.querySelectorAll('.timeline-item');
            timelineItems.forEach(item => {
                item.style.width = '45%';
                item.style.textAlign = 'left';
            });
        } else if (loadedBlogs >= 6) {
            sidebarMobile.style.display = 'block';
            const widgets = sidebarMobile.querySelectorAll('.widget');
            widgets.forEach(widget => {
                widget.style.display = 'inline-block';
                widget.style.width = 'auto';
                widget.style.marginRight = '1rem';
            });
            const timelines = sidebarMobile.querySelectorAll('.timeline');
            timelines.forEach(timeline => {
                timeline.style.display = 'flex';
                timeline.style.justifyContent = 'space-between';
                timeline.style.padding = '0';
            });
            const timelineItems = sidebarMobile.querySelectorAll('.timeline-item');
            timelineItems.forEach(item => {
                item.style.width = '30%';
                item.style.textAlign = 'center';
            });
        }
    });
});