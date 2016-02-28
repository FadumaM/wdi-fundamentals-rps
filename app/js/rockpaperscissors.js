////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

var getInput = function() {
   console.log("Please choose either 'rock', 'paper', or 'scissors'.")
   var answer = prompt();
   return answer;
}

var randomPlay = function() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'rock';
    } else if (randomNumber < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
   function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
    }
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
  if (playerMove === "rock" && computerMove === "scissors" ||
       playerMove === "paper" && computerMove === "rock"    ||
       playerMove === "scissors" && computerMove === "paper") {
        winner = 'player';
        console.log("Player Wins!");
       }

    else if (computerMove === "rock" && playerMove === "scissors" || computerMove === "paper" && playerMove === "rock" || computerMove === "scissors" && playerMove === "paper") {
                winner = "computer";
                console.log("computerMove");
            }

    else (computerMove === playerMove); {
        winner = "tie";
    }
    return winner;
}



function playToFive() {

 console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

while (playerWins < 5 && computerWins < 5) {

var playerMove = getPlayerMove();
var computerMove = getComputerMove();
var winner = getWinner(playerMove,computerMove);

    if (winner === 'player'){
        console.log('Player: ' + playerMove + 'Computer: ' + computerMove + ' Player wins this round.')
            playerWins += 1;
    } 

    else if (winner === 'computer'){
        console.log('Player: ' + playerMove + 'Computer: ' + computerMove + ' Computer wins this round.')
            computerWins += 1;
        } 

    else if (winner === 'Tie' ) {
    console.log('This round is a Tie')

      }


    }
 
 return [playerWins, computerWins];


}




