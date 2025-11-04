/* REPORTS.JS: Handles data, pagination, tab switching, and automatic theme detection. */
document.addEventListener('DOMContentLoaded', () => {
    // --- REPORT LOGIC ---
    const reportDataTable = document.getElementById('report-data-table');
    const reportNavList = document.getElementById('report-nav-list');
    const currentReportTitle = document.getElementById('current-report-title');
    const itemsPerPageSelect = document.getElementById('items-per-page');
    const paginationInfo = document.getElementById('pagination-info');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const pageNumbersContainer = document.getElementById('page-numbers');

    let currentReport = 'access-login';
    let currentPage = 1;
    let itemsPerPage = parseInt(itemsPerPageSelect.value);

    // --- MOCK DATA ---
    const mockData = {
        'access-login': {
            title: 'Access/Login',
            headers: ['Sub User', 'Login Date', 'IP Address'],
            data: [
                { 'Sub User': 'User A', 'Login Date': '2025-10-18 10:30', 'IP Address': '192.168.1.100' },
                { 'Sub User': 'User B', 'Login Date': '2025-10-18 09:15', 'IP Address': '10.0.0.5' },
                { 'Sub User': 'User A', 'Login Date': '2025-10-17 17:45', 'IP Address': '192.168.1.100' },
                { 'Sub User': 'User C', 'Login Date': '2025-10-17 11:00', 'IP Address': '172.16.2.20' },
                { 'Sub User': 'User B', 'Login Date': '2025-10-16 08:00', 'IP Address': '10.0.0.5' },
                { 'Sub User': 'User A', 'Login Date': '2025-10-15 15:00', 'IP Address': '192.168.1.100' },
                { 'Sub User': 'User D', 'Login Date': '2025-10-15 10:00', 'IP Address': '45.32.1.8' },
                { 'Sub User': 'User E', 'Login Date': '2025-10-14 14:00', 'IP Address': '1.1.1.1' },
                { 'Sub User': 'User F', 'Login Date': '2025-10-13 13:00', 'IP Address': '8.8.8.8' },
                { 'Sub User': 'User A', 'Login Date': '2025-10-12 12:00', 'IP Address': '192.168.1.100' },
                { 'Sub User': 'User G', 'Login Date': '2025-10-12 11:00', 'IP Address': '10.10.10.1' },
                { 'Sub User': 'User H', 'Login Date': '2025-10-11 09:00', 'IP Address': '203.0.113.4' },
                ...Array(10).fill(null).map((_, i) => ({
                    'Sub User': `TestUser${i + 1}`,
                    'Login Date': `2025-10-${i + 1} 0${i % 8}:00`,
                    'IP Address': `55.55.55.${i + 1}`
                }))
            ],
        },
        'usage': {
            title: 'Usage Summary',
            headers: ['Package', 'Subscription Date', 'Amount', 'Details'],
            data: [
                { 'Package': 'New Package', 'Subscription Date': '23rd Apr 2022 - 23rd May 2022', 'Amount': 'Rs. 4500', 'Details': '30 Job Posting (21 Mass Mail balanced), 300 Resume Download (300 Mass Mail balanced), 100 Excel Download (100 Mass Mail balanced), 30 Feature Job (21 Mass Mail balanced), 30 Feature Employer (Utilized), 30 day Unlimited Database Search (Expired)' },
                { 'Package': 'New Package', 'Subscription Date': '26th May 2022 - 25th Aug 2025', 'Amount': 'Rs. 4500', 'Details': '1000 Job Posting (Utilized), 3000 Resume Download (2432 Mass Mail balanced), 10000 Email (10000 Mass Mail balanced), 3000 Excel Download (2979 Mass Mail balanced), 1000 Feature Job (729 Mass Mail balanced), 60 Feature Employer (Utilized), 60 day Unlimited Database Search (Expired)' },
                { 'Package': 'Standard Plan', 'Subscription Date': '15th Jul 2022 - 04th Nov 2025', 'Amount': 'Rs. 4500', 'Details': 'No specific limits defined.' },
                { 'Package': 'Premium Feature', 'Subscription Date': '27th Oct 2022 - 26th Dec 2022', 'Amount': 'Rs. 4500', 'Details': '1000 Feature Job (963 Mass Mail balanced)' },
                { 'Package': 'New Package', 'Subscription Date': '05th Aug 2023 - 31st Dec 2026', 'Amount': 'Rs. 4500', 'Details': '10 Resume Download (Utilized)' },
            ],
        },
        'status-change': {
            title: 'Job Status Change',
            headers: ['Job Title', 'Status', 'Change Date', 'Posted By'],
            data: [
                {
                    'Job Title': 'Social Media Marketing Internship',
                    'Status': 'Active / Published',
                    'Change Date': '13-Oct-2025',
                    'Posted By': 'Marketing Team - Mumbai'
                },
                {
                    'Job Title': 'IT Fresher',
                    'Status': 'Active / Published',
                    'Change Date': '25-Sep-2025',
                    'Posted By': 'HR Department'
                },
                {
                    'Job Title': 'iOS Developer',
                    'Status': 'Active / Published',
                    'Change Date': '17-Sep-2025',
                    'Posted By': 'Mobile Dev Team'
                },
                {
                    'Job Title': 'Corporate Affairs Manager | Mumbai',
                    'Status': 'Active / Published',
                    'Change Date': '17-Sep-2025',
                    'Posted By': 'Corporate Affairs'
                },
                {
                    'Job Title': 'Human Resources Executive',
                    'Status': 'Active / Published',
                    'Change Date': '3-Sep-2025',
                    'Posted By': 'HR Department'
                },
                {
                    'Job Title': 'Freelance Graphic Designer | WFH',
                    'Status': 'Active / Published',
                    'Change Date': '14-Aug-2025',
                    'Posted By': 'Creative Team'
                },
                {
                    'Job Title': 'Export Marketing Specialist',
                    'Status': 'Active / Published',
                    'Change Date': '28-Jul-2025',
                    'Posted By': 'Export Division'
                },
                {
                    'Job Title': 'Alepo Technologies - Java/J2EE Lead Developer',
                    'Status': 'Active / Published',
                    'Change Date': '21-Jul-2025',
                    'Posted By': 'Tech Team - Bangalore'
                },
                ...Array(15).fill(null).map((_, i) => ({
                    'Job Title': `Test Job ${i + 1}`,
                    'Status': i % 3 === 0 ? 'Closed' : 'Active / Published',
                    'Change Date': `2025-0${(i % 6) + 1}-0${(i % 10) + 1}`,
                    'Posted By': `Team ${['A', 'B', 'C', 'D'][i % 4]} - ${['Mumbai', 'Delhi', 'Bangalore', 'Chennai'][i % 4]}`
                }))
            ],
        },
        'sub-users': {
            title: 'Sub-Users',
            headers: ['Sub User', 'Search', 'XL Download', 'Resume Download', 'Job Posted', 'Mass Mail Sent', 'Mass SMS Sent'],
            data: [
                { 'Sub User': 'Trupti Gaikwad', 'Search': '--', 'XL Download': '0', 'Resume Download': '0', 'Job Posted': '4', 'Mass Mail Sent': '10', 'Mass SMS Sent': '0' },
                { 'Sub User': 'Yogeeta Rawal', 'Search': '--', 'XL Download': '0', 'Resume Download': '0', 'Job Posted': '2', 'Mass Mail Sent': '0', 'Mass SMS Sent': '0' },
                { 'Sub User': 'Anshika Gupta', 'Search': '--', 'XL Download': '0', 'Resume Download': '0', 'Job Posted': '1', 'Mass Mail Sent': '48', 'Mass SMS Sent': '0' },
                { 'Sub User': 'Mansi Agrawal', 'Search': '--', 'XL Download': '0', 'Resume Download': '0', 'Job Posted': '0', 'Mass Mail Sent': '0', 'Mass SMS Sent': '0' },
                { 'Sub User': 'Neha habade', 'Search': '--', 'XL Download': '0', 'Resume Download': '2', 'Job Posted': '47', 'Mass Mail Sent': '0', 'Mass SMS Sent': '0' },
                { 'Sub User': 'Akash Medhi', 'Search': '--', 'XL Download': '0', 'Resume Download': '4', 'Job Posted': '99', 'Mass Mail Sent': '0', 'Mass SMS Sent': '0' },
                ...Array(16).fill(null).map((_, i) => ({
                    'Sub User': `SubUser${i + 1}`,
                    'Search': (i % 5 === 0 ? '5' : '--'),
                    'XL Download': '0',
                    'Resume Download': '1',
                    'Job Posted': `${i * 2}`,
                    'Mass Mail Sent': `${i * 10}`,
                    'Mass SMS Sent': '0'
                }))
            ],
        },
    };

    // --- CORE RENDERING LOGIC ---
    function renderTable() {
        const report = mockData[currentReport];
        if (!report) return;

        // 1. Calculate pagination
        const totalItems = report.data.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        
        currentPage = Math.min(currentPage, totalPages);
        currentPage = Math.max(1, currentPage);

        const start = (currentPage - 1) * itemsPerPage;
        const end = Math.min(start + itemsPerPage, totalItems);
        const slicedData = report.data.slice(start, end);

        // 2. Update metadata
        currentReportTitle.textContent = report.title;
        paginationInfo.textContent = `Showing ${totalItems > 0 ? start + 1 : 0} to ${end} of ${totalItems}`;

        // 3. Build Table Headers
        let html = '<thead><tr>';
        report.headers.forEach(header => {
            html += `<th>${header}</th>`;
        });
        html += '</tr></thead>';

        // 4. Build Table Body
        html += '<tbody>';
        slicedData.forEach(item => {
            html += '<tr class="status-change-row">';
            report.headers.forEach(header => {
                const value = item[header] || '--';
                let cellContent = value;
                
                if (header === 'Details' && value.includes(',')) {
                    const lines = value.split(',').map(line => `<li>${line.trim().replace(/Mass Mail balanced/g, 'bal.')}</li>`).join('');
                    cellContent = `<ul class="list-disc ml-4 text-sm space-y-1">${lines}</ul>`;
                } else if (header === 'Status' && currentReport === 'status-change') {
                    const statusClass = value.toLowerCase().includes('closed') ? 'closed' : 'active';
                    cellContent = `<span class="status ${statusClass}">${value}</span>`;
                } else if (header === 'Posted By' && currentReport === 'status-change') {
                    cellContent = `<span class="posted-by">${value}</span>`;
                }
                
                html += `<td data-label="${header}">${cellContent}</td>`;
            });
            html += '</tr>';
        });
        html += '</tbody>';

        reportDataTable.innerHTML = html;
        renderPaginationControls(totalPages);
    }

    // --- PAGINATION CONTROLS ---
    function renderPaginationControls(totalPages) {
        pageNumbersContainer.innerHTML = '';

        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
        
        // Render pages
        for (let i = startPage; i <= endPage; i++) {
            const btn = document.createElement('button');
            btn.classList.add('page-btn');
            btn.textContent = i;
            if (i === currentPage) {
                btn.classList.add('active');
            }
            btn.addEventListener('click', () => {
                currentPage = i;
                renderTable();
            });
            pageNumbersContainer.appendChild(btn);
        }

        // Update Nav Arrows
        prevPageBtn.classList.toggle('disabled', currentPage === 1);
        nextPageBtn.classList.toggle('disabled', currentPage === totalPages || totalPages === 0);

        prevPageBtn.onclick = () => { if (currentPage > 1) { currentPage--; renderTable(); } };
        nextPageBtn.onclick = () => { if (currentPage < totalPages) { currentPage++; renderTable(); } };
    }

    // --- EVENT HANDLERS ---
    // 1. Report Switching (Top Navigation)
    reportNavList.addEventListener('click', (e) => {
        const item = e.target.closest('.nav-item');
        if (item) {
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            currentReport = item.dataset.report;
            currentPage = 1;
            renderTable();
        }
    });

    // 2. Items Per Page
    itemsPerPageSelect.addEventListener('change', (e) => {
        itemsPerPage = parseInt(e.target.value);
        currentPage = 1;
        renderTable();
    });

    // 3. Download Button (Placeholder)
    document.getElementById('download-excel').addEventListener('click', () => {
        const reportTitle = mockData[currentReport].title;
        alert(`Initiating download for "${reportTitle}"... (In a real application, this would trigger an Excel generation API call.)`);
    });

    // 4. Date Filter (Placeholder: Re-render table when dates change)
    document.getElementById('date-from').addEventListener('change', () => { currentPage = 1; renderTable(); });
    document.getElementById('date-to').addEventListener('change', () => { currentPage = 1; renderTable(); });

    // --- INITIALIZATION ---
    document.body.classList.add('reports-page'); // Ensure reports-page class is applied
    renderTable();
});