    document.addEventListener('DOMContentLoaded', () => {
        // --- Accordion functionality for Advanced Filters ---
        const filterToggleBtn = document.getElementById('filter-toggle-btn');
        const filtersContent = document.querySelector('.advanced-filters-content');

        if (filterToggleBtn && filtersContent) {
            // Hide the content by default on page load (handled by inline style)
            filtersContent.style.display = 'none';

            filterToggleBtn.addEventListener('click', () => {
                if (filtersContent.style.display === 'none') {
                    filtersContent.style.display = 'block';
                    filterToggleBtn.classList.add('open');
                } else {
                    filtersContent.style.display = 'none';
                    filterToggleBtn.classList.remove('open');
                }
            });
        }

        // --- Dynamic Select Population (from your original code) ---
        const countrySelect = document.getElementById('country');
        const locationSelect = document.getElementById('location');
        // ... add other selects you want to populate dynamically

        const locationData = {
            'India': ['Abu Road', 'Agartala', 'Agra', 'Ahmedabad', 'Bangalore', 'Chennai', 'Delhi NCR', 'Mumbai'],
            'USA': ['New York', 'Los Angeles', 'Chicago', 'Houston'],
            'UK': ['London', 'Manchester', 'Birmingham'],
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
            }
        });

        // --- Form Submission (from your original code) ---
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