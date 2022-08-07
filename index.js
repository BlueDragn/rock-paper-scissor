let playerSelection = prompt("Please enter your option", "rock");
let playerSelection1 = playerSelection.toLowerCase();
console.log(playerSelection);

function getComputerChoice(){
  let arrayInput = ["rock", "paper", "scissors"];
  let arraylength = arrayInput.length;
  let x = Math.floor((Math.random() * arraylength));
  let computerSelection = arrayInput[x];
  return computerSelection;
}
const computerSelection1 = getComputerChoice();

console.log(computerSelection1);



function game(playerSelection1, computerSelection1) {
  


  if (playerSelection1 === computerSelection1){
     console.log("Draw");
  } else if (playerSelection1 ==="rock" && computerSelection1 === "paper"){
      console.log("Computer Wins!");
    
  } else if (playerSelection1 === "paper" && computerSelection1 === "rock"){
      console.log("You Wins!");
    
  }else if (playerSelection1 === "paper" && computerSelection1 === "scissors"){
      console.log("Computer Wins!");
    
  }else if (playerSelection1 === "scissors" && computerSelection1 === "paper"){
      console.log("You Wins!");
    
  }else if (playerSelection1 === "rock" && computerSelection1 === "scissors"){
      console.log("You Wins!");
    
  }
    else if (playerSelection1 === "scissors" && computerSelection1 === "rock"){
      console.log("Computer Wins!");
  
    }else {
    console.log("enter correct option");
  }
      

  }

var game1 = game(playerSelection1, computerSelection1);
console.log(game1);




