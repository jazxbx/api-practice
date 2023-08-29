import { useState, useEffect } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [request, setRequest] = useState("ditto");

  async function fetchPokemon() {
    // Fetch data from the pokemon api
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${request}`);
    const info = await res.json();
    // update pokemon state with the retrieved data
    setPokemon(info);
    console.log(info);
  }
  // useEffect to handle initial rendering and updates
  useEffect(() => {
    console.log(`request state:`, request);
    fetchPokemon();
    // fetching happens when request state is changed
  }, [request]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchPokemon();
  };

  return (
    <div>
      <h2 className="heading">Pokemon</h2>
      <p className="text">
        Here's a Pokémon API:{" "}
        <a href="https://pokeapi.co/">https://pokeapi.co/</a>
      </p>
      <p>
        You have to replace the text <span className="bold">"ditto"</span>with
        the name of the Pokémon you want to search for.
      </p>
      <form onSubmit={handleSearch}>
        <input
          value={request}
          type="text"
          placeholder="Enter Pokemon name..."
          onChange={(e) => setRequest(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div id="pokemon-display">
        {/* <p>{pokemon.name}</p>
        <img
          src={pokemon.sprites?.front_default}
          alt={`${pokemon.name} sprite`}
        /> */}
        <p>{pokemon.name}</p>
        {/* temporary fix. Ditto img dissapears and displays as undefined when input box is empty */}
        {pokemon.sprites && pokemon.sprites.front_default && (
          <img
            src={pokemon.sprites.front_default}
            alt={`${pokemon.name} sprite`}
          />
        )}
      </div>
    </div>
  );
};

export { Pokemon };
