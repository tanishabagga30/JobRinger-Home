// --- File: js/Apply-login.js ---

function initializeApplyLoginPage() {
    const authForm = document.getElementById('auth-form');
    const switchAuth = document.getElementById('switch-auth');
    const switchMsg = document.getElementById('switch-msg');
    const authHead = document.getElementById('auth-head');
    const authDesc = document.getElementById('auth-desc');
    const passGroup = document.getElementById('pass-group');

    const viewDetailsBtn = document.getElementById('view-details-btn');
    const jobModal = document.getElementById('job-details-modal');
    const closeModalBtn = document.querySelector('.modal-close-btn');

    if (!authForm || !viewDetailsBtn || !jobModal) {
        return; 
    }

    viewDetailsBtn.addEventListener('click', () => {
        jobModal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', () => {
        jobModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == jobModal) {
            jobModal.style.display = 'none';
        }
    });

    let signup = false;
    switchAuth.addEventListener('click', function(e){
        e.preventDefault();
        signup = !signup;
        
        if(signup) {
            if (authHead) authHead.textContent = "Create an Account";
            if (authDesc) authDesc.innerHTML = `Sign up to apply for <span class="auth-job-title">IT Intern</span> at <span class="auth-company">HINDCO</span>.`;
            if (switchMsg) switchMsg.textContent = "Already have an account?";
            switchAuth.textContent = "Login";
        } else {
            if (authHead) authHead.textContent = "Welcome Back!";
            if (authDesc) authDesc.innerHTML = `Sign in to apply for <span class="auth-job-title">IT Intern</span> at <span class="auth-company">HINDCO</span>.`;
            if (switchMsg) switchMsg.textContent = "Don't have an account?";
            switchAuth.textContent = "Sign up";
        }
    });

    authForm.addEventListener('submit', function(e){
        e.preventDefault();
        const mode = signup ? "Sign Up" : "Login";
        const email = document.getElementById('email').value.trim();
        const pwd = document.getElementById('password').value.trim();
        if(!email || !pwd) return;

        if (authHead) authHead.textContent = `${mode} Success!`;
        if (authDesc) authDesc.innerHTML = `<span class="auth-job-title">${email}</span>, your application for <b>IT Intern</b> was received.<br><span style="color:#54be7b;">(This demo does not submit data.)</span>`;
        
        authForm.style.display = "none";
        const orDivider = document.querySelector('.or-divider');
        const socialLogin = document.querySelector('.social-login');
        if (orDivider) orDivider.style.display = "none";
        if (socialLogin) socialLogin.style.display = "none";
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initializeApplyLoginPage, 0);
});
