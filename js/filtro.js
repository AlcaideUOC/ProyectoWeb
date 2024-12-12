document.addEventListener("DOMContentLoaded", function () {
    const botones = document.querySelectorAll(".boton");

    botones.forEach(boton => {
        boton.addEventListener("click", function () {
            // Eliminar la clase 'activo' de todos los botones
            botones.forEach(b => b.classList.remove("activo"));
            // Añadir la clase 'activo' al botón clicado
            boton.classList.add("activo");

            // Desplazar a la sección correspondiente (opcional)
            const section = boton.getAttribute("data-section");
            document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
        });
    });
});
