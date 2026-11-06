type Choice = 'rock' | 'paper' | 'scissors';

const labels: Record<Choice, string> = {
    rock: 'Pedra',
    paper: 'Papel',
    scissors: 'Tesoura',
};

const beats: Record<Choice, Choice> = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
};

const choices = Object.keys(labels) as Choice[];

const buttonsEl = document.getElementById('buttons')!;
const resultEl = document.getElementById('result')!;
const scoreEl = document.getElementById('score')!;

let playerScore = 0;
let cpuScore = 0;

function randomChoice(): Choice {
    return choices[Math.floor(Math.random() * choices.length)];
}

function play(player: Choice): void {
    const cpu = randomChoice();
    const matchup = `${labels[player]} x ${labels[cpu]}`;

    if (player === cpu) {
        resultEl.textContent = `${matchup}: empate`;
    } else if (beats[player] === cpu) {
        playerScore++;
        resultEl.textContent = `${matchup}: você venceu`;
    } else {
        cpuScore++;
        resultEl.textContent = `${matchup}: você perdeu`;
    }

    scoreEl.textContent = `Você ${playerScore} x ${cpuScore} CPU`;
}

choices.forEach((choice) => {
    const button = document.createElement('button');
    button.textContent = labels[choice];
    button.addEventListener('click', () => play(choice));
    buttonsEl.appendChild(button);
});