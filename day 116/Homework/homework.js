function generate() {
    const input = document.getElementById('nInput');
    const output = document.getElementById('Output');
    const number = input.value;

    if (number === '') {
        output.innerHTML = 'Please enter a number';
        return;
    }

    let table = '<table border="1">';
    for (let i = 1; i <= 10; i++) {
        table += `<tr><td>${number} x ${i} = ${number * i}</td></tr>`;
    }
    table += '</table>';

    output.innerHTML = table;
}