// Switch between Login and Signup mode
document.addEventListener('DOMContentLoaded', function() {
  const authForm = document.getElementById('auth-form');
  const switchAuth = document.getElementById('switch-auth');
  const switchMsg = document.getElementById('switch-msg');
  const authHead = document.getElementById('auth-head');
  const authDesc = document.getElementById('auth-desc');
  const passGroup = document.getElementById('pass-group');

  let signup = false;
  switchAuth.addEventListener('click', function(e){
    e.preventDefault();
    signup = !signup;
    if(signup) {
      authHead.textContent = "Create an Account";
      authDesc.innerHTML = `Sign up to apply for <span class="auth-job-title">IT Intern</span> at <span class="auth-company">HINDCO</span>.`;
      switchMsg.textContent = "Already have an account?";
      switchAuth.textContent = "Login";
      passGroup.style.display = "block";
    } else {
      authHead.textContent = "Welcome Back!";
      authDesc.innerHTML = `Sign in to apply for <span class="auth-job-title">IT Intern</span> at <span class="auth-company">HINDCO</span>.`;
      switchMsg.textContent = "Don't have an account?";
      switchAuth.textContent = "Sign up";
      passGroup.style.display = "block";
    }
  });

  authForm.addEventListener('submit', function(e){
    e.preventDefault();
    const mode = signup ? "Sign Up" : "Login";
    const email = document.getElementById('email').value.trim();
    const pwd = document.getElementById('password').value.trim();
    if(!email || !pwd) return;
    authHead.textContent = `${mode} Success!`;
    authDesc.innerHTML = `<span class="auth-job-title">${email}</span>, your application for <b>IT Intern</b> was received.<br><span style="color:#54be7b;">(This demo does not submit data.)</span>`;
    authForm.style.display = "none";
    document.querySelector('.or-divider').style.display = "none";
    document.querySelector('.social-login').style.display = "none";
  });
});
