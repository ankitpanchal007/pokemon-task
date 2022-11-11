import { createSlice } from '@reduxjs/toolkit';
import { getPokemons } from '../Screens/PokemonDetailsScreen';

const slice = createSlice({
    name: 'Pokemons',
    initialState: {
        Pokemons: []
    },
    reducers: {
        [getPokemons.fulfilled]: (state, action) => {
            return {
                ...state,
                Pokemons: action.payload,
            }
        },
    },
});

export default slice.reducer
