// Array do exercicio 1
const entradas = [5, 50, 20, 98, 23];

// Contador de chamadas
let i = 0;

function gets(){
    const valor =  entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}


module.exports = {gets, print};