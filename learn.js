//Loops in javascript....
let num = [3, 4, 5, 6, 7];
//classical for loop in javascript...
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

//for each loop in javascript..
num.forEach((Element) => {
  console.log(Element * Element);
  console.log(Element*Element*Element);
})

//Array.from is used to create an array from any other object...
//mainly used in DOM manipulation...
let name1 = "Prashant"
let arr = Array.from(name1)
console.log(arr)
console.log(typeof arr) //object


//for of loop in javascript... used for direct method of access array item.
for(let i of num)
  {
    console.log(i)
  }
console.log(typeof num)


//for in loop in javascript... 
for(let i in num)
  {
    console.log(i) //it gives us key of array e.g: 0 1 2 3 4
    //console.log(num[i])//it gives us value of array
  }
    console.log(typeof i)

//Another example of for in loop in javascript...
for(let i in num)
  {
    //console.log(i) //it gives us key of array
    console.log(num[i])//it gives us value of array e.g: 3 4 5 6 7
  }
    console.log(typeof i)