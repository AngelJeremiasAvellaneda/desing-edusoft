let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let sliderDom = carouselDom.querySelector('.list');
let thumbnailDom = carouselDom.querySelector('.thumbnail');

let timeRunning = 600; // ms de animación
let isSliding = false;
let currentIndex = 0;

const itemsData = Array.from(sliderDom.children).map(item => {
    return {
        img: item.querySelector('img').getAttribute('src'),
        title: item.querySelector('h1').innerText,
        details: Array.from(item.querySelectorAll('.details p')).map(p => p.innerText),
        desc: item.querySelector('h4').innerText
    };
});

// Función para actualizar thumbnails
function updateThumbnails() {
    const thumbs = thumbnailDom.querySelectorAll('.item');
    thumbs.forEach((thumb, i) => {
        let index = (currentIndex + i) % itemsData.length;
        thumb.querySelector('img').setAttribute('src', itemsData[index].img);
        thumb.querySelector('.title').innerText = itemsData[index].title;
        thumb.querySelector('.description').innerText = '';
    });
}

nextDom.onclick = () => { if(!isSliding) slide('next'); };
prevDom.onclick = () => { if(!isSliding) slide('prev'); };

function slide(direction) {
    isSliding = true;

    if(direction === 'next') {
        currentIndex = (currentIndex + 1) % itemsData.length;
        sliderDom.style.transition = `transform ${timeRunning}ms ease-in-out`;
        sliderDom.style.transform = `translateX(-100%)`;

        setTimeout(() => {
            sliderDom.style.transition = 'none';
            sliderDom.appendChild(sliderDom.firstElementChild);
            sliderDom.style.transform = `translateX(0)`;
            updateThumbnails();
            isSliding = false;
        }, timeRunning);

    } else {
        currentIndex = (currentIndex - 1 + itemsData.length) % itemsData.length;
        sliderDom.style.transition = 'none';
        sliderDom.prepend(sliderDom.lastElementChild);
        sliderDom.style.transform = `translateX(-100%)`;

        setTimeout(() => {
            sliderDom.style.transition = `transform ${timeRunning}ms ease-in-out`;
            sliderDom.style.transform = `translateX(0)`;
        }, 50);

        setTimeout(() => {
            updateThumbnails();
            isSliding = false;
        }, timeRunning + 50);
    }
}

// Inicializar thumbnails al cargar
updateThumbnails();
