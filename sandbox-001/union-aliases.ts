// type aliases
type Combinable = number | string; // union types
type ConversionDescriptor = 'as-number' | 'as-text'; // literal types

function combine(
   input2: Combinable,
   input1: Combinable,
   resultConversion: ConversionDescriptor) {

   let result;
   if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
      result = +input1 + +input2;
   } else {
      result = input1.toString() + input2.toString();
   }
   return result;
}

const combinedAges =combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges)

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);

// type aliases and object types

// wet
// function greet(user: { name: string; age: number }) {
//    console.log('Hi, I am ' + user.name);
// }

// function isOlder(user: { name: string; age: number }, checkAge: number) {
//    return checkAge > user.age;
// }

// dry
// type User = { name: string; age: number };

// function greet(user: User) {
//    console.log('Hi, I am ' + user.name);
// }

// function isOlder(user: User, checkAge: number) {
//    return checkAge > user.age;
// }