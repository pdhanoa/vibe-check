import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

/*
Purple title bar displaying app name.
*/

const Title = () => {
  
  
  return (
    <div className ="title">
      <AppBar position="fixed" style={{ background: " #b786f7" }}>

        <Toolbar color="purple">
          <Typography variant="h6">Vibe Check</Typography>
          <li>
                <Link to="/calendar">Calendar</Link>
            </li>
            <li>
                <Link to="/goals">Goals</Link>
            </li>
            <li>
                <Link to="/resources">Resources</Link>
            </li>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Title;