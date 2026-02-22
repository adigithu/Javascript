//Array object enables storing a collection of multiple items under a single variable name and has members for performing common array operations.
//Js arrays are resizeable and can contain a mix of different data types.
//Js arrays are not associative arrays and so cannot be accessed using arbitrary strings as indexes.
//Js arrays are zero-indexed.
//Js array-copy operations create shallow copies.

//Shallow copy: A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. It means making changes in one will lead to change in another.

//Deep copy: A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. Change in one will not lead to change in another

const a=[0,1,2]
const ar=['Adi', 'Hi']
const arr=new Array(1,2,3,5)
console.log(arr[1])

// Array Methods
arr.push(6)        //It adds 6 to the end of the array
console.log(arr)
arr.pop()
console.log(arr)   //It removes the last element in the array

arr.unshift(9)   // 9 will be added to the beginning of the array and the rest elements would be shifted by one place
arr.shift()      //The element present at the 0th index is removed

console.log(arr.includes(2))   //Will return a boolean type
console.log(arr.indexOf(2))    //Returns the index of a given element
const newArr=arr.join()        //Array is converted into string
console.log(newArr)

// Slice and splice

console.log("A ", arr)
const my=arr.slice(1,3)   // 2,3
console.log(my)
console.log("B ", arr)

const my2=arr.splice(1,3)   // 2,3
console.log(my2)

//The primary difference between slice() and splice() in JavaScript is that slice() does not modify the original array (it is non-mutating), while splice() modifies the original array in place (it is mutating)
//Slice returns a new array and splice modifies the original array in place
//Slice returns a new array containing the extracted elements while splice contains the removed elements or an empty array if none were removed
//Slice can be used on arrays and strings while splice is applicable only on arrays