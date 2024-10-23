class Human {
    constructor(name, age, gender, profesion) {
      this.name = name;      
      this.age = age;          
      this.gender = gender;    
      this.profesion = profesion;  
    }
  
    greet() {
      console.log('my name is ' + this.name + '.');
    }
  
    introduce() {
      console.log('I am ' + this.name + ', ' + this.age + ' years old, and I work as a ' + this.profesion + '.');
    }

    work() {
      console.log(this.name + ' is working as a ' + this.profesion + '.');
    }
  

    displayDeTails() {
      console.log('Name: ' + this.name);
      console.log('Age: ' + this.age);
      console.log('Gender: ' + this.gender);
      console.log('Profesion: ' + this.profesion);
    }
  }

  let person = new Human('mate', 17, 'male', 'ArmWrestler');
  
person.greet();          
person.introduce();     
person.work();            
person.displayDeTails();  

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
  let lion = new Animal('nala', 'Lion', 2);
  lion.speak();           
  lion.displayDetails(); 

  