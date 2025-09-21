document.addEventListener("DOMContentLoaded", () => {
  // ====== FILTROS ======
  const filtros = {
    procesador: document.getElementById("filtro-procesador"),
    ram: document.getElementById("filtro-ram"),
    almacenamiento: document.getElementById("filtro-almacenamiento"),
    pantalla: document.getElementById("filtro-pantalla"),
  };

  const productosContainer = document.getElementById("productos-container");
const productos = Array.from(productosContainer.querySelectorAll(".laptop-card, .desktop-card"));


  const btnFiltrar = document.getElementById("btn-filtrar");
  const btnLimpiar = document.getElementById("btn-limpiar");

  // FILTRAR
  btnFiltrar.addEventListener("click", () => {
    productos.forEach(card => {
      const col = card.closest('.col-md-4, .col-sm-6, .col-12');
      const p = {
        procesador: card.dataset.procesador,
        ram: card.dataset.ram,
        almacenamiento: card.dataset.almacenamiento,
        pantalla: card.dataset.pantalla,
        precio: parseFloat(card.dataset.precio)
      };

      let visible = true;
      if (filtros.procesador.value && filtros.procesador.value !== p.procesador) visible = false;
      if (filtros.ram.value && filtros.ram.value !== p.ram) visible = false;
      if (filtros.almacenamiento.value && filtros.almacenamiento.value !== p.almacenamiento) visible = false;
      if (filtros.pantalla.value && filtros.pantalla.value !== p.pantalla) visible = false;

      const precioSlider = window.precioSliderValues || [0, 15000];
      if (p.precio < precioSlider[0] || p.precio > precioSlider[1]) visible = false;

      col.classList.toggle("hidden", !visible);
    });
  });

  // LIMPIAR
  btnLimpiar.addEventListener("click", () => {
    filtros.procesador.value = "";
    filtros.ram.value = "";
    filtros.almacenamiento.value = "";
    filtros.pantalla.value = "";
    if (window.slider) window.slider.noUiSlider.set([0, 15000]);
    productos.forEach(card => {
      const col = card.closest('.col-md-4, .col-sm-6, .col-12');
      col.classList.remove("hidden");
    });
  });

  // noUiSlider
  const slider = document.getElementById("precio-slider");
  window.slider = slider;
  noUiSlider.create(slider, {
    start: [0, 15000],
    connect: true,
    range: { min: 0, max: 15000 },
    step: 100,
  });
  slider.noUiSlider.on("update", (values) => {
    const min = Math.round(values[0]);
    const max = Math.round(values[1]);
    document.getElementById("precio-min-label").textContent = min;
    document.getElementById("precio-max-label").textContent = max;
    window.precioSliderValues = [min, max];
  });

  // ====== TOGGLE FILTROS MÓVIL ======
  const btnToggleFiltros = document.getElementById("btn-toggle-filtros");
  const filtrosLateral = document.querySelector(".filtros-lateral");

  // Crear overlay
  let overlay = document.createElement("div");
  overlay.classList.add("filtros-overlay");
  document.body.appendChild(overlay);

  btnToggleFiltros.addEventListener("click", () => {
    filtrosLateral.classList.toggle("show");
    overlay.classList.toggle("show");
  });

  overlay.addEventListener("click", () => {
    filtrosLateral.classList.remove("show");
    overlay.classList.remove("show");
  });
});
