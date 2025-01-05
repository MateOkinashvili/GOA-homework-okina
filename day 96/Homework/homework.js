const countDisplay = document.getElementById("count");
let count = parseInt(localStorage.getItem("count")) || 0;

countDisplay.textContent = count;

document.getElementById("increment").onclick = () => {
  countDisplay.textContent = ++count;
  localStorage.setItem("count", count);
};

document.getElementById("reset").onclick = () => {
  count = 0;
  countDisplay.textContent = count;
  localStorage.setItem("count", count);
};