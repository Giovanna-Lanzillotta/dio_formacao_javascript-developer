// Faça um programa para calcular o valor de uma viagem.Faça

// Você terá 3 variáveis. Sendo elas:
// 1 - Preço do etanol;
// 2 - Preço da gasolina;
// 3 - O tipo de combustível que está no seu captureOwnerStack;
// 4 - Gasto médio de combustível do caro por KM;
// 5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

const precoGasolina = 6.27;
const precoEtanol = 4.46;
const tipoCombustivel = 'gasolina';

const gasto_medio_km = 10;
const distancia_km = 100;

const litros_gastos = distancia_km / gasto_medio_km;

if (tipoCombustivel === 'etanol'){
    const valorGasto = litros_gastos * precoEtanol;
    console.log(valorGasto.toFixed(2));
   
}else{
    const valorGasto = litros_gastos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}

