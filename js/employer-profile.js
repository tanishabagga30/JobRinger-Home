document.addEventListener('DOMContentLoaded', () => {
    // Dummy data for job seeker profile - replace with actual data from backend
    const seekerData = {
        name: "Tanisha Bagga",
        title: "Senior Data Scientist",
        jobType: "Full-Time",
        ctc: "₹18 LPA",
        noticePeriod: "30 Days",
        location: "Bengaluru, India (Remote Preferred)",
        experienceSummary: "5 Years", // This is a summary, full details are in experience array
        workModel: "Hybrid",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&w=150&h=150&q=80", // Example image
        resumeUrl: "https://www.africau.edu/images/default/sample.pdf", // Example PDF
        about: "Highly motivated and results-oriented Senior Data Scientist with 5 years of experience in developing and deploying machine learning models. Proficient in Python, R, SQL, and various data science libraries. Proven ability to translate complex data into actionable insights and build robust predictive solutions. Passionate about leveraging data to solve real-world problems and drive business growth. Strong advocate for data ethics and responsible AI development.",
        skills: ["Python", "R", "SQL", "Machine Learning", "Deep Learning", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "AWS", "Azure", "GCP", "Data Visualization", "Statistical Analysis", "A/B Testing", "Spark", "Dask", "Git", "Docker", "Kubernetes"],
        education: [
            {
                degree: "Master of Science in Data Science",
                university: "Indian Institute of Science (IISc), Bengaluru",
                duration: "August 2018 - May 2020",
                details: "Focused on advanced machine learning algorithms, big data analytics, and statistical modeling. Thesis: 'Predictive Analytics for Customer Churn in Telecommunications using Deep Learning'."
            },
            {
                degree: "Bachelor of Technology in Computer Science",
                university: "Vellore Institute of Technology (VIT), Vellore",
                duration: "August 2014 - May 2018",
                details: "Completed coursework in Data Structures, Algorithms, Database Management Systems, and Artificial Intelligence. Achieved a GPA of 9.2/10."
            }
        ],
        experience: [
            {
                title: "Senior Data Scientist",
                company: "InnovateTech Solutions",
                duration: "January 2023 - Present",
                description: "• Led a team of 3 data scientists to develop and implement AI-powered solutions for customer churn prediction, resulting in a 10% reduction in churn rate.<br>• Designed and deployed real-time recommendation engines for e-commerce platform, increasing user engagement by 15% and conversion rates by 5%.<br>• Optimized existing machine learning pipelines for scalability and performance, reducing model training time by 30%."
            },
            {
                title: "Data Scientist",
                company: "Analytics Driven Inc.",
                duration: "August 2020 - December 2022",
                description: "• Developed predictive models for fraud detection using ensemble methods, reducing fraudulent transactions by 20% annually.<br>• Performed extensive data analysis and built interactive dashboards for key business metrics using Tableau and Power BI.<br>• Collaborated with product teams to define data collection strategies and integrate machine learning models into production systems."
            },
            {
                title: "Junior Data Analyst",
                company: "Data Insights Co.",
                duration: "June 2018 - July 2020",
                description: "• Assisted in data cleaning, transformation, and analysis for various client projects.<br>• Created reports and presentations summarizing key findings and recommendations for business stakeholders.<br>• Gained hands-on experience with SQL, Excel, and basic statistical analysis."
            }
        ],
        projects: [
            {
                name: "Customer Churn Prediction Model (Personal Project)",
                description: "Developed a robust machine learning model using XGBoost and LightGBM to predict customer churn in a telecommunications dataset. Achieved an accuracy of 92% and an F1-score of 0.88. Utilized Flask for a simple web API deployment.",
                link: "https://github.com/tanishabagga/churn-prediction" // Example GitHub link
            },
            {
                name: "Real-time Recommendation Engine (Company Project Contribution)",
                description: "Contributed to the development of a real-time recommendation system for an e-commerce platform. Implemented collaborative filtering and content-based filtering algorithms. Utilized Kafka for real-time data streaming and Redis for caching recommendations.",
                link: "https://innovatetech.com/recommendation-engine" // Example project link
            },
            {
                name: "Image Classification with CNNs (Academic Project)",
                description: "Built a Convolutional Neural Network (CNN) from scratch using TensorFlow to classify images of various objects (e.g., cats, dogs, cars). Achieved 85% accuracy on a custom dataset. Explored different CNN architectures and hyperparameter tuning.",
                link: "#" // No specific public link for this example
            }
        ],
        awards: [
            {
                name: "Innovator of the Year Award - InnovateTech Solutions",
                year: "2024",
                description: "Awarded for significant contributions to the development and successful deployment of the real-time recommendation engine, leading to substantial business impact."
            },
            {
                name: "Best Capstone Project - IISc Bengaluru",
                year: "2020",
                description: "Received for outstanding performance and innovative approach in the Master's capstone project on 'Predictive Analytics for Customer Churn'."
            },
            {
                name: "Data Science Hackathon Winner - TechHack 2019",
                year: "2019",
                description: "Won first prize in a national data science hackathon for developing an effective solution to optimize logistics routes."
            }
        ],
        contact: {
            email: "tanisha.bagga@example.com",
            phone: "+919876543210" // Use full number with country code, no spaces/hyphens for WhatsApp link
        }
    };

    // Populate general seeker information
    document.getElementById('seeker-photo').src = seekerData.photo;
    document.getElementById('seeker-name').textContent = seekerData.name;
    document.getElementById('seeker-title').textContent = seekerData.title;
    document.getElementById('seeker-job-type').textContent = seekerData.jobType;
    document.getElementById('seeker-ctc').textContent = seekerData.ctc;
    document.getElementById('seeker-notice-period').textContent = seekerData.noticePeriod;
    document.getElementById('seeker-location').textContent = seekerData.location;
    document.getElementById('seeker-experience-summary').textContent = seekerData.experienceSummary;
    document.getElementById('seeker-work-model').textContent = seekerData.workModel;

    // Add this after populating the general seeker information
function calculateMatchScore(seekerData, jobRequirements) {
    // This would compare seeker data with your job requirements
    // For demo purposes, we'll use some dummy matches
    
    // In a real app, you would compare with actual job requirements
    const matches = {
        ctc: true,          // CTC matches job range
        location: true,     // Location matches job location
        experience: true,   // Experience matches job requirements
        skills: 'partial',  // Partial skills match
        notice: false       // Notice period doesn't match
    };
    
    // Calculate percentage match (this is simplified)
    const totalCriteria = 5;
    const matchedCriteria = Object.values(matches).filter(m => m === true).length;
    const partialMatches = Object.values(matches).filter(m => m === 'partial').length;
    const score = Math.round(((matchedCriteria + (partialMatches * 0.5)) / totalCriteria * 100));
    
    return { matches, score };
}

// Example job requirements (you would get this from your actual job data)
const jobRequirements = {
    minCtc: 15,         // 15 LPA minimum
    maxCtc: 25,         // 25 LPA maximum
    locations: ["Bengaluru", "Remote"], 
    minExperience: 4,   // 4 years minimum
    requiredSkills: ["Python", "Machine Learning", "AWS", "SQL"], 
    maxNoticePeriod: 30 // 30 days maximum
};

// Calculate matches
const { matches, score } = calculateMatchScore(seekerData, jobRequirements);
// Update the match indicators
function updateMatchIndicators(matches, score) {
    const matchContainer = document.querySelector('.bg-white.dark\\:bg-gray-800.rounded-lg.shadow-md.p-4.mb-6');
    
    if (!matchContainer) {
        console.error('Match score container not found');
        return;
    }

    // Get all the flex containers (criteria items)
    const criteriaItems = matchContainer.querySelectorAll('.flex.flex-col.items-center');
    
    if (criteriaItems.length < 5) {
        console.error('Not enough criteria items found');
        return;
    }

    // CTC Match (first item)
    const ctcIndicator = criteriaItems[0].querySelector('div');
    const ctcIcon = criteriaItems[0].querySelector('i');
    if (!matches.ctc) {
        ctcIndicator.className = ctcIndicator.className.replace('bg-green-100', 'bg-red-100').replace('dark:bg-green-900', 'dark:bg-red-900');
        ctcIcon.className = ctcIcon.className.replace('fa-check', 'fa-times').replace('text-green-600', 'text-red-600').replace('dark:text-green-300', 'dark:text-red-300');
    }
    
    // Location Match (second item)
    const locationIndicator = criteriaItems[1].querySelector('div');
    const locationIcon = criteriaItems[1].querySelector('i');
    if (!matches.location) {
        locationIndicator.className = locationIndicator.className.replace('bg-green-100', 'bg-red-100').replace('dark:bg-green-900', 'dark:bg-red-900');
        locationIcon.className = locationIcon.className.replace('fa-check', 'fa-times').replace('text-green-600', 'text-red-600').replace('dark:text-green-300', 'dark:text-red-300');
    }
    
    // Experience Match (third item)
    const expIndicator = criteriaItems[2].querySelector('div');
    const expIcon = criteriaItems[2].querySelector('i');
    if (!matches.experience) {
        expIndicator.className = expIndicator.className.replace('bg-green-100', 'bg-red-100').replace('dark:bg-green-900', 'dark:bg-red-900');
        expIcon.className = expIcon.className.replace('fa-check', 'fa-times').replace('text-green-600', 'text-red-600').replace('dark:text-green-300', 'dark:text-red-300');
    }
    
    // Skills Match (fourth item)
    const skillsIndicator = criteriaItems[3].querySelector('div');
    const skillsIcon = criteriaItems[3].querySelector('i');
    if (matches.skills === 'partial') {
        skillsIndicator.className = skillsIndicator.className.replace('bg-green-100', 'bg-yellow-100').replace('dark:bg-green-900', 'dark:bg-yellow-900');
        skillsIcon.className = skillsIcon.className.replace('text-green-600', 'text-yellow-600').replace('dark:text-green-300', 'dark:text-yellow-300');
    } else if (!matches.skills) {
        skillsIndicator.className = skillsIndicator.className.replace('bg-green-100', 'bg-red-100').replace('dark:bg-green-900', 'dark:bg-red-900');
        skillsIcon.className = skillsIcon.className.replace('fa-check', 'fa-times').replace('text-green-600', 'text-red-600').replace('dark:text-green-300', 'dark:text-red-300');
    }
    
    // Notice Period Match (fifth item)
    const noticeIndicator = criteriaItems[4].querySelector('div');
    const noticeIcon = criteriaItems[4].querySelector('i');
    if (matches.notice) {
        noticeIndicator.className = noticeIndicator.className.replace('bg-red-100', 'bg-green-100').replace('dark:bg-red-900', 'dark:bg-green-900');
        noticeIcon.className = noticeIcon.className.replace('fa-times', 'fa-check').replace('text-red-600', 'text-green-600').replace('dark:text-red-300', 'dark:text-green-300');
    }
    
    // Update progress bar and score
    const progressBar = matchContainer.querySelector('.mt-4 > div > div');
    const scoreText = matchContainer.querySelector('.mt-4 + p');
    if (progressBar && scoreText) {
        progressBar.style.width = `${score}%`;
        scoreText.textContent = `${score}% Match`;
    }
}
if (job.category === 'premium') {
    cardContainer.classList.add('premium-job');
} else if (job.category === 'female') {
    cardContainer.classList.add('female-job');
}


// Call this function after calculating matches
updateMatchIndicators(matches, score);
    // Handle Contact Buttons
    const contactEmailBtn = document.getElementById('contact-email-btn');
    if (seekerData.contact.email) {
        contactEmailBtn.href = `mailto:${seekerData.contact.email}`;
    } else {
        contactEmailBtn.style.display = 'none'; // Hide if no email
    }

    const contactWhatsappBtn = document.getElementById('contact-whatsapp-btn');
    if (seekerData.contact.phone) {
        // WhatsApp link format: https://wa.me/<number> or https://api.whatsapp.com/send?phone=<number>&text=<message>
        // Using wa.me for direct chat. Ensure phone number has country code and no special characters.
        contactWhatsappBtn.href = `https://wa.me/${seekerData.contact.phone}`;
    } else {
        contactWhatsappBtn.style.display = 'none'; // Hide if no phone number
    }

    // Handle Bookmark Button
    const bookmarkBtn = document.getElementById('bookmark-btn');
    bookmarkBtn.addEventListener('click', () => {
        // Toggle bookmark state, e.g., change icon from far fa-bookmark to fas fa-bookmark
        const icon = bookmarkBtn.querySelector('i');
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            alert('Job seeker bookmarked!');
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            alert('Bookmark removed!');
        }
    });

    // Handle Share Button
    const shareBtn = document.getElementById('share-btn');
    shareBtn.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: seekerData.name + ' - Job Seeker Profile',
                url: window.location.href // Shares the current URL
            }).then(() => {
                console.log('Profile shared successfully!');
            }).catch((error) => {
                console.error('Error sharing profile:', error);
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            // For better UX, you might want to show a modal with the link
            prompt("Copy this link to share the profile:", window.location.href);
        }
    });

    // Populate Resume section
    const resumeViewer = document.getElementById('resume-viewer');
    const resumeDownloadLink = document.getElementById('resume-download-link');
    if (seekerData.resumeUrl) {
        resumeViewer.src = seekerData.resumeUrl;
        resumeDownloadLink.href = seekerData.resumeUrl;
    } else {
        resumeViewer.innerHTML = `<p class="p-4 text-center text-gray-500 dark:text-gray-400">No resume available.</p>`;
    }

    // Populate About section
    document.getElementById('seeker-about').innerHTML = seekerData.about.replace(/\n/g, '<br>'); // Replace newlines with <br> for HTML display

    // Populate Skills section
    const skillsContainer = document.getElementById('seeker-skills');
    skillsContainer.innerHTML = ''; // Clear previous content
    seekerData.skills.forEach(skill => {
        const span = document.createElement('span');
        span.className = 'bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-xs font-medium';
        span.textContent = skill;
        skillsContainer.appendChild(span);
    });

    // Populate Education section
    const educationContainer = document.getElementById('seeker-education');
    educationContainer.innerHTML = ''; // Clear previous content
    seekerData.education.forEach(edu => {
        const div = document.createElement('div');
        div.className = 'border-l-4 border-indigo-500 pl-4 py-2';
        div.innerHTML = `
            <h3 class="font-semibold text-gray-900 dark:text-gray-100">${edu.degree}</h3>
            <p class="text-sm text-gray-700 dark:text-gray-300">${edu.university}</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">${edu.duration}</p>
            ${edu.details ? `<p class="text-sm mt-1 text-gray-600 dark:text-gray-400">${edu.details}</p>` : ''}
        `;
        educationContainer.appendChild(div);
    });

    // Populate Experience section
    const experienceContainer = document.getElementById('seeker-experience-details');
    experienceContainer.innerHTML = ''; // Clear previous content
    seekerData.experience.forEach(exp => {
        const div = document.createElement('div');
        div.className = 'border-l-4 border-green-500 pl-4 py-2';
        div.innerHTML = `
            <h3 class="font-semibold text-gray-900 dark:text-gray-100">${exp.title} at ${exp.company}</h3>
            <p class="text-sm text-gray-700 dark:text-gray-300">${exp.duration}</p>
            <p class="text-sm mt-1">${exp.description.replace(/\n/g, '<br>')}</p>
        `;
        experienceContainer.appendChild(div);
    });

    // Populate Projects section
    const projectsContainer = document.getElementById('seeker-projects');
    projectsContainer.innerHTML = ''; // Clear previous content
    seekerData.projects.forEach(project => {
        const div = document.createElement('div');
        div.className = 'border-l-4 border-yellow-500 pl-4 py-2';
        div.innerHTML = `
            <h3 class="font-semibold text-gray-900 dark:text-gray-100">${project.name}</h3>
            <p class="text-sm mt-1">${project.description.replace(/\n/g, '<br>')}</p>
            ${project.link && project.link !== '#' ? `<a href="${project.link}" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline text-xs mt-1 block">View Project</a>` : ''}
        `;
        projectsContainer.appendChild(div);
    });

    // Populate Awards section
    const awardsContainer = document.getElementById('seeker-awards');
    awardsContainer.innerHTML = ''; // Clear previous content
    if (seekerData.awards && seekerData.awards.length > 0) {
        seekerData.awards.forEach(award => {
            const div = document.createElement('div');
            div.className = 'border-l-4 border-purple-500 pl-4 py-2';
            div.innerHTML = `
                <h3 class="font-semibold text-gray-900 dark:text-gray-100">${award.name} (${award.year})</h3>
                <p class="text-sm mt-1">${award.description.replace(/\n/g, '<br>')}</p>
            `;
            awardsContainer.appendChild(div);
        });
    } else {
        awardsContainer.innerHTML = `<p class="text-sm text-gray-500 dark:text-gray-400">No awards to display.</p>`;
    }
});