
function adicao(x,y){
    return x + y
}

function subtracao(x,y){
    return x - y
}

function multiplicao(x,y){
    return x * y
}


function divisao(x,y){
    return x / y
}

function calculadora(x, operacao, y) {
    console.log(operacao(x,y))
}

calculadora(10, adicao, 20)
calculadora(10, subtracao, 20)
calculadora(10, multiplicao, 20)
calculadora(10, divisao, 20)


document.getElementById('btn1').addEventListener('click', () => {
    console.log('clicou')
})