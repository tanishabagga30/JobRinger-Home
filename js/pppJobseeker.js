// Function to handle the FAQ accordion
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const isAlreadyOpen = answer.style.maxHeight;

    // Close all FAQ answers
    document.querySelectorAll('.faq-answer').forEach(ans => {
        ans.style.maxHeight = null;
        ans.previousElementSibling.querySelector('i').style.transform = "rotate(0deg)";
    });

    // If the clicked one wasn't already open, open it
    if (!isAlreadyOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        element.querySelector('i').style.transform = "rotate(180deg)";
    }
}

// Function to handle the Package Details accordion
function togglePackageDetails(button) {
    const currentCard = button.closest('.h-package-card');
    if (!currentCard) return;

    const allCards = document.querySelectorAll('.h-package-card');
    const isAlreadyOpen = currentCard.classList.contains('open');

    // First, close all cards.
    allCards.forEach(card => {
        card.classList.remove('open');
    });

    // If the clicked card wasn't already open, open it now.
    if (!isAlreadyOpen) {
        currentCard.classList.add('open');
    }
}

// Function to start the countdown timer
function startCountdown() {
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (!hoursEl || !minutesEl || !secondsEl) return;

    let totalSeconds = (parseInt(hoursEl.textContent) * 3600) +
                       (parseInt(minutesEl.textContent) * 60) +
                       parseInt(secondsEl.textContent);

    const countdownInterval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(countdownInterval);
            const timerContainer = document.querySelector('.timer-container');
            if (timerContainer) {
                timerContainer.innerHTML = "<div class='timer-title' style='font-size: 24px; color: var(--primary-dark);'>Offer has ended!</div>";
            }
            return;
        }
        totalSeconds--;
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;

        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }, 1000);
}

// Add all event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    startCountdown();

    // Listener for FAQ items
    document.querySelectorAll('.faq-question').forEach(item => {
        item.addEventListener('click', () => toggleFAQ(item));
    });

    // Listener for Package Card "View Details" buttons
    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', () => togglePackageDetails(button));
    });
});
