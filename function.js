//const prompt = require("prompt-sync")({signint: true})

//Function:  A javascript function is a block of code designed to perform a particular task...
// general function used in javascript...
function oneplusavg(x , y)
{
    return (1 + (x + y)/2)
}
let a = 1;
let b = 2;
let c = 3;
console.log("one plus average of a and b is:", oneplusavg(a , b))
console.log("one plus average of b and c is:", oneplusavg(b , c))
console.log("one plus average of a and c is:", oneplusavg(a , c))



const hello = () => {    //This is an example of arrow function in javascript
    console.log("Hey how are you. I am good dude.")
    return 'hi'
}
let v = hello();
console.log(v)

//Modern metohd of initailize function in javascript....
const sum = (p , q) => {
    return p + q;
}
console.log(sum(9 , 7))