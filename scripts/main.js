document.addEventListener("DOMContentLoaded", () => {
  // 1) SIMPLE FADE CAROUSEL
  const slides = document.querySelectorAll('.slide');
  let idx = 0;
  setInterval(() => {
    slides[idx].classList.remove('active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
  }, 4000);

  // 2) NAVEGACIÓN CARRUSEL DE RESEÑAS
  const revTrack = document.getElementById('revTrack');
  const prevBtn = document.getElementById('revPrev');
  const nextBtn = document.getElementById('revNext');
  if (revTrack && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      revTrack.scrollBy({ left: -revTrack.clientWidth * 0.8, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      revTrack.scrollBy({ left: revTrack.clientWidth * 0.8, behavior: 'smooth' });
    });
  }

  // 3) TOGGLE TRADUCCIÓN DE RESEÑAS
  document.querySelectorAll('.toggle-translation').forEach(link => {
    link.dataset.lang = 'es';
    link.addEventListener('click', e => {
      e.preventDefault();
      const p = link.previousElementSibling;
      if (link.dataset.lang === 'es') {
        p.textContent = p.dataset.en;
        link.textContent = 'Ver original (Español)';
        link.dataset.lang = 'en';
      } else {
        p.textContent = p.dataset.es;
        link.textContent = 'See translation (English)';
        link.dataset.lang = 'es';
      }
    });
  });

  // 6) AOS
  AOS.init();
  
  // 4) CARRUSEL HORIZONTAL AUTOMÁTICO EN HERO
  const track = document.getElementById('heroTrack');
  const heroSlides = track.querySelectorAll('img');
  let index = 0;
  setInterval(() => {
    index = (index + 1) % heroSlides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  }, 4000);

  // 5) FADE-UP ANIMATION CON INTERSECTION OBSERVER
  const fadeUps = document.querySelectorAll(".fade-up");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.animationPlayState = "running";
      }
    });
  }, { threshold: 0.2 });

  fadeUps.forEach((el) => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });


});
