// Set the initial game score
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

var finalScore = document.getElementById("score");


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
    // Hide the current section
    var playgroundSection = document.getElementById("playground");
    playgroundSection.style.display = "none";


    console.log("user :"+ selection);
  // Generate a random selection for the computer
  var computerSelection = getComputerChoice();
  console.log("Computer :" + computerSelection);

  // Determine the outcome of the game based on the user's and computer's selections
  var outcome = determineOutcome(selection, computerSelection);


  // Update the game state to reflect the user's selection and the outcome of the game
  updateGameState(selection, computerSelection, outcome);

  // Check if the game has ended after 5 rounds
  roundsPlayed++;
  console.log("round :" + roundsPlayed)
  if (roundsPlayed === 5) {
    // Display the final score
    alert("Final Score: " + (playerScore , computerScore));
    finalScore.innerHTML = playerScore;

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
    // console.log("enter correct option");
  }
//   console.log(winner);
  return winner;
}
// This function updates the game state to reflect the user's selection and the outcome of the game
function updateGameState(userSelection, computerSelection, outcome) {
  // Update the UI to display the user's and computer's selections
    // Get references to the user and computer selection elements
    var userSelectionEl = document.getElementById("user-selection");
    var computerSelectionEl = document.getElementById("computer-selection");
  
    // Set the src attribute of the user and computer selection images based on the selections
    userSelectionEl.src = "assests/images/" + userSelection + ".png";
    computerSelectionEl.src = "assests/images/" + computerSelection + ".png";
  // console.log(userSelection);
  // Update the UI to display the outcome of the game
  // console.log(computerSelection);
  // Update the game score based on the outcome of the game
  if (outcome === "Draw") {
    // Do nothing
  } else if (outcome === "computer") {
    computerScore++;
  } else {
    playerScore++;
  }
  console.log("playerScore :" + playerScore)
  console.log("computerScore :" + computerScore)
  finalScore.innerHTML = playerScore;
}

