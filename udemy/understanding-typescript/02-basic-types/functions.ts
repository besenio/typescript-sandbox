function add(n1: number, n2: number) {
   return n1 + n2;
}

function printResult(num: number) {
   // return type is void because it does not return a value
   console.log('Result: ' + num);
}

// callback functions can return something, even if the argument on which they're passed does NOT expect a returned value
// void doesn't force you to return anything if you don't want to return something
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
   const result = n1 + n2;
   cb(result);
}

printResult(add(5, 12));

// function type
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
   console.log(result);
});