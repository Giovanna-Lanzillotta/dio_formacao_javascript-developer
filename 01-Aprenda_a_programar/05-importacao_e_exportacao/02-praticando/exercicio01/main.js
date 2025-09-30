// const { gets, print } = require("./funcoes-auxiliares");

// const numerosSorteados = [];

// for (let i = 0; i < 5; i++) {
//    const numeroSorteado =  gets();
//    numerosSorteados.push(numeroSorteado);
// }

// print(numerosSorteados);

// let maiorValor = 0;

// for (let i = 0; i < numerosSorteados.length; i++) {
//     const numeroSorteado = numerosSorteados[i];
//     if (numeroSorteado > maiorValor){
//         maiorValor = numeroSorteado;
//     }
// }

// print(maiorValor);


// Outro modo de fazer
const { gets, print } = require("./funcoes-auxiliares");

const quantidadedeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadedeAlunos; i++) {
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);