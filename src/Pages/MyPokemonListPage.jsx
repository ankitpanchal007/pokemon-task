import { Button, Card, CardHeader, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import { deletePokemons } from "../Redux/PokemonSlice";

const MyPokemonListPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { myPokemons } = useSelector((state) => state.PokemonReducer);

  const handleOnDelete = (pokemon) => {
    dispatch(deletePokemons(pokemon.id));
  }

  return (
    <>
      <Card sx={{ backgroundColor: "#BCEAD5" }} >
        <Layout title={"My Pokemon Page"} >

          {myPokemons &&
            myPokemons.map((pokemon) => {
              return (
                <>
                  <Card className="mypokemon-card " key={`key:${myPokemons.id}`} sx={{ backgroundColor: "#478976" }}>
                    <Typography sx={{ color: '#DEF5E5', fontSize: 34, fontWeight: "bold" }}>Id - {pokemon.id}</Typography>
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                    />
                    <Typography sx={{ color: '#DEF5E5', fontSize: 28, fontWeight: "normal" }}>
                      Nickname - {pokemon.nickname}<br></br>
                      Name - {pokemon.name}
                    </Typography>
                    <Button variant="contained"
                      sx={{ backgroundColor: "red", '&:hover': { backgroundColor: "red" }, }}
                      onClick={() => { handleOnDelete(pokemon) }}> Remove Pokemon</Button>
                  </Card>
                </>
              );
            })}
        </Layout>
      </Card>
    </>
  );
};

export default MyPokemonListPage;
