document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.querySelector('.back-btn');
    const viewButtons = document.querySelectorAll('.view-btn');
    
    // View button functionality
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const jobCard = this.closest('.border.border-gray-200');
            const jobTitle = jobCard.querySelector('h3').textContent;
            console.log(`Viewing details for: ${jobTitle}`);
            // In a real application, this would navigate to a job details page
            // or expand the job card to show more information
        });
    });
    
    // Back button functionality
    backBtn.addEventListener('click', function() {
        window.history.back();
    });
    
    // Add hover effects to job cards
    const jobCards = document.querySelectorAll('.border.border-gray-200');
    jobCards.forEach(card => {
        card.classList.add('job-card-hover');
    });
    
    // Add hover effects to social media icons
    const socialIcons = document.querySelectorAll('.w-10.h-10.rounded-full');
    socialIcons.forEach(icon => {
        icon.classList.add('social-icon-hover');
    });
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('button, .view-btn');
    buttons.forEach(button => {
        button.classList.add('btn-hover');
    });
    
    // Add custom focus styles
    const focusableElements = document.querySelectorAll('input, textarea, button');
    focusableElements.forEach(element => {
        element.classList.add('focus-ring');
    });
});