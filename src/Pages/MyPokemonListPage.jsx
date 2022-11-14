import React, { useEffect, useState } from "react";
import { Card, CardHeader, Typography } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";

const MyPokemonListPage = () => {
  const detail = useParams();
  const [myPokemonData, setMyPokemonData] = useState([]);
  console.log(myPokemonData);
  //  const { Pokemons } = useSelector((state) => state.Pokemons);
  // console.log(Pokemons);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + `/v2/pokemon/${detail.id}`)
      .then((res) => setMyPokemonData(res.data));
  }, []);
  return (
    <>
      <Card>
        <CardHeader
          sx={{ m: "auto", backgroundColor: "#9ED5C5" }}
          title={"My Pokemon list"}
        ></CardHeader>
        <Typography>{myPokemonData.id}</Typography>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${myPokemonData.id}.svg`}
        />
        <Typography sx={{ fontSize: 34, fontWeight: "medium" }}>
          {myPokemonData.name}
        </Typography>
      </Card>
    </>
  );
};

export default MyPokemonListPage;
