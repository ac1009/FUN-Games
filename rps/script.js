let playerScore = 0; // This sets the player's starting score to 0
let computerScore = 0; // Sets the computer's starting score to 0

function play(playerChoice) {
  if (playerScore === 3 || computerScore === 3) return; // It stops the game if someone already reached 3 points
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR , I learned about the or symbol

  const choices = ['rock', 'paper', 'scissors']; // This is to make the list of possible choices
  // https://youtu.be/3uKdQx-SZ5A?list=LL&t=592 , to have the choices of the 3
  const computerChoice = choices[Math.floor(Math.random() * 3)]; // Randomly picks one choice from the list for computer
  // https://youtu.be/3uKdQx-SZ5A?list=LL&t=592 , this is very useful because it randomly picks one choice out of my list
  let result = ""; 
  // https://youtu.be/3uKdQx-SZ5A?list=LL&t=592 , exact code

  if (playerChoice === computerChoice) {
    // https://youtu.be/3uKdQx-SZ5A?list=LL&t=592 , exact code
    result = "It's a tie!"; // If computer and player chose the same thing
    // https://youtu.be/3uKdQx-SZ5A?list=LL&t=592 , similar code but the youtuber explained well on how to do it
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') || // Rock beats scissors
    // https://youtu.be/A3EzYYV3ulE?list=LL&t=572 , the youtuber explaiend why to do this
    (playerChoice === 'paper' && computerChoice === 'rock') || // Paper beats rock
    // https://youtu.be/A3EzYYV3ulE?list=LL&t=572 
    (playerChoice === 'scissors' && computerChoice === 'paper') // Scissors beats paper
    // https://youtu.be/A3EzYYV3ulE?list=LL&t=572
  ) {
    playerScore++; // This adds a point to the player if they beat the computer's choice
    // https://youtu.be/3uKdQx-SZ5A?list=LL&t=1109 
    result = "You win this round!"; // It will say this message if the player won the round
  } else {
    computerScore++; // Adds one point to computer if they beat the player's choice
    // https://youtu.be/3uKdQx-SZ5A?list=LL&t=1109 , this is crucial so that the score will go up
    result = "Computer wins this round!"; // This message will appear if the computer won the round
  }

  document.getElementById("player-score").textContent = playerScore; // Shows updated player score live
  document.getElementById("computer-score").textContent = computerScore; // Shows the live updated computer score 

  if (playerScore === 3 || computerScore === 3) { // If someone reached 3 points it says the winner
    result += playerScore === 3 ? " You won the game!" : " Computer won the game!";
    // https://youtu.be/3uKdQx-SZ5A?list=LL&t=708 , helped inspire but different code
    document.getElementById("restart-btn").style.display = "inline-block"; // This shows the restart button on the screen
    // https://www.w3schools.com/css/css_inline-block.asp
  }

  document.getElementById("result").textContent = "Computer chose " + computerChoice + ". " + result;  // Shows the result and what the computer picked
  // https://youtu.be/A3EzYYV3ulE?list=LL&t=572 , different code but this youtuber helped show how to do it
}

function restartGame() {
  playerScore = 0; // Resets player score
  computerScore = 0; // Resets computer score
  document.getElementById("player-score").textContent = "0"; // This will update the player score to 0
  document.getElementById("computer-score").textContent = "0"; // This will update the computer score to 0
  document.getElementById("result").textContent = ""; // Clears the result message
  document.getElementById("restart-btn").style.display = "none"; // Hides the restart button that I have
}
