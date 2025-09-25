//Calcular a média das notas

const notas = [];

notas.push(10);
notas.push(7);
notas.push(8);
notas.push(5);
notas.push(8);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = ( soma / notas.length).toFixed(2);
console.log(media);