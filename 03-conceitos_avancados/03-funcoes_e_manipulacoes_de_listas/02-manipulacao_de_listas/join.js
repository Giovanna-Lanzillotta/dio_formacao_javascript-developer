// Join e Combinações de Funções de Manipulação

const lista = [1, 2, 3]

console.log(lista.join(';'))
console.log(lista.join('/'))



const lista2 = [{nome : 'Renan'}, {nome : 'Andresa'}, {nome : 'Vitor'},  {nome : 'Amanda'}]

console.log(lista2.map(e => e.nome)
    .filter((e) => e.startsWith('A'))
    .join('; '))


console.log( lista2.map((e) => e.nome).join('; ') )

const elementosEmHtml = lista2.filter((e) => e.nome.startsWith('A'))
    .map(e => `<li>${e.nome}</li>`)
    .join('')

console.log(elementosEmHtml)

