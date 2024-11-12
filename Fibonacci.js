//fibonacci series starts from 0,1,1,2,3,5,8,13,21,34...
const prompt = require("prompt-sync")({ sigint: true });
let n = prompt("Enter a number:");
n = Number.parseInt(n);
let a = 0,
  b = 1,
  c;
console.log("Fibonacci series upto " + n + " is ");
for (let i = 1; i <= n; i++) {
  console.log(a);

  c = a + b;
  a = b;
  b = c;
}



//Fibonacci series starts from 1,1,2,3,5,8,13,21,34,55....
/*  const prompt = require("prompt-sync")({ sigint: true });
let n = prompt("Enter a number:");
n = Number.parseInt(n);
let a = 0,
  b = 1,
  c;
console.log("Fibonacci series upto " + n + " is ");
for (let i = 1; i <= n; i++) {

  c = a + b;
  a = b;
  b = c;
  console.log(a);
} */