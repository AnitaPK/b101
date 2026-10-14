name ='Wisdom Sprouts'
user = "Rahul Sharma"
msg = `This is string.
    This is second line.
`

console.log(typeof(name))   // string


// String Properties
console.log(name.length)

console.log(msg.length)
// Accessing Characters
console.log(name.charAt(1))

for(i = 0; i<name.length; i++){
   console.log(name.charAt(i))
}

// Concatenation
str1 = 'Learning'
str2 = 'Javascript'
str = str1 + " " + str2
console.log(str) //  Learning Javascript
str3 = str1.concat(" ",str2, " ?")
console.log(str3)

// Case Conversion
console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log("============================")
// Searching Strings 

// .indexOf(), .lastIndexOf(), .includes(), .startsWith(), .endsWith() 
index = str.indexOf("Javascript")
console.log(index)
console.log(str.indexOf("xyz"))

quote = "Learn Javascript is fun. Fun and easy to learn is Javascript"

console.log(quote.lastIndexOf('is'))
console.log(quote.indexOf('is'))
console.log("============================")

console.log(quote.includes("Learn"))

console.log(quote.startsWith('Learn'))


// Extracting Substrings 
// .slice(), .substring(), .substr()  
console.log(quote.slice(0,9))
console.log("============================")

console.log(quote.substring(0,9))


// Trimming Strings
emp = "       Rahul                              "
console.log(emp.length)
console.log(emp.trim().length)

console.log(emp.trimStart().length)
console.log(emp.trimEnd().length)

// Replacing Substrings 
console.log(quote.replace('Javascript', 'Reactjs'))

console.log(quote.replaceAll(/javascript/ig, "ReactJS"))

// Splitting Strings
console.log(name.split())
console.log(name.split(''))
console.log(name.split(' '))

// join()

// Write a program to count the number of vowels in a given string. 
function checkVowwelsCount(str){
vowels = 'aeiouAEIOU'
count = 0
for(i=0; i<=str.length;i++){
    if(vowels.includes(str.charAt(i))){
        count++
    }
}
console.log(count , "vowels in ", name)

}

// iterate string for() 
    // check every char charAt() which includes in vowels
checkVowwelsCount(name)
checkVowwelsCount(str)
checkVowwelsCount(quote)