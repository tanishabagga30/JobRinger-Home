// js/settings.js
document.getElementById('passwordForm').onsubmit = e => {
  e.preventDefault();
  const np = document.getElementById('newPass').value;
  const cp = document.getElementById('confirmPass').value;
  if (np !== cp) return alert("Passwords don't match!");
  if (np.length < 6) return alert("Password too short!");
  alert("Password changed!");
  e.target.reset();
};

document.getElementById('prefForm').onsubmit = e => {
  e.preventDefault();
  const prefs = Object.fromEntries(
    [...e.target.querySelectorAll('select')].map(s => [s.previousElementSibling.textContent, s.value])
  );
  localStorage.setItem('jobPrefs', JSON.stringify(prefs));
  alert("Preferences saved! You’ll see better jobs now");
};