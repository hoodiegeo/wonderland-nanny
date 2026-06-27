// Contact form (demo handler — not wired to a backend yet)
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const note = form.querySelector('.form__note');
      note.textContent = "Thank you! Your message has been sent — we'll be in touch within 24 hours.";
      note.style.color = '#df85a9';
      form.reset();
    });
  }
});
