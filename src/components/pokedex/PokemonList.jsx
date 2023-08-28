import PokemonCard from "./PokemonCard"

const PokemonList = ({pokemons}) => {
  return (
    <section>
        {
          pokemons.map((pokemon) => <PokemonCard key={pokemon.id} pokemonUrl={pokemon.url}/>)
        }
    </section>
  )
}
export default PokemonList