// Arithmetic Operators
// + - *  / % ** 
// a = 20 
// b=10
// c =  a + b
// s = a-b 
// m = a*b 
// d = a/b  20/10 
// r = a%b 20/10 


// Comparison Operators

// ==     !=   >    >=   <   <=   === !== 

// x = 5 
// y = 5
// z = 10 
// n = '5'

// x == y true 
// x != y false 
// x >  y false
// x >= y true 
// x <  y false 
// x <= y true 
// x == n true  only value 
// x === n false value with datatype

// Logical Operators

// &&    ||    ! 

// age > 18 && nationality == "INDIAN" 

// 0        0          0 
// 0        1          0
// 1        0          0
// 1        1          1

// isPass ||  isBacklog 

// 0    0      0 
// 0    1      1
// 1.   0.     1
// 1.   1.     1

// !pass 
// study 

// Assignment Operators

//  name = "Rahul"
//  age = 20 
//  age = age +1     age++
//  age = age -1    age--

//  marks = marks + 10  marks += 10
//  marks = marks - 20. marls -= 20 

//  Control structure 
//  Consdition 
//  if    if else    elseif 
//  switch case 

//     if(consdition){
//         true stmt 
//     }else{
//         false stmt
//     }


//     if(condition){

//     }else if(condition){

//     }else if(condition){

//     }else{

//     }


marks = -100 
// 0-34 Fail 
// 35 - 60 Pass C
// 61 - 74 Pass B 
// 75 - 100 Pass A
if(marks >=0 && marks <=100){
    if(marks>=0 && marks <35){
        console.log("FAIL")
    }else if(marks >= 35 && marks <60){
        console.log("PASS WITH GRADE C")
    }else if(marks >=60 && marks < 75){
        console.log("PASS WITH GRADE B")
    }else{
        console.log("PASS WITH GRADE A")
    }
}else{
    console.log("Enter correct marks")
}


today = new Date()
console.log(today)
let day = today.getDay()
console.log(day)
switch(day){
    case 0:
        console.log("Sunday")
        break
    case 1:
        console.log("Monday")
        break

    case 2:
        console.log("Tuesday")
        break

    case 3:
        console.log("Wednesday")
        break
    default :
    console.log("Day is not correct")
    
}


//  loops 
//  for while do while

// 2 * 1   =. 2 
// 2 * 2   =  4
// 2 * 3   =  6
// 2 * 4   =  8
// 2 * 5   =  10
// 2 * 6   = 12
// 2 * 7   = 14
// 2 * 8   = 16
// 2 * 9   = 18
// 2 * 10   = 20 
// for(initial value , condition , incr/decre){

// } 

for(i=1;i<=10;i++){
        console.log("13 *", i , " = ", 13 * i)
}

// ite.     i.    result 
// 1        1.    1*13 
// 2        2     2*13 
// 3.       3.    3*13


// 543.  789
// initialization
// while(condition){

//     inc/decre
// }

x = 543
while(x<=789){
    result = "pass"
    x++
}

 i = 11
 while(i<=10){
        console.log("13 *", i , " = ", 13 * i)
        i++
 }
 i = 11
 do{
    console.log("13 *", i , " = ", 13 * i)
    i++
 }while(i<=10)

// factorial 
let n= 5
let fac = 1
for(i=n ; i>=1 ;i--){
    fac = fac*i
}
console.log(fac) 
// Write a program that uses a for loop to print all even numbers from 1 to 20.

for(i=1; i<=20;i++){
    if(i%2 == 0){
        console.log(i)
    }
}
// Write a program that calculates the sum of the digits of a number using a do...while loop. 

num = 12345
sum = 0
do{
    rem = num % 10
    console.log(rem)
    sum = sum + rem      //sum +=rem
    num = Math.floor(num / 10)

}while(num>0)

// ite.    num.   rem.   sum 
// 1       12345   5.     5+0 
// 2       1234.   4.     4+5 
// 3        123    3      3+9
// 4        12     2      2+12
// 5         1     1      1+14  15
//           0