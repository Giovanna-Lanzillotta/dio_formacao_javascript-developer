//  TIPOS DE DADOS
/*
Dados Primitivos

    boolean
    null
    undefind
    number
    string
    symbol

*/ 

//object


// Boolean, Null e undefined

let x = 10;
x = 'texto';


true, false  //tipo primitivo

new Boolean(true)  //objeto

console.log(10 + '10')
console.log(10 - '10')
console.log(10 - 'texto') //Vai imprimir NaN (Not a Number)

console.log(10 == '10') //Vai imprimir true
console.log(10 === '10') //Vai imprimir false

console.log(10 != '10') //Vai imprimir false
console.log(10 !== '10') //Vai imprimir true


console.log(!''); 


const nome = '';

if (nome){
    console.log('preenchido')
}


console.log(!!'')
console.log(!!'aa')


const a =  null;
console.log(a);

let b;
console.log(b); // undefined

const c = {nome: ' renan'};

console.log(c);
console.log(c.nome);
console.log(c.idade); //undefined

const d = {nome: undefined};
console.log(JSON.stringify(d));

// Number, String e Symbol

// +Infinity -Infinity E NaN
// Double Precision 64-bit binary format IEEE 754

/* escrito no terminal depois de digitar node
> typeof 10
'number'
> typeof 10.10
'number'
> typeof NaN
'number'
> typeof +Infinity
'number'
> typeof -Infinity
'number

*/

// Strings

aaa = "texto"
bbbb ='texto'
cccc =  `texto`

console.log('<div id="10">teste1</div>')

const id = 10

console.log('<div id="'+ id +'">teste2</div>')

console.log(`<div id="${id}">teste3</div>`)


//Symbol

const e = Symbol('10');
const f = Symbol('10');

console.log(e);
console.log(f);

console.log(e === f); //false


const g = Symbol('10');
const h = g;


console.log(g === h); //true