import { Button, CardHeader, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deletePokemons } from "../Redux/PokemonSlice";

const MyPokemonListPage = () => {

const dispatch=useDispatch();
  const { myPokemons } = useSelector((state) => state.PokemonReducer);
  console.log(myPokemons);
  const handleOnDelete=(pokemon)=>{
    dispatch(deletePokemons(pokemon.id));
  }

  return (
    <>
      <CardHeader
        sx={{ m: "auto", backgroundColor: "#9ED5C5" }}
        title={"My Pokemon list"}
      ></CardHeader>

      {myPokemons &&
        myPokemons.map((pokemon) => {
          return (
            <>
              <Typography>Id:{pokemon.id}</Typography>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              />
              <Typography sx={{ fontSize: 34, fontWeight: "medium" }}>
                Name:{pokemon.name},{pokemon.nickName}
              </Typography>
              <Button variant="contained" sx={{ backgroundColor: "red" }} onClick={()=>{handleOnDelete(pokemon)}}> Remove Pokemon</Button>
            </>
          );
        })}
    </>
  );
};

export default MyPokemonListPage;
