//Objects can be declared in two ways: 1.Like a literal   2.Like a Constructor

//Singleton: When you create any object with a constructor, a singleton object is created that is, it is the only object of it's kind.
//Note: Whenever we declare objects like literals then singleton object is not created

//A Singleton object means:
//Only one object (one instance) of a class/constructor can exist.
// No matter how many times you try to create it, you always get the same object.

//Object Literals

const my=Symbol("key1")

const JsUser={
    name: "Adi",
    location:"Brjn",
    [my]: "key1",    //[my] now it is treated as a symbol in this object
    email: "aditya@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
// console.log(typeof JsUser.my)   my is a string here which actually should not be the case here. It must act like a symbol or must have type object as it is declared above
console.log(JsUser[my])
console.log(typeof [my])    //Object

JsUser.email='adi.com'   //To overwrite the previous content present in email
// Object.freeze(JsUser)   //We won't be able to make any changes to the values of their respective keys

JsUser.greeting=function(){
    console.log("Helloooo")
}
console.log(JsUser.greeting)   //Undefined
console.log(JsUser.greeting())  //Helloooo  
console.log(JsUser.greeting)   //[Function (anonymous)] that is the function is not executed and we have only got the reference

JsUser.greetingtwo=function(){  //Here we want to reference the name present in the above declared object
    console.log(`Helloooo, ${this.name}`)   // ` `(Backtick is used for string interpolation and "this" is used when we want to reference the same object. And when we will use .(dot) with it, every properties associated with our object will be shown)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingtwo())