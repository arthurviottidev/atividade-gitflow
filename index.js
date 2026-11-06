const options = {
    rock: { label: 'Pedra', icon: '✊' },
    paper: { label: 'Papel', icon: '✋' },
    scissors: { label: 'Tesoura', icon: '✌️' },
};
const beats = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
};
const choices = Object.keys(options);
const buttonsEl = document.getElementById('buttons');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');
let playerScore = 0;
let cpuScore = 0;
function randomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}
function play(player) {
    const cpu = randomChoice();
    const matchup = `${options[player].icon} x ${options[cpu].icon}`;
    if (player === cpu) {
        resultEl.textContent = `${matchup} empate`;
    }
    else if (beats[player] === cpu) {
        playerScore++;
        resultEl.textContent = `${matchup} você venceu`;
    }
    else {
        cpuScore++;
        resultEl.textContent = `${matchup} você perdeu`;
    }
    scoreEl.textContent = `Você ${playerScore} x ${cpuScore} CPU`;
}
choices.forEach((choice) => {
    const { label, icon } = options[choice];
    const button = document.createElement('button');
    button.textContent = icon;
    button.title = label;
    button.setAttribute('aria-label', label);
    button.addEventListener('click', () => play(choice));
    buttonsEl.appendChild(button);
});
