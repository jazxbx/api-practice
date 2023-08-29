import { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  async function fetchPokemon() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const info = await res.json();

    console.log(info);
    setPokemon(info.abilities);
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  return <div></div>;
};

export { Pokemon };
