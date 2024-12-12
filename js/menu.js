// Obtener los elementos del DOM
const menuToggle = document.getElementById('menu-toggle');
const menuItems = document.getElementById('menu-items');

// Evento de clic en el botón hamburguesa
menuToggle.addEventListener('click', () => {
    menuItems.classList.toggle('active'); // Muestra/oculta el menú
    menuToggle.innerHTML = menuItems.classList.contains('active') 
        ? '&#x2715;' // Ícono de cerrar (✕)
        : '&#9776;'; // Ícono hamburguesa (☰)
});


document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar todos los botones con el atributo data-section
    const botones = document.querySelectorAll("button[data-section]");
  
    botones.forEach(boton => {
      boton.addEventListener("click", () => {
        // Obtener el valor del atributo data-section
        const sectionId = boton.getAttribute("data-section");
        const section = document.getElementById(sectionId);
  
        if (section) {
          // Desplazamiento suave hacia la sección
          section.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });
  });



  document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".boton-nav");
    const articles = document.querySelectorAll(".article-section");
  
    botones.forEach((boton) => {
      boton.addEventListener("click", () => {
        // Elimina la clase 'activo' de todos los botones
        botones.forEach((btn) => btn.classList.remove("activo"));
  
        // Oculta todos los artículos
        articles.forEach((article) => article.classList.remove("active"));
  
        // Añade 'activo' al botón pulsado
        boton.classList.add("activo");
  
        // Muestra el article correspondiente
        const sectionId = boton.getAttribute("data-section");
        document.getElementById(sectionId).classList.add("active");
      });
    });
  });