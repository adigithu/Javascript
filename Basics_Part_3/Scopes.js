
// //{}:Scope
// if (true){
//     let a =10
//     const b=20
//     var c=30
// }
// console.log(c)

//Scope in node environment and in console is different

//Nested Scope
function one(){
    const username="Adi"
    function two(){
        const website="Youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
one()         //Inner functions can access the variables of outer functions but vice-versa is not possible

if (true){
    const username="Adi"
    if (username==="Adi"){
        const website=" Parida"
        console.log(username+website)
    }
}

console.log(add(5))
function add(num){
    return num+1
}
add(5)

// console.log(addTwo(5))         //It will give error
// const addTwo=function(num){
//     return num+2
// }
// addTwo(5)