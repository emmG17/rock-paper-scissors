function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    const playerMove = playerSelection;
    const computerMove = computerSelection;

    if (playerMove === computerMove) {
        return "It's a tie";
    } else if (playerMove === "rock" && computerMove === "paper") {
        return "You lose! Paper beats rock";
    } else if (
        playerMove === "paper" &&
        computerMove === "scissors"
    ) {
        return "You lose! Scissors beats paper";
    } else if (
        playerMove === "scissors" &&
        computerMove === "rock"
    ) {
        return "You lose! Rock beats scissors";
    } else {
        return `You win, ${playerMove} beats ${computerMove}`;
    }
}

function createComputerImg(computerMove){
    let computerImg = document.createElement("img");

    if (computerMove === "rock") {
        computerImg.setAttribute("src", "./images/002-rock.png")
    } else if (computerMove === "paper") {
        computerImg.setAttribute("src", "./images/001-tissue-paper.png")
    } else {
        computerImg.setAttribute("src", "./images/003-scissor-tool.png")
    }
    return computerImg;
}

function createComputerWeapon (computerMove) {
    let computerImg = createComputerImg(computerMove);
    let computerMoveName = document.createElement("h2");
    let computerWeapon = document.createElement("div");
    
    computerMoveName.textContent = computerMove;;
    
    computerWeapon.classList.add('weapon');
    computerWeapon.appendChild(computerImg);
    computerWeapon.appendChild(computerMoveName);

    return computerWeapon;

}

let computerMove;
let playerMove;


const computerDiv = document.getElementById("computer-selection");
const playerOptions = document.querySelectorAll(".options .weapon");
const gameResult = document.getElementById("result")

playerOptions.forEach((option) => {
    option.addEventListener("click", () => {
        let computerWeapon = document.querySelector("#computer-selection .weapon");
        if (computerWeapon) computerDiv.removeChild(computerWeapon);

        computerMove = computerPlay();
        playerMove = option.id;
        computerWeapon = createComputerWeapon(computerMove);
        computerDiv.appendChild(computerWeapon);

        computerWeapon.addEventListener('animationend', () => {
            gameResult.textContent = playRound(computerMove, playerMove);
        })
    });
});