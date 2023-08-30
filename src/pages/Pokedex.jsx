import PokemonList from "../components/pokedex/PokemonList";
import usePokedex from "../components/hooks/usePokedex";
import { useState } from "react";

const Pokedex = () => {
  const [currentPage, setCurrentPage] = useState(1)


  const {
    handlechagePokemonName,
    handlechageselect,
    name,

    pokemonName,
    pokemonType,
    types,

    pokemonsByName,
  } = usePokedex();

  return (
    <main>
      <section className="pokedex__container ">
        <div className="pokedex__header">
          <p className="welcome__text">
            <span>Welcome Nombre {name}</span> here you can find your favorite
            pokemon
          </p>
          <div className="pokedex__inputs">
            <form className="form__container">
              <input
                value={pokemonName}
                onChange={handlechagePokemonName}
                placeholder="Search Pokemon"
                type="text"
                className="input__header"
              />
            </form>
            <select value={pokemonType} onChange={handlechageselect}>
              <option value="">All pokemon</option>
              {
                types.map((type) => (
                  <option value={type.name} key={type.name} className="capitalize" >
                    {type.name}
                  </option>
                  ) )
              }
            </select>
          </div>
        </div>
      </section>
      <PokemonList pokemons={pokemonsByName} />
    </main>
  );
};
export default Pokedex;
