 
class Pessoa{
   nome;
   idade;

   descrever() {
     console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
   }
}


const giovanna = new Pessoa();
giovanna.nome = 'Giovanna Lanzillotta';
giovanna.idade = 24;

const vitor = new Pessoa();
vitor.nome = 'Vitor J Guerra';
vitor.idade = 25;

const renan = new Pessoa();
renan.nome = 'Renan J Paula';
renan.idade = 30;

console.log(giovanna);
console.log(vitor);
console.log(renan);

giovanna.descrever();
vitor.descrever();
renan.descrever();