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
            description: "Develop and maintain scalable web applications using modern frameworks. Join our innovative team and work on cutting-edge projects that impact millions of users worldwide.",
            responsibilities: ["Design and implement new features", "Optimize application performance", "Collaborate with cross-functional teams", "Mentor junior developers"],
            qualifications: ["Bachelor's in Computer Science", "5+ years of software development experience", "Proficiency in JavaScript and React", "Experience with cloud platforms"]
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
            description: "Lead product development from ideation to launch, ensuring alignment with business goals.",
            responsibilities: ["Define product roadmaps", "Work with engineering and design teams", "Analyze market trends"],
            qualifications: ["Bachelor's in Business or related field", "3+ years in product management", "Strong analytical skills"]
        }
    ];

    // Find job by ID
    const job = mockJobs.find(j => j.id === parseInt(jobId)) || mockJobs[0];
    const cardContainer = document.getElementById('job-card-container');

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
    document.getElementById('job-description').textContent = job.description;
    document.getElementById('job-responsibilities').innerHTML = job.responsibilities.map(resp => `<li>${resp}</li>`).join('');
    document.getElementById('job-qualifications').innerHTML = job.qualifications.map(qual => `<li>${qual}</li>`).join('');

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
            
            // Generate similar jobs
            const similarJobs = mockJobs.filter(j => j.id !== job.id).slice(0, 3);
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
}

document.addEventListener('DOMContentLoaded', function () {
    initJobDescription();
});