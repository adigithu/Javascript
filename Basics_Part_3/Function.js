// //Functions: It's a block of code which is reusable and can be used in other programs

// function Adi(){
//     console.log("Adi")
// }
// Adi()    // Adi: Reference of the function and Adi():To execute the function 

// function two(num1,num2){       //num1,num2 are parameters   Parameters: parameters are the named variables in a function's definition
//     console.log(num1+num2)
// }
// two(3,4)                       //3,4 are arguments     Arguments: arguments are the actual values passed to the function when it is called

// function three(num3,num4){
//     let result=num3+num4
//     return result
// }
// const a=three(3,4)
// console.log("Result:", a)

// function login(username){
//     return `${username} just logged in`
// }
// console.log(login("Adi"))

// function login(username){         //username="Adi"        And suppose we are passing the value as "Aditya" while calling the function then "Aditya" overrides "Adi" and "Aditya" is assigned to the username
//     if(username===undefined){              // or if(!username)
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(login())         //Undefined is the output if no username is given to the function

// function calculate(num6){
//     return num6
// }
// console.log(calculate(200,400,300))       //Only 200 would come in the output

// function calculate(...num7){        //...num7 becomes rest parameter and it accepts all arguments into an array
//     return num7
// }
// console.log(calculate(200,400,300))   //[ 200, 400, 300 ]

function clc(val1,val2,...num8){
    return val1,val2                 //val2 only will be returned
}
console.log(clc(200,500,100,300))

function clc1(val3,val4,...num9){
    return num9                
}
console.log(clc1(200,500,100,300))  //[100,300]

//Passing objects to functions

const user={
    username: "Adi",
    price:199
}

function handle(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`)
}
handle(user)

function handle1(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`)
}
handle1({
    username: "Aditya",
    price: 299
})

const mynew=[200,300,400]

function accept(getArray){
    return getArray[2]
}
console.log(accept(mynew))   //400