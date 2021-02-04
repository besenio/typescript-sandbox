// fat arrow
// const add = (a: number, b: number) => {
//    return a + b;
// };

// default arguments has to be the last argument
// const add = (a: number, b: number = 1) => a + b;

// const printOutput = (output: string | number) => {
//    console.log(output)
// }

// const printOutput2: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//    button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(2, 5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

// spread operator in arrays
activeHobbies.push(...hobbies);

// spread operator in objects
const person = {
   firstName: 'Kevin',
   age: 30
};

const copiedPerson = { ...person };

// rest parameters
const add = (...numbers: number[]) => {
   return numbers.reduce((curResult, curValue) => {
      return curResult + curValue
   }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

// array destructuring
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

// object destructuring
const { firstName: userName, age } = person;
console.log('My Name is', userName, "and I'm", age, "years old");