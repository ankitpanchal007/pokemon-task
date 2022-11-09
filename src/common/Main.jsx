import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { PokemonCard } from './Card'

export const Main = () => {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokemonData,setPokemonData]=useState();

    const getApiData = async () => {
        const Apidata = await axios.get(url);
        // console.log(Apidata.data.results);
        setNextUrl(Apidata.data.next);
        // console.log(nextUrl);
        setPrevUrl(Apidata.data.previous)
        getPokemon(Apidata.data.results);
        // console.log(prevUrl)
    }
    useEffect(() => { getApiData() }, [url])
    const getPokemon = async (res) => {
        res.map(async (item) => {
         const result=await axios.get(item.url)            
        });
    }

    return (
        <>
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
        </>
    )
}
