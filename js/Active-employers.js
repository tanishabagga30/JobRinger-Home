// Employer data
const employers = [
    { name: "Snaphunt", jobs: 560 },
    { name: "Refining Skills", jobs: 104 },
    { name: "jobringer.com", jobs: 93 },
    { name: "Quectel", jobs: 43 },
    { name: "JoVE", jobs: 37 },
    { name: "HRC MANPOWER", jobs: 28 },
    { name: "HINDCO Consulting Services", jobs: 26 },
    { name: "Aces Global Consulting Pvt. Ltd.", jobs: 24 },
    { name: "Epsilon", jobs: 24 },
    { name: "Rosetta Hospitality", jobs: 23 },
    { name: "Integration International Inc.", jobs: 22 },
    { name: "OrbiTouch-HR", jobs: 19 },
    { name: "Shoppers Stop", jobs: 19 },
    { name: "KeyValue Software Systems", jobs: 19 },
    { name: "Quantum Integrators", jobs: 19 },
    { name: "NeerInfo Solutions", jobs: 19 },
    { name: "TresVista", jobs: 19 },
    { name: "LearningMate", jobs: 18 },
    { name: "HuntingCube Recruitment Solutions", jobs: 18 },
    { name: "XCUTIVES Inc.", jobs: 18 },
    { name: "LogiNext", jobs: 17 },
    { name: "HARMAN India", jobs: 17 },
    { name: "Aarvi Encon Limited", jobs: 17 },
    { name: "Brandshark", jobs: 16 },
    { name: "First Advantage", jobs: 16 },
    { name: "Circana", jobs: 16 },
    { name: "Sturlite India", jobs: 16 },
    { name: "Golden Opportunities", jobs: 16 },
    { name: "AMISEQ", jobs: 15 },
    { name: "Epergne Solutions", jobs: 15 },
    { name: "LOOM SOLAR PVT. LTD.", jobs: 15 },
    { name: "Learning Routes", jobs: 15 },
    { name: "Cactus Communications", jobs: 15 },
    { name: "NetWeb Technologies", jobs: 15 },
    { name: "Pacer Staffing LLC", jobs: 14 },
    { name: "Frost & Sullivan", jobs: 14 },
    { name: "IGT Solutions", jobs: 14 },
    { name: "beON", jobs: 14 },
    { name: "SurveySparrow", jobs: 14 },
    { name: "Avacend Inc", jobs: 14 },
    { name: "Kauvery Hospital", jobs: 14 },
    { name: "Straive", jobs: 13 },
    { name: "RIC Pharmaceuticals Pvt. Ltd.", jobs: 13 },
    { name: "Strategic Talent Partner", jobs: 13 },
    { name: "ShepHertz Technologies", jobs: 13 },
    { name: "Highbrow Technology Inc", jobs: 13 },
    { name: "Katyayani Organics", jobs: 13 },
    { name: "Moshi Moshi - The Communication Company", jobs: 13 },
    { name: "Tradologie", jobs: 12 },
    { name: "Brand Collective", jobs: 12 },
    { name: "Promaynov Advisory Services Pvt. Ltd.", jobs: 12 },
    { name: "Destiny Job Placement Services", jobs: 12 },
    { name: "OCS India", jobs: 12 },
    { name: "Vision Vivante LLP", jobs: 12 },
    { name: "arfect Business Solutions", jobs: 12 },
    { name: "PQE Group", jobs: 12 },
    { name: "Accelalpha", jobs: 12 },
    { name: "Genus Electrotech Limited", jobs: 12 },
    { name: "Information Security Media Group", jobs: 12 },
    { name: "Alight Solutions", jobs: 12 },
    { name: "Aurolab", jobs: 11 },
    { name: "WHR Global Consulting", jobs: 11 },
    { name: "Havas", jobs: 11 },
    { name: "CSC Generation", jobs: 11 },
    { name: "iMumz", jobs: 11 },
    { name: "BLS International Services Ltd.", jobs: 11 },
    { name: "Jobtech Ventures Pvt. Ltd.", jobs: 11 },
    { name: "WonderBiz Technologies Pvt.", jobs: 11 },
    { name: "Dexian", jobs: 11 },
    { name: "Masflair", jobs: 11 },
    { name: "Webdecorum", jobs: 11 },
    { name: "Indics Solution", jobs: 11 },
    { name: "Talent Worx", jobs: 11 },
    { name: "TechDoQuest", jobs: 11 },
    { name: "Trinity Technology Solutions LLC", jobs: 11 },
    { name: "Lucy Electric", jobs: 11 },
    { name: "Anlage Infotech (India) P Ltd", jobs: 11 },
    { name: "Unified GlobalTech Pvt. Ltd.", jobs: 11 },
    { name: "Panamax Infotech", jobs: 11 },
    { name: "BigTrunk Communications Pvt. Ltd.", jobs: 11 },
    { name: "Thanal", jobs: 11 },
    { name: "Onelab Ventures", jobs: 11 },
    { name: "Perficient", jobs: 11 },
    { name: "Cyber Infrastructure", jobs: 11 },
    { name: "Sigmoid", jobs: 10 },
    { name: "Analytix Business Solutions", jobs: 10 },
    { name: "Zemoso Technologies", jobs: 10 },
    { name: "Chai Point", jobs: 10 },
    { name: "Excis Compliance", jobs: 10 },
    { name: "ThoughtSol Infotech Pvt. Ltd.", jobs: 10 },
    { name: "Krasan Consulting Services", jobs: 10 },
    { name: "APSK Production & Entertainment Private Limited", jobs: 10 },
    { name: "SRV Media", jobs: 10 },
    { name: "India Health Link", jobs: 10 },
    { name: "Ababil Healthcare Private Limited", jobs: 10 },
    { name: "TTEC Digital", jobs: 10 },
    { name: "Walplast Products Pvt. Ltd.", jobs: 10 },
    { name: "FleishmanHillard", jobs: 10 },
    { name: "Syphnosys Technology Private Limited", jobs: 10 },
    { name: "ARDEM Incorporated", jobs: 10 },
];

// State management
let displayedEmployers = 20;
const employersPerLoad = 20;

// DOM elements
const employersList = document.getElementById("employersList");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");
const employerScroll = document.getElementById("employerScroll");

// Render employer card for main list
function renderEmployer(employer) {
    return `
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 class="text-xl font-semibold">${employer.name}</h3>
            <p class="text-gray-600 mt-2">${employer.jobs} Jobs</p>
            <a href="https://jobringer.com" class="text-blue-600 hover:underline mt-4 inline-block">View Jobs</a>
        </div>
    `;
}


function renderFeaturedEmployer(employer, index) {
    return `
        <div class="card p-3 rounded-lg shadow-md h-20 w-20 flex-shrink-0">
            <img src="https://placehold.co/60x60/E0E0E0/888888?text=${employer.name.charAt(0)}" alt="${employer.name}" class="max-w-full max-h-full rounded-md">
        </div>
    `;
}

// Render employers list
function renderEmployersList(data) {
    employersList.innerHTML = data
        .slice(0, displayedEmployers)
        .map(renderEmployer)
        .join("");
    loadMoreBtn.style.display =
        displayedEmployers >= data.length ? "none" : "block";
}

// Render featured employers (top 7 by job count)
function renderFeaturedEmployers() {
    const topEmployers = employers
        .sort((a, b) => b.jobs - a.jobs)
        .slice(0, 7);
    employerScroll.innerHTML = topEmployers
        .map((employer, index) => renderFeaturedEmployer(employer, index))
        .join("");
}


function filterAndSortEmployers() {
    let filtered = [...employers];
    const searchTerm = searchInput.value.toLowerCase();
    const filterValue = filterSelect.value;

    // Apply search
    if (searchTerm) {
        filtered = filtered.filter((e) =>
            e.name.toLowerCase().includes(searchTerm)
        );
    }

    // Apply filter
    if (filterValue === "active-jobs") {
        filtered.sort((a, b) => b.jobs - a.jobs);
    } else if (filterValue === "recent") {
        filtered.sort((a, b) => b.jobs - a.jobs);
    } else if (filterValue.match(/^[a-z]$/)) {
        filtered = filtered.filter(
            (e) => e.name.toLowerCase().startsWith(filterValue)
        );
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filterValue === "others") {
        filtered = filtered.filter(
            (e) => !e.name.match(/^[a-zA-Z]/)
        );
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    renderEmployersList(filtered);
}

// Load more employers
loadMoreBtn.addEventListener("click", () => {
    displayedEmployers += employersPerLoad;
    filterAndSortEmployers();
});

// Search input event
searchInput.addEventListener("input", filterAndSortEmployers);

// Filter select event
filterSelect.addEventListener("change", () => {
    displayedEmployers = employersPerLoad;
    filterAndSortEmployers();
});

// Featured Employers Auto-Scroll
let employerScrollAmount = 0;
const employerScrollSpeed = 0.5;
let employerAutoScroll;

function startEmployerAutoScroll() {
    if (!employerScroll) return;
    employerAutoScroll = setInterval(() => {
        employerScrollAmount += employerScrollSpeed;
        if (employerScrollAmount >= employerScroll.scrollWidth - employerScroll.clientWidth) {
            employerScrollAmount = 0;
        }
        employerScroll.scrollLeft = employerScrollAmount;
    }, 30);
}

function stopEmployerAutoScroll() {
    clearInterval(employerAutoScroll);
}

if (employerScroll) {
    employerScroll.addEventListener("mouseenter", stopEmployerAutoScroll);
    employerScroll.addEventListener("mouseleave", startEmployerAutoScroll);
    startEmployerAutoScroll();
}

// Initial render
renderEmployersList(employers);
renderFeaturedEmployers();