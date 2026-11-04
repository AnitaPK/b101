const PizzaWithKareena = new Promise((resolve,reject)=>{
    kareena = false;

    if(kareena){
        resolve("PIZZA IS Tasty.....")
    }else{
        reject("PIZZA SHOP CLOSED.....")
    }
})

PizzaWithKareena.then(data=>{
    console.log("Kareena is so good to me", data)
}).catch((err)=>{
    console.log("Kareena is tooo rude to me",err)
}).finally(()=>{
    console.log("Kareena is so beautifull")
})

function fetchData(){
fetch("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts")
.then(res => res.json())
.then(data=>console.log(data))
.catch(err=>console.log(err)) 
}
fetchData()