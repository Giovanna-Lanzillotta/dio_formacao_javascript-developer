// 3) Juntando os exercicios 1 e 2

function WriteMyName(name){
   return "Meu nome é "+name;
}


function IsAdult(age){
    if (age >= 18){
        console.log(WriteMyName('Giovanna')+' e eu sou Maior de idade' );
    }else{
       console.log(WriteMyName('Giovanna')+' e eu sou Menor de idade' );
    }
}

IsAdult(18);