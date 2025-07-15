tailwind.config = {
    darkMode: 'class'
}

function initComponents() {
    console.log("Jobs page initialized");

    setActiveNavItem();
    loadJobs();

    document.addEventListener('click', function (event) {
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

    document.querySelectorAll('.quick-search-btn').forEach(button => {
        button.addEventListener('click', function () {
            document.querySelectorAll('.quick-search-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            console.log(`Filter by: ${this.textContent}`);
            loadJobs();
        });
    });

    const openFilterBtn = document.getElementById('open-filter');
    const closeFilterBtn = document.getElementById('close-filter');
    const filterPopup = document.getElementById('filter-popup');
    const applyFilterBtn = filterPopup?.querySelector('button.bg-indigo-600');

    if (openFilterBtn && filterPopup) {
        openFilterBtn.addEventListener('click', () => {
            filterPopup.classList.toggle('hidden');
        });
    }

    if (closeFilterBtn && filterPopup) {
        closeFilterBtn.addEventListener('click', () => {
            filterPopup.classList.add('hidden');
        });
    }

    if (applyFilterBtn) {
        applyFilterBtn.addEventListener('click', () => {
            filterPopup.classList.add('hidden');
            loadJobs();
        });
    }
}

function setActiveNavItem() {
    const navItems = document.querySelectorAll('#nav-placeholder nav a');
    navItems.forEach(item => {
        item.classList.remove('text-indigo-600');
        if (item.href.includes('jobPage.html')) {
            item.classList.add('text-indigo-600');
        }
    });
}

async function loadJobs() {
    const container = document.getElementById('jobs-container');
    if (!container) {
        console.warn("Element with ID 'jobs-container' not found in the DOM.");
        return;
    }
    container.innerHTML = `
        <div class="text-center py-10">
            <i class="fas fa-spinner fa-spin text-2xl text-gray-400"></i>
            <p class="mt-2 text-gray-500">Loading jobs...</p>
        </div>
    `;

    try {
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
                logo: "https://placehold.co/40x40/E0E0E0/888888?text=TSI",
                category: "premium",
                description: "Develop and maintain scalable web applications using modern frameworks.",
                responsibilities: ["Design and implement new features", "Optimize application performance", "Collaborate with cross-functional teams"],
                qualifications: ["Bachelor's in Computer Science", "5+ years of software development experience", "Proficiency in JavaScript and React"]
            },
            {
                id: 2,
                title: "Product Manager",
                company: "Innovate Ltd.",
                location: "Remote",
                salary: "$100k - $130k",
                experience: "3+ Years",
                type: "Full-time",
                logo: "https://placehold.co/40x40/D0E0D0/666666?text=IL",
                category: "female",
                description: "Lead product development from ideation to launch, ensuring alignment with business goals.",
                responsibilities: ["Define product roadmaps", "Work with engineering and design teams", "Analyze market trends"],
                qualifications: ["Bachelor's in Business or related field", "3+ years in product management", "Strong analytical skills"]
            },
            {
                id: 3,
                title: "UX Designer",
                company: "Creative Agency",
                location: "Bangalore",
                salary: "$70k - $90k",
                experience: "2+ Years",
                type: "Part-time",
                logo: "https://placehold.co/40x40/E8D0F0/9977AA?text=CA",
                category: "design",
                description: "Create user-centered designs for web and mobile applications.",
                responsibilities: ["Conduct user research", "Design wireframes and prototypes", "Collaborate with developers"],
                qualifications: ["Degree in Design or related field", "2+ years in UX/UI design", "Proficiency in Figma or Sketch"]
            },
            {
                id: 4,
                title: "Marketing Specialist",
                company: "Global Brands",
                location: "Pune",
                salary: "$60k - $80k",
                experience: "1+ Years",
                type: "Full-time",
                logo: "https://placehold.co/40x40/F0F0D0/AAAA66?text=GB",
                category: "marketing",
                description: "Develop and execute marketing campaigns to drive brand awareness.",
                responsibilities: ["Plan social media campaigns", "Analyze campaign performance", "Coordinate with sales team"],
                qualifications: ["Bachelor's in Marketing", "1+ years in marketing", "Knowledge of SEO and analytics"]
            },
            {
                id: 5,
                title: "Data Analyst",
                company: "Analytics Corp.",
                location: "Noida",
                salary: "$85k - $110k",
                experience: "2+ Years",
                type: "Full-time",
                logo: "https://placehold.co/40x40/D0F0F0/66AAAA?text=AC",
                category: "analytics",
                description: "Analyze data to provide actionable insights for business decisions.",
                responsibilities: ["Create data visualizations", "Perform statistical analysis", "Present findings to stakeholders"],
                qualifications: ["Degree in Statistics or related field", "2+ years in data analysis", "Proficiency in Python or R"]
            },
            {
                id: 6,
                title: "Customer Support Rep",
                company: "Service Hub",
                location: "Remote",
                salary: "$40k - $55k",
                experience: "0-1 Year",
                type: "Full-time",
                logo: "https://placehold.co/40x40/F0E8D0/AA9966?text=SH",
                category: "fresher",
                description: "Provide excellent customer support via phone, email, and chat.",
                responsibilities: ["Resolve customer queries", "Document support cases", "Escalate complex issues"],
                qualifications: ["High school diploma or equivalent", "0-1 year in customer service", "Strong communication skills"]
            }
        ];

        const activeQuickFilter = document.querySelector('.quick-search-btn.active')?.textContent.toLowerCase();
        const filterPopup = document.getElementById('filter-popup');
        const selectedFilters = filterPopup ? Array.from(filterPopup.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.parentElement.textContent.trim().toLowerCase()) : [];

        let filteredJobs = mockJobs;

        if (activeQuickFilter && activeQuickFilter !== 'all') {
            filteredJobs = filteredJobs.filter(job => 
                job.location.toLowerCase() === activeQuickFilter ||
                job.type.toLowerCase() === activeQuickFilter ||
                (activeQuickFilter === 'female' && job.category.includes('female')) ||
                (activeQuickFilter === 'fresher' && job.experience.includes('0-1')) ||
                (activeQuickFilter === 'wfh' && job.location.toLowerCase() === 'remote')
            );
        }

        if (selectedFilters.length > 0) {
            filteredJobs = filteredJobs.filter(job => 
                selectedFilters.some(filter => 
                    job.location.toLowerCase() === filter ||
                    job.type.toLowerCase() === filter ||
                    (filter === 'female' && job.category.includes('female')) ||
                    (filter === 'fresher' && job.experience.includes('0-1')) ||
                    (filter === 'wfh' && job.location.toLowerCase() === 'remote') ||
                    (filter === 'internship' && job.type.toLowerCase() === 'internship') ||
                    (filter === 'part-time' && job.type.toLowerCase() === 'part-time')
                )
            );
        }

        renderJobs(filteredJobs);
    } catch (error) {
        console.error("Error loading jobs:", error);
        showErrorState();
    }
}

function renderJobs(jobs) {
    const container = document.getElementById('jobs-container');
    if (!container) {
        console.warn("Element with ID 'jobs-container' not found in the DOM.");
        return;
    }

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
        <div class="job-card p-2 rounded-md shadow text-xs ${job.category === 'female' ? 'female-job' : ''} ${job.category === 'premium' ? 'premium-job' : ''}">
            <div class="flex items-start gap-2">
                <img src="${job.logo}" alt="${job.company} Logo" class="company-logo rounded-md w-10 h-10">
                <div class="flex-grow">
                    <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-100">${job.title}</h3>
                    <p class="text-indigo-600 text-xs dark:text-indigo-400">${job.company}</p>
                    <div class="mt-1 flex flex-wrap gap-2 text-[10px] text-gray-600 dark:text-gray-300">
                        <span class="detail-item"><i class="fas fa-map-marker-alt mr-1"></i>${job.location}</span>
                        <span class="detail-item"><i class="fas fa-dollar-sign mr-1"></i>${job.salary}</span>
                        <span class="detail-item"><i class="fas fa-briefcase mr-1"></i>${job.experience}</span>
                    </div>
                </div>
                <button class="bookmark-btn text-gray-500 hover:text-yellow-400 dark:text-gray-300 dark:hover:text-yellow-400">
                    <i class="far fa-bookmark text-base"></i>
                </button>
            </div>
            <div class="mt-2 pt-2 border-t grid grid-cols-3 gap-1 text-[11px] text-gray-600 dark:text-gray-300 text-center">
                <button class="action-btn info-btn py-1 w-full bg-gray-100 rounded hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 flex justify-center items-center gap-1" data-job-id="${job.id}"><i class="fas fa-info-circle"></i> Info</button>
                <button class="action-btn py-1 w-full bg-gray-100 rounded hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 flex justify-center items-center gap-1"><i class="fas fa-share-alt"></i> Share</button>
                <button class="action-btn py-1 w-full bg-indigo-600 text-white rounded hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 flex justify-center items-center gap-1"><i class="fas fa-paper-plane"></i> Apply</button>
            </div>
        </div>
    `).join('');
}

function showErrorState() {
    const container = document.getElementById('jobs-container');
    if (!container) {
        console.warn("Element with ID 'jobs-container' not found in the DOM.");
        return;
    }
    container.innerHTML = `
        <div class="bg-red-50 p-4 rounded-lg text-red-600 dark:bg-red-900 dark:text-red-300">
            <i class="fas fa-exclamation-circle mr-2"></i>
            Failed to load jobs. Please try again later.
        </div>
    `;
}

function loadMoreJobs() {
    console.log("Loading more jobs...");
    const container = document.getElementById('jobs-container');
    if (!container) {
        console.warn("Element with ID 'jobs-container' not found in the DOM.");
        return;
    }
    container.insertAdjacentHTML('beforeend', `
        <div class="text-center py-10">
            <i class="fas fa-spinner fa-spin text-2xl text-gray-400"></i>
            <p class="mt-2 text-gray-500">Loading more...</p>
        </div>
    `);

    setTimeout(() => {
        const moreMockJobs = [
            {
                id: 7,
                title: "DevOps Engineer",
                company: "Cloud Innovators",
                location: "Gurgaon",
                salary: "$130k - $160k",
                experience: "4+ Years",
                type: "Full-time",
                logo: "https://placehold.co/40x40/E0F0E0/88AA88?text=CI",
                category: "premium",
                description: "Manage cloud infrastructure and CI/CD pipelines for scalable applications.",
                responsibilities: ["Deploy and monitor cloud services", "Automate infrastructure provisioning", "Ensure system reliability"],
                qualifications: ["Bachelor's in Computer Science", "4+ years in DevOps", "Expertise in AWS and Docker"]
            },
            {
                id: 8,
                title: "Graphic Designer",
                company: "Design Studio Pro",
                location: "Remote",
                salary: "$50k - $75k",
                experience: "2+ Years",
                type: "Part-time",
                logo: "https://placehold.co/40x40/F8D8E8/AA88AA?text=DSP",
                category: "design",
                description: "Design visually appealing graphics for digital and print media.",
                responsibilities: ["Create marketing collateral", "Collaborate with creative team", "Maintain brand consistency"],
                qualifications: ["Degree in Graphic Design", "2+ years in design", "Proficiency in Adobe Creative Suite"]
            }
        ];

        const activeQuickFilter = document.querySelector('.quick-search-btn.active')?.textContent.toLowerCase();
        const filterPopup = document.getElementById('filter-popup');
        const selectedFilters = filterPopup ? Array.from(filterPopup.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.parentElement.textContent.trim().toLowerCase()) : [];

        let filteredJobs = moreMockJobs;

        if (activeQuickFilter && activeQuickFilter !== 'all') {
            filteredJobs = filteredJobs.filter(job => 
                job.location.toLowerCase() === activeQuickFilter ||
                job.type.toLowerCase() === activeQuickFilter ||
                (activeQuickFilter === 'female' && job.category.includes('female')) ||
                (activeQuickFilter === 'fresher' && job.experience.includes('0-1')) ||
                (activeQuickFilter === 'wfh' && job.location.toLowerCase() === 'remote')
            );
        }

        if (selectedFilters.length > 0) {
            filteredJobs = filteredJobs.filter(job => 
                selectedFilters.some(filter => 
                    job.location.toLowerCase() === filter ||
                    job.type.toLowerCase() === filter ||
                    (filter === 'female' && job.category.includes('female')) ||
                    (filter === 'fresher' && job.experience.includes('0-1')) ||
                    (filter === 'wfh' && job.location.toLowerCase() === 'remote') ||
                    (filter === 'internship' && job.type.toLowerCase() === 'internship') ||
                    (filter === 'part-time' && job.type.toLowerCase() === 'part-time')
                )
            );
        }

        const newHtml = filteredJobs.map(job => `
            <div class="job-card p-2 rounded-md shadow text-xs ${job.category === 'female' ? 'female-job' : ''} ${job.category === 'premium' ? 'premium-job' : ''}">
                <div class="flex items-start gap-2">
                    <img src="${job.logo}" alt="${job.company} Logo" class="company-logo rounded-md w-10 h-10">
                    <div class="flex-grow">
                        <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-100">${job.title}</h3>
                        <p class="text-indigo-600 text-xs dark:text-indigo-400">${job.company}</p>
                        <div class="mt-1 flex flex-wrap gap-2 text-[10px] text-gray-600 dark:text-gray-300">
                            <span class="detail-item"><i class="fas fa-map-marker-alt mr-1"></i>${job.location}</span>
                            <span class="detail-item"><i class="fas fa-dollar-sign mr-1"></i>${job.salary}</span>
                            <span class="detail-item"><i class="fas fa-briefcase mr-1"></i>${job.experience}</span>
                        </div>
                    </div>
                    <button class="bookmark-btn text-gray-500 hover:text-yellow-400 dark:text-gray-300 dark:hover:text-yellow-400">
                        <i class="far fa-bookmark text-base"></i>
                    </button>
                </div>
                <div class="mt-2 pt-2 border-t grid grid-cols-3 gap-1 text-[11px] text-gray-600 dark:text-gray-300 text-center">
                    <button class="action-btn info-btn py-1 w-full bg-gray-100 rounded hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 flex justify-center items-center gap-1" data-job-id="${job.id}"><i class="fas fa-info-circle"></i> Info</button>
                    <button class="action-btn py-1 w-full bg-gray-100 rounded hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 flex justify-center items-center gap-1"><i class="fas fa-share-alt"></i> Share</button>
                    <button class="action-btn py-1 w-full bg-indigo-600 text-white rounded hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 flex justify-center items-center gap-1"><i class="fas fa-paper-plane"></i> Apply</button>
                </div>
            </div>
        `).join('');

        container.querySelector('.text-center')?.remove();
        container.insertAdjacentHTML('beforeend', newHtml);
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function () {
    initComponents();
});