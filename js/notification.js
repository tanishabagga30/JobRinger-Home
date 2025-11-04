document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on a desktop view and the specific activity element exists.
    const activitySlider = document.getElementById('activity-slider');
    
    // Check for the element and ensure it's a desktop width (where the layout is applied)
    if (activitySlider && window.matchMedia('(min-width: 1024px)').matches) {
        
        // Aesthetic touch: Scroll the activity list to the top on page load.
        // This ensures the user sees the newest item first in the scrollable panel.
        activitySlider.scrollTop = 0;

        console.log("Notification page desktop activity panel initialized.");
    }
});