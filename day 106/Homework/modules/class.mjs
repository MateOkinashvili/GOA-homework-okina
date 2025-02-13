export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `name is ${this.name} and I am ${this.age} years old.`;
    }
}
