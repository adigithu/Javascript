const myObj={
    js: 'javascript',
    cpp: 'C++'
}
for (const key in myObj) {
    console.log(key)    //To get the keys
}

for (const key in myObj) {
    console.log(myObj[key])
}

for(const key in myObj){
    console.log(`${key} shortcut is for ${myObj[key]}`)
}

const Programming=["Js", "CPP", "Python"]
for (const key in Programming) {   
    console.log(key)          //It returns the indexes or keys like 0,1,2 but for of loop returns the values
}

//Map is not iterable so it cannot be used with for in loop. It will not give error but nothing will be there
