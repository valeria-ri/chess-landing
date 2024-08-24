const carousel = document.getElementById('stages-list');
const prevStageButton = document.getElementById('stages-prev-button');
const nextStageButton = document.getElementById('stages-next-button');
const paginationItems = document.querySelectorAll('.stages__pagination-item');
const itemWidth = document.querySelector('.stages__item').offsetWidth;
const gap = 40;
const numColumns = 5;
let currentIndex = 0;

const updateSlider = () => {
  const maxIndex = paginationItems.length - 1;
  
  paginationItems.forEach((item, index) => {
    item.classList.toggle('active', index === currentIndex);
  });
  
  const translateX = -(itemWidth + gap) * currentIndex;
  carousel.style.transform = `translateX(${translateX}px)`;
  
  prevStageButton.disabled = currentIndex === 0;
  nextStageButton.disabled = currentIndex === maxIndex;
};

const nextSlide = () => {
  const maxIndex = paginationItems.length - 1;
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSlider();
  }
};

const prevSlide = () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
};

updateSlider();

nextStageButton.addEventListener('click', nextSlide, false);
prevStageButton.addEventListener('click', prevSlide, false);