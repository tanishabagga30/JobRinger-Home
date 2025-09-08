// js/create-job-alert.js

document.addEventListener('DOMContentLoaded', () => {
    // Data for dependent dropdowns, derived from your provided text.
    const roleData = {
        "Airlines / Reservations / Ticketing / Travel / Merchant Navy": [
            "Ticketing / Travel / Documentation", "Business Development Manager", "Air Hostess / Flight Steward / Cabin Crew", "Pilot, CoPilot"
        ],
        "Data Analytics & Business Intelligence / Statistics": [
            "Data Analyst", "Business Analyst", "Data Scientist", "Marketing Analyst", "Statistician"
        ],
        "IT Software Programming / Analysis / Quality / Testing / Training": [
            "Back End Developer", "Front End Developer", "Full Stack Engineer", "Software Test Engineer", "Database Administrator (DBA)"
        ],
        "Finance / Accounts / Tax / Company Secretary / Audit": [
            "Accountant / Accounts Executive", "Chartered Accountant / CPA", "Finance Manager", "Company Secretary (CS) - Executive / Manager", "Internal Auditor"
        ]
        // ... more functional areas and roles would be added here
    };
    
    // Standalone lists, shortened for brevity
    const industries = ["IT - Software / Product Development", "Banking / Financial Services", "Automobile / Automotive", "Advertising / Public Relations", "Pharmaceutical / Medical Devices"];
    const locations = ["Anywhere in India", "Bengaluru / Bangalore", "Mumbai (All Areas)", "Delhi NCR", "Pune", "Hyderabad - Secunderabad", "Chennai / Madras", "Remote"];

    const functionalAreaSelect = document.getElementById('functional-area-select');
    const roleSelect = document.getElementById('role-select');
    const industrySelect = document.getElementById('industry-select');
    const locationSelect = document.getElementById('location-select');

    // Populate Functional Area dropdown
    for (const area in roleData) {
        functionalAreaSelect.add(new Option(area, area));
    }

    // Populate Industry dropdown
    industries.forEach(industry => {
        industrySelect.add(new Option(industry, industry));
    });

    // Populate Location dropdown
    locations.forEach(location => {
        locationSelect.add(new Option(location, location));
    });
    
    // Event listener for Functional Area change
    functionalAreaSelect.addEventListener('change', () => {
        const selectedArea = functionalAreaSelect.value;
        
        // Clear previous role options
        roleSelect.innerHTML = '<option value="">Select Role</option>';
        
        if (selectedArea && roleData[selectedArea]) {
            roleSelect.disabled = false;
            roleData[selectedArea].forEach(role => {
                roleSelect.add(new Option(role, role));
            });
        } else {
            roleSelect.disabled = true;
            roleSelect.innerHTML = '<option value="">Select a Functional Area first</option>';
        }
    });
});
