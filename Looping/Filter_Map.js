// const coding=['Js', 'Ruby', 'Python']
// const values=coding.forEach((item) => {
//     console.log(item)
//     return item
// })
// console.log(values)        //For each loop does not return values

// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const a= myNums.filter( (num) => num>4 )
// console.log(a)            //[ 5, 6, 7, 8, 9, 10 ]

// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const a= myNums.filter( (num) => {          //Whenever we are declaring scope {}, we need to explicity use return otherwise empty object would be returned
//     return num>4
// }  )
// console.log(a)  //[ 5, 6, 7, 8, 9, 10 ]
          
const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=[]
myNums.forEach( (num) => {
    if (num>4){
        newNums.push(num)
    }
})
console.log(newNums)        //[ 5, 6, 7, 8, 9, 10 ]

const books=[
    {title:'Book One', genre:'Fiction', publish:1981,
    edition: 2004},
    {title:'Book Two', genre:'Non-Fiction', publish:1992,
    edition: 2008},
    {title:'Book Three', genre:'History', publish:1999,
    edition: 2007},
    {title:'Book Four', genre:'Fiction', publish:1989,
    edition: 2010},
]
const user=books.filter( (bk) => bk.genre==='History' )
console.log(user)