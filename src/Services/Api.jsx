import axios from "axios";
import { setPokemons } from "../Redux/PokemonSlice";

// Axios Base URL
const baseURL = process.env.REACT_APP_BASE_URL ?? "https://pokeapi.co/api/v2";

// Fetch Pokemon List
export const fetchPokemonsList = (callback, offset = 0, limit = 10) => {
  return async (dispatch) => {
    return await axios
      .get(`${baseURL}/pokemon?offset=${offset}&limit=${limit}`)
      .then((res) => {
        if (res.status === 200) {
          const list = fetchPokemonsDetails(res?.data?.results, dispatch);
          console.log("list", list);
        }
        callback && callback(res);
      })
      .catch((error) => {
        console.warn("error", error);
        callback && callback(error);
      });
  };
};

// Fetch Pokemon Details
const fetchPokemonsDetails = async (list, dispatch) => {
  list.forEach(async (item) => {
    const res = await axios.get(item?.url);
    if (res.status === 200) {
      dispatch(setPokemons(res?.data));
    }
  });
};
