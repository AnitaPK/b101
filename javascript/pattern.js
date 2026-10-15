function printSquare(n){
    for(i=1;i<=n;i++){
        let line = ''
        for(j=1 ; j<=n; j++){
            line = line + " *"
        }
        console.log(line)
    }
}
printSquare(5)

function rightTrianle(n){
    for(i=1;i<=n;i++){
        let line = ''
        for(j=1 ; j<=i; j++){
            line = line + " *"
        }
        console.log(line)
    }
}
rightTrianle(5)

function invertedTriangle(n){
    for(i=1;i<=n;i++){
        let line = ''
        for(j=n; j>=i; j--){
            line = line + " *"
        }
        console.log(line)
    }
}
invertedTriangle(5)