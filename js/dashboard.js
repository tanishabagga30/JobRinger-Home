document.addEventListener('DOMContentLoaded', () => {
    const applicationList = document.getElementById('application-list');
    const recommendedJobCardWrapper = document.getElementById('recommendedJobCardWrapper');
    const savedJobCardWrapper = document.getElementById('savedJobCardWrapper'); 
    const creditPromoCardWrapper = document.getElementById('creditPromoCardWrapper'); 

    // --- Navigation slider functionality ---
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
            }
        });
    }
    
    // --- Mock Data (Adapted for exact card structure) ---
    const recommendedJobsData = [
        { id: 'rec-1', logo: 'https://ui-avatars.com/api/?name=Google&background=2563eb&color=fff', company: 'Google', title: 'Frontend Developer', location: 'Bengaluru, India', salary: 'Not Disclosed', experience: 'Hybrid' },
        { id: 'rec-2', logo: 'https://ui-avatars.com/api/?name=Microsoft&background=1e40af&color=fff', company: 'Microsoft', title: 'Backend Developer', location: 'Mumbai, India', salary: 'Not Disclosed', experience: 'Remote' },
        { id: 'rec-3', logo: 'https://ui-avatars.com/api/?name=Infosys&background=4b5563&color=fff', company: 'Infosys', title: 'Data Analyst', location: 'Hyderabad, India', salary: 'Not Disclosed', experience: 'Full Time' },
        { id: 'rec-4', logo: 'https://ui-avatars.com/api/?name=TCS&background=1f2937&color=fff', company: 'TCS', title: 'DevOps Engineer', location: 'Pune, India', salary: 'Not Disclosed', experience: 'Full Time' }
    ];

    const applicationsData = [
        { id: 'app-1', title: 'Software Engineer Intern', status: 'Shortlisted' },
        { id: 'app-2', title: 'Frontend Developer', status: 'Applied' },
        { id: 'app-3', title: 'UX Designer', status: 'Rejected' }
        // Note: The application list in HTML is hardcoded for visual layout but this data structure reflects a real source.
    ];

    const savedJobsData = [
        { id: 'saved-1', logo: 'https://ui-avatars.com/api/?name=Pyramid+Consulting&background=facc15&color=000', company: 'Pyramid Consulting, Inc', title: 'INSIDE SALES & BUSINESS DEVELOPMENT SPECIALIST', location: 'Noida, India', salary: 'Not Disclosed', experience: 'Full Time', savedDate: '21/08/2025' },
        { id: 'saved-2', logo: 'https://ui-avatars.com/api/?name=Tech+Solutions&background=14b8a6&color=fff', company: 'Tech Solutions', title: 'Senior Software Engineer', location: 'Bengaluru, India', salary: 'Not Disclosed', experience: 'Full Time', savedDate: '20/08/2025' }
    ];
    
    const creditPromoData = [
        { id: 'promo-1', title: "APPLY UNLIMITED", subtitle: "30-Day Boost: Apply to any job! Limited time.", credits: "Unlimited", price: "99 month", theme: "banner-theme-elite-credits", icon: "fas fa-fire" },
        { id: 'promo-2', title: "50 CREDITS PACK", subtitle: "Top up your balance instantly. Never miss an opportunity.", credits: "50", price: "99", theme: "banner-theme-pro-credits", icon: "fas fa-bolt" },
        { id: 'promo-3', title: "BASIC TOP UP", subtitle: "Need a few more? Get 10 applications now.", credits: "10", price: "99", theme: "banner-theme-basic-credits", icon: "fas fa-paper-plane" }
    ];

    // --- Renderers (Using Exact Job Card Structure) ---
    const renderJobCard = (job, isSaved = false) => {
        const saveIcon = isSaved ? 'fas fa-bookmark' : 'far fa-bookmark';

        let cardHtml = `
            <div class="job-card flex flex-col p-2.5 md:p-4">
                
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
                        <i class="${saveIcon}"></i>
                    </button>
                    <button class="action-btn apply-border flex-grow text-center">
                        <i class="fas fa-paper-plane mr-1.5"></i> Apply Now
                    </button>
                </div>`;

        if (isSaved) {
            cardHtml += `
                <div class="saved-date">
                    <p><i class="far fa-calendar-alt mr-1"></i>Saved on: ${job.savedDate}</p>
                </div>`;
        }

        cardHtml += `</div>`;

        return cardHtml;
    };
    
    const renderCreditPromoCard = (promo) => {
        return `
            <div class="promo-banner-card ${promo.theme} flex flex-col justify-between">
                <div>
                    <i class="${promo.icon} text-xl mb-1 text-white/90"></i>
                    <p class="title text-white">${promo.title}</p>
                    <p class="subtitle text-white/80 mt-0.5 text-sm">${promo.subtitle}</p>
                    <h4 class="text-2xl font-extrabold text-white mt-1">${promo.credits} <span class="text-lg font-medium">Credits</span></h4>
                </div>
                <button class="btn-buy mt-2 w-full text-xs">${promo.price} - Buy Now</button>
            </div>
        `;
    };

    const injectContent = (element, data, renderer) => {
        if (element) {
            // If it's the application list and data is mocked as simple strings, handle that
            if (element.id === 'application-list' && data[0] && typeof data[0] === 'string') {
                 // Skip dynamic injection for the hardcoded HTML list to keep the provided example
                 return;
            }
            element.innerHTML = data.map(item => renderer(item)).join('');
        }
    };
    
    // --- Initial Content Injection ---
    // Note: The application list is intentionally NOT dynamically injected here to preserve the original HTML structure for the example,
    // but the job card sliders are.
    injectContent(recommendedJobCardWrapper, recommendedJobsData, (job) => renderJobCard(job, false));
    injectContent(savedJobCardWrapper, savedJobsData, (job) => renderJobCard(job, true));
    injectContent(creditPromoCardWrapper, creditPromoData, renderCreditPromoCard);

    // --- Slider Setup Functions ---
    function setupSlider(wrapperId, prevBtnId, nextBtnId) {
        const wrapper = document.getElementById(wrapperId);
        const prevBtn = document.getElementById(prevBtnId);
        const nextBtn = document.getElementById(nextBtnId);
        if (!wrapper || !prevBtn || !nextBtn) return;
        
        const getScrollStep = () => {
            const card = wrapper.querySelector('.job-card, .promo-banner-card');
            // Card width + 1rem (16px) gap. This ensures smooth, exact scrolling.
            return card ? card.offsetWidth + 16 : 300;
        };

        nextBtn.addEventListener('click', () => {
            wrapper.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
        });
        prevBtn.addEventListener('click', () => {
            wrapper.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
        });
    }

    // Initialize all sliders
    setupSlider('recommendedJobCardWrapper', 'recommendedPrevBtn', 'recommendedNextBtn');
    setupSlider('savedJobCardWrapper', 'savedPrevBtn', 'savedNextBtn');
    setupSlider('creditPromoCardWrapper', 'creditPrevBtn', 'creditNextBtn');

    // Welcome banner tip button
    const tipButton = document.querySelector('.welcome-banner button');
    if (tipButton) {
        tipButton.addEventListener('click', () => {
            alert('Quick Tip: Complete your profile to 100% to get 3x more recommendations! Start with adding skills and experience.');
        });
    }

});