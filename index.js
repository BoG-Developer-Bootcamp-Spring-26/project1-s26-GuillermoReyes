// left button (back)

// right button (right)

let pokeID = 1

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