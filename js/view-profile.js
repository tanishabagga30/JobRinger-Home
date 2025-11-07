// js/viewed-profile.js
const viewers = [
  {
    name: "jobringer.com",
    address: "631, Building No. 3, Navjivan Society, Lamington Road, Mumbai - 400008.",
    website: "http://www.jobringer.com",
    email: "info@jobringer.com",
    phone: "9820451402",
    jobs: [
      "Social Media Marketing Internship",
      "IT Fresher",
      "iOS Developer",
      "Business Development Intern",
      "Corporate Affairs Manager | Mumbai"
    ]
  },
  {
    name: "Innovins softtech solutions pvt ltd",
    address: "D 202 nalanda jayraj nagar.",
    email: "info@innovins.com",
    phone: "9987053623",
    jobs: ["Flutter developer"]
  }
];

document.getElementById("viewedList").innerHTML = viewers.map(v => `
  <div class="job-card">
    <div class="card-header">
      <div class="company-name">${v.name}</div>
      <button class="follow-btn">Follow</button>
    </div>

    <div class="info-grid">
      <div class="info-item"><i class="fas fa-map-marker-alt"></i> ${v.address}</div>
      <div class="info-item"><i class="fas fa-phone"></i> ${v.phone}</div>
    </div>

    <div class="contact-line">
      <i class="fas fa-envelope"></i> <a href="mailto:${v.email}">${v.email}</a>
      ${v.website ? `&nbsp; • &nbsp; <i class="fas fa-globe"></i> <a href="${v.website}" target="_blank">Website</a>` : ""}
    </div>

    <div class="jobs-title">Latest Jobs Posted</div>
    <div class="jobs-list">
      ${v.jobs.map(job => `<span class="job-tag">${job}</span>`).join("")}
    </div>
  </div>
`).join("");