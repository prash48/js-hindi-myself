// swapping of two numbers without using third variable with arithmetic operator...
const prompt = require("prompt-sync")({sigint: true}) //for Code run in VScode you have to write this code.
let a = prompt("Enter the value of a:")
let b = prompt("Enter the value of b:")
a = Number.parseInt(a)
b = Number.parseInt(b)
a = a + b;
b = a - b;
a = a - b;
console.log("After swapping the value os a and b is:" + a + " , " +b)
