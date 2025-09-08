// js/companies-following.js

document.addEventListener('DOMContentLoaded', () => {
    // UPDATED: Added more mock company data
    let followedCompanies = [
        {
            id: 'comp001',
            name: 'Gayatri Projects',
            logoUrl: 'https://placehold.co/100x100/e2e8f0/334155?text=GP',
            bannerUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            industry: 'Construction & Engineering',
            followers: 12500,
            activeJobs: 15,
            companyUrl: '#',
            dateFollowed: '2025-07-20'
        },
        {
            id: 'comp002',
            name: 'Job Ringer',
            logoUrl: 'https://placehold.co/100x100/bae6fd/0891b2?text=JR',
            bannerUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            industry: 'Technology & Internet',
            followers: 8750,
            activeJobs: 8,
            companyUrl: '#',
            dateFollowed: '2025-08-01'
        },
        {
            id: 'comp003',
            name: 'Innovate Solutions',
            logoUrl: 'https://placehold.co/100x100/ddd6fe/5b21b6?text=IS',
            bannerUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            industry: 'IT Services & Consulting',
            followers: 2300,
            activeJobs: 22,
            companyUrl: '#',
            dateFollowed: '2025-06-15'
        },
        {
            id: 'comp004',
            name: 'QuantumLeap AI',
            logoUrl: 'https://placehold.co/100x100/c7d2fe/4338ca?text=QL',
            bannerUrl: 'https://images.unsplash.com/photo-1593642532973-d31b65574b33?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            industry: 'Artificial Intelligence',
            followers: 5500,
            activeJobs: 12,
            companyUrl: '#',
            dateFollowed: '2025-08-05'
        },
        {
            id: 'comp005',
            name: 'HealthBridge',
            logoUrl: 'https://placehold.co/100x100/a7f3d0/059669?text=HB',
            bannerUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            industry: 'Healthcare Technology',
            followers: 18000,
            activeJobs: 30,
            companyUrl: '#',
            dateFollowed: '2025-07-11'
        },
        {
            id: 'comp006',
            name: 'EcoPlanet Foods',
            logoUrl: 'https://placehold.co/100x100/fef08a/854d0e?text=EF',
            bannerUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            industry: 'Food & Beverage',
            followers: 720,
            activeJobs: 5,
            companyUrl: '#',
            dateFollowed: '2025-05-30'
        }
    ];

    const companiesListContainer = document.getElementById('companies-list');
    const noCompaniesMessage = document.getElementById('no-companies-message');
    const searchInput = document.getElementById('search-input');
    const sortSelect = document.getElementById('sort-select');

    const renderCompanies = (companies) => {
        companiesListContainer.innerHTML = ''; 

        if (companies.length === 0) {
            noCompaniesMessage.classList.remove('hidden');
        } else {
            noCompaniesMessage.classList.add('hidden');
        }

        companies.forEach(company => {
            const card = document.createElement('div');
            card.className = 'company-card';
            card.setAttribute('data-company-id', company.id);
            card.innerHTML = `
                <div class="card-banner">
                    <img src="${company.bannerUrl}" alt="${company.name} Banner">
                </div>
                <div class="card-header">
                    <img src="${company.logoUrl}" alt="${company.name} Logo" class="company-logo">
                </div>
                <div class="card-body">
                    <a href="${company.companyUrl}" class="company-name">${company.name}</a>
                    <p class="company-industry">${company.industry}</p>
                    <div class="company-stats">
                        <span><i class="fas fa-users"></i> ${company.followers.toLocaleString()}</span>
                        <span><i class="fas fa-briefcase"></i> ${company.activeJobs} Jobs</span>
                    </div>
                </div>
                <div class="card-footer">
                    <a href="#" class="view-jobs-btn">View Jobs</a>
                    <button class="unfollow-btn" title="Unfollow ${company.name}">
                        <i class="fas fa-check"></i>
                        <span class="unfollow-text">Following</span>
                    </button>
                </div>
            `;
            companiesListContainer.appendChild(card);
        });
    };

    const updateDisplay = () => {
        const searchTerm = searchInput.value.toLowerCase();
        const sortValue = sortSelect.value;

        let filtered = followedCompanies.filter(c => 
            c.name.toLowerCase().includes(searchTerm) || 
            c.industry.toLowerCase().includes(searchTerm)
        );

        switch (sortValue) {
            case 'name_asc':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name_desc':
                filtered.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'date_followed_asc':
                filtered.sort((a, b) => new Date(a.dateFollowed) - new Date(b.dateFollowed));
                break;
            case 'date_followed_desc':
            default:
                filtered.sort((a, b) => new Date(b.dateFollowed) - new Date(a.dateFollowed));
                break;
        }
        renderCompanies(filtered);
    };

    companiesListContainer.addEventListener('click', (event) => {
        const unfollowButton = event.target.closest('.unfollow-btn');
        if (unfollowButton) {
            const card = unfollowButton.closest('.company-card');
            const companyId = card.getAttribute('data-company-id');
            
            followedCompanies = followedCompanies.filter(c => c.id !== companyId);
            
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                updateDisplay();
            }, 300);
        }
    });

    searchInput.addEventListener('input', updateDisplay);
    sortSelect.addEventListener('change', updateDisplay);

    updateDisplay();
});
