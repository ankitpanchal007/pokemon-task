import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Dialog, DialogTitle, Grid, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { MYPOKEMON_LIST } from "../Utils/constants";
import { setMyPokemons } from "../Redux/PokemonSlice";
import sweetalert from 'sweetalert';
import Layout from "../Layout";
import { fetchPokemonMoves } from "../Services/Api";

const PokemonDetailsPage = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [nickname, setNickname] = useState("");
  const [image, setImage] = useState("");
  const [index, setIndex] = useState(0);

  const { pokemonDetail } = useSelector((state) => state.PokemonReducer);

  useEffect(() => {
    dispatch(fetchPokemonMoves(pokemonDetail.id));
  }, []);

  const { pokemonMove } = useSelector((state) => state.PokemonReducer);

  let movingImages = (pokemonDetail.sprites);
  let movingImageValue = (Object.values(movingImages).slice(0, 7));

  useEffect(() => {
    setInterval(() => {
      if (index === 6) {
        setIndex(() => 0);
        setImage(() => movingImageValue[index]);
      }
      else {
        setIndex(() => index + 2);
        setImage(() => movingImageValue[index]);
      }
    }, 3000);
  }, [index]);

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
    if (image === pokemonDetail?.sprites?.front_default) {
      setOpen(true);
    }

  };

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <Layout title={"Pokemon Details"}>

        <Grid container className="Details-card" key={`Details:id${pokemonDetail.id}`}>
          <Grid>
            <Typography sx={{ color: '#CFF5E7', fontSize: 34, fontWeight: "bold" }}>{pokemonDetail.id}</Typography>
          </Grid>
          <Grid>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonDetail.id}.svg`} alt=""
            />
            <img
              src={pokemonDetail?.sprites?.front_default} alt=""
            />
            <Grid>

              <img className="photo"
                src={image} alt="">
              </img>

              {/* <img
                src={pokemonDetail?.sprites?.back_default} alt=""
              />
              <img
                src={pokemonDetail?.sprites?.back_shiny} alt=""
              />
              <img
                src={pokemonDetail?.sprites?.front_default} alt=""
              />
              <img
                src={pokemonDetail?.sprites?.front_shiny} alt=""
              /> */}


            </Grid>
            <Grid>
              <Typography sx={{ color: '#CFF5E7', fontSize: 34, fontWeight: "medium" }}>
                {pokemonDetail.name}
              </Typography>
              <Typography sx={{ color: '#CFF5E7', fontSize: 22 }}>
                Move - {pokemonMove?.name}, Accuracy - {pokemonMove?.accuracy}
              </Typography>
            </Grid>

          </Grid>

          <Grid>
            {pokemonDetail?.stats?.map((pokemon) => {
              return (
                <>
                  <Typography sx={{ color: '#CFF5E7' }}>
                    {pokemon?.stat?.name}:{pokemon?.base_stat}
                  </Typography>
                </>
              );
            })}
          </Grid>
          <Grid >
            <Typography style={{ color: '#CFF5E7', fontWeight: "bold" }}>ABILITIES</Typography>
            {pokemonDetail?.abilities?.map((poke) => {
              return (
                <Typography style={{ color: '#CFF5E7' }} >{poke.ability.name}</Typography>
              );
            })}
          </Grid>
        </Grid>

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
          <DialogTitle>Enter nickname for caught pokemon</DialogTitle>

          <Grid container direction={"row"} sx={{ padding: "25px" }}>
            <TextField sx={{ width: "100%", mb: 3 }} placeholder="Enter nickname" onChange={e => { setNickname(e.target.value) }}></TextField>
            <Button variant="contained" sx={{ display: "block", m: "auto", width: "auto", height: "55px" }} onClick={() => { HandleOnClick(pokemonDetail) }}>Ok</Button>
          </Grid>
        </Dialog>
      </Layout>
    </>
  );
};

export default PokemonDetailsPage;
