const elements = document.querySelectorAll('.fade-in, .fade-in-right');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // reinfaden
      entry.target.classList.add('visible');
    } else {
      // rausfaden
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.3}); 
// threshold = wieviel % sichtbar sein müssen (hier 10%)

elements.forEach(el => observer.observe(el));


