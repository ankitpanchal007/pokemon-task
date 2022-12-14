import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonDetailsScreen } from "./Screens/PokemonDetailsScreen";
import { PokemonListScreen } from "./Screens/PokemonListScreen";
import { MyPokemonListScreen } from "./Screens/MyPokemonListScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PokemonListScreen />} />
          <Route path={`/pokemondetails/:id`} element={<PokemonDetailsScreen />} />
          <Route path={`/myPokemonList/:id`} element={<MyPokemonListScreen />} />
        </Routes>
      </BrowserRouter>

    </>
  );

}

export default App;
