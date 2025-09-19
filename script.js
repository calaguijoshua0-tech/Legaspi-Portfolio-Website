// Smooth scroll for navigation links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animate on Scroll
const animateElements = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

animateElements.forEach(el => observer.observe(el));

// Contact form validation / alert
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  } else {
    alert('Please fill in all the fields.');
  }
});
