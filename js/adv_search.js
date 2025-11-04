document.addEventListener('DOMContentLoaded', () => {
    
    // --- Accordion functionality for Advanced Filters ---
    const filtersHeader = document.getElementById('advanced-filters-header-toggle');
    const filterToggleBtn = document.getElementById('filter-toggle-btn');
    const filtersContent = document.querySelector('.advanced-filters-content');

    if (filtersHeader && filtersContent) {
        // Initialize state (content hidden, toggle icon down)
        filtersContent.style.display = 'none';
        
        filtersHeader.addEventListener('click', () => {
            if (filtersContent.style.display === 'none') {
                // Open the accordion
                filtersContent.style.display = 'block';
                filterToggleBtn.classList.add('open');
            } else {
                // Close the accordion
                filtersContent.style.display = 'none';
                filterToggleBtn.classList.remove('open');
            }
        });
    }

    // --- Dynamic Select Population ---
    const countrySelect = document.getElementById('country');
    const locationSelect = document.getElementById('location');

    const locationData = {
        'India': ['Bangalore', 'Chennai', 'Delhi NCR', 'Mumbai', 'Hyderabad', 'Pune'],
        'USA': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'San Francisco', 'Seattle'],
        'UK': ['London', 'Manchester', 'Birmingham', 'Glasgow'],
    };

    countrySelect.addEventListener('change', (e) => {
        const country = e.target.value;
        locationSelect.innerHTML = '<option value="" disabled selected>Select Location</option>';
        if (locationData[country]) {
            locationData[country].forEach(location => {
                const option = document.createElement('option');
                option.value = location;
                option.textContent = location;
                locationSelect.appendChild(option);
            });
            locationSelect.disabled = false;
        } else {
            locationSelect.disabled = true;
        }
    });

    if (countrySelect.value) {
        countrySelect.dispatchEvent(new Event('change'));
    }

    // --- Form Submission ---
    const form = document.getElementById('advanced-search-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const searchParams = {};
        for (const [key, value] of formData.entries()) {
            if (formData.getAll(key).length > 1) {
                searchParams[key] = formData.getAll(key);
            } else {
                searchParams[key] = value;
            }
        }
        console.log('Search Parameters:', searchParams);
        alert('Search submitted! Check console for parameters.');
    });
});