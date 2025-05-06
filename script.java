const words = [
  "guard", "hotel", "house", "table", "storm", "point", "smile", "brave", "trade", "basic",
  "alive", "peace", "world", "paint", "paper", "drift", "scout", "spark", "child", "early",
  "magic", "sport", "teach", "clear", "break", "climb", "lunch", "group", "watch", "night",
  "fight", "crowd", "toast", "score", "drink", "prize", "block", "plant", "phone", "clean",
  "story", "brain", "small", "trust", "ghost", "begin", "green", "white", "brown", "black",
  "sleep", "crown", "glass", "clock", "proud", "fable", "sharp", "round", "earth",
  "habit", "enter", "fresh", "giant", "honor", "joint", "knock", "march", "nerve", "ocean",
  "piano", "quick", "ridge", "stone", "trick", "urban", "vapor", "water", "youth", "zesty",
  "angle", "broom", "chill", "daisy", "elbow", "flock", "grind", "haste", "inbox", "jolly",
  "karma", "laugh", "mango", "nurse", "orbit", "scale", "shine", "wrist", "yield"
];

let secret = words[Math.floor(Math.random() * words.length)];

let currentRow = 0; 
let currentGuess = ""; 

const grid = document.getElementById("grid");
const restartButton = document.getElementById("restart");
const message = document.getElementById("message");

for (let i = 0; i < 30; i++) {
  const tile = document.createElement("div");
  tile.className = "tile";
  grid.appendChild(tile);
}

const keys = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
const keyboard = document.getElementById("keyboard");

keys.forEach(function(letter) {
  const key = document.createElement("button");
  key.textContent = letter;
  key.className = "key";
  key.onclick = function() {
    pressKey(letter.toLowerCase()); 
  };
  keyboard.appendChild(key);
});


const enterKey = document.createElement("button");
enterKey.textContent = "Enter";
enterKey.className = "key";
enterKey.onclick = function() {
  if (currentGuess.length === 5) {
    checkGuess(); 
  }
};
keyboard.appendChild(enterKey);

const backspaceKey = document.createElement("button");
backspaceKey.textContent = "⌫";
backspaceKey.className = "key";
backspaceKey.onclick = function() {
  if (currentGuess.length > 0) {
    currentGuess = currentGuess.slice(0, -1); 
    setTile("", currentRow, currentGuess.length); 
  }
};
keyboard.appendChild(backspaceKey);

function pressKey(key) {
  if (currentGuess.length < 5) {
    currentGuess += key;
    setTile(key, currentRow, currentGuess.length - 1); 
  }
}


function setTile(letter, row, col) {
  const index = row * 5 + col; 
  grid.children[index].textContent = letter.toUpperCase();
}

function checkGuess() {
  for (let i = 0; i < 5; i++) {
    const letter = currentGuess[i];
    const tile = grid.children[currentRow * 5 + i];

    if (letter === secret[i]) {
      tile.classList.add("green"); 
    } else if (secret.includes(letter)) {
      tile.classList.add("yellow"); 
    } else {
      tile.classList.add("gray"); 
    }
  }

   if (currentGuess === secret) {
    message.textContent = "CORRECT!!!";
    restartButton.style.display = "block";
  } else if (currentRow === 5) {
    message.textContent = "WRONG!!!!! The answer was... " + secret.toUpperCase();
    restartButton.style.display = "block";
  }
  currentGuess = ""; 
  currentRow++; 
}

restartButton.onclick = function() {
  secret = words[Math.floor(Math.random() * words.length)]; 
  currentRow = 0; 
  currentGuess = ""; 
  message.textContent = ""; 
  for (let i = 0; i < 30; i++) {
    grid.children[i].textContent = ""; 
    grid.children[i].className = "tile"; 
  }
  restartButton.style.display = "none"; 
};
