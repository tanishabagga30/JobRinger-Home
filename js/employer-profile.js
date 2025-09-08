// Data for job listings - Refined to include more details
const jobsData = [
    { id: 1, title: "Freelance Resume Writer", company: "HINDCO Consulting Services", experience: "3 - 8 Years", locations: ["Mumbai", "India"], salary: "As per industry standards", type: "Freelance", logo: "https://placehold.co/48x48/E0E0E0/888888?text=HCS" },
    { id: 2, title: "Nurse | Fresher", company: "HINDCO Consulting Services", experience: "0 - 5 Years", locations: ["Hissar", "Mysuru / Mysore", "Ladwa", "India"], salary: "₹3-6 LPA", type: "Full-time", logo: "https://placehold.co/48x48/E0E0E0/888888?text=HCS", category: "nursing" },
    { id: 3, title: "Country Manager - Sales | Africa", company: "HINDCO Consulting Services", experience: "12 - 20 Years", locations: ["Gauteng", "South Africa"], salary: "₹50-80 LPA", type: "Full-time", logo: "https://placehold.co/48x48/E0E0E0/888888?text=HCS", category: "sales" },
    { id: 4, title: "Plant Head", company: "HINDCO Consulting Services", experience: "15 - 20 Years", locations: ["Bharuch", "India"], salary: "₹40-60 LPA", type: "Full-time", logo: "https://placehold.co/48x48/E0E0E0/888888?text=HCS", category: "management" },
    { id: 5, title: "Sr. HR Executive", company: "HINDCO Consulting Services", experience: "3 - 8 Years", locations: ["Mumbai", "India"], salary: "₹8-12 LPA", type: "Full-time", logo: "https://placehold.co/48x48/E0E0E0/888888?text=HCS", category: "hr" },
    { id: 6, title: "HR Recruiter | Internship | WFH", company: "HINDCO Consulting Services", experience: "0 - 2 Years", locations: ["Delhi NCR", "Mumbai", "Navi Mumbai / Panvel", "New Delhi", "India"], salary: "₹15k/month", type: "Internship", logo: "https://placehold.co/48x48/E0E0E0/888888?text=HCS", category: "hr" },
    { id: 7, title: "Nurse", company: "HINDCO Consulting Services", experience: "0 - 3 Years", locations: ["Mathura", "Mysuru / Mysore", "India"], salary: "₹4-7 LPA", type: "Full-time", logo: "https://placehold.co/48x48/E0E0E0/888888?text=HCS", category: "nursing" },
    { id: 8, title: "Management Faculty - Online Teaching", company: "HINDCO Consulting Services", experience: "7 - 12 Years", locations: ["Mumbai", "India"], salary: "₹15-25 LPA", type: "Full-time", logo: "https://placehold.co/48x48/E0E0E0/888888?text=HCS", category: "education" },
    { id: 9, title: "Sales | Business Development Intern |WFH", company: "HINDCO Consulting Services", experience: "0 - 2 Years", locations: ["Mumbai", "India"], salary: "₹10k/month", type: "Internship", logo: "https://placehold.co/48x48/E0E0E0/888888?text=HCS", category: "sales" },
    { id: 10, title: "EXECUTIVE ASSISTANT TO MD", company: "HINDCO Consulting Services", experience: "2 - 6 Years", locations: ["Mumbai", "Navi Mumbai / Panvel", "mumbai suburbs", "India"], salary: "₹10-15 LPA", type: "Full-time", logo: "https://placehold.co/48x48/E0E0E0/888888?text=HCS", category: "executive" }
];

// This function now generates the full job card HTML, mirroring the jobPage.html logic.
function generateJobCardHTML(job) {
    return `
        <div class="job-card flex flex-col p-2.5 md:p-4">
            ${job.category === 'premium' ? '<div class="corner-tag premium"><i class="fas fa-star text-yellow-300"></i> Premium</div>' : ''}
            ${job.category === 'female' ? '<div class="corner-tag female"><i class="fas fa-venus"></i> For Women</div>' : ''}
            <div class="flex-grow">
                <div class="flex items-start gap-3">
                    <img src="${job.logo}" alt="${job.company} Logo" class="company-logo w-9 h-9 md:w-12 md:h-12 rounded-lg">
                    <div class="flex-grow">
                        <h3 class="text-sm md:text-base font-bold text-slate-800 dark:text-slate-100">${job.title}</h3>
                        <p class="text-xs md:text-sm font-medium text-cyan-600 dark:text-cyan-400">${job.company}</p>
                    </div>
                </div>
                <div class="mt-2.5 md:mt-3 flex flex-wrap gap-1.5 md:gap-2">
                    <span class="detail-pill"><i class="fas fa-map-marker-alt"></i>${job.locations.join(', ')}</span>
                    <span class="detail-pill"><i class="fas fa-dollar-sign"></i>${job.salary}</span>
                    <span class="detail-pill"><i class="fas fa-briefcase"></i>${job.experience}</span>
                </div>
            </div>
            <div class="mt-2.5 md:mt-4 pt-2.5 md:pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center gap-2">
                <button class="action-btn secondary flex-shrink-0 w-8 h-8 md:w-9 md:h-9 p-0 flex items-center justify-center info-btn" data-job-id="${job.id}" title="More Info">
                    <i class="fas fa-info-circle"></i>
                </button>
                <button class="action-btn secondary flex-shrink-0 w-8 h-8 md:w-9 md:h-9 p-0 flex items-center justify-center" title="Share Job">
                    <i class="fas fa-share-alt"></i>
                </button>
                <button class="action-btn secondary flex-shrink-0 w-8 h-8 md:w-9 md:h-9 p-0 flex items-center justify-center" title="Save Job">
                    <i class="far fa-bookmark"></i>
                </button>
                <button onclick="openApplyModal('${job.title}')" class="action-btn apply-border flex-grow text-center">
                    <i class="fas fa-paper-plane mr-1.5"></i> Apply Now
                </button>
            </div>
        </div>
    `;
}

// Function to inject jobs into the list
const injectJobs = () => {
    const jobListContainer = document.getElementById('job-list-container');
    jobListContainer.innerHTML = jobsData.map(generateJobCardHTML).join('');
};

// Modal functionality
function openApplyModal(jobTitle) {
    document.getElementById('jobTitle').value = jobTitle;
    document.getElementById('applyModal').classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}

function closeApplyModal() {
    document.getElementById('applyModal').classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

window.onclick = function(event) {
    const modal = document.getElementById('applyModal');
    if (event.target == modal) {
        closeApplyModal();
    }
}

// Form submission
document.getElementById('applicationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = document.getElementById('applicationForm');
    const successMessage = document.createElement('div');
    successMessage.className = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4 dark:bg-green-900 dark:border-green-600 dark:text-green-300';
    successMessage.innerHTML = '<p class="font-medium">Application submitted successfully! We will contact you soon.</p>';
    form.parentNode.insertBefore(successMessage, form);
    form.style.display = 'none';
    setTimeout(function() {
        closeApplyModal();
        successMessage.remove();
        form.style.display = 'block';
        form.reset();
    }, 3000);
});

// Back button functionality
document.querySelector('.back-btn').addEventListener('click', function() {
    window.history.back();
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    injectJobs();
});