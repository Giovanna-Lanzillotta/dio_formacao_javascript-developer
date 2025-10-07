const pokemonList =  document.getElementById(`pokemonList`)
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 10;
let offset = 0;

const maxRecords = 151

// 1, 2, 3, 4, 5     0 - 5
// 6, 7, 8, 9, 10    5 - 5
// 11,               10 -5 (remove o botão)


    function convertPokemonToLi(pokemon) {
    return `
                <li class="pokemon ${pokemon.type} ">
                <span class="number">#${pokemon.number}</span>
                <span class="name"> ${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>
    `
}


function loadPokemonItens(offset , limit ){
    pokeApi.getPokemons(offset , limit).then((pokemons = []) => {
   const newHtml = pokemons.map(convertPokemonToLi).join('')
   pokemonList.innerHTML += newHtml
 
     })

}

loadPokemonItens(offset,limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordWithNexPage = offset + limit
    
    if(qtdRecordWithNexPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset,newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else{
        loadPokemonItens(offset,limit)
    }

   
})













     

    // const listItems = []

    //     for (let i = 0; i < pokemons.length; i++) {
    //         const pokemon = pokemons[i];
    //         listItems.push(convertPokemonToLi(pokemon))            
    //     }

    //     console.log(listItems)

  

    //manipular fracasso
    // .catch( (error) =>  console.error(error))

    // //Quando finaliza o processo seja erro ou sucessos
    // .finally(function () {
    //     console.log('Requisição concluida')
    // })