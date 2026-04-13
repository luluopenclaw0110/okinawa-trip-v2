/* ===== Okinawa Trip V2 - Main JS ===== */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initSmoothScroll();
});

/* ===== Navbar Shadow on Scroll ===== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  const onScroll = () => {
    if (window.scrollY > 60) {
      navbar.style.boxShadow = '0 4px 24px rgba(2,48,71,0.15)';
      navbar.style.background = 'rgba(254,249,243,0.96)';
    } else {
      navbar.style.boxShadow = 'none';
      navbar.style.background = 'rgba(254,249,243,0.92)';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ===== Mobile Menu ===== */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  const menuClose = mobileMenu.querySelector('.menu-close');
  if (menuClose) {
    menuClose.addEventListener('click', closeMobileMenu);
  }

  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) closeMobileMenu();
  });
}

function closeMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!mobileMenu) return;
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

/* ===== Scroll Reveal Animation ===== */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* ===== Smooth Scroll ===== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}
