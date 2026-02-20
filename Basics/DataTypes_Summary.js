//Primitive DataTypes:- These are based on call by values. Whenever we copy the values, we are not given the reference in the memory. We are only given the copy and the changes are only made in the copy and not in the memory.

// 7 types: String, Number, Boolean, Null(Empty), Undefined (Variable and it's memory is declared but the values which is to be assigned to it is not decided), Symbol (It is used to make any value unique), BigInt

//Reference Datatypes
//It's also called non-primitive datatypes.
//These are the values whose references can be allocated directly in the memory.
//Example: Array, Objects, Functions

const id=Symbol("123")
const anotherid=Symbol("123")   //Symbol: To create a unique, immutable identifier primarily used as an object property key
//Each symbol value is guaranteed to be distinct from every other symbol and every string, even if they have the same description.

const bigNumber=321427814913n //n represents that it is big int

const human=["Adi", "Falesh", "MD"]   //Array
let myObj={
    name: "Adi",
    age:22,
}      //Objects    and the type is object

const myFunc=function(){
    console.log("Hi");
}

console.log(typeof myFunc)  //function

let myname="Aditya"
let holder=myname
holder="Self"
console.log(myname)
console.log(holder)  //Here stack concept is used

let user={                //Heap memory concept is used
    email:"Aditya.com",
    upi: "user@ybl"
}
let usertwo=user
usertwo.email="Hi@com"
console.log(user.email)
console.log(usertwo.email)