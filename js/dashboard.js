document.addEventListener('DOMContentLoaded', () => {
    const applicationList = document.getElementById('application-list');
    const recommendedJobCardWrapper = document.getElementById('recommendedJobCardWrapper');
    const savedJobCardWrapper = document.getElementById('savedJobCardWrapper'); // Correct ID for the new wrapper

    // Navigation slider functionality
    const mainNavSlider = document.getElementById('main-nav-slider');
    if (mainNavSlider) {
        mainNavSlider.addEventListener('click', (e) => {
            const target = e.target.closest('.nav-slider-item');
            if (target) {
                e.preventDefault();
                document.querySelectorAll('.nav-slider-item').forEach(item => {
                    item.classList.remove('active');
                });
                target.classList.add('active');
                const selectedPage = target.getAttribute('data-page');
                console.log(`Navigating to ${selectedPage} page...`);
            }
        });
    }
    
    // --- Hardcoded Data ---
    const recommendedJobsData = [
        { id: 'rec-1', logo: 'https://ui-avatars.com/api/?name=Google&background=2563eb&color=fff', company: 'Google', title: 'Frontend Developer', location: 'Bengaluru, India', salary: 'Not Disclosed', work_mode: 'Hybrid', posted: '20+ day(s) ago' },
        { id: 'rec-2', logo: 'https://ui-avatars.com/api/?name=Microsoft&background=1e40af&color=fff', company: 'Microsoft', title: 'Backend Developer', location: 'Mumbai, India', salary: 'Not Disclosed', work_mode: 'Remote', posted: '15 day(s) ago' },
        { id: 'rec-3', logo: 'https://ui-avatars.com/api/?name=Infosys&background=4b5563&color=fff', company: 'Infosys', title: 'Data Analyst', location: 'Hyderabad, India', salary: 'Not Disclosed', work_mode: 'Full Time', posted: '10 day(s) ago' },
        { id: 'rec-4', logo: 'https://ui-avatars.com/api/?name=TCS&background=1f2937&color=fff', company: 'TCS', title: 'DevOps Engineer', location: 'Pune, India', salary: 'Not Disclosed', work_mode: 'Full Time', posted: '5 day(s) ago' }
    ];

    const applicationsData = [
        { id: 'app-1', logo: 'https://ui-avatars.com/api/?name=JobRinger&background=0ea5e9&color=fff', company: 'JobRinger.com.', title: 'Frontend Developer', location: 'Mumbai, India', status: 'Shortlisted', appliedDate: '24/08/2025' },
        { id: 'app-2', logo: 'https://ui-avatars.com/api/?name=Gayatri+Projects&background=ef4444&color=fff', company: 'Gayatri Projects.', title: 'Site Engineer', location: 'Ahmedabad, India', status: 'Application Sent', appliedDate: '23/08/2025' },
        { id: 'app-3', logo: 'https://ui-avatars.com/api/?name=JobRinger&background=0ea5e9&color=fff', company: 'JobRinger.com.', title: 'Student Counselor', location: 'Bharuch, India', status: 'On Hold', appliedDate: '22/08/2025' }
    ];

    const savedJobsData = [
        { id: 'saved-1', logo: 'https://ui-avatars.com/api/?name=Pyramid+Consulting&background=facc15&color=000', company: 'Pyramid Consulting, Inc', title: 'INSIDE SALES & BUSINESS DEVELOPMENT SPECIALIST', location: 'Noida, India', salary: 'Not Disclosed', work_mode: 'Full Time', savedDate: '21/08/2025' },
        { id: 'saved-2', logo: 'https://ui-avatars.com/api/?name=Tech+Solutions&background=14b8a6&color=fff', company: 'Tech Solutions', title: 'Senior Software Engineer', location: 'Bengaluru, India', salary: 'Not Disclosed', work_mode: 'Full Time', savedDate: '20/08/2025' }
    ];
    
    // --- Card Rendering Functions ---
    const renderRecommendedJobCard = (job) => {
        const salary = job.salary || 'Not Disclosed';
        const workMode = job.work_mode || 'N/A';
        const displayLocation = job.location.split(',')[0];
        const locationTooltipHtml = job.location.split(',').length > 1 ? `<div class="location-tooltip"><ul>${job.location.split(',').map(loc => `<li>${loc.trim()}</li>`).join('')}</ul></div>` : '';

        return `
            <div class="job-card p-4 rounded-lg shadow-md text-sm">
                <div class="flex items-start gap-4">
                    <img src="${job.logo}" alt="${job.company} Logo" class="company-logo rounded-md object-contain border">
                    <div class="flex-grow overflow-hidden">
                        <h3 class="text-base font-semibold text-gray-800 dark:text-gray-100">${job.title}</h3>
                        <p class="text-sm text-cyan-600 dark:text-cyan-400">${job.company}</p>
                        <div class="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-600 dark:text-gray-300">
                            <span class="detail-item inline-flex items-center location-tooltip-container">
                                <i class="fas fa-map-marker-alt mr-1.5"></i>${displayLocation}
                                ${locationTooltipHtml}
                            </span>
                            <span class="detail-item inline-flex items-center"><i class="fas fa-dollar-sign mr-1.5"></i>${salary}</span>
                            <span class="detail-item inline-flex items-center"><i class="fas fa-briefcase mr-1.5"></i>${workMode}</span>
                        </div>
                    </div>
                    <button class="bookmark-btn text-gray-500 hover:text-yellow-400 dark:text-gray-300 dark:hover:text-yellow-400 flex-shrink-0">
                        <i class="far fa-bookmark text-xl"></i>
                    </button>
                </div>
                <div class="mt-4 pt-3 border-t grid grid-cols-3 gap-2 text-sm text-gray-700 dark:text-gray-300 text-center">
                    <button class="action-btn info-btn py-1.5 w-full bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 flex justify-center items-center gap-1.5" data-job-id="${job.id}"><i class="fas fa-info-circle"></i> Info</button>
                    <button class="action-btn py-1.5 w-full bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 flex justify-center items-center gap-1.5"><i class="fas fa-share-alt"></i> Share</button>
                    <button class="action-btn py-1.5 w-full bg-cyan-600 text-white rounded-md hover:bg-cyan-700 flex justify-center items-center gap-1.5 font-semibold"><i class="fas fa-paper-plane"></i> Apply</button>
                </div>
            </div>`;
    };

    const renderApplicationCard = (job) => {
        const statusClass = job.status.toLowerCase().includes('shortlisted') ? 'info-status-shortlisted' :
                            job.status.toLowerCase().includes('on hold') ? 'status-on-hold' :
                            'info-status-applied';
        const displayLocation = job.location.split(',')[0];
        const locationTooltipHtml = job.location.split(',').length > 1 ? `<div class="location-tooltip"><ul>${job.location.split(',').map(loc => `<li>${loc.trim()}</li>`).join('')}</ul></div>` : '';

        return `
            <div class="job-card p-4 rounded-lg shadow-md text-sm">
                <div class="flex items-start gap-4">
                    <img src="${job.logo}" alt="${job.company} Logo" class="company-logo rounded-md object-contain border">
                    <div class="flex-grow overflow-hidden">
                        <h3 class="text-base font-semibold text-gray-800 dark:text-gray-100">${job.title}</h3>
                        <p class="text-sm text-slate-500 dark:text-slate-400">${job.company}</p>
                        <div class="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-600 dark:text-gray-300">
                            <span class="detail-item inline-flex items-center location-tooltip-container">
                                <i class="fas fa-map-marker-alt mr-1.5"></i>${displayLocation}
                                ${locationTooltipHtml}
                            </span>
                        </div>
                    </div>
                    <span class="info-status ${statusClass} flex-shrink-0">${job.status}</span>
                </div>
                <div class="mt-4 pt-3 border-t text-sm text-gray-700 dark:text-gray-300">
                    <p class="flex items-center gap-1.5"><i class="far fa-calendar-alt"></i> Applied on: ${job.appliedDate}</p>
                </div>
            </div>`;
    };

    const renderSavedJobCard = (job) => {
        const salary = job.salary || 'Not Disclosed';
        const workMode = job.work_mode || 'N/A';
        const displayLocation = job.location.split(',')[0];
        const locationTooltipHtml = job.location.split(',').length > 1 ? `<div class="location-tooltip"><ul>${job.location.split(',').map(loc => `<li>${loc.trim()}</li>`).join('')}</ul></div>` : '';

        return `
            <div class="job-card p-4 rounded-lg shadow-md text-sm">
                <div class="flex items-start gap-4">
                    <img src="${job.logo}" alt="${job.company} Logo" class="company-logo rounded-md object-contain border">
                    <div class="flex-grow overflow-hidden">
                        <h3 class="text-base font-semibold text-gray-800 dark:text-gray-100">${job.title}</h3>
                        <p class="text-sm text-cyan-600 dark:text-cyan-400">${job.company}</p>
                        <div class="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-600 dark:text-gray-300">
                            <span class="detail-item inline-flex items-center location-tooltip-container">
                                <i class="fas fa-map-marker-alt mr-1.5"></i>${displayLocation}
                                ${locationTooltipHtml}
                            </span>
                            <span class="detail-item inline-flex items-center"><i class="fas fa-dollar-sign mr-1.5"></i>${salary}</span>
                            <span class="detail-item inline-flex items-center"><i class="fas fa-briefcase mr-1.5"></i>${workMode}</span>
                        </div>
                    </div>
                    <button class="bookmark-btn text-yellow-400 dark:text-yellow-400 flex-shrink-0">
                        <i class="fas fa-bookmark text-xl"></i>
                    </button>
                </div>
                <div class="mt-4 pt-3 border-t grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300 text-center">
                    <button class="action-btn info-btn py-1.5 w-full bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 flex justify-center items-center gap-1.5" data-job-id="${job.id}"><i class="fas fa-info-circle"></i> View</button>
                    <button class="action-btn py-1.5 w-full bg-cyan-600 text-white rounded-md hover:bg-cyan-700 flex justify-center items-center gap-1.5 font-semibold"><i class="fas fa-paper-plane"></i> Apply</button>
                </div>
                <div class="mt-2 text-sm text-gray-700 dark:text-gray-300 text-center">
                    <p class="flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400"><i class="far fa-calendar-alt"></i> Saved on: ${job.savedDate}</p>
                </div>
            </div>`;
    };

    const injectContent = (element, data, renderer) => {
        if (element) {
            element.innerHTML = data.map(item => renderer(item)).join('');
        }
    };
    
    // Initial content injection
    injectContent(applicationList, applicationsData.slice(0, 2), renderApplicationCard); // Show only 2 applications
    injectContent(recommendedJobCardWrapper, recommendedJobsData, renderRecommendedJobCard);
    injectContent(savedJobCardWrapper, savedJobsData, renderSavedJobCard);

    // Setup the Recommended Jobs slider
    setupRecommendedJobSlider();
    setupSavedJobSlider();

    function setupRecommendedJobSlider() {
        const wrapper = document.getElementById('recommendedJobCardWrapper');
        const prevBtn = document.getElementById('recommendedPrevBtn');
        const nextBtn = document.getElementById('recommendedNextBtn');
        if (!wrapper || !prevBtn || !nextBtn) return;
        
        const scrollStep = 300;
        nextBtn.addEventListener('click', () => {
            wrapper.scrollBy({ left: scrollStep, behavior: 'smooth' });
        });
        prevBtn.addEventListener('click', () => {
            wrapper.scrollBy({ left: -scrollStep, behavior: 'smooth' });
        });
    }

    function setupSavedJobSlider() {
        const wrapper = document.getElementById('savedJobCardWrapper');
        const prevBtn = document.getElementById('savedPrevBtn');
        const nextBtn = document.getElementById('savedNextBtn');
        if (!wrapper || !prevBtn || !nextBtn) return;
        
        const scrollStep = 300;
        nextBtn.addEventListener('click', () => {
            wrapper.scrollBy({ left: scrollStep, behavior: 'smooth' });
        });
        prevBtn.addEventListener('click', () => {
            wrapper.scrollBy({ left: -scrollStep, behavior: 'smooth' });
        });
    }

});