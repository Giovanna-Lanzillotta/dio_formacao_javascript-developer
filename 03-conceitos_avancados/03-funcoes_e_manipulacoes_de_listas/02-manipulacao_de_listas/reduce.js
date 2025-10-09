// reduce

// const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const lista = []


const somaDeTodosOsNumeros = lista.reduce((previous, curremt) => {
    console.log(previous, curremt)
    return previous + curremt
},0)

console.log(somaDeTodosOsNumeros)