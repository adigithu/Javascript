// let score="30"
// console.log(typeof score)
// console.log(typeof(score))
// let valueInNumber=Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// let num="30nam"
// let change=Number(num)
// console.log(typeof change)  //number
// console.log(change)     //NaN     (Not a number)

// let a=null
// console.log(typeof(a))   //object
// let b=Number(null)
// console.log(typeof b)    // number
// console.log(b)        // 0


// let c=undefined
// console.log(typeof(c))  //undefined
// let d=Number(c)
// console.log(typeof d)   //number
// console.log(d)          //NaN

// let e="Adi"
// console.log(typeof(e))  
// let f=Number(e)
// console.log(typeof f)   //number
// console.log(f)          //NaN

// let isLoggedIn="Adi"
// let g=Boolean(isLoggedIn)
// console.log(g)    //True
// console.log(typeof g)     //boolean

// let h=""
// console.log(Boolean(h))   //False
// console.log(typeof(Boolean(h)))   //Boolean

// let i=33
// console.log(String(i))

// console.log(2**2)

//Concatenation

let str1="Adi"
let str2=" you need to comeback"
console.log(str1+str2)

console.log("1" + 2)  //12
console.log(2+"1")    //21
console.log("1"+2+2)  //122
console.log(1+2+"2")  //3


console.log(true)       //true
console.log(+true)   //1
console.log(+"")     //0
//console.log(true+)    //Error

let num1,num2
num1=num2=2+2
console.table([num1,num2])

let x = 3;
const y = ++x;
console.table([x,y])
// x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
console.log([x2,y2])
// x2 is 4n; y2 is 4n

let a1 = 3;
const b1 = a1++;
console.log([a1,b1])
// x is 4; y is 3

let c1 = 3n;
const d1 = x2++;
// x2 is 4n; y2 is 3n