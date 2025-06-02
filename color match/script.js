let colors = ['red', 'green', 'blue', 'yellow', 'gray', 'purple', 'maroon', 'orange']; // The list of all the possible colors

let score = 0; // The player's score starts at 0
let timeLeft = 20; // There is a total of 20 seconds for a round
let gameActive = false; // Sees if the game is running and this is very important, because it could mess up the score without this
let timer; 
let targetColor = ''; // The current color the player needs to click on to match

const scoreDisplay = document.getElementById('score'); // To show current score
const timerDisplay = document.getElementById('timer'); // Shows the remaining time
const target = document.getElementById('target'); // The box shows the target color

function pickColor() {
  targetColor = colors[Math.floor(Math.random() * colors.length)]; // Picks a random color from my list of 8 colors
  // https://www.w3schools.com/JS/js_random.asp
  target.style.background = targetColor; // This shows the picked color
}

function checkColor(clickedColor) {
  if (!gameActive) return; // This ignores the clicks if game is not currently active
  if (clickedColor === targetColor) { // This checks if the clicked color matches the target
    score++; // Increases score by 1 if matched correctly
    scoreDisplay.textContent = score; // This updates the score shown on the screen
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
  }
  pickColor(); // Pick a new target color randomly
}

function startGame() {
  clearInterval(timer); 
  score = 0; // Resets the score back to 0
  timeLeft = 20; // This resets the imer to 20 seconds
  gameActive = true; 
  scoreDisplay.textContent = score; 
  timerDisplay.textContent = timeLeft; 
  pickColor(); // Pick first target color to start off 

  timer = setInterval(function() { // This starts the timer of 20 seconds, and it runs every 1 second
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval
    timeLeft = timeLeft - 1; // Decreases the time left of the round by 1 second
    timerDisplay.textContent = timeLeft; 

    if (timeLeft === 0) { // If time is up
      clearInterval(timer); // Stop the timer
      gameActive = false; 
      alert("Time's up! Your score is: " + score); // Shows an alert with final score of what you got
    }
  }, 1000);
}
function restartGame() {
  clearInterval(timer); // Stops the timer if running
  // https://www.w3schools.com/jsref/met_win_clearinterval.asp
  score = 0; // Resets the score to 0
  timeLeft = 20; // Resets the time
  gameActive = false; 
  scoreDisplay.textContent = score; 
  timerDisplay.textContent = timeLeft; 
  target.style.background = 'white'; // Clears the big white target color box back to white when the round is restarted
}
