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



let humanScore = 0;
let computerScore = 0;


console.log(getComputerChoice());

console.log(getHumanChoice());