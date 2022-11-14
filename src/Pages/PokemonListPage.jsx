import { Box, Card, CardHeader, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PokemonCard } from "../Components/PokemonCard/PokemonCard";
import { setPokemonDetail } from "../Redux/PokemonSlice";
import { fetchPokemonsList } from "../Services/Api";
import { POKEMON_DETAILS } from "../Utils/constants";

const PokemonListPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { pokemons } = useSelector((state) => state.PokemonReducer);

  useEffect(() => {
    dispatch(fetchPokemonsList());
  }, []);

  const handlePokemonOnClick = (pokemon) => {
    dispatch(setPokemonDetail(pokemon));
    navigate(POKEMON_DETAILS);
  };

  return (
    <>
      {pokemons &&
        pokemons.map((pokemon) => {
          return (
            <PokemonCard
              key={`pokemoncard_${pokemon?.id}`}
              item={pokemon}
              onClick={() => handlePokemonOnClick(pokemon)}
            />
          );
        })}
    </>
  );
};

export default PokemonListPage;
