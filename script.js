// ESIMA CONCEPT ENTERPRISE - Shared JavaScript

// ===== Live Nigerian Time (WAT = UTC+1) =====
function updateNigerianTime() {
  const el = document.getElementById('liveTime');
  if (!el) return;

  const now = new Date();
  // Format in Africa/Lagos (WAT)
  const options = {
    timeZone: 'Africa/Lagos',
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };
  el.textContent = '🕐 ' + now.toLocaleString('en-NG', options) + ' WAT';
}

updateNigerianTime();
setInterval(updateNigerianTime, 1000);

// ===== Year in footer =====
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos', year: 'numeric' });
}

// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', function () {
    navMenu.classList.toggle('open');
  });

  // Close menu when a link is clicked (mobile)
  navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('open');
    });
  });
}

// ===== Image Slider =====
(function () {
  const slider = document.querySelector('.slider');
  if (!slider) return;

  const slides = slider.querySelectorAll('.slide');
  const total = slides.length;
  if (total === 0) return;

  let current = 0;
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('sliderDots');

  // Create dots
  if (dotsContainer) {
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('span');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', function () {
        goTo(i);
      });
      dotsContainer.appendChild(dot);
    }
  }

  function goTo(index) {
    current = (index + total) % total;
    slider.style.transform = 'translateX(-' + (current * 100) + '%)';
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.dot');
      dots.forEach(function (d, i) {
        d.classList.toggle('active', i === current);
      });
    }
  }

  if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); });
  if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); });

  // Auto-advance every 5 seconds
  setInterval(function () {
    goTo(current + 1);
  }, 5000);
})();
