document.addEventListener("DOMContentLoaded", () => {
  const sideCart = document.getElementById("side-cart");
  const cartCountMobile = document.getElementById("cart-count");
  const cartCountDesktop = document.getElementById("cart-count-desktop");
  const openCartBtn = document.getElementById("btn-cart");
  const openCartBtnDesktop = document.getElementById("btn-cart-desktop");
  const closeCartBtn = document.getElementById("close-cart");
  const clearCartBtn = document.getElementById("clear-cart");
  const checkoutBtn = document.getElementById("checkout-btn");
  const sideCartItems = document.getElementById("side-cart-items");
  const sideCartTotal = document.getElementById("side-cart-total");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // === ABRIR / CERRAR ===
  [openCartBtn, openCartBtnDesktop].forEach(btn => {
    btn?.addEventListener("click", () => sideCart.classList.add("open"));
  });
  closeCartBtn?.addEventListener("click", () => sideCart.classList.remove("open"));

  // === GUARDAR / CARGAR ===
  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  }

  function updateCartCount() {
    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
    if (cartCountMobile) cartCountMobile.textContent = totalQty;
    if (cartCountDesktop) cartCountDesktop.textContent = totalQty;
  }

  // === AGREGAR ===
  function addToCart(product) {
    const index = cart.findIndex(item => item.id === product.id);
    if (index !== -1) {
      cart[index].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    renderCart();
  }

  // === ELIMINAR ===
  function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCart();
  }

  // === RENDER ===
  function renderCart() {
    sideCartItems.innerHTML = "";
    if (cart.length === 0) {
      sideCartItems.innerHTML = "<p>Tu carrito está vacío</p>";
      sideCartTotal.textContent = "0";
      return;
    }

    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
      const div = document.createElement("div");
      div.classList.add("card-carrito");
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="contenido-carrito">
          <h5>${item.name}</h5>
          <p>S/. ${item.price}</p>
          <div class="cantidad-controls">
            <button data-id="${item.id}" data-delta="-1">-</button>
            <span>${item.quantity}</span>
            <button data-id="${item.id}" data-delta="1">+</button>
          </div>
        </div>
        <button class="btn-quitar" data-remove="${item.id}">×</button>
      `;
      sideCartItems.appendChild(div);
    });
    sideCartTotal.textContent = total.toFixed(2);

    // Delegación para botones + y -
    sideCartItems.querySelectorAll("[data-delta]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const delta = parseInt(btn.dataset.delta);
        const item = cart.find(i => i.id === id);
        if (!item) return;
        item.quantity += delta;
        if (item.quantity <= 0) removeFromCart(id);
        else saveCart(), renderCart();
      });
    });

    // Delegación para quitar producto
    sideCartItems.querySelectorAll("[data-remove]").forEach(btn => {
      btn.addEventListener("click", () => removeFromCart(btn.dataset.remove));
    });
  }

  // === BOTONES ===
  clearCartBtn?.addEventListener("click", () => {
    cart = [];
    saveCart();
    renderCart();
  });

  checkoutBtn?.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("El carrito está vacío.");
      return;
    }
    alert("Redirigiendo a login...");
    window.location.href = "login.html";
  });

  document.querySelectorAll(".btn-comprar").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const card = e.target.closest(".laptop-card, .desktop-card, .accessory-card");
      if (!card) return;

      const priceText = card.querySelector(".precio").textContent.replace(",", "").trim();
      const price = parseFloat(priceText) || 0;

      const product = {
        id: card.dataset.id,
        name: card.querySelector("h3").textContent,
        price: price,
        image: card.querySelector("img").src
      };

      addToCart(product);
      sideCart.classList.add("open");
    });
  });

  renderCart();
  updateCartCount();
});
