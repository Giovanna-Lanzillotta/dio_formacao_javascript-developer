//filter

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const listaDeNumerosPares = lista.filter((element) => {
    return ( element % 2 === 0)  //criando uma nova lista
})

console.log(lista)
console.log(listaDeNumerosPares)