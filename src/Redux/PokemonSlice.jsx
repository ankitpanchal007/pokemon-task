import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon_slice",
  initialState: {
    pokemons: [],
  },
  reducers: {
    setPokemons: (state, action) => {
      return {
        ...state,
        pokemons: state.pokemons.find((pk) => pk.id === action.payload.id)
          ? [...state.pokemons]
          : [...state.pokemons, action.payload],
      };
    },
  },
});

export const { setPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
