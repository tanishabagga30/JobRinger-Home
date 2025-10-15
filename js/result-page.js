document.addEventListener('DOMContentLoaded', () => {
    // Universal component loading is handled by universal.js

    // Sample Data
    const allCandidates = [
        { name: 'Sandeep Adhikary', status: 'Working Professional', experience: '1.10', salary: '321000 PA', location: 'Kolkata', noticePeriod: '45 Days Negotiable', education: 'BHM', jobRoles: 'Management Trainee', functionalArea: 'Hospitality / Hotel / Restaurant / Bar / Night Clubs', industry: 'FOOD, HOSPITALITY, TRAVEL & TOURISM', lastActive: '17-Apr-21' },
        { name: 'Mohammad Shaikh', status: 'Experienced but not Working', experience: '1.1', salary: '192000 PA', location: 'Mumbai', noticePeriod: '30 Days Negotiable', education: 'BCA', jobRoles: 'Management trainee', functionalArea: 'Hospitality / Hotel / Restaurant / Bar / Night Clubs', industry: 'FOOD, HOSPITALITY, TRAVEL & TOURISM', lastActive: '19-Apr-21' },
        { name: 'Ritesh Kumar', status: 'Intern', experience: '1.4', salary: '300000 PA', location: 'Gaya', noticePeriod: 'Immediate', education: 'MBA/PGDM', jobRoles: 'Branch Manager / Head, Cashier / Teller', functionalArea: 'Banking / Credit Cards', industry: 'HR / OD / L&D', lastActive: '08-Feb-23' },
        { name: 'Shifa Rehman', status: 'Working Professional', experience: '1.11', salary: '180000 PA', location: 'Agra', noticePeriod: 'Immediate', education: 'Graduation / Bachelors - Others', jobRoles: 'Attendant, Banquet Manager', functionalArea: 'Packaging Development', industry: 'Textile Design', lastActive: '09-Feb-23' },
        { name: 'Gajender', status: 'Fresher', experience: '1.0', salary: '0/-', location: 'Rudrapur', noticePeriod: 'Above 90 Days', education: 'ITI / Industrial Training Diploma', functionalArea: 'Production / Manufacturing', industry: 'AUTOMOBILE / AUTOMOTIVE', lastActive: '12-Feb-23' },
        { name: 'Amanpreet Sethi', status: 'Fresher', experience: '1.4', salary: '290000 PA', location: 'Mumbai', noticePeriod: 'Immediate', education: 'BCom / BAF / BBI', functionalArea: 'Hospitality / Hotel / Restaurant / Bar / Night Clubs', industry: 'HR, HUMAN RESOURCES', lastActive: '25-Feb-23' },
        { name: 'Shalu Sonkar', status: 'Working Professional', experience: '1.2', salary: '0/-', location: 'Kolkata', noticePeriod: 'Immediate', education: 'BCom / BAF / BBI', jobRoles: 'Guest Relations - Officer / Executive', functionalArea: 'Hospitality / Hotel / Restaurant / Bar / Night Clubs', industry: 'FOOD, HOSPITALITY, TRAVEL & TOURISM', lastActive: '14-Mar-23' },
        { name: 'Narsi Prajapati', status: 'Working Professional', experience: '1.0', salary: '144000 PA', location: 'Karauli', noticePeriod: 'Immediate', education: 'BA', jobRoles: 'Computer Operator / Data Entry Operator', functionalArea: 'Environment / Health / Safety', industry: 'OTHERS', lastActive: '15-Apr-23' },
        { name: 'Sharukh Abbas', status: 'Fresher', experience: '1.1', salary: '180000 PA', location: 'Jaipur', noticePeriod: 'Immediate', jobRoles: 'Cashier / Billing Manager', functionalArea: 'HR / Recruitment', industry: 'AIRLINES / AVIATION', lastActive: '18-Apr-23' },
        { name: 'Aditya Shahi', status: 'Experienced but not Working', experience: '1.6', salary: '180000 PA', location: 'Gorakhpur', noticePeriod: 'Immediate', education: 'MCom', jobRoles: 'Cashier / Teller, Consumer Banking', functionalArea: 'Finance / Accounts', industry: 'BANKING / FINANCIAL SERVICES', lastActive: '22-Apr-23' },
        { name: 'Kunal Dubey', status: 'Experienced but not Working', experience: '1.1', salary: '450000 PA', location: 'Kanpur Nagar', noticePeriod: 'Immediate', education: 'BHM', jobRoles: 'Chef - Chef De Partie', functionalArea: 'Hospitality / Hotel / Restaurant / Bar / Night Clubs', industry: 'FOOD, HOSPITALITY, TRAVEL & TOURISM', lastActive: '05-May-23' },
        { name: 'Md Warsi', status: 'Fresher', experience: '1.6', salary: '400000 PA', location: 'Patna', noticePeriod: 'Immediate', education: 'Higher Secondary (12th)', functionalArea: 'ParaMedical Staff', industry: 'MEDICAL / HEALTHCARE', lastActive: '10-May-23' },
        { name: 'Kislay Satyarthi', status: 'Fresher', experience: '1.0', salary: '0/-', location: 'Bengaluru / Bangalore', noticePeriod: 'Immediate', education: 'BTech/BE', jobRoles: 'Web Developer', functionalArea: 'Banking / Credit Cards', industry: 'IT - Software / Product Development', lastActive: '25-Dec-24' },
        { name: 'Vanshika Maheshwari', status: 'Working Professional', experience: '1.8', salary: '300000 PA', location: 'Gurgaon / Gurugram', noticePeriod: '30 Days', education: 'BTech/BE', jobRoles: 'Other Food & Beverages', functionalArea: 'Hospitality / Hotel / Restaurant / Bar / Night Clubs', industry: 'Food / Processed Foods', lastActive: '17-May-23' },
        { name: 'Prabraj Anand', status: 'Working Professional', experience: '1.0', salary: '240000 PA', location: 'Mumbai', noticePeriod: 'Immediate', education: 'BA', functionalArea: 'Airlines / Reservations', industry: 'Airlines / Aerospace', lastActive: '23-May-23' },
        { name: 'Prasad Kharat', status: 'Working Professional', experience: '1.5', salary: '350000 PA', location: 'Pune', noticePeriod: '30 Days', education: 'Secondary (10th)', functionalArea: 'Hospitality / Hotel / Restaurant / Bar / Night Clubs', industry: 'FOOD, HOSPITALITY, TRAVEL & TOURISM', lastActive: '03-Jun-23' },
        { name: 'Durgesh Lohra', status: 'Working Professional', experience: '1.4', salary: '360000 PA', location: 'Ranchi', noticePeriod: 'Immediate', education: 'BHM', jobRoles: 'assistant manager', functionalArea: 'Hospitality / Hotel / Restaurant / Bar / Night Clubs', industry: 'QSR / Restaurant / Bar', lastActive: '09-Jun-23' },
        { name: 'Ishan Patil', status: 'Working Professional', experience: '1.1', salary: '0/-', location: 'Mumbai', noticePeriod: 'Immediate', education: 'BHM', jobRoles: 'Business analyst', functionalArea: 'Hospitality / Hotel / Restaurant / Bar / Night Clubs', industry: 'Food / Processed Foods', lastActive: '01-Jul-23' },
        { name: 'Ketki Patki', status: 'Working Professional', experience: '1.2', salary: '312000 PA', location: 'Mumbai', noticePeriod: '45 Days', education: 'Secondary (10th)', jobRoles: 'Receptionist', functionalArea: 'Hospitality / Hotel / Restaurant / Bar / Night Clubs', industry: 'OTHERS', lastActive: '16-Jul-23' },
        { name: 'Akshata Pawar', status: 'Working Professional', experience: '1.0', salary: '120000/-', location: 'Pune', noticePeriod: 'Immediate Negotiable', education: 'N/A', jobRoles: 'Other Food & Beverages', functionalArea: 'Hospitality / Hotel / Restaurant / Bar / Night Clubs', industry: 'CHEMICALS / PAINTS', lastActive: '18-Aug-23' },
    ];
    
    const candidateCardsContainer = document.getElementById('candidate-cards-container');
    const paginationContainer = document.getElementById('pagination-container');
    const sortBySelect = document.getElementById('sort-by');
    
    let currentPage = 1;
    const itemsPerPage = 20;

    // Helper function to create candidate card HTML
    const createCandidateCard = (candidate) => {
        const initials = candidate.name.split(' ').map(n => n[0]).join('');
        return `
            <div class="candidate-card">
                <div class="candidate-header">
                    <div class="candidate-initials">${initials}</div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h3 class="candidate-name">${candidate.name}</h3>
                            <span class="status-badge">${candidate.status}</span>
                            <button class="bookmark-btn"><i class="far fa-bookmark"></i></button>
                        </div>
                        <p class="text-sm text-gray-500 dark:text-gray-400">${candidate.jobRoles ? candidate.jobRoles : ''}</p>
                    </div>
                </div>

                <div class="candidate-details">
                    <div><i class="fas fa-history"></i>${candidate.experience} Years</div>
                    <div><i class="fas fa-rupee-sign"></i>${candidate.salary}</div>
                    <div><i class="fas fa-map-marker-alt"></i>${candidate.location}</div>
                </div>

                <div class="candidate-info-list">
                    <div class="info-item"><span class="info-label">Notice Period -</span> ${candidate.noticePeriod}</div>
                    <div class="info-item"><span class="info-label">Education -</span> ${candidate.education}</div>
                    <div class="info-item"><span class="info-label">Functional Area -</span> ${candidate.functionalArea}</div>
                    <div class="info-item"><span class="info-label">Industry -</span> ${candidate.industry}</div>
                </div>

                <div class="candidate-meta flex justify-between items-center">
                    <span class="text-xs">Last Active: ${candidate.lastActive}</span>
                    <span class="text-xs">Modified Date: ${candidate.lastActive}</span>
                </div>
                
                <div class="action-links">
                    <a href="#" class="action-link"><i class="fas fa-envelope"></i>Email</a>
                    <a href="#" class="action-link"><i class="fab fa-whatsapp"></i>Whatsapp</a>
                    <a href="#" class="action-link"><i class="fas fa-eye"></i>View Contact details</a>
                    <a href="#" class="action-link">CV Attached</a>
                </div>
            </div>
        `;
    };

    // Sort candidates
    const sortCandidates = (sortKey) => {
        if (sortKey === 'relevance') {
            // Placeholder for actual relevance sorting logic
            allCandidates.sort((a, b) => {
                const aName = a.name.toLowerCase();
                const bName = b.name.toLowerCase();
                if (aName < bName) return -1;
                if (aName > bName) return 1;
                return 0;
            });
        } else if (sortKey === 'last-active') {
            allCandidates.sort((a, b) => {
                const dateA = new Date(a.lastActive.split('-').reverse().join('-'));
                const dateB = new Date(b.lastActive.split('-').reverse().join('-'));
                return dateB - dateA;
            });
        }
        renderCandidates();
    };

    // Render candidates for the current page
    const renderCandidates = () => {
        candidateCardsContainer.innerHTML = '';
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const candidatesToRender = allCandidates.slice(start, end);
        
        candidatesToRender.forEach(candidate => {
            candidateCardsContainer.innerHTML += createCandidateCard(candidate);
        });
        
        renderPagination();
    };

    // Render pagination controls
    const renderPagination = () => {
        paginationContainer.innerHTML = '';
        const totalPages = Math.ceil(allCandidates.length / itemsPerPage);
        
        // Previous Button
        const prevBtn = document.createElement('button');
        prevBtn.textContent = 'Previous';
        prevBtn.disabled = currentPage === 1;
        prevBtn.addEventListener('click', () => {
            currentPage = Math.max(1, currentPage - 1);
            renderCandidates();
        });
        paginationContainer.appendChild(prevBtn);
        
        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.textContent = i;
            if (i === currentPage) {
                pageBtn.classList.add('active');
            }
            pageBtn.addEventListener('click', () => {
                currentPage = i;
                renderCandidates();
            });
            paginationContainer.appendChild(pageBtn);
        }
        
        // Next Button
        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.addEventListener('click', () => {
            currentPage = Math.min(totalPages, currentPage + 1);
            renderCandidates();
        });
        paginationContainer.appendChild(nextBtn);
    };

    // Event listeners
    sortBySelect.addEventListener('change', (e) => {
        sortCandidates(e.target.value);
    });

    // Initial render
    sortCandidates(sortBySelect.value);
});