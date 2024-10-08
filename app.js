let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePagph = document.querySelector("#user-score");
const compScorePagph = document.querySelector("#comp-score");


//generate computer choice ->modular 
const genCompChoice = () => {
    //rock, paper, scissors
    const options = ["rock", "paper", "scissors"];
    //generate random choice
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const draGame = () => {
    //console.log("game was draw;");
    msg.innerText = "Draw Game.";
    msg.style.backgroundColor = "#1b0033";


};

const showWinner = (userWin, userchoice, compchoice) => {
    if (userWin) {
        userScore++;
        userScorePagph.innerText = userScore;

        console.log("You win!");
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "#aaf683";
    } else {
        compScore++;
        compScorePagph.innerText = compScore;

        //console.log("You lose!");
        //msg.innerText = "You lose.";
        msg.innerText = `You lost.  ${compchoice} beats Your ${userchoice}`;

        msg.style.backgroundColor = "#d90429";

    }
}

const playGame = (userchoice) => {
    //generate user choice
    console.log("user choice = ", userchoice);
    
    const compchoice = genCompChoice();
    console.log("user choice = ", compchoice);

    if(userchoice === compchoice) {
        //draw game
        draGame();
    } else {
        let userWin = true;
        if(userchoice === "rock") {
            userWin = compchoice === "paper" ? false : true;
            //scissors, paper
        }

        if(userchoice === "paper") {
            userWin = compchoice === "scissors" ? false : true;
            //rock, scissors
        }

        else {
            userWin = compchoice === "rock" ? false : true;
            //rock, paper
        }
        showWinner(userWin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        //console.log("choice was clicked", userchoice);
        playGame(userchoice);
    });
});