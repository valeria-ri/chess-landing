import { members } from '../data/data.js';

const carousel = document.getElementById('members-list');
const nextMemberButton = document.getElementById('members-next-button');
const prevMemberButton = document.getElementById('members-prev-button');
const currentCount = document.querySelector('.members__counter-number_current');
const totalCount = document.querySelector('.members__counter-number_total');
let counter = 0;

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
  const firstCard = carousel.querySelector('.member');
  carousel.append(firstCard);
  counter++;
  if (counter > members.length - 1) {
    counter = 0;
  }
  updateCounter();
}

const prevCard = () => {
  const lastCard = carousel.querySelector('.member:last-child');
  carousel.insertBefore(lastCard, carousel.firstChild);
  counter --;
  if (counter < 0) {
    counter = members.length - 1;
  }
  updateCounter();
}

nextMemberButton.addEventListener('click', nextCard, false);
prevMemberButton.addEventListener('click', prevCard, false);
