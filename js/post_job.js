document.addEventListener('DOMContentLoaded', () => {
    const jobTypeSelector = document.querySelector('.job-type-selector');
    const formStages = document.querySelectorAll('.form-stage');
    const progressSteps = document.querySelectorAll('.progress-indicator .step');
    const form = document.getElementById('post-job-form');
    let currentStage = 1;
    let selectedJobType = 'classic';

    const premiumFieldsContainers = document.querySelectorAll('.premium-fields-container');
    const premiumUpgradeButtons = document.querySelectorAll('.btn-premium-upgrade');

    // Function to set the visual state of premium fields
    function setPremiumFieldsState(jobType) {
        premiumFieldsContainers.forEach(container => {
            const inputs = container.querySelectorAll('input, select, textarea');
            const overlay = container.querySelector('.premium-overlay-info');

            if (jobType === 'classic') {
                container.classList.add('premium-disabled');
                inputs.forEach(input => input.disabled = true);
                overlay.style.opacity = '1';
                overlay.style.pointerEvents = 'auto';
            } else {
                container.classList.remove('premium-disabled');
                inputs.forEach(input => input.disabled = false);
                overlay.style.opacity = '0';
                overlay.style.pointerEvents = 'none';
            }
        });
    }

    // --- Job Type Selection ---
    jobTypeSelector.addEventListener('click', (e) => {
        const card = e.target.closest('.job-type-card');
        if (!card || card.classList.contains('active')) return;

        document.querySelector('.job-type-card.active').classList.remove('active');
        card.classList.add('active');
        selectedJobType = card.dataset.jobType;
        
        setPremiumFieldsState(selectedJobType);

        // Reset form and show the first stage for the new job type
        currentStage = 1;
        updateFormView();
    });

    // --- Upgrade Button Handler ---
    premiumUpgradeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const premiumCard = document.querySelector('.job-type-card[data-job-type="premium"]');
            if (premiumCard) {
                document.querySelector('.job-type-card.active').classList.remove('active');
                premiumCard.classList.add('active');
                selectedJobType = 'premium';
                setPremiumFieldsState(selectedJobType);
            }
        });
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
        const requiredFields = currentStageEl.querySelectorAll('[required]:not([disabled])');
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
            currentStage++;
            updateFormView();
        } else {
            alert('Please fill out all required fields.');
        }
    }

    function handleBack() {
        currentStage--;
        updateFormView();
    }

    // --- UI Update Function ---
    function updateFormView() {
        // Update stage name
        document.getElementById('job-type-name').textContent = selectedJobType.charAt(0).toUpperCase() + selectedJobType.slice(1);
        document.getElementById('job-type-name-2').textContent = selectedJobType.charAt(0).toUpperCase() + selectedJobType.slice(1);

        // Show/hide stages
        formStages.forEach(stage => stage.classList.remove('active'));
        document.getElementById(`stage-${currentStage}`).classList.add('active');

        // Update progress indicator
        progressSteps.forEach(step => step.classList.remove('active'));
        for (let i = 1; i <= currentStage; i++) {
            document.querySelector(`.step[data-step="${i}"]`).classList.add('active');
        }
    }

    // Initial load
    setPremiumFieldsState('classic');
    updateFormView();
}); 