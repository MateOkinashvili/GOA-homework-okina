class Human {
    constructor(name, age, gender, profession) {
        this.name = name;      
        this.age = age;          
        this.gender = gender;    
        this.profession = profession;  
    }
    greet() {
        console.log('my name is ' + this.name + '.');
    }
    introduce() {
        console.log('I am ' + this.name + ', ' + this.age + ' years old, and I work as a ' + this.profession + '.');
    }
    work() {
        console.log(this.name + ' is working as a ' + this.profession + '.');
    }
    displayDetails() {
        console.log('Name: ' + this.name);
        console.log('Age: ' + this.age);
        console.log('Gender: ' + this.gender);
        console.log('Profession: ' + this.profession);
    }
    static generalInfo() {
        console.log('Humans are cool');
    }
    static countHumans(humansArray) {
        return humansArray.length;
    }
}

class Employee extends Human {
    constructor(name, age, gender, profession, workk) {
        super(name, age, gender, profession);
        this.workk = workk;
    }
    introduce() {
        super.introduce();
        console.log('I teach ' + this.workk + '.');
    }
    work() {
        console.log(this.name + ' is working as a ' + this.profession + ' at ' + this.workk + '.');
    }
    static Infoo() {
        console.log('Employees work for the company.');
    }
}


let person1 = new Human('mate', 17, 'male', 'ArmWrestler');
let employee1 = new Employee('Hannah', 16, 'female', 'Teacher', 'Math');


person1.greet();
person1.introduce();
person1.work();
person1.displayDetails();
Human.generalInfo();  



employee1.greet();
employee1.introduce();
employee1.work();
employee1.displayDetails();
Employee.Infoo();








class Animal {
    constructor(name, species, age) {
      this.name = name;     
      this.species = species; 
      this.age = age;       
    }
    speak() {
      console.log(this.name + ' makes a sound.');
    }
    displayDetails() {
      console.log('Name: ' + this.name);
      console.log('Species: ' + this.species);
      console.log('Age: ' + this.age + ' years');
    }

  }

class Lion extends Animal{
    constructor(name, age){
        super(name, 'Lion', age);
    }

    speak() {
        console.log(this.name + 'roar');
    }

    static lionInfo() {
        console.log('Lions are big cats known for their majestic manes.');
    }

}

let lion = new Animal('nala', 'Lion', 4);
let elephant = new Animal('Rio', 'Macaw', 15)

lion.speak();           
lion.displayDetails(); 

elephant.speak();
elephant.displayDetails();

Animal.generalInfo();
Lion.lionInfo();