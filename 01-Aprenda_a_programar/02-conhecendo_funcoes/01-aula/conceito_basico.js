
function teste(){
    console.log('teste');
}

teste();
teste();



function sayMyname(name){
    console.log('Your name is '+name);
}

sayMyname('Giovanna');


function quadrado(valor){
    return valor * valor;
} 

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);



function incrementarJuros(valor, percentualJuros){
    const valorAcrecimo = (percentualJuros/100) * valor;
    return valor + valorAcrecimo;
}

console.log(incrementarJuros(100,10));
console.log(incrementarJuros(100,15));
console.log(incrementarJuros(1000,20));