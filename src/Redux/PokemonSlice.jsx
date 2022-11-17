import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon_slice",
  initialState: {
    pokemons: [],
    pokemonDetail: {},
    myPokemons: [],
    pokemonMove:[]
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
    setPokemonMove:(state,action)=>{
      return{
        ...state,
        pokemonMove:action.payload,
      };
    },
    setMyPokemons: (state, action) => {
      return {
        ...state,
        myPokemons: state.myPokemons.find((myPk) => myPk.id === action.payload.id)
          ? [...state.myPokemons]
          : [...state.myPokemons, action.payload],
      };
    },
    deletePokemons: (state, action) => {
      return {
        ...state,
        myPokemons: state.myPokemons.filter((myPk) => myPk.id !== action.payload)

      };
    },
  },
});

export const { setPokemons, setPokemonMove,setPokemonDetail, setMyPokemons, deletePokemons, setNickname } = pokemonSlice.actions;

export default pokemonSlice.reducer;
