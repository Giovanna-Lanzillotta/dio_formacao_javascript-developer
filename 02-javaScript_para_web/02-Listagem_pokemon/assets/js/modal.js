
const modal = document.getElementById('pokemon-modal');
const closeModalButton = document.querySelector('.close-button');
const pokemonListContainer = document.getElementById('pokemonList');



function fecharModal() {
    if (modal) {
        modal.style.display = 'none';
    }
}

function abrirModal(pokemon) {
    if (!modal) return;
    
    document.getElementById('modal-pokemon-name').textContent = pokemon.name
    document.getElementById('modal-pokemon-id').textContent = `#${pokemon.number.toString().padStart(3, '0')}`;
    document.getElementById('modal-pokemon-image').src = pokemon.photo; 

    const detailsDiv = document.getElementById('modal-pokemon-details');
    if (detailsDiv) {
        detailsDiv.innerHTML = `
            <h3>Tipos:</h3>
            <ul class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ul>
        `;
    }

    modal.style.display = 'block';
}


if (closeModalButton) {
    closeModalButton.addEventListener('click', fecharModal);
}

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        fecharModal();
    }
});


if (pokemonListContainer) {
    pokemonListContainer.addEventListener('click', (event) => {
        
        let pokemonElement = event.target.closest('.pokemon'); 

        if (pokemonElement) {
            
            const pokemonNumberElement = pokemonElement.querySelector('.number');
            if (!pokemonNumberElement) return;

            const rawNumber = pokemonNumberElement.textContent.trim().replace('#', '');
            const pokemonId = parseInt(rawNumber);

            if (pokemonId && typeof pokeApi !== 'undefined' && typeof convertPokeApiDetailPokemon !== 'undefined') {
                
                fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
                    .then(response => response.json())
                    .then(pokeDetail => {
                        const pokemonData = convertPokeApiDetailPokemon(pokeDetail);
                        
                        abrirModal(pokemonData); 
                    })
                    .catch(error => console.error("Erro ao buscar detalhes do Pokémon:", error));
            }
        }
    });
}