export const getBeer = () => {
  const modal = document.querySelector("#modal1");

  modal.innerHTML = `        <div class="preloader-wrapper big active">
  <div class="spinner-layer spinner-blue-only">
    <div class="circle-clipper left">
      <div class="circle"></div>
    </div><div class="gap-patch">
      <div class="circle"></div>
    </div><div class="circle-clipper right">
      <div class="circle"></div>
    </div>
  </div>
</div>`;

  fetch("https://api.punkapi.com/v2/beers/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      modal.innerHTML = `
      <div class="modal-content">
      <h4>${data[0].name}</h4>
      <img class="beer-img" src="${data[0].image_url}"></img>
      <p>
      ${data[0].description}
      </p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat"
        >Cerrar</a
      >
    </div>
      `;
    });
};
