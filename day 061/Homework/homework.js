const person = {
    name: "mate",
    age: 17,
    city: "tbilisi"
}

person.age = 18

person.hobby = "calisthenics"

delete person.city



const car = {
    bugatti: "chiron",
    year: 2016
}

const calculator ={
    a: 17,
    b: 20,
    add(){
        console.log(this.a + this.b)
    }
}

function Animal(name, sound) {
    this.name = name
    this.sound = sound
}

Animal.makeSound = function() {
    console.log(this.sound);
}

Animal.prototype.changeName = function(newName) {
    this.name = newName
}

const tiger = new Animal('Tiger', 'Roar')
const monkey = new Animal('monkey', 'oo-ah')
const dog = new Animal('Dog', 'Woof')
const cat = new Animal('Cat', 'Meow')

tiger.makesound()

tiger.changeName('Lion')
console.log(tiger.name)
lion.makeSound()

monkey.makeSound()
dog.makeSound()
cat.makeSound()


