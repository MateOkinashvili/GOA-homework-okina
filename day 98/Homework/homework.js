let userName = localStorage.getItem("userName");
let score = +localStorage.getItem("score") || 0;
let maxRange = +localStorage.getItem("maxRange") || 2;
let randomNumber = Math.floor(Math.random() * maxRange) + 1;

if (!userName) {
  document.getElementById("name-prompt").classList.remove("hidden");
  document.getElementById("submit-name").onclick = () => {
    userName = document.getElementById("name-input").value.trim();
    if (userName) {
      localStorage.setItem("userName", userName);
      location.reload();
    }
  };
} else {
  document.getElementById("game").classList.remove("hidden");
  document.getElementById("user-name").textContent = userName;
  document.getElementById("score").textContent = score;
  document.getElementById("range").textContent = `1 - ${maxRange}`;

  document.getElementById("color-picker").oninput = (e) =>
    (document.body.style.backgroundColor = e.target.value);

  document.getElementById("guess-btn").onclick = () => {
    let guess = +document.getElementById("guess-input").value;
    if (guess === randomNumber) {
      score++;
      maxRange *= 2;
      randomNumber = Math.floor(Math.random() * maxRange) + 1;
      localStorage.setItem("score", score);
      localStorage.setItem("maxRange", maxRange);
      document.getElementById("score").textContent = score;
      document.getElementById("range").textContent = `1 - ${maxRange}`;
      alert("Correct! Keep going!");
    } else alert("Wrong guess. Try again!");
  };
}
