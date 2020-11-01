import { mierdas } from "./mierdas.js";
import { setupSidebar } from "./sidebar.js";
import { setupCards } from "./cards.js";

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  let upButton = document.querySelector("#up-button");
  let modal = document.querySelector(".modal");
  let instances = M.modal.init(modal, options);

  window.onscroll = () => {
    document.body.scrollTop > 40 || document.documentElement.scrollTop > 40
      ? (upButton.style.opacity = "1")
      : (upButton.style.opacity = "0");
  };

  upButton.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };


  setupSidebar(mierdas);
  setupCards(mierdas);
});
