//Array in javascript....
let num = [1, 2, 3, 4, 5, 34, 7];
let b = num.toString();
console.log(b, typeof b);
let c = num.join(" and ");
console.log(c, typeof c);
// let r = num.pop();  //removes last element from array..
// console.log(num, r);
let r = num.push(56)
console.log(num, r);

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(number.length)
delete number[0]
console.log(number) //delete is an operator in 0th position we get <1 empty space> which show only data delete but length of array is same.
console.log(number.length)

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19];
let even_num_more = [211, 212, 213, 214, 215, 216, 217, 218, 219];
let newarray = num1.concat(num_more, even_num_more);//concat is used to join the arrays (as per requirements)
console.log("New Array is: ", newarray);
console.log("Afetr combining all Array: " ,num1, num_more, even_num_more);

//Sorting of array...
let num2 = [551, 22, 3, 14, 5, 6, 7, 8, 229];
num2.sort();
console.log(num2);


let compare = (a, b) => {
  //return a - b;//for sorting the array in the asending order
  return b - a; //for sorting the array in descending order
};
let num3 = [551, 22, 3, 14, 5, 6, 7, 8, 229];
num3.sort(compare);
num3.reverse(); //reverae function is used to opposite the array...
console.log(num3);

//Slicing in array
const value = [551, 23, 3, 14, 5, 6, 7, 8, 229]
let digit = value.slice(4 , 6)//it's print the object from 4th position to (6-1)th position...
let digit1 = value.slice(3)//It's print the object from 3th position to last of array...
console.log(value)
//value.slice(5)
console.log("After slice the value is: ", digit)
console.log("After slicing the value is: ", digit1) 