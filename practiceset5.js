//Prob 1.Create an array of numbers and take input from the user to add numbers to ths array.
const prompt = require("prompt-sync")({signint: true})
let arr = [1, 2, 3, 4, 5, 6, 83, 94]
let a = prompt("Enter a number:")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)

//Prob 2.Keep adding numbers to the array in Prob 1. untill 0 is added to the array.
const prompt = require("prompt-sync")({signint: true})
let arr1 = [1, 2, 3, 43, 58, 79, 96, 105]
let b
do{
    b = prompt("Enter a number:")
    b = Number.parseInt(b)
    arr1.push(b)
}
while(b != 0)
    console.log(arr1)

//Prob 3.filter for number divisible by 10 from a given array.
let arr2 = [1, 2, 3, 40, 56, 70, 85, 960, 1020]
let n = arr2.filter((x) => {
    return x % 10 == 0
})
console.log("The number is divisible by 10 in given array is: ", n)

//Prob 4.Create an array of square of given numbers.
let arr3 = [1, 2, 3, 45, 52, 56, 90]
let c = arr3.map((x) => {
    return x*x
})
console.log("The squares of given numbers in array is: ", c)
console.log(typeof c)

//Prob 5.Use reduce to calculate factorial of a given number from an array of first n natural numbers 
// (n being the number whose factorial needs to be calculated.)
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let d = arr4.reduce((x1, x2) => {
    return x1*x2
})
console.log(d)
// console.log(typeof d)