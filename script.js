let playerScore = 0; // This sets the player's starting score to 0
let computerScore = 0; // Sets the computer's starting score to 0

function play(playerChoice) {
  if (playerScore >= 3 || computerScore >= 3) return; // It stops the game if someone already reached 3 points

  const choices = ['rock', 'paper', 'scissors']; // This is to make the list of possible choices
  const computerChoice = choices[Math.floor(Math.random() * 3)]; // Randomly picks one choice from the list for computer
  let result = ""; 

  if (playerChoice === computerChoice) {
    result = "It's a tie!"; // If computer and player chose the same thing
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') || // Rock beats scissors
    (playerChoice === 'paper' && computerChoice === 'rock') || // Paper beats rock
    (playerChoice === 'scissors' && computerChoice === 'paper') // Scissors beats paper
  ) {
    playerScore++; // This adds a point to the player if they beat the computer's choice
    result = "You win this round!"; // It will say this message if the player won the round
  } else {
    computerScore++; // Adds one point to computer if they beat the player's choice
    result = "Computer wins this round!"; // This message will appear if the computer won the round
  }

  document.getElementById("player-score").textContent = playerScore; // Shows updated player score live
  document.getElementById("computer-score").textContent = computerScore; // Shows the live updated computer score 

  if (playerScore === 3 || computerScore === 3) {
    // If someone reached 3 points it says the winner
    result += playerScore === 3 ? " You won the game!" : " Computer won the game!";
    document.getElementById("restart-btn").style.display = "inline-block"; // This shows the restart button on the screen
  }

  // Shows the result and what the computer picked
  document.getElementById("result").textContent = "Computer chose " + computerChoice + ". " + result;
}

function restartGame() {
  playerScore = 0; // Resets player score
  computerScore = 0; // Resets computer score
  document.getElementById("player-score").textContent = "0"; // This will update the player score to 0
  document.getElementById("computer-score").textContent = "0"; // This will update the computer score to 0
  document.getElementById("result").textContent = ""; // Clears the result message
  document.getElementById("restart-btn").style.display = "none"; // Hides the restart button that I have
}
