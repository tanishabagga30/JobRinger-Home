document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('profileForm');
    const resumeUploadInput = document.getElementById('resume-upload');
    const fileNameSpan = document.getElementById('file-name');
    const submissionMessage = document.getElementById('submission-message');
    const errorMessage = document.getElementById('error-message');
    const newNumberFieldInput = document.getElementById('new-number-field');

    // Update file name display
    resumeUploadInput.addEventListener('change', function() {
        if (this.files.length > 0) {
            fileNameSpan.textContent = this.files[0].name;
        } else {
            fileNameSpan.textContent = 'Upload a file';
        }
    });

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true;
        errorMessage.classList.add('hidden');

        // Check resume upload
        if (resumeUploadInput.files.length === 0) {
            isValid = false;
            errorMessage.textContent = 'Error! Please upload your resume.';
            errorMessage.classList.remove('hidden');
        }

        // Check CTC
        const ctcInput = document.getElementById('ctc');
        if (!ctcInput.value || parseFloat(ctcInput.value) <= 0) {
            isValid = false;
            errorMessage.textContent = 'Error! Please enter a valid Current CTC.';
            errorMessage.classList.remove('hidden');
        }

        // Check Notice Period
        const noticePeriodInput = document.getElementById('notice-period');
        if (!noticePeriodInput.value || parseInt(noticePeriodInput.value) < 0) {
            isValid = false;
            errorMessage.textContent = 'Error! Please enter a valid Notice Period.';
            errorMessage.classList.remove('hidden');
        }

        // Check Phone Number
        const phoneRegex = /^\+?\d{10,15}$/;
        if (!newNumberFieldInput.value || !phoneRegex.test(newNumberFieldInput.value)) {
            isValid = false;
            errorMessage.textContent = 'Error! Please enter a valid phone number (e.g., +911234567890).';
            errorMessage.classList.remove('hidden');
        }

        if (isValid) {
            // Simulate saving profile data
            console.log('Form data submitted:');
            console.log('Resume:', resumeUploadInput.files[0] ? resumeUploadInput.files[0].name : 'No file');
            console.log('Current CTC:', ctcInput.value + ' LPA');
            console.log('Notice Period:', noticePeriodInput.value + ' ' + document.getElementById('notice-period-unit').value);
            console.log('Phone Number:', newNumberFieldInput.value);

            // Save profile completion status
            localStorage.setItem('profileCompleted', 'true');

            // Show success message and redirect
            submissionMessage.classList.remove('hidden');
            errorMessage.classList.add('hidden');
            form.classList.add('hidden');

            setTimeout(() => {
                window.location.href = 'jobPage.html';
            }, 2000);
        }
    });
});