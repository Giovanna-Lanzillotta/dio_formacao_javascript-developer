// Map

class Pessoa{
    constructor(name){
        this.name = name
    }
}

const lista = [new Pessoa('Renan'), new Pessoa('Andresa'), new Pessoa('Vitor'), new Pessoa('José')]

console.log(lista)

const listaNomes = []

for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    listaNomes.push(element.name)
}

console.log(listaNomes)

// Usando map

const listNames = lista.map((element, i) =>{
    return `${i} - ${element.name}`
})

const listNamesHtml = lista.map((element, i) =>{
    return ` 
    <li> ${i} - ${element.name}</li>`
})

console.log(listNames)
console.log(listNamesHtml)
// map é a conversão de um objeto em outro