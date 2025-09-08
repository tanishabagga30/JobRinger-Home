document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('update-profile-form'); // Corrected ID

    // Handle Edit button clicks
    document.querySelectorAll('.btn-edit').forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.dataset.section + '-section';
            const section = document.getElementById(sectionId);

            // Hide the edit button
            button.classList.add('hidden');
            
            // Switch the section to edit mode
            section.classList.remove('view-mode');
            section.classList.add('edit-mode');
        });
    });

    // Handle Cancel button clicks
    document.querySelectorAll('.btn-cancel').forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.dataset.section + '-section';
            const section = document.getElementById(sectionId);

            // Find the corresponding edit button and show it
            const editBtn = document.querySelector(`.btn-edit[data-section="${button.dataset.section}"]`);
            editBtn.classList.remove('hidden');

            // Revert to view mode
            section.classList.remove('edit-mode');
            section.classList.add('view-mode');

            // Revert all fields to their original values
            section.querySelectorAll('.editable-field').forEach(field => {
                const valueSpan = section.querySelector(`.profile-value[data-field="${field.id}"]`);
                if (valueSpan) {
                    if (field.tagName === 'SELECT') {
                        // For select, find the option that matches the text value
                        const originalValue = valueSpan.textContent.trim();
                        for (let i = 0; i < field.options.length; i++) {
                            if (field.options[i].text === originalValue) {
                                field.value = field.options[i].value;
                                break;
                            }
                        }
                    } else {
                        field.value = valueSpan.textContent.trim();
                    }
                }
            });
        });
    });

    // Handle form submission for the main "Update Profile" button
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // This is a simplified submission logic. In a real app, you would
        // collect the data from all *currently visible* input fields
        // and send it to the server via an API call.
        alert('Profile is being updated...');
        // Example of collecting data:
        const formData = {};
        form.querySelectorAll('.editable-field:not(.hidden)').forEach(field => {
            formData[field.id] = field.value;
        });

        console.log('Updated data:', formData);
        alert('Profile updated successfully!');
    });
});