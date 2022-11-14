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
      <Card>
        <CardHeader
          sx={{ m: 'auto', backgroundColor: '#9ED5C5', textDecoration: 'underline' }}
          title={"Pokemon list"}
        />
      </Card>
      <Box sx={{ borderRadius: '10px', backgroundColor: "#BCEAD5", height: '620px', width: 'auto', p: 4, m: '50px' }}>
        <Grid container sx={{ border: '2px solid Grey', borderRadius: '10px', height: '600px' }} >
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
      </Box>
    </>
  );
};

export default PokemonListPage;
