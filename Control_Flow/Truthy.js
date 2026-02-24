//Falsy Values : false,0,-0,BigInt 0n, "", null, undefined, NaN

//Truthy Values: "0",[],'false'," ",{},function(){}

username=[]
if (username.length===0){
    console.log("Array is empty")      //Array is empty
}

const obj={}
if (Object.keys(obj).length===0){   //It will return an array
    console.log("Empty")
}

//Nullish Coalescing Operator (??) : null undefined           It is used to check the multiple function returning values with null or undefined if these all are there

let val;
// val1=5 ?? 10              //5
// val1=null ?? 6
// console.log(val1)            //6

let var2;
var2=undefined ?? 10
console.log(var2)            //10

val=null ?? 5 ?? 10
console.log(val)             //5

//Use of ternary operator (?)

//Condition ? true : false

const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("Less than 80") : console.log("More than 80")
