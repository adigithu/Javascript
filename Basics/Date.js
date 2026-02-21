// JS Date objects represent a single moment in time in a platform-independent format. 
let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)   //Object

let created= new Date(2023, 0, 23)  //Month starts from 0
console.log(created.toDateString())

let create= new Date(2023, 0, 23, 5, 3)
console.log(create.toLocaleString())

let a= new Date("2023-01-14")
console.log(a.toLocaleString())

let timest= Date.now()
console.log(timest)   //Time in milliseconds
console.log(a.getTime())  //Time in milliseconds

console.log(Math.floor(Date.now()/1000))  //Answer will be in seconds converted from milliseconds

let neww =new Date()
console.log(neww)
console.log(neww.getMonth()+1)
console.log(neww.getDay())   // 0-Sunday

neww.toLocaleString('default', {
    day:"numeric",
})