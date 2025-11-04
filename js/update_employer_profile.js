document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('update-profile-form'); 

    // Function to switch a section to View Mode
    const switchToViewMode = (sectionId) => {
        const section = document.getElementById(sectionId);
        const editBtn = document.querySelector(`.btn-edit[data-section="${sectionId.replace('-section', '')}"]`);
        
        section.classList.remove('edit-mode');
        section.classList.add('view-mode');
        if (editBtn) editBtn.classList.remove('hidden');
    };

    // Function to update the view values based on input fields
    const updateViewValues = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.querySelectorAll('.editable-field').forEach(field => {
            const valueSpan = section.querySelector(`.profile-value[data-field="${field.id}"]`);
            if (valueSpan) {
                let newValue = field.value.trim() || 'Not provided';
                
                if (field.tagName === 'SELECT') {
                    // For select, use the selected option's text
                    newValue = field.options[field.selectedIndex].text;
                } else if (field.type === 'textarea') {
                    // Handle line breaks for textareas
                    newValue = newValue.replace(/\n/g, '<br>');
                }

                valueSpan.innerHTML = newValue;
            }
        });
    };

    // Handle Edit button clicks
    document.querySelectorAll('.btn-edit').forEach(button => {
        button.addEventListener('click', () => {
            const sectionKey = button.dataset.section;
            const sectionId = sectionKey + '-section';
            const section = document.getElementById(sectionId);

            // Hide the edit button
            button.classList.add('hidden');
            
            // Switch the section to edit mode
            section.classList.remove('view-mode');
            section.classList.add('edit-mode');
        });
    });

    // Handle Cancel and Save button clicks within sections
    document.querySelectorAll('.btn-cancel, .btn-save').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionKey = button.dataset.section;
            const sectionId = sectionKey + '-section';

            if (button.classList.contains('btn-save')) {
                // Simplified Save logic
                updateViewValues(sectionId);
                alert(`Section: ${sectionKey} saved successfully!`);
            } else {
                // Cancel: Revert fields (omitted detailed revert logic for brevity, 
                // but in a real app, you would load original data here)
            }
            
            switchToViewMode(sectionId);
        });
    });

    // Handle form submission for the main "Update Profile" button
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // This button acts as a final submission for ALL sections, 
        // regardless of whether they were explicitly 'saved' via the section buttons.
        
        // 1. Run final 'save' on any currently open sections
        document.querySelectorAll('.profile-section.edit-mode').forEach(section => {
            const sectionId = section.id;
            updateViewValues(sectionId);
            switchToViewMode(sectionId);
        });

        // 2. Collect ALL data for final API call
        const finalData = {};
        document.querySelectorAll('.profile-section .editable-field').forEach(field => {
             // In a real application, you'd collect data from the hidden input fields 
             // as they would contain the live state of the form.
             finalData[field.id] = field.value;
        });

        console.log('Final Updated Data for submission:', finalData);
        alert('Profile saved and updated successfully! All changes are now live.');
    });
    
    // Initial setup for the Hide Contact checkbox value (assuming default is not hidden)
    const hideContactCheckbox = document.getElementById('hide-contact');
    if (hideContactCheckbox) {
        hideContactCheckbox.checked = false; 
    }
});