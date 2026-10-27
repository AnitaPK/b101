const student = {
    name:"Rahul",
    age:20,
    dept:"Computer",
    greet:function(){
        return "Hello, Welcome " + this.name
    }
}
console.log(typeof student)
console.log( student.name)
console.log(student['name'])

student.city = "Pune"
console.log("student Name : ", student.name, "students City : ", student.city)
student.age = student.age+1
console.log(student)
delete student.city
console.log(student)

for(k in student){
    console.log(k)
    console.log(student[k])
}
console.log(student['name'])
console.log("+----------------")
// for(v of student){
//     console.log(v)
// }

console.log(Object.keys(student))
console.log("+----------------")

console.log(Object.values(student))

console.log(Object.entries(student))

console.log(student.greet()) 
console.log("-------JSON---------")

// JSON 

// JavaScript Object Notation 

// {
//     "name":"Rahul",
//     "age":3
// }

strStudent = JSON.stringify(student)
console.log(strStudent)
console.log(typeof strStudent)
objStudent = JSON.parse(strStudent)
console.log(objStudent)
console.log(typeof objStudent)

fruit = ["APPLE","BANANA"]
console.log(fruit)
console.log(JSON.stringify(fruit))

student.address = {
    houseNum:420,
    city:"Pune",
    State:"MH",
    Pincode:'411112'
}
console.log(student.address.Pincode)

student.subjects = ["English", "Marathi","Hindi"]
student.subjects.map((s)=>console.log(s,"This is my subject"))