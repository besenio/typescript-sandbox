"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const form = document.querySelector('form');
const addressInput = document.getElementById('address');
const GOOGLE_API_KEY = 'AIzaSyBWXSjgvQ1XwxXuB8MdQpZKYgzc41dKtia';
function searchAddressHandler(event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;
    axios_1.default
        .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`)
        .then(response => {
        console.log(response);
    })
        .catch(err => {
        console.log(err);
    });
}
form.addEventListener('submit', searchAddressHandler);
//# sourceMappingURL=app.js.map