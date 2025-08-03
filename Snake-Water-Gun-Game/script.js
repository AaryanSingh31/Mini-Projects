// Accessing the elements
const snake = document.getElementById("snakeId");
const water = document.getElementById("waterId");
const gun = document.getElementById("gunId");
const resultMsg = document.getElementById("result-msg");
const playerScore = document.getElementById("your-score");
const computerScore = document.getElementById("computer-score");

//Make Array of choices
const choices = ["snake", "water", "gun"];
console.log(choices[0]);
// Make the fn to play the game
function playGame(playerChoice){
    //Generate the random choice of computer
    const computerChoice = choices[Math.floor(Math.random()*choices.length)];
    console.log("Computer Choice: " + computerChoice);
    //logic to determine the winner
    if(playerChoice === computerChoice){
        resultMsg.innerText = "It's a Tie!";
    } else if
        (playerChoice === "snake" && computerChoice === "water" ||
         playerChoice === "water" && computerChoice === "gun" ||
         playerChoice === "gun" && computerChoice === "snake"
    ){
    resultMsg.innerText = "You Win!";
    updateScores("player");
    } else {
    resultMsg.innerText = "You Lose!";
    updateScores("computer");
    }
    updateChoices(playerChoice, computerChoice);
  }
  // Add Event Listeners
snake.addEventListener("click", () => playGame("snake"));
water.addEventListener("click", () => playGame("water"));
gun.addEventListener("click", () => playGame("gun"));

  //Fn to update the scores
  function updateScores(winner) {
    if (winner === "player") {
        playerScore.innerText = parseInt(playerScore.innerText) + 1;
    } else if (winner === "computer") {
        computerScore.innerText = parseInt(computerScore.innerText) + 1;
    } else {
        return;
    }
}
//Fn to Update the choices displayed
function updateChoices(playerChoice, computerChoice){
    document.getElementById("player-choice").innerText = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    document.getElementById("computer-choice").innerText = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
}