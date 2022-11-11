import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Reducer"

export default configureStore({
    reducer: {
        Pokemons: Reducer
    },
});


