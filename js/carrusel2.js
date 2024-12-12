document.addEventListener("DOMContentLoaded", () => {
    const carruseles = document.querySelectorAll(".carrusel-items");
  
    carruseles.forEach((carrusel) => {
      const btnPrev = carrusel.parentElement.querySelector(".btn-prev");
      const btnNext = carrusel.parentElement.querySelector(".btn-next");
  
      const scrollStep = 366; // Tamaño de una tarjeta + gap
  
      btnNext.addEventListener("click", () => {
        carrusel.scrollLeft += scrollStep;
      });
  
      btnPrev.addEventListener("click", () => {
        carrusel.scrollLeft -= scrollStep;
      });
    });
  });
  