
function calcularImc(peso,altura){
    return (peso / Math.pow(altura, 2)).toFixed(2);
}


function ClassificarImc(imc){
    if (imc < 18.5){
    return 'Abaixo do peso';
    }else if((imc >= 18.5)&& (imc <= 25)){
        return 'Peso normal';
    }else if((imc > 25)&& (imc <= 40)){
        return 'Obeso';
    }else{
        return 'Obesidade Grave';
}
}

function main(){
    const peso = 67;
    const altura = 1.70;

    const imc = calcularImc(peso, altura);
    console.log(ClassificarImc(imc));
}

main();
