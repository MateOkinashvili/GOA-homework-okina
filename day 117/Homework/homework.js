async function run() {
    const names = ['Ana', 'Gio', 'Niko', 'Luka', 'Mari'];
    const output = document.getElementById('output');
    
    for (let name of names) {
        await new Promise(resolve => {
            setTimeout(() => {
                output.innerHTML += `Async: ${name}<br>`;
                resolve();
            }, 1000);
        });
    }
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        const output = document.getElementById('output');
        output.innerHTML += `${this.name} is ${this.age} years old<br>`;
    }
}

const people = [
    new Person('Ana', 25),
    new Person('Gio', 30),
    new Person('Niko', 22),
    new Person('Luka', 35),
    new Person('Mari', 28)
];

run();
people.forEach(person => person.introduce());