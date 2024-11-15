//Prob 1.Use logical operators to find whether the age of a person lies between 10 and 20
const prompt = require("prompt-sync")({signint: true})
let age = prompt("Enter your age:")
if(age > 10 && age < 20)
{
    console.log("Your age lies between 10 and 20")
}
else
{
    console.log("your age doesnot lies between 10 and 20")
}


//Prob 2.Demonstrate the use of switch case statements in javascript.
const prompt = require("prompt-sync")({ signint: true });
let number = prompt("Enter the number:");
switch (number) {
  case "12":
    console.log("Your number is 12");
    break;
  case "13":
    console.log("Your number is 13");
    break;
  case "14":
    console.log("Your number is 14");
    break;
  case "15":
    console.log("Your number is 15");
    break;
  case "18":
    console.log("Your number is 18 and you are special");
    break;
  default:
    console.log("Your number is not special");
}


//Prob 3.write a program to find or check whether a given number is divisible by 2 and 3.
const prompt = require("prompt-sync")({signint: true})
const num = prompt("Enter a number:")
if(num % 2 == 0 && num % 3 == 0)
{
  console.log("The number is divisible by both 2 and 3.")
}
else
{
  console.log("The number is not divisible by both 2 and 3")
}


//Pro 4.write a javascript program to find whether the number/value is divisible by 2 or 3.
const prompt = require("prompt-sync")({signint: true})
const value = prompt("Enter the value:")
if(value % 2 == 0 || value % 3 == 0)
{
  console.log("The number is divided by either 2 or 3")
}
else
{
  console.log("The number is not divided by either 2 or 3")
}


//Prob 5.Print you can drive or you cannot drive based on age being greater than 18 using ternary operator.
const prompt = require("prompt-sync")({ signint: true });
let age = prompt("Enter your age:");
if (age > 0 && age < 18) {
  console.log("You cannot drive");
} else if (age <= 0) {
  console.log("Invalid age ; again enter your age");
} else {
  console.log("You can drive");
}