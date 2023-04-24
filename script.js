// Set the initial game score
let playerScore = 0;
let computerScore = 0;

// Get a reference to the "rock" button
var rock = document.getElementById("rock");
// Add a click event listener to the "paper" button
rock.addEventListener("click", function () {
  // Call a function to handle the user's selection
  handleSelection("rock");
});

// Get a reference to the "paper" button
var paper = document.getElementById("paper");
paper.addEventListener("click", function () {
  handleSelection("paper");
});

// Get a reference to the "scissor" button
var scissor = document.getElementById("scissor");
scissor.addEventListener("click", function () {
  handleSelection("scissor");
});

// Get a reference to the "play again" button
var playAgain = document.getElementById("play-again");
playAgain.addEventListener("click", function () {
  // Remove the result section
  var resultSection = document.getElementById("selections");
  resultSection.style.display = "none";

  // Show the playground section
  var playgroundSection = document.getElementById("playground");
  playgroundSection.style.display = "flex";
});

// This function will be called when the user clicks on one of the buttons
function handleSelection(selection) {
  // Hide the current section
  var playgroundSection = document.getElementById("playground");
  playgroundSection.style.display = "none";

  var x = document.getElementById("selections");
  x.style.display = "flex";

  // Reset the UI elements before displaying the user's and computer's selections and the outcome of the game
  var userSelectionEl = document.getElementById("user-selection");
  userSelectionEl.src = "";
  var computerSelectionEl = document.getElementById("computer-selection");
  computerSelectionEl.src = "";
  var resultEl = document.getElementById("result");
  resultEl.innerHTML = "";

  // Generate a random selection for the computer
  var computerSelection = getComputerChoice();
  console.log("Computer :" + computerSelection);

  // Determine the outcome of the game based on the user's and computer's selections
  var outcome = determineOutcome(selection, computerSelection);

  // Update the game state to reflect the user's selection and the outcome of the game
  updateGameState(selection, computerSelection, outcome);
  var playAgain = document.getElementById("play-again");
  playAgain.style.display = "none";

  // // Update the UI to display the game score
  // updateScore();
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
  } else if (playerChoice === "paper" && computerChoice === "scissor") {
    winner = "computer";
  } else if (playerChoice === "scissor" && computerChoice === "paper") {
    winner = "player";
  } else if (playerChoice === "rock" && computerChoice === "scissor") {
    winner = "player";
  } else if (playerChoice === "scissor" && computerChoice === "rock") {
    winner = "computer";
  } else {
    // console.log("enter correct option");
  }
  //   console.log(winner);
  return winner;
}
// This function generates a random selection for the computer
function getComputerChoice() {
  let arrayInput = ["rock", "paper", "scissor"];
  let arraylength = arrayInput.length;
  let x = Math.floor(Math.random() * arraylength);
  let computerChoice = arrayInput[x];
  return computerChoice;
}

function updateGameState(userSelection, computerSelection, outcome) {
  // Update the UI to display the user's selection
  var userSelectionEl = document.getElementById("user-selection");
  userSelectionEl.src = "assests/images/" + userSelection + ".png";

  // Delay for 1 second before displaying the computer's selection
  setTimeout(function () {
    // Update the UI to display the computer's selection
    var computerSelectionEl = document.getElementById("computer-selection");
    computerSelectionEl.src = "assests/images/" + computerSelection + ".png";

    // Delay for 1 second before displaying the outcome of the game
    setTimeout(function () {
      // Update the UI to display the outcome of the game
      var resultEl = document.getElementById("result");
      // resultEl.innerHTML = ""; // Clear the previous result
      if (outcome === "Draw") {
        resultEl.innerHTML = "It's a draw!";
        // playAgain.style.display = "block";
      } else if (outcome === "computer") {
        playerScore--;
        resultEl.innerHTML = "You lose!";
        // playAgain.style.display = "block";
      } else if (outcome === "player") {
        playerScore++;
        resultEl.innerHTML = "You win!";
        // playAgain.style.display = "block";
      }

      // Update the UI to display the current scores
      var playerScoreEl = document.getElementById("score");
      playerScoreEl.innerHTML = playerScore;

      // Show the "play again" button
      var playAgain = document.getElementById("play-again");
      playAgain.style.display = "block";
    }, 1000); // Delay for 1 second (1000 milliseconds)
  }, 1000); // Delay for 1 second (1000 milliseconds)
}



//This will popup the rules image
const rulesButton = document.querySelector('.rules');
const popup = document.querySelector('.popup');

rulesButton.addEventListener('click', () => {
  popup.classList.add('active');
});

document.addEventListener('click', (event) => {
  if (!popup.contains(event.target) && !rulesButton.contains(event.target)) {
    popup.classList.remove('active');
  }
});
