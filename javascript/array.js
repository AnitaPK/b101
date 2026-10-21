stud1 = "Rahul"
stud2 = "Pooja"
stud3 = "Akshay"

students = []
// fruits = new Array()
fruits = ["Apple", "Banana", "Orange", "Pineapple", "Papaya", 'Kiwi']
num1 = [1,2,3,4,5,6,7,8,9,10]
len = fruits.length

for(i=0; i<len; i++){
    console.log(fruits[i].toUpperCase())
}
for(i=0; i<num1.length; i++){
    console.log(num1[i] * num1[i])
}

fruits.push('Mango')
console.log(fruits)
console.log(fruits.length)
console.log("----------------")
// fruits[7] = "Cherry"
// console.log(fruits)
// console.log(fruits.length)

fruits.unshift("Cherry")
console.log(fruits)

// pop() shift(). push(). unshift() slice() splice()

fruits.pop()
console.log(fruits)
fruits.shift()
console.log(fruits)


subFruit = fruits.slice(2,4)
console.log(subFruit)
fruits.splice(2, 0, 'Grapes', 'Guava')
console.log(fruits)
// pop shift slice splice push unshift 

// for in => index    for of => value 
for(ind in fruits){
    console.log(ind)
    console.log(fruits[ind])
}
for(let fruit of fruits){
    console.log(fruit)
}
// Finding an Element indexOf() 
// returns index number if not include return -1

console.log(fruits.indexOf("Apple"))


// Checking for Existence includes() returns boolean value
console.log(fruits.includes('apple'))
// findIndex()
f = "banaNA"
isAppleAvailable = fruits.findIndex((fruit, index)=> fruit.toLowerCase() == f.toLowerCase() )
console.log(isAppleAvailable)

// concat 
arr1 = ["Rahul", "Pooja", "Sujal"]
arr2 = ["Prath", 'Tanay','Rohan']

arr3=arr1.concat('Kareena',arr2, 'Karan')
console.log(arr3)
console.log("===========forEACH------------")
// forEach 

fruits.forEach((f,i)=> console.log(f, i))
num1.forEach((n)=> console.log(n**2))
console.log("===========map------------")

// map  
fruits.map((f)=>console.log(f.toUpperCase()))
num1.map(n => {
    console.log(n**3)
})

newCubeNum = num1.map(n=>{
    return n**3
})
console.log(newCubeNum)
nCube = num1.map(n=>n**3)
// filter 
fruitWithP = fruits.filter(fruit => fruit.startsWith('P'))
console.log(fruitWithP)

evenNumArr = num1.filter((n)=> n % 2 == 0)
console.log(evenNumArr)
oddNumArr = num1.filter(n => n % 2 != 0)
console.log(oddNumArr)

num2 = [-4, 98, -98, 42, -34, 71, -9]
console.log(num2.filter((n)=> n >=0))

// find 
KIWI = fruits.find((f)=> f == 'kiwi')
console.log(KIWI)



// some every 
someEven = num1.some((n)=>n%2 == 0)
console.log(someEven)

allEven = num1.every(n => n%2 == 0)
console.log(allEven)

// sort 
sortedArr=num2.sort((a,b)=> a = b-a)
console.log(sortedArr)
console.log("-----------------REDUCE ---------------------")
// reduce 
num1
sum = 0
for(i=0; i<num1.length;i++){
    sum = sum + num1[i]
}
console.log(sum)
sumNum1 = num1.reduce((sum, n)=> sum += n, 0)
console.log(sumNum1)
sumNum2 = num1.reduce((sum, n)=> sum += n, 100)
console.log(sumNum2)

