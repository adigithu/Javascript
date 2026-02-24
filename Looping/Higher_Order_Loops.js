//for of

const arr=[1,2,3,4,5]
for (const i of arr) {   //Object: The thing on which we have to apply loop
    console.log(i)
}

const greet="Hello Adi"
for (const i of greet) {
    console.log(`Each char is ${i}`)
}

//Map (It is an object which holds key-value pairs and remembers the original insertion order of the keys.)
// Any value (both objects and primitive values) may be used as either a key or a value
// A key in the Map occur only once

const map=new Map()    //Map is also an object in JS
map.set('IN', "INDIA")
map.set('FR', 'France')
console.log(map)        //Map(2) { 'IN' => 'INDIA', 'FR' => 'France' }

//In map the order of insertion of key-value pairs is maintained

for (const key of map) {           //[ 'IN', 'INDIA' ]
                                   //[ 'FR', 'France' ]
    console.log(key)
}

for (const [key,value] of map) {
    console.log(key,':',value)
}                                     //IN : INDIA
                                      //FR : France
                                
let obj={
    'game1':'Spiderman',
    'game2':'Batman' 
}
for (const [key,value] of obj){
    console.log(key, ':-', value)
}                          //It will throw an error as using for of loop, we cannot iterate through an object
