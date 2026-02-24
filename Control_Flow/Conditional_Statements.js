//Control flow: Based on the conditions, the code must be executed

//if

// if(condition){               //if condition evaluates to true then only the block of code inside it will be evaluated

// }

if (2=="2"){
    console.log("Executed")              //Executed
}

//=== It checks the values as well as their type checking that is data types

if (2==="2"){
    console.log("Executed")              
}
else{
    console.log("No")                        //No
}

const balance=1000
if (balance>500) console.log("Test")    //Test   Implicit way of writing if

//else if: It is also used

const userloggedin=true
const debitCard=true
if (userloggedin && debitCard){          //    ||: OR
    console.log("Granted")
}

