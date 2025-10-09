// Invocação Direta, Call, Apply e Operador Now


//invocação direta

function teste() {
    console.log('📋teste')
}

teste()


// metodo Apply (contexto,argumentos) e metodo Call

const pessoa = {
    nome: 'renan',
    idade: 30
}

function gritar(prefixo){
    console.log(prefixo, this.nome)
}

gritar.apply(pessoa, ['olaaaaa']) //recebe array
gritar.call(pessoa,'olaaaa')


// Operador New - passando o contexto para funcao e retornando este contexto

