function getComputerChoice(){
    const options = ['rock','paper','scissors'];
    return options[Math.floor(Math.random() * options.length)];
}


function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return 'Tie';
    }
    else if(
        playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissors' && computerSelection == 'paper'
    ){
        return 'Win';
    }
    else{
        return 'Lose';
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == 'Tie'){
        return "It's a tie";
    }
    else if(result == 'Win'){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}
function playGame(){
    for(let i=0;i<5;i++){
    const playerSelection = prompt('Rock Paper Scissors').toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
}
console.log("Game Over!");
}

const computerSelection = getComputerChoice();
playGame();