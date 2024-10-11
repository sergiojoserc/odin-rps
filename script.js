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
        humanScore +=  1;
        computerScore +=  1;
        //return "Tie";
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors")||
        (humanChoice === "paper" && computerChoice === "rock")||
        (humanChoice === "scissors" && computerChoice === "paper" )){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore +=  1;
        //return "Player";
        }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore +=  1;
       // return "Computer"
       }

       return;
}

function scoreBoard(){
    console.log("Scoreboard\n -------------");
    console.log(`Player score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}


function playGame(){

    for(let i=0; i < 5; i++){
        playRound(getHumanChoice(),getComputerChoice());
        scoreBoard();

        if(humanScore === 3 && computerScore === 3){
            return "IT'S A TIEEE!! TRY AGAIN!"
        }
        if (humanScore === 3){
            return "YOU WIN!!"
        }
        if(computerScore ===3) {
            return "The computer wins :("
        }
}

}


let humanScore = 0;
let computerScore = 0;
let humanWins = 0;
let computerWins = 0;


console.log(playGame());

