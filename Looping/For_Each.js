const code=['js', 'python', 'C++']
code.forEach( function (item) {        //Item would take each value from the array
    console.log(item)
} )    

//Callback function does not have it's name

code.forEach( (item) => {      //Use of 
    console.log(item)
})

function printME(item){
    console.log(item)
}
code.forEach(printME)  //Here we need to only pass the reference and not function itself

code.forEach((item, index, arr) => {
    console.log(item,index,arr)
})

/* js 0 [ 'js', 'python', 'C++' ]
python 1 [ 'js', 'python', 'C++' ]
C++ 2 [ 'js', 'python', 'C++' ]
*/
const my=[
    {
        language: "JavaScript",
        lan_filename: "JS"
    },
    {
        language: "Python",
        lan_filename: "Py"
    }
]
my.forEach((item) => {
    console.log(item.language)
})