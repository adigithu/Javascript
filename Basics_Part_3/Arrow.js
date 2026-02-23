const user={
    username: "Adi",
    price:149,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)  //This is used when we want to refer to the current context that is here to access the variables inside this scope we are using this
        //console.log(this)
    }

}

// user.welcomeMessage()    //Adi, welcome to website
// user.username="Sam"
// user.welcomeMessage()    //Sam, welcome to website
console.log(this)         //{} (Empty as there is no context to which we can refer)

//Note : Browser has window object as global object

// function one(){
//     let username="ADI"
//     console.log(this.username)  //Answer is Undefined  //This works on variables declared in objects and not on variables which are declared in functions
// }
// one()

//Use of Arrow Functions

const two = () => {
    let username="Adi"
    console.log(this.username)  //Undefined
    console.log(this) //{}
}
two()
//Explicit Return (As we have used the return keyword)
const three = (num1,num2) => {
    return num1+num2
}
console.log(three(2,4))      //6

//Implicit Return

const four = (num1,num2) =>  (num1+num2)   //We assume that we do not need a return keyword as we have only 1 line statement
console.log(three(2,4))  //6

//How to return object using arrow function
const five = (num1,num2) =>({username: "Adi"})
console.log(five(2,3))    //{ username: 'Adi' }

