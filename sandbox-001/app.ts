function add(n1: number, n2: number) {
   return n1 + n2;
}

function printResult(num: number) {
   // return type is void because it does not return a value
   console.log('Result: ' + num);
}

printResult(add(5, 12));

// function type
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));