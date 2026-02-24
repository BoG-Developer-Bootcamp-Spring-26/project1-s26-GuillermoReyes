const APIbase = "https://pokeapi.co/api/v2/pokemon/"

let pokeID = 1;
let mode = "info"

const infoBtn = document.getElementById("info-btn");
const movesBtn = document.getElementById("moves-btn");
const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");

const imgElement = document.getElementById("pokemon-img");
const nameElement = document.getElementById("pokemon-name");
const typesElement = document.getElementById("types");
const panelTitleElement = document.getElementById("panel-title");
const panelBody = document.getElementById("panel-body");

infoBtn.addEventListener("click", () => {
  infoBtn.classList.add("active");
  movesBtn.classList.remove("active");
  updatePokemon()
});

movesBtn.addEventListener("click", () => {
  movesBtn.classList.add("active");
  infoBtn.classList.remove("active");
  updatePokemon()
});

rightBtn.addEventListener("click", () => changePokemon(+1))

leftBtn.addEventListener("click", () => changePokemon(-1))

function updatePokemon() {
    console.log("Current Pokemon ID: ", pokeID)
    // chage displayed information
}

function changePokemon(val) {
    pokeID += val;

    if (pokeID < 1) pokeID = 1;
    if (pokeID > 1025) pokeID = 1025;
    updatePokemon()
}

