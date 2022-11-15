import React from "react";
import "./style.scss";
import { Card, Typography } from "@mui/material";

export const PokemonCard = ({ item, onClick }) => {
  return (
    <Card className="pokemon-card" onClick={onClick}>
      <img
        className="pokemon-image"
        src={item?.sprites?.front_default}
        alt=""
      />
      <Typography className="pokemon-id">{item?.id}</Typography>
      <Typography className="pokemon-name">{item?.name}</Typography>

    </Card>
  );
};
