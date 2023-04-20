//Initializing Global variable
let playerSelection = "";

// Getting element from html
let rock = document.getElementById("rock");
let Paper = document.getElementById("paper");
let scissors = document.getElementById("scissor");
//Computer's Move
function getComputerChoice() {
  let arrayInput = ["rock", "paper", "scissors"]; // have to put image id as option
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
function playround() {
  let playerScore = 0;
  let computerScore = 0;
  let maxRound = 5;
  let roundWinner;
  let result = "";
  for (let index = 0; index < maxRound; index++) {
    //player Choice
    playerSelection = prompt("Please enter your option", "rock");//have to replace it with image id as option
    let playerSelection1 = playerSelection.toLowerCase();
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
  }
  if (playerScore > computerScore) {
    //console.log("YouWins!");
    result = "player Wins!";
  } else if (playerScore < computerScore) {
    //console.log("ComputerWins!");
    result = "Computer Wins!";
  } else {
    result = "It is a Draw";
  }
  return result;
}

playround();


// 1.Show the score in ScoreBoard Section > class = num means have to show playerScore in score section
// 2. Player can select options  by clicking on one of the three image of play ground section
// when user clicked on image it should be selected as an option


const imageContainers = document.querySelectorAll(".image-container");

imageContainers.forEach(container => {
  const image = container.querySelector("img");
  container.addEventListener("click", function() {
    // Remove the clicked class from all images
    imageContainers.forEach(container => container.classList.remove("clicked"));
    // Add the clicked class to the clicked image
    container.classList.add("clicked");
    playGame(image.alt);
  });
});


