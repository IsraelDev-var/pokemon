import { useEffect, useState } from "react";
import { getAllpokemon, getAlltypes, getPokemonType } from "../../service/pokemon";
import { useSelector } from "react-redux";

const usePokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [types, setTypes] = useState([])

  const { name } = useSelector((store) => store.userName);

  const handlechagePokemonName = (e) => {
    setPokemonName(e.target.value);
  };
  const handlechageselect = (e) => {
    setPokemonType(e.target.value);
  };

  const pokemonsByName = pokemons.filter((pokemon) =>
    pokemon.name.includes(pokemonName.toLowerCase())
  );
  useEffect(() => {
    if (!pokemonType) {
      getAllpokemon()
        .then((data) => setPokemons(data))
        .catch((err) => console.log(err));
    }
  }, [pokemonType]);

  useEffect(() => {
    if (pokemonType) {
      getPokemonType(pokemonType)
        .then((data) => setPokemons(data))
        .catch((err) => console.log(err));
    }
  }, [pokemonType]);

  useEffect(() => {
    getAlltypes()
    .then((types) => setTypes(types))
    .catch((err) => console.log(err))
  }, []);

  

  return {
    name,
    pokemonName,
    pokemonType,
    pokemonsByName,
    handlechageselect,
    handlechagePokemonName,
    setPokemonName,
    setPokemonType,
    types,

  };
};
export default usePokedex;
