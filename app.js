let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

//generate computer choice ->modular 
const genCompChoice = () => {
    //rock, paper, scissors
    const options = ["rock", "paper", "scissors"];
    //generate random choice
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const draGame = () => {
    console.log("game was draw;");
};

const showWinner = (userWin) => {
    if (userWin) {
        console.log("You win!");
    } else {
        console.log("You lose!");
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
        showWinner(userWin);
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