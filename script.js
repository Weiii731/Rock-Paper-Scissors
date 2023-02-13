function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let output;
    if (randomNumber <= 33) {
        output = "rock";
    } else if (randomNumber <= 66) {
        output = "paper";
    } else {
        output = "scissors";
    }
    return output;
}

function check() {
    if (playerScores == 5) {
        alert('You Win');
    } else if (computerScores == 5) {
        alert("You Lost");
    }
    playerScores = 0;
    computerScores = 0;
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        content.textContent = "tie";
    } else if (map.get(playerSelection) === computerSelection) {
        content.textContent = "win";
        playerScores++;
    } else {
        content.textContent = "lose";
        computerScores++;
    }
    container.appendChild(content);
    if (playerScores == 5 || computerScores == 5) {
        check();
    }
    

}

// function game() {
//     let playerSelection;
//     let computerSelection;
//     let countHuman = 0;
//     let countComputer = 0;
//     for (let i = 0; i < 5; i++) {
//         playerSelection = prompt("Rock, Paper, or Scissors?");
//         computerSelection = getCompunterChoice();
//         switch(playRound(playerSelection, computerSelection)) {
//             case "tie":
//                 console.log('Tied, score: You -> ' + countHuman + ' vs computer -> ' + countComputer);
//                 break;
//             case "win":
//                 countHuman++;
//                 console.log('you won this round, score: You -> ' + countHuman + ' vs computer -> ' + countComputer);
//                 break;
//             case "lose":
//                 countComputer++;
//                 console.log('you lose this round, score: You -> ' + countHuman + ' vs computer -> ' + countComputer);
//         }
//     }
    
//     let result = countHuman > countComputer ? "You won" : "You lose";
//     console.log(result);
// }

let map = new Map();
map.set("rock", "scissors");
map.set("scissors", "paper");
map.set("paper", "rock");
// console.log(game());

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
rockButton.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
});
paperButton.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
});
scissorsButton.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
});

const container = document.querySelector("body");
const content = document.createElement("div");

let playerScores = 0;
let computerScores = 0;
