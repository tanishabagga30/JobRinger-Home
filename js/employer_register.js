document.addEventListener('DOMContentLoaded', () => {
    let currentStage = 1;
    const form = document.getElementById('registration-form');
    
    function showStage(stage) {
        document.querySelectorAll('.form-stage').forEach(el => {
            el.classList.remove('active');
        });
        document.getElementById(`stage-${stage}`).classList.add('active');

        document.querySelectorAll('.step').forEach(step => {
            step.classList.remove('active');
        });
        document.querySelector(`.step[data-step="${stage}"]`).classList.add('active');
    }

    function validateStage(stage) {
        const currentFormStage = document.getElementById(`stage-${stage}`);
        const requiredFields = currentFormStage.querySelectorAll('[required]');
        let allFieldsValid = true;

        requiredFields.forEach(field => {
            if (field.value.trim() === '') {
                field.classList.add('is-invalid');
                allFieldsValid = false;
            } else {
                field.classList.remove('is-invalid');
            }
        });

        // Specific validation for Stage 1
        if (stage === 1) {
            const password = document.getElementById('password');
            const confirmPassword = document.getElementById('confirm-password');
            if (password.value !== confirmPassword.value) {
                confirmPassword.classList.add('is-invalid');
                allFieldsValid = false;
            } else if (password.value.trim() !== '' && password.value === confirmPassword.value) {
                 confirmPassword.classList.remove('is-invalid');
            }
        }

        return allFieldsValid;
    }

    window.nextStage = () => {
        if (validateStage(currentStage)) {
            currentStage++;
            showStage(currentStage);
        } else {
            alert('Please fill out all required fields correctly.');
        }
    };

    window.prevStage = () => {
        currentStage--;
        showStage(currentStage);
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateStage(currentStage)) {
            // Process form submission
            alert('Registration complete! Submitting form data...');
            // In a real application, you would send the data to a server here
        } else {
            alert('Please fill out all required fields correctly.');
        }
    });

    // Initial state
    showStage(currentStage);
});