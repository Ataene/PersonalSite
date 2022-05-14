import { Grid } from "@mui/material";
import React from "react";
import Profile from "../Components/Profile";
import Sidebar from "../Components/Sidebar";

const Home = () => {

  const themeLight = {
    backgroundColor: "#22577E",
  }

  return (
    <>
      <Grid style={themeLight} container spacing={3}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Profile />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
