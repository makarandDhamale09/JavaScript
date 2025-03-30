let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userScorePara = document.getElementById("user-score");
const compScorePara = document.getElementById("comp-score");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const playGame = (userChoice) => {
  compChoice = generateCompChoice();

  if (compChoice === userChoice) {
    drawCondition();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //comp choice => paper, scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //comp choice => scissors , rock
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //user choice=> scissors
      //comp choice => rock , paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};
const generateCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return options[index];
};

const drawCondition = () => {
  message.innerText = "Game was a Draw. Play again!!";
  message.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    message.innerText = "You Win!!";
    message.style.backgroundColor = "green";
    userScorePara.innerText = userScore;
  } else {
    compScore++;
    message.innerText = "You Lose!!";
    message.style.backgroundColor = "red";
    compScorePara.innerText = compScore;
  }
};
