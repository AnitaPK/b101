function countVowels(){
   inputParagraph = document.getElementById("inputPara").value 
   console.log(inputParagraph)
   console.log(typeof inputParagraph)

   vowels = "aeiouAEIOU"
   len = inputParagraph.length
   count = 0
   for(i=0; i< len; i++){
        if(vowels.includes(inputParagraph.charAt(i))){
            count++
        }
   }
   document.getElementById("result").textContent = `Wovels in given paragraph : 
   ${count}`
}

function chechPalindrom(){
   inputParagraph = document.getElementById("inputPara").value 
    revParagraph = ''
   len = inputParagraph.length

    for(i=len; i>=0; i--){
        revParagraph += inputParagraph.charAt(i)
    }
    console.log(revParagraph)
    if(inputParagraph === revParagraph){
        document.getElementById("result").textContent = "Its Palindrom"
    }else{
        document.getElementById("result").textContent = "Its NOT Palindrom"

    }
}