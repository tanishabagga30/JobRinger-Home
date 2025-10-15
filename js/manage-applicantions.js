document.addEventListener('DOMContentLoaded', () => {
    // Existing variable declarations...
    const candidateListContainer = document.getElementById('candidate-list-container');
    const keywordsInput = document.getElementById('keywords');
    const showPerPageSelect = document.getElementById('show-per-page');
    const prevPageBtn = document.getElementById('prev-page-btn');
    const nextPageBtn = document.getElementById('next-page-btn');
    const pageNumbersContainer = document.getElementById('page-numbers');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const ctcMinInput = document.getElementById('ctc-min');
    const ctcMaxInput = document.getElementById('ctc-max');
    const ctcMinValue = document.getElementById('ctc-min-value');
    const ctcMaxValue = document.getElementById('ctc-max-value');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const filterSidebar = document.querySelector('.filter-sidebar');
    const filterHeaders = document.querySelectorAll('.filter-header');

    // Data remains the same
    const applicationsData = [
        // ... (Your applicationsData array remains here) ...
        { id: 1, initials: 'AS', name: 'Aman Sharma', profile: 'Working Professional', experience: '1.6 Years', ctc: '360000 PA', location: 'Gwalior', noticePeriod: 'Immediate', job: 'Assistant / Junior Advocates | Legal Firm | Mumbai', status: 'suitable', lastActive: '13-Sep-25', modifiedDate: '12-Sep-25', previousWork: 'Previously worked as a Legal Assistant at XYZ Firm.', education: 'LLB', functionalArea: 'Legal', industry: 'Legal Services', email: 'aman.sharma@example.com', phone: '+919876543210', relevance: { functionalArea: true, jobRole: true, industry: true, experience: false, ctc: false, location: false } },
        { id: 2, initials: 'AS', name: 'Anish S', profile: 'Fresher', experience: '0 Years', ctc: '0/-', location: 'Salem', noticePeriod: 'Immediate', job: 'LEAD ENGINEER-SOFTWARE TEST&RELEASE', status: 'on-hold', lastActive: '12-Sep-25', modifiedDate: '12-Sep-25', previousWork: null, education: 'B.Tech', functionalArea: 'Software Development', industry: 'IT Services', email: 'anish.s@example.com', phone: '+919988776655', relevance: { functionalArea: false, jobRole: false, industry: false, experience: true, ctc: false, location: false } },
        { id: 3, initials: 'MD', name: 'Mansi Dixit', profile: 'Working Professional', experience: '3.0 Years', ctc: '0/-', location: 'Pune', noticePeriod: 'Immediate', job: 'HR EXECUTIVE', status: 'suitable', lastActive: '12-Sep-25', modifiedDate: '12-Sep-25', previousWork: 'Previously worked at Talent Solutions as an HR Associate', education: 'MBA/PGDM', functionalArea: 'Human Resources', industry: 'Recruitment', email: 'mansi.d@example.com', phone: '+918964950650', relevance: { functionalArea: true, jobRole: true, industry: true, experience: false, ctc: false, location: true } },
        { id: 4, initials: 'SS', name: 'Sakshi Singh', profile: 'Working Professional', experience: '1.0 Years', ctc: '0/-', location: 'Gurgaon', noticePeriod: 'Immediate', job: 'RM Analyst | A Leading Pharma Company', status: 'suitable', lastActive: '12-Sep-25', modifiedDate: '12-Sep-25', previousWork: 'Previously worked at Bharatiyam Groups as Finance Executive', education: 'MBA/PGDM', functionalArea: 'Corporate Planning / Consulting / Strategy / PMO', industry: 'CWA - CMA, Cost & Management Accountant Firm', email: 'sakshi.s@example.com', phone: '+919774470924', relevance: { functionalArea: false, jobRole: false, industry: false, experience: true, ctc: false, location: true } },
        { id: 5, initials: 'RJ', name: 'Rohan Jain', profile: 'Working Professional', experience: '5.0 Years', ctc: '1000000 PA', location: 'Bangalore', noticePeriod: '30 Days', job: 'Senior Software Engineer', status: 'suitable', lastActive: '11-Sep-25', modifiedDate: '10-Sep-25', previousWork: 'Worked at TechCorp as Software Engineer', education: 'B.Tech', functionalArea: 'Software Development', industry: 'Technology', email: 'rohan.j@example.com', phone: '+919012345678', relevance: { functionalArea: true, jobRole: true, industry: true, experience: true, ctc: true, location: true } },
        { id: 6, initials: 'PK', name: 'Priya Kumari', profile: 'Working Professional', experience: '2.5 Years', ctc: '500000 PA', location: 'Delhi', noticePeriod: '15 Days', job: 'Marketing Manager', status: 'on-hold', lastActive: '10-Sep-25', modifiedDate: '09-Sep-25', previousWork: 'Worked at Innovate Marketing as Marketing Executive', education: 'MBA', functionalArea: 'Marketing', industry: 'Advertising', email: 'priya.k@example.com', phone: '+919876512345', relevance: { functionalArea: true, jobRole: true, industry: true, experience: true, ctc: true, location: true } },
        { id: 7, initials: 'VK', name: 'Vivek Kumar', profile: 'Fresher', experience: '0 Years', ctc: '0/-', location: 'Kolkata', noticePeriod: 'Immediate', job: 'Data Analyst Intern', status: 'suitable', lastActive: '10-Sep-25', modifiedDate: '10-Sep-25', previousWork: null, education: 'B.Sc.', functionalArea: 'Data Analytics', industry: 'Financial Services', email: 'vivek.k@example.com', phone: '+919123456789', relevance: { functionalArea: true, jobRole: true, industry: false, experience: true, ctc: false, location: true } },
        { id: 8, initials: 'SM', name: 'Sneha Mehta', profile: 'Working Professional', experience: '7.0 Years', ctc: '1500000 PA', location: 'Mumbai', noticePeriod: '90 Days', job: 'Product Manager', status: 'not-suitable', lastActive: '09-Sep-25', modifiedDate: '08-Sep-25', previousWork: 'Worked at GlobalTech as Product Lead', education: 'B.Tech', functionalArea: 'Product Management', industry: 'E-commerce', email: 'sneha.m@example.com', phone: '+919876541234', relevance: { functionalArea: true, jobRole: false, industry: true, experience: true, ctc: true, location: true } },
        { id: 9, initials: 'AA', name: 'Ankita Arora', profile: 'Working Professional', experience: '2.0 Years', ctc: '450000 PA', location: 'Delhi', noticePeriod: '15 Days', job: 'Content Writer', status: 'suitable', lastActive: '08-Sep-25', modifiedDate: '07-Sep-25', previousWork: 'Freelance writer for various firms', education: 'B.A.', functionalArea: 'Content Writing', industry: 'Media & Entertainment', email: 'ankita.a@example.com', phone: '+919999888877', relevance: { functionalArea: true, jobRole: true, industry: true, experience: true, ctc: true, location: true } },
        { id: 10, initials: 'RJ', name: 'Rajiv Jain', profile: 'Working Professional', experience: '6.5 Years', ctc: '1200000 PA', location: 'Bangalore', noticePeriod: 'Immediate', job: 'IT Project Manager', status: 'suitable', lastActive: '07-Sep-25', modifiedDate: '06-Sep-25', previousWork: 'Managed projects at a consulting firm.', education: 'M.Tech', functionalArea: 'Project Management', industry: 'IT Services', email: 'rajiv.j@example.com', phone: '+918001122334', relevance: { functionalArea: true, jobRole: true, industry: true, experience: true, ctc: true, location: true } },
        { id: 11, initials: 'KP', name: 'Kavita Pandey', profile: 'Working Professional', experience: '4.0 Years', ctc: '700000 PA', location: 'Hyderabad', noticePeriod: '30 Days', job: 'UI/UX Designer', status: 'on-hold', lastActive: '06-Sep-25', modifiedDate: '05-Sep-25', previousWork: 'Worked at DesignHub as a UI Designer', education: 'B.Des', functionalArea: 'Design', industry: 'IT Services', email: 'kavita.p@example.com', phone: '+919456789012', relevance: { functionalArea: true, jobRole: true, industry: true, experience: true, ctc: true, location: true } },
        { id: 12, initials: 'PS', name: 'Pankaj Singh', profile: 'Working Professional', experience: '8.0 Years', ctc: '1800000 PA', location: 'Mumbai', noticePeriod: '60 Days', job: 'Financial Analyst', status: 'not-suitable', lastActive: '05-Sep-25', modifiedDate: '04-Sep-25', previousWork: 'Senior Analyst at a banking firm', education: 'MBA Finance', functionalArea: 'Finance', industry: 'Banking', email: 'pankaj.s@example.com', phone: '+919789012345', relevance: { functionalArea: true, jobRole: true, industry: true, experience: true, ctc: true, location: true } },
        { id: 13, initials: 'NG', name: 'Neha Gupta', profile: 'Fresher', experience: '0 Years', ctc: '0/-', location: 'Pune', noticePeriod: 'Immediate', job: 'Marketing Intern', status: 'suitable', lastActive: '04-Sep-25', modifiedDate: '03-Sep-25', previousWork: null, education: 'BBA', functionalArea: 'Marketing', industry: 'Advertising', email: 'neha.g@example.com', phone: '+919654321098', relevance: { functionalArea: true, jobRole: true, industry: true, experience: true, ctc: false, location: true } },
        { id: 14, initials: 'RK', name: 'Rahul Kumar', profile: 'Working Professional', experience: '3.5 Years', ctc: '600000 PA', location: 'Chennai', noticePeriod: '30 Days', job: 'Operations Manager', status: 'suitable', lastActive: '03-Sep-25', modifiedDate: '02-Sep-25', previousWork: 'Worked at LogiCorp as Operations Lead', education: 'BBA', functionalArea: 'Operations', industry: 'Logistics', email: 'rahul.k@example.com', phone: '+919876123456', relevance: { functionalArea: true, jobRole: true, industry: true, experience: true, ctc: true, location: true } },
        { id: 15, initials: 'SG', name: 'Shalini Gupta', profile: 'Working Professional', experience: '2.0 Years', ctc: '400000 PA', location: 'Ahmedabad', noticePeriod: '15 Days', job: 'Customer Service Executive', status: 'on-hold', lastActive: '02-Sep-25', modifiedDate: '01-Sep-25', previousWork: 'Worked at ServicePro as Customer Support', education: 'B.Com', functionalArea: 'Customer Service', industry: 'BPO', email: 'shalini.g@example.com', phone: '+919012987654', relevance: { functionalArea: true, jobRole: true, industry: true, experience: true, ctc: true, location: true } },
        { id: 16, initials: 'AK', name: 'Arjun Kapoor', profile: 'Working Professional', experience: '5.0 Years', ctc: '1100000 PA', location: 'Lucknow', noticePeriod: '60 Days', job: 'Data Scientist', status: 'suitable', lastActive: '01-Sep-25', modifiedDate: '31-Aug-25', previousWork: 'Worked at DataTech as Data Analyst', education: 'M.Sc. Data Science', functionalArea: 'Data Science', industry: 'Technology', email: 'arjun.k@example.com', phone: '+919876456123', relevance: { functionalArea: true, jobRole: true, industry: true, experience: true, ctc: true, location: true } }
    ];

    let currentPage = 1;
    let itemsPerPage = parseInt(showPerPageSelect.value);
    let currentStatus = 'all';
    let filters = {
        // ... (Existing filters object remains here) ...
        keywords: '',
        experience: [],
        location: [],
        noticePeriod: [],
        functionalArea: [],
        industry: [],
        education: [],
        profile: [],
        ctcMin: 0,
        ctcMax: 2000000,
    };

    // ... (Existing filter/pagination event listeners remain here) ...

    // Toggle sidebar on mobile
    sidebarToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        filterSidebar.classList.toggle('active');
    });

    // Close filters when clicking outside on mobile
    document.body.addEventListener('click', (e) => {
        if (!e.target.closest('.filter-sidebar') && filterSidebar.classList.contains('active')) {
            filterSidebar.classList.remove('active');
        }
    });

    // Toggle filter sections
    filterHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.filter-expand-icon');
            content.classList.toggle('expanded');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
    });

    // Handle checkbox filters
    const checkboxGroups = ['experience', 'location', 'noticePeriod', 'functionalArea', 'industry', 'education', 'profile'];
    checkboxGroups.forEach(group => {
        document.querySelectorAll(`input[name="${group}"]`).forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                filters[group] = Array.from(document.querySelectorAll(`input[name="${group}"]:checked`)).map(cb => cb.value);
                currentPage = 1;
                updateCandidateList();
            });
        });
    });

    // Handle CTC range slider
    ctcMinInput.addEventListener('input', () => {
        let minVal = parseInt(ctcMinInput.value);
        let maxVal = parseInt(ctcMaxInput.value);
        if (minVal > maxVal) {
            minVal = maxVal;
            ctcMinInput.value = minVal;
        }
        filters.ctcMin = minVal;
        ctcMinValue.textContent = minVal.toLocaleString();
        currentPage = 1;
        updateCandidateList();
    });

    ctcMaxInput.addEventListener('input', () => {
        let minVal = parseInt(ctcMinInput.value);
        let maxVal = parseInt(ctcMaxInput.value);
        if (maxVal < minVal) {
            maxVal = minVal;
            ctcMaxInput.value = maxVal;
        }
        filters.ctcMax = maxVal;
        ctcMaxValue.textContent = maxVal.toLocaleString();
        currentPage = 1;
        updateCandidateList();
    });

    // Handle input and select filters
    keywordsInput.addEventListener('input', () => {
        filters.keywords = keywordsInput.value.toLowerCase();
        currentPage = 1;
        updateCandidateList();
    });

    showPerPageSelect.addEventListener('change', () => {
        itemsPerPage = parseInt(showPerPageSelect.value);
        currentPage = 1;
        updateCandidateList();
    });

    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updateCandidateList();
        }
    });

    nextPageBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(getFilteredApplications().length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            updateCandidateList();
        }
    });

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentStatus = button.dataset.status;
            currentPage = 1;
            updateCandidateList();
        });
    });

    // NEW FUNCTION: Calculates counts and updates the tab buttons
    function updateTabCounts(allApplications) {
        // We calculate counts based on ALL applications, not just the filtered subset,
        // so the user sees the total number of candidates in each status.
        const counts = allApplications.reduce((acc, app) => {
            acc[app.status] = (acc[app.status] || 0) + 1;
            acc['all'] = (acc['all'] || 0) + 1;
            return acc;
        }, {});

        document.getElementById('count-all').textContent = counts['all'] || 0;
        document.getElementById('count-suitable').textContent = counts['suitable'] || 0;
        document.getElementById('count-on-hold').textContent = counts['on-hold'] || 0;
        document.getElementById('count-not-suitable').textContent = counts['not-suitable'] || 0;
    }

    // Existing getFilteredApplications function remains the same
    function getFilteredApplications() {
        return applicationsData
            .filter(app => {
                if (currentStatus !== 'all' && app.status !== currentStatus) return false;
                if (filters.keywords && !(app.name && app.name.toLowerCase().includes(filters.keywords)) && !(app.job && app.job.toLowerCase().includes(filters.keywords))) return false;
                if (filters.experience.length && !filters.experience.some(exp => {
                    const expYears = parseFloat(app.experience) || 0;
                    if (exp === '0') return expYears === 0;
                    if (exp === '1-3') return expYears >= 1 && expYears <= 3;
                    if (exp === '3-5') return expYears > 3 && expYears <= 5;
                    if (exp === '5+') return expYears > 5;
                    return false;
                })) return false;
                if (filters.location.length && !(app.location && filters.location.includes(app.location))) return false;
                if (filters.noticePeriod.length && !(app.noticePeriod && filters.noticePeriod.includes(app.noticePeriod))) return false;
                if (filters.functionalArea.length && !(app.functionalArea && filters.functionalArea.includes(app.functionalArea))) return false;
                if (filters.industry.length && !(app.industry && filters.industry.includes(app.industry))) return false;
                if (filters.education.length && !(app.education && filters.education.includes(app.education))) return false;
                if (filters.profile.length && !(app.profile && filters.profile.includes(app.profile))) return false;
                const ctc = parseInt(app.ctc) || 0;
                if (ctc < filters.ctcMin || ctc > filters.ctcMax) return false;
                return true;
            })
            .sort((a, b) => {
                return new Date(b.lastActive) - new Date(a.lastActive);
            });
    }

    function renderRelevanceBadge(label, isMatch) {
        const className = isMatch ? 'match' : 'no-match';
        return `
            <span class="relevance-badge ${className}">
                <i class="fas fa-${isMatch ? 'check' : 'times'}-circle"></i> ${label}
            </span>
        `;
    }

    function updateCandidateList() {
        const filteredApplications = getFilteredApplications();
        const totalApplications = filteredApplications.length;
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedApplications = filteredApplications.slice(start, end);

        // 💥 CALL NEW FUNCTION to update counts
        updateTabCounts(applicationsData); 

        candidateListContainer.innerHTML = '';
        if (paginatedApplications.length === 0) {
            candidateListContainer.innerHTML = `<div class="text-center py-8 text-gray-500">No candidates found matching the selected filters.</div>`;
        } else {
            paginatedApplications.forEach(app => {
                const card = document.createElement('div');
                card.className = 'candidate-card';
                card.dataset.id = app.id; 
                card.innerHTML = `
                    <div class="candidate-card-layout">
                        <div class="candidate-info">
                            <div class="card-header">
                                <div class="candidate-summary">
                                    <div class="candidate-avatar-frame">${app.initials}</div>
                                    <div class="candidate-name">
                                        <h2>${app.name}</h2>
                                        <p>${app.profile}</p>
                                    </div>
                                </div>
                                <div class="job-info">
                                    <p>Applied for: ${app.job}</p>
                                    <p>Modified: ${app.modifiedDate}</p>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="candidate-details">
                                    <div class="details-item"><i class="fas fa-briefcase"></i> ${app.experience}</div>
                                    <div class="details-item"><i class="fas fa-rupee-sign"></i> ${app.ctc}</div>
                                    <div class="details-item"><i class="fas fa-map-marker-alt"></i> ${app.location}</div>
                                    <div class="details-item"><i class="fas fa-clock"></i> ${app.noticePeriod}</div>
                                </div>
                                <div class="additional-details">
                                    ${app.previousWork ? `<span>Previous Work: ${app.previousWork}</span>` : ''}
                                    ${app.education ? `<span>Education: ${app.education}</span>` : ''}
                                    ${app.functionalArea ? `<span>Functional Area: ${app.functionalArea}</span>` : ''}
                                    ${app.industry ? `<span>Industry: ${app.industry}</span>` : ''}
                                </div>
                                <div class="relevance-matrix">
                                    <h3 class="relevance-header">Relevance Matrix</h3>
                                    <div class="relevance-badges">
                                        ${renderRelevanceBadge('Functional Area', app.relevance.functionalArea)}
                                        ${renderRelevanceBadge('Job Role', app.relevance.jobRole)}
                                        ${renderRelevanceBadge('Industry', app.relevance.industry)}
                                        ${renderRelevanceBadge('Experience', app.relevance.experience)}
                                        ${renderRelevanceBadge('CTC', app.relevance.ctc)}
                                        ${renderRelevanceBadge('Location', app.relevance.location)}
                                    </div>
                                </div>
                            </div>
                            <div class="card-bottom-actions">
                                <div class="left-action-buttons">
                                    <button class="status-btn shortlist" data-id="${app.id}" data-status="suitable">Shortlist</button>
                                    <button class="status-btn on-hold" data-id="${app.id}" data-status="on-hold">On Hold</button>
                                    <button class="status-btn not-suitable" data-id="${app.id}" data-status="not-suitable">Not Suitable</button>
                                </div>
                                <div class="recruiter-actions">
                                    <button class="recruiter-action-btn">Actions <i class="fas fa-chevron-up"></i></button>
                                    <div class="recruiter-dropdown">
                                        <a href="#" class="recruiter-dropdown-link" data-action="view-resume">View Resume</a>
                                        <a href="#" class="recruiter-dropdown-link" data-action="schedule-interview">Schedule Interview</a>
                                        <a href="#" class="recruiter-dropdown-link" data-action="add-note">Add Note</a>
                                        <a href="#" class="recruiter-dropdown-link" data-action="download-resume">Download Resume</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="contact-vertical-bar">
                            <a href="mailto:${app.email}"><i class="fas fa-envelope"></i> Email</a>
                            <a href="tel:${app.phone}"><i class="fas fa-phone"></i> Call</a>
                            <a href="https://wa.me/${app.phone}" target="_blank"><i class="fab fa-whatsapp"></i> Chat</a>
                        </div>
                    </div>
                `;
                candidateListContainer.appendChild(card);
            });
        }

        // Update pagination
        // ... (Existing pagination update logic remains here) ...
        const totalPages = Math.ceil(totalApplications / itemsPerPage);
        prevPageBtn.classList.toggle('disabled', currentPage === 1);
        nextPageBtn.classList.toggle('disabled', currentPage === totalPages || totalPages === 0);
        pageNumbersContainer.innerHTML = '';
        const maxPagesToShow = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
        if (endPage - startPage + 1 < maxPagesToShow) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }
        for (let i = startPage; i <= endPage; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = `page-btn-sm ${i === currentPage ? 'active' : ''}`;
            pageBtn.textContent = i;
            pageBtn.addEventListener('click', () => {
                currentPage = i;
                updateCandidateList();
            });
            pageNumbersContainer.appendChild(pageBtn);
        }
        
        // FIX: Re-attach event listeners after redrawing the list
        attachCardEventListeners();
    }

    // Function to attach all listeners to dynamic elements (remains the same)
    function attachCardEventListeners() {
         // Add event listeners for status buttons
        document.querySelectorAll('.status-btn').forEach(button => {
            button.addEventListener('click', () => {
                const id = parseInt(button.dataset.id);
                const status = button.dataset.status;
                const app = applicationsData.find(a => a.id === id);
                if (app) {
                    app.status = status; 
                    updateCandidateList(); 
                }
            });
        });

        // Add event listeners for dropdown buttons
        document.querySelectorAll('.recruiter-action-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const dropdown = button.nextElementSibling;
                const isVisible = dropdown.style.display === 'flex';
                // Close other open dropdowns
                document.querySelectorAll('.recruiter-dropdown').forEach(d => {
                    if (d !== dropdown) {
                        d.style.display = 'none';
                    }
                });
                // Toggle current dropdown
                dropdown.style.display = isVisible ? 'none' : 'flex';
            });
        });

        document.querySelectorAll('.recruiter-dropdown-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const action = e.target.textContent;
                const card = e.target.closest('.candidate-card');
                const candidateId = card ? card.dataset.id : 'N/A';
                alert(`Recruiter action '${action}' triggered for candidate ID: ${candidateId}.`);
                e.target.closest('.recruiter-dropdown').style.display = 'none';
            });
        });
    }

    // Initial render
    updateCandidateList();
});