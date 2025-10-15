document.addEventListener('DOMContentLoaded', function() {
    // --- Sidebar Navigation Active State ---
    const navItems = document.querySelectorAll('.sidebar-nav .nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent page reload for demo

            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));

            // Add active class to the clicked item
            this.classList.add('active');

            // You can add logic here to load page content dynamically
            const page = this.querySelector('span').textContent;
            console.log(`Navigating to: ${page}`);
        });
    });

    // --- You can add more JS functionality below ---
    // For example: handling "View All" clicks, fetching data, etc.

});
