import React from 'react'
import "./style.scss"
import { Link } from "react-router-dom";
import { Card, CardHeader, Grid, Typography } from '@mui/material';

export const PokemonCard = ({ pokemonData, loading }) => {

  return (
    <>
      {
        loading ? <h3>loading..</h3> :
          pokemonData.map((item, index) => {
            return (
              <>
                <Link to={`/pokemondetails/${item.id}`}>
                  <Card sx={{width:'130px', backgroundColor:'#8EC3B0'}} className="container" key={index}>
                    <Typography>{item.id}</Typography>
                    <img src={item.sprites.front_default} alt="" />
                    <Typography>{item.name}</Typography>
                  </Card>
                </Link>
              </>
            )
          }
          )}
    </>
  )
}
