// 02) Faça uma função que veja se você é maior de idade.

function IsAdult(age){
    if (age >= 18){
        return 'maior de idade';
    }else{
        return 'menor de idade';
    }
}


function main(){
    const age = 38;
    console.log(IsAdult(age));
}

main();
