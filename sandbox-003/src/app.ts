// type AddFn = (a: number, b: number) => number;
// interface as a custom function type
interface AddFn {
   (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
   return n1 + n2;
}

// interface only available in typescript
// interface dictates how an object should look like
// can't have values, can't store arbitrary types
interface Named {
   // won't be able to modify read-only
   readonly name?: string;
   // can add a question mark at the end of properties or methods
   // optional property might exists in other classes that implements this interface
   outputName?: string;
}

// Greetable will also have what Named has
// classes can only inherit from one class
// interfaces can inherity from multiple interfaces, comma seperated
interface Greetable extends Named {
   // return type is void
   greet(phrase: string): void;
}

// can implement multiple interfaces, comma seperated
class Person implements Greetable {
   name?: string;
   age = 100;

   // add question mark or optional parameters, this will default to undefined
   constructor(n?: string) {
      if (n) {
         this.name = n;
      }
   }

   greet(phrase: string) {
      if (this.name) {
         console.log(phrase + ' ' + this.name);
      } else {
         console.log('Hi!')
      }
   }
}

// interfaces can be used as a type
let user1: Greetable;

user1 = new Person();

user1.greet('Hello');
console.log(user1);