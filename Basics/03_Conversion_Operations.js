let score="30"
console.log(typeof score)
console.log(typeof(score))
let valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let num="30nam"
let change=Number(num)
console.log(typeof change)  //number
console.log(change)     //NaN     (Not a number)

let a=null
console.log(typeof(a))   //object
let b=Number(null)
console.log(typeof b)    // number
console.log(b)        // 0


let c=undefined
console.log(typeof(c))  //undefined
let d=Number(c)
console.log(typeof d)   //number
console.log(d)          //NaN

let e="Adi"
console.log(typeof(e))  
let f=Number(e)
console.log(typeof f)   //number
console.log(f)          //NaN

let isLoggedIn="Adi"
let g=Boolean(isLoggedIn)
console.log(g)    //True
console.log(typeof g)     //boolean

let h=""
console.log(Boolean(h))   //False
console.log(typeof(Boolean(h)))   //Boolean

let i=33
console.log(String(i))