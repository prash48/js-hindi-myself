// String in javascript............
//string are immutable things.
//Always counting of strin starts from 0, e.g. Prashant: 0,1,2,3,4,5,6,7
//const prompt = require("prompt-sync")({ signint: true });
let name = " Prashant      ";
let name2 = "Kumar";
console.log(name.length); //used to find the length of string
console.log(name.toUpperCase()); //converts the string into upper case e.g: "prashnat":"PRASHANT"
console.log(name.toLowerCase()); //converts the string into lower case e.g: "prashnat":"prashant"
console.log(name.slice(2, 4)); //here 4 not included
console.log(name.slice(4)); // here 4 included
console.log(name.replace("Prashant", "Mani")); //Replace is used to replace the string in javascript
console.log(name.concat(name2, " yes")); //concat is used to concatenate(add) the string
console.log(name.trim()); //trim is used to remove the extra spaces from the string e.g. "   Prashant   " to "Prashant"
console.log(name[0]); //used to print the character of the string which is comes on 0th position
console.log(name[4]); //used to print the character of the string which is comes on 4th position
console.log(name[8]); //used to print the character of the string which is comes on 8th position
let friend = `i am "prashant" and 'harsh is my friend'`  //we can use single and double quotes in the string using backtics ``
console.log(friend)
let a = `this is ${name}` //we can insert variables directly in template literals.. using backtics
let b = 'this is ${name}' //we cannot insert variables directly in template literals.. using single or double quotes
console.log(a)
console.log(b)
let name3 = 'Adam D\' Angelo' //we can use single and double quotes escape sequence character to solve the problem...
let name4 = `Adam D' Angelo` //it will give not give error when we use backtics  `` in case of escape character
console.log(name3)
console.log(name4)
let name5 = "Prashant\nKumar" //\n is used to print the string in new line"
console.log(name5)
let name6 = "Prashant\tKumar"
console.log(name6)//\t is used to print the string in tabular (tab) form
let name7 = "Prashant\rKumar"
console.log(name7)//\r is used to print the string in carriage return