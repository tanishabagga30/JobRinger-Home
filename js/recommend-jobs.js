// js/recommended-jobs.js
const recommendedJobs = [
  {
    id: 101,
    title: "Senior React Developer",
    company: "Meta India",
    location: "Bangalore",
    salary: "₹28–42 LPA",
    experience: "5+ years",
    logo: "https://placehold.co/48x48/0866FF/white?text=M",
    match: 98,
    premium: true
  },
  {
    id: 102,
    title: "UI/UX Designer",
    company: "Figma",
    location: "Remote",
    salary: "₹18–30 LPA",
    experience: "3+ years",
    logo: "https://placehold.co/48x48/F24E1E/white?text=F",
    match: 95,
    female: true
  },
  {
    id: 103,
    title: "Node.js Engineer",
    company: "Zomato",
    location: "Gurgaon",
    salary: "₹22–38 LPA",
    experience: "4+ years",
    logo: "https://placehold.co/48x48/FB5530/white?text=Z",
    match: 92
  }
];

function renderRecommendedJobs() {
  const container = document.getElementById("recList");
  const count = document.getElementById("recCount");
  const empty = document.getElementById("emptyState");

  if (!container) return;

  if (recommendedJobs.length === 0) {
    container.innerHTML = "";
    empty.classList.remove("hidden");
    count.textContent = "0";
    return;
  }

  empty.classList.add("hidden");
  count.textContent = recommendedJobs.length;

  container.innerHTML = recommendedJobs.map(job => `
    <div class="job-card flex flex-col p-4">
      ${job.premium ? '<div class="corner-tag premium">Premium</div>' : ''}
      ${job.female ? '<div class="corner-tag female">For Women</div>' : ''}

      <div class="flex-grow">
        <div class="flex items-start gap-3">
          <img src="${job.logo}" alt="${job.company}" class="company-logo">
          <div class="flex-grow">
            <h3 class="text-base font-bold text-slate-800 dark:text-slate-100">${job.title}</h3>
            <p class="text-sm font-medium text-purple-600 dark:text-purple-400">${job.company}</p>
            <p class="text-xs text-green-600 dark:text-green-400 mt-1">
              <i class="fas fa-bullseye mr-1"></i>${job.match}% Match
            </p>
          </div>
        </div>

        <div class="mt-3 flex flex-wrap gap-2">
          <span class="detail-pill">Location: ${job.location}</span>
          <span class="detail-pill">Salary: ${job.salary}</span>
          <span class="detail-pill">Experience: ${job.experience}</span>
        </div>
      </div>

      <div class="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center gap-2">
        <button class="action-btn secondary" title="More Info">
          <i class="fas fa-info-circle"></i>
        </button>
        <button class="action-btn secondary" title="Share Job">
          <i class="fas fa-share-alt"></i>
        </button>
        <button class="action-btn secondary" title="Save Job">
          <i class="far fa-bookmark"></i>
        </button>
        <button class="action-btn apply-border flex-grow">
          <i class="fas fa-paper-plane mr-1.5"></i> Apply Now
        </button>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderRecommendedJobs);