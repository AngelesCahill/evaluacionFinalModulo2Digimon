const URL = "https://digimon-api.vercel.app/api/digimon";
let cardDigimon;
let digimonLevelCardsRookie;
let digimonLevelCardsChampion;
let digimonLevelCardsUltimate;

function showLevelUltimate() {
  fetch(URL + "/level/" + "champion")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showUltimate(data);
    });
};
function showUltimate(data) {
  let digimonLevelCardsUltimate = document.getElementById("digimonLevelCardsUltimate");
  digimonLevelCardsUltimate.innerHTML = "";
  for (i = 0; i <= data.length; i++) {
    digimonLevelCardsUltimate.innerHTML += `
      <div class="col-xs-12 col-sm-6 col-md-3 col-lg-2 col-xl-2 mb-1">
        <div class="card">
          <img src="${data[i].img}" class="card-img-top" alt="Digimon Rookie">
        </div>
      </div>
    `;
  }
};

function showLevelChampion() {
  fetch(URL + "/level/" + "champion")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showChampion(data);
    });
};
function showChampion(data) {
  let digimonLevelCardsChampion = document.getElementById("digimonLevelCardsChampion");
  digimonLevelCardsChampion.innerHTML = "";
  for (i = 0; i <= data.length; i++) {
    digimonLevelCardsChampion.innerHTML += `
      <div class="col-xs-12 col-sm-6 col-md-3 col-lg-2 col-xl-2 mb-1">
        <div class="card">
          <img src="${data[i].img}" class="card-img-top" alt="Digimon Rookie">
        </div>
      </div>
    `;
  }
};

function showLevelRookie() {
  fetch(URL + "/level/" + "rookie")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showRookie(data);
    });
};
function showRookie(data) {
    let digimonLevelCardsRookie = document.getElementById("digimonLevelCardsRookie");
    digimonLevelCardsRookie.innerHTML = "";
  for (i = 0; i <= data.length; i++) {
    digimonLevelCardsRookie.innerHTML += `
      <div class="col-xs-12 col-sm-6 col-md-3 col-lg-2 col-xl-2 mb-1">
        <div class="card">
          <img src="${data[i].img}" class="card-img-top" alt="Digimon Rookie">
        </div>
      </div>
    `;
    }
}

  function buscarNombre() {
    let nombreDigimon = document.getElementById("buscar").value;
    nombreDigimon = nombreDigimon.toLowerCase();
      fetch(URL + '/name/' + nombreDigimon)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          mostrarDigimonBusqueda(data);
        });
};
function mostrarDigimonBusqueda(data) {
  let digimonLevelCards = document.getElementById("digimonTable");
  digimonLevelCards.innerHTML = "";
  for (i of data) {
    digimonLevelCards.innerHTML = `
    <table class="table mx-2">
      <h4>Tu busqueda: </h4>
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Nivel</th>
          <th scope="col">Imagen</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${i.name}</td>
          <td>${i.level}</td>
          <td><img src="${i.img}"></td>
        </tr>
      </tbody>
    </table>
    `;
  }
};

$(document).ready(function () {
  cardDigimon = document.getElementById("cardDigimon");

  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      mostrarDatos(data);
    })

    .catch((error) => console.log(error));

  function mostrarDatos(data) {
    cardDigimon.innerHTML = "";
    for (i = 0; i <= data.length; i++) {
      cardDigimon.innerHTML += `
      <div class="col-xs- col-sm-6 col-md-6 col-lg-4 col-xl-3 m-2 ms-auto me-auto">
        <div class="card">
          <img src="${data[i].img}" class="card-img-top" alt="Imagen">
          <div class="card-body text-center">
            <h5 class="card-title">${data[i].name}</h5>
            <p class="card-text">${data[i].level}</p>
            <button type="button" class="btn btn-primary verDigimon" data-bs-toggle="modal" data-bs-target="#modal-${i}">
              Ver
            </button>
          </div>
        </div>
      </div>
      
      <div class="modal fade" id="modal-${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${data[i].name}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
              <img src="${data[i].img}" class="card-img-top" alt="Imagen">
            </div>
            <div class="modal-footer">
              <p>Monstruos Digitales</p>
            </div>
          </div>
        </div>
      </div>
    `;
    }
  }


});



  







