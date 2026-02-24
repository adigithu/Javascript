// For loop

for (let i = 0; i <=10; i++) {        // Curly braces indicate block scope
    const element =i;
    console.log(element);
}

let arr=["Adi", "Falesh", "MD"]
console.log(arr.length)
for (let index=0; index<arr.length; index++){
    const element=arr[index];
    console.log(element);
}

// break and continue

for (let i=1;i<=20;i++){
    if (i==5){
        break
    }
    console.log(`Value of i is ${i}`)
}
for (let i=1;i<=20;i++){
    if (i==5){
        continue
    }
    console.log(`Value of i is ${i}`)
}
