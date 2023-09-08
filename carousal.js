const carousel = document.querySelector('.carousel');
const images = [
"https://imgur.com/96OnkX7.png",
"https://imgur.com/KtGxwnN.png",
" https://imgur.com/sfjg9R8.png",
 "https://imgur.com/p0wdadG.png"
];
let currentIndex = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
  updateIndicators();
}

function startCarousel() {
  setInterval(nextImage, 3000); // Change image every 3 seconds
}

function createIndicators() {
    const indicatorsContainer = document.querySelector('.indicators');
  
    images.forEach((_, index) => {
      const indicator = document.createElement('div');
      indicator.classList.add('indicator');
      if (index === currentIndex) {
        indicator.classList.add('active');
      }
  
      indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
        updateIndicators();
      });
  
      indicatorsContainer.appendChild(indicator);
    });
  }
  
  // Add this function to update indication circles
  function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }
  
  // Modify DOMContentLoaded event to include indicators creation
  document.addEventListener('DOMContentLoaded', () => {
    images.forEach(imageSrc => {
      const img = document.createElement('img');
      img.src = imageSrc;
      img.alt = 'Carousel Image';
      carousel.appendChild(img);
    });
  
    createIndicators();
    startCarousel();
  });
