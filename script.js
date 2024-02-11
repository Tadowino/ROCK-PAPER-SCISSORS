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

const computerSelection = getComputerChoice();
playGame();