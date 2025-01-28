const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const diceBtn = document.getElementById("dice-btn");

async function fetchAdvice() {
    try {
        let res = await fetch("https://api.adviceslip.com/advice");
        let data = await res.json();
        adviceId.innerText = data.slip.id;
        adviceText.innerText = `"${data.slip.advice}"`;
    } catch {
        adviceText.innerText = "Failed to load advice. Try again!";
    }
}

diceBtn.addEventListener("click", fetchAdvice);
fetchAdvice();
