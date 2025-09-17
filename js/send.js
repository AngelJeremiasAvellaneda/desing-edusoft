// Seleccionamos todos los botones de like
const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked"); // activa/desactiva estado
  });
});
