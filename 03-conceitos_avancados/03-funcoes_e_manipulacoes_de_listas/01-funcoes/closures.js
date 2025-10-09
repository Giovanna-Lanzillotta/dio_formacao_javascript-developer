// Closures ou Fechamentos

function soma(x) { 
    return function(y){
        return x + y
    }
}

const somaParcial = soma(10)

console.log(soma(10)(20))

console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(40))

