"use strict";
var _a;
const e1 = {
    name: 'Kevin',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Kevin', 'Besenio');
result.split(' ');
const fetchedUserData = {
    id: 'u1',
    name: 'Kevin',
    job: { title: 'CEO', description: 'My own company' }
};
console.log(fetchedUserData.job && fetchedUserData.job.title);
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = '';
const storedData = userInput || 'DEFAULT';
const storedData2 = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
console.log(storedData2);
//# sourceMappingURL=app.js.map