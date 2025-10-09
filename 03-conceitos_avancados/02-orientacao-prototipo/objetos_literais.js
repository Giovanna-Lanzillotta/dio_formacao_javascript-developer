/*forma mais simples */
const pessoa = {
    genero : 'masculino'
}


const renan = {
    nome : 'renan',
    __proto__ : pessoa
}

console.log(renan.genero)

/* */

const pessoa2 = {
    genero : 'feminino'
}

const maria = Object.create(pessoa2)

maria.nome = 'maria'

console.log(maria.genero)