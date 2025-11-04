document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
    const mainNavSlider = document.getElementById('main-nav-slider');
    const bannersGrid = document.getElementById('subscription-banners-grid');
    const talentsGrid = document.getElementById('bookmarked-talents-grid');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    if (mainNavSlider) {
        mainNavSlider.addEventListener('click', (e) => {
            const target = e.target.closest('.nav-slider-item');
            if (target) {
                e.preventDefault();
                document.querySelectorAll('#employer-mobile-nav .nav-slider-item').forEach(item => {
                    item.classList.remove('active');
                });
                target.classList.add('active');
                console.log(`Navigating to ${target.getAttribute('data-page')} page...`);
            }
        });
    }

    const mockCandidateData = [
        { 
            id: 1, 
            name: "Vineet Kumar Bajpai", 
            title: "Aspiring Web Developer",
            img: "https://placehold.co/60x60/1e40af/ffffff?text=VK",
            skills: ["React", "Node.js", "SQL", "TailwindCSS", "Git", "AWS"],
        },
        { 
            id: 2, 
            name: "Mohammad Sohail Parvez", 
            title: "Junior Data Analyst",
            img: "https://placehold.co/60x60/7c2d12/ffffff?text=MS",
            skills: ["Python", "AWS", "Docker", "Machine Learning", "TensorFlow"],
        },
        { 
            id: 3, 
            name: "Gairik Adhikary", 
            title: "Management Trainee",
            img: "https://placehold.co/60x60/14532d/ffffff?text=GA",
            skills: ["Finance", "Marketing", "Strategy", "Excel", "Accounting"],
        },
        { 
            id: 4, 
            name: "Prince Verma", 
            title: "Software Engineer Trainee",
            img: "https://placehold.co/60x60/a16207/ffffff?text=PV",
            skills: ["Java", "Spring Boot", "Git", "C++", "JSP"],
        },
        {
            id: 5,
            name: "Ananya Sharma",
            title: "UX/UI Designer",
            img: "https://placehold.co/60x60/be185d/ffffff?text=AS",
            skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
        }
    ];

    const mockBannerData = [
        {
            id: 'pro',
            title: "Pro Hiring Suite",
            subtitle: "Fill Roles 3x Faster",
            description: "Unlock AI candidate matching, unlimited database searches, and priority support.",
            theme: "banner-theme-pro",
            buttonText: "Upgrade to Pro",
            icon: "fas fa-robot"
        },
        {
            id: 'growth',
            title: "Growth Accelerator",
            subtitle: "Expand Your Talent Pool",
            description: "Get premium job posting slots and access to verified, specialized candidate lists.",
            theme: "banner-theme-growth",
            buttonText: "Boost Growth Now",
            icon: "fas fa-chart-line"
        },
        {
            id: 'elite',
            title: "Elite Enterprise",
            subtitle: "Dedicated Success Manager",
            description: "Benefit from a dedicated account manager and bespoke recruitment campaign support.",
            theme: "banner-theme-elite",
            buttonText: "Contact Sales",
            icon: "fas fa-gem"
        }
    ];

    function setupBookmarkedProfiles(candidates) {
        if (!talentsGrid) {
            console.error("Bookmarked talents grid not found.");
            return;
        }

        talentsGrid.innerHTML = candidates.map(candidate => `
            <div class="talent-card text-center" data-candidate-id="${candidate.id}">
                <div class="flex flex-col items-center">
                    <div class="profile-pic-wrapper">
                        <img src="${candidate.img}" alt="${candidate.name}'s profile picture" class="w-full h-full object-cover">
                    </div>
                    <h3 class="text-base font-bold text-slate-900 dark:text-white truncate w-full">${candidate.name}</h3>
                    <p class="text-sm font-medium text-cyan-600 dark:text-cyan-400 truncate w-full">${candidate.title}</p>
                </div>
                <div class="border-t pt-3 mt-3 border-slate-200 dark:border-gray-700">
                    <div class="flex flex-wrap gap-1.5 text-xs justify-center mb-4">
                        ${candidate.skills.slice(0, 3).map(s => `<span class="skill-tag">${s}</span>`).join('')}
                        ${candidate.skills.length > 3 ? `<span class="skill-tag">+${candidate.skills.length - 3}</span>` : ''}
                    </div>
                </div>
                <div class="flex justify-between gap-2">
                    <button class="talent-view-details w-1/2" data-action="view">View</button>
                    <button class="talent-shortlist w-1/2" data-action="shortlist">Shortlist</button>
                </div>
            </div>
        `).join('');

        const prevBtn = document.getElementById('bookmarkPrevBtn');
        const nextBtn = document.getElementById('bookmarkNextBtn');
        const slider = talentsGrid.parentElement.parentElement;

        if (!prevBtn || !nextBtn || !slider) {
            console.error("Bookmarked profiles slider components not found.");
            return;
        }

        const getScrollStep = () => {
            const card = talentsGrid.querySelector('.talent-card');
            return card ? card.offsetWidth + 24 : 244;
        };

        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
        });

        talentsGrid.addEventListener('click', (e) => {
            const button = e.target.closest('button');
            const card = e.target.closest('.talent-card');
            if (!button || !card) return;

            const candidateId = parseInt(card.dataset.candidateId);
            const candidate = candidates.find(c => c.id === candidateId);
            const action = button.dataset.action;

            if (candidate) {
                console.log(`${action === "view" ? "Viewing" : "Shortlisted"} profile of: ${candidate.name}`);
            }
        });
    }

    function setupSubscriptionSlider(banners) {
        if (!bannersGrid) {
            console.error("Subscription banners grid not found.");
            return;
        }

        bannersGrid.innerHTML = banners.map(banner => `
            <div class="promo-banner-card ${banner.theme}">
                <div class="flex flex-col h-full justify-between">
                    <div>
                        <i class="${banner.icon} text-3xl mb-3 text-yellow-300"></i>
                        <h3 class="text-2xl font-extrabold mb-1">${banner.title}</h3>
                        <p class="text-sm font-semibold mb-3 opacity-90">${banner.subtitle}</p>
                        <p class="text-xs opacity-80">${banner.description}</p>
                    </div>
                    <button class="w-full mt-4 p-2 text-sm font-bold rounded-full bg-white text-gray-800 hover:bg-gray-100 transition-colors duration-200">
                        ${banner.buttonText}
                    </button>
                </div>
            </div>
        `).join('');

        const prevBtn = document.getElementById('bannerPrevBtn');
        const nextBtn = document.getElementById('bannerNextBtn');
        const slider = bannersGrid.parentElement;

        if (!prevBtn || !nextBtn || !slider) {
            console.error("Subscription banners slider components not found.");
            return;
        }

        const getScrollStep = () => {
            const card = bannersGrid.querySelector('.promo-banner-card');
            return card ? card.offsetWidth + 24 : 344;
        };

        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
        });
    }

    setupBookmarkedProfiles(mockCandidateData);
    setupSubscriptionSlider(mockBannerData);
});