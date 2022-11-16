import { AppBar, Card, CardHeader, Toolbar, Typography } from "@mui/material";
import React from "react";

const Layout = ({ title, button, children }) => {
  return (<>
    <div className="page-layout">
      <Card>
        <CardHeader
          className="heading"
          title={title}
          action={<>
            <AppBar sx={{ backgroundColor: "#9ED5C5" }} position="relative">
              <Toolbar >
                <Typography>Pokemon List</Typography>
                <Typography>My Pokemon List</Typography>
              </Toolbar>
            </AppBar>
          </>}
        />
      </Card>
      {children}
    </div>
    
  </>
  );
};

export default Layout;
