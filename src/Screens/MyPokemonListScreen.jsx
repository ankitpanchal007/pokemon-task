import { Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const MyPokemonListScreen = () => {
  const detail = useParams();
  const [myPokemonData, setMyPokemonData] = useState([]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${detail.id}`).then(res => setMyPokemonData(res.data))
  }, [])
  return (
    <>
      <h1>My Pokemon List</h1>
      <Typography>{myPokemonData.id}</Typography>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${myPokemonData.id}.svg`} />
      <Typography sx={{ fontSize: 34, fontWeight: 'medium' }}>{myPokemonData.name}</Typography>
    </>
  )
}
