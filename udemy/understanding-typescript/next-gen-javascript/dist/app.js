"use strict";
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
const person = {
    firstName: 'Kevin',
    age: 30
};
const copiedPerson = Object.assign({}, person);
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);
const { firstName: userName, age } = person;
console.log('My Name is', userName, "and I'm", age, "years old");
//# sourceMappingURL=app.js.map