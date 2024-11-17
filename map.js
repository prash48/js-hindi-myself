//maps in javascript...
// map creates new array by performing some operation on each array element...
let arr = [45, 23, 21];
let newarr = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value + index;
});
console.log(newarr);

//array-filter in javascript...
let arr1 = [45, 23, 21, 0, 3, 5];
let a = arr1.filter((a) => { //Filter an array with values that passes a test that creates a new array.
  return a < 10;
});
console.log(a);

//array-reduce in javascript...
let arr2 = [1, 2, 3, 5, 2, 1]; //it will add 1+2=3, 3+3=6, 6+5=11, 11+2=13, 13+1=14 (consecuitive two number in array)
let n = arr2.reduce((h1, h2) => { //Reduces an array to a single value.
  return h1 + h2;
});
console.log(n);

//another example of array-reduce method in javascript...
let arr3 = [1, 2, 3, 5, 2, 1];
const reduce_func = (h1, h2) => {
  return h1 + h2;
};
let newarr3 = arr3.reduce(reduce_func); //by creating function
console.log(arr3);
console.log(newarr3);

//Array-form in javascript...
//used to create an array from any other object.
let Name = "MGxpanther";
let arr4 = Array.from(Name); //Generally array.from loops used in DOM manipulation.
console.log(arr4);
console.log(typeof arr4); //Object type value...

let num = [3, 4, 5, 6, 7];
for (let i in num) { //for in loop is used to get a keys from an array
  console.log(i);
  console.log(num[i]);
  //console.log(typeof i)//String type.
  //console.log(typeof num[i]) //Number type.
}

let num2 = [3, 4, 5, 6, 7];
for (let i of num2) { //for of loop is used to get a values from an array
  console.log(i);
  //console.log(num2[i])
}
