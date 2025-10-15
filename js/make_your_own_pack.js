document.addEventListener('DOMContentLoaded', () => {

    const services = [
        { name: 'Mass Emails', unitPrice: 0.90 },
        { name: 'Mass SMS', unitPrice: 0.90 },
        { name: 'Excel Downloads (Profiles)', unitPrice: 6.00 },
        { name: 'Resume Access (Profiles)', unitPrice: 6.00 },
        { name: 'Featured Employer (Days)', unitPrice: 100.00 },
        { name: 'Sub Users', unitPrice: 500.00 },
        { name: 'Classic International Job Posts', unitPrice: 200.00 },
        { name: 'Premium Job Posts', unitPrice: 490.00 },
        { name: 'Premium International Job Posts', unitPrice: 595.00 },
        { name: 'Virtual Walkin Job Posts', unitPrice: 490.00 }
    ];

    const serviceList = document.getElementById('service-list');
    const totalElement = document.getElementById('total-price');

    /**
     * Renders all service items on the page.
     */
    function renderServices() {
        serviceList.innerHTML = '';
        services.forEach((service, index) => {
            const serviceItem = document.createElement('div');
            serviceItem.classList.add('service-item');
            serviceItem.dataset.index = index;
            serviceItem.innerHTML = `
                <div class="service-details">
                    <span class="service-name">${service.name}</span>
                    <span class="service-price">Rs. ${service.unitPrice.toFixed(2)}</span>
                </div>
                <div class="quantity-control">
                    <button class="quantity-btn decrease-btn">-</button>
                    <input type="number" class="quantity-input" value="0" min="0">
                    <button class="quantity-btn increase-btn">+</button>
                </div>
            `;
            serviceList.appendChild(serviceItem);
        });

        attachEventListeners();
    }

    /**
     * Calculates and updates the total price based on all quantities.
     */
    function calculateTotal() {
        let total = 0;
        document.querySelectorAll('.service-item').forEach(item => {
            const index = item.dataset.index;
            const quantity = parseInt(item.querySelector('.quantity-input').value, 10);
            if (!isNaN(quantity) && quantity > 0) {
                total += quantity * services[index].unitPrice;
            }
        });
        totalElement.textContent = `Rs. ${total.toFixed(2)}`;
    }

    /**
     * Attaches event listeners to all quantity buttons.
     */
    function attachEventListeners() {
        document.querySelectorAll('.quantity-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const input = event.target.closest('.quantity-control').querySelector('.quantity-input');
                let currentValue = parseInt(input.value, 10);
                if (isNaN(currentValue)) currentValue = 0;

                if (event.target.classList.contains('increase-btn')) {
                    input.value = currentValue + 1;
                } else if (event.target.classList.contains('decrease-btn') && currentValue > 0) {
                    input.value = currentValue - 1;
                }
                
                calculateTotal();
            });
        });

        document.querySelectorAll('.quantity-input').forEach(input => {
            input.addEventListener('input', () => {
                calculateTotal();
            });
        });
    }

    // Initial render and calculation
    renderServices();
    calculateTotal();
});
