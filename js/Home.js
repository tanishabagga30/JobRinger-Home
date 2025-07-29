// Featured Employers Auto-Scroll
const employerScroll = document.getElementById('employerScroll');
let employerScrollAmount = 0;
const employerScrollSpeed = 0.5;
let employerAutoScroll;

function startEmployerAutoScroll() {
    employerAutoScroll = setInterval(() => {
        employerScrollAmount += employerScrollSpeed;
        if (employerScrollAmount >= employerScroll.scrollWidth - employerScroll.clientWidth) {
            employerScrollAmount = 0;
        }
        employerScroll.scrollLeft = employerScrollAmount;
    }, 30);
}

function stopEmployerAutoScroll() {
    clearInterval(employerAutoScroll);
}

if(employerScroll!=null){
    employerScroll.addEventListener('mouseenter', stopEmployerAutoScroll);
    employerScroll.addEventListener('mouseleave', startEmployerAutoScroll);
    startEmployerAutoScroll();
}

///////////////////////////////////////////////

async function loadEmployerSlider() {
    const container = document.getElementById('employerScroll');
    if (!container) {
        console.warn("Element with ID 'employerScroll' not found in the DOM.");
        return;
    }

    try {
        // Using fetch API for AJAX call
        const response = await fetch('https://jobringer.com/api/featured_employers_api.php', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Add authentication headers if needed
                // 'Authorization': 'Bearer ' + token
            }
        });

        // Check if response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse JSON response
        const employersData = await response.json();
        
        // Validate that we received an array
        if (!Array.isArray(employersData)) {
            throw new Error('Invalid response format: expected array');
        }

        // Transform data if needed to match expected structure
        const employer = employersData.map(emp => ({
            id: emp.id,
            company_name: emp.company_name,
            company_logo: emp.company_logo || `https://placehold.co/60x60/E0E0E0/888888?text=${emp.company_name?.substring(0, 2).toUpperCase() || 'JB'}`,
            company_details: emp.company_details,
            company_unique_no: emp.company_unique_no
        }));
        console.log(employer);
        
        container.innerHTML = employer.map(emp => `
        <a href="${emp.company_details}" target="_blank">
            <div class="card p-3 rounded-lg shadow-md h-20 w-20 flex-shrink-0">
                <img src="${emp.company_logo}" alt="${emp.company_name}" class="max-w-full max-h-full rounded-md">
            </div>
        </a>
    `).join('');
        
    } catch (error) {
        console.error("Error loading jobs:", error);
        showErrorState();
    }
}

///////////////////////////////////////////////

// NEW JAVASCRIPT FOR JOB CARD SLIDER
const jobCardWrapper = document.getElementById('jobCardWrapper');
const jobPrevBtn = document.getElementById('jobPrevBtn');
const jobNextBtn = document.getElementById('jobNextBtn');

if (jobCardWrapper && jobPrevBtn && jobNextBtn) {
    let jobCardCurrentSlide = 0;
    const jobCards = jobCardWrapper.children;
    // The number of cards visible depends on CSS media queries.
    // We'll calculate the scroll distance dynamically based on the first card's width.

    function showJobCards() {
        if (jobCards.length === 0) return; // Prevent error if no cards
        // Get the width of a single job card, including its margin-right.
        // This is crucial for correct sliding, especially with varying card widths from media queries.
        const firstCard = jobCards[0];
        const cardComputedStyle = window.getComputedStyle(firstCard);
        const cardWidth = firstCard.offsetWidth + parseFloat(cardComputedStyle.marginRight);

        jobCardWrapper.style.transform = `translateX(-${jobCardCurrentSlide * cardWidth}px)`;
    }

    jobNextBtn.addEventListener('click', () => {
        const cardsPerView = Math.floor(jobCardWrapper.clientWidth / jobCards[0].offsetWidth); // Dynamically determine cards per view
        if (jobCardCurrentSlide < jobCards.length - cardsPerView) {
            jobCardCurrentSlide++;
        } else {
            jobCardCurrentSlide = 0; // Loop back to the beginning
        }
        showJobCards();
    });

    jobPrevBtn.addEventListener('click', () => {
        const cardsPerView = Math.floor(jobCardWrapper.clientWidth / jobCards[0].offsetWidth); // Dynamically determine cards per view
        if (jobCardCurrentSlide > 0) {
            jobCardCurrentSlide--;
        } else {
            jobCardCurrentSlide = Math.max(0, jobCards.length - cardsPerView); // Loop to the end, ensuring it doesn't go negative
        }
        showJobCards();
    });

    // Initialize the slider position
    showJobCards();
    // Recalculate and show cards on window resize to adjust for responsive changes
    window.addEventListener('resize', showJobCards);
    
    // Optional: Auto-slide for job cards
    let jobCardAutoSlide = setInterval(() => {
        jobNextBtn.click(); // Programmatically click next button
    }, 3000); // Change slide every 3 seconds

    // Pause auto-slide on hover
    jobCardWrapper.addEventListener('mouseenter', () => clearInterval(jobCardAutoSlide));
    jobCardWrapper.addEventListener('mouseleave', () => {
        jobCardAutoSlide = setInterval(() => {
            jobNextBtn.click();
        }, 3000);
    });
}


async function loadJobs() {
    const container = document.getElementById('jobCardWrapper');
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
        // Using fetch API for AJAX call
        const response = await fetch('https://jobringer.com/api/job_list_api.php', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Add authentication headers if needed
                // 'Authorization': 'Bearer ' + token
            }
        });

        // Check if response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse JSON response
        const jobsData = await response.json();
        
        // Validate that we received an array
        if (!Array.isArray(jobsData)) {
            throw new Error('Invalid response format: expected array');
        }

        // Transform data if needed to match expected structure
        const jobs = jobsData.map(job => ({
            id: job.id,
            title: job.title,
            company: job.company,
            location: job.location,
            salary: job.salary,
            experience: job.experience,
            type: job.work_mode, // Based on your PHP API
            employment_type: job.employment_type,
            logo: job.logo || `https://placehold.co/60x60/E0E0E0/888888?text=${job.company?.substring(0, 2).toUpperCase() || 'JB'}`
        }));
        console.log(jobs);
        
        renderJobs(jobs);
        
    } catch (error) {
        console.error("Error loading jobs:", error);
        showErrorState();
    }
}

function renderJobs(jobs) {
    const container = document.getElementById('jobCardWrapper');
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
                    <p class="text-cyan-600 text-xs dark:text-cyan-400">${job.company}</p>
                </div>
                <button class="bookmark-btn text-gray-500 hover:text-yellow-400 dark:text-gray-300 dark:hover:text-yellow-400">
                    <i class="far fa-bookmark text-base"></i>
                </button>
            </div>
            <div class="mt-2 flex flex-wrap gap-2 text-[10px] text-gray-600 dark:text-gray-300">
                <span class="detail-item"><i class="fas fa-map-marker-alt mr-1"></i>${job.location}</span>
                <span class="detail-item"><i class="fas fa-dollar-sign mr-1"></i>${job.salary}</span>
                <span class="detail-item"><i class="fas fa-briefcase mr-1"></i>${job.experience}</span>
            </div>
            <div class="mt-2 pt-2 border-t grid grid-cols-3 gap-1 text-[11px] text-gray-600 dark:text-gray-300 text-center">
                <button class="action-btn info-btn py-1 w-full bg-gray-100 rounded hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 flex justify-center items-center gap-1" data-job-id="${job.id}"><i class="fas fa-info-circle"></i> Info</button>
                <button class="action-btn py-1 w-full bg-gray-100 rounded hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 flex justify-center items-center gap-1"><i class="fas fa-share-alt"></i> Share</button>
                <button class="action-btn py-1 w-full bg-cyan-600 text-white rounded hover:bg-cyan-600 dark:bg-cyan-700 dark:hover:bg-yellow-600 flex justify-center items-center gap-1"><i class="fas fa-paper-plane"></i> Apply</button>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', function () {
    loadJobs();
    loadEmployerSlider();
});