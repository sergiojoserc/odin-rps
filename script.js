console.log("Hello World!");

function getRandomInt (n){
    return Math.floor(Math.random() * n);
}

function getComputerChoice (){
    let computer = getRandomInt(3);
    
    if (computer === 0){
        return "rock"
    }
    else if (computer === 1){
        return "paper"
    }
    else{
        return "scissors"
    }

}

function getHumanChoice(){
    let input = prompt("Choice between Rock, Paper or Scissors!").toLowerCase();

    while(input == null || (input !== "rock" && input !== "paper" && input !=="scissors")){
        input = prompt("Please type Rock, Paper or Scissors!").toLowerCase();
    }

    return input;
}

function playRound(humanChoice, computerChoice){
    // console.log(humanChoice);
    // console.log(computerChoice);

    if (humanChoice === computerChoice){
        console.log(`Tie! You both chose ${humanChoice}!`);
        return "Tie";
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors")||
        (humanChoice === "paper" && computerChoice === "rock")||
        (humanChoice === "scissors" && computerChoice === "paper" )){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return "Player";}
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return "Computer"}
}

function addScore(playRound){

}

function playGame(){

}

let humanScore = 0;
let computerScore = 0;


console.log(playRound(getHumanChoice(),getComputerChoice()));