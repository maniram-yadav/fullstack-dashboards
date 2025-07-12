let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const itemWidth = items[0].offsetWidth;
const carouselView = document.querySelector('.carousel-view');
console.log(totalItems,itemWidth,carouselView);

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}

function updateCarousel() {
  carouselView.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.previous').addEventListener('click', prevSlide);
setInterval(nextSlide,2000);
