
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
one()