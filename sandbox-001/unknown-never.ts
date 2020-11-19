// type is unknown at the moment
// unknown is different to any
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Kev';
if (typeof userInput === 'string') {
   userName = userInput;
}

// never return anything
function generateError(message: string, code: number): never {
   throw { message: message, errorCode: code };
   // while (true) {};
}

generateError('An error occurred', 500);