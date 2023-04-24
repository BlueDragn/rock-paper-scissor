let score = document.getElementById("score-num").innerText

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")

//<input type="button" value="Generate a table" onclick="generateTable()" />
//On click start the game







//Initializing Global variable
let playerSelection = "";

//Computer's Move
function getComputerChoice() {
  let arrayInput = ["rock", "paper", "scissors"];
  let arraylength = arrayInput.length;
  let x = Math.floor(Math.random() * arraylength);
  let computerSelection = arrayInput[x];
  return computerSelection;
}
//const computerSelection1 = getComputerChoice();

//console.log(computerSelection1);

//Function For Game Play
function game(playerChoice, computerChoice) {
  let winner = "";
  if (playerChoice === computerChoice) {
    winner = "Draw";
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    winner = "computer";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    winner = "player";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    winner = "computer";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    winner = "player";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    winner = "player";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    winner = "computer";
  } else {
    console.log("enter correct option");
  }
  return winner;
}

//Playing Round Function
//Playing Round Function
function playRound() {
  let playerScore = 0;
  let computerScore = 0;
  let maxRound = 5;
  let roundWinner;
  let result = "";


  // Get the player's choice when a button is clicked
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      //player Choice
      const playerSelection1 = e.target.value;
      console.log("yourChoice:" + playerSelection1);

      //Computer Choice
      const computerSelection1 = getComputerChoice();
      console.log("Machine:" + computerSelection1);

      //Function Call to decide winner
      roundWinner = game(playerSelection1, computerSelection1);
      console.log("Round winner is:" + roundWinner);
      if (roundWinner == "computer") {
        computerScore++;
        console.log("Computer Score is:" + computerScore);
      } else if (roundWinner == "player") {
        playerScore++;
        console.log("player Score is: " + playerScore);
      }

      // Check if max rounds have been played
      if (playerScore + computerScore == maxRound) {
        if (playerScore > computerScore) {
          result = "player Wins!";
        } else if (playerScore < computerScore) {
          result = "Computer Wins!";
        } else {
          result = "It is a Draw";
        }
        // update the score display on the page
       const scoreDisplay = document.getElementById("score-num");
       scoreDisplay.textContent = playerScore;
        console.log(result);
      }
    });
  });
}
playRound();



