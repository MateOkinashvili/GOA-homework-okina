const target = Math.floor(Math.random() * 20) + 1;
let tries = 0;

function Guess() {
    const guess = document.getElementById('guess');
    const msg = document.getElementById('message');
    const count = document.getElementById('count');
    
    const num = parseInt(guess.value);
    tries++;
    count.textContent = `Attempts: ${tries}`;

    if (isNaN(num) || num < 1 || num > 20) {
        msg.textContent = 'Enter a number between 1 and 20';
        return;
    }

    if (num === target) {
        msg.textContent = `Got it! Number was ${target} in ${tries} tries!`;
        guess.disabled = true;
    } else if (num < target) {
        msg.textContent = 'higher.';
    } else {
        msg.textContent = 'lower.';
    }
}