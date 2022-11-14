import { Box, Card, CardHeader, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PokemonCard } from "../Components/PokemonCard/PokemonCard";
import { fetchPokemonsList } from "../Services/Api";

const PokemonListPage = () => {
  const dispatch = useDispatch();

  const { pokemons } = useSelector((state) => state.PokemonReducer);

  console.log("pokemons", pokemons);

  useEffect(() => {
    dispatch(fetchPokemonsList());
  }, []);

  return (
    <>
      {pokemons &&
        pokemons.map((pokemon) => {
          return (
            <PokemonCard
              item={pokemon}
              onClick={() => console.log("clicked", pokemon)}
            />
          );
        })}
    </>
  );
};

export default PokemonListPage;
