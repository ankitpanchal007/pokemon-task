import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const PokemonDetailsScreen = () => {

  const detail = useParams();
  const [data, setData] = useState({})
  // console.log(data);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${detail.id}`).then(res => setData(res.data))
  }, [])

  return (
    <><div className='Details' >
      <h3>{data.id}</h3>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} />
      <h2>{data.name}</h2>
      <div>
        {
          data?.stats?.map(pokemon => {
            return (
              <>
                <h3>{pokemon.stat.name}:{pokemon.base_stat}</h3>
              </>
            )
          })
        }
      </div> 
      <div className='ability'>
        <h3>Abilities</h3>
        {data?.abilities?.map(poke => {
          return (
            <div>
              <h4>{poke.ability.name}</h4>
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}
