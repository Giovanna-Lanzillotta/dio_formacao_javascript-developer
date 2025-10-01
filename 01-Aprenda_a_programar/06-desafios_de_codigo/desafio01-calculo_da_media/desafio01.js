// 1)Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperção"
// Caso a média seja >= 7 imprima "Aprovado" 

// Exemplo:
//     Entrada:5.5
//     Saida:Recuperação

const {gets, print } = require('./funcoes-auxiliares-ex1');

const media = gets();

if (media < 5){
    resultado = 'reprovado';
}else if((media >=5 )&&(media < 7)){
    resultado = 'Recuperação';
}else if((media >= 7)&&(media <= 10)){
    resultado = 'Aprovado';
}else{
    resultado = 'Isto não é uma nota valida'
}

print(resultado);