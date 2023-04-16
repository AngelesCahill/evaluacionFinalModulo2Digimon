const URL = "https://digimon-api.vercel.app/api/digimon";
let cardDigimon;
let levelRookie;
let rookieTable;

function buscarNombre(){

};

$(document).ready(function () {
  cardDigimon = document.getElementById("cardDigimon");
  levelRookie = document.getElementById("levelRookie");
  rookieTable = document.getElementById("rookieTable");

  fetch(URL)
    .then((res) => res.json())
    .then(data => {
      console.log(data);
      mostrarDatos(data);
    })
      
    .catch((error) => console.log(error));
  
  function mostrarDatos(data) {
    cardDigimon.innerHTML = "";
    for (i = 0; i <= data.length; i++) {
      cardDigimon.innerHTML += `
      <div class="card" style="width: 18rem;">
        <img src="${data[i].img}" class="card-img-top" alt="Imagen">
        <div class="card-body text-center">
          <h5 class="card-title">${data[i].name}</h5>
          <p class="card-text">${data[i].level}</p>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-${i}">
            Ver
          </button>
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



  







