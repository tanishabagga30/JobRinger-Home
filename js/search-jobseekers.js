document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const searchForm = document.getElementById('searchForm');
    const messageBox = document.getElementById('messageBox');
    const slider = document.getElementById('ctc-range-slider');
    const minHandle = slider.querySelector('.min-handle');
    const maxHandle = slider.querySelector('.max-handle');
    const range = slider.querySelector('.slider-range');
    const minCTCValueEl = document.getElementById('minCTCValue');
    const maxCTCValueEl = document.getElementById('maxCTCValue');
    const minCTCInput = document.getElementById('minCTC');
    const maxCTCInput = document.getElementById('maxCTC');
    const resultsSection = document.getElementById('results-section');
    const candidateListContainer = document.getElementById('candidate-list-container');
    const prevPageBtn = document.getElementById('prev-page-btn');
    const nextPageBtn = document.getElementById('next-page-btn');
    const pageNumbersContainer = document.getElementById('page-numbers');
    const minExpSelect = document.getElementById('minExperience');
    const maxExpSelect = document.getElementById('maxExperience');
    // ADDED: Resume Attached Checkbox
    const resumeAttachedCheckbox = document.getElementById('resumeAttached'); 

    // Error Handling
    if (!searchForm || !messageBox || !slider || !minHandle || !maxHandle || !range || !minCTCValueEl || !maxCTCValueEl || !minCTCInput || !maxCTCInput || !resultsSection || !candidateListContainer || !prevPageBtn || !nextPageBtn || !pageNumbersContainer || !minExpSelect || !maxExpSelect || !resumeAttachedCheckbox) {
        console.error('One or more required DOM elements are missing');
        return;
    }

    // Dynamically Generate Experience Options
    for (let i = 0; i <= 50; i++) {
        const minOption = document.createElement('option');
        minOption.value = i;
        minOption.textContent = i === 0 ? 'Min Exp' : `${i} yr`;
        minExpSelect.appendChild(minOption);

        const maxOption = document.createElement('option');
        maxOption.value = i;
        maxOption.textContent = i === 50 ? 'Max Exp' : `${i} yr`;
        maxExpSelect.appendChild(maxOption);
    }
    maxExpSelect.value = 50;

    // CTC Slider Logic
    const ctcValues = [0, 50000, 100000, 150000, 200000, 250000, 300000, 350000, 400000, 450000, 500000, 600000, 700000, 800000, 900000, 1000000, 1100000, 1200000, 1300000, 1400000, 1500000, 1600000, 1700000, 1800000, 1900000, 2000000, 2100000, 2200000, 2300000, 2400000, 2500000, 2600000, 2700000, 2800000, 2900000, 3000000, 3100000, 3200000, 3300000, 3400000, 3500000, 3600000, 3700000, 3800000, 3900000, 4000000, 4100000, 4200000, 4300000, 4400000, 4500000, 4600000, 4700000, 4800000, 4900000, 5000000, 5100000, 5200000, 5300000, 5400000, 5500000, 5600000, 5700000, 5800000, 5900000, 6000000, 6100000, 6200000, 6300000, 6400000, 6500000, 6600000, 6700000, 6800000, 6900000, 7000000, 7100000, 7200000, 7300000, 7400000, 7500000, 7600000, 7700000, 7800000, 7900000, 8000000, 8100000, 8200000, 8300000, 8400000, 8500000, 8600000, 8700000, 8800000, 8900000, 9000000, 9100000, 9200000, 9300000, 9400000, 9500000, 9600000, 9700000, 9800000, 9900000, 10000000, 15000000, 20000000, 25000000, 30000000, 35000000, 40000000, 45000000, 50000000];

    let isMinDragging = false;
    let isMaxDragging = false;

    // Map a percentage to the nearest CTC value
    const mapPercentToCTC = (percent) => {
        const index = Math.round((ctcValues.length - 1) * percent);
        return ctcValues[index];
    };

    // Map a CTC value to a percentage
    const mapCTCToPercent = (ctc) => {
        const index = ctcValues.indexOf(ctc);
        return index / (ctcValues.length - 1);
    };

    const updateSlider = () => {
        const minPercent = parseFloat(minHandle.style.left) / 100;
        const maxPercent = parseFloat(maxHandle.style.left) / 100;

        const minVal = mapPercentToCTC(minPercent);
        const maxVal = mapPercentToCTC(maxPercent);
        
        minCTCValueEl.textContent = minVal.toLocaleString();
        maxCTCValueEl.textContent = maxVal.toLocaleString();
        minCTCInput.value = minVal;
        maxCTCInput.value = maxVal;

        range.style.left = minPercent * 100 + '%';
        range.style.width = (maxPercent - minPercent) * 100 + '%';
    };

    const handleMouseMove = (event) => {
        const rect = slider.getBoundingClientRect();
        let newPosition = ((event.clientX - rect.left) / rect.width) * 100;

        // Clamp the position between 0 and 100
        newPosition = Math.max(0, Math.min(100, newPosition));

        if (isMinDragging) {
            const maxPos = parseFloat(maxHandle.style.left);
            if (newPosition < maxPos) {
                minHandle.style.left = newPosition + '%';
            }
        } else if (isMaxDragging) {
            const minPos = parseFloat(minHandle.style.left);
            if (newPosition > minPos) {
                maxHandle.style.left = newPosition + '%';
            }
        }
        updateSlider();
    };

    const handleMouseUp = () => {
        isMinDragging = false;
        isMaxDragging = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    minHandle.addEventListener('mousedown', () => {
        isMinDragging = true;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    });

    maxHandle.addEventListener('mousedown', () => {
        isMaxDragging = true;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    });

    // Set initial positions
    minHandle.style.left = '0%';
    maxHandle.style.left = '100%';
    updateSlider();

    // Sample Jobseeker Data (CTC in LPA for filtering)
    // ADDED: hasResume property for filtering
    const allCandidates = [
        { id: 'C001', name: 'Amit Sharma', experience: 3, ctc: 8, location: 'Mumbai', skills: ['Python', 'JavaScript'], industry: 'IT', contact: 'amit.sharma@example.com', hasResume: true },
        { id: 'C002', name: 'Priya Singh', experience: 5, ctc: 12, location: 'Bengaluru', skills: ['Marketing', 'SEO'], industry: 'Marketing', contact: 'priya.singh@example.com', hasResume: false },
        { id: 'C003', name: 'Rahul Verma', experience: 2, ctc: 6, location: 'Delhi', skills: ['Java', 'Spring'], industry: 'IT', contact: 'rahul.verma@example.com', hasResume: true },
        { id: 'C004', name: 'Sneha Patel', experience: 7, ctc: 15, location: 'Ahmedabad', skills: ['HR', 'Recruitment'], industry: 'Human Resources', contact: 'sneha.patel@example.com', hasResume: true },
        { id: 'C005', name: 'Vikram Rao', experience: 4, ctc: 10, location: 'Pune', skills: ['React', 'Node.js'], industry: 'IT', contact: 'vikram.rao@example.com', hasResume: false },
        { id: 'C006', name: 'Anjali Gupta', experience: 6, ctc: 14, location: 'Hyderabad', skills: ['Legal', 'Compliance'], industry: 'Legal', contact: 'anjali.gupta@example.com', hasResume: true },
        { id: 'C007', name: 'Kiran Desai', experience: 1, ctc: 4, location: 'Mumbai', skills: ['Python', 'Django'], industry: 'IT', contact: 'kiran.desai@example.com', hasResume: true },
        { id: 'C008', name: 'Neha Kapoor', experience: 8, ctc: 18, location: 'Bengaluru', skills: ['Product Management'], industry: 'Technology', contact: 'neha.kapoor@example.com', hasResume: false },
    ];

    let filteredCandidates = [...allCandidates];
    let currentPage = 1;
    const candidatesPerPage = 5;

    // Candidate Card Rendering
    function renderCandidateCard(candidate) {
        return `
            <div class="candidate-card">
                <div class="candidate-header">
                    <div class="candidate-title-wrapper">
                        <h2 class="candidate-name">${candidate.name}</h2>
                        <p class="text-sm">${candidate.skills.join(', ')}</p>
                    </div>
                </div>
                <div class="candidate-actions">
                    <button class="action-btn inline-flex items-center justify-center bg-indigo-600">
                        <i class="fas fa-eye mr-2"></i>View Profile
                    </button>
                    <button class="action-btn inline-flex items-center justify-center bg-gray-200">
                        <i class="fas fa-envelope mr-2"></i>Contact
                    </button>
                    <button class="action-btn inline-flex items-center justify-center bg-gray-200">
                        <i class="fas fa-star mr-2"></i>Shortlist
                    </button>
                </div>
                <div class="candidate-details">
                    <div class="detail-item">
                        <span class="detail-label">Experience</span>
                        <span class="detail-value">${candidate.experience} Yrs</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">CTC</span>
                        <span class="detail-value">${candidate.ctc} LPA</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Location</span>
                        <span class="detail-value">${candidate.location}</span>
                    </div>
                </div>
            </div>
        `;
    }

    // Render Candidates
    function renderCandidates() {
        const start = (currentPage - 1) * candidatesPerPage;
        const end = start + candidatesPerPage;
        const candidatesToRender = filteredCandidates.slice(start, end);

        candidateListContainer.innerHTML = candidatesToRender.map(renderCandidateCard).join('');

        const totalFiltered = filteredCandidates.length;
        resultsSection.querySelector('h2').textContent = `Search Results (${totalFiltered} candidates)`;

        updatePagination();
    }

    // Pagination Logic
    function updatePagination() {
        const totalPages = Math.ceil(filteredCandidates.length / candidatesPerPage);
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
            if (currentPage === 1) firstPageBtn.classList.add('active');
            firstPageBtn.addEventListener('click', () => { currentPage = 1; renderCandidates(); });
            pageNumbersContainer.appendChild(firstPageBtn);
            pageNumbersContainer.innerHTML += '<span class="text-sm">...</span>';
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
                renderCandidates();
            });
            pageNumbersContainer.appendChild(pageButton);
        }

        if (endPage < totalPages) {
            pageNumbersContainer.innerHTML += '<span class="text-sm">...</span>';
            const lastPageBtn = document.createElement('button');
            lastPageBtn.classList.add('page-btn-sm');
            lastPageBtn.textContent = totalPages;
            if (currentPage === totalPages) lastPageBtn.classList.add('active');
            lastPageBtn.addEventListener('click', () => { currentPage = totalPages; renderCandidates(); });
            pageNumbersContainer.appendChild(lastPageBtn);
        }

        prevPageBtn.classList.toggle('disabled', currentPage === 1);
        nextPageBtn.classList.toggle('disabled', currentPage === totalPages);
    }

    // Filter Candidates
    function filterCandidates() {
        const formData = new FormData(searchForm);
        const data = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }

        const keywords = data.keywords.toLowerCase().split(',').map(k => k.trim()).filter(k => k);
        const searchType = data.searchType || 'any';
        const functionalArea = data.functionalArea.toLowerCase();
        const location = data.location.toLowerCase();
        const industry = data.industry.toLowerCase();
        const contactDetails = data.contactDetails.toLowerCase();
        const minExp = parseInt(data.minExperience) || 0;
        const maxExp = parseInt(data.maxExperience) || 50;
        const minCtc = parseInt(minCTCInput.value) / 100000; // Convert to LPA
        const maxCtc = parseInt(maxCTCInput.value) / 100000; // Convert to LPA
        // MODIFIED: Read checkbox state
        const requiresResume = resumeAttachedCheckbox.checked;

        filteredCandidates = allCandidates.filter(candidate => {
            const matchesKeywords = !keywords.length || (
                searchType === 'all' ?
                keywords.every(k => candidate.skills.some(skill => skill.toLowerCase().includes(k)) || candidate.name.toLowerCase().includes(k)) :
                keywords.some(k => candidate.skills.some(skill => skill.toLowerCase().includes(k)) || candidate.name.toLowerCase().includes(k))
            );
            const matchesFunctionalArea = !functionalArea || candidate.skills.some(skill => skill.toLowerCase().includes(functionalArea));
            const matchesLocation = !location || candidate.location.toLowerCase().includes(location);
            const matchesIndustry = !industry || candidate.industry.toLowerCase().includes(industry);
            const matchesContact = !contactDetails || candidate.name.toLowerCase().includes(contactDetails) || candidate.contact.toLowerCase().includes(contactDetails);
            const matchesExperience = candidate.experience >= minExp && candidate.experience <= maxExp;
            const matchesCtc = candidate.ctc >= minCtc && candidate.ctc <= maxCtc;
            // MODIFIED: Filtering by resume state
            const matchesResume = !requiresResume || candidate.hasResume === true;

            return matchesKeywords && matchesFunctionalArea && matchesLocation && matchesIndustry && matchesContact && matchesExperience && matchesCtc && matchesResume;
        });

        currentPage = 1;
        renderCandidates();
    }

    // Event Listeners
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        resultsSection.classList.remove('hidden');
        filterCandidates();
        messageBox.classList.remove('hidden');
        setTimeout(() => messageBox.classList.add('hidden'), 3000);
    });
    
    // ADDED: Re-run filter when the checkbox changes
    resumeAttachedCheckbox.addEventListener('change', () => {
        if (!resultsSection.classList.contains('hidden')) {
            filterCandidates();
        }
    });

    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderCandidates();
        }
    });
    nextPageBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(filteredCandidates.length / candidatesPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderCandidates();
        }
    });

    updateSlider();
});