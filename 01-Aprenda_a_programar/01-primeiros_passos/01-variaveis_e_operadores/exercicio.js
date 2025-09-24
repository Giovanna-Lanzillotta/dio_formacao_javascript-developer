// Faça um programa para calcularo valor de uma viagem.Faça

// Você terá 3 variáveis.Sendo elas:
// 1 - Preço do combustível;
// 2 - Gasto médio do combustível do carro por KM;
// 3- Distância em KM da viagem;

// Imprima no console o valor que será gasto de combustível para realizar esta viagem.

const preco_do_combustivel = 5.79;
const gasto_medio_km = 12;
const distancia_km = 1580;

const litros_gastos = distancia_km / gasto_medio_km;
const valorGasto = litros_gastos * preco_do_combustivel;

console.log(valorGasto.toFixed(2))