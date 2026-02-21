// const score=400
// const balance = new Number(100)    //We are declaring a new obejct of number type
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))  //We will have only 2 decimal places after point or 2 precision values

// const num=123.8966
// console.log(num.toPrecision(3))  //It will consider msb  3 digits for and then the rest will be round-off
// const hun=1000000
// console.log(hun.toLocaleString())   //10,00,000
// console.log(hun.toLocaleString('en-IN'))  //The answer will be in indian standard format


//--------------Maths---------------

console.log(Math)
console.log(Math.abs(-4))  // Positive to negative and positive to positive
console.log(Math.round(4.6)) //5
console.log(Math.ceil(4.1))  //5
console.log(Math.floor(4.1))  //4
console.log(Math.min(4,3,5,1)) //1

console.log(Math.random())    //number between 0 and 1
console.log(Math.floor(Math.random()*10)+1)  //Minimum value would be 1
const a=10
const b=20
console.log(Math.floor(Math.random()*(b-a+1))+a)

//b-a+1: Calculates the total numbers in the desried range(inclusive) that is here 11 positive integers from 10 to 20
