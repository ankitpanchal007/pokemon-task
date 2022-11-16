import React from "react";
import "./style.scss";
import { Card, Grid, Typography } from "@mui/material";

export const PokemonCard = ({ item, onClick }) => {
  return (
    <Card className="pokemon-card" onClick={onClick}>
      <Grid container justifyContent={"space-between"}  >
        <Grid sx={{ mt: 6 }}>
          <Typography className="pokemon-id">{item?.id}</Typography>
        </Grid>
        <Grid >
          <img
            className="pokemon-image"
            src={item?.sprites?.front_default}
            alt=""
          />
          <Typography className="pokemon-name">{item?.name}</Typography>
        </Grid>

      </Grid>


    </Card>
  );
};
