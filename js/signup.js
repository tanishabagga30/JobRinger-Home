tailwind.config = {
    darkMode: 'class'
}
document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const basicInfoForm = document.getElementById('basicInfoForm');
    const fullProfileForm = document.getElementById('fullProfileForm');
    const skipButton = document.getElementById('skip-button');
    const skipFullButton = document.getElementById('skip-full-button');
    const existingUserPrompt = document.getElementById('existing-user-prompt');
    const submissionMessage = document.getElementById('submission-message');

    // Handle file uploads
    function setupFileUpload(inputId, fileNameId, errorId, maxSize) {
        const fileInput = document.getElementById(inputId);
        const fileName = document.getElementById(fileNameId);
        const errorDisplay = document.getElementById(errorId);

        fileInput.addEventListener('change', function(e) {
            if (this.files && this.files.length > 0) {
                const file = this.files[0];
                const fileSizeMB = file.size / (1024 * 1024);
                
                // Validate file size
                if (fileSizeMB > maxSize) {
                    errorDisplay.textContent = `File size exceeds ${maxSize}MB limit.`;
                    errorDisplay.classList.remove('hidden');
                    fileName.textContent = inputId === 'resume-upload' ? 'Choose file' : 'Choose image';
                    return;
                }
                
                // Validate file type
                let isValid = true;
                if (inputId === 'resume-upload') {
                    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
                    isValid = validTypes.includes(file.type);
                } else if (inputId === 'photo-upload') {
                    isValid = file.type.startsWith('image/');
                }
                
                if (!isValid) {
                    errorDisplay.textContent = 'Invalid file type';
                    errorDisplay.classList.remove('hidden');
                    fileName.textContent = inputId === 'resume-upload' ? 'Choose file' : 'Choose image';
                    return;
                }
                
                // Valid file
                fileName.textContent = file.name;
                errorDisplay.classList.add('hidden');
            }
        });
    }

    // Setup file uploads
    setupFileUpload('resume-upload', 'resume-file-name', 'resume-error', 2);
    setupFileUpload('photo-upload', 'photo-file-name', 'photo-error', 2);

    // Check if email exists in database (simulated)
    function checkEmailExists(email) {
        // In a real app, you would make an API call here
        // For demo, we'll simulate with a 10% chance the email exists
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(Math.random() < 0.1);
            }, 1000);
        });
    }

    // Handle basic info form submission
    basicInfoForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        
        // Check if email exists
        const emailExists = await checkEmailExists(email);
        if (emailExists) {
            existingUserPrompt.classList.remove('hidden');
            return;
        }
        
        // Validate required fields
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const phone = document.getElementById('phone').value;
        const resume = document.getElementById('resume-upload').files[0];
        
        if (!firstName || !lastName || !phone || !resume) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Show full profile form
        basicInfoForm.classList.add('hidden');
        fullProfileForm.classList.remove('hidden');
    });

    // Handle skip button
    skipButton.addEventListener('click', function() {
        submissionMessage.classList.remove('hidden');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    });

    // Handle skip full profile button
    skipFullButton.addEventListener('click', function() {
        submissionMessage.classList.remove('hidden');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    });

    // Handle full profile form submission
    fullProfileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate required fields
        const industry = document.getElementById('industry').value;
        const functionalArea = document.getElementById('functional-area').value;
        const profileType = document.getElementById('profile-type').value;
        
        if (!industry || !functionalArea || !profileType) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Simulate form submission
        submissionMessage.classList.remove('hidden');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    });
});