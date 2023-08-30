import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getAllpokemon } from "../service/pokemon"
import PokemonList from "../components/pokedex/PokemonList"

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])
  const [pokemonName, setPokemonName] = useState("")
  const [pokemonType, setPokemonType] = useState("")

  const {name} = useSelector(store => store.userName)

  const handlechagePokemonName = (e)=>{
    setPokemonName(e.target.value)

  }
  const handlechageselect = (e)=>{
    setPokemonType(e.target.value)

  }


  const pokemonsByName = pokemons.filter((pokemon) => pokemon.name.includes(pokemonName.toLowerCase()))
  useEffect(() => {
    getAllpokemon()
    .then((data) => setPokemons(data))
    .catch((err)=> console.log(err))
    
  }, [])
  useEffect(() => {
    if (pokemonType) {
      
    }
  }, [pokemonType])
  
  
  return (
    <main>
      <section className="pokedex__container ">
        <div className="pokedex__header">
          <p className="welcome__text">
            <span>Welcome Nombre {name}</span> here you can find your favorite pokemon
          </p>
          <div className="pokedex__inputs">
            <form className="form__container">
              <input value={pokemonName} onChange={handlechagePokemonName} placeholder="Search Pokemon" type="text" className="input__header" />
              
            </form>
            <select value={pokemonType} onChange={handlechageselect} >
              <option value="">All pokemon</option>
              <option value="rock">rock</option>
            </select>

          </div>
        </div>
      </section>
      <PokemonList pokemons={pokemonsByName}/>

    </main>
  )
}
export default Pokedex