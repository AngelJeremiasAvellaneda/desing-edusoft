document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filtro-btn");
  const productosContainer = document.getElementById("productos-container");
  const productos = Array.from(productosContainer.querySelectorAll(".col-md-4, .col-sm-6, .col-12"));

  // Función para filtrar productos
  const filtrarProductos = (tipo) => {
    productos.forEach((productoWrapper) => {
      const producto = productoWrapper.querySelector(".accessory-card");
      if (tipo === "all" || producto.dataset.tipo === tipo) {
        productoWrapper.style.display = "block"; // Mostrar
      } else {
        productoWrapper.style.display = "none";  // Ocultar
      }
    });
  };

  // Manejar clic en botones
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const button = e.currentTarget;
      const tipo = button.dataset.tipo;

      // Filtrar productos
      filtrarProductos(tipo);

      // Quitar active de todos los botones
      filterButtons.forEach(b => b.classList.remove("active"));

      // Marcar botón clickeado como active
      button.classList.add("active");
    });
  });
});
