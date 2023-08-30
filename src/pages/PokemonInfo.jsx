import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPokemonById } from "../service/pokemon"

const PokemonInfo = () => {
  const [pokemonData, setPokemonData] = useState(null)
  console.log(pokemonData);

  const {pokedexId} = useParams()
  console.log(pokedexId);

  useEffect(() => {
    getPokemonById(pokedexId)
    .then((data) => setPokemonData(data))
    .catch((err) => console.log(err));
  
  }, [])
  
  
  return (
    <main>
      <section className="pokemonInfo__container">
        <header>
        <div className="pokemonInfo__image">
          <img src={pokemonData?.image} alt="img" className="pokemosInfo__img" />
        </div>
        </header>
        
        <section className="container__data">
          <div className="container__data1">
            <h3>hola</h3>

          </div>
          <div className="container__skills">
            
          </div>
          <div className="container__stats">
            
          </div>
        </section>
      </section>
    </main>
  )
}
export default PokemonInfo