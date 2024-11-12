//write a program to print factorial of the number...
const prompt = require("prompt-sync")({signint: true})
let num = prompt("Enter a number:")
num = Number.parseInt(num)
let fact = 1;
for(let i = 1;i <=num ;i++)
{
    fact = fact*i;
}
console.log("The factorial of " + num + " is " +fact) 