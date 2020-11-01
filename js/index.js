import { mierdas } from "./mierdas.js";
import { setupSidebar } from "./sidebar.js";
import { setupCards } from "./cards.js";
import { getBeer } from './beer.js';
import { getStars } from './github.js';

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  let upButton = document.querySelector("#up-button");
  var elems = document.querySelectorAll(".modal");
  let modalButton = document.querySelector("#modal-beer-button");
  var instances = M.Modal.init(elems, {});

  window.onscroll = () => {
    document.body.scrollTop > 40 || document.documentElement.scrollTop > 40
      ? (upButton.style.opacity = "1")
      : (upButton.style.opacity = "0");
  };

  upButton.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  modalButton.onclick = () => {
    getBeer();
  }

  getStars('freeCodeCamp', 'freeCodeCamp')

  setupSidebar(mierdas);
  setupCards(mierdas);
});
