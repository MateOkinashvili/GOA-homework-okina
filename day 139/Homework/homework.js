const day = document.getElementById('d');
const month = document.getElementById('m');
const year = document.getElementById('y');
const button = document.getElementById('go');
const output = document.getElementById('out');

button.onclick = () => {
  const d = +day.value;
  const m = +month.value;
  const y = +year.value;

  if (!d || !m || !y) {
    output.innerHTML = `
      <p><span class="text-purple-500">0</span> years</p>
      <p><span class="text-purple-500">0</span> months</p>
      <p><span class="text-purple-500">0</span> days</p>
    `;
    return;
  }

  const birthDate = new Date(y, m - 1, d);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  output.innerHTML = `
    <p><span class="text-purple-500">${years}</span> years</p>
    <p><span class="text-purple-500">${months}</span> months</p>
    <p><span class="text-purple-500">${days}</span> days</p>
  `;
};
