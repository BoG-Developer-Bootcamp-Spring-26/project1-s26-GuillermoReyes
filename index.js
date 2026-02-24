let pokeID = 1;
let mode = "info"

const infoBtn = document.getElementById("info-btn");
const movesBtn = document.getElementById("moves-btn");
const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");

const imgElement = document.getElementById("pokemon-image");
const nameElement = document.getElementById("pokemon-name");
const typesElement = document.getElementById("types");
const panelTitleElement = document.getElementById("panel-title");
const panelBody = document.getElementById("panel-body");

infoBtn.addEventListener("click", () => {
  mode = "info";
  infoBtn.classList.add("active");
  movesBtn.classList.remove("active");
  updatePokemon();
});

movesBtn.addEventListener("click", () => {
  mode = "moves";
  movesBtn.classList.add("active");
  infoBtn.classList.remove("active");
  updatePokemon();
});

rightBtn.addEventListener("click", () => changePokemon(+1));

leftBtn.addEventListener("click", () => changePokemon(-1));

function changePokemon(val) {
    pokeID += val;

    if (pokeID < 1) pokeID = 1;
    if (pokeID > 1025) pokeID = 1025;
    updatePokemon();
}

async function fetchPokemon(id){
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+id);
  return response.json();
}

function renderInfo(data){
  const height = data.height / 10;
  const weight = data.weight / 10;
  
  const stats = {};

  data.stats.forEach(s => {
    stats[s.stat.name] = s.base_stat;
  });
  
  const hp = stats["hp"];
  const attack = stats["attack"];
  const defense = stats["defense"];
  const specialAttack = stats["special-attack"];
  const specialDefense = stats["special-defense"];
  const speed = stats["speed"];

  panelTitleElement.textContent = "Info";
}

function renderTypes(types) {
  typesElement.innerHTML = ""; 
  types.forEach(t => {
    const pill = document.createElement("span");
    pill.classList.add("type-pill");
    pill.classList.add("type-"+t.type.name);

    pill.textContent = t.type.name;
    typesElement.appendChild(pill);
  });
}

function renderMoves(data) {
  panelTitleElement.textContent("Moves");

  const moves = data.moves.map(m=> m.move.name);
  panelBody.innerHTML ;
}

async function updatePokemon() {
  console.log("Current Pokemon ID: ", pokeID);
  const data = await fetchPokemon(pokeID);

  const sprite = data.sprites.front_default;
  imgElement.src = sprite;

  nameElement.textContent = data.name;
  
  renderTypes(data.types);

  if (mode == "moves"){
    renderMoves(data);
  } else {
    renderInfo(data);
  }
}