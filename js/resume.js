// Enhanced resume.js with better UX and validation

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('profileForm');
    const resumeUploadInput = document.getElementById('resume-upload');
    const fileNameSpan = document.getElementById('file-name');
    const submissionMessage = document.getElementById('submission-message');
    const errorMessage = document.getElementById('error-message');
    const newNumberFieldInput = document.getElementById('new-number-field');

    // Check if user is logged in
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
        window.location.href = 'login.html';
        return;
    }

    // Function to show loading state
    function showLoading(button) {
        button.disabled = true;
        button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Processing...';
    }

    // Function to hide loading state
    function hideLoading(button, originalText) {
        button.disabled = false;
        button.innerHTML = originalText;
    }

    // Function to show toast notifications
    function showToast(message, type = 'success') {
        const toast = document.createElement('div');
        const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
        const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
        
        toast.className = `fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300`;
        toast.innerHTML = `<i class="fas ${icon} mr-2"></i>${message}`;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // Update file name display with file validation
    resumeUploadInput.addEventListener('change', function() {
        if (this.files.length > 0) {
            const file = this.files[0];
            const maxSize = 10 * 1024 * 1024; // 10MB
            const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            
            // Check file size
            if (file.size > maxSize) {
                showToast('File size must be less than 10MB', 'error');
                this.value = '';
                fileNameSpan.textContent = 'Upload a file';
                return;
            }
            
            // Check file type
            if (!allowedTypes.includes(file.type)) {
                showToast('Please upload a PDF, DOC, or DOCX file', 'error');
                this.value = '';
                fileNameSpan.textContent = 'Upload a file';
                return;
            }
            
            fileNameSpan.textContent = file.name;
            showToast('Resume uploaded successfully!');
        } else {
            fileNameSpan.textContent = 'Upload a file';
        }
    });

    // Real-time validation for CTC
    const ctcInput = document.getElementById('ctc');
    ctcInput.addEventListener('input', function() {
        const value = parseFloat(this.value);
        if (value < 0) {
            this.setCustomValidity('CTC cannot be negative');
        } else if (value > 100) {
            this.setCustomValidity('Please enter a reasonable CTC value');
        } else {
            this.setCustomValidity('');
        }
    });

    // Real-time validation for phone number
    newNumberFieldInput.addEventListener('input', function() {
        const phoneRegex = /^\+?\d{10,15}$/;
        if (!phoneRegex.test(this.value) && this.value !== '') {
            this.setCustomValidity('Please enter a valid phone number (10-15 digits)');
        } else {
            this.setCustomValidity('');
        }
    });

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const submitButton = event.target.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;

        let isValid = true;
        errorMessage.classList.add('hidden');

        // Validate resume upload
        if (resumeUploadInput.files.length === 0) {
            isValid = false;
            errorMessage.querySelector('.text-sm').textContent = 'Please upload your resume.';
            errorMessage.classList.remove('hidden');
        }

        // Validate CTC
        const ctcValue = parseFloat(ctcInput.value);
        if (!ctcInput.value || ctcValue <= 0 || ctcValue > 100) {
            isValid = false;
            errorMessage.querySelector('.text-sm').textContent = 'Please enter a valid Current CTC (0.1 - 100 LPA).';
            errorMessage.classList.remove('hidden');
        }

        // Validate Notice Period
        const noticePeriodInput = document.getElementById('notice-period');
        const noticePeriodValue = parseInt(noticePeriodInput.value);
        if (!noticePeriodInput.value || noticePeriodValue < 0) {
            isValid = false;
            errorMessage.querySelector('.text-sm').textContent = 'Please enter a valid Notice Period.';
            errorMessage.classList.remove('hidden');
        }

        // Validate Phone Number
        const phoneRegex = /^\+?\d{10,15}$/;
        if (!newNumberFieldInput.value || !phoneRegex.test(newNumberFieldInput.value)) {
            isValid = false;
            errorMessage.querySelector('.text-sm').textContent = 'Please enter a valid phone number (10-15 digits).';
            errorMessage.classList.remove('hidden');
        }

        if (isValid) {
            showLoading(submitButton);
            
            // Simulate API call for profile submission
            setTimeout(() => {
                try {
                    // Collect form data
                    const formData = {
                        email: userEmail,
                        resume: resumeUploadInput.files[0].name,
                        ctc: ctcValue,
                        noticePeriod: noticePeriodValue,
                        noticePeriodUnit: document.getElementById('notice-period-unit').value,
                        phoneNumber: newNumberFieldInput.value,
                        submissionDate: new Date().toISOString()
                    };

                    // Save profile data to localStorage (in real app, send to backend)
                    localStorage.setItem('profileData', JSON.stringify(formData));
                    localStorage.setItem('profileCompleted', 'true');
                    localStorage.setItem('profileCompletionDate', Date.now().toString());

                    console.log('Profile completed successfully:', formData);

                    // Show success message and redirect
                    hideLoading(submitButton, originalText);
                    submissionMessage.classList.remove('hidden');
                    errorMessage.classList.add('hidden');
                    form.classList.add('hidden');

                    // Show success toast
                    showToast('Profile completed successfully! Redirecting to job dashboard...');

                    // Redirect to job page
                    setTimeout(() => {
                        window.location.href = 'jobPage.html';
                    }, 2000);

                } catch (error) {
                    console.error('Profile submission error:', error);
                    hideLoading(submitButton, originalText);
                    showToast('Failed to save profile. Please try again.', 'error');
                    errorMessage.querySelector('.text-sm').textContent = 'Failed to save profile. Please try again.';
                    errorMessage.classList.remove('hidden');
                }
            }, 1500);
        } else {
            // Scroll to error message
            errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });

    // Add drag and drop functionality for resume upload
    const dropZone = resumeUploadInput.closest('.border-dashed');
    
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('border-indigo-500', 'bg-indigo-50');
    });
    
    dropZone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        dropZone.classList.remove('border-indigo-500', 'bg-indigo-50');
    });
    
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('border-indigo-500', 'bg-indigo-50');
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            resumeUploadInput.files = files;
            resumeUploadInput.dispatchEvent(new Event('change'));
        }
    });

    // Add progress indicator
    function updateProgressIndicator(step) {
        const progressSteps = ['Login', 'Complete Profile', 'Job Dashboard'];
        const currentStep = step; // 1 for profile completion
        
        // You can add a progress bar here if needed
        console.log(`Progress: ${currentStep}/3 - ${progressSteps[currentStep - 1]}`);
    }

    // Initialize progress
    updateProgressIndicator(2);
});