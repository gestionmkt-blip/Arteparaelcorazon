// Sticky nav on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Fade-up animation on scroll via IntersectionObserver
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  }),
  { threshold: 0.14 }
);
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Contact form feedback
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Mensaje enviado!';
  btn.style.background = '#4A7C70';
  btn.disabled = true;
}
