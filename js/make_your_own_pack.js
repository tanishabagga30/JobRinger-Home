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
    const proceedButton = document.getElementById('proceed-button');
    const changePackageBtn = document.getElementById('change-package-btn');
    const serviceSelectionCard = document.getElementById('service-selection-card');
    const gstTaxSection = document.getElementById('gst-tax-section');


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
     * NOTE: This function currently uses simplified logic for the tax breakdown demonstration.
     */
    function calculateTotal() {
        let subTotal = 0;
        document.querySelectorAll('.service-item').forEach(item => {
            const index = item.dataset.index;
            const quantity = parseInt(item.querySelector('.quantity-input').value, 10);
            if (!isNaN(quantity) && quantity > 0) {
                subTotal += quantity * services[index].unitPrice;
            }
        });
        
        // --- TAX CALCULATION (Simplified for demonstration) ---
        const GST_RATE = 0.18; // 18% GST (9% CGST + 9% SGST)
        const IGST_RATE = 0.18; // Assume 18% IGST
        
        // For demonstration, assume CGST/SGST applies
        const cgst = subTotal * 0.09;
        const sgst = subTotal * 0.09;
        const totalTax = cgst + sgst;
        const finalTotal = subTotal + totalTax;

        totalElement.textContent = `Rs. ${subTotal.toFixed(2)}`;
        
        // Update Tax Breakdown (Hardcoded IDs for the breakdown table)
        document.getElementById('summary-subtotal').textContent = `Rs. ${subTotal.toFixed(2)}`;
        document.getElementById('summary-sgst').textContent = `Rs. ${sgst.toFixed(2)}`;
        document.getElementById('summary-cgst').textContent = `Rs. ${cgst.toFixed(2)}`;
        document.getElementById('summary-final-total').textContent = `Rs. ${finalTotal.toFixed(2)}`;
        // Note: The IGST/CESS fields would require conditional logic based on state/GST checkbox status.
    }

    /**
     * Attaches event listeners to all quantity buttons.
     */
    function attachEventListeners() {
        document.querySelectorAll('.quantity-btn, .quantity-input').forEach(control => {
            control.addEventListener('click', (event) => {
                const isInput = event.target.classList.contains('quantity-input');
                const targetElement = isInput ? event.target : event.target.closest('.quantity-control').querySelector('.quantity-input');
                let currentValue = parseInt(targetElement.value, 10);
                if (isNaN(currentValue)) currentValue = 0;

                if (event.target.classList.contains('increase-btn')) {
                    targetElement.value = currentValue + 1;
                } else if (event.target.classList.contains('decrease-btn') && currentValue > 0) {
                    targetElement.value = currentValue - 1;
                }
                
                calculateTotal();
            });
            // Handle direct input changes
             if (control.tagName === 'INPUT') {
                control.addEventListener('input', calculateTotal);
            }
        });
    }

    // --- NEW STATE MANAGEMENT FUNCTION ---
    function toggleCheckoutState(showCheckout) {
        if (showCheckout) {
            serviceSelectionCard.classList.add('hidden');
            gstTaxSection.classList.remove('hidden');
        } else {
            serviceSelectionCard.classList.remove('hidden');
            gstTaxSection.classList.add('hidden');
        }
    }

    // --- Event Listeners for Checkout Buttons ---
    proceedButton.addEventListener('click', () => {
        // You would typically validate the cart here before proceeding
        toggleCheckoutState(true);
    });

    changePackageBtn.addEventListener('click', () => {
        toggleCheckoutState(false);
    });
    
    // Initial render and calculation
    renderServices();
    calculateTotal();
});