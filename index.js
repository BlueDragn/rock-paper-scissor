//Initializing Global variable
let playerSelection = "";






//Computer's Move
function getComputerChoice(){
  let arrayInput = ["rock", "paper", "scissors"];
  let arraylength = arrayInput.length;
  let x = Math.floor((Math.random() * arraylength));
  let computerSelection = arrayInput[x];
  return computerSelection;
}
//const computerSelection1 = getComputerChoice();

//console.log(computerSelection1);


//Function For Game Play
function game(playerChoice, computerChoice) {

  let winner = "";
  if (playerChoice === computerChoice){
    winner = "Draw";

  } else if (playerChoice ==="rock" && computerChoice === "paper"){
    winner = "computer";
    
  } else if (playerChoice === "paper" && computerChoice === "rock"){
    winner = "player";

    
  }else if (playerChoice === "paper" && computerChoice === "scissors"){
      winner = "computer";


  }else if (playerChoice === "scissors" && computerChoice === "paper"){
    winner = "player";


  }else if (playerChoice === "rock" && computerChoice === "scissors"){
    winner = "player";

  }
    else if (playerChoice === "scissors" && computerChoice === "rock"){
      winner = "computer";

  
    }else {
    console.log("enter correct option");
  }
  return winner;
       }

//Playing Round Function
       function playround(){
        let playerScore = 0;
        let computerScore = 0;
        let maxRound = 5;
        let roundWinner;
        let result = "";
        for (let index = 0; index < maxRound; index++) {
          //player Choice
          playerSelection = prompt("Please enter your option", "rock");
          let playerSelection1 = playerSelection.toLowerCase();
          console.log( "yourChoice:" + playerSelection1);
      
          //Computer Choice
          const computerSelection1 = getComputerChoice();
          console.log("Machine:" + computerSelection1);
      
          //Function Call to decide winner
          roundWinner = game(playerSelection1, computerSelection1);
          console.log("Round winner is:" + roundWinner);
          if(roundWinner == "computer")
          {
            computerScore++;
            console.log("Computer Score is:" + computerScore);
          }
          else if(roundWinner == "player")
          {
            playerScore++;
            console.log("player Score is: " + playerScore);
          }
          
        }
        if(playerScore > computerScore)
        {
          //console.log("YouWins!");
          result = "player Wins!";
        }
        else if(playerScore < computerScore){
          //console.log("ComputerWins!");
        result = "Computer Wins!";
          
        }else{
          

          result = "It is a Draw";
        }
        return result;

      }
      


      playround();




const container = getElementById('container-main');

// Event handling
const x = document.getElementById("rock");

function myFunction() {
  var x = document.getElementById("container-main");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}