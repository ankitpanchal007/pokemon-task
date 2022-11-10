import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const PokemonDetailsScreen = () => {

  const detail = useParams();

  const [state, setState] = useState({})
  console.log(state);


  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${detail.id}`).then(res => setState(res.data))
  }, [])

  return (<div className='Details' >
    <h3>{state.id}</h3>
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${state.id}.svg`} />
    <h3>{state.name}</h3>
    {/* <div>
      {state.abilities.map(poke=>
      {
        return(
          <>
          <h2>{poke.ability.name}</h2>
          </>
        )
      })}
    </div> */}
  </div>)
}
