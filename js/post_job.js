document.addEventListener('DOMContentLoaded', () => {
    const jobTypeSelector = document.querySelector('.job-type-selector');
    const formStages = document.querySelectorAll('.form-stage');
    const progressSteps = document.querySelectorAll('.progress-indicator .step');
    const form = document.getElementById('post-job-form');
    let currentStage = 1;
    let selectedJobType = 'classic';

    // --- Job Type Selection ---
    jobTypeSelector.addEventListener('click', (e) => {
        const card = e.target.closest('.job-type-card');
        if (!card || card.classList.contains('active')) return;

        document.querySelector('.job-type-card.active').classList.remove('active');
        card.classList.add('active');
        selectedJobType = card.dataset.jobType;
        
        // Reset form and show the first stage for the new job type
        currentStage = 1;
        updateFormView();
    });

    // --- Form Navigation ---
    form.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-next')) {
            handleNext();
        } else if (e.target.classList.contains('btn-back')) {
            handleBack();
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Job Posted Successfully!');
        console.log('Final form data submitted.');
    });

    function handleNext() {
        const currentStageEl = document.getElementById(`stage-${currentStage}`);
        const requiredFields = currentStageEl.querySelectorAll('[required]');
        let allFieldsValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.classList.add('invalid');
                allFieldsValid = false;
            } else {
                field.classList.remove('invalid');
            }
        });

        if (allFieldsValid) {
            // Logic for different job types and stages
            if (selectedJobType === 'classic' && currentStage === 2) {
                currentStage = 4; // Skip Stage 3 for Classic
            } else if (currentStage === 3) {
                 currentStage = 4; // Move to final stage
            } else {
                currentStage++;
            }
            updateFormView();
        } else {
            alert('Please fill out all required fields.');
        }
    }

    function handleBack() {
        if (selectedJobType === 'classic' && currentStage === 4) {
            currentStage = 2; // Go back to Stage 2 from Stage 4
        } else {
            currentStage--;
        }
        updateFormView();
    }

    // --- UI Update Function ---
    function updateFormView() {
        // Update stage name
        document.getElementById('job-type-name').textContent = selectedJobType.charAt(0).toUpperCase() + selectedJobType.slice(1);
        if(document.getElementById('job-type-name-2')) {
           document.getElementById('job-type-name-2').textContent = selectedJobType.charAt(0).toUpperCase() + selectedJobType.slice(1);
        }
        if(document.getElementById('job-type-name-3')) {
           document.getElementById('job-type-name-3').textContent = selectedJobType.charAt(0).toUpperCase() + selectedJobType.slice(1);
        }

        // Show/hide stages
        formStages.forEach(stage => stage.classList.remove('active'));
        document.getElementById(`stage-${currentStage}`).classList.add('active');

        // Update progress indicator
        progressSteps.forEach(step => step.classList.remove('active'));
        if (selectedJobType === 'classic' && currentStage > 2) {
             document.querySelector('.step[data-step="1"]').classList.add('active');
             document.querySelector('.step[data-step="2"]').classList.add('active');
             document.querySelector('.step[data-step="4"]').classList.add('active');
        } else {
            for (let i = 1; i <= currentStage; i++) {
                document.querySelector(`.step[data-step="${i}"]`).classList.add('active');
            }
        }
    }

    // Initial load
    updateFormView();
});