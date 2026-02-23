fetch = "https://pokeapi.co/api/v2/pokemon/1"

const infoBtn = document.getElementById("info-btn");
const movesBtn = document.getElementById("moves-btn");

infoBtn.addEventListener("click", () => {
  infoBtn.classList.add("active");
  movesBtn.classList.remove("active");
});

movesBtn.addEventListener("click", () => {
  movesBtn.classList.add("active");
  infoBtn.classList.remove("active");
});

let pokeID = 1;
const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");

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

rightBtn.addEventListener("click", () => changePokemon(+1))

leftBtn.addEventListener("click", () => changePokemon(-1))