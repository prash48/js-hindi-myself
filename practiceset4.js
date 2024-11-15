//Prob 1.what will the following print in javascript console.log("har\".length)
//const prompt = require("prompt-sync")({signint: true})
let id = "Bittu\""
console.log(id.length)
console.log("har\"".length)
console.log("Panther\"".length)
console.log("ishowspeed\"".length)

//Prob 2.explore the includes, startswith & endswith functions of a string.
const array1 = [1, 2, 3]; //for more information serach: mdn includes js
console.log(array1.includes(2));// Expected output: true
const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat"));// Expected output: true
console.log(pets.includes("at"));// Expected output: false
console.log(pets.includes("dog"));//Expected output: true
const gigs = ['portfolio', 'hackathon', 'developer']
console.log(gigs.includes("developer"))
console.log(gigs.includes("statrup"))

const str1 = 'Saturday night plans';  //for more information search: mdn startswith js
console.log(str1.startsWith('Sat'));// Expected output: true
console.log(str1.startsWith('Sat', 4));// Expected output: false
console.log(str1.startsWith('night', 9));// Expected output: true
console.log(str1.startsWith('night', 10))//Excepted output: false
console.log(str1.startsWith('plans', 14))//Excepted output:false
console.log(str1.startsWith('plans', 15))//Excepted output:true

const str3 = "sunday weekend plans" //for more information search: mdn endswith js
console.log(str3.endsWith('plans'))//Excepted output: true
console.log(str3.endsWith('weekend',15))//Excepted output: false
console.log(str3.endsWith('weekend',14))//Excepted output: true
console.log(str3.endsWith('plans',20))//Excepted output: true
console.log(str3.endsWith('sunday'))//Excepted output: false
console.log(str3.endsWith('sunday',6))//Excepted output: true
console.log(str3.endsWith('sunday',20))//Excepted output: false
//indexing starts from 1 not 0 and always counts from starting string in endswith function.

//Prob 3.Write a program to convert the given strings in lowercase.
let name = "Kittu"
console.log(name.toLowerCase())  //used to convert into lowercase..
let name1 = 'i AM an INDIan'
console.log(name1.toLowerCase())

//Prob 4.Write a program to convert the given strings in uppercase.
let string = "Virat kohli"
console.log(string.toUpperCase())  //used to convert into uppercase.
const string1= 'virat kohli is an indian cricket player'
console.log(string1.toUpperCase())

//Prob 5.Extract the amount out of this string "Please give Rs 1000."
let str2 = "Please give me Rs 1000"
let amount = Number.parseInt(str2.slice("Please give me Rs ".length))  //for convrting in number type.
console.log(amount)
console.log(typeof(amount))  //typeof operator is used to find which type of things is...

//Prob 6.Try to change 4th character of a given string where you able to do it ?
let intro = "Gamer"
let newintro = intro.replace(intro[4],"s")
console.log("Before change intro is: " + intro)
console.log("After change the character newintro is: " + newintro)