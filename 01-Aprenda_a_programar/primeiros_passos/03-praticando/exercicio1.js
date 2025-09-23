/*
1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade.
Calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5,reprovação;
- Média entre 5 e 7,recuperação;
- Média acima de 7, passou de semestre;
*/

const nota1 = 10;
const nota2 = 8;
const nota3 = 6.5;

const media = ((nota1 + nota2 + nota3) / 3).toFixed(2);

if (media > 7){
    console.log(media+" Aprovado!");
}else if((media >=5)&&(media<=7)){
    console.log(media+" Recuperação!");
}else{
    console.log(media+" Reprovado!");
}