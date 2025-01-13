const form = document.getElementById('userForm');
const output = document.getElementById('output');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;

    const userData = { email, password, age, gender };
    localStorage.setItem('userData', JSON.stringify(userData));

    const storedData = JSON.parse(localStorage.getItem('userData'));
    output.innerHTML = `
        <h2>Stored User Details</h2>
        <p><strong>Email:</strong> ${storedData.email}</p>
        <p><strong>Password:</strong> ${storedData.password}</p>
        <p><strong>Age:</strong> ${storedData.age}</p>
        <p><strong>Gender:</strong> ${storedData.gender}</p>
    `;
});
