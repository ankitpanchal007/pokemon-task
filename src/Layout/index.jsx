import React from "react";
import {
  AppBar,
  Button,
  Grid,
  Toolbar,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  MYPOKEMON_LIST,
  POKEMON_LIST
} from "../Utils/constants";

const Layout = ({ title, children }) => {
  const navigate = useNavigate();
  return (<>
    <div >
      <AppBar sx={{ backgroundColor: "#9ED5C5", align: "center" }} position="relative">
        <Toolbar>
          <Grid container justifyContent={"space-between"}>
            <Grid>
              <Typography sx={{ fontSize: "28px", fontWeight: "bold", color: "black" }}>
                Pokemon-Task
              </Typography>
            </Grid>
            <Grid>
              <Typography sx={{ fontSize: "28px", fontWeight: "bold", color: "black" }}>
                {title}
              </Typography>
            </Grid>
            <Grid>
              <Button sx={{ color: "black" }} onClick={() => { navigate(POKEMON_LIST) }}>Pokemon List</Button>
              <Button sx={{ color: "black" }} onClick={() => { navigate(MYPOKEMON_LIST) }}>My Pokemon List</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {children}
    </div>

  </>
  );
};

export default Layout;