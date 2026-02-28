const nums=[1,2,3,4,5,6,7,8]
const newnum=nums.map( (num) => num+10 )
console.log(newnum) 

const nums1=[1,2,3,4,5,6,7,8]
const new1=nums1.map( (num) => { return num+10} )
console.log(new1) 
/*[
  11, 12, 13, 14,
  15, 16, 17, 18
]

Map
map() is a JavaScript array method.
It is used to create a new array by applying some operation to each element of the original array.
map() always returns a new array
It does not change the original array
It runs the function for every element
Note: Map will iterate over all the elements but filter uses conditions unlike map
*/
//  Chaining (Chaining means we can make use of more than one methods in a single statement)
const nums2=[1,2,3,4,5,6,7,8]

const new2=nums2.map( (num) => num*10 ).map( (num) => num+1).filter((num) => num>=40)
console.log(new2)    //The result of first map would be passed to the second map method as an input array for operations to be performed
//[ 41, 51, 61, 71, 81 ]