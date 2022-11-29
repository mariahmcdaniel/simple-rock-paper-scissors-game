// As a user, I want to play Rock, Paper, Scissors against an automated opponent.

// As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

// As a user, I expect the computer to choose R, P, or S in return.

// As a user, I want the option to play again whether I win or lose.

// As a user, I want to see my total wins, ties, and losses after each round.
var wins = 0;
var ties = 0;
var losses = 0;

var rps = (p, c) => {
    var p = prompt('Please enter r for rock, p for paper, or s for scissors');

    var comp = Math.floor(Math.random() * 3);

    if (comp === 1) {
        c = 'r'
    } else if (comp === 2) {
        c = 'p'
    } else {
        c = 's'
    };

    var rules = { r: 's', p: 'r', s: 'p' };

    if (c === rules[p]) {
        wins += 1;
        alert('You Won!');
    } else if (p === rules[c]) {
        losses += 1;
        alert('You lost :\'(');
    } else {
        ties += 1;
        alert('You tied!');
    }
    var conf = confirm('total wins:' + wins + ' total losses:' + losses + ' total ties:' + ties + ' Would you like to play again?');
    if (conf) {
        rps();
    } else {
        alert('Thanks for playing! Goodbye')
    };

}

rps();