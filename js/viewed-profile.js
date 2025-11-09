// js/viewed-profile.js
const viewers = [
  {
    name: "jobringer.com",
    logo: "https://placehold.co/80x80/1e40af/white?text=J",
    location: "Mumbai",
    email: "hr@jobringer.com",
    phone: "+919820451402",
    viewed: "12 Oct 2025",
    jobs: ["Social Media Intern", "iOS Developer"]
  },
  {
    name: "Innovins Softtech",
    logo: "https://placehold.co/80x80/10b981/white?text=I",
    location: "Pune",
    email: "careers@innovins.com",
    phone: "+919987053623",
    viewed: "10 Oct 2025",
    jobs: ["Flutter Developer", "Backend Engineer"]
  },
  {
    name: "TechWave Solutions",
    logo: "https://placehold.co/80x80/3b82f6/white?text=T",
    location: "Bangalore",
    email: "jobs@techwave.in",
    phone: "+919123456789",
    viewed: "Today",
    jobs: ["DevOps Engineer", "UI Designer"]
  }
];

document.getElementById("viewedList").innerHTML = viewers.map(v => `
  <div class="job-card">
    <!-- Header -->
    <div class="card-header">
      <img src="${v.logo}" alt="${v.name}" class="company-logo">
      <div class="company-info">
        <h3 class="company-name">${v.name}</h3>
        <div class="view-date">
          <i class="fas fa-eye text-cyan-600"></i>
          <span>Viewed/Bookmarked on:</span>
          <strong>${v.viewed}</strong>
        </div>
      </div>
    </div>

    <!-- Body -->
    <div class="card-body">
      <div class="location">
        <i class="fas fa-map-marker-alt"></i> ${v.location}
      </div>

      <div class="jobs-section">
        <div class="jobs-title">
          <i class="fas fa-briefcase"></i> Latest Jobs Posted
        </div>
        <div class="jobs-list">
          ${v.jobs.map(job => `<span class="job-tag">${job}</span>`).join("")}
        </div>
      </div>
    </div>

    <!-- Action Bar -->
    <div class="action-bar">
      <a href="tel:${v.phone}" class="action-btn call" title="Call">
        <i class="fas fa-phone"></i>
      </a>
      <a href="mailto:${v.email}" class="action-btn email" title="Email">
        <i class="fas fa-envelope"></i>
      </a>
      <button class="action-btn" title="Share">
        <i class="fas fa-share-alt"></i>
      </button>
      <button class="action-btn apply">
        View Company
      </button>
    </div>
  </div>
`).join("");