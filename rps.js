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