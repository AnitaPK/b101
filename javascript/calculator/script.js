const numObject = {
    addition:function(n1,n2){
        return n1+n2
    },
    multipliaction: function (n1,n2){
        return n1*n2
    }
}


document.getElementById("add").addEventListener("click", ()=>{
    N1 = Number(document.getElementById("firstInput").value)
    N2 =Number(document.getElementById("secondInput").value)
    document.getElementById("result").textContent =  numObject.addition(N1,N2)
})