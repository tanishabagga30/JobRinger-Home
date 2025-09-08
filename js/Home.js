document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initializeHomepage, 100); 
});

function initializeHomepage() {
    setupViewSwitcher();
    setupDesktopBannerSlider();
    setupMobileBannerSlider();
    setupVacancySection('vacancy-section-desktop');
    setupNewVacancySystem();
    loadJobs();
    loadEmployerSlider();
}

function setupViewSwitcher() {
    const getJobBtn = document.getElementById('getJobBtn');
    const postJobBtn = document.getElementById('postJobBtn');
    const jobSeekerView = document.getElementById('job-seeker-view');
    const employerView = document.getElementById('employer-view');
    const toggleSlider = document.querySelector('.toggle-slider'); 

    if (!getJobBtn || !postJobBtn || !toggleSlider) return;

    function updateView(showSeeker) {
        jobSeekerView.classList.toggle('hidden', !showSeeker);
        employerView.classList.toggle('hidden', showSeeker);
        getJobBtn.classList.toggle('active', showSeeker);
        postJobBtn.classList.toggle('active', !showSeeker);
        if (showSeeker) {
            toggleSlider.style.width = `${getJobBtn.offsetWidth}px`;
            toggleSlider.style.transform = `translateX(0)`;
        } else {
            toggleSlider.style.width = `${postJobBtn.offsetWidth}px`;
            toggleSlider.style.transform = `translateX(${getJobBtn.offsetWidth}px)`;
        }
    }
    getJobBtn?.addEventListener('click', (e) => { e.preventDefault(); updateView(true); });
    postJobBtn?.addEventListener('click', (e) => { e.preventDefault(); updateView(false); });

    const resizeObserver = new ResizeObserver(() => {
        const isSeekerActive = getJobBtn.classList.contains('active');
        updateView(isSeekerActive);
    });
    resizeObserver.observe(document.querySelector('.toggle-switch'));

    updateView(true); 
}


// --- Logic for the Original Desktop Vacancy Section ---
const vacancyData = {
    Technology: ["Software Engineer", "Data Scientist", "DevOps", "Frontend", "Backend", "Product Manager"],
    Finance: ["Accountant", "Financial Analyst", "Auditor", "Investment Banker", "Controller"],
    Healthcare: ["Nurse", "Medical Assistant", "Physician", "Pharmacist", "Physical Therapist"],
    Education: ["Teacher", "Professor", "Counselor", "Principal", "Instructional Designer"],
    Retail: ["Store Manager", "Sales Associate", "Merchandiser", "Buyer", "Cashier"]
};

function populateDesktopVacancyOptions(optionsContainer, category) {
    if (!optionsContainer) return;
    // [FIX] Use the dedicated CSS class '.job-vacancy-option-desktop'
    const desktopVacancyOptionHTML = (vacancyData[category] || []).map(option => {
        return `<button class="job-vacancy-option-desktop">${option}</button>`
    }).join('');
    optionsContainer.innerHTML = desktopVacancyOptionHTML;
}

function setupVacancySection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    const categoriesContainer = section.querySelector('.category-pill-group');
    const optionsContainer = section.querySelector('[id^="vacancy-options-"]');
    if (!categoriesContainer || !optionsContainer) return;

    const initialCategory = categoriesContainer.querySelector('.category-pill.active')?.dataset.category;
    if (initialCategory) {
        populateDesktopVacancyOptions(optionsContainer, initialCategory);
    }

    categoriesContainer.addEventListener('click', (e) => {
        const pill = e.target.closest('.category-pill');
        if (pill) {
            categoriesContainer.querySelector('.category-pill.active')?.classList.remove('active');
            pill.classList.add('active');
            populateDesktopVacancyOptions(optionsContainer, pill.dataset.category);
        }
    });
}


// --- Logic for the New Mobile Vacancy Section ---
const newVacancyData = {
    skills: ["JavaScript", "Python", "React", "Node.js", "SQL", "Java", "AWS", "Docker", "Git"],
    location: ["Bengaluru", "Pune", "Hyderabad", "Chennai", "Mumbai", "Delhi NCR", "Remote"],
    industry: ["IT Services", "Finance", "Healthcare", "E-commerce", "Education", "Manufacturing"],
    functions: ["Engineering", "Sales", "Marketing", "HR", "Operations", "Finance"],
    roles: ["Software Dev", "Data Analyst", "Product Manager", "Sales Executive", "Designer"],
    company: ["TCS", "Infosys", "Wipro", "HCL", "Accenture", "Capgemini"]
};

function setupNewVacancySystem() {
    const categoriesContainer = document.getElementById('vacancy-categories');
    const optionsContainer = document.getElementById('vacancy-options');
    const viewAllLink = document.getElementById('view-all-link');

    if (!categoriesContainer || !optionsContainer || !viewAllLink) return;

    const populateOptions = (category) => {
        const options = newVacancyData[category] || [];
        optionsContainer.innerHTML = options.map(option => 
            `<button class="job-vacancy-option">${option}</button>`
        ).join('');
        const linkText = category.charAt(0).toUpperCase() + category.slice(1);
        viewAllLink.textContent = `View all jobs by ${linkText} >`;
        viewAllLink.href = `#jobs-by-${category}`;
    };

    categoriesContainer.addEventListener('click', (e) => {
        const button = e.target.closest('.vacancy-category-btn');
        if (!button) return;
        categoriesContainer.querySelector('.active')?.classList.remove('active');
        button.classList.add('active');
        const category = button.dataset.category;
        populateOptions(category);
    });

    populateOptions('skills');
}


// --- Functions for Job Cards, Banners, and Employers ---
async function loadJobs() {
    const container = document.getElementById('jobCardWrapper');
    if (!container) return;
    container.innerHTML = `<div class="w-full text-center py-10"><i class="fas fa-spinner fa-spin text-2xl text-cyan-500"></i></div>`;
    try {
        const response = await fetch('https://jobringer.com/api/job_list_api.php');
        if (!response.ok) throw new Error(`HTTP error`);
        const jobsData = await response.json();
        renderJobs(jobsData);
        setupJobSliderControls();
    } catch (error) {
        console.error("Error loading jobs:", error);
        container.innerHTML = `<div class="w-full text-center py-10 text-slate-500">Failed to load jobs.</div>`;
    }
}

function renderJobs(jobs) {
    const container = document.getElementById('jobCardWrapper');
    if (!container || !jobs || jobs.length === 0) return;

    container.innerHTML = jobs.map(job => {
        const salary = job.salary || 'Not Disclosed';
        const workMode = job.work_mode || 'N/A';
        let displayLocation = 'N/A';
        let locationTooltipHtml = '';

        if (typeof job.location === 'string') {
            const locations = job.location.split(',').map(loc => loc.trim()).filter(Boolean);
            if (locations.length > 0) {
                displayLocation = locations[0];
                if (locations.length > 1) {
                    displayLocation += ` +${locations.length - 1}`;
                    const fullLocationList = locations.map(loc => `<li>${loc}</li>`).join('');
                    locationTooltipHtml = `<div class="location-tooltip"><ul>${fullLocationList}</ul></div>`;
                }
            }
        }

        return `
            <div class="job-card p-4 rounded-lg shadow-md text-sm">
                <div class="flex items-start gap-4">
                    <img src="${job.logo || `https://ui-avatars.com/api/?name=${job.company?.replace(/\s/g, "+")}`}" alt="${job.company} Logo" class="company-logo rounded-md w-12 h-12 object-contain border">
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
    }).join('');
}

function setupJobSliderControls() {
    const wrapper = document.getElementById('jobCardWrapper'); const prevBtn = document.getElementById('jobPrevBtn'); const nextBtn = document.getElementById('jobNextBtn'); if (!wrapper || !prevBtn || !nextBtn) return;
    const getScrollStep = () => wrapper.children.length > 0 ? wrapper.children[0].offsetWidth + 12 : 300;
    nextBtn.addEventListener('click', () => { wrapper.scrollBy({ left: getScrollStep(), behavior: 'smooth' }); }); prevBtn.addEventListener('click', () => { wrapper.scrollBy({ left: -getScrollStep(), behavior: 'smooth' }); });
}
function setupDesktopBannerSlider() {
    const banner = document.querySelector('.hero-banner-collage'); if (!banner) return;
    const slides = banner.querySelectorAll('.slide'); const nextBtn = banner.querySelector('#nextBtn'); const prevBtn = banner.querySelector('#prevBtn'); let currentSlide = 0; if (slides.length <= 1) return;
    function showSlide(index) { slides.forEach((slide, i) => slide.classList.toggle('active', i === index)); }
    function next() { currentSlide = (currentSlide + 1) % slides.length; showSlide(currentSlide); }
    nextBtn.addEventListener('click', next); prevBtn.addEventListener('click', () => { currentSlide = (currentSlide - 1 + slides.length) % slides.length; showSlide(currentSlide); }); setInterval(next, 5000); showSlide(currentSlide);
}
function setupMobileBannerSlider() {
    const banner = document.querySelector('.slider.lg\\:hidden'); if (!banner) return;
    const slides = banner.querySelectorAll('.slide'); const nextBtn = banner.querySelector('#nextBtnMobile'); const prevBtn = banner.querySelector('#prevBtnMobile'); let currentSlide = 0; if (slides.length <= 1) return;
    function showSlide(index) { slides.forEach((slide, i) => { slide.style.display = (i === index) ? 'block' : 'none'; }); }
    function next() { currentSlide = (currentSlide + 1) % slides.length; showSlide(currentSlide); }
    nextBtn.addEventListener('click', next); prevBtn.addEventListener('click', () => { currentSlide = (currentSlide - 1 + slides.length) % slides.length; showSlide(currentSlide); }); setInterval(next, 5000); showSlide(currentSlide);
}
async function loadEmployerSlider() {
    const container = document.getElementById('employerScroll'); if (!container) return;
    try {
        const response = await fetch('https://jobringer.com/api/featured_employers_api.php'); if (!response.ok) return;
        const employersData = await response.json();
        const duplicatedData = [...employersData, ...employersData];
        container.innerHTML = duplicatedData.map(emp => `<a href="${emp.company_details}" target="_blank" class="employer-logo-card bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg flex items-center justify-center p-2"><img src="${emp.company_logo || `https://placehold.co/100x40/E0E0E0/888888?text=${emp.company_name?.substring(0, 2).toUpperCase()}`}" alt="${emp.company_name}" class="max-w-full max-h-full object-contain"></a>`).join('');
        if (window.innerWidth >= 1024) {
            startEmployerAutoScroll();
        }
    } catch (error) { console.error("Error loading employers:", error); }
}
function startEmployerAutoScroll() {
    const scrollContainer = document.getElementById('employerScroll'); if (!scrollContainer) return;
    let scrollAmount = 0; let animationFrameId;
    function scroll() { 
        scrollAmount += 0.5; 
        if (scrollAmount >= scrollContainer.scrollWidth / 2) { 
            scrollAmount = 0; 
        } 
        scrollContainer.scrollLeft = scrollAmount; 
        animationFrameId = requestAnimationFrame(scroll); 
    }
    scroll();

    scrollContainer.addEventListener('mouseenter', () => cancelAnimationFrame(animationFrameId));
    scrollContainer.addEventListener('mouseleave', () => requestAnimationFrame(scroll));
}