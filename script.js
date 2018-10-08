function computerPlay(){
    let choice = Math.random() * 3;

    if(choice <= 1) return "rock";
    if(choice <= 2) return "paper";
    if(choice <= 3) return "scissors";
}

function play_round(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection == computerSelection) return "It's a draw !";

    let win = "You win!";
    let lose = "You lose!";

    if(playerSelection == "rock"){
        if(computerSelection == "paper") return lose + " Paper covers rock!";
        if(computerSelection == "scissors") return win + " Rock crushes scissors!";
    }
    
    if(playerSelection == "paper"){
        if(computerSelection == "rock") return win + " Paper covers rock!";
        if(computerSelection == "scissors") return lose + " Scissors cuts paper!";
    }

    if(playerSelection == "scissors"){
        if(computerSelection == "paper") return win + " Scissors cuts paper!";
        if(computerSelection == "rock") return lose + " Rock crushes scissors!";
    }
}

function game(){
    const player = prompt("Choose between rock, paper and scissors.");
    const computer = computerPlay();
    
    alert(play_round(player,computer));
}

setInterval(game,3000);