
const serviceData = {
    RESUME_WRITING: {
        title: "Professional Résumé Writing",
        description: "Crafted by experts to maximize shortlisting potential across all experience levels.",
        color: "#0369a1",
        services: [
            {
                name: "RÉSUMÉ OPTIMA (Professional)",
                initialPrice: "2,980.00",
                initialFor: "Below 3.00 Lac CTC Range",
                pricing: [
                    { for: "Below 3.00 Lac CTC Range", price: "2,980.00" },
                    { for: "3.00 Lac to 12.00 Lac CTC Range", price: "4,130.00" },
                    { for: "12.00 Lac to 24.00 Lac CTC Range", price: "5,487.00" },
                    { for: "24.00 Lac to 40.00 Lac CTC Range", price: "6,969.00" },
                    { for: "40.00 Lac + CTC Range", price: "7,788.00" }
                ],
                tag: "Most Popular"
            },
            {
                name: "RÉSUMÉ GLOBAL (International)",
                initialPrice: "3,363.00",
                initialFor: "Below 3.00 Lac CTC Range",
                pricing: [
                    { for: "Below 3.00 Lac CTC Range", price: "3,363.00" },
                    { for: "3.00 Lac to 12.00 Lac CTC Range", price: "4,956.00" },
                    { for: "12.00 Lac to 24.00 Lac CTC Range", price: "6,962.00" },
                    { for: "24.00 Lac to 40.00 Lac CTC Range", price: "7,788.00" },
                    { for: "40.00 Lac + CTC Range", price: "8,555.00" }
                ]
            },
            {
                name: "RÉSUMÉ PREMIA (Top Management)",
                initialPrice: "9,999.00",
                initialFor: "Till 50.00 Lac CTC Range",
                pricing: [
                    { for: "Till 50.00 Lac CTC Range", price: "9,999.00" },
                    { for: "50.00 Lac to 75.00 Lac CTC Range", price: "12,999.00" },
                    { for: "75.00 Lac + CTC Range", price: "14,750.00" }
                ],
                tag: "Top Tier"
            },
            {
                name: "RÉSUMÉ PLUS",
                price: "2,500.00",
                for: "Mid-Level Professional"
            }
        ]
    },
    FRESHER_SERVICES: {
        title: "Fresher & Graduate Services",
        description: "Specialized résumés for freshers and recent graduates starting their career journey.",
        color: "#d97706",
        services: [
            {
                name: "FRESHER'S RESUME (India)",
                price: "999.00",
                for: "Fresh Graduates (B.Com/B.Sc/BA/Others)"
            },
            {
                name: "FRESHER'S RESUME (International)",
                price: "1,299.00",
                for: "Fresh Graduates (B.Com/B.Sc/BA/Others)"
            },
            {
                name: "PROFESSIONALLY QUALIFIED FRESHER'S RESUME (India)",
                price: "1,888.00",
                for: "B.E./B.Tech/MBA/CA/MBBS/LLB/Others",
                tag: "Recommended"
            }
        ]
    },
    LINKEDIN_SERVICES: {
        title: "LinkedIn & Profile Optimization",
        description: "Boost your professional presence and get noticed by recruiters.",
        color: "#0e76a8",
        services: [
            {
                name: "LinkedIn Profile Writing (Job Seeker)",
                initialPrice: "1,180.00",
                initialFor: "Any Fresher",
                pricing: [
                    { for: "Any Fresher", price: "1,180.00" },
                    { for: "Below 3.00 Lac CTC Range", price: "1,593.00" },
                    { for: "3.00 Lac to 12.00 Lac CTC Range", price: "1,999.00" },
                    { for: "12.00 Lac to 24.00 Lac CTC Range", price: "2,478.00" },
                    { for: "40.00 Lac + CTC Range", price: "3,481.00" }
                ],
                tag: "Tiered Pricing"
            },
            {
                name: "Business Owner's LinkedIn Profile",
                price: "3,835.00",
                for: "For Business Owners"
            },
            {
                name: "Company/Business LinkedIn Page",
                price: "4,130.00",
                for: "For Companies/Businesses"
            },
            {
                name: "Personal Branding Coaching",
                price: "1,500.00",
                for: "1 Hour Session"
            }
        ]
    },
    COACHING_GUIDANCE: {
        title: "Coaching & Interview Guidance",
        description: "Personalized support for job search strategies, career progression, and interview preparation.",
        color: "#15803d",
        services: [
            {
                name: "Job Search / Career Coaching",
                initialPrice: "1,949.00",
                initialFor: "Fresher to 5 Years' Experience",
                pricing: [
                    { for: "Fresher to 5 Years' Experience", price: "1,949.00" },
                    { for: "5 Years to 15 Years' Experience", price: "2,450.00" },
                    { for: "15 Years and Above Experience", price: "2,950.00" }
                ]
            },
            {
                name: "INTERVIEW GUIDANCE",
                initialPrice: "2,950.00",
                initialFor: "Fresher to 5 Years' Experience",
                pricing: [
                    { for: "Fresher to 5 Years' Experience", price: "2,950.00" },
                    { for: "5 Years to 15 Years' Experience", price: "3,835.00" },
                    { for: "15 Years and Above Experience", price: "4,720.00" }
                ]
            },
            {
                name: "Job Consultation (Virtual, 0–45 Min)",
                price: "1,179.00",
                for: "Virtual Meeting"
            },
            {
                name: "International Job Guidance (Virtual, 0–45 Min)",
                price: "1,770.00",
                for: "Virtual Meeting"
            },
            {
                name: "Salary Negotiation Training",
                price: "1,450.00",
                for: "1 Hour Session"
            }
        ]
    },
    ESSENTIALS: {
        title: "Essential Supporting Services",
        description: "Quick-hit services for immediate document needs and fine-tuning.",
        color: "#8338ec",
        services: [
            {
                name: "RESUME GROOMING (Review/Edit)",
                initialPrice: "990.00",
                initialFor: "Any Fresher",
                pricing: [
                    { for: "Any Fresher", price: "990.00" },
                    { for: "Below 3.00 Lac CTC Range", price: "1,097.00" },
                    { for: "40.00 Lac + CTC Range", price: "2,195.00" }
                ]
            },
            {
                name: "Cover Letter Writing",
                price: "696.00",
                for: "Essential Document"
            },
            {
                name: "Salary Negotiation Assistance",
                price: "1,770.00",
                for: "Key Milestone Support"
            },
            {
                name: "Tele Resume Review",
                price: "649.00",
                for: "Quick 0–45 Minute Review"
            },
            {
                name: "Domestic Job Portal Posting",
                price: "885.00",
                for: "1 Job Portal Posting"
            }
        ]
    }
};

// Feedbacks and FAQs
const feedbacks = [
    { name: "Aman Verma", role: "Data Analyst", stars: "★★★★★", text: "Got 8 calls in 4 days!", date: "2 days ago" },
    { name: "Sneha Rao", role: "UX Designer", stars: "★★★★★", text: "15 recruiter messages in 1 week!", date: "5 days ago" },
    { name: "Rohan Patel", role: "SDE-2", stars: "★★★★★", text: "60% hike in 12 days!", date: "1 week ago" },
    { name: "Priya Sharma", role: "HR Manager", stars: "★★★★☆", text: "Shortlisted at 3 MNCs", date: "Mar 28" },
    { name: "Karan Singh", role: "Fresher", stars: "★★★★★", text: "First job in 9 days!", date: "Mar 25" }
];

const faqs = [
    {
        q: "How fast will I get my resume?",
        a: "Standard delivery is 3–5 days. Express 24-Hour delivery is available for an additional ₹999."
    },
    {
        q: "Is there a Money-Back Guarantee?",
        a: "Yes! We offer a full refund within 7 days if you are not satisfied with the draft."
    },
    {
        q: "Are the resumes ATS Optimized?",
        a: "Absolutely. Our resumes are 100% ATS-optimized, a system used by over 10,000 MNCs to screen candidates."
    },
    {
        q: "Do I get unlimited revisions?",
        a: "You receive 30 days of free revisions to ensure the final document meets your requirements."
    },
    {
        q: "Can I Pay After the Draft is completed?",
        a: "Yes! We offer a split payment option: 50% now, and the remaining 50% after you receive the draft."
    }
];

// Generate a single service card’s HTML
function generateServiceCard(service, categoryColor) {
    let priceDisplay = service.price
        ? `<div class="price-value">₹${service.price}</div>`
        : "";

    const isTiered = service.pricing && service.pricing.length > 0;

    if (isTiered) {
        const initialPrice = service.initialPrice || service.pricing[0].price;
        priceDisplay = `
            <div class="price-value">₹${initialPrice}</div>
            <div class="price-caption">onward</div>
        `;
    }

    const initialFor = service.for || service.initialFor || "View All Pricing Tiers";
    const tag = service.tag
        ? `<div class="tag" style="background-color: ${categoryColor};">${service.tag}</div>`
        : "";

    return `
        <div class="package-card" style="--category-color: ${categoryColor};">
            <div class="package-header">
                ${tag}
                <div class="package-title">${service.name}</div>
                <div class="package-for">${initialFor}</div>
            </div>
            <div class="package-price">
                ${priceDisplay}
            </div>
            <div class="package-features">
                <ul>
                    <li><i class="fas fa-check-circle"></i> Prices are inclusive of all taxes (W.E.F. Jan 1, 2025)</li>
                    <li><i class="fas fa-check-circle"></i> Prepared by specialized Industry Experts</li>
                    <li><i class="fas fa-check-circle"></i> 30-Day Free Revision Cycle Included</li>
                </ul>
            </div>
            <div class="package-footer">
                <button class="buy-button">View Tiers & Buy</button>
            </div>
        </div>
    `;
}


function slideCategory(index, direction) {
    if (window.innerWidth < 1024) return;

    const categories = document.querySelectorAll(".career-category");
    const categoryEl = categories[index];
    if (!categoryEl) return;

    const slider = categoryEl.querySelector(".category-grid.is-slider");
    if (!slider) return;

    const firstCard = slider.querySelector(".package-card");
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const gap = 30;
    const scrollAmount = cardWidth * 3 + gap * 2;

    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}

// Generate a category section HTML
function generateCategorySection(category, index) {
    const isDesktop = window.innerWidth >= 1024;
    const hasSlider = category.services.length > 3 && isDesktop;

    const gridClass = hasSlider ? "is-slider" : "is-grid";

    let wrapperStart = "";
    let wrapperEnd = "";

    if (hasSlider) {
        wrapperStart = `<div class="category-slider-wrapper">`;
        wrapperEnd = `
            <button class="slider-nav-button prev" onclick="slideCategory(${index}, -1)">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="slider-nav-button next" onclick="slideCategory(${index}, 1)">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>`;
    }

    return `
        <section class="career-category" id="category-${index}" data-category-index="${index}">
            <div class="category-header">
                <h2 class="category-title" style="color: ${category.color};">${category.title}</h2>
                <p class="category-description">${category.description}</p>
            </div>
            ${wrapperStart}
            <div class="category-grid ${gridClass}">
                ${category.services
                    .map((service) => generateServiceCard(service, category.color))
                    .join("")}
            </div>
            ${wrapperEnd}
        </section>
    `;
}

// On DOM ready: render all content and setup interactions
document.addEventListener("DOMContentLoaded", () => {
    const categoryDataArray = Object.values(serviceData);

    // Render categories
    const servicesGrid = document.getElementById("servicesGrid");
    if (servicesGrid) {
        servicesGrid.innerHTML = categoryDataArray
            .map((cat, i) => generateCategorySection(cat, i))
            .join("");
    }

    // Render feedback cards
    const feedbackSlider = document.getElementById("feedbackSlider");
    if (feedbackSlider) {
        feedbackSlider.innerHTML = feedbacks
            .map(
                (f) => `
            <div class="feedback-card">
                <div class="feedback-stars">${f.stars}</div>
                <div class="feedback-text">"${f.text}"</div>
                <div class="feedback-author">
                    <img src="https://placehold.co/48x48/0369a1/ffffff?text=${f.name.charAt(0)}" alt="Avatar">
                    <div><h4>${f.name}</h4><p>${f.role}</p></div>
                </div>
                <div class="feedback-date">${f.date}</div>
            </div>`
            )
            .join("");
    }

    // Render FAQ
    const faqContainer = document.getElementById("faqContainer");
    if (faqContainer) {
        faqContainer.innerHTML = faqs
            .map(
                (faq) => `
            <div class="faq-item" onclick="this.classList.toggle('active')">
                <div class="faq-question">
                    <h4>${faq.q}</h4>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="faq-answer"><p>${faq.a}</p></div>
            </div>`
            )
            .join("");
    }

    // Tabs smooth scroll
    const tabButtons = document.querySelectorAll(".package-tab-btn");
    tabButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            tabButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            const catIndex = btn.getAttribute("data-category");
            const target = document.getElementById("category-" + catIndex);
            if (!target) return;

            const rect = target.getBoundingClientRect();
            const offset = window.innerWidth > 1024 ? 60 : 40;

            window.scrollTo({
                top: window.scrollY + rect.top - offset,
                behavior: "smooth"
            });
        });
    });
});

// Live offer countdown timer
function updateTimer() {
    const now = new Date();
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    let diff = end - now;
    if (diff < 0) {
        diff = 24 * 60 * 60 * 1000 + diff;
    }
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (!hoursEl || !minutesEl || !secondsEl) return;

    hoursEl.textContent = h.toString().padStart(2, "0");
    minutesEl.textContent = m.toString().padStart(2, "0");
    secondsEl.textContent = s.toString().padStart(2, "0");
}

// Start timer on load and update each second
updateTimer();
setInterval(updateTimer, 1000);
