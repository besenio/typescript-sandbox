// interface only available in typescript
// interface dictates how an object should look like
// can't have values
interface Greetable {
   name: string;

   // return type is void
   greet(phrase: string): void;
}

// can implement multiple interfaces, comma seperated
class Person implements Greetable {
   name: string;
   age = 100;

   constructor(n: string) {
      this.name = n;
   }

   greet(phrase: string) {
      console.log(phrase + ' ' + this.name);
   }
}

// interfaces can be used as a type
let user1: Greetable;

user1 = new Person('Kevin')

user1.greet('Hello');
console.log(user1);