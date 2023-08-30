import axios from "axios"
import { Await } from "react-router-dom";



export const getAllpokemon = async ()=> {
    const url ="https://pokeapi.co/api/v2/pokemon?limit=20";


    const {data} = await axios.get(url);
    return data.results;
}

export const getPokemonByUrl = async (pokemonUrl) =>{
    const {data} = await axios.get(pokemonUrl);
    const pokemon = {
        id: data.id,
        name: data.name,
        types: formateTypes(data.types),
        stats: formateStats(data.stats),
        image: data.sprites.versions["generation-v"]["black-white"].animated.front_default

    }
    
    return pokemon;
}


const formateTypes = (types) =>{
    return types.map((type) => type.type.name)
}

const formateStats = (stats) =>{
    return stats.map((stat) => ({name: stat.stat.name, value:stat.base_stat
    }) )
}

export const joinPokemonTypes = (types = [])=>{
    return types.slice(0, 2).join(" / ")
  }