const Marvel_Heros=["Thor", "Iron", "Spiderman"]
const dc=["Superman", "Flash", "Batman"]
Marvel_Heros.push(dc)      // It pushes the existing array into the given array where push method is used
console.log(Marvel_Heros)  //[ 'Thor', 'Iron', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]

console.log(Marvel_Heros[3][1])   //Flash

const arr=Marvel_Heros.concat(dc)     //It provides a new array and the elements of one array are merged into a given array
console.log(arr)                      //[ 'Thor', 'Iron', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const all=[...Marvel_Heros, ...dc]      //The elements would be spread out that is all the elements would become individual elements
console.log(all)                        //[ 'Thor', 'Iron', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const a=[1,2,3,[4,5,6,7],7,[6,7,[4,5]]]
const real=a.flat(Infinity)       //Flat basically means all the elements are spread out and they will appear as individual elements in a list and there will no existence of sub array inside a given array
console.log(real)                  /*[
  1, 2, 3, 4, 5,
  6, 7, 7, 6, 7,
  4, 5
]
*/

console.log(Array.isArray("Adi"))    //false
console.log(Array.from("Adi"))       //[ 'A', 'd', 'i' ]
console.log(Array.from({name: "Adi"})) //[]    (It returns a empty array because it cannot directly convert the object into array as we have to mention or specify whether we want to convert the keys or values into an array)

let score1=100
let score2=200
console.log(Array.of(score1, score2))   //Returns a new array from a set of new elements