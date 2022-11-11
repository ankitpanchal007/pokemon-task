import { Box, Card, CardHeader, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { PokemonCard } from '../common/PokemonCard';

export const PokemonListScreen = () => {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    // const [nextUrl, setNextUrl] = useState();  // const [prevUrl, setPrevUrl] = useState();
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getApiData = async () => {
        setLoading(true);
        const Apidata = await axios.get(url);
        // console.log(Apidata.data.results); // setNextUrl(Apidata.data.next); // console.log(nextUrl);  // setPrevUrl(Apidata.data.previous)
        getPokemon(Apidata.data.results);
        // console.log(prevUrl)
        setLoading(false);
        // console.log(pokemonData)
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
                <Grid container sx={{ border: '2px solid Grey', borderRadius: '10px', height: '800px' }}>

                    <PokemonCard pokemonData={pokemonData} loading={loading} />
                </Grid>
            </Box>

        </>
    )
}
