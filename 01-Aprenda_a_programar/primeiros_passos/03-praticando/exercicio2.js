/*
2) O IMC = Indice de Massa Corporal é um critério da Organização Mundial da Saúde para dar uma indicação
sobre a condição de peso de uma pessoa adulta.

Formula do IMC
    IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e altura de um adulto mostre sua condição de acordo com a tabela abaixo:

IMC em adultos Condição:

- Abaixo de 18.5 -- Abaixo do peso;
- Entre 18.5 e 25 -- Peso normal
- Entre 25 e 30 --- Acima do peso;
- Entre 30 e 40 --- Obeso;
- Acima de 40 --- Obesidade Grave;


Math.pow(alturaM,2)
*/



const pesoKg = 67;
const alturaM = 1.70;

const imc = (pesoKg / (alturaM * alturaM)).toFixed(2);
console.log("O seu imc é "+imc)

if (imc < 18.5){
    console.log("Abaixo do peso")
}else if((imc >= 18.5)&& (imc <= 25)){
    console.log("Peso normal")
}else if((imc > 25)&& (imc <= 40)){
    console.log("Obeso")
}else{
    console.log("Obesidade Grave")
}