import { configureStore } from "@reduxjs/toolkit";
import PokemonReducer from "./PokemonSlice";

export default configureStore({
  reducer: {
    PokemonReducer,
  },
});
