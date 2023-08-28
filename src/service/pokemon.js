import axios from "axios"

export const getAllpokemon = async ()=> {
    const url ="https://pokeapi.co/api/v2/pokemon?limit=20";


    const {data} = await axios.get(url);
    return data.results;
}