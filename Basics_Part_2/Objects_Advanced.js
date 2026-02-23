// const user=new Object()  //Singleton Object
// const a={}  //Not a singleton object
// user.id="123abc"
// user.name="adi"
// user.loggedin=false

// console.log(user)        //{ id: '123abc', name: 'adi', loggedin: false }

// const adu={
//     email:"Adi.com",
//     fullname:{
//         username:{
//             firstname:"Adi",
//             lastname:"Parida"
//         }
//     }
// }
// console.log(adu.fullname.username.firstname)
// console.log(adu.fullname?.username.firstname) //Checks whether fullname exists or not and it used when we are getting the reponse from API

// const obj1={1: "a", 2: "b"}
// const obj2={3: "c", 4: "d"}
// const obj4={5: "e", 6: "f"}
// // const obj3={obj1,obj2}
// // console.log(obj3)                  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'a', '2': 'b' } }

// // const obj3=Object.assign(obj1,obj2) //Copies the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
// // console.log(obj3)                   //{ '1': 'a', '2': 'b', '3': 'c', '4':'d' }

// // const obj3=Object.assign({}, obj1,obj2,obj4)    //Target object is obj3 and {} ; the rest are source objects which will be merged in {}
// // console.log(obj3)
// // console.log(obj3==obj1) //False

// const obj3={...obj1,...obj2}   //First we will spread the values and then we will merge
// console.log(obj3)

// const users=[

// ]

// console.log(user)
// console.log(Object.keys(user))        //[ 'id', 'name', 'loggedin' ] 
// console.log(Object.values(user))      //[ '123abc', 'adi', false ]
// console.log(Object.entries(user))     //[ [ 'id', '123abc' ], [ 'name', 'adi' ], [ 'loggedin', false ] ]
// console.log(user.hasOwnProperty("id"))  //true

const course={
    coursename: "JS",
    price: "999",
    name:"Adi"
}

//Object destructuring://Allows you to extract properties from an object and bind them to distinct variables in a concise and readable way

const {coursename}=course  //To destructure an object, you use curly braces {} on the left-hand side of the assignment operator. The names of the variables must match the names of the object's properties by default.
console.log(coursename)    //JS

const {coursename: b}=course   //b is given as the alias name
console.log(b) //JS

//JSON structure
// {
//     "nam": "Adi",
//     "cou": "Python"        API sending the requested data in JSON format
// }
