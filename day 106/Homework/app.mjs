import { toUpperCase, toLowerCase } from "./string.mjs";
import { add, multiply } from "./math.mjs";
import { Person } from "./class.mjs";

console.log(toUpperCase("hello")); 
console.log(toLowerCase("WORLD")); 

console.log(add(5, 3)); 
console.log(multiply(4, 2));


const person = new Person("Alice", 25);
console.log(person.introduce());
