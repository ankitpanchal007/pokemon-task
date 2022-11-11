import { Box, Card, CardHeader, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { PokemonCard } from '../common/PokemonCard';

export const PokemonListScreen = () => {
    const [url, setUrl] = useState(process.env.REACT_APP_API_URL + "/v2/pokemon/");

    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getApiData = async () => {
        setLoading(true);
        const Apidata = await axios.get(url);
        getPokemon(Apidata.data.results);
        setLoading(false);
    }

    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url)
            setPokemonData(state => {
                state = [...state, result.data]
                state.sort((a, b) => a.id > b.id ? 1 : -1)

                return state;
            })
        });
    }
    useEffect(() => { getApiData() }, [url])
    return (
        <>
            <Card>
                <CardHeader
                    sx={{ m: 'auto', backgroundColor: '#9ED5C5', textDecoration: 'underline' }}
                    title={"Pokemon list"}
                />
            </Card>
            <Box sx={{ borderRadius: '10px', backgroundColor: "#BCEAD5", height: '750px', width: 'auto', p: 4, m: '50px' }}>
                <Grid container sx={{ border: '2px solid Grey', borderRadius: '10px', height: '800px' }} >
                    {
                        loading ? <h3>loading..</h3> :
                            pokemonData.map((item) => {
                                return (
                                    <>
                                        <PokemonCard item={item} />
                                    </>
                                )
                            }
                            )}
                </Grid>
            </Box>

        </>
    )
}
