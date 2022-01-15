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
    computerMoveName.textContent = computerMove;;
    let computerWeapon = document.createElement("div");
    computerWeapon.classList.add('weapon');
    computerWeapon.appendChild(computerImg);
    computerWeapon.appendChild(computerMoveName);

    return computerWeapon;

}


const playerOptions = document.querySelectorAll(".options .weapon");
playerOptions.forEach((option) => {
    option.addEventListener("click", () => {
        let computerWeapon = document.querySelector("#computer-selection .weapon");
        let computerDiv = document.getElementById("computer-selection");
        if (computerWeapon) computerDiv.removeChild(computerWeapon);
        let playerMove = option.id;
        let computerMove = computerPlay();
        
        computerDiv.appendChild(createComputerWeapon(computerMove));
        
    });
});
// let computerContainer = document.getElementById("computer-selection");
// computerContainer.appendChild(createComputerWeapon(computerMove));