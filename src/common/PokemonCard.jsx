import React from 'react'
import "./style.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { PokemonDetailsScreen } from '../Screens/PokemonDetailsScreen';

export const PokemonCard = ({ pokemonData, loading }) => {
  // const navigate = useNavigate();
  const handleClick = (item) => {
    return (
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route path="/PokemonDetailsScreen/:id" element={<PokemonDetailsScreen />} />
        </Routes>
      </BrowserRouter>
    )
  }

  return (
    <>
      {
        loading ? <h3>loading..</h3> :
          pokemonData.map((item, index) => {
            return (
              <>
                <Link to={`/pokemondetails/${item.id}`}>
                  <div className='container' key={index} >
                    <h3>{item.id}</h3>
                    <img src={item.sprites.front_default} alt="" />
                    <h3>{item.name}</h3>
                  </div>
                </Link>
              </>
            )
          }
          )}
    </>
  )
}
