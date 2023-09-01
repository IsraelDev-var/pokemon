import { useEffect, useState } from "react";
import { bgStylePokemonType, borderStylePokemonByType, getPokemonByUrl, joinPokemonTypes } from "../../service/pokemon";
import StatList from "./StatList";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemonInfo, setPokemonInfo] = useState([]);



  useEffect(() => {
    getPokemonByUrl(pokemonUrl)
      .then((data) => setPokemonInfo(data))
      .catch((err) => console.log(err));
  }, []);



  return (
    <Link to={`/pokedex/${pokemonInfo.id}`}
      className={`pokemon__card  capitalize md:max-w-[220px] border-[8px] rounded-md  
      ${borderStylePokemonByType[pokemonInfo?.types]} `}
    >
      <header
        className={`pokemon__header mb-8 relative h-[80px] ${bgStylePokemonType[pokemonInfo?.types]} `}
      >
        <div className="container__image absolute -bottom-4 left-1/2 -translate-x-1/2 h-[65px] aspect-square">
          <img
            src={pokemonInfo.image}
            alt=""
            className="pokemon__immg h-full w-full object-contain"
          />
        </div>
      </header>
      <section className="pokemon__info">
        <div className="container__description">
          <h3 className="pakemon__name text-lg font-bold">
            {pokemonInfo?.name}
          </h3>
          <h4 className="pokemon__description">
            {joinPokemonTypes(pokemonInfo?.types)}
          </h4>
          <h5 className="text-sm mb-2">Types</h5>
        </div>
        <hr />
        <StatList stats={pokemonInfo?.stats} />
      </section>
    </Link>
  );
};
export default PokemonCard;
