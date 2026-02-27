//Immediately Invoked Function Expressions(IIFE)

(function hello(){
    console.log("DB Connected")
})();         // First () parentheses for function definition and the second () for execution call or invoking the function expression
// ;(semicolon) must be used because the code run needs to be stopped or it is the end of this part of program

//Declare of arrow functions in IIFE

( () => {
    console.log("DB")
})();

( (name) => {
    console.log(`DB connected by ${name}`)
})('Adi')

/* Primary use of IIFE (a JavaScript function that runs as soon as it is defined, without needing to be explicitly called later)
1. To create a private scope for variables
2. Avoiding Global Scope Pollution: Variables and functions declared inside an IIFE are local to that function's scope and do not leak into the global namespace, preventing naming conflicts with other scripts or libraries.