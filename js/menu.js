document.addEventListener("DOMContentLoaded", () => {
  // Menú hamburguesa
  const menuToggle = document.getElementById('menu-pequeno');
  const menuItems = document.getElementById('menu-items');
  
  menuToggle.addEventListener('click', () => {
    menuItems.classList.toggle('active');
    menuToggle.innerHTML = menuItems.classList.contains('active') 
      ? '&#x2715;'  // Icono de cerrar
      : '&#9776;';  // Icono hamburguesa
  });

  // Botones con data-section para scroll suave
  const sectionButtons = document.querySelectorAll("button[data-section]");
  
  sectionButtons.forEach(button => {
    button.addEventListener("click", () => {
      const sectionId = button.getAttribute("data-section");
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Navegación entre secciones
  const navButtons = document.querySelectorAll(".boton-nav");
  const articles = document.querySelectorAll(".article-section");

  navButtons.forEach(boton => {
    boton.addEventListener("click", () => {
      // Quita 'activo' de todos los botones
      navButtons.forEach(btn => btn.classList.remove("activo"));
      // Oculta todos los artículos
      articles.forEach(article => article.classList.remove("active"));
      // Añade 'activo' al botón pulsado
      boton.classList.add("activo");
      // Muestra el artículo correspondiente
      const sectionId = boton.getAttribute("data-section");
      document.getElementById(sectionId).classList.add("active");
    });
  });
});
