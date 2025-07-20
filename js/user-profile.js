// Sample data
const userData = {
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

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  initializePage();
  setupEventListeners();
});

function initializePage() {
  renderSkills();
  renderEducation();
  renderExperience();
  renderProjects();
  setViewMode();
}

function setupEventListeners() {
  // Mode toggle buttons
  document.getElementById('edit-btn').addEventListener('click', setEditMode);
  document.getElementById('save-btn').addEventListener('click', saveChanges);
  document.getElementById('cancel-btn').addEventListener('click', setViewMode);

  // Photo upload
  document.getElementById('change-photo-btn').addEventListener('click', () => {
    document.getElementById('photo-input').click();
  });
  
  document.getElementById('photo-input').addEventListener('change', handlePhotoChange);

  // Resume upload
  document.getElementById('upload-resume-btn').addEventListener('click', () => {
    document.getElementById('resume-input').click();
  });

  // Skills management
  document.getElementById('add-skill-btn').addEventListener('click', showAddSkillForm);
  document.getElementById('confirm-add-skill').addEventListener('click', addSkill);
  document.getElementById('cancel-add-skill').addEventListener('click', hideAddSkillForm);
  document.getElementById('new-skill-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addSkill();
  });
}

function setEditMode() {
  isEditMode = true;
  document.body.classList.remove('view-mode');
  document.body.classList.add('edit-mode');
}

function setViewMode() {
  isEditMode = false;
  document.body.classList.remove('edit-mode');
  document.body.classList.add('view-mode');
  hideAddSkillForm();
}

function saveChanges() {
  // Here you would typically send the data to your server
  console.log('Saving changes...');
  
  // Show success message
  showToast('Profile updated successfully!', 'success');
  
  // Switch back to view mode
  setViewMode();
}

function handlePhotoChange(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('profile-photo').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

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
  }
}

function removeSkill(skill) {
  userData.skills = userData.skills.filter(s => s !== skill);
  renderSkills();
  showToast('Skill removed', 'info');
}

function renderEducation() {
  const container = document.getElementById('education-container');
  container.innerHTML = userData.education.map(edu => `
    <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
      <div class="flex justify-between items-start">
        <div class="flex-1">
          <h3 class="font-medium text-sm">${edu.degree}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-300">${edu.institution}</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">${edu.year} • ${edu.grade}</p>
        </div>
        <button class="edit-only text-red-500 hover:text-red-700 text-sm" onclick="removeEducation(0)">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  `).join('');
}

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

function renderProjects() {
  const container = document.getElementById('projects-container');
  container.innerHTML = userData.projects.map((project, index) => `
    <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-3">
      <div class="flex justify-between items-start mb-2">
        <div class="flex-1">
          <h3 class="font-medium text-sm">${project.name}</h3>
          <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">${project.description}</p>
          <p class="text-xs text-gray-500 dark:text-gray-400 mb-2"><strong>Technologies:</strong> ${project.technologies}</p>
          <a href="${project.link}" target="_blank" class="text-blue-600 hover:text-blue-700 text-xs">
            <i class="fas fa-external-link-alt mr-1"></i>View Project
          </a>
        </div>
        <button class="edit-only text-red-500 hover:text-red-700 text-sm" onclick="removeProject(${index})">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function removeEducation(index) {
  userData.education.splice(index, 1);
  renderEducation();
  showToast('Education removed', 'info');
}

function removeExperience(index) {
  userData.experience.splice(index, 1);
  renderExperience();
  showToast('Experience removed', 'info');
}

function removeProject(index) {
  userData.projects.splice(index, 1);
  renderProjects();
  showToast('Project removed', 'info');
}

function showToast(message, type = 'info') {
  // Create toast notification
  const toast = document.createElement('div');
  toast.className = `fixed top-4 right-4 z-50 px-4 py-2 rounded-lg text-white text-sm font-medium fade-in ${
    type === 'success' ? 'bg-green-600' : 
    type === 'error' ? 'bg-red-600' : 
    'bg-blue-600'
  }`;
  toast.textContent = message;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}



// Make functions available globally for inline event handlers
window.removeSkill = removeSkill;
window.removeEducation = removeEducation;
window.removeExperience = removeExperience;
window.removeProject = removeProject;