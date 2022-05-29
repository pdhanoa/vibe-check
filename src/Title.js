import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

/*
Purple title bar displaying app name.
*/

const Title = () => {
  
  
  return (
    <div className ="title">
      <AppBar position="fixed" style={{ background: " #b786f7" }}>

        <Toolbar color="purple">
          <Typography variant="h6">Vibe Check</Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Title;