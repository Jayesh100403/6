
const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const reveals = document.querySelectorAll('.reveal');

function closeMenu() {
  if (!nav || !menuButton) return;
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeMenu();
    const lightbox = document.querySelector('.lightbox');
    if (lightbox) lightbox.classList.remove('open');
  }
});

function updateHeader() {
  if (header) header.classList.toggle('scrolled', window.scrollY > 10);
}
window.addEventListener('scroll', updateHeader, { passive: true });
window.addEventListener('resize', () => { if (window.innerWidth > 940) closeMenu(); });
updateHeader();

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .08 });
  reveals.forEach(item => observer.observe(item));
} else {
  reveals.forEach(item => item.classList.add('visible'));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const lightbox = document.querySelector('.lightbox');
if (lightbox) {
  const lightboxImage = lightbox.querySelector('img');
  const lightboxCaption = lightbox.querySelector('p');
  const close = lightbox.querySelector('.lightbox-close');
  document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
      const image = card.querySelector('img');
      if (!image) return;
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;
      lightboxCaption.textContent = card.dataset.caption || image.alt;
      lightbox.classList.add('open');
    });
  });
  close.addEventListener('click', () => lightbox.classList.remove('open'));
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) lightbox.classList.remove('open');
  });
}
