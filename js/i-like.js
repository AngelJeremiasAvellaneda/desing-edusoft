// Selecciona todos los botones
const botonesLike = document.querySelectorAll(".btn-like");

botonesLike.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("activo");

    // (Opcional) cambiar el icono de corazón a lleno
    const icon = btn.querySelector("i");
    if (btn.classList.contains("activo")) {
      icon.classList.replace("bx-heart", "bxs-heart"); // contorno → lleno
    } else {
      icon.classList.replace("bxs-heart", "bx-heart"); // lleno → contorno
    }
  });
});
