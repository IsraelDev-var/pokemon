import { useEffect, useState } from "react"
import { getPokemonByUrl } from "../../service/pokemon"

const PokemonCard = ({pokemonUrl}) => {
  const [pokemonInfo, setPokemonInfo] = useState([])
  
  useEffect(() => {
    
    getPokemonByUrl(pokemonUrl)
    .then((data) => setPokemonInfo(data))
    .catch((err) => console.log(err))
  }, [])
  
  return (
    
    <article className="pokemon__card">
      <h2>pokemons</h2>


    </article>
  )
}
export default PokemonCard