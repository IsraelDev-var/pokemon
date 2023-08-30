import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { bgStylePokemonType, getPokemonById } from "../service/pokemon"
import Statsbar from "../components/pokemonInfo/statsbar"

const PokemonInfo = () => {
  const [pokemonData, setPokemonData] = useState(null)
  

  const {pokedexId} = useParams()
  ;

  useEffect(() => {
    getPokemonById(pokedexId)
    .then((data) => setPokemonData(data))
    .catch((err) => console.log(err));
  
  }, [])
  
  
  return (
    <main className="flex justify-center items-center">
      <section className="pokemonInfo__container w-[min(100%,_400px)] ">
        <header className={`flex justify-center h-12 items-center ${bgStylePokemonType[pokemonData?.types[0]]}`} >
        <div className="pokemonInfo__image">
          <img src={pokemonData?.image} alt="img" className="pokemosInfo__img" />
        </div>
        </header>
        
        <section className="container__data">
          <div className="container__data1 flex justify-center items-center ">
            <span className="pokemonInfo__id"> # {pokemonData?.id} </span>

          </div>
          <div className="container__skills">
            
          </div>
          
          <Statsbar stats={pokemonData?.stats} />
          
        </section>
      </section>
    </main>
  )
}
export default PokemonInfo