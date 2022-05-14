import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import Image from "../images/ataenebg.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Profile = () => {
  const imageSize ={
    border: "0",
    borderRadius: "50%"
  }
  return (
    <>
      <Grid container mt={10}>
        <Grid item xs={4}>
          <Typography color='white' variant="h4">I am Emmanuel Ata</Typography>
          <Typography color='white'>Full stack Software, Mobile Enginer & UI/UX Designer</Typography>
          <Typography color='white'>BSc in Petroleum Systems Engineering</Typography>
          <Button sx={{ m: 1 }} variant="contained" href="https://www.linkedin.com/in/alafonye-emmanuel/"><LinkedInIcon /></Button>
          <Button variant="contained" href="https://github.com/Ataene"><GitHubIcon /></Button>
        </Grid>
        <Grid item xs={8}>
          <img sx={{m: 6}} style={imageSize} alt="Alafonye" src={Image} />
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
