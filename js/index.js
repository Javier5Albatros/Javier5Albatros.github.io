import { mierdas } from "./mierdas.js";
import { setupSidebar } from "./sidebar.js";
import { setupCards } from "./cards.js";

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  let mierdaButton = document.querySelector("#mierda-button");
  let upButton = document.querySelector("#up-button");

  window.onscroll = () => {
    document.body.scrollTop > 40 || document.documentElement.scrollTop > 40
      ? (upButton.style.opacity = "1")
      : (upButton.style.opacity = "0");
  };

  mierdaButton.onclick = () => {
    alert("Eres un mierdas... ¡Y lo sabes!");
  };

  upButton.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  setupSidebar(mierdas);
  setupCards(mierdas);
});
