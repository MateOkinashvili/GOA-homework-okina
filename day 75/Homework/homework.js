//1
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      return `${this.name} makes a noise.`;
    }
  }
  

class cat extends Animal {
    speak() {
      return `${this.name} meows.`;
    }
  }


const randomAnimal = new Animal('an animal')
console.log(randomAnimal.speak())

const catt = new cat('cat')
console.log(doggy.speak())

//

//2
class VideoGames {
    constructor(name){
      this.name = name
    }
  
    experience(){
      return `${this.name} is playable`
    }
  }
  
  class DbSparkingZero extends Games{
    experience(){
      return `${this.name} this game can ruin friendships`
    }
  }
  
  const randomGame = new VideoGames('a game')
  console.log(randomGame.expirience())
  
  const DragonBallSparkingZero = new DbSparkingZero('The Last Of Us')
  console.log(DragonBallSparkingZero.expirience())