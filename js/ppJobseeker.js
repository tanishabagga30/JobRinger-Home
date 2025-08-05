// Function to handle the FAQ accordion
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('i');

    // Close other open FAQs
    const allAnswers = document.querySelectorAll('.faq-answer');
    allAnswers.forEach(ans => {
        if (ans !== answer && ans.style.maxHeight) {
            ans.style.maxHeight = null;
            ans.previousElementSibling.querySelector('i').style.transform = "rotate(0deg)";
        }
    });

    // Toggle the clicked FAQ
    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        icon.style.transform = "rotate(0deg)";
    } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.style.transform = "rotate(180deg)";
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
            document.querySelector('.timer-container').innerHTML = "<div class='timer-title' style='font-size: 24px; color: var(--primary-dark);'>Offer has ended!</div>";
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

// Start the countdown when the page has loaded
document.addEventListener('DOMContentLoaded', startCountdown);
