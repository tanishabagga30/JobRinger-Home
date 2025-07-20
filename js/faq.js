document.addEventListener('DOMContentLoaded', function() {
    try {
        // Elements
        const faqItems = document.querySelectorAll('.faq-item');
        const categoryBtns = document.querySelectorAll('.category-btn');
        const searchInput = document.getElementById('searchInput');
        const noResults = document.getElementById('noResults');
        const faqSections = document.querySelectorAll('.faq-section');
        const contactSection = document.querySelector('.contact-section');

        // Initial state
        filterByCategory('all');
        noResults.style.display = 'none';
        
        // Create search clear button
        const searchContainer = searchInput.parentNode;
        const searchClear = document.createElement('span');
        searchClear.className = 'search-clear';
        searchClear.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i>';
        searchClear.style.display = 'none';
        searchClear.setAttribute('aria-label', 'Clear search');
        searchContainer.appendChild(searchClear);

        // Toggle FAQ items with accessibility
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const icon = item.querySelector('.faq-icon');
            
            // Initialize ARIA attributes
            item.setAttribute('aria-expanded', 'false');
            question.setAttribute('role', 'button');
            question.setAttribute('tabindex', '0');
            
            // Click handler
            question.addEventListener('click', toggleFAQ);
            
            // Keyboard support
            question.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFAQ.call(this);
                }
            });
            
            function toggleFAQ() {
                const isActive = item.classList.contains('active');
                
                // Close all other FAQ items on mobile
                if (window.innerWidth <= 768) {
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                            otherItem.setAttribute('aria-expanded', 'false');
                            otherItem.querySelector('.faq-icon').textContent = '+';
                        }
                    });
                }
                
                // Toggle current item
                item.classList.toggle('active');
                const nowActive = item.classList.contains('active');
                item.setAttribute('aria-expanded', nowActive.toString());
                icon.textContent = nowActive ? '−' : '+';
                
                // Smooth scroll to question if opening
                if (nowActive && window.innerWidth > 768) {
                    setTimeout(() => {
                        item.scrollIntoView({
                            behavior: 'smooth',
                            block: 'nearest'
                        });
                    }, 100);
                }
            }
        });

        // Category filtering
        categoryBtns.forEach(btn => {
            btn.setAttribute('aria-pressed', 'false');
            
            btn.addEventListener('click', function() {
                // Update active button
                categoryBtns.forEach(otherBtn => {
                    otherBtn.classList.remove('active');
                    otherBtn.setAttribute('aria-pressed', 'false');
                });
                
                btn.classList.add('active');
                btn.setAttribute('aria-pressed', 'true');
                
                const category = btn.dataset.category;
                filterByCategory(category);
                
                // Reset search
                searchInput.value = '';
                searchClear.style.display = 'none';
            });
        });

        function filterByCategory(category) {
            let hasVisibleItems = false;
            
            faqSections.forEach(section => {
                const showSection = category === 'all' || section.dataset.category === category;
                section.style.display = showSection ? 'block' : 'none';
                
                if (showSection) {
                    // Show all items in this section
                    const items = section.querySelectorAll('.faq-item');
                    items.forEach(item => {
                        item.style.display = 'block';
                        hasVisibleItems = true;
                    });
                }
            });
            
            // Update results visibility
            noResults.style.display = hasVisibleItems ? 'none' : 'block';
            contactSection.style.display = hasVisibleItems ? 'block' : 'none';
        }

        // Search functionality
        searchInput.addEventListener('input', function() {
            searchClear.style.display = this.value ? 'block' : 'none';
            
            clearTimeout(this.searchTimeout);
            this.searchTimeout = setTimeout(() => {
                const query = this.value.toLowerCase().trim();
                filterBySearch(query);
            }, 300);
        });

        searchClear.addEventListener('click', function() {
            searchInput.value = '';
            searchInput.focus();
            this.style.display = 'none';
            filterBySearch('');
        });

        function filterBySearch(query) {
            if (!query) {
                const activeCategory = document.querySelector('.category-btn.active').dataset.category;
                filterByCategory(activeCategory);
                return;
            }

            let hasResults = false;
            faqSections.forEach(section => {
                let sectionHasVisibleItems = false;
                const items = section.querySelectorAll('.faq-item');
                
                items.forEach(item => {
                    const question = item.querySelector('.faq-question span').textContent.toLowerCase();
                    const answer = item.querySelector('.faq-answer-content').textContent.toLowerCase();
                    
                    if (question.includes(query) || answer.includes(query)) {
                        item.style.display = 'block';
                        hasResults = true;
                        sectionHasVisibleItems = true;
                    } else {
                        item.style.display = 'none';
                    }
                });
                
                // Show section if it has visible items
                section.style.display = sectionHasVisibleItems ? 'block' : 'none';
            });
            
            // Update results visibility
            noResults.style.display = hasResults ? 'none' : 'block';
            contactSection.style.display = hasResults ? 'block' : 'none';
        }

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Responsive behavior
        const resizeObserver = new ResizeObserver(entries => {
            if (window.innerWidth > 768) {
                // Reset any mobile-specific states
                faqItems.forEach(item => {
                    item.style.display = 'block';
                });
            }
        });
        resizeObserver.observe(document.body);

        // Auto-close FAQ items when scrolling on mobile
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (window.innerWidth <= 768) {
                    faqItems.forEach(item => {
                        item.classList.remove('active');
                        item.setAttribute('aria-expanded', 'false');
                        item.querySelector('.faq-icon').textContent = '+';
                    });
                }
            }, 250);
        });

    } catch (error) {
        console.error('FAQ functionality error:', error);
        // Fallback: Ensure all content is visible
        document.querySelectorAll('.faq-section, .faq-item').forEach(el => {
            el.style.display = 'block';
        });
        if (noResults) noResults.style.display = 'none';
    }
});