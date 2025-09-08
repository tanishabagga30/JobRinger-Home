tailwind.config = {
    darkMode: 'class'
}

// Global variable for current sort mode
let currentSort = 'relevant'; // 'relevant' or 'latest'

// --- Main Initialization ---
document.addEventListener('DOMContentLoaded', function () {
    initComponents();
});

function initComponents() {
    console.log("Jobs page initialized");
    setActiveNavItem();
    loadJobs();
    initSortToggle();

    // Event listener for dynamically created buttons
    document.addEventListener('click', function (event) {
        // Load more jobs button
        if (event.target.id === 'load-more-btn' || event.target.closest('#load-more-btn')) {
            loadMoreJobs();
        }
        
        // Handle Info button click
        const infoBtn = event.target.closest('.action-btn.info-btn');
        if (infoBtn) {
            const jobId = infoBtn.dataset.jobId;
            if (jobId) {
                window.location.href = `job-description.html?id=${jobId}`;
            }
        }
    });

    // Quick search filter buttons
    document.querySelectorAll('.quick-search-btn').forEach(button => {
        button.addEventListener('click', function () {
            document.querySelectorAll('.quick-search-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            loadJobs();
        });
    });

    // Filter popup handlers
    const openFilterBtn = document.getElementById('open-filter');
    const closeFilterBtn = document.getElementById('close-filter');
    const filterPopup = document.getElementById('filter-popup');
    const applyFilterBtn = document.getElementById('apply-filter');
    const clearFilterBtn = document.getElementById('clear-filter');

    if (openFilterBtn && filterPopup) {
        openFilterBtn.addEventListener('click', () => {
            filterPopup.classList.remove('hidden');
            filterPopup.classList.add('flex');
        });
    }

    if (closeFilterBtn && filterPopup) {
        closeFilterBtn.addEventListener('click', () => {
            filterPopup.classList.add('hidden');
            filterPopup.classList.remove('flex');
        });
    }

    if (applyFilterBtn) {
        applyFilterBtn.addEventListener('click', () => {
            filterPopup.classList.add('hidden');
            filterPopup.classList.remove('flex');
            loadJobs();
        });
    }

    if(clearFilterBtn) {
        clearFilterBtn.addEventListener('click', () => {
            const checkboxes = filterPopup.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(checkbox => checkbox.checked = false);
        });
    }
}

// --- UI & State Management ---

function setActiveNavItem() {
    const navItems = document.querySelectorAll('#nav-placeholder nav a');
    navItems.forEach(item => {
        item.classList.remove('text-cyan-600');
        if (item.href.includes('jobPage.html')) {
            item.classList.add('text-cyan-600');
        }
    });
}

function initSortToggle() {
    const sortToggle = document.getElementById('sort-toggle');
    if (!sortToggle) return;

    sortToggle.addEventListener('click', function() {
        currentSort = currentSort === 'relevant' ? 'latest' : 'relevant';
        
        const textElement = this.querySelector('.sort-toggle-text');
        const iconElement = this.querySelector('i');
        
        if (currentSort === 'latest') {
            textElement.textContent = 'Latest';
            iconElement.className = 'fas fa-sort-amount-up';
        } else {
            textElement.textContent = 'Relevant';
            iconElement.className = 'fas fa-sort-amount-down';
        }
        
        loadJobs();
    });
}

function sortJobs(jobs) {
    if (currentSort === 'relevant') {
        // Sort by relevance (premium jobs first, then others)
        return [...jobs].sort((a, b) => {
            if (a.category === 'premium' && b.category !== 'premium') return -1;
            if (a.category !== 'premium' && b.category === 'premium') return 1;
            return 0; // or sort by date as a secondary factor
        });
    } else {
        // Sort by latest (using ID as a proxy for date)
        return [...jobs].sort((a, b) => b.id - a.id);
    }
}

// --- Data Fetching & Rendering ---

async function loadJobs() {
    const container = document.getElementById('jobs-container');
    if (!container) {
        console.warn("Element with ID 'jobs-container' not found.");
        return;
    }
    // Loading spinner
    container.innerHTML = `
        <div class="text-center py-10 col-span-full">
            <i class="fas fa-spinner fa-spin text-3xl text-slate-400"></i>
            <p class="mt-3 text-slate-500">Loading jobs...</p>
        </div>
    `;

    try {
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay

        const mockJobs = getMockJobs(6); // Get initial set of jobs
        const filteredJobs = filterAndSortJobs(mockJobs);
        renderJobs(filteredJobs);

    } catch (error) {
        console.error("Error loading jobs:", error);
        showErrorState();
    }
}

function renderJobs(jobs) {
    const container = document.getElementById('jobs-container');
    if (!container) return;

    if (jobs.length === 0) {
        container.innerHTML = `
            <div class="text-center py-10 col-span-full">
                <i class="far fa-folder-open text-4xl text-slate-400"></i>
                <p class="mt-4 text-slate-500 font-medium">No jobs found matching your criteria.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = jobs.map(job => generateJobCardHTML(job)).join('');
}

async function loadMoreJobs() {
    const container = document.getElementById('jobs-container');
    const loadBtn = document.getElementById('load-more-btn');
    if (!container || !loadBtn) return;

    loadBtn.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i> Loading...`;
    loadBtn.disabled = true;

    try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

        const moreMockJobs = getMockJobs(4, 7); // Get more jobs starting from ID 7
        const filteredJobs = filterAndSortJobs(moreMockJobs);
        const newHtml = filteredJobs.map(job => generateJobCardHTML(job)).join('');
        
        container.insertAdjacentHTML('beforeend', newHtml);
        
        loadBtn.innerHTML = `Load More`;
        loadBtn.disabled = false;

    } catch (error) {
        console.error("Error loading more jobs:", error);
        loadBtn.innerHTML = `Failed to load`;
        setTimeout(() => {
            loadBtn.innerHTML = `Load More`;
            loadBtn.disabled = false;
        }, 3000);
    }
}

function showErrorState() {
    const container = document.getElementById('jobs-container');
    if (!container) return;
    container.innerHTML = `
        <div class="bg-red-100 p-4 rounded-lg text-red-700 dark:bg-red-900/30 dark:text-red-300 col-span-full">
            <i class="fas fa-exclamation-circle mr-2"></i>
            Failed to load jobs. Please check your connection and try again.
        </div>
    `;
}

// --- Utility & Helper Functions ---

function filterAndSortJobs(jobs) {
    const activeQuickFilter = document.querySelector('.quick-search-btn.active')?.textContent.toLowerCase();
    const filterPopup = document.getElementById('filter-popup');
    const selectedFilters = filterPopup ? Array.from(filterPopup.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value.toLowerCase()) : [];

    let filteredJobs = jobs;

    // Apply quick filters first
    if (activeQuickFilter && activeQuickFilter !== 'all') {
        filteredJobs = filteredJobs.filter(job => {
            const location = job.location.toLowerCase();
            const category = job.category.toLowerCase();
            const experience = job.experience.toLowerCase();
            switch (activeQuickFilter) {
                case 'remote': return location === 'remote';
                case 'wfh': return location === 'remote';
                case 'female': return category.includes('female');
                case 'fresher': return experience.includes('0-1') || experience.includes('fresher');
                default: return false;
            }
        });
    }

    // Apply detailed filters from popup
    if (selectedFilters.length > 0) {
        filteredJobs = filteredJobs.filter(job => 
            selectedFilters.some(filter => {
                const location = job.location.toLowerCase();
                const type = job.type.toLowerCase();
                const category = job.category.toLowerCase();
                const experience = job.experience.toLowerCase();

                switch (filter) {
                    case 'remote':
                    case 'wfh':
                        return location === 'remote';
                    case 'part-time': return type === 'part-time';
                    case 'fresher': return experience.includes('0-1') || experience.includes('fresher');
                    case 'internship': return type === 'internship';
                    case 'experienced': return !experience.includes('0-1') && !experience.includes('fresher');
                    case 'female': return category.includes('female');
                    case 'diversity': return category.includes('female'); // Assuming diversity means female for now
                    default: return false;
                }
            })
        );
    }
    
    // Apply sorting
    return sortJobs(filteredJobs);
}

function generateJobCardHTML(job) {
    // MODIFIED: Save button is moved to the bottom row
    return `
        <div class="job-card flex flex-col p-2.5 md:p-4">
            ${job.category === 'premium' ? '<div class="corner-tag premium"><i class="fas fa-star text-yellow-300"></i> Premium</div>' : ''}
            ${job.category === 'female' ? '<div class="corner-tag female"><i class="fas fa-venus"></i> For Women</div>' : ''}
            
            <div class="flex-grow">
                <div class="flex items-start gap-3">
                    <img src="${job.logo}" alt="${job.company} Logo" class="company-logo w-9 h-9 md:w-12 md:h-12 rounded-lg">
                    <div class="flex-grow">
                        <h3 class="text-sm md:text-base font-bold text-slate-800 dark:text-slate-100">${job.title}</h3>
                        <p class="text-xs md:text-sm font-medium text-cyan-600 dark:text-cyan-400">${job.company}</p>
                    </div>
                </div>
                
                <div class="mt-2.5 md:mt-3 flex flex-wrap gap-1.5 md:gap-2">
                    <span class="detail-pill"><i class="fas fa-map-marker-alt"></i>${job.location}</span>
                    <span class="detail-pill"><i class="fas fa-dollar-sign"></i>${job.salary}</span>
                    <span class="detail-pill"><i class="fas fa-briefcase"></i>${job.experience}</span>
                </div>
            </div>

            <div class="mt-2.5 md:mt-4 pt-2.5 md:pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center gap-2">
                
                <button class="action-btn secondary flex-shrink-0 w-8 h-8 md:w-9 md:h-9 p-0 flex items-center justify-center info-btn" data-job-id="${job.id}" title="More Info">
                    <i class="fas fa-info-circle"></i>
                </button>
                <button class="action-btn secondary flex-shrink-0 w-8 h-8 md:w-9 md:h-9 p-0 flex items-center justify-center" title="Share Job">
                    <i class="fas fa-share-alt"></i>
                </button>
                <button class="action-btn secondary flex-shrink-0 w-8 h-8 md:w-9 md:h-9 p-0 flex items-center justify-center" title="Save Job">
                    <i class="far fa-bookmark"></i>
                </button>
                <button class="action-btn apply-border flex-grow text-center">
                    <i class="fas fa-paper-plane mr-1.5"></i> Apply Now
                </button>
            </div>
        </div>
    `;
}

function getMockJobs(count = 6, startId = 1) {
    const allJobs = [
        { id: 1, title: "Lead Software Engineer", company: "Tech Solutions Inc.", location: "Gurgaon", salary: "₹25-35 LPA", experience: "5+ Years", type: "Full-time", logo: "https://placehold.co/48x48/E0E0E0/888888?text=TSI", category: "premium" },
        { id: 2, title: "Senior Product Manager", company: "Innovate Ltd.", location: "Remote", salary: "₹20-30 LPA", experience: "3+ Years", type: "Full-time", logo: "https://placehold.co/48x48/D0E0D0/666666?text=IL", category: "female" },
        { id: 3, title: "UX Designer (Part-time)", company: "Creative Agency", location: "Bangalore", salary: "₹8-12 LPA", experience: "2+ Years", type: "Part-time", logo: "https://placehold.co/48x48/E8D0F0/9977AA?text=CA", category: "design" },
        { id: 4, title: "Digital Marketing Specialist", company: "Global Brands", location: "Pune", salary: "₹6-9 LPA", experience: "1+ Years", type: "Full-time", logo: "https://placehold.co/48x48/F0F0D0/AAAA66?text=GB", category: "marketing" },
        { id: 5, title: "Data Analyst (Fresher)", company: "Analytics Corp.", location: "Noida", salary: "₹5-8 LPA", experience: "0-1 Year", type: "Full-time", logo: "https://placehold.co/48x48/D0F0F0/66AAAA?text=AC", category: "analytics" },
        { id: 6, title: "Customer Support Executive", company: "Service Hub", location: "Remote", salary: "₹3-5 LPA", experience: "Fresher", type: "Full-time", logo: "https://placehold.co/48x48/F0E8D0/AA9966?text=SH", category: "fresher" },
        { id: 7, title: "DevOps Engineer", company: "Cloud Innovators", location: "Gurgaon", salary: "₹18-26 LPA", experience: "4+ Years", type: "Full-time", logo: "https://placehold.co/48x48/E0F0E0/88AA88?text=CI", category: "premium" },
        { id: 8, title: "Graphic Designer", company: "Design Studio Pro", location: "Remote", salary: "₹5-9 LPA", experience: "2+ Years", type: "Part-time", logo: "https://placehold.co/48x48/F8D8E8/AA88AA?text=DSP", category: "design" },
        { id: 9, title: "HR Intern (Female)", company: "PeopleFirst HR", location: "Mumbai", salary: "₹15k/month", experience: "Internship", type: "Internship", logo: "https://placehold.co/48x48/F0D8D8/AA8888?text=PF", category: "female" },
        { id: 10, title: "Backend Developer (Go)", company: "ScaleFast", location: "Bangalore", salary: "₹15-25 LPA", experience: "2+ Years", type: "Full-time", logo: "https://placehold.co/48x48/D8E8F8/88AAAA?text=SF", category: "engineering" }
    ];
    return allJobs.filter(job => job.id >= startId).slice(0, count);
}