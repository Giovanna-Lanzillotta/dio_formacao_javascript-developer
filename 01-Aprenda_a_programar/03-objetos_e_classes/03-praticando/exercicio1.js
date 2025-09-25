/*
01 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por kilometro rodado.
Crie um método que dado  a quantidade de quilometros e o preço do combustivel nos dê o valor 
gasto em reais para realizar este percurso.
+
*/

class Carros{
    marca;
    cor;
    gastoMedio;

    constructor(marca,cor,gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularViagem(distancia,precoCombustivel){
        return (distancia * this.gastoMedio * precoCombustivel).toFixed(2);
    }

}


const carro1 = new Carros('Fiat','vermelho',(1/12).toFixed(3));
const carro2 = new Carros('Renault','cinza',(1/10).toFixed(3));

console.log(carro1);
console.log(carro2);


console.log(carro1.calcularViagem(70,5))
console.log(carro2.calcularViagem(70,5))