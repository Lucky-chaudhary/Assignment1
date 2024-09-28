/* 
Instructions: https://docs.google.com/document/d/1dHhAkNNWgh1jc_WTJVFFmeGmF5LjmH84a4b0Icvhydk/edit?usp=sharing
Completed Assignment: https://66b119f11a567e4afde383ec--rad-fudge-3c859b.netlify.app/
*/
document.addEventListener("DOMContentLoaded", () => {
    const pokemonList = document.getElementById("pokemon-list");
    const pokemonModal = document.getElementById("pokemon-modal");
    const pokemonName = document.getElementById("pokemon-name");
    const pokemonImage = document.getElementById("pokemon-image");
    const pokemonId = document.getElementById("pokemon-id");
    const pokemonTypes = document.getElementById("pokemon-types");
    const pokemonAbilities = document.getElementById("pokemon-abilities");
    const loadingImage = "./images/loading.webp";
  
    let currentOffset = 0;
    const limit = 9;
    const totalPokemon = 151;
    let loadedPokemon = new Set(); // To Track loaded Pokémon IDs
    let pokemonData = []; // To store all fetched Pokémon data
  
    // Fetching Pokémon data
    async function fetchPokemon(offset, limit) {
      const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
      const response = await fetch(url);
      const data = await response.json();
      return data.results;
    }
  
    // Fetching Pokémon details
    async function fetchPokemonDetails(url) {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }
  
    // Creating Pokémon card
    async function createPokemonCard(pokemon) {
      const details = await fetchPokemonDetails(pokemon.url);
      if (loadedPokemon.has(details.id)) return; // It Skips if already loaded
  
      const card = document.createElement("div");
      card.classList.add("pokemon-card");
  
      const img = document.createElement("img");
      img.src = loadingImage; // TO Show loading image initially
      img.alt = pokemon.name;
  
      const name = document.createElement("h3");
      name.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  
      card.appendChild(img);
      card.appendChild(name);
  
      img.src = details.sprites.other["official-artwork"].front_default;
      loadedPokemon.add(details.id); // To Add ID to loaded set
  
      card.addEventListener("click", () => showModal(details));
  
      pokemonList.appendChild(card);
    }
  
    // TO Show modal with Pokémon details
    function showModal(details) {
      pokemonName.textContent = details.name.charAt(0).toUpperCase() + details.name.slice(1);
      pokemonImage.src = details.sprites.other["official-artwork"].front_default;
      pokemonId.textContent = `ID: ${details.id}`;
      pokemonTypes.textContent = `Types: ${details.types.map(type => type.type.name).join(", ")}`;
      pokemonAbilities.textContent = `Abilities: ${details.abilities.map(ability => ability.ability.name).join(", ")}`;
  
      pokemonModal.classList.remove("hidden");
    }
  
    // TO Close modal
    function closeModal() {
      pokemonModal.classList.add("hidden");
    }
  
    // TO Load initial Pokémon
    async function loadInitialPokemon() {
      while (loadedPokemon.size < totalPokemon) {
        const pokemonArray = await fetchPokemon(currentOffset, limit);
        for (const pokemon of pokemonArray) {
          await createPokemonCard(pokemon);
          if (loadedPokemon.size >= totalPokemon) return; //TO Stop if 151 Pokémon are loaded
        }
        currentOffset += limit;
      }
    }
  
    // Lazy load more Pokémon
    async function lazyLoadPokemon() {
      if (loadedPokemon.size >= totalPokemon) return; //  TO Stop if 151 Pokémon are loaded
  
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.body.offsetHeight;
  
      if (scrollPosition >= documentHeight - 100) {
        const pokemonArray = await fetchPokemon(currentOffset, limit);
        for (const pokemon of pokemonArray) {
          await createPokemonCard(pokemon);
          if (loadedPokemon.size >= totalPokemon) return; //TO  Stop if 151 Pokémon are loaded, i have used this two times because the first prevents any unnecessary operations and the second one for safety because it was giving me some extra pokemons so it stops  from creating cards and processing further.
        }
        currentOffset += limit;
      }
    }
  
    // Event listeners
    window.addEventListener("scroll", lazyLoadPokemon);
    pokemonModal.addEventListener("click", closeModal);
  
    
    loadInitialPokemon();
  });
  
