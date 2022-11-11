import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../Screens/style.scss'
import { Button, Card, CardHeader, Grid, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { createAsyncThunk } from '@reduxjs/toolkit';

export const PokemonDetailsScreen = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const detail = useParams();
  const [data, setData] = useState({})
  const navigateHome = () => { navigate('/'); };
  const navigateToMyPokemon = () => { navigate('/myPokemonList') };

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + `/v2/pokemon/${detail.id}`).then(res => setData(res.data))
  }, []);

  // const HandleOnClick = (data) => {
  //   dispatch(getPokemons(data));
  // }

  return (
    <>
      <Card>
        <CardHeader
          sx={{ backgroundColor: '#9ED5C5' }}
          title={"Pokemon Details"}
        />

        <Grid direction={'row'}>
          <Button className='button' onClick={navigateHome}>Move to Pokemon's List</Button>
          <Button className='button' onClick={navigateToMyPokemon}>My Pokemon List</Button>
        </Grid>

        <div className='Details'>
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

        </div>

        <div className='ability'>
          <Typography style={{ fontWeight: 'bold' }}>ABILITIES</Typography>
          {data?.abilities?.map(poke => {
            return (
              <div>
                <Typography>{poke.ability.name}</Typography>
              </div>
            )
          })}
        </div>

        {/* <Link to={`/myPokemonList/${data.id}`}> */}
        {/* <Button className='button' onClick={() => { HandleOnClick() }} >Add to my pokemon list</Button> */}
        {/* </Link> */}

      </Card>
    </>
  )
}
export const getPokemons = createAsyncThunk("pokemons/getPokemons", async (data) => { return data })