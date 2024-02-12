let userscore = 0;
let compscore = 0;
const userScore = document.getElementById('user-score');
const compScore = document.getElementById('comp-score');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');
const results = document.querySelector(".results>p");

function getComputerChoice(){
    const options = ['rock','paper','scissors'];
    return options[Math.floor(Math.random() * options.length)];
}
function win(userChoice, computerSelection){
 userscore++;
 userScore.innerHTML = userscore;
 compScore.innerHTML = compscore;
 results.innerHTML = `${userChoice} beats ${computerSelection}. YOU WIN!`;
}
function lose(userChoice, computerSelection){
 compscore++;
 userScore.innerHTML = userscore;
 compScore.innerHTML = compscore;
 results.innerHTML = `${computerSelection} beats ${userChoice}. YOU LOSE!`;  
}
function draw(userChoice, computerSelection){
    results.innerHTML = `${computerSelection} equals ${userChoice}. IT'S A DRAW!`;  
}

function game(userChoice){
    const computerSelection = getComputerChoice();
    switch(userChoice+computerSelection){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
        win(userChoice,computerSelection);
        break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
        lose(userChoice, computerSelection);
        break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        draw(userChoice, computerSelection);
        break;
    }
}

function main(){
    rock.addEventListener('click', function(){
        game("rock");
    })
    paper.addEventListener('click', function(){
        game("paper");
    })
    scissors.addEventListener('click', function(){
        game("scissors");
    })
}
main();



