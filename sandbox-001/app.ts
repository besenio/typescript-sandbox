function add(n1: number, n2: number) {
   return n1 + n2;
}

function printResult(num: number) {
   // return type is void because it does not return a value
   console.log('Result: ' + num);
}

printResult(add(5, 12));