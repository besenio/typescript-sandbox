// decorators
// executed when defined, not executed
// function Logger(constructor: Function) {
//    console.log('Logging...');
//    console.log(constructor);
// }

// decorator factories
// can now pass in values
function Logger(logString: string) {
   console.log('LOGGER FACTORY');
   return function(constructor: Function) {
      console.log(logString);
      console.log(constructor);
   }
}

function WithTemplate(template: string, hookId: string) {
   // return function(_: Function) { // the underscore tells TS we don't need the constructor argument
   console.log('TEMPLATE FACTORY');
   return function<T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) {
      // runs when defined and not instantiated
      return class extends originalConstructor {
         constructor(..._: any[]) {
            super();
            console.log('Rendering template');
            const hookEl = document.getElementById(hookId);
            if (hookEl) {
               hookEl.innerHTML = template;
               hookEl.querySelector('h1')!.textContent = this.name;
            }
         }
      }
   }
}

// @Logger('LOGGING - PERSON')
// WithTemplate runs first and then Logger
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object<h1>', 'app')
class Person {
   name = 'Kevin';

   constructor() {
      console.log('Creating person object...');
   }
}

const pers = new Person();

console.log(pers);

// ---

function Log(target: any, propertyName: string | Symbol) {
   console.log('Property decorator!');
   console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
   console.log('Accessor decorator!');
   console.log(target);
   console.log(name);
   console.log(descriptor);
}

// method decorator
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
   console.log('Method decorator!');
   console.log(target);
   console.log(name);
   console.log(descriptor);
}

// parameter decorator
function Log4(target: any, name: string | Symbol, position: number) {
   console.log('Parameter decorator!');
   console.log(target);
   console.log(name);
   console.log(position);
}

class Product {
   @Log
   title: string;
   private _price: number;

   // decorators can be added to accessors
   @Log2
   set price(val: number) {
      if (val > 0) {
         this._price = val;
      } else {
         throw new Error('Invalid price - should be positive!');
      }
   }

   constructor(t: string, p: number) {
      this.title = t;
      this._price = p;
   }

   // decorators can be added to methods
   @Log3
   getPriceWithTax(@Log4 tax: number) {
      return this._price * (1 + tax);
   }
}

// decorator code executes when defined not at runtime when you call a method
// decorators allows set up work when a class is defined, they are not event listeners
const p1 = new Product('Book 1', 19);
const p2 = new Product('Book 2', 29);