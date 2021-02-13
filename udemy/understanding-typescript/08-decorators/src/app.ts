// decorators
// executed when defined, not executed
// function Logger(constructor: Function) {
//    console.log('Logging...');
//    console.log(constructor);
// }

// decorator factories
// can now pass in values
function Logger(logString: string) {
   return function(constructor: Function) {
      console.log(logString);
      console.log(constructor);
   }
}

function WithTemplate(template: string, hookId: string) {
   // return function(_: Function) { // the underscore tells TS we don't need the constructor argument
   return function(constructor: any) {
      const hookEl = document.getElementById(hookId);
      const p = new constructor();
      if (hookEl) {
         hookEl.innerHTML = template;
         hookEl.querySelector('h1')!.textContent = p.name;
      }
   }
}

// @Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object<h1>', 'app')
class Person {
   name = 'Kevin';

   constructor() {
      console.log('Creating person object...');
   }
}

const pers = new Person();

console.log(pers);