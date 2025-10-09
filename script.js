// --- Mobile Menu Toggle Logic ---
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
      });
    });
  }

  // Active link highlight
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav-bar a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
  document.querySelectorAll('.mobile-nav-bar a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});


// --- Sticky Header Shrink Logic (UX Improvement) ---
(function() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);
  // Run on load in case the page is already scrolled down
  handleScroll();
})();


// --- Content Offset & Slider Logic (Existing) ---
(function(){
  const root = document.documentElement;
  function setOffsets(){
    const h = document.querySelector('.site-header')?.offsetHeight || 120;
    const m = document.querySelector('.site-menu')?.offsetHeight || 54;
    root.style.setProperty('--header-h', h + 'px');
    root.style.setProperty('--menu-h', m + 'px');
  }
  window.addEventListener('load', setOffsets);
  window.addEventListener('resize', setOffsets);
  setOffsets();
})();

// Basic slider (commented out as no slider images were provided, but kept logic container)
/*
(function(){
  const slider = document.querySelector('.hero-slider');
  if (!slider) return;
  const slides = Array.from(slider.querySelectorAll('img'));
  if (!slides.length) return;
  let i = 0; slides[0].classList.add('active');
  setInterval(()=>{
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
  }, 4000);
})();
*/