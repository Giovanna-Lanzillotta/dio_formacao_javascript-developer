// objetos -> coleção dinâmica de chave e valor

const pessoa = {
    nome : "Renan",
    idade : 30,
    falar : function() {
    console.log(`Meu nome é ${this.nome}` )
}
}

pessoa['nome'] = 'Jose'

pessoa.sobrenome = 'Johannsen de Paula'

console.log(typeof pessoa) //object
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa['nome'])


// pessoa.falar = function(){
//     console.log('teste')
// }

const y = pessoa.falar

pessoa.falar()