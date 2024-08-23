import { members } from '../data/data.js';

const carousel = document.getElementById('members-list');
const nextMemberButton = document.getElementById('members-next-button');
const prevMemberButton = document.getElementById('members-prev-button');
const currentCount = document.querySelector('.members__counter-number_current');
const totalCount = document.querySelector('.members__counter-number_total');
let counter = 0;
let autoSlideInterval;

const updateCounter = () => {
  currentCount.textContent = counter + 1;
};

const addCards = () => {
  members.forEach((item) => {
    const card = document
      .getElementById('member-template')
      .content.querySelector('.member')
      .cloneNode(true);
    const name = card.querySelector('.member__name');
    const rank = card.querySelector('.member__rank');
    const image = card.querySelector('.member__image');

    name.textContent = item.name;
    rank.textContent = item.rank;
    image.alt = item.name;
    carousel.append(card);
  })

  updateCounter();
  totalCount.textContent = members.length;
}

addCards();

const getCardWidth = () => {
  const memberCard = carousel.querySelector('.member');
  return memberCard ? memberCard.offsetWidth : 0;
};

const nextCard = () => {
  const cardWidth = getCardWidth();
  const firstCard = carousel.querySelector('.member');

  carousel.style.transform = `translateX(-${cardWidth + 20}px)`;

  setTimeout(() => {
    carousel.append(firstCard);
    carousel.style.transition = 'none';
    carousel.style.transform = 'translateX(0)';
    setTimeout(() => carousel.style.transition = '', 50);
  }, 500);

  counter++;
  if (counter > members.length - 1) {
    counter = 0;
  }
  updateCounter();
}

const prevCard = () => {
  const cardWidth = getCardWidth();
  const lastCard = carousel.querySelector('.member:last-child');
  carousel.insertBefore(lastCard, carousel.firstChild);
  carousel.style.transition = 'none';
  carousel.style.transform = `translateX(-${cardWidth + 20}px)`;

  setTimeout(() => {
    carousel.style.transition = '';
    carousel.style.transform = `translateX(0)`;
  }, 50);

  counter --;
  if (counter < 0) {
    counter = members.length - 1;
  }
  updateCounter();
}

const startAutoSlide = () => {
  autoSlideInterval = setInterval(nextCard, 4000);
};

const resetAutoSlide = () => {
  clearInterval(autoSlideInterval);
  startAutoSlide();
};

nextMemberButton.addEventListener('click', () => {
  nextCard();
  resetAutoSlide();
}, false);

prevMemberButton.addEventListener('click', () => {
  prevCard();
  resetAutoSlide();
}, false);

startAutoSlide();