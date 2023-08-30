import PokemonList from "../components/pokedex/PokemonList";
import usePokedex from "../components/hooks/usePokedex";

const Pokedex = () => {
  const {
    handlechagePokemonName,
    handlechageselect,
    name,

    pokemonName,
    pokemonType,

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
              <option value="rock">rock</option>
            </select>
          </div>
        </div>
      </section>
      <PokemonList pokemons={pokemonsByName} />
    </main>
  );
};
export default Pokedex;
