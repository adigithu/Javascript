const name="Aditya"
const repoCount=50
console.log(name + repoCount +" Value")
console.log(`My name is ${name} and my repo count is ${repoCount}`)
//Backtick is used so as to perform string interpolation that is it allows variables and expressions to be embedded directly into the string.

//We can add the methods to variables in string interpolation
const a=new String("Aditya")       //Way of declaring a string
console.log(a)

console.log(a[0])      //A
console.log(a.length)  //3
console.log(a.toUpperCase())   //Original value will not be changed
console.log(a.charAt(2))       //It tells that at a given index or position which character is present over there
console.log(a.indexOf('d'))    //Gives the index of a given character in a string

const ne=a.substring(0,2)
console.log(ne)         //Ad

const ano= a.slice(-6,4)
console.log(ano)    //Adit

//Note: Substring cannot take negative values just like slice method

const b="  Aditya "
console.log(b.trim())  //Trim removes the trailing and leading whitespaces

console.log(b.trimEnd())
console.log(b.trimStart())

const url="https://google.com/aditya%20parida"
console.log(url.replace('%20', '-'))

console.log(url.includes('Adi'))   //It will return false as it is also case sensitive

const c="Hi i am aditya"
console.log(c.split(" "))      //String c would be converted into an array of substrings. Split has 2 parts: Separator and limit
