export default function decorate(block) {
  const slides = [...block.children];
  slides.forEach((slide, i) => {
    slide.className = 'hero-slide';
    if (i === 0) slide.classList.add('active');
  });

  // Auto-rotate
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 5000);
}
