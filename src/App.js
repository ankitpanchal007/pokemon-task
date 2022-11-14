import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  MyPokemonListPage,
  PokemonDetailsPage,
  PokemonListPage,
} from "./Pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonListPage />} />
          <Route
            path={`/pokemon-details/:id`}
            element={<PokemonDetailsPage />}
          />
          <Route
            path={`/my-pokemons-list/:id`}
            element={<MyPokemonListPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
