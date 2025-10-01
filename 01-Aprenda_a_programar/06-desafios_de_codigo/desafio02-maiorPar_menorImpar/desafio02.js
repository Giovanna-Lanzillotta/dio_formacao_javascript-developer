// 2)Faça um programa que receba N (Quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número ímpar.

// Exemplo:
//     Entrada: 5 3 4 1 10 8

//     Saída: Maior número par: 10
//             Menor número ímpar: 1


const { gets, print } = require('./funcoes-auxiliares-ex2');

const quantidadeNumeros = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 0;

for (let i = 0; i < quantidadeNumeros; i++) {
    const numero = gets();
    if (numero % 2 === 0) {
        if (numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }
    } else {
        if (menorNumeroImpar === 0) {
            menorNumeroImpar = numero;
        }
        else if (numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        }
    }
}

print(maiorNumeroPar);
print(menorNumeroImpar);