import PokemonCard from "./PokemonCard"

const PokemonList = ({pokemons}) => {
  return (
    <section className="section__pokemon  max-w-[1024px] mx-auto grid gap-2 p-2 grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))]">
        {
          pokemons.map((pokemon) => <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url}/>)
        }
    </section>
  )
}
export default PokemonList