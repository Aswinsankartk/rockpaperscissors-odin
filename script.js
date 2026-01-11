//CREATING Ps AND DIVs FOR DISPLAYING THE ROUND RESULT, SCORE AND FINAL WINNER.
const resultContainer=document.createElement("div");
const roundResult=document.createElement("p");
const score=document.createElement("p");
const finalWinner=document.createElement("p");
document.body.appendChild(resultContainer);
resultContainer.append(roundResult,score,finalWinner);

//SELECTING THE BUTTONS TO PLAY FROM THE DOM.
const rockBtn=document.querySelector("#rock-btn");
const paperBtn=document.querySelector("#paper-btn");
const scissorsBtn=document.querySelector("#scissors-btn");

/* ADDING EVENT LISTENERS & PASSING FUNCTIONS TO BUTTONS
   AND CHANGING CONTENT IN THE DOM. */
rockBtn.addEventListener("click",()=>{                     //ROCK BUTTON
    playRound("rock",getComputerChoice());
    roundResult.textContent=`${msg}`;
    score.textContent=`YOU ${humanScore} - ${computerScore} COMPUTER`;
    finalWinner.textContent=winner;
});
paperBtn.addEventListener("click",()=>{                    //PAPER BUTTON
    playRound("paper",getComputerChoice());
    roundResult.textContent=`${msg}`;
    score.textContent=`YOU ${humanScore} - ${computerScore} COMPUTER`;
    finalWinner.textContent=winner;
});
scissorsBtn.addEventListener("click",()=>{                 //SCISSORS BUTTON
    playRound("scissors",getComputerChoice());
    roundResult.textContent=`${msg}`;
    score.textContent=`YOU ${humanScore} - ${computerScore} COMPUTER`;
    finalWinner.textContent=winner;
});

/* INITIALIZING VARIABLES TO STORE HUMAN & COMPUTER SCORE, ROUND RESULT, 
   WINNER AND FLAG FOR STOPPING THE GAME AFTER ANY PLAYER HITS 5 POINTS. */
let humanScore=0;
let computerScore=0;
let gameOver=false;
let msg="";
let winner="";

//FUNCTION FOR GENERATING COMPUTER CHOICE.
function getComputerChoice(){
    let num=Math.random();
    let choice="";
    if(num>=0 && num<=0.33){
        choice="scissors";
    } else if(num>0.33 && num<=0.66){
        choice="paper";
    } else{
        choice="rock";
    }
    return choice;
}

//FUNCTION FOR PLAYING ROUNDS.
function playRound(humsc,comsc){
    if(gameOver) return;
    const humanChoice=humsc.toLowerCase();
    const computerChoice=comsc;
    if (humanChoice=="rock"){
        if(computerChoice=="rock"){
            msg="Tie! Both chose Rock!";
        } else if (computerChoice=="paper"){
            msg="You lose! Paper beats Rock!";
            computerScore++;
        } else {
            msg="You win! Rock beats Scissors!";
            humanScore++;
        }
    } else if (humanChoice=="paper"){
        if(computerChoice=="paper"){
            msg="Tie! Both chose Paper!";
        } else if (computerChoice=="rock"){
            msg="You win! Paper beats Rock";
            humanScore++;
        } else {
            msg="You lose! Scissors beat Paper!";
            computerScore++;
        }
    } else {
        if(computerChoice=="scissors"){
            msg="Tie! Both chose Scissors!";
        } else if (computerChoice=="rock"){
            msg="You lose! Rock beats Scissors!";
            computerScore++;
        } else {
            msg="You win! Scissors beats Paper!";
            humanScore++;
        }
    }
    //BLOCK TO CHECK IF 5 POINTS HIT OR NOT. 
    //IF HIT, STOP THE GAME.
    if(humanScore===5 || computerScore===5){
        gameOver=true;
        if(humanScore===5){
            winner="YOU ARE THE WINNER!";
        } else {
            winner="COMPUTER WON THE GAME!";
        }
    };
    return humanScore,computerScore,msg,winner;
}