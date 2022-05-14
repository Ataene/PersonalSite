import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import { Badge, Avatar, TextField, Menu, MenuItem } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import image from "../images/ataene.jpg"
import { Box } from '@mui/system';
import { useState } from 'react';
// import { withStyles, createStyles } from "@material-ui/core/styles";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent:"space-between",

})

const Icons = styled(Box)(({ theme }) => ({display: "flex", gap: '20px', alignItems:"center"
}))
// const UserBox = styled(Box)(({ theme }) => ({display: "flex", gap: '10px', alignItems:"center"}))


 const Navbar = () => {

  const [open, setOpen ] = useState(false);
  
  return (
    <>
      {/* <AppBar position="fixed" sx={{ bgcolor: "#22577E" }}> */}
        <StyledToolBar sx={{bgcolor: "#22577E"}}>
          <Typography color='white' variant="h6" sx={{ display: {xs: "none", sm:"block"} }}>
            GreatSpiration
          </Typography>
          <OnlinePredictionIcon sx={{display: {xm: "block", sm:"none"}}} />
          <TextField bg="white" label="Search..." variant="outlined" />
          <Link color='white' to="/">Home</Link>
          <Link color="inherit" to="/about">About</Link>
          <Link color="inherit" to="/project">Project</Link>
          <Link color="inherit" to="/portfolio">Portfolio</Link>
          <Link color="inherit" to="/hire">Hire Me</Link>
          <Icons>
            <Badge badgeContent={4} color="error">
              <MailIcon color="action" />
            </Badge>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon color="action" />
            </Badge>
            <Avatar onClick={(event) => setOpen(true)} src={image}/>
          </Icons>
          {/* <UserBox> */}
          {/* <Avatar src={image}/>
          <Typography variant="span">Ataene</Typography> */}
          {/* </UserBox> */}
        </StyledToolBar>
        <Menu
          open={open}
          onClose={(event) => setOpen(false)}
          aria-labelledby="demo-positioned-button"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
      >
        <MenuItem><Link to="/about">About</Link></MenuItem>
        <MenuItem><Link to="/project">Project</Link></MenuItem>
        <MenuItem><Link to="/portfolio">Portfolio</Link></MenuItem>
      </Menu>
      {/* </AppBar> */}
    </>
  );
}

export default Navbar;
