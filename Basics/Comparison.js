console.log(2 > 1)

console.log("2" > 1)  //True as "2" is converted into number
console.log("02" > 1) //True

//If two variables are compared it would be better if they have same data types

console.log(null > 0)    //False
console.log(null == 0)   //False
console.log(null >=  0)  //True

//The reason is that an equality check == and comparisons >,<,>=,etc. work differently
//Comparison convert null to a number treating it as 0

console.log(undefined == 0)  //false
console.log(undefined > 0)   //false
console.log(undefined < 0)   //false

// === (This operator checks both values and their data types as well as)

console.log("2"==2)   //True 
console.log("2"===2)  //False