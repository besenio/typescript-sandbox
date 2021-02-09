// // generic type - built in
// const names: Array<string> = []; // string[]
// // names[0].split(' ');

// // promise type - built in
// const promise: Promise<number> = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve(10);
//    }, 2000)
// });

// promise.then(data => {
//    // data.split(' ');
// })

// does not work
// function merge(objA: object, objB: object) {
//    return Object.assign(objA, objB);
// }

// console.log(merge({name: 'Kevin'}, {age: 1000}));
// const mergedObj = merge({name: 'Kevin'}, {age: 1000});
// mergedObj.age;

// will work
// two different types, set dynamically
// this will simply infer the types
// function merge<T, U>(objA: T, objB: U) {
//    return Object.assign(objA, objB);
// }

// const mergedObj = merge({name: 'Kevin', hobbies: ['Sports']}, {age: 1000});
// console.log(mergedObj.age);


// type constraints
// forced to pass in a function
// catches error
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//    return Object.assign(objA, objB);
// }

// const mergedObj = merge({name: 'Kevin', hobbies: ['Sports']}, 30);
// console.log(mergedObj);

interface Lengthy {
   length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
   let descriptionText = 'Got no value';
   if (element.length === 0) {
      descriptionText = 'Got 1 element';
   } else if (element.length > 1) {
      descriptionText = 'Got ' + element.length + ' elements.';
   }
   return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));