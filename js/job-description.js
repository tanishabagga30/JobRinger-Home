document.addEventListener('DOMContentLoaded', function () {
    initJobDescription();
});

function initJobDescription() {
    console.log("Job description page initialized");

    // Handle back button
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.location.href = 'jobPage.html';
        });
    }

    // Get job ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = urlParams.get('id') || '1'; // Default to job 1 for demo

    // Mock jobs data
    const mockJobs = [
        {
            id: 1,
            title: "Software Engineer",
            company: "Tech Solutions Inc.",
            location: "Gurgaon",
            salary: "$120k - $150k",
            experience: "5+ Years",
            type: "Full-time",
            logo: "https://placehold.co/40x40/E0E0E0/888888?text=TSI",
            category: "premium",
            descriptionHtml: `
                <p class="mb-4">Develop and maintain scalable web applications using modern frameworks. Join our innovative team and work on cutting-edge projects that impact millions of users worldwide.</p>
                <h3 class="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">Responsibilities</h3>
                <ul class="text-sm text-gray-600 dark:text-gray-300 mb-4 list-disc pl-5">
                    <li>Design and implement new features</li>
                    <li>Optimize application performance</li>
                    <li>Collaborate with cross-functional teams</li>
                    <li>Mentor junior developers</li>
                </ul>
                <h3 class="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">Qualifications</h3>
                <ul class="text-sm text-gray-600 dark:text-gray-300 mb-4 list-disc pl-5">
                    <li>Bachelor's in Computer Science</li>
                    <li>5+ years of software development experience</li>
                    <li>Proficiency in JavaScript and React</li>
                    <li>Experience with cloud platforms</li>
                </ul>
            `
        },
        {
            id: 2,
            title: "Product Manager",
            company: "Innovate Ltd.",
            location: "Remote",
            salary: "$100k - $130k",
            experience: "3+ Years",
            type: "Full-time",
            logo: "https://placehold.co/40x40/D0E0D0/666666?text=IL",
            category: "female",
            descriptionHtml: `
                <p class="mb-4">Lead product development from ideation to launch, ensuring alignment with business goals.</p>
                <h3 class="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">Responsibilities</h3>
                <ul class="text-sm text-gray-600 dark:text-gray-300 mb-4 list-disc pl-5">
                    <li>Define product roadmaps</li>
                    <li>Work with engineering and design teams</li>
                    <li>Analyze market trends</li>
                </ul>
                <h3 class="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">Qualifications</h3>
                <ul class="text-sm text-gray-600 dark:text-gray-300 mb-4 list-disc pl-5">
                    <li>Bachelor's in Business or related field</li>
                    <li>3+ years in product management</li>
                    <li>Strong analytical skills</li>
                </ul>
            `
        },
        {
            id: 3,
            title: "Country Manager - B2B",
            company: "Hindco",
            location: "Gurgaon", // Assuming a location for the new job
            salary: "Competitive", // Assuming a salary for the new job
            experience: "12+ Years",
            type: "Full-time - Permanent",
            logo: "https://placehold.co/40x40/E0E0E0/888888?text=HC", // Placeholder logo for Hindco
            category: "premium", // Example category
            descriptionHtml: `
                <h3 class="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">Overview</h3>
                <ul class="text-sm text-gray-600 dark:text-gray-300 mb-4 list-disc pl-5">
                    <li>Industry - PHARMACEUTICAL / MEDICAL DEVICES / CRO</li>
                    <li>Functional Area - Sales / Business Development / Client Servicing</li>
                    <li>Job Role - Country Manager - B2B</li>
                    <li>Employment type - Full Time - Permanent</li>
                    <li>Work Mode - In Office</li>
                </ul>
                
                <h3 class="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">Job Description | Role and Responsibilities</h3>
                <ul class="text-sm text-gray-600 dark:text-gray-300 mb-4 list-disc pl-5">
                    <li>Developing and implementing business strategies tailored to the local market, identifying new business opportunities, and driving revenue growth.</li>
                    <li>Creating and executing strategic plans to achieve company goals and objectives within the country.</li>
                    <li>Leading, managing, and developing local teams, fostering a positive and productive work environment.</li>
                    <li>Managing budgets, tracking financial performance, and ensuring profitability within the country.</li>
                    <li>Ensuring compliance with all local laws, regulations, and company policies.</li>
                    <li>Building and maintaining strong relationships with key stakeholders, including clients, partners, and local authorities.</li>
                    <li>Providing regular performance reports to senior management, analyzing market trends, and providing strategic insights.</li>
                    <li>Adapting global strategies to fit the local market and ensuring products and services are effectively localized.</li>
                    <li>Representing the company in public and industry events, building a strong brand presence in the country.</li>
                </ul>
                
                <h3 class="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">Candidate Profile | Who Can Apply</h3>
                <ul class="text-sm text-gray-600 dark:text-gray-300 mb-4 list-disc pl-5">
                    <li>Bachelor's / Master's degree in business administration, management, or a related field with 12+ years experience in sales / business development.</li>
                    <li>Ability to lead and motivate teams, make strategic decisions, and manage complex operations.</li>
                    <li>Ability to develop and implement effective business strategies.</li>
                    <li>Excellent verbal and written communication skills, with the ability to communicate effectively with diverse audiences.</li>
                    <li>Ability to analyze market trends, financial data, and performance reports.</li>
                    <li>Ability to work effectively with people from diverse cultural backgrounds.</li>
                </ul>
                
                <h3 class="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">Education</h3>
                <ul class="text-sm text-gray-600 dark:text-gray-300 mb-4 list-disc pl-5">
                    <li>Any Graduate - Any Specialization</li>
                    <li>Any Post Graduate - Any Specialization</li>
                    <li>Any Doctorate - Any Specialization</li>
                </ul>
                
                <h3 class="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">Job Related Keywords</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">Sales, Business Development, Marketing, Sales Strategy, Sales Operations, B2B Sales, International Sales, Business Strategy</p>
                
                <h3 class="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">About Employer</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-4"><a href="http://www.hindco.com/" target="_blank" class="text-indigo-600 hover:underline">View Employer Profile http://www.hindco.com/</a></p>
                
                <h3 class="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">Contact Details</h3>
                <ul class="text-sm text-gray-600 dark:text-gray-300 mb-4 list-disc pl-5">
                    <li>resume@hindco.com</li>
                </ul>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">Candidate Can Connect Email Call WhatsApp SMS</p>
            `
        }
    ];

    // Find job by ID
    const job = mockJobs.find(j => j.id === parseInt(jobId)) || mockJobs[0];
    const cardContainer = document.getElementById('job-card-container');
    const jobDetailsContent = document.getElementById('job-details-content');


    if (!job) {
        cardContainer.innerHTML = `
            <div class="text-center py-10">
                <i class="fas fa-exclamation-circle text-3xl text-red-600 dark:text-red-300"></i>
                <p class="mt-2 text-gray-500 dark:text-gray-300">Job not found</p>
            </div>
        `;
        return;
    }

    // Apply category-specific styling
    if (job.category === 'premium') {
        cardContainer.classList.add('premium-job');
    } else if (job.category === 'female') {
        cardContainer.classList.add('female-job');
    }

    // Populate job details
    document.getElementById('job-logo').src = job.logo;
    document.getElementById('job-logo').alt = `${job.company} Logo`;
    document.getElementById('job-title').textContent = job.title;
    document.getElementById('job-company').textContent = job.company;
    document.getElementById('job-location').innerHTML = `<i class="fas fa-map-marker-alt mr-1"></i>${job.location}`;
    document.getElementById('job-salary').innerHTML = `<i class="fas fa-dollar-sign mr-1"></i>${job.salary}`;
    document.getElementById('job-experience').innerHTML = `<i class="fas fa-briefcase mr-1"></i>${job.experience}`;
    document.getElementById('job-type').innerHTML = `<i class="fas fa-clock mr-1"></i>${job.type}`;
    jobDetailsContent.innerHTML = job.descriptionHtml;


    // Handle PDF viewer
    const viewJdBtn = document.getElementById('view-jd-btn');
    const pdfViewer = document.getElementById('pdf-viewer');
    const closePdfBtn = document.getElementById('close-pdf-btn');
    const pdfFrame = document.getElementById('pdf-frame');

    viewJdBtn.addEventListener('click', () => {
        // For demo purposes, using a sample PDF
        pdfFrame.src = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
        pdfViewer.style.display = 'block';
        pdfViewer.scrollIntoView({ behavior: 'smooth' });
    });

    closePdfBtn.addEventListener('click', () => {
        pdfViewer.style.display = 'none';
        pdfFrame.src = '';
    });

    // Handle similar jobs toggle
    const similarJobsToggle = document.getElementById('similar-jobs-toggle');
    const similarJobsContent = document.getElementById('similar-jobs-content');
    const similarJobsList = document.getElementById('similar-jobs-list');

    similarJobsToggle.addEventListener('change', () => {
        if (similarJobsToggle.checked) {
            similarJobsContent.style.display = 'block';
            alert('Similar jobs recommendations enabled!');
            
            // Generate similar jobs (excluding the current job)
            const similarJobs = mockJobs.filter(j => j.id !== job.id).slice(0, 3); // Get top 3 similar jobs
            similarJobsList.innerHTML = similarJobs.map(similarJob => `
                <div class="p-2 bg-white dark:bg-gray-600 rounded border border-gray-200 dark:border-gray-500">
                    <div class="flex items-center gap-2">
                        <img src="${similarJob.logo}" alt="${similarJob.company}" class="w-6 h-6 rounded">
                        <div>
                            <h5 class="font-medium text-sm text-gray-800 dark:text-gray-100">${similarJob.title}</h5>
                            <p class="text-xs text-gray-600 dark:text-gray-300">${similarJob.company}</p>
                        </div>
                    </div>
                </div>
            `).join('');
        } else {
            similarJobsContent.style.display = 'none';
            alert('Similar jobs recommendations disabled!');
        }
    });

    // Handle bookmark button
    const bookmarkBtn = document.querySelector('.bookmark-btn');
    bookmarkBtn.addEventListener('click', () => {
        const icon = bookmarkBtn.querySelector('i');
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            bookmarkBtn.classList.add('text-yellow-400');
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            bookmarkBtn.classList.remove('text-yellow-400');
        }
    });

    // Handle share button
    const shareBtn = document.querySelector('.share-btn');
    shareBtn.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: job.title,
                text: `Check out this job: ${job.title} at ${job.company}`,
                url: window.location.href
            });
        } else {
            // Fallback for browsers without native sharing
            navigator.clipboard.writeText(window.location.href);
            alert('Job link copied to clipboard!');
        }
    });

    // Handle apply now buttons
    const applyNowTopBtn = document.querySelector('.job-card .action-btn');
    const applyNowBottomBtn = document.getElementById('apply-now-bottom-btn');

    const handleApplyNowClick = () => {
        alert(`Applying for: ${job.title} at ${job.company}`);
        // In a real application, you'd redirect to an application form or send data.
    };

    if (applyNowTopBtn) {
        applyNowTopBtn.addEventListener('click', handleApplyNowClick);
    }
    if (applyNowBottomBtn) {
        applyNowBottomBtn.addEventListener('click', handleApplyNowClick);
    }
}