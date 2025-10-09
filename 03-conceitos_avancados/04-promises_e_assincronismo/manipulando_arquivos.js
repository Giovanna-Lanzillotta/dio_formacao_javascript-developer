// Manipulando Arquivos Através de Promisses

const fs = require('fs')
const path =  require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

const promesaDaLeituraAquivo = fs.promises.readFile('tarefas.csv')
const promesaDaLeituraAquivo2 = fs.promises.readFile(filePath)


promesaDaLeituraAquivo.then((arquivo) => {
    console.log(arquivo.toString('utf8'))
}).catch((error) => {
    console.log('Deu ruim!!',error)
})

promesaDaLeituraAquivo2
    .then((arquivo) => arquivo.toString('utf8'))
    .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
    .then((linhaSemCabecalho) => linhaSemCabecalho.map((linha) => {
        const [nome, feito] = linha.split(';')
        return{
            nome,
            feito: feito.trim() === 'true'
        }
    }))
    .then((listaDetarefas) => console.log(listaDetarefas))
    .catch((error) => console.log('Deu ruim!!2',error))