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
}
const playGame = (userchoice) => {
    //generate user choice
    console.log("user choice = ", userchoice);
    
    const compchoice = genCompChoice();
    console.log("user choice = ", compchoice);

};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        //console.log("choice was clicked", userchoice);
        playGame(userchoice);
    });
});