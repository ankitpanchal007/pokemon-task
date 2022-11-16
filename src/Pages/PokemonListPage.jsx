import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PokemonCard } from "../Components/PokemonCard/PokemonCard";
import Layout from "../Layout";
import { setPokemonDetail } from "../Redux/PokemonSlice";
import { fetchPokemonsList } from "../Services/Api";
import { POKEMON_DETAILS } from "../Utils/constants";

const PokemonListPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pokemons } = useSelector((state) => state.PokemonReducer);

  useEffect(() => {
    dispatch(fetchPokemonsList());
  }, []);

  const handlePokemonOnClick = (pokemon) => {
    dispatch(setPokemonDetail(pokemon));
    navigate(POKEMON_DETAILS);
  };

  return (
    <div>
      <Layout title={"Pokemon Page"} >
        <Grid container sx={{ height: 'auto' }} >
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
        </Grid>
      </Layout>
    </div>
  );
};

export default PokemonListPage;
