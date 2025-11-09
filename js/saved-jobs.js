// js/saved-jobs.js
const savedJobs = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    company: "Google India",
    location: "Bangalore",
    salary: "₹25–35 LPA",
    experience: "4+ years",
    logo: "https://placehold.co/48x48/4285f4/white?text=G",
    saved: "12 Oct",
    premium: true
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Microsoft",
    location: "Remote",
    salary: "₹18–28 LPA",
    experience: "3+ years",
    logo: "https://placehold.co/48x48/f25022/white?text=M",
    saved: "10 Oct",
    female: true
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Amazon",
    location: "Hyderabad",
    salary: "₹22–40 LPA",
    experience: "5+ years",
    logo: "https://placehold.co/48x48/ff9900/white?text=A",
    saved: "Today"
  }
];

function renderSavedJobs() {
  const container = document.getElementById("savedList");
  const count = document.getElementById("savedCount");
  const empty = document.getElementById("emptyState");

  if (!container) return;

  if (savedJobs.length === 0) {
    container.innerHTML = "";
    empty.classList.remove("hidden");
    count.textContent = "0";
    return;
  }

  empty.classList.add("hidden");
  count.textContent = savedJobs.length;

  container.innerHTML = savedJobs.map(job => `
    <div class="job-card flex flex-col p-4">
      ${job.premium ? '<div class="corner-tag premium"><i class="fas fa-star"></i> Premium</div>' : ''}
      ${job.female ? '<div class="corner-tag female"><i class="fas fa-venus"></i> For Women</div>' : ''}

      <div class="flex-grow">
        <div class="flex items-start gap-3">
          <img src="${job.logo}" alt="${job.company}" class="company-logo">
          <div class="flex-grow">
            <h3 class="text-base font-bold text-slate-800 dark:text-slate-100">${job.title}</h3>
            <p class="text-sm font-medium text-cyan-600 dark:text-cyan-400">${job.company}</p>
            <p class="text-xs text-pink-600 dark:text-pink-400 mt-1">
              <i class="far fa-bookmark mr-1"></i>Saved on ${job.saved}
            </p>
          </div>
        </div>

        <div class="mt-3 flex flex-wrap gap-2">
          <span class="detail-pill"><i class="fas fa-map-marker-alt"></i>${job.location}</span>
          <span class="detail-pill"><i class="fas fa-dollar-sign"></i>${job.salary}</span>
          <span class="detail-pill"><i class="fas fa-briefcase"></i>${job.experience}</span>
        </div>
      </div>

      <div class="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center gap-2">
        <button class="action-btn secondary" title="More Info">
          <i class="fas fa-info-circle"></i>
        </button>
        <button class="action-btn secondary" title="Share Job">
          <i class="fas fa-share-alt"></i>
        </button>
        <button class="action-btn secondary" title="Unsave Job">
          <i class="fas fa-trash-alt"></i>
        </button>
        <button class="action-btn apply-border flex-grow">
          <i class="fas fa-paper-plane mr-1.5"></i> Apply Now
        </button>
      </div>
    </div>
  `).join("");
}

// Run on load
document.addEventListener("DOMContentLoaded", renderSavedJobs);