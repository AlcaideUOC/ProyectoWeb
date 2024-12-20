// Extraigo del DOM:
const menuToggle = document.getElementById('menu-pequeno');
const menuItems = document.getElementById('menu-items');

// Si hay clic en el botón hamburguesa
menuToggle.addEventListener('click', () => {
    menuItems.classList.toggle('active'); // Muestra o bien oculta el menú
    menuToggle.innerHTML = menuItems.classList.contains('active') 
        ? '&#x2715;' // Pongo el icono de cerrar
        : '&#9776;'; // Pongo el icono hamburguesa
});


document.addEventListener("DOMContentLoaded", () => {
    // Selecciono todos los botones con el atributo data-section
    const botones = document.querySelectorAll("button[data-section]");
  
    botones.forEach(boton => {
      boton.addEventListener("click", () => {
        // Obtengo el valor del atributo data-section
        const sectionId = boton.getAttribute("data-section");
        const section = document.getElementById(sectionId);
  
        if (section) {
          // Hace un desplazamiento suave hacia la sección
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

