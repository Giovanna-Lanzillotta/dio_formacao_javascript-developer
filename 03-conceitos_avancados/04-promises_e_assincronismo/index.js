//Funcionamento das Promises

const promessaDeUmnNumeroQualquer = new Promise((resolve, reject) => {
    setTimeout(() =>{
    const numero = parseInt(Math.random() * 100)
    resolve(numero) // se der certo
    }, 1000) // demora 1 segundo
    
    // reject() // se der errado
})

console.log('Vao filhão') // mostra primeiro
    
    promessaDeUmnNumeroQualquer
        .then((value) => {
            console.log(value)
            return value + 10
        })
         .then((value) => {
            console.log(value)
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            console.log('finalizou!')
        })
