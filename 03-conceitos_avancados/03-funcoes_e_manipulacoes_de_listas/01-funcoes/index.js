// First Class Functions, Higher Order Functions, Functions Declaration e Function Expression

//First Class Functions
//Higher Order Functions

function falarMeuNome() {
    console.log('Meu nome é Giovanna')
}

// const referenciaNova = falarMeuNome

// referenciaNova()


function FalarMeuNomeCompleto(falarMeuNome){
    falarMeuNome()
    console.log('Lanzillotta Nascimento')
}

FalarMeuNomeCompleto(falarMeuNome)



console.log('texto texto texto texto')

function NomeDaFuncao(){
    console.log('NomeDaFuncao')
}

const nomeDeoutraFuncao = function () {
    console.log('nomeDeoutraFuncao')
}

NomeDaFuncao()
nomeDeoutraFuncao()