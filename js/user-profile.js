// user-profile.js

// Sample data - EXTENDED
const userData = {
  profilePhoto: 'https://via.placeholder.com/150', // Placeholder image
  resumeTitle: 'My Professional Resume',
  aboutMe: 'Passionate software engineer with 5+ years of experience in full-stack development. Skilled in JavaScript, Python, and cloud technologies. Looking for challenging opportunities to grow and contribute to innovative projects.',
  name: 'Tanisha Bagga',
  title: 'Senior Software Engineer',
  jobType: 'Full-time',
  currentCtc: '₹12,00,000 per annum',
  noticePeriod: '30 days',
  location: 'Bangalore, India',
  totalExperience: '5 years',
  workModel: 'Hybrid',
  email: 'tanisha.bagga@email.com',
  candidateDetails: {
    type: 'Intern',
    currentPayroll: '-',
    currentIndustry: '-',
    preferredIndustry: '-',
    currentFunctionalArea: '-',
    currentJobRole: 'Data Analyst, Web Developer, Web Programmer, Software Developer / Programmer, Software Engineer / Programmer, Intern',
    currentLocationDetail: 'Delhi NCR',
    preferredLocation: '-',
    keywords: 'C++ Developer,Java,javasc,Java Script / Javascript,C Language,HTML Developer,CSS,Python,Machine Learning,Web Programmer',
    technoFunctionalSkills: '-',
    totalExperienceDetail: '0 Year(s) 0 Month(s)',
    employmentExperience: '0 Year(s) 0 Month(s)',
    internshipExperience: '0 Year(s) 0 Month(s)',
    currentSalary: '₹ INR 0 Annually',
    expectedSalary: '0',
    salaryNegotiable: 'Not Negotiable',
    noticePeriodDetail: 'Immediate Not Negotiable',
    buyOut: '-',
  },
  skills: ['JavaScript', 'Python', 'React', 'Node.js', 'AWS', 'Docker', 'Git', 'MongoDB'],
  education: [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Indian Institute of Technology, Delhi',
      year: '2015-2019',
      grade: 'CGPA: 8.5/10'
    }
  ],
  experience: [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      duration: '2021 - Present',
      description: 'Leading a team of 4 developers in building scalable web applications using React and Node.js. Implemented microservices architecture resulting in 40% improved performance.'
    },
    {
      title: 'Software Engineer',
      company: 'StartupXYZ',
      duration: '2019 - 2021',
      description: 'Developed full-stack applications using Python Django and React. Built RESTful APIs and integrated third-party services.'
    }
  ],
  projects: [
    {
      name: 'E-commerce Platform',
      description: 'Built a full-stack e-commerce platform using React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      technologies: 'React, Node.js, MongoDB, Stripe API',
      link: 'https://github.com/johnsmith/ecommerce'
    },
    {
      name: 'Task Management App',
      description: 'Developed a collaborative task management application with real-time updates using Socket.io.',
      technologies: 'Vue.js, Express.js, Socket.io, PostgreSQL',
      link: 'https://github.com/johnsmith/taskapp'
    }
  ]
};

let isEditMode = false;

// --- Initialization ---
document.addEventListener('DOMContentLoaded', function() {
  initializePageContent(); // Populates content initially
  setupEventListeners();
  setViewMode(); // Sets initial display mode
});

function initializePageContent() {
  // Set initial profile photo
  document.getElementById('profile-photo').src = userData.profilePhoto;

  // Populate basic profile details
  document.getElementById('user-name-display').textContent = userData.name;
  document.getElementById('user-name-input').value = userData.name;
  document.getElementById('user-title-display').textContent = userData.title;
  document.getElementById('user-title-input').value = userData.title;
  document.getElementById('user-job-type-display').textContent = userData.jobType;
  if (document.getElementById('user-job-type-input').querySelector(`option[value="${userData.jobType}"]`)) {
    document.getElementById('user-job-type-input').value = userData.jobType;
  }

  document.getElementById('user-ctc-display').textContent = userData.currentCtc;
  document.getElementById('user-ctc-input').value = userData.currentCtc;
  document.getElementById('user-notice-display').textContent = userData.noticePeriod;
  if (document.getElementById('user-notice-input').querySelector(`option[value="${userData.noticePeriod}"]`)) {
    document.getElementById('user-notice-input').value = userData.noticePeriod;
  }

  document.getElementById('user-location-display').textContent = userData.location;
  document.getElementById('user-location-input').value = userData.location;
  document.getElementById('user-experience-display').textContent = userData.totalExperience;
  document.getElementById('user-experience-input').value = userData.totalExperience;
  document.getElementById('user-work-model-display').textContent = userData.workModel;
  if (document.getElementById('user-work-model-input').querySelector(`option[value="${userData.workModel}"]`)) {
    document.getElementById('user-work-model-input').value = userData.workModel;
  }

  document.getElementById('user-email-display').textContent = userData.email;
  document.getElementById('user-email-input').value = userData.email;

  // Populate Resume Title & About Me
  document.getElementById('resume-title-display').textContent = userData.resumeTitle;
  document.getElementById('resume-title-input').value = userData.resumeTitle;
  document.getElementById('about-display').textContent = userData.aboutMe;
  document.getElementById('about-input').value = userData.aboutMe;

  // Populate Candidate Details
  document.getElementById('candidate-type-display').textContent = userData.candidateDetails.type;
  if (document.getElementById('candidate-type-input').querySelector(`option[value="${userData.candidateDetails.type}"]`)) {
    document.getElementById('candidate-type-input').value = userData.candidateDetails.type;
  }

  document.getElementById('current-payroll-display').textContent = userData.candidateDetails.currentPayroll;
  document.getElementById('current-payroll-input').value = userData.candidateDetails.currentPayroll;
  document.getElementById('current-industry-display').textContent = userData.candidateDetails.currentIndustry;
  document.getElementById('current-industry-input').value = userData.candidateDetails.currentIndustry;
  document.getElementById('preferred-industry-display').textContent = userData.candidateDetails.preferredIndustry;
  document.getElementById('preferred-industry-input').value = userData.candidateDetails.preferredIndustry;
  document.getElementById('current-functional-area-display').textContent = userData.candidateDetails.currentFunctionalArea;
  document.getElementById('current-functional-area-input').value = userData.candidateDetails.currentFunctionalArea;
  document.getElementById('current-job-role-display').textContent = userData.candidateDetails.currentJobRole;
  document.getElementById('current-job-role-input').value = userData.candidateDetails.currentJobRole;
  document.getElementById('current-location-display').textContent = userData.candidateDetails.currentLocationDetail;
  document.getElementById('current-location-input').value = userData.candidateDetails.currentLocationDetail;
  document.getElementById('preferred-location-display').textContent = userData.candidateDetails.preferredLocation;
  document.getElementById('preferred-location-input').value = userData.candidateDetails.preferredLocation;
  document.getElementById('keywords-display').textContent = userData.candidateDetails.keywords;
  document.getElementById('keywords-input').value = userData.candidateDetails.keywords;
  document.getElementById('techno-skills-display').textContent = userData.candidateDetails.technoFunctionalSkills;
  document.getElementById('techno-skills-input').value = userData.candidateDetails.technoFunctionalSkills;
  document.getElementById('total-experience-detail-display').textContent = userData.candidateDetails.totalExperienceDetail;
  document.getElementById('total-experience-detail-input').value = userData.candidateDetails.totalExperienceDetail;
  document.getElementById('employment-experience-display').textContent = userData.candidateDetails.employmentExperience;
  document.getElementById('employment-experience-input').value = userData.candidateDetails.employmentExperience;
  document.getElementById('internship-experience-display').textContent = userData.candidateDetails.internshipExperience;
  document.getElementById('internship-experience-input').value = userData.candidateDetails.internshipExperience;
  document.getElementById('current-salary-display').textContent = userData.candidateDetails.currentSalary;
  document.getElementById('current-salary-input').value = userData.candidateDetails.currentSalary;
  document.getElementById('expected-salary-display').textContent = userData.candidateDetails.expectedSalary;
  document.getElementById('expected-salary-input').value = userData.candidateDetails.expectedSalary;
  document.getElementById('salary-negotiable-display').textContent = userData.candidateDetails.salaryNegotiable;
  if (document.getElementById('salary-negotiable-input').querySelector(`option[value="${userData.candidateDetails.salaryNegotiable}"]`)) {
    document.getElementById('salary-negotiable-input').value = userData.candidateDetails.salaryNegotiable;
  }

  document.getElementById('notice-period-detail-display').textContent = userData.candidateDetails.noticePeriodDetail;
  document.getElementById('notice-period-detail-input').value = userData.candidateDetails.noticePeriodDetail;
  document.getElementById('buy-out-display').textContent = userData.candidateDetails.buyOut;
  document.getElementById('buy-out-input').value = userData.candidateDetails.buyOut;

  // Render dynamic sections
  renderSkills();
  renderEducation();
  renderExperience();
  renderProjects();
}

// --- Event Listeners Setup ---
function setupEventListeners() {
  // Mode toggle buttons
  document.getElementById('edit-btn').addEventListener('click', setEditMode);
  document.getElementById('save-btn').addEventListener('click', saveChanges);
  document.getElementById('cancel-btn').addEventListener('click', () => {
    initializePageContent(); // Re-populate content to revert unsaved changes
    setViewMode(); // Then switch to view mode
  });

  // Photo upload
  document.getElementById('change-photo-btn').addEventListener('click', () => {
    document.getElementById('photo-input').click();
  });
  document.getElementById('photo-input').addEventListener('change', handlePhotoChange);

  // Resume upload
  document.getElementById('upload-resume-btn').addEventListener('click', () => {
    document.getElementById('resume-input').click();
  });
  // Add an event listener here if you want to handle the resume file once selected
  // document.getElementById('resume-input').addEventListener('change', handleResumeUpload);

  // Skills management
  document.getElementById('add-skill-btn').addEventListener('click', showAddSkillForm);
  document.getElementById('confirm-add-skill').addEventListener('click', addSkill);
  document.getElementById('cancel-add-skill').addEventListener('click', hideAddSkillForm);
  document.getElementById('new-skill-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addSkill();
  });

  // Education management
  document.getElementById('add-education-btn').addEventListener('click', showAddEducationForm);
  document.getElementById('confirm-add-education').addEventListener('click', addEducation);
  document.getElementById('cancel-add-education').addEventListener('click', hideAddEducationForm);

  // Experience management
  document.getElementById('add-experience-btn').addEventListener('click', showAddExperienceForm);
  document.getElementById('confirm-add-experience').addEventListener('click', addExperience);
  document.getElementById('cancel-add-experience').addEventListener('click', hideAddExperienceForm);

  // Projects management
  document.getElementById('add-project-btn').addEventListener('click', showAddProjectForm);
  document.getElementById('confirm-add-project').addEventListener('click', addProject);
  document.getElementById('cancel-add-project').addEventListener('click', hideAddProjectForm);
}

// --- Mode Management ---
function setEditMode() {
  isEditMode = true;
  document.body.classList.remove('view-mode');
  document.body.classList.add('edit-mode');
  // Hide all 'add' forms when entering edit mode
  hideAddSkillForm();
  hideAddEducationForm();
  hideAddExperienceForm();
  hideAddProjectForm();
}

function setViewMode() {
  isEditMode = false;
  document.body.classList.remove('edit-mode');
  document.body.classList.add('view-mode');
  // Hide all 'add' forms when switching back to view mode
  hideAddSkillForm();
  hideAddEducationForm();
  hideAddExperienceForm();
  hideAddProjectForm();
  // IMPORTANT: Do NOT call initializePageContent() here; it would cause infinite recursion
  // initializePageContent(); // This line was removed
}

// --- Data Saving ---
function saveChanges() {
  // Update userData object with values from input fields
  userData.name = document.getElementById('user-name-input').value;
  userData.title = document.getElementById('user-title-input').value;
  userData.jobType = document.getElementById('user-job-type-input').value;
  userData.currentCtc = document.getElementById('user-ctc-input').value;
  userData.noticePeriod = document.getElementById('user-notice-input').value;
  userData.location = document.getElementById('user-location-input').value;
  userData.totalExperience = document.getElementById('user-experience-input').value;
  userData.workModel = document.getElementById('user-work-model-input').value;
  userData.email = document.getElementById('user-email-input').value;
  userData.resumeTitle = document.getElementById('resume-title-input').value;
  userData.aboutMe = document.getElementById('about-input').value;

  // Update Candidate Details
  userData.candidateDetails.type = document.getElementById('candidate-type-input').value;
  userData.candidateDetails.currentPayroll = document.getElementById('current-payroll-input').value;
  userData.candidateDetails.currentIndustry = document.getElementById('current-industry-input').value;
  userData.candidateDetails.preferredIndustry = document.getElementById('preferred-industry-input').value;
  userData.candidateDetails.currentFunctionalArea = document.getElementById('current-functional-area-input').value;
  userData.candidateDetails.currentJobRole = document.getElementById('current-job-role-input').value;
  userData.candidateDetails.currentLocationDetail = document.getElementById('current-location-input').value;
  userData.candidateDetails.preferredLocation = document.getElementById('preferred-location-input').value;
  userData.candidateDetails.keywords = document.getElementById('keywords-input').value;
  userData.candidateDetails.technoFunctionalSkills = document.getElementById('techno-skills-input').value;
  userData.candidateDetails.totalExperienceDetail = document.getElementById('total-experience-detail-input').value;
  userData.candidateDetails.employmentExperience = document.getElementById('employment-experience-input').value;
  userData.candidateDetails.internshipExperience = document.getElementById('internship-experience-input').value;
  userData.candidateDetails.currentSalary = document.getElementById('current-salary-input').value;
  userData.candidateDetails.expectedSalary = document.getElementById('expected-salary-input').value;
  userData.candidateDetails.salaryNegotiable = document.getElementById('salary-negotiable-input').value;
  userData.candidateDetails.noticePeriodDetail = document.getElementById('notice-period-detail-input').value;
  userData.candidateDetails.buyOut = document.getElementById('buy-out-input').value;

  // In a real application, you would send this 'userData' object to your backend server
  console.log('Saving changes...', userData);

  showToast('Profile updated successfully!', 'success');

  // After saving, re-populate the display values with the updated data
  initializePageContent();
  // Then switch back to view mode
  setViewMode();
}

// --- Profile Photo Handling ---
function handlePhotoChange(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('profile-photo').src = e.target.result;
      userData.profilePhoto = e.target.result; // Update userData with the new photo
    };
    reader.readAsDataURL(file);
  }
}

// --- Skills Management ---
function renderSkills() {
  const container = document.getElementById('skills-container');
  container.innerHTML = userData.skills.map(skill => `
    <span class="skill-tag bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium relative group">
      ${skill}
      <button class="edit-only ml-2 text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity"
              onclick="removeSkill('${skill}')">
        <i class="fas fa-times text-xs"></i>
      </button>
    </span>
  `).join('');
}

function showAddSkillForm() {
  document.getElementById('add-skill-form').classList.remove('hidden');
  document.getElementById('new-skill-input').focus();
}

function hideAddSkillForm() {
  document.getElementById('add-skill-form').classList.add('hidden');
  document.getElementById('new-skill-input').value = '';
}

function addSkill() {
  const skillInput = document.getElementById('new-skill-input');
  const skill = skillInput.value.trim();

  if (skill && !userData.skills.includes(skill)) {
    userData.skills.push(skill);
    renderSkills();
    hideAddSkillForm();
    showToast('Skill added successfully!', 'success');
  } else if (skill && userData.skills.includes(skill)) {
    showToast('Skill already exists!', 'info');
  } else {
    showToast('Please enter a skill name.', 'error');
  }
}

function removeSkill(skill) {
  userData.skills = userData.skills.filter(s => s !== skill);
  renderSkills();
  showToast('Skill removed', 'info');
}

// --- Education Management ---
function renderEducation() {
  const container = document.getElementById('education-container');
  container.innerHTML = userData.education.map((edu, index) => `
    <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-3">
      <div class="flex justify-between items-start">
        <div class="flex-1">
          <h3 class="font-medium text-sm">${edu.degree}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-300">${edu.institution}</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">${edu.year} • ${edu.grade}</p>
        </div>
        <button class="edit-only text-red-500 hover:text-red-700 text-sm" onclick="removeEducation(${index})">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function showAddEducationForm() {
  document.getElementById('add-education-form').classList.remove('hidden');
  // Clear form fields
  document.getElementById('edu-degree-input').value = '';
  document.getElementById('edu-institution-input').value = '';
  document.getElementById('edu-year-input').value = '';
  document.getElementById('edu-grade-input').value = '';
}

function hideAddEducationForm() {
  document.getElementById('add-education-form').classList.add('hidden');
}

function addEducation() {
  const degree = document.getElementById('edu-degree-input').value.trim();
  const institution = document.getElementById('edu-institution-input').value.trim();
  const year = document.getElementById('edu-year-input').value.trim();
  const grade = document.getElementById('edu-grade-input').value.trim();

  if (degree && institution && year) {
    userData.education.push({ degree, institution, year, grade });
    renderEducation();
    hideAddEducationForm();
    showToast('Education added successfully!', 'success');
  } else {
    showToast('Please fill in all required education fields (Degree, Institution, Year).', 'error');
  }
}

function removeEducation(index) {
  userData.education.splice(index, 1);
  renderEducation();
  showToast('Education removed', 'info');
}

// --- Experience Management ---
function renderExperience() {
  const container = document.getElementById('experience-container');
  container.innerHTML = userData.experience.map((exp, index) => `
    <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-3">
      <div class="flex justify-between items-start mb-2">
        <div class="flex-1">
          <h3 class="font-medium text-sm">${exp.title}</h3>
          <p class="text-sm text-indigo-600 dark:text-indigo-400">${exp.company}</p>
          <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">${exp.duration}</p>
        </div>
        <button class="edit-only text-red-500 hover:text-red-700 text-sm" onclick="removeExperience(${index})">
          <i class="fas fa-trash"></i>
        </button>
      </div>
      <p class="text-sm text-gray-700 dark:text-gray-300">${exp.description}</p>
    </div>
  `).join('');
}

function showAddExperienceForm() {
  document.getElementById('add-experience-form').classList.remove('hidden');
  // Clear form fields
  document.getElementById('exp-title-input').value = '';
  document.getElementById('exp-company-input').value = '';
  document.getElementById('exp-duration-input').value = '';
  document.getElementById('exp-description-input').value = '';
}

function hideAddExperienceForm() {
  document.getElementById('add-experience-form').classList.add('hidden');
}

function addExperience() {
  const title = document.getElementById('exp-title-input').value.trim();
  const company = document.getElementById('exp-company-input').value.trim();
  const duration = document.getElementById('exp-duration-input').value.trim();
  const description = document.getElementById('exp-description-input').value.trim();

  if (title && company && duration && description) {
    userData.experience.push({ title, company, duration, description });
    renderExperience();
    hideAddExperienceForm();
    showToast('Experience added successfully!', 'success');
  } else {
    showToast('Please fill in all required experience fields.', 'error');
  }
}

function removeExperience(index) {
  userData.experience.splice(index, 1);
  renderExperience();
  showToast('Experience removed', 'info');
}

// --- Projects Management ---
function renderProjects() {
  const container = document.getElementById('projects-container');
  container.innerHTML = userData.projects.map((project, index) => `
    <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-3">
      <div class="flex justify-between items-start mb-2">
        <div class="flex-1">
          <h3 class="font-medium text-sm">${project.name}</h3>
          <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">${project.description}</p>
          <p class="text-xs text-gray-500 dark:text-gray-400 mb-2"><strong>Technologies:</strong> ${project.technologies}</p>
          ${project.link ? `<a href="${project.link}" target="_blank" class="text-blue-600 hover:text-blue-700 text-xs">
            <i class="fas fa-external-link-alt mr-1"></i>View Project
          </a>` : ''}
        </div>
        <button class="edit-only text-red-500 hover:text-red-700 text-sm" onclick="removeProject(${index})">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function showAddProjectForm() {
  document.getElementById('add-project-form').classList.remove('hidden');
  // Clear form fields
  document.getElementById('project-name-input').value = '';
  document.getElementById('project-description-input').value = '';
  document.getElementById('project-technologies-input').value = '';
  document.getElementById('project-link-input').value = '';
}

function hideAddProjectForm() {
  document.getElementById('add-project-form').classList.add('hidden');
}

function addProject() {
  const name = document.getElementById('project-name-input').value.trim();
  const description = document.getElementById('project-description-input').value.trim();
  const technologies = document.getElementById('project-technologies-input').value.trim();
  const link = document.getElementById('project-link-input').value.trim();

  if (name && description && technologies) {
    userData.projects.push({ name, description, technologies, link });
    renderProjects();
    hideAddProjectForm();
    showToast('Project added successfully!', 'success');
  } else {
    showToast('Please fill in all required project fields (Name, Description, Technologies).', 'error');
  }
}

function removeProject(index) {
  userData.projects.splice(index, 1);
  renderProjects();
  showToast('Project removed', 'info');
}

// --- Toast Notification ---
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `fixed top-4 right-4 z-50 px-4 py-2 rounded-lg text-white text-sm font-medium fade-in ${
    type === 'success' ? 'bg-green-600' :
    type === 'error' ? 'bg-red-600' :
    'bg-blue-600'
  }`;
  toast.textContent = message;

  document.body.appendChild(toast);

  // Remove the toast after a few seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300); // Allow fade-out animation to complete
  }, 3000);
}

// Make functions available globally for inline event handlers (e.g., onclick in generated HTML)
window.removeSkill = removeSkill;
window.removeEducation = removeEducation;
window.removeExperience = removeExperience;
window.removeProject = removeProject;