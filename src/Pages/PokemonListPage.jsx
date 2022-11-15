import { Box, Button, Card, CardHeader, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PokemonCard } from "../Components/PokemonCard/PokemonCard";
import { setPokemonDetail } from "../Redux/PokemonSlice";
import { fetchPokemonsList } from "../Services/Api";
import { MYPOKEMON_LIST, POKEMON_DETAILS } from "../Utils/constants";

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
      <Card>
        <CardHeader
        className="heading"
          title="Pokemon List"
        />
      </Card>
        <Button variant="contained"  sx={{m:2, backgroundColor: "#478976", '&:hover': { backgroundColor: "#478976" }, }} color='success' className='button' onClick={() => navigate(MYPOKEMON_LIST)}> 
        <Typography>Selected Pokemon List</Typography>
        </Button>
      <Box className="card-container">
        <Grid container sx={{height: 'auto' }} >
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
    </div>
  );
};

export default PokemonListPage;
