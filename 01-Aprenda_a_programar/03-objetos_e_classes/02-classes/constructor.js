class Pessoa{
    nome;
    idade;
    anoNascimento;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2025 - idade;
    }

       descrever() {
     console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
   }
}


const giovanna = new Pessoa('Giovanna',24);

const vitor = new Pessoa('Vitor',25);

const renan = new Pessoa('Renan',30);


giovanna.descrever();
vitor.descrever();
renan.descrever();

console.log(giovanna);
console.log(vitor);
console.log(renan);