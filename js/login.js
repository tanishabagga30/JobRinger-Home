// Enhanced login.js with better error handling and loading states

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

  // Function to show loading state
  function showLoading(button) {
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Verifying...';
  }

  // Function to hide loading state
  function hideLoading(button, originalText) {
    button.disabled = false;
    button.innerHTML = originalText;
  }

  // Function to handle successful login
  function handleSuccessfulLogin(email) {
    try {
      // Store user session
      localStorage.setItem('userEmail', email);
      localStorage.setItem('loginTimestamp', Date.now().toString());
      
      // Check if profile is already completed
      const profileCompleted = localStorage.getItem('profileCompleted') === 'true';
      
      if (profileCompleted) {
        // Show success message before redirect
        showSuccessMessage('Login successful! Please complete your profile...');
        setTimeout(() => {
          window.location.href = 'jobsPage.html';
        }, 1500);
        
      }
      else{
          // Show success message before redirect
        showSuccessMessage('Login successful! Please complete your profile...');
        setTimeout(() => {
          window.location.href = 'resume.html';
        }, 1500);
        }
      
    } catch (error) {
      console.error('Login error:', error);
      showErrorMessage('Login failed. Please try again.');
    }
  }

  // Function to show success message
  function showSuccessMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    messageDiv.innerHTML = `<i class="fas fa-check-circle mr-2"></i>${message}`;
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
      messageDiv.remove();
    }, 3000);
  }

  // Function to show error message
  function showErrorMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    messageDiv.innerHTML = `<i class="fas fa-exclamation-circle mr-2"></i>${message}`;
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
      messageDiv.remove();
    }, 3000);
  }

  // Email form submission
  document.getElementById('email-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    
    // Basic email validation
    if (!email || !email.includes('@')) {
      showErrorMessage('Please enter a valid email address.');
      return;
    }
    
    emailDisplay.textContent = email;
    passwordEmailDisplay.textContent = email;
    switchStep(steps.email, steps.otp);
    startOtpTimer();
    showSuccessMessage('OTP sent to your email!');
  });

  // OTP form submission
  document.getElementById('otp-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const button = e.target.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;
    
    // Get OTP value
    const otp = Array.from(otpInputs).map(input => input.value).join('');
    
    if (otp.length !== 6) {
      showErrorMessage('Please enter complete OTP.');
      return;
    }
    
    showLoading(button);
    
    // Simulate OTP verification (replace with actual API call)
    setTimeout(() => {
      hideLoading(button, originalText);
      
      // In a real app, you would verify OTP with your backend
      // For demo purposes, we'll accept any 6-digit OTP
      if (otp === '123456' || otp.length === 6) {
        handleSuccessfulLogin(emailInput.value);
      } else {
        showErrorMessage('Invalid OTP. Please try again.');
      }
    }, 1500);
  });

  // Password form submission
  document.getElementById('password-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const button = e.target.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;
    
    const password = passwordInput.value;
    
    if (!password || password.length < 6) {
      showErrorMessage('Password must be at least 6 characters long.');
      return;
    }
    
    showLoading(button);
    
    // Simulate password verification (replace with actual API call)
    setTimeout(() => {
      hideLoading(button, originalText);
      
      // In a real app, verify password with backend
      // For demo purposes, we'll accept any password with length >= 6
      if (password.length >= 6) {
        handleSuccessfulLogin(emailInput.value);
      } else {
        showErrorMessage('Invalid password. Please try again.');
      }
    }, 1500);
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
      // Only allow numbers
      e.target.value = e.target.value.replace(/[^0-9]/g, '');
      
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
    const resendButton = document.getElementById('btn-resend-otp');
    
    const timer = setInterval(() => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      otpTimer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      time--;
      
      if (time < 0) {
        clearInterval(timer);
        otpTimer.textContent = 'Code expired';
        resendButton.disabled = false;
        resendButton.classList.remove('text-indigo-400');
        resendButton.classList.add('text-indigo-600', 'hover:text-indigo-800');
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
    const button = document.getElementById('btn-resend-otp');
    button.disabled = true;
    button.classList.remove('text-indigo-600', 'hover:text-indigo-800');
    button.classList.add('text-indigo-400');
    
    showSuccessMessage('OTP resent to your email!');
    startOtpTimer();
  });
});