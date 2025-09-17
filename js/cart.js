// Seleccionamos todos los botones "Comprar"
const buyButtons = document.querySelectorAll('.btn-comprar');
const cartCount = document.getElementById('cart-count');

// Función para actualizar el contador del carrito
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCount.textContent = cart.length;
}

// Al cargar la página, mostrar el contador
updateCartCount();

// Función para añadir producto al carrito
buyButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const productCard = btn.closest('.laptop-card');
        const product = {
            id: index,
            name: productCard.querySelector('h3').textContent,
            price: productCard.querySelector('ul li:first-child').textContent,
            img: productCard.querySelector('img').src
        };

        // Obtener carrito actual
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);

        // Guardar en localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Actualizar contador
        updateCartCount();

        // Mensaje opcional
        alert(`${product.name} se agregó al carrito`);
    });
});
// Función para mostrar productos en carrito
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTotalEl = document.getElementById('cart-total');

    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>El carrito está vacío.</p>";
        cartTotalEl.textContent = "S/. 0";
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        const priceNum = parseFloat(item.price.replace(/[^0-9]/g, '')); // Extraer número
        total += priceNum;

        const div = document.createElement('div');
        div.classList.add('col-md-4');
        div.innerHTML = `
            <div class="card p-3">
                <img src="${item.img}" class="card-img-top" alt="${item.name}">
                <div class="card-body d-flex flex-column justify-content-between">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.price}</p>
                    <button class="remove-btn" data-index="${index}">Eliminar</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(div);
    });

    cartTotalEl.textContent = `S/. ${total}`;

    // Botones eliminar
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = btn.getAttribute('data-index');
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCart();
            updateCartCount();
        });
    });
}

// Actualizar contador del navbar
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    if (cartCount) cartCount.textContent = cart.length;
}

// Vaciar carrito
document.getElementById('clear-cart')?.addEventListener('click', () => {
    if (confirm("¿Deseas vaciar todo el carrito?")) {
        localStorage.removeItem('cart');
        displayCart();
        updateCartCount();
    }
});

// Inicializar
displayCart();
updateCartCount();
