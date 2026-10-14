// Simple function

function greet(){
    console.log("Hello student.Welcome to js world")
}

greet()

// 2. function with parametrers
function greetStudent(studentName){
    console.log("Hello", studentName.toUpperCase(), ". Welcome to js World")
}

greetStudent('Rahul') //argument
// 3. function with parameter how returns addition 

function addition(n1,n2){
    sum = n1+n2
    console.log(sum)
    return sum
}
sumAdd = addition(5,7)
console.log(sumAdd, "SUM add after function")


function division(n1,n2){
    if(n2 == 0 ){
        return "Can not divided by ZERO"
    }else{
        return n1/n2
    }
}
console.log(division(5,0))
console.log(division(5,6).toFixed(3))

// 4. simple  arrow function 
const greetWithArraow = () => console.log("Hello")

//5. Arrow function with parameter 
const additionArrow = (n1,n2) => n1+n2 

sum1 = additionArrow(3,4)
console.log(sum1)

const divisionArrow = (n1,n2)=> {
    if(n2 == 0){
        return "ZERO"
    }else{
        return n1/n2
    }
}
console.log(divisionArrow(7,8))

//6.  Anounyumous function 
// function(){}
// ()=>{}

//7. Self invoked Anounyumous  function
(()=>{
    console.log("HELLLLLOOOOOOOO")
})()

// 8. callback funtion 
// if parameter as a function => callback function 

