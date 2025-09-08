// js/job-alerts.js
document.addEventListener('DOMContentLoaded', () => {

    // Mock data for job alerts
    const alerts = [
        {
            id: 'alert001',
            title: 'Frontend Developer Roles',
            criteria: ['React', 'Remote', 'USA', 'Full-time'],
            active: true
        },
        {
            id: 'alert002',
            title: 'Marketing Manager (India)',
            criteria: ['Marketing', 'Manager', 'Mumbai, IN', '5+ years exp'],
            active: true
        },
        {
            id: 'alert003',
            title: 'Junior UX Designer',
            criteria: ['UX Design', 'Internship', 'Remote'],
            active: false
        }
    ];

    const alertsContainer = document.getElementById('job-alerts-list');
    const noAlertsMessage = document.getElementById('no-alerts-message');

    function renderAlerts() {
        alertsContainer.innerHTML = ''; // Clear previous content

        if (alerts.length === 0) {
            noAlertsMessage.classList.remove('hidden');
            return;
        }
        noAlertsMessage.classList.add('hidden');

        alerts.forEach(alert => {
            const card = document.createElement('div');
            card.className = 'alert-card';
            card.setAttribute('data-id', alert.id);

            const criteriaHTML = alert.criteria.map(c => `<span class="criterion">${c}</span>`).join('');
            const statusText = alert.active ? 'Active' : 'Paused';
            const isChecked = alert.active ? 'checked' : '';

            card.innerHTML = `
                <div class="alert-details">
                    <h3>${alert.title}</h3>
                    <div class="alert-criteria">${criteriaHTML}</div>
                </div>
                <div class="alert-actions">
                    <div class="status-control">
                        <label class="toggle-switch">
                            <input type="checkbox" ${isChecked}>
                            <span class="slider"></span>
                        </label>
                        <span class="status-text">${statusText}</span>
                    </div>
                    <div class="action-buttons">
                        <button title="Edit Alert"><i class="fas fa-pencil-alt"></i></button>
                        <button title="Delete Alert"><i class="fas fa-trash-alt"></i></button>
                    </div>
                </div>
            `;
            alertsContainer.appendChild(card);
        });
    }

    // Handle toggle switch clicks
    alertsContainer.addEventListener('click', (event) => {
        if (event.target.type === 'checkbox') {
            const card = event.target.closest('.alert-card');
            const alertId = card.getAttribute('data-id');
            const statusText = card.querySelector('.status-text');
            const alertData = alerts.find(a => a.id === alertId);

            alertData.active = event.target.checked;
            statusText.textContent = alertData.active ? 'Active' : 'Paused';

            // In a real app, you would make an API call here to save the new status
            console.log(`Alert ${alertId} status changed to: ${alertData.active}`);
        }
    });

    // Initial render
    renderAlerts();
});
