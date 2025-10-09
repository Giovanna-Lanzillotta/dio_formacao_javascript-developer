// Declaração Explícita e Arrow Function

function funcao1(){
    console.log(this)
}


// Arrow Function
const funcao2 = () => {
    console.log(this)
}

const renan = {
    nome : 'renan',
    funcao1,
    funcao2
}

renan.funcao1()
renan.funcao2()