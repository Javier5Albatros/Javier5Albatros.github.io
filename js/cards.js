export const setupCards = (mierdas) => {
  let container = document.querySelector(".mierdas");
  //offset-s1

  mierdas.mierdas.forEach((el, i) => {
    let card = document.createElement("div");
    i % 3 == 0
      ? card.classList.add("card", "col")
      : card.classList.add("card", "col", "offset-s1");
    card.id = `mierda-${i + 1}`;

    card.innerHTML = `
        <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="img/${el.img}" />
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4"
          >${el.nombre}<i class="material-icons right">more_vert</i></span
        >
        <p>${el.footer}</p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4"
          >${el.nombre}<i class="material-icons right">close</i></span
        >
        <p>
          ${el.descripcion}
        </p>
      </div>`;
    container.appendChild(card);
  });
};
