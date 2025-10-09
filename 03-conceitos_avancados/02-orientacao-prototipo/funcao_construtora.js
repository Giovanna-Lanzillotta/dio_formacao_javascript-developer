
/* sintaxe função construtora */
function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function ( ){
    console.log(`meu  nome é ${this.nome}`)
}

//invocar
const renan = new Pessoa ('renan', 30)

console.log(renan)

renan.falar()



class Pessoa2 {

    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade
    }
    falar(){
         console.log(`meu  nome é ${this.nome}`)
}
    }
