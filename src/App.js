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
          <Route path={`/pokemon-details`} element={<PokemonDetailsPage />} />
          <Route path={`/my-pokemons-list`} element={<MyPokemonListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
