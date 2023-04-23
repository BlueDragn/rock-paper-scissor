// Set the initial game score
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

// Get a reference to the "rock" button
var rock = document.getElementById("rock");
// Add a click event listener to the "paper" button
rock.addEventListener("click", function () {
  // Call a function to handle the user's selection
  handleSelection("rock");
});

// Get a reference to the "paper" button
var paper = document.getElementById("paper");
// Add a click event listener to the "scissor" button
paper.addEventListener("click", function () {
  handleSelection("paper");
});

// Get a reference to the "scissor" button
var scissor = document.getElementById("scissor");
// Add a click event listener to the "scissor" button
scissor.addEventListener("click", function () {
  handleSelection("scissor");
});

// This function will be called when the user clicks on one of the buttons
function handleSelection(selection) {
    console.log("user :"+ selection);
  // Generate a random selection for the computer
  var computerSelection = getComputerChoice();
  console.log("Computer :" + computerSelection);

  // Determine the outcome of the game based on the user's and computer's selections
  var outcome = determineOutcome(selection, computerSelection);
  console.log("Round :" + roundsPlayed + outcome)

  // Update the game state to reflect the user's selection and the outcome of the game
  updateGameState(selection, computerSelection, outcome);

  // Check if the game has ended after 5 rounds
  roundsPlayed++;
  console.log("round :" + roundsPlayed)
  if (roundsPlayed === 5) {
    // Display the final score
    alert("Final Score: " + (playerScore - computerScore));

    // Reset the game score and rounds played
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
  }
}
// This function generates a random selection for the computer
function getComputerChoice() {
    let arrayInput = ["rock", "paper", "scissors"];
    let arraylength = arrayInput.length;
    let x = Math.floor(Math.random() * arraylength);
    let computerChoice = arrayInput[x];
    return computerChoice;
  }

//Function To decide the winner
function determineOutcome(playerChoice, computerChoice) {
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
//   console.log(winner);
  return winner;
}
// This function updates the game state to reflect the user's selection and the outcome of the game
function updateGameState(userSelection, computerSelection1, outcome) {
  // Update the UI to display the user's and computer's selections
  console.log(userSelection);
  // Update the UI to display the outcome of the game
  console.log(computerSelection1);
  // Update the game score based on the outcome of the game
  if (outcome === "Draw") {
    // Do nothing
  } else if (outcome === "Player") {
    playerScore++;
  } else {
    computerScore++;
  }
  console.log("playerScore :" + playerScore)
  console.log("computerScore :" + computerScore)
}

