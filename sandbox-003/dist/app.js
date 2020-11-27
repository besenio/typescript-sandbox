"use strict";
class Person {
    constructor(n) {
        this.age = 100;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user1;
user1 = new Person('Kevin');
user1.greet('Hello');
console.log(user1);
//# sourceMappingURL=app.js.map