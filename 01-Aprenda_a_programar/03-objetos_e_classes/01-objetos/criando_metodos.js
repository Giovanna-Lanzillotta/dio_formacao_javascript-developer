
const pessoa = {
    nome: "Giovanna Lanzillotta",
    idade: 24,
    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

pessoa.nome = 'Renan';
pessoa.idade = 30;

pessoa.descrever();

pessoa.descrever = function(){
    console.log(`Meu nome é ${this.nome}`);
}

pessoa.descrever();