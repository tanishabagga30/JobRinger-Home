// js/application-status.js

document.addEventListener('DOMContentLoaded', async () => {
    // This assumes your universal.js handles loading header/footer/etc.
    
    // UPDATED: Data now includes employerEmail and dates in the timeline
    const applications = [
        {
            id: '57a2aaa2',
            jobTitle: 'STUDENT COUNSELOR',
            company: 'jobringer.com',
            url: 'https://www.jobringer.com/job/student-counselor/57a2aaa2',
            applicationDate: '2025-07-15',
            status: 'On Hold',
            employerEmail: 'hr@jobringer.com',
            timeline: [
                { stage: 'Applied', completed: true, date: '2025-07-15' },
                { stage: 'Reviewed', completed: true, date: '2025-07-18' },
                { stage: 'Interview', completed: false, date: null },
                { stage: 'Offered', completed: false, date: null },
            ]
        },
        {
            id: '2002495d',
            jobTitle: 'SITE ENGINEER',
            company: 'Gayatri Projects',
            url: 'https://www.jobringer.com/job/site-engineer/2002495d',
            applicationDate: '2025-06-23',
            status: 'Not Suitable',
            employerEmail: 'recruitment@gayatri.com',
            timeline: [
                { stage: 'Applied', completed: true, date: '2025-06-23' },
                { stage: 'Reviewed', completed: true, date: '2025-06-25' },
                { stage: 'Interview', completed: false, date: null },
                { stage: 'Offered', completed: false, date: null },
            ]
        },
        {
            id: 'c3303e8c',
            jobTitle: 'FRONTEND DEVELOPER / DESIGNER INTERN',
            company: 'jobringer.com',
            url: 'https://www.jobringer.com/job/frontend-developer-designer-intern/c3303e8c',
            applicationDate: '2025-05-27',
            status: 'Suitable / Shortlisted',
            employerEmail: 'careers@jobringer.com',
            timeline: [
                { stage: 'Applied', completed: true, date: '2025-05-27' },
                { stage: 'Reviewed', completed: true, date: '2025-05-30' },
                { stage: 'Shortlisted', completed: true, date: '2025-06-02' },
                { stage: 'Interview', completed: false, date: null },
                { stage: 'Hired', completed: false, date: null },
            ]
        },
    ];

    const applicationsList = document.getElementById('applications-list');
    const filterButtons = document.querySelectorAll('.status-filter-btn');
    const noAppsMessage = document.getElementById('no-applications-message');
    // ADDED: Get search input element
    const searchInput = document.getElementById('search-input');

    // Function to render the application cards
    const renderApplications = (filteredApps) => {
        applicationsList.innerHTML = '';

        if (filteredApps.length === 0) {
            noAppsMessage.classList.remove('hidden');
        } else {
            noAppsMessage.classList.add('hidden');
        }

        // Sort applications by date, newest first
        filteredApps.sort((a, b) => new Date(b.applicationDate) - new Date(a.applicationDate));

        filteredApps.forEach(app => {
            // UPDATED: Timeline generation now includes date
            const timelineHTML = app.timeline.map(step => {
                const stepDate = step.date 
                    ? `<div class="timeline-date">${new Date(step.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</div>` 
                    : '';
                return `
                    <div class="timeline-step ${step.completed ? 'completed' : ''}">
                        <div class="timeline-marker"></div>
                        <span class="timeline-label">${step.stage}</span>
                        ${stepDate}
                    </div>
                `;
            }).join('');

            const card = document.createElement('div');
            card.className = 'application-card bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md border-l-4';
            
            switch (app.status) {
                case 'Suitable / Shortlisted': card.classList.add('border-green-500'); break;
                case 'On Hold': card.classList.add('border-yellow-500'); break;
                case 'Not Suitable': card.classList.add('border-red-500'); break;
                default: card.classList.add('border-gray-400');
            }

            // UPDATED: Card now includes contact button, and timeline is in scrollable container
            card.innerHTML = `
                <div class="flex flex-col sm:flex-row justify-between sm:items-start">
                    <div>
                        <a href="${app.url}" class="text-lg font-bold text-cyan-600 dark:text-cyan-400 hover:underline">${app.jobTitle}</a>
                        <p class="text-gray-600 dark:text-gray-300 font-medium">${app.company}</p>
                        <div class="mt-2 sm:mt-3">
                           <a href="mailto:${app.employerEmail}" class="inline-block bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold hover:bg-cyan-200 dark:hover:bg-cyan-800">
                                <i class="fas fa-envelope mr-1"></i> Contact Employer
                           </a>
                        </div>
                    </div>
                    <div class="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0 text-left sm:text-right flex-shrink-0">
                        <p>Applied on: <strong>${new Date(app.applicationDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</strong></p>
                        <p>Status: <strong>${app.status}</strong></p>
                    </div>
                </div>
                <div class="timeline-container mt-4">
                    <div class="timeline">${timelineHTML}</div>
                </div>
            `;
            applicationsList.appendChild(card);
        });
    };

    // ADDED: Central function to handle all filtering and searching
    const updateDisplayedApplications = () => {
        const searchTerm = searchInput.value.toLowerCase();
        const activeFilter = document.querySelector('.status-filter-btn.active').getAttribute('data-status');

        let filteredApps = applications;

        // 1. Filter by search term
        if (searchTerm) {
            filteredApps = filteredApps.filter(app => 
                app.jobTitle.toLowerCase().includes(searchTerm) ||
                app.company.toLowerCase().includes(searchTerm)
            );
        }

        // 2. Filter by status
        if (activeFilter !== 'all') {
            filteredApps = filteredApps.filter(app => app.status === activeFilter);
        }

        renderApplications(filteredApps);
    };

    // UPDATED: Filter buttons now call the central update function
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            updateDisplayedApplications();
        });
    });

    // ADDED: Event listener for the search input
    searchInput.addEventListener('input', updateDisplayedApplications);

    // Initial render
    updateDisplayedApplications();
});
