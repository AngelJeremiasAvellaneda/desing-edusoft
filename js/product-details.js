const products = [
  // Laptops
  {
    id: "laptop1",
    type: "laptop",
    title: "Laptop HP Victus Gaming 15-fa0007la",
    price: 3699,
    description: "Laptop HP Victus Gaming con procesador Intel® Core™ i7 12ª gen, 16 GB de RAM y 512 GB de almacenamiento.",
    image: "../image/laptops/laptop1.png",
    specs: [
      "Procesador: Intel® Core™ i7 12ª gen",
      "RAM: 16 GB",
      "Almacenamiento: 512 GB",
      "Pantalla: 15.6″"
    ]
  },
  {
    id: "laptop2",
    type: "laptop",
    title: "Laptop Gamer Acer Predator PH18-71-958U",
    price: 11999,
    description: "Laptop Acer Predator con 13.ª generación Intel Core i9, 32 GB de RAM y 1 TB de almacenamiento.",
    image: "../image/laptops/laptop2.png",
    specs: [
      "Procesador: 13.ª generación Intel Core i9",
      "RAM: 32 GB",
      "Almacenamiento: 1 TB disco sólido",
      "Pantalla: 17″ LEDS IPS"
    ]
  },
  {
    id: "laptop3",
    type: "laptop",
    title: "Laptop Gamer HP Pavilion",
    price: 1199,
    description: "Laptop HP Pavilion con 10ª generación Intel Core i5, 8 GB de RAM y 256 GB de almacenamiento.",
    image: "../image/laptops/laptop3.png",
    specs: [
      "Procesador: 10ª generación Intel Core i5",
      "RAM: 8 GB",
      "Almacenamiento: 256 GB Disco duro",
      "Pantalla: 15.6″"
    ]
  },
  {
    id: "laptop4",
    type: "laptop",
    title: "Laptop Asus TUF Gaming F15 FX507ZC4-HN005W",
    price: 3649,
    description: "Laptop Asus TUF Gaming F15 con 12ª generación Intel Core i5, 8 GB de RAM y 512 GB de almacenamiento.",
    image: "../image/laptops/laptop4.png",
    specs: [
      "Procesador: 12ª generación Intel Core i5",
      "RAM: 8 GB",
      "Almacenamiento: 512 GB",
      "Pantalla: 15.6″"
    ]
  },
  {
    id: "laptop5",
    type: "laptop",
    title: "Laptop ASUS Rog Strix G15 G512LV",
    price: 4949,
    description: "Laptop ASUS Rog Strix G15 con 10ª generación Intel Core i7, 16 GB de RAM y 1 TB de almacenamiento.",
    image: "../image/laptops/laptop5.png",
    specs: [
      "Procesador: 10ª generación Intel Core i7",
      "RAM: 16 GB",
      "Almacenamiento: 1 TB disco duro",
      "Pantalla: 15.6″"
    ]
  },
  {
    id: "laptop6",
    type: "laptop",
    title: "Laptop Lenovo LOQ 15.6, modelo 82XT002PLM GeForce RTX 4050",
    price: 5099,
    description: "Laptop Lenovo LOQ con AMD Ryzen 7 13.ª generación, 16 GB de RAM y 512 GB de almacenamiento.",
    image: "../image/laptops/laptop6.png",
    specs: [
      "Procesador: AMD Ryzen 7 13.ª generación",
      "RAM: 16 GB",
      "Almacenamiento: 512 GB disco sólido",
      "Pantalla: 15.6″ IPS Antirreflejo"
    ]
  },

  // Desktops
  {
    id: "desktop1",
    type: "desktop",
    title: "PC Ryzen Básica",
    price: 3200,
    specs: [
      "Procesador: Ryzen",
      "RAM: 8 GB",
      "Almacenamiento: 256 GB",
      "Pantalla: 22″"
    ],
    image: "../image/desktops/desktop1.png"
  },
  {
    id: "desktop2",
    type: "desktop",
    title: "PC Intel Gamer",
    price: 4500,
    specs: [
      "Procesador: Intel",
      "RAM: 16 GB",
      "Almacenamiento: 512 GB",
      "Pantalla: 24″"
    ],
    image: "../image/desktops/desktop2.png"
  },
  {
    id: "desktop3",
    type: "desktop",
    title: "PC Intel Básica",
    price: 2800,
    specs: [
      "Procesador: Intel",
      "RAM: 8 GB",
      "Almacenamiento: 256 GB",
      "Pantalla: 21.5″"
    ],
    image: "../image/desktops/desktop3.png"
  },
  {
    id: "desktop4",
    type: "desktop",
    title: "PC Ryzen Avanzada",
    price: 6000,
    specs: [
      "Procesador: Ryzen",
      "RAM: 32 GB",
      "Almacenamiento: 1 TB",
      "Pantalla: 27″"
    ],
    image: "../image/desktops/desktop4.png"
  },
  {
    id: "desktop5",
    type: "desktop",
    title: "PC Intel Avanzada",
    price: 5200,
    specs: [
      "Procesador: Intel",
      "RAM: 16 GB",
      "Almacenamiento: 1000 HDD + 512 SSD",
      "Pantalla: 24″"
    ],
    image: "../image/desktops/desktop5.png"
  },
  {
    id: "desktop6",
    type: "desktop",
    title: "PC Ryzen Pro",
    price: 7500,
    specs: [
      "Procesador: Ryzen",
      "RAM: 32 GB",
      "Almacenamiento: 2000 GB",
      "Pantalla: 32″"
    ],
    image: "../image/desktops/desktop6.png"
  },

  // Accesorios
  {
    id: "acc1",
    type: "accesorio",
    title: "Mouse Logitech G502",
    price: 199,
    brand: "Logitech",
    compatibilidad: "PC / Mac",
    image: "../image/accessories/mouse1.png"
  },
  {
    id: "acc2",
    type: "accesorio",
    title: "Teclado Razer BlackWidow",
    price: 299,
    brand: "Razer",
    compatibilidad: "PC",
    image: "../image/accessories/teclado1.png"
  },
  {
    id: "acc3",
    type: "accesorio",
    title: "Audífonos HyperX Cloud II",
    price: 149,
    brand: "HyperX",
    compatibilidad: "PC / Consola",
    image: "../image/accessories/audifono1.png"
  },
  {
    id: "acc4",
    type: "accesorio",
    title: "Monitor Samsung 27\" Curvo",
    price: 699,
    brand: "Samsung",
    compatibilidad: "PC",
    image: "../image/accessories/monitor1.png"
  }
];

// ---------------------------
// NORMALIZAR CATEGORÍAS
// ---------------------------
products.forEach(p => {
    if (p.type) p.category = p.type;
    else if (p.tipo) p.category = p.tipo;
    else if (p.id && p.id.startsWith("desktop")) p.category = "desktop";
});

// ---------------------------
// OBTENER PRODUCTO ACTUAL DESDE URL
// ---------------------------
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const product = products.find(p => p.id === productId);

// Elementos del DOM
const mainImg = document.getElementById("main-product-img");
const titleEl = document.querySelector(".product-title");
const priceEl = document.querySelector(".price");
const descEl = document.querySelector(".description");
const specsEl = document.querySelector(".specs");
const addToCartBtn = document.getElementById("add-to-cart");

// ---------------------------
// MOSTRAR DETALLES DEL PRODUCTO
// ---------------------------
if (product) {
    const image = product.image || product.imagen || "";
    const title = product.title || product.nombre || "Producto";
    const price = product.price || product.precio || "Consultar";
    const description = product.description || "";

    if (mainImg) {
        mainImg.src = image;
        mainImg.alt = title;
    }
    if (titleEl) titleEl.textContent = title;
    if (priceEl) priceEl.textContent = `S/. ${price}`;
    if (descEl) descEl.textContent = description;

    if (specsEl) {
        specsEl.innerHTML = "";
        if (product.specs) {
            product.specs.forEach(spec => {
                const li = document.createElement("li");
                li.textContent = spec;
                specsEl.appendChild(li);
            });
        } else {
            const specKeys = ["procesador", "ram", "almacenamiento", "pantalla", "tipo", "marca", "compatibilidad"];
            specKeys.forEach(key => {
                if (product[key]) {
                    const li = document.createElement("li");
                    const label = key.charAt(0).toUpperCase() + key.slice(1);
                    li.textContent = `${label}: ${product[key]}`;
                    specsEl.appendChild(li);
                }
            });
        }
    }

    // ✅ Ahora usa la función global de cart.js
    if (addToCartBtn) {
        addToCartBtn.addEventListener("click", () => {
            if (typeof addToCart === "function") {
                addToCart({
                    id: product.id,
                    name: product.title || product.nombre || "Producto",
                    price: Number(product.price || product.precio || 0),
                    image: product.image || product.imagen || ""
                });
                const sideCart = document.getElementById("side-cart");
                if (sideCart) sideCart.classList.add("open");
            }
        });
    }
}

// ---------------------------
// PRODUCTOS RELACIONADOS (CARRUSEL)
// ---------------------------
(function renderRelatedCarousel() {
    if (!product) return;

    const relatedSection = document.querySelector(".related-products");
    if (!relatedSection) return;

    const carouselTrack = relatedSection.querySelector(".carousel-track");
    const prevBtn = relatedSection.querySelector(".carousel-btn.prev");
    const nextBtn = relatedSection.querySelector(".carousel-btn.next");

    if (!carouselTrack) {
        const wrapper = relatedSection.querySelector(".carousel-wrapper") || relatedSection;
        const track = document.createElement("div");
        track.className = "carousel-track";
        wrapper.appendChild(track);
    }
    const track = relatedSection.querySelector(".carousel-track");

    let related = [];
    if (product.category === "laptop") {
        related = products.filter(p =>
            (p.category === "laptop" || p.category === "accesorio") &&
            p.id !== product.id
        );
    } else if (product.category === "desktop") {
        related = products.filter(p =>
            (p.category === "desktop" || p.category === "accesorio") &&
            p.id !== product.id
        );
    } else if (product.category === "accesorio") {
        related = products.filter(p => p.category === "accesorio" && p.id !== product.id);
    }

    if (!related || related.length === 0) {
        relatedSection.style.display = "none";
        return;
    }

    track.innerHTML = "";
    related.forEach(p => {
        const pImage = p.image || p.imagen || "";
        const pTitle = p.title || p.nombre || "Producto";
        const pPrice = p.price || p.precio || "Consultar";

        const card = document.createElement("div");
        card.className = "card text-center";
        card.style.minWidth = "180px";
        card.style.maxWidth = "220px";
        card.innerHTML = `
            <img src="${pImage}" class="card-img-top" alt="${pTitle}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${pTitle}</h5>
                <p class="card-text">S/. ${pPrice}</p>
                <a href="product-details.html?id=${p.id}" class="btn btn-warning mt-auto d-flex align-items-center gap-2 justify-content-center">
                    <i class='bx bx-cart fs-5'></i> Ver detalles
                </a>
            </div>
        `;
        track.appendChild(card);
    });

    function getScrollAmount() {
        const firstCard = track.querySelector(".card");
        if (!firstCard) return Math.round(window.innerWidth * 0.6);
        const gap = parseFloat(getComputedStyle(track).gap) || 16;
        const cardWidth = firstCard.getBoundingClientRect().width;
        return Math.round(cardWidth + gap);
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            track.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            track.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
        });
    }

    let isDown = false, startX, scrollLeft;
    track.addEventListener("mousedown", (e) => {
        isDown = true;
        track.classList.add("dragging");
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
    });
    window.addEventListener("mouseup", () => {
        isDown = false;
        track.classList.remove("dragging");
    });
    track.addEventListener("mouseleave", () => {
        isDown = false;
        track.classList.remove("dragging");
    });
    track.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 1;
        track.scrollLeft = scrollLeft - walk;
    });
})();
