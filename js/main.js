// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Contact form (demo handler — no backend yet)
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const note = form.querySelector('.form__note');
      note.textContent = "Thank you! Your message has been sent — we'll be in touch within 24 hours. 🐰";
      note.style.color = '#ec1e8c';
      form.reset();
    });
  }
});
