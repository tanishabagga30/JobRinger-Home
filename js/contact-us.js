// contact-us.js
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.method-card');
  const title = document.getElementById('form-title');
  const subject = document.getElementById('subject');
  const sales = document.getElementById('salesFields');
  const form = document.getElementById('contactForm');

  const methods = {
    email: { icon: 'fa-envelope', text: 'Send Us a Message' },
    phone: { icon: 'fa-phone', text: 'Contact Us by Phone' },
    whatsapp: { icon: 'fa-whatsapp', text: 'Message Us on WhatsApp' }
  };

  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const m = card.dataset.method;
      title.innerHTML = `<i class="fas ${methods[m].icon}"></i> ${methods[m].text}`;
    });
  });

  subject?.addEventListener('change', () => {
    sales.classList.toggle('hidden', subject.value !== 'sales');
  });

  form?.addEventListener('submit', e => {
    e.preventDefault();
    alert('Message Sent! We\'ll reply within 24 hours.');
    form.reset();
    sales.classList.add('hidden');
  });
});