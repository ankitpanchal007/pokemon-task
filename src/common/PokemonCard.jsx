import React from 'react'
import "./style.scss"
import { Link } from "react-router-dom";
import { Card, Typography } from '@mui/material';

export const PokemonCard = ({ item }) => {

  return (
    <>
      <Link to={`/pokemondetails/${item.id}`}>
        <Card sx={{ width: '130px', backgroundColor: '#8EC3B0' }} className="container" >
          <Typography>{item.id}</Typography>
          <img src={item.sprites.front_default} alt="" />
          <Typography>{item.name}</Typography>
        </Card>
      </Link>
    </>
  )
}
