// === ALL 40+ SERVICES ===
const services = [
  { title: "RÉSUMÉ OPTIMA", for: "Any Fresher", price: "1,888" },
  { title: "RÉSUMÉ OPTIMA", for: "Below 3L CTC", price: "2,980" },
  { title: "RÉSUMÉ OPTIMA", for: "3-12L CTC", price: "4,130" },
  { title: "RÉSUMÉ OPTIMA", for: "12-24L CTC", price: "5,310" },
  { title: "RÉSUMÉ OPTIMA", for: "24-40L CTC", price: "6,969" },
  { title: "RÉSUMÉ OPTIMA", for: "40L+ CTC", price: "7,788" },
  { title: "RÉSUMÉ PREMIA", for: "Till 50L CTC", price: "9,999" },
  { title: "RÉSUMÉ PREMIA", for: "50-75L", price: "12,999" },
  { title: "RÉSUMÉ PREMIA", for: "75L+ CTC", price: "14,750" },
  { title: "RÉSUMÉ GLOBAL", for: "Any Fresher", price: "2,891" },
  { title: "RÉSUMÉ GLOBAL", for: "Below 3L", price: "3,481" },
  { title: "RÉSUMÉ GLOBAL", for: "3-12L", price: "4,956" },
  { title: "RÉSUMÉ GLOBAL", for: "12-24L", price: "6,844" },
  { title: "RÉSUMÉ GLOBAL", for: "24-40L", price: "7,670" },
  { title: "RÉSUMÉ GLOBAL", for: "40L+", price: "8,496" },
  { title: "Resume Grooming", for: "Fresher", price: "990" },
  { title: "Resume Grooming", for: "40L+", price: "2,195" },
  { title: "LinkedIn Writing", for: "Fresher", price: "1,180" },
  { title: "LinkedIn Writing", for: "40L+", price: "3,481" },
  { title: "Career Presentation", for: "16-20 Slides", price: "2,891" },
  { title: "Salary Negotiation", for: "Any Level", price: "1,770" },
  { title: "Career Coaching", for: "0-5 Yrs", price: "1,949" }
];

// === FEEDBACKS ===
const feedbacks = [
  { name: "Aman Verma", role: "Data Analyst", stars: "★★★★★", text: "Got 8 calls in 4 days!", date: "2 days ago" },
  { name: "Sneha Rao", role: "UX Designer", stars: "★★★★★", text: "15 recruiter messages in 1 week!", date: "5 days ago" },
  { name: "Rohan Patel", role: "SDE-2", stars: "★★★★★", text: "60% hike in 12 days!", date: "1 week ago" },
  { name: "Priya Sharma", role: "HR Manager", stars: "★★★★☆", text: "Shortlisted at 3 MNCs", date: "Mar 28" },
  { name: "Karan Singh", role: "Fresher", stars: "★★★★★", text: "First job in 9 days!", date: "Mar 25" }
];

// === FAQS ===
const faqs = [
  { q: "How fast will I get my resume?", a: "Standard: 3–5 days<br>Express 24-Hour: +₹999" },
  { q: "100% Money-Back Guarantee?", a: "Yes! Full refund in 7 days." },
  { q: "ATS Optimized?", a: "100% – Used by 10,000+ MNCs." },
  { q: "Unlimited Revisions?", a: "Yes! 30 days free." },
  { q: "Pay After Draft?", a: "Yes! 50% now, 50% later." }
];

// === LOAD SERVICES ===
document.getElementById("servicesGrid").innerHTML = services.map(s => `
  <div class="package-card">
    <div class="package-header">
      <div class="package-title">${s.title}</div>
      <div class="package-for">${s.for}</div>
    </div>
    <div class="package-price">₹${s.price}</div>
    <div class="package-features">
      <ul><li>Instant job alerts</li><li>Real-time tracking</li></ul>
    </div>
    <div class="package-footer">
      <button class="buy-button">Buy Now</button>
    </div>
  </div>
`).join("");

// === LOAD FEEDBACK ===
document.getElementById("feedbackSlider").innerHTML = feedbacks.map(f => `
  <div class="feedback-card">
    <div class="feedback-stars">${f.stars}</div>
    <div class="feedback-text">"${f.text}"</div>
    <div class="feedback-author">
      <img src="https://randomuser.me/api/portraits/men/${Math.floor(Math.random()*90)}.jpg" alt="">
      <div><h4>${f.name}</h4><p>${f.role}</p></div>
    </div>
    <div class="feedback-date">${f.date}</div>
  </div>
`).join("");

// === LOAD FAQ ===
document.getElementById("faqContainer").innerHTML = faqs.map((faq, i) => `
  <div class="faq-item" onclick="this.classList.toggle('active')">
    <div class="faq-question">
      <h4>${faq.q}</h4>
      <i class="fas fa-chevron-down"></i>
    </div>
    <div class="faq-answer"><p>${faq.a}</p></div>
  </div>
`).join("");

// === LIVE TIMER ===
setInterval(() => {
  let now = new Date();
  let end = new Date();
  end.setHours(23, 59, 59, 999);
  let diff = end - now;
  if (diff < 0) diff = 0;
  let h = Math.floor(diff / 3600000);
  let m = Math.floor((diff % 3600000) / 60000);
  let s = Math.floor((diff % 60000) / 1000);
  document.getElementById("hours").textContent = h.toString().padStart(2, '0');
  document.getElementById("minutes").textContent = m.toString().padStart(2, '0');
  document.getElementById("seconds").textContent = s.toString().padStart(2, '0');
}, 1000);