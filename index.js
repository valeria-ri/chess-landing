import { members } from "./data/data.js";
import { memberCardConfig } from "./data/constants.js";

const addCards = (array, config) => {
  const container = document.getElementById(config.listId);
  array.forEach((item) => {
    const card = document
      .getElementById(config.templateId)
      .content.querySelector(config.cardClass)
      .cloneNode(true);
    const name = card.querySelector(config.nameClass);
    const rank = card.querySelector(config.rankClass);
    const image = card.querySelector(config.imageClass);

    name.textContent = item.name;
    rank.textContent = item.rank;
    image.alt = item.name;
    container.append(card);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  addCards(members, memberCardConfig);
});
