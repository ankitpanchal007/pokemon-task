import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardHeader, Dialog, DialogTitle, Grid, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { MYPOKEMON_LIST } from "../Utils/constants";
import { setMyPokemons } from "../Redux/PokemonSlice";
import sweetalert from 'sweetalert';
import Layout from "../Layout";

const PokemonDetailsPage = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [nickname, setNickname] = useState("");

  const { pokemonDetail } = useSelector((state) => state.PokemonReducer);

  const navigate = useNavigate();

  const HandleOnClick = (pokemonDetail) => {
    if (nickname.trim().length > 0) {
      localStorage.setItem("pokemonDetail", JSON.stringify(pokemonDetail));
      var user = JSON.parse(localStorage.getItem("pokemonDetail"));
      user.nickname = nickname;
      dispatch(setMyPokemons(user));
      navigate(MYPOKEMON_LIST);
    }
    else {
      sweetalert({ title: "Enter nickname", icon: "error" })
    }
  };

  const showDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };
  return (
    <>
     <Layout title={"Pokemon Details"} button={"Pokemon List"}>

        <Grid direction={"row"} >
          <Button variant="contained" sx={{ m: 2, backgroundColor: "#478976", '&:hover': { backgroundColor: "#478976" }, }} className="button" onClick={() => { navigate("/") }}>
            Pokemon List
          </Button>
          <Button variant="contained" sx={{ m: 2, backgroundColor: "#478976", '&:hover': { backgroundColor: "#478976" }, }} className="button" onClick={() => { navigate(MYPOKEMON_LIST) }}>
            My Pokemon List
          </Button>
        </Grid>
        

        <div className="Details-card">
          <Typography sx={{ color: '#CFF5E7', fontSize: 34, fontWeight: "bold" }}>{pokemonDetail.id}</Typography>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonDetail.id}.svg`}
          />
          <Typography sx={{ color: '#CFF5E7', fontSize: 34, fontWeight: "medium" }}>
            {pokemonDetail.name}
          </Typography>

          <div>
            {pokemonDetail?.stats?.map((pokemon) => {
              return (
                <>
                  <Typography sx={{ color: '#CFF5E7' }}>
                    {pokemon?.stat?.name}:{pokemon?.base_stat}
                  </Typography>
                </>
              );
            })}
          </div>
          <div >
            <Typography style={{ color: '#CFF5E7', fontWeight: "bold" }}>ABILITIES</Typography>
            {pokemonDetail?.abilities?.map((poke) => {
              return (

                <Typography style={{ color: '#CFF5E7' }} >{poke.ability.name}</Typography>
              );
            })}
          </div>
        </div>

        <Button variant="contained" sx={{ m: 2, backgroundColor: "#478976", '&:hover': { backgroundColor: "#478976" }, }} onClick={() => { showDialog() }}  >Catch Pokemon</Button>
      
      <Dialog
        sx={{
          border: '2px solid',
          justifyContent: 'center',
          padding: "auto",
        }}
        open={open}
        onClose={() => { closeDialog() }}
      >
        <DialogTitle>Enter nickname for Caught pokemon</DialogTitle>

        <Grid direction={"row"} sx={{ padding: "25px" }}>
          <TextField sx={{ width: "100%", mb: 3 }} placeholder="Enter nickname" onChange={e => { setNickname(e.target.value) }}></TextField>
          <Button variant="contained" sx={{ display: "block", m: "auto", width: "auto", height: "55px" }} onClick={() => { HandleOnClick(pokemonDetail) }}>Ok</Button>
        </Grid>
      </Dialog>
      </Layout>
    </>
  );
};

export default PokemonDetailsPage;

//onClick={() => { HandleOnClick(pokemonDetail); }} 