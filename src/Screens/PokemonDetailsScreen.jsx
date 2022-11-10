import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { MyPokemonListScreen } from './MyPokemonListScreen'
import '../Screens/style.scss'
import { Card, CardHeader, Grid, Typography } from '@mui/material'

export const PokemonDetailsScreen = () => {
  const navigate = useNavigate();

  const detail = useParams();
  const [data, setData] = useState({})
  // console.log(data);
  const navigateHome = () => {
    navigate('/');
  };
  const navigateToMyPokemon = () => {
    navigate('MyPokemonListScreen');
  };

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${detail.id}`).then(res => setData(res.data))
  }, [])

  return (
    <><Card>
      <CardHeader
        sx={{ backgroundColor: '#9ED5C5' }}
        title={"Pokemon Details"}
      />
      <Grid direction={'row'}>
        <button className='button' onClick={navigateHome}>Move to Pokemon's List</button>
        <button className='button' onClick={navigateToMyPokemon}>My Pokemon List</button>
      </Grid>
      <div className='Details' >

        <Typography>{data.id}</Typography>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} />
        <Typography sx={{ fontSize: 34, fontWeight: 'medium' }}>{data.name}</Typography>
        <div>
          {
            data?.stats?.map(pokemon => {
              return (
                <>
                  <Typography>{pokemon.stat.name}:{pokemon.base_stat}</Typography>
                </>
              )
            })
          }
        </div>
        <div className='ability'>
          <Typography>Abilities</Typography>
          {data?.abilities?.map(poke => {
            return (
              <div>
                <Typography>{poke.ability.name}</Typography>
              </div>
            )
          })}
        </div>
      </div>
    </Card>
    </>
  )
}
