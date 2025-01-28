document.getElementById("dice-btn").addEventListener("click", fetchAdvice);

async function fetchAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    document.getElementById("advice-id").innerText = data.slip.id;
    document.getElementById("advice-text").innerText = `"${data.slip.advice}"`;
}

fetchAdvice();
