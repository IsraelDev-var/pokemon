import axios from "axios"
import { useEffect } from "react"
import { useSelector } from "react-redux"

const Pokedex = () => {
 const {name} = useSelector(store => store.userName)

  useEffect(() => {
    axios
      .get(url)
      .then(({data}) => console.log(data))
      .catch((err) => console.log(err))
    
  }, [])
  
  return (
    <main>
      <section className="pokedex__container ">
        <div className="pokedex__header">
          <p className="welcome__text">
            <span>Welcome Nombre {name}</span> here you can find your favorite pokemon
          </p>
          <div className="pokedex__inputs">
            <form className="form__container">
              <input placeholder="Search Pokemon" type="text" className="input__header" />
              <button className="pokedex__button">Search</button>
            </form>
            <select>
              <option value="">All pokemon</option>
            </select>

          </div>
        </div>
      </section>

    </main>
  )
}
export default Pokedex