tailwind.config = {
    darkMode: 'class'
}

function initComponents() {
    console.log("Jobs page initialized");
    
    // Set active nav item
    setActiveNavItem();
    
    // Load initial jobs
    loadJobs();
    
    // Set up event listeners
    document.getElementById('load-more-btn').addEventListener('click', loadMoreJobs);

    // Event listener for quick filter buttons
    document.querySelectorAll('.quick-filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.quick-filter-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            // In a real application, you'd trigger a job search/filter here
            console.log(`Filter by: ${this.textContent}`);
            loadJobs(); // Reload jobs based on filter
        });
    });
}

function setActiveNavItem() {
    const navItems = document.querySelectorAll('#nav-placeholder nav a');
    navItems.forEach(item => {
        item.classList.remove('text-indigo-600');
        // Check if the current URL contains 'Jobs/index.html' or 'Jobs/'
        if (item.href.includes('Jobs/index.html') || item.href.endsWith('Jobs/')) {
            item.classList.add('text-indigo-600');
        }
    });
}

async function loadJobs() {
    const container = document.getElementById('jobs-container');
    container.innerHTML = `
        <div class="text-center py-10">
            <i class="fas fa-spinner fa-spin text-2xl text-gray-400"></i>
            <p class="mt-2 text-gray-500">Loading jobs...</p>
        </div>
    `;

    try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500)); 

        const mockJobs = [
            {
                id: 1,
                title: "Software Engineer",
                company: "Tech Solutions Inc.",
                location: "Gurgaon",
                salary: "$120k - $150k",
                experience: "5+ Years",
                type: "Full-time",
                logo: "https://placehold.co/60x60/E0E0E0/888888?text=TSI"
            },
            {
                id: 2,
                title: "Product Manager",
                company: "Innovate Ltd.",
                location: "Remote",
                salary: "$100k - $130k",
                experience: "3+ Years",
                type: "Full-time",
                logo: "https://placehold.co/60x60/D0E0D0/666666?text=IL"
            },
            {
                id: 3,
                title: "UX Designer",
                company: "Creative Agency",
                location: "Banglore",
                salary: "$70k - $90k",
                experience: "2+ Years",
                type: "Part-time",
                logo: "https://placehold.co/60x60/E8D0F0/9977AA?text=CA"
            },
            {
                id: 4,
                title: "Marketing Specialist",
                company: "Global Brands",
                location: "Pune",
                salary: "$60k - $80k",
                experience: "1+ Years",
                type: "Full-time",
                logo: "https://placehold.co/60x60/F0F0D0/AAAA66?text=GB"
            },
            {
                id: 5,
                title: "Data Analyst",
                company: "Analytics Corp.",
                location: "Noida",
                salary: "$85k - $110k",
                experience: "2+ Years",
                type: "Full-time",
                logo: "https://placehold.co/60x60/D0F0F0/66AAAA?text=AC"
            },
            {
                id: 6,
                title: "Customer Support Rep",
                company: "Service Hub",
                location: "Remote",
                salary: "$40k - $55k",
                experience: "0-1 Year",
                type: "Full-time",
                logo: "https://placehold.co/60x60/F0E8D0/AA9966?text=SH"
            }
        ];
        
        renderJobs(mockJobs);
    } catch (error) {
        console.error("Error loading jobs:", error);
        showErrorState();
    }
}

function renderJobs(jobs) {
    const container = document.getElementById('jobs-container');
    
    if (jobs.length === 0) {
        container.innerHTML = `
            <div class="text-center py-10">
                <i class="far fa-folder-open text-3xl text-gray-400"></i>
                <p class="mt-2 text-gray-500">No jobs found matching your criteria</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = jobs.map(job => `
        <div class="job-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800 dark:hover:shadow-xl">
            <div class="flex items-start gap-4">
                <img src="${job.logo}" alt="${job.company} Logo" class="company-logo w-16 h-16 rounded-md object-cover flex-shrink-0">
                <div class="flex-grow">
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">${job.title}</h3>
                    <p class="text-indigo-600 font-medium dark:text-indigo-400">${job.company}</p>
                    <div class="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600 dark:text-gray-300 job-details">
                        <span class="flex items-center detail-item"><i class="fas fa-map-marker-alt mr-1.5"></i> ${job.location}</span>
                        <span class="flex items-center detail-item"><i class="fas fa-dollar-sign mr-1.5"></i> ${job.salary}</span>
                        <span class="flex items-center detail-item"><i class="fas fa-briefcase mr-1.5"></i> ${job.experience}</span>
                        <span class="flex items-center detail-item"><i class="fas fa-clock mr-1.5"></i> ${job.type}</span>
                    </div>
                </div>
                <button class="bookmark-btn text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors">
                    <i class="far fa-bookmark text-xl"></i>
                </button>
            </div>
            
            <div class="job-actions mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <div class="flex gap-4">
                    <button class="action-btn text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center">
                        <i class="fas fa-share-alt mr-1.5"></i> Share
                    </button>
                    <button class="action-btn text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center">
                        <i class="fas fa-info-circle mr-1.5"></i> Details
                    </button>
                </div>
                <button class="apply-btn bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors text-sm dark:bg-indigo-500 dark:hover:bg-indigo-600">
                    <i class="fas fa-paper-plane mr-1.5"></i> Apply Now
                </button>
            </div>
        </div>
    `).join('');
}

function showErrorState() {
    const container = document.getElementById('jobs-container');
    container.innerHTML = `
        <div class="bg-red-50 p-4 rounded-lg text-red-600 dark:bg-red-900 dark:text-red-300">
            <i class="fas fa-exclamation-circle mr-2"></i>
            Failed to load jobs. Please try again later.
        </div>
    `;
}

function loadMoreJobs() {
    // Implement pagination logic here. 
    // You would typically fetch more jobs from an API and append them to the existing list.
    console.log("Loading more jobs...");
    // For demonstration, we'll just reload the existing mock jobs after a delay
    const container = document.getElementById('jobs-container');
    container.insertAdjacentHTML('beforeend', `
        <div class="text-center py-10">
            <i class="fas fa-spinner fa-spin text-2xl text-gray-400"></i>
            <p class="mt-2 text-gray-500">Loading more...</p>
        </div>
    `);
    setTimeout(() => {
        // In a real app, you'd append new jobs, not replace them
        // For this mock, we'll just re-render to simulate new jobs appearing
        const moreMockJobs = [
            {
                id: 7,
                title: "DevOps Engineer",
                company: "Cloud Innovators",
                location: "Gurgoan",
                salary: "$130k - $160k",
                experience: "4+ Years",
                type: "Full-time",
                logo: "https://placehold.co/60x60/E0F0E0/88AA88?text=CI"
            },
            {
                id: 8,
                title: "Graphic Designer",
                company: "Design Studio Pro",
                location: "Remote",
                salary: "$50k - $75k",
                experience: "2+ Years",
                type: "Part-time",
                logo: "https://placehold.co/60x60/F8D8E8/AA88AA?text=DSP"
            }
        ];
        // To truly "load more", you'd get the current HTML and append new job cards
        const currentJobsHtml = container.innerHTML; // Get existing jobs
        container.innerHTML = currentJobsHtml.replace(/<div class="text-center py-10">.*?<\/div>/s, '') + moreMockJobs.map(job => `
            <div class="job-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800 dark:hover:shadow-xl">
                <div class="flex items-start gap-4">
                    <img src="${job.logo}" alt="${job.company} Logo" class="company-logo w-16 h-16 rounded-md object-cover flex-shrink-0">
                    <div class="flex-grow">
                        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">${job.title}</h3>
                        <p class="text-indigo-600 font-medium dark:text-indigo-400">${job.company}</p>
                        <div class="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600 dark:text-gray-300 job-details">
                            <span class="flex items-center detail-item"><i class="fas fa-map-marker-alt mr-1.5"></i> ${job.location}</span>
                            <span class="flex items-center detail-item"><i class="fas fa-dollar-sign mr-1.5"></i> ${job.salary}</span>
                            <span class="flex items-center detail-item"><i class="fas fa-briefcase mr-1.5"></i> ${job.experience}</span>
                            <span class="flex items-center detail-item"><i class="fas fa-clock mr-1.5"></i> ${job.type}</span>
                        </div>
                    </div>
                    <button class="bookmark-btn text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors">
                        <i class="far fa-bookmark text-xl"></i>
                    </button>
                </div>
                
                <div class="job-actions mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    <div class="flex gap-4">
                        <button class="action-btn text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center">
                            <i class="fas fa-share-alt mr-1.5"></i> Share
                        </button>
                        <button class="action-btn text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center">
                            <i class="fas fa-info-circle mr-1.5"></i> Details
                        </button>
                    </div>
                    <button class="apply-btn bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors text-sm dark:bg-indigo-500 dark:hover:bg-indigo-600">
                        <i class="fas fa-paper-plane mr-1.5"></i> Apply Now
                    </button>
                </div>
            </div>
        `).join('');
    }, 1000);
}