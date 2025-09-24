
const numero = 103; 

const ehNumeroPar = (numero % 2) === 0 ; 

//Se a condição for verdadeira irá executar "É PAR"
if (ehNumeroPar){
    console.log("É PAR")
}

//Se a condição(!ehNumeroPar) onde ! apresenta uma negação for verdadeira "É IMPAR"
if(!ehNumeroPar){
    console.log("É IMPAR")
}

//Se a condição for verdadeira irá executar "É PAR" senão é "É IMPAR"
if (ehNumeroPar){
    console.log("É PAR")
}else{
     console.log("É IMPAR")
}

//PARA CONFERIR SE O NÚMERO É DIVISEL POR 5
const numero2 = 12;
const numeroDivisivelPor5 = (numero2 % 5) === 0;

if (numeroDivisivelPor5){
    console.log("É divisel por 5")
}else{
     console.log("Não é divisel por 5")
}

// Se o numero é igual a zero ele é inválido
// Se o numero é igual a 5 ele é inválido
//Se a condiçaõ do divisilPor5 for verdadeira
//Senão não é divisivel por 5
 
const numero3 = 5;
const divisivelPor5 = (numero3 % 5) === 0;

if (numero3 === 0){
    console.log("O numero é inválido")
}else if (numero3 === 5){
    console.log("O numero é inválido")
}else if (divisivelPor5){
     console.log("é divisivel por 5")
}else{
    console.log("Não é divisivel por 5")
}


//CONDIÇÃO PAR OU IMPAR

const num = 5;

if((num % 2) ===0 ){
    console.log("par")
}else{
    console.log("impar")
}