/* 
string 1.
number 2. 
boolean 3.
undefined  4. 
null 5.
object => array object function   6.
aftert 2015 
Es15 
bigInt 7.
Symbol 8.

*/
num1 = 2345678123456789234567890543345345n
console.log(typeof(num1))
vaishanvi = Symbol('vaishanvi')
vaishanvi2 = Symbol('vaishanvi')

console.log(typeof vaishanvi)

studName = "Rohan";console.log("type of studName",typeof studName)
age = 20 ; console.log(typeof age , "Type of of age")


//           block scope     function scope   redefine reassign
// var         X               Y               Y         Y
// let            Y               X            X         Y 
// const          Y               X            X         X

var n1 = 5
var n1 = '100'
let n2 = 10
n2 = "10000"
const n3 = 20
// n3 = "888888"
const numArr = [1,2, 3,4] 
numArr.push(5)
