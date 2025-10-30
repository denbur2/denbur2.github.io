const elements = document.querySelectorAll('.loader-inner');

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
}, { threshold: 0.1}); 
// threshold = wieviel % sichtbar sein müssen (hier 10%)

elements.forEach(el => observer.observe(el));


// hacker effect
const letters = "abcdef123456789#$%&'()*";

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll(".hack");

  elements.forEach((el) => {
    el.setAttribute("data-value", el.textContent);

    el.addEventListener("mouseover", (event) => {
      let iteration = 0;
      let interval = setInterval(() => {
        event.target.innerText = 
          event.target.innerText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return event.target.dataset.value[index];
              }
              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("");

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
        }

        iteration++; // oder iteration++
      }, 112);
    });
  });
});


