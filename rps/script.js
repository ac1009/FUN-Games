

function restartGame() {
  playerScore = 0; // Resets player score
  computerScore = 0; // Resets computer score
  document.getElementById("player-score").textContent = "0"; // This will update the player score to 0
  document.getElementById("computer-score").textContent = "0"; // This will update the computer score to 0
  document.getElementById("result").textContent = ""; // Clears the result message
  document.getElementById("restart-btn").style.display = "none"; // Hides the restart button that I have
}
