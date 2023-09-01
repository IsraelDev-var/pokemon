import PokemonList from "../components/pokedex/PokemonList";
import usePokedex from "../components/hooks/usePokedex";
import { useState } from "react";
import { paginationData } from "../utils/paginacion";
import Pgination from "./Pgination";

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

  const {
    itemscurrentPage,
    lastPage,
    pagesIncurrentBlock} = paginationData(pokemonsByName, currentPage)


  return (
    <main >
      <section className="pokedex__container  p-2">
        <div className="pokedex__header grid gap-4 p-4 ">
          <p className="welcome__text font-bold mb-4 text-lg ">
            <span className="text-red-500">Welcome {name}</span> here you can find your favorite
            pokemon
          </p>
          <div className="pokedex__inputs flex justify-center p-4">
            <form className="form__container ">
              <input
                value={pokemonName}
                onChange={handlechagePokemonName}
                placeholder="Search Pokemon"
                type="text"
                className="input__header outline-none border-2 p-1 border-red-500"
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
      <Pgination currentPage={currentPage} lastPage={lastPage} setCurrentPage={setCurrentPage} pagesIncurrentBlock={pagesIncurrentBlock} />
      <PokemonList pokemons={itemscurrentPage}  />

      
    </main>
  );
};
export default Pokedex;
