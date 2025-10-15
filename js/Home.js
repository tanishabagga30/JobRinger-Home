document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initializeHomepage, 100); 
});

// Mock login state (Change to 'true' to see unlocked state)
let isEmployerLoggedIn = true;

// NEW: Mock Candidate Data for Cards and Modal
const mockCandidateData = [
    { 
        id: 1, 
        name: "Vineet Kumar Bajpai", 
        title: "Aspiring Web Developer",
        education: "Master of Computer Applications (M.C.A)", 
        gradYear: 2025, 
        available: "Full Time | Internship",
        skills: ["React", "Node.js", "SQL", "TailwindCSS", "Git", "AWS"],
        img: "https://placehold.co/60x60/1e40af/ffffff?text=VK"
    },
    { 
        id: 2, 
        name: "Mohammad Sohail Parvez", 
        title: "Junior Data Analyst",
        education: "Bachelor of Computer Applications (B.C.A)", 
        gradYear: 2025, 
        available: "Full Time | Internship",
        skills: ["Python", "AWS", "Docker", "Machine Learning", "TensorFlow"],
        img: "https://placehold.co/60x60/7c2d12/ffffff?text=MS"
    },
    { 
        id: 3, 
        name: "Gairik Adhikary", 
        title: "Management Trainee",
        education: "Master of Business Administration (MBA)", 
        gradYear: 2025, 
        available: "Full Time | Internship",
        skills: ["Finance", "Marketing", "Strategy", "Excel", "Accounting"],
        img: "https://placehold.co/60x60/14532d/ffffff?text=GA"
    },
    { 
        id: 4, 
        name: "Prince Verma", 
        title: "Software Engineer Trainee",
        education: "Bachelor of Computer Applications (B.C.A)", 
        gradYear: 2025, 
        available: "Full Time | Internship",
        skills: ["Java", "Spring Boot", "Git", "C++", "JSP"],
        img: "https://placehold.co/60x60/a16207/ffffff?text=PV"
    },
];

function initializeHomepage() {
    setupViewSwitcher();
    setupDesktopBannerSlider();
    setupMobileBannerSlider();
    setupVacancySection('vacancy-section-desktop');
    setupNewVacancySystem();
    loadJobs();
    loadEmployerSlider();
    setupTopTalentsSection(); 
    setupTalentSliderControls(); 
    setupBlogSliderControls();
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
        
        const activeBtn = showSeeker ? getJobBtn : postJobBtn;
        
        if (activeBtn.offsetWidth > 0) {
            toggleSlider.style.width = `${activeBtn.offsetWidth}px`;
            toggleSlider.style.transform = `translateX(${activeBtn.offsetLeft}px)`;
        }
        
        if (!showSeeker) {
            setupTopTalentsSection();
            setupTalentSliderControls(); 
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

// --- Logic for Top Talents Section (Lock in Modal) ---
function setupTopTalentsSection() {
    const talentsGrid = document.getElementById('top-talents-grid');
    const modal = document.getElementById('candidate-view-modal');
    const modalContent = modal ? modal.querySelector('.modal-content') : null;
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalSignupBtn = document.getElementById('modalSignupBtn');
    const modalLockOverlay = document.getElementById('modal-lock-overlay');
    const footer = document.getElementById('modal-footer');
    
    // Check if the talent grid exists before proceeding
    if (!talentsGrid || !modal) {
        return;
    }

    // --- Modal Logic ---
    const openModal = (candidate) => {
        // Populate modal with candidate data
        // ✅ CHANGE 1: Name as Modal Heading (Visible in all states)
        document.getElementById('modal-candidate-name').textContent = candidate.name; 
        
        document.getElementById('modal-candidate-img').src = candidate.img;
        
        // ✅ CHANGE 2: Title below image/name (Visible in all states)
        document.getElementById('modal-candidate-title').textContent = candidate.title; 
        
        document.getElementById('modal-candidate-education').textContent = candidate.education;
        document.getElementById('modal-candidate-grad').textContent = `Graduation Year: ${candidate.gradYear}`;
        document.getElementById('modal-candidate-availability').textContent = candidate.available;
        
        const skillsContainer = document.getElementById('modal-candidate-skills');
        skillsContainer.innerHTML = candidate.skills.map(skill => 
            `<span class="skill-tag bg-slate-200 text-slate-800 dark:bg-gray-700 dark:text-slate-200 px-3 py-1 rounded-full text-sm font-medium">${skill}</span>`
        ).join('');

        // Apply lock status to the modal (overlay shown if not logged in)
        modalLockOverlay.classList.toggle('hidden', isEmployerLoggedIn);

        // Hide the top unlock button when overlay is shown (keep bottom one)
        if (!isEmployerLoggedIn) {
            modalSignupBtn.style.display = 'none';
        } else {
            modalSignupBtn.style.display = 'block'; // Reset if needed, but overlay hidden
        }

        // Dynamically insert footer buttons
        footer.innerHTML = '';
        if (isEmployerLoggedIn) {
            // 3 buttons for logged in: Share Profile, Bookmark, Shortlist
            const shareBtn = document.createElement('button');
            shareBtn.id = 'modalShareBtn';
            shareBtn.className = 'flex-1 bg-gray-500 text-white px-3 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors mr-1 text-xs';
            shareBtn.innerHTML = '<i class="fas fa-share-alt mr-1"></i>Share Profile';
            shareBtn.addEventListener('click', (e) => {
                e.preventDefault();
                navigator.clipboard.writeText(window.location.origin + '/candidate/' + candidate.id).then(() => {
                    alert('Profile link copied to clipboard!');
                });
                closeModal();
            });

            const bookmarkBtn = document.createElement('button');
            bookmarkBtn.id = 'modalBookmarkBtn';
            bookmarkBtn.className = 'flex-1 bg-blue-500 text-white px-3 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors mx-1 text-xs';
            bookmarkBtn.innerHTML = '<i class="far fa-bookmark mr-1"></i>Bookmark';
            bookmarkBtn.addEventListener('click', (e) => {
                e.preventDefault();
                alert(`Candidate ${candidate.name} bookmarked!`);
                closeModal();
            });

            const shortlistBtn = document.createElement('button');
            shortlistBtn.id = 'modalShortlistBtn';
            shortlistBtn.className = 'flex-1 bg-cyan-600 text-white px-3 py-2 rounded-lg font-semibold hover:bg-cyan-700 transition-colors ml-1 text-xs';
            shortlistBtn.innerHTML = '<i class="fas fa-star mr-1"></i>Shortlist';
            shortlistBtn.addEventListener('click', (e) => {
                e.preventDefault();
                alert(`Candidate ${candidate.name} shortlisted! 🎉`);
                closeModal();
            });

            footer.appendChild(shareBtn);
            footer.appendChild(bookmarkBtn);
            footer.appendChild(shortlistBtn);
        } else {
            // For logged out, add centered Unlock button in footer (overlay still covers body, but without its button)
            const unlockBtn = document.createElement('button');
            unlockBtn.id = 'modalUnlockBtn';
            unlockBtn.className = 'mx-auto bg-cyan-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan-700 transition-colors shadow-lg';
            unlockBtn.textContent = 'Unlock Full Access';
            unlockBtn.addEventListener('click', (e) => {
                e.preventDefault();
                alert("Redirecting to Employer Signup page...");
                closeModal();
            });
            footer.appendChild(unlockBtn);
        }

        // Show modal with animation
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        setTimeout(() => {
            modalContent.classList.remove('opacity-0', 'scale-95');
            modalContent.classList.add('opacity-100', 'scale-100');
        }, 10);
    };

    const closeModal = () => {
        // Clear footer on close
        footer.innerHTML = '';
        // Reset top button display
        modalSignupBtn.style.display = 'block';
        modalContent.classList.remove('opacity-100', 'scale-100');
        modalContent.classList.add('opacity-0', 'scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }, 300); // Wait for CSS transition
    };

    // --- Event Listeners ---
    closeModalBtn.addEventListener('click', closeModal);
    
    // Clicking outside the modal also closes it
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Handle Unlock/Signup button inside the modal overlay (kept for completeness, but hidden now)
    modalSignupBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert("Redirecting to Employer Signup page...");
        closeModal();
    });

    // --- Initial Card Rendering (using mockCandidateData) ---
    talentsGrid.innerHTML = mockCandidateData.map(candidate => `
        <div class="talent-card bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md transition-all duration-300 border border-transparent" data-candidate-id="${candidate.id}" data-locked="${!isEmployerLoggedIn}">
            <div class="flex flex-col items-center text-center relative">
                <div class="profile-pic-wrapper w-14 h-14 rounded-full overflow-hidden mb-3 border-2 border-slate-300 dark:border-gray-600 transition-filter duration-300 ${!isEmployerLoggedIn ? 'blur-active' : ''}">
                    <img src="${candidate.img}" alt="Profile" class="w-full h-full object-cover">
                </div>
                <h3 class="text-base font-bold text-slate-900 dark:text-white overflow-hidden text-ellipsis whitespace-nowrap w-full px-2">${candidate.name}</h3>
                <p class="text-xs font-medium text-cyan-600 dark:text-cyan-400 overflow-hidden text-ellipsis whitespace-nowrap w-full px-2">${candidate.title}</p>
            </div>
            
            <div class="border-t pt-3 mt-3 border-slate-100 dark:border-gray-700">
                <p class="text-xs font-semibold text-slate-800 dark:text-slate-100 mb-1">Grad: ${candidate.gradYear} | Available: ${candidate.available.includes('Full') ? 'FT/Int' : candidate.available}</p>
                <div class="flex flex-wrap gap-1 text-xs justify-center">
                    ${candidate.skills.slice(0, 2).map(s => `<span class="skill-tag bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 px-2 py-0.5 rounded-full">${s}</span>`).join('')}
                    ${candidate.skills.length > 2 ? `<span class="skill-tag bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 px-2 py-0.5 rounded-full">+${candidate.skills.length - 2}</span>` : ''}
                </div>
            </div>
            
            <div class="mt-4 flex justify-between gap-2">
                <button class="talent-view-details w-1/2 py-1.5 bg-slate-100 dark:bg-gray-700 rounded-full text-slate-700 dark:text-slate-200 font-semibold text-xs hover:bg-slate-200 dark:hover:bg-gray-600 transition-colors" data-action="view">View</button>
                <button class="talent-shortlist w-1/2 py-1.5 bg-cyan-600 text-white rounded-full font-semibold text-xs hover:bg-cyan-700 transition-colors" data-action="shortlist">Shortlist</button>
            </div>
        </div>
    `).join('');

    // --- Apply locked state to cards and profile pictures ---
    const talentCards = talentsGrid.querySelectorAll('.talent-card');
    talentCards.forEach(card => {
        // Apply blur to profile picture if not logged in
        const profilePicWrapper = card.querySelector('.profile-pic-wrapper');
        if (!isEmployerLoggedIn && profilePicWrapper) {
            profilePicWrapper.classList.add('blur-active');
            card.setAttribute('data-locked', 'true');
        } else {
            profilePicWrapper.classList.remove('blur-active');
            card.setAttribute('data-locked', 'false');
        }
    });

    // --- Click handler for all card buttons ---
    talentsGrid.addEventListener('click', (e) => {
        const viewBtn = e.target.closest('[data-action="view"]');
        const card = e.target.closest('.talent-card');
        
        if (viewBtn && card) {
            e.preventDefault();
            // Using dataset property for easy access to candidate ID
            const candidateId = parseInt(card.dataset.candidateId);
            const candidate = mockCandidateData.find(c => c.id === candidateId);
            if (candidate) {
                openModal(candidate);
            }
        } else if (e.target.closest('[data-action="shortlist"]') && !isEmployerLoggedIn) {
             // Handle Shortlist click when logged out (direct to signup)
             alert("Please create a free Employer Account to shortlist this candidate.");
        }
    });
}

// --- Function to control the Top Talents Slider ---
function setupTalentSliderControls() {
    const wrapper = document.getElementById('top-talents-grid');
    const prevBtn = document.getElementById('talentPrevBtn');
    const nextBtn = document.getElementById('talentNextBtn');

    if (!wrapper || !prevBtn || !nextBtn) return;

    const getScrollStep = () => {
        return wrapper.children.length > 0 ? wrapper.children[0].offsetWidth + 12 : 300;
    };

    nextBtn.addEventListener('click', () => {
        wrapper.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        wrapper.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
    });
}

// --- Function to control the Blog Sliders ---
function setupBlogSliderControls() {
    // Seeker Blog Slider
    const seekerWrapper = document.getElementById('blogCardWrapperSeeker');
    const seekerPrevBtn = document.getElementById('blogPrevBtnSeeker');
    const seekerNextBtn = document.getElementById('blogNextBtnSeeker');
    if (seekerWrapper && seekerPrevBtn && seekerNextBtn) {
        const getSeekerScrollStep = () => seekerWrapper.children.length > 0 ? seekerWrapper.children[0].offsetWidth + 12 : 300;
        seekerNextBtn.addEventListener('click', () => {
            seekerWrapper.scrollBy({ left: getSeekerScrollStep(), behavior: 'smooth' });
        });
        seekerPrevBtn.addEventListener('click', () => {
            seekerWrapper.scrollBy({ left: -getSeekerScrollStep(), behavior: 'smooth' });
        });
    }

    // Employer Blog Slider
    const employerWrapper = document.getElementById('blogCardWrapperEmployer');
    const employerPrevBtn = document.getElementById('blogPrevBtnEmployer');
    const employerNextBtn = document.getElementById('blogNextBtnEmployer');
    if (employerWrapper && employerPrevBtn && employerNextBtn) {
        const getEmployerScrollStep = () => employerWrapper.children.length > 0 ? employerWrapper.children[0].offsetWidth + 12 : 300;
        employerNextBtn.addEventListener('click', () => {
            employerWrapper.scrollBy({ left: getEmployerScrollStep(), behavior: 'smooth' });
        });
        employerPrevBtn.addEventListener('click', () => {
            employerWrapper.scrollBy({ left: -getEmployerScrollStep(), behavior: 'smooth' });
        });
    }
}

// --- The rest of the JS functions are unchanged ---
const vacancyData = {
    Technology: ["Software Engineer", "Data Scientist", "DevOps", "Frontend", "Backend", "Product Manager"],
    Finance: ["Accountant", "Financial Analyst", "Auditor", "Investment Banker", "Controller"],
    Healthcare: ["Nurse", "Medical Assistant", "Physician", "Pharmacist", "Physical Therapist"],
    Education: ["Teacher", "Professor", "Counselor", "Principal", "Instructional Designer"],
    Retail: ["Store Manager", "Sales Associate", "Merchandiser", "Buyer", "Cashier"]
};

function populateDesktopVacancyOptions(optionsContainer, category) {
    if (!optionsContainer) return;
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