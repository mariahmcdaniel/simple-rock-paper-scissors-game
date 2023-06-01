
const btn = document.getElementById('playBtn');

btn.addEventListener(
    'click',
    ()=> {
        rps();
    }
    );


let wins = 0;
let ties = 0;
let losses = 0;

const rps = (player, computer) => {
    player = prompt('Please enter r for rock, p for paper, or s for scissors').toLowerCase;

    let comp = Math.floor(Math.random() * 3);
    let msg = "rock"

    if (comp === 1) {
        computer = 'r'
        msg = "ROCK";
    } else if (comp === 2) {
        computer = 'p'
        msg = "PAPER";
    } else {
        computer = 's'
        msg = "SCISSORS";
    };

    const rules = { r: 's', p: 'r', s: 'p' };

    if (computer === rules[player]) {
        wins += 1;
        alert(`Computer chose ${msg} - You Won! 🥳`);
    } else if (player === rules[computer]) {
        losses += 1;
        alert(`Computer chose ${msg} - You lost 🫠`);
    } else if (player === computer) {
        ties += 1;
        alert(`Computer chose ${msg} - You tied! 😮‍💨`);
    } else {
        alert('Game only accepts letters r p or s');
        rps();
    }
    const conf = confirm('total wins: ' + wins + '\ntotal losses: ' + losses + '\ntotal ties:' + ties + '\nWould you like to play again?');
    if (conf) {
        rps();
    } else {
        alert('Thanks for playing!' + '\nYou won ' + wins + ' time(s)!' + '\nGoodbye')
    };

}

