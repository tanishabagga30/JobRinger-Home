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
    const jobId = urlParams.get('id');

    // Mock jobs data (same as jobs.js)
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
            description: "Develop and maintain scalable web applications using modern frameworks.",
            responsibilities: ["Design and implement new features", "Optimize application performance", "Collaborate with cross-functional teams"],
            qualifications: ["Bachelor's in Computer Science", "5+ years of software development experience", "Proficiency in JavaScript and React"]
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
        },
        {
            id: 3,
            title: "UX Designer",
            company: "Creative Agency",
            location: "Bangalore",
            salary: "$70k - $90k",
            experience: "2+ Years",
            type: "Part-time",
            logo: "https://placehold.co/40x40/E8D0F0/9977AA?text=CA",
            category: "design",
            description: "Create user-centered designs for web and mobile applications.",
            responsibilities: ["Conduct user research", "Design wireframes and prototypes", "Collaborate with developers"],
            qualifications: ["Degree in Design or related field", "2+ years in UX/UI design", "Proficiency in Figma or Sketch"]
        },
        {
            id: 4,
            title: "Marketing Specialist",
            company: "Global Brands",
            location: "Pune",
            salary: "$60k - $80k",
            experience: "1+ Years",
            type: "Full-time",
            logo: "https://placehold.co/40x40/F0F0D0/AAAA66?text=GB",
            category: "marketing",
            description: "Develop and execute marketing campaigns to drive brand awareness.",
            responsibilities: ["Plan social media campaigns", "Analyze campaign performance", "Coordinate with sales team"],
            qualifications: ["Bachelor's in Marketing", "1+ years in marketing", "Knowledge of SEO and analytics"]
        },
        {
            id: 5,
            title: "Data Analyst",
            company: "Analytics Corp.",
            location: "Noida",
            salary: "$85k - $110k",
            experience: "2+ Years",
            type: "Full-time",
            logo: "https://placehold.co/40x40/D0F0F0/66AAAA?text=AC",
            category: "analytics",
            description: "Analyze data to provide actionable insights for business decisions.",
            responsibilities: ["Create data visualizations", "Perform statistical analysis", "Present findings to stakeholders"],
            qualifications: ["Degree in Statistics or related field", "2+ years in data analysis", "Proficiency in Python or R"]
        },
        {
            id: 6,
            title: "Customer Support Rep",
            company: "Service Hub",
            location: "Remote",
            salary: "$40k - $55k",
            experience: "0-1 Year",
            type: "Full-time",
            logo: "https://placehold.co/40x40/F0E8D0/AA9966?text=SH",
            category: "fresher",
            description: "Provide excellent customer support via phone, email, and chat.",
            responsibilities: ["Resolve customer queries", "Document support cases", "Escalate complex issues"],
            qualifications: ["High school diploma or equivalent", "0-1 year in customer service", "Strong communication skills"]
        },
        {
            id: 7,
            title: "DevOps Engineer",
            company: "Cloud Innovators",
            location: "Gurgaon",
            salary: "$130k - $160k",
            experience: "4+ Years",
            type: "Full-time",
            logo: "https://placehold.co/40x40/E0F0E0/88AA88?text=CI",
            category: "premium",
            description: "Manage cloud infrastructure and CI/CD pipelines for scalable applications.",
            responsibilities: ["Deploy and monitor cloud services", "Automate infrastructure provisioning", "Ensure system reliability"],
            qualifications: ["Bachelor's in Computer Science", "4+ years in DevOps", "Expertise in AWS and Docker"]
        },
        {
            id: 8,
            title: "Graphic Designer",
            company: "Design Studio Pro",
            location: "Remote",
            salary: "$50k - $75k",
            experience: "2+ Years",
            type: "Part-time",
            logo: "https://placehold.co/40x40/F8D8E8/AA88AA?text=DSP",
            category: "design",
            description: "Design visually appealing graphics for digital and print media.",
            responsibilities: ["Create marketing collateral", "Collaborate with creative team", "Maintain brand consistency"],
            qualifications: ["Degree in Graphic Design", "2+ years in design", "Proficiency in Adobe Creative Suite"]
        }
    ];

    // Find job by ID
    const job = mockJobs.find(j => j.id === parseInt(jobId));
    const container = document.getElementById('job-description-container');

    if (!job) {
        container.innerHTML = `
            <div class="text-center py-10">
                <i class="fas fa-exclamation-circle text-3xl text-red-600 dark:text-red-300"></i>
                <p class="mt-2 text-gray-500 dark:text-gray-300">Job not found</p>
            </div>
        `;
        return;
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
}

document.addEventListener('DOMContentLoaded', function () {
    initJobDescription();
});