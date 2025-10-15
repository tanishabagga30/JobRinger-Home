
function isExpired(validTill) {
    const currentDate = new Date('2025-09-19');
    const [day, month, year] = validTill.split('-').map(part => parseInt(part.replace(/^[0]+/g, '')));
    const validDate = new Date(year, month - 1, day);
    return validDate < currentDate;
}

// REMOVED: getJobEmoji function

document.addEventListener('DOMContentLoaded', () => {
    const jobCardsContainer = document.getElementById('job-cards-container');
    const statusFilter = document.getElementById('status-filter');
    const showPerPageSelect = document.getElementById('show-per-page');
    const totalStatsText = document.getElementById('total-stats-text');
    const prevPageBtn = document.getElementById('prev-page-btn');
    const nextPageBtn = document.getElementById('next-page-btn');
    const pageNumbersContainer = document.getElementById('page-numbers');
    const deleteJobsBtn = document.getElementById('delete-jobs-btn');
    
    // Sample data - update status if expired
    const rawJobs = [
        { id: '1756908674', title: 'Human Resources Executive', postedBy: 'Anshu Hansda', postedDate: '3-Sep-2025', validTill: '2-Dec-2025', applications: 1000, status: 'Published' },
        { id: '1691671784', title: 'Freelance Graphic Designer | WFH', postedBy: 'jobringer.com', postedDate: '14-Aug-2025', validTill: '13-Sep-2025', applications: 65, status: 'Published' },
        { id: '1672833595', title: 'Hiring For CA Fresher | Mumbai', postedBy: 'jobringer.com', postedDate: '14-Aug-2025', validTill: '13-Sep-2025', applications: 136, status: 'Published' },
        { id: '1691666688', title: 'Social Media Associate', postedBy: 'jobringer.com', postedDate: '14-Aug-2025', validTill: '13-Sep-2025', applications: 99, status: 'Published' },
        { id: '1691672672', title: 'Freelance Resume Writer | WFH', postedBy: 'jobringer.com', postedDate: '14-Aug-2025', validTill: '13-Sep-2025', applications: 118, status: 'Published' },
        { id: '1663395943', title: 'QC Manager/Sr. Manager', postedBy: 'jobringer.com', postedDate: '13-Aug-2025', validTill: '12-Sep-2025', applications: 36, status: 'Published' },
        { id: '1663404011', title: 'Raw Material Manager/Sr Manager', postedBy: 'jobringer.com', postedDate: '13-Aug-2025', validTill: '12-Sep-2025', applications: 24, status: 'Published' },
        { id: '1663392685', title: 'Production HEAD - API VAPI - Gujarat', postedBy: 'jobringer.com', postedDate: '13-Aug-2025', validTill: '12-Sep-2025', applications: 51, status: 'Published' },
        { id: '1662107195', title: 'Front End Developer Trainee | An Online Job Portal | Mumbai', postedBy: 'jobringer.com', postedDate: '13-Aug-2025', validTill: '12-Sep-2025', applications: 752, status: 'Published' },
        { id: '1661337245', title: 'Asst. Manager - Accounts Payable | Mumbai', postedBy: 'jobringer.com', postedDate: '13-Aug-2025', validTill: '12-Sep-2025', applications: 42, status: 'Published' },
        { id: '1663391667', title: 'Plant Head - Operations - Pharma (API) - VAPI Gujarat', postedBy: 'jobringer.com', postedDate: '13-Aug-2025', validTill: '12-Sep-2025', applications: 31, status: 'Published' },
        { id: '1663405622', title: 'Manager/Sr Manager Raw Material', postedBy: 'jobringer.com', postedDate: '13-Aug-2025', validTill: '12-Sep-2025', applications: 40, status: 'Published' },
        { id: '1754931336', title: 'Contractual Copyediting Reviewer (Work-from-home)', postedBy: 'Shreya Pandey', postedDate: '11-Aug-2025', validTill: '9-Nov-2025', applications: 8, status: 'Expired' },
        { id: '1753681774', title: 'Export Marketing Specialist', postedBy: 'Anshu Hansda', postedDate: '28-Jul-2025', validTill: '26-Oct-2025', applications: 1, status: 'Published' },
        { id: '1753084545', title: 'Alepo Technologies - Java/J2EE Lead Developer', postedBy: 'Shreya Pandey', postedDate: '21-Jul-2025', validTill: '19-Oct-2025', applications: 0, status: 'Expired' },
        { id: '1752833125', title: 'Senior HR Executive I', postedBy: 'Shreya Pandey', postedDate: '18-Jul-2025', validTill: '16-Oct-2025', applications: 0, status: 'Inactive' },
        { id: '1752757877', title: 'Happiness Officer (Tutorial Coordinator)', postedBy: 'Shreya Pandey', postedDate: '17-Jul-2025', validTill: '15-Oct-2025', applications: 0, status: 'Expired' },
        { id: '1752678425', title: 'Senior Business Analyst', postedBy: 'Anshu Hansda', postedDate: '16-Jul-2025', validTill: '14-Oct-2025', applications: 1, status: 'Published' },
        { id: '1752608720', title: 'Graphic Designer', postedBy: 'Shreya Pandey', postedDate: '16-Jul-2025', validTill: '14-Oct-2025', applications: 0, status: 'Draft' },
        { id: '1752580575', title: 'Civil Field Supervisor', postedBy: 'Sushmitha Dhatrika', postedDate: '15-Jul-2025', validTill: '13-Oct-2025', applications: 0, status: 'Published' },
    ];

    const allJobs = rawJobs.map(job => ({
        ...job,
        status: isExpired(job.validTill) && job.status !== 'Draft' && job.status !== 'Inactive' ? 'Expired' : job.status
    }));

    let filteredJobs = [...allJobs];
    let currentPage = 1;
    let jobsPerPage = parseInt(showPerPageSelect.value, 10);
    const selectedJobs = new Set();

    const renderJobCard = (job) => {
        const statusClass = job.status.toLowerCase();
        const isSelected = selectedJobs.has(job.id);

        return `
            <div class="job-card-manage">
                <div class="job-card-header">
                    <div class="job-title-control-wrapper">
                        <input type="checkbox" class="job-checkbox" data-job-id="${job.id}" ${isSelected ? 'checked' : ''}>
                        
                        <div class="job-title-wrapper">
                            <h2 class="job-title">${job.title}</h2>
                            <span class="applications-badge"><i class="fas fa-users"></i> ${job.applications}</span>
                        </div>
                    </div>
                    
                    <div class="header-right">
                        <span class="job-status status-${statusClass}">${job.status}</span>
                    </div>
                </div>
                <div class="job-actions-mobile">
                    <button class="action-btn-mobile inline-flex items-center justify-center bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        <i class="fas fa-eye"></i> View
                    </button>
                    <button class="action-btn-mobile inline-flex items-center justify-center bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300">
                        <i class="fas fa-file-download"></i> Download
                    </button>
                    <button class="action-btn-mobile inline-flex items-center justify-center bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300">
                        <i class="fas fa-sync-alt"></i> Repost
                    </button>
                    <button class="action-btn-mobile inline-flex items-center justify-center bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300">
                        <i class="fas fa-envelope"></i> Email
                    </button>
                    <button class="action-btn-mobile inline-flex items-center justify-center bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300">
                        <i class="fas fa-file-alt"></i> CV
                    </button>
                    <button class="action-btn-mobile inline-flex items-center justify-center bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300">
                        <i class="fas fa-star"></i> Recommend
                    </button>
                    <button class="action-btn-mobile inline-flex items-center justify-center bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="action-btn-mobile inline-flex items-center justify-center bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300">
                        <i class="fas fa-trash-alt"></i> Delete
                    </button>
                </div>
                <div class="job-actions-desktop">
                    <div class="action-row">
                        <a href="#" class="action-link"><i class="fas fa-eye mr-1"></i> View</a>
                        <a href="#" class="action-link"><i class="fas fa-file-download mr-1"></i> Download</a>
                        <a href="#" class="action-link"><i class="fas fa-sync-alt mr-1"></i> Repost</a>
                        <a href="#" class="action-link"><i class="fas fa-envelope mr-1"></i> Email</a>
                        <a href="#" class="action-link"><i class="fas fa-file-alt mr-1"></i> CV</a>
                        <a href="#" class="action-link"><i class="fas fa-star mr-1"></i> Recommend</a>
                        <a href="#" class="action-link"><i class="fas fa-edit mr-1"></i> Edit</a>
                        <a href="#" class="action-link"><i class="fas fa-trash-alt mr-1"></i> Delete</a>
                    </div>
                </div>
                <div class="secondary-details">
                    <div class="detail-item">
                        <span class="detail-label">Posted By</span>
                        <span class="detail-value">${job.postedBy}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Posted Date</span>
                        <span class="detail-value">${job.postedDate}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Valid Till</span>
                        <span class="detail-value">${job.validTill}</span>
                    </div>
                    <div class="detail-item">
                            <p class="job-ref">Ref: JOBRINGER-${job.id}</p>
                    
                    </div>
                </div>
            </div>
        `;
    };

    const updateDeleteButtonVisibility = () => {
        if (selectedJobs.size > 0) {
            deleteJobsBtn.classList.remove('hidden');
        } else {
            deleteJobsBtn.classList.add('hidden');
        }
    };

    const renderJobs = () => {
        const start = (currentPage - 1) * jobsPerPage;
        const end = start + jobsPerPage;
        const jobsToRender = filteredJobs.slice(start, end);
        
        jobCardsContainer.innerHTML = jobsToRender.map(renderJobCard).join('');
        
        jobCardsContainer.querySelectorAll('.job-checkbox').forEach(checkbox => {
            const jobId = checkbox.dataset.jobId;
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    selectedJobs.add(jobId);
                } else {
                    selectedJobs.delete(jobId);
                }
                updateDeleteButtonVisibility();
            });
        });

        const totalFiltered = filteredJobs.length;
        const startShowing = Math.min(totalFiltered, start + 1);
        const endShowing = Math.min(totalFiltered, end);
        totalStatsText.textContent = `Showing ${startShowing} to ${endShowing} of ${totalFiltered} jobs`;
        
        updatePagination();
    };

    const updatePagination = () => {
        const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
        pageNumbersContainer.innerHTML = '';

        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        if (startPage > 1) {
            const firstPageBtn = document.createElement('button');
            firstPageBtn.classList.add('page-btn-sm');
            firstPageBtn.textContent = '1';
            if (1 === currentPage) firstPageBtn.classList.add('active');
            firstPageBtn.addEventListener('click', () => { currentPage = 1; renderJobs(); });
            pageNumbersContainer.appendChild(firstPageBtn);
            pageNumbersContainer.innerHTML += '<span class="text-sm text-gray-500 dark:text-gray-400">...</span>';
        }

        for (let i = startPage; i <= endPage; i++) {
            const pageButton = document.createElement('button');
            pageButton.classList.add('page-btn-sm');
            if (i === currentPage) {
                pageButton.classList.add('active');
            }
            pageButton.textContent = i;
            pageButton.addEventListener('click', () => {
                currentPage = i;
                renderJobs();
            });
            pageNumbersContainer.appendChild(pageButton);
        }
        
        if (endPage < totalPages) {
            pageNumbersContainer.innerHTML += '<span class="text-sm text-gray-500 dark:text-gray-400">...</span>';
            const lastPageBtn = document.createElement('button');
            lastPageBtn.classList.add('page-btn-sm');
            lastPageBtn.textContent = totalPages;
            if (totalPages === currentPage) lastPageBtn.classList.add('active');
            lastPageBtn.addEventListener('click', () => { currentPage = totalPages; renderJobs(); });
            pageNumbersContainer.appendChild(lastPageBtn);
        }

        prevPageBtn.classList.toggle('disabled', currentPage === 1);
        nextPageBtn.classList.toggle('disabled', currentPage === totalPages);
    };

    const handleFilterChange = () => {
        const status = statusFilter.value;
        filteredJobs = allJobs.filter(job => status === 'all' || job.status.toLowerCase() === status.toLowerCase());
        currentPage = 1;
        renderJobs();
    };

    const handleJobsPerPageChange = () => {
        jobsPerPage = parseInt(showPerPageSelect.value, 10);
        currentPage = 1;
        renderJobs();
    };

    statusFilter.addEventListener('change', handleFilterChange);
    showPerPageSelect.addEventListener('change', handleJobsPerPageChange);

    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderJobs();
        }
    });

    nextPageBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderJobs();
        }
    });

    deleteJobsBtn.addEventListener('click', () => {
        if (selectedJobs.size > 0) {
            const confirmed = confirm(`Are you sure you want to delete ${selectedJobs.size} job(s)?`);
            if (confirmed) {
                filteredJobs = filteredJobs.filter(job => !selectedJobs.has(job.id));
                selectedJobs.clear();
                updateDeleteButtonVisibility();
                renderJobs();
                alert('Jobs deleted successfully!');
            }
        }
    });

    // Initial render
    renderJobs();
});