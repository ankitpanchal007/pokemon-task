import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon_slice",
  initialState: {
    pokemons: [],
    pokemonDetail: {},
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
    setPokemonDetail: (state, action) => {
      return {
        ...state,
        pokemonDetail: action.payload,
      };
    },
  },
});

export const { setPokemons, setPokemonDetail } = pokemonSlice.actions;

export default pokemonSlice.reducer;
