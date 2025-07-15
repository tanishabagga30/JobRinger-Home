document.addEventListener('DOMContentLoaded', () => {
  const steps = {
    email: document.getElementById('step-email'),
    otp: document.getElementById('step-otp'),
    password: document.getElementById('step-password')
  };
  const emailDisplay = document.getElementById('email-display');
  const passwordEmailDisplay = document.getElementById('password-email-display');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const togglePassword = document.querySelector('.toggle-password');
  const otpInputs = document.querySelectorAll('.otp-digit');
  const otpTimer = document.getElementById('otp-timer');

  // Function to switch steps
  function switchStep(hideStep, showStep) {
    hideStep.classList.remove('active');
    hideStep.classList.add('hidden');
    showStep.classList.remove('hidden');
    showStep.classList.add('active');
  }

  // Email form submission
  document.getElementById('email-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    emailDisplay.textContent = email;
    passwordEmailDisplay.textContent = email;
    switchStep(steps.email, steps.otp);
    startOtpTimer();
  });


  document.getElementById('otp-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('OTP verified Redirecting...');
  });

  // Password form submission 
  document.getElementById('password-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Password login Redirecting...');
  });

  // Toggle password visibility
  togglePassword.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    togglePassword.querySelector('i').classList.toggle('fa-eye');
    togglePassword.querySelector('i').classList.toggle('fa-eye-slash');
  });

  // OTP input handling
  otpInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      if (e.target.value.length === 1 && index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !e.target.value && index > 0) {
        otpInputs[index - 1].focus();
      }
    });
  });

  // OTP timer
  function startOtpTimer() {
    let time = 90; // 1:30 in seconds
    const timer = setInterval(() => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      otpTimer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      time--;
      if (time < 0) {
        clearInterval(timer);
        otpTimer.textContent = 'Code expired';
        document.getElementById('btn-resend-otp').classList.remove('text-indigo-600', 'hover:text-indigo-800');
        document.getElementById('btn-resend-otp').classList.add('text-indigo-400');
      }
    }, 1000);
  }

  // Button event listeners
  document.getElementById('btn-use-password').addEventListener('click', () => {
    switchStep(steps.email, steps.password);
  });

  document.getElementById('btn-use-password-alt').addEventListener('click', () => {
    switchStep(steps.otp, steps.password);
  });

  document.getElementById('back-to-otp').addEventListener('click', () => {
    switchStep(steps.password, steps.email);
  });

  document.getElementById('btn-resend-otp').addEventListener('click', () => {
    alert('OTP resent ');
    startOtpTimer();
  });
});