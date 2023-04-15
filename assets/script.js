const URL = "https://digimon-api.vercel.app/api/digimon";
let cardDigimon;
let levelRookie;

$(document).ready(function () {
  cardDigimon = document.getElementById("cardDigimon");
  levelRookie = document.getElementById("levelRookie");

  const url = `https://digimon-api.vercel.app/api/digimon`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
});

function mostrarDatos() {
  
}
