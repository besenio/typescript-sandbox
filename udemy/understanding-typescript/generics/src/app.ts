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
   let descriptionText = 'Got no value.';
   if (element.length === 1) {
      descriptionText = 'Got 1 element.';
   } else if (element.length > 1) {
      descriptionText = 'Got ' + element.length + ' elements.';
   }
   return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
   return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Kevin' }, 'name');

// simple generic class
// can store string or numbers but not objects
// maybe this class will only use primitive values
class DataStorage<T extends string | number | boolean> {
   private data: T[] = [];

   addItem(item: T) {
      this.data.push(item);
   }

   removeItem(item: T) {
      if (this.data.indexOf(item) === -1) {
         return;
      }
      this.data.splice(this.data.indexOf(item), 1);
   }

   getItems() {
      return [...this.data];
   }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Kevin');
textStorage.addItem('Andrew');
textStorage.removeItem('Andrew');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const kevinObj = {name: 'Kevin'}
// objStorage.addItem(kevinObj);
// objStorage.addItem({name: 'Andrew'});
// // ...
// objStorage.removeItem(kevinObj);
// console.log(objStorage.getItems());

// Partial
interface CourseGoal {
   title: string;
   description: string;
   completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
   let courseGoal: Partial<CourseGoal> = {};
   courseGoal.title = title;
   courseGoal.description = description;
   courseGoal.completeUntil = date;
   return courseGoal as CourseGoal;
   // return {title: title, description: description, completeUntil: date};
}

// Readonly
const names: Readonly<string[]> = ['Kevin', 'Christian'];
// names.push('Kevin');
// names.pop();