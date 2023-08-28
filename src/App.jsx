import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PokemonInfo from "./pages/PokemonInfo";
import Pokedex from "./pages/Pokedex";
import Error404 from "./pages/Error404";
import PrivateRoute from "./components/auth/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route element={<PrivateRoute />}>
      <Route path="/pokedex" element={<Pokedex />} />
      <Route path="/pokedex/:pokedexId" element={<PokemonInfo />} />
      </Route>

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
