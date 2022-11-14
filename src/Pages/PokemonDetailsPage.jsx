import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardHeader, Dialog, DialogActions, DialogTitle, Grid, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { MYPOKEMON_LIST } from "../Utils/constants";
import { setMyPokemons, setNickname } from "../Redux/PokemonSlice";

const PokemonDetailsPage = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const { pokemonDetail } = useSelector((state) => state.PokemonReducer);

  const navigate = useNavigate();

  const detail = useParams();
  const [data, setData] = useState({});
  const navigateHome = () => {
    navigate("/");
  };
  const navigateToMyPokemon = () => {
    navigate(MYPOKEMON_LIST);
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + `/v2/pokemon/${detail.id}`)
      .then((res) => setData(res.data));
  }, []);

  const HandleOnClick = (pokemonDetail) => {
    // dispatch(setNickname({ nickName: 'abc' }));
    // localStorage.setItem('NickName', JSON.stringify(pokemonDetail));
    dispatch(setMyPokemons(pokemonDetail));
    navigate(MYPOKEMON_LIST);
  };

  return (
    <>
      <Card>
        <CardHeader
          sx={{ backgroundColor: "#9ED5C5" }}
          title={"Pokemon Details"}
        />

        <Grid direction={"row"}>
          <Button variant="contained" className="button" onClick={navigateHome}>
            Move to Pokemon's List
          </Button>
          <Button variant="contained" className="button" onClick={navigateToMyPokemon}>
            My Pokemon List
          </Button>
        </Grid>

        <div className="Details">
          <Typography>{pokemonDetail.id}</Typography>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonDetail.id}.svg`}
          />
          <Typography sx={{ fontSize: 34, fontWeight: "medium" }}>
            {pokemonDetail.name}
          </Typography>

          <div>
            {pokemonDetail?.stats?.map((pokemon) => {
              return (
                <>
                  <Typography>
                    {pokemon?.stat?.name}:{pokemon?.base_stat}
                  </Typography>
                </>
              );
            })}
          </div>
        </div>

        <div className="ability">
          <Typography style={{ fontWeight: "bold" }}>ABILITIES</Typography>
          {pokemonDetail?.abilities?.map((poke) => {
            return (
              <div>
                <Typography>{poke.ability.name}</Typography>
              </div>
            );
          })}
        </div>

        <Button variant="contained" className="button" onClick={() => { HandleOnClick(pokemonDetail); }}  >Add to my pokemon list</Button>
      </Card>
    </>
  );
};

export default PokemonDetailsPage;

//onClick={() => { HandleOnClick(pokemonDetail); }} 