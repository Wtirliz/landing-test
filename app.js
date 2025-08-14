document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('subscribeForm');
  const emailInput = document.getElementById('email');
  const errorEl = document.getElementById('emailError');

  const validateEmail = (value) => {
    if (!value || !value.trim()) return 'The field cannot be empty';
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!re.test(value.trim())) return 'Please enter a valid email address.';
    return '';
  };

  const showError = (msg) => {
    errorEl.textContent = msg;
    emailInput.setAttribute('aria-invalid', msg ? 'true' : 'false');
  };

  emailInput.addEventListener('input', () => {
    showError('');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const msg = validateEmail(emailInput.value);
    if (msg) {
      showError(msg);
      emailInput.focus();
      return;
    }

    window.location.href = '/this-page-does-not-exist-404';
  });
});