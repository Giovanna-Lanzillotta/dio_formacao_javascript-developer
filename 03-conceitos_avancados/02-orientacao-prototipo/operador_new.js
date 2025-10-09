

function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function () {
    console.log(`meu nome é: ${this.nome}`)
}

const renan = {
    genero : 'masculino'
}


// console.log(new Pessoa('renan', 30)) - Pessoa { nome: 'renan', idade: 30 }
// const renan = new Pessoa('renan', 30)
Pessoa.call(renan, 'nome', 30)

// renan.falar()

console.log(renan)