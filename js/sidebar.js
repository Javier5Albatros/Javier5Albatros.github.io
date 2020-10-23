export const setupSidebar = (mierdas) => {
  let aside = document.querySelector("aside ul");

  mierdas.mierdas.forEach((el, i) => {
    let li = document.createElement("li");
    li.innerHTML = `
            <li>
                <a class="aside-link collection-item"" href="#mierda-${i + 1}">${el.nombre}</a>
            </li>
        `;
    aside.appendChild(li);
  });
};
