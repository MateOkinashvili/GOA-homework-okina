document.getElementById('person-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const idNumber = document.getElementById('idNumber').value;
    const height = document.getElementById('height').value;
    const description = document.getElementById('description').value;
    const email = document.getElementById('email').value;


    const personCard = document.createElement('div');
    personCard.className = 'person-card';
    personCard.innerHTML = `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>ID Number:</strong> ${idNumber}</p>
        <p><strong>Height:</strong> ${height} cm</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    `;

    document.getElementById('people-list').appendChild(personCard);

    event.target.reset();
});
