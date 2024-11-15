//Prob 1.Write a program to print the marks of a student in an object using for loop. obj = {harry 98, rohan: 70, Aakash: 7}
// let marks = {
//     harry: 90,
//     shubham: 9,
//     lavish: 56,
//     Manika: 4
// }
// for(let i = 0; i <= Object.keys(marks).length; i++)
// {
//     console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
//}

//Prob 2.Write the program in Q1 using for in loop.
// for(let key in marks)
// {
//     console.log("the marks of " + key + " are " + marks[key])
// }

//Prob 3.Write a program to print "try again" untill the user enters the correct numbers.
//const prompt = require("prompt-sync")({signint: true})
// let cn = 43
// let i
// while(i != cn)
// {
//   console.log("Try again")
//   i = prompt("Enter a number:")
// }
// console.log("You have entered a currect number")


//const prompt = require("prompt-sync")({ signint: true });
a = prompt("Enter a number:");
b = prompt("Enter a number:");
c = prompt("Enter a number:");
d = prompt("Enter a number:");

//const mean = (a, b, c, d) => {
  let print = 0;
print = (a + b + c + d) / 4;
  //return (a + b + c + d) / 4;
//};
console.log(print);