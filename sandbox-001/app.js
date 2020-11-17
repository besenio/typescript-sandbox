function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    // return type is void because it does not return a value
    console.log('Result: ' + num);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
