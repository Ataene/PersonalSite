import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, Link } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InfoIcon from '@mui/icons-material/Info';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Sidebar = () => {
  return (
    <>
    <Box mt={5} flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <List>
            <ListItem disablePadding>
             <ListItemButton>
              <ListItemIcon>
                <HomeIcon secondary="Home" />
                <ListItemText primary="Homepage" />
              </ListItemIcon>
             </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
             <ListItemButton>
              <ListItemIcon>
                <Link color="inherit" to="/"><InfoIcon primary="About" /></Link>
                <ListItemText primary="About" />
              </ListItemIcon>
             </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
             <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon primary="Projects" />
                <ListItemText primary="Projects" />
              </ListItemIcon>
             </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
             <ListItemButton>
              <ListItemIcon>
                <AccountBoxIcon primary="Portfolio" />
                <ListItemText primary="Portfolio" />
              </ListItemIcon>
             </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
             <ListItemButton>
              <ListItemIcon>
                <AssuredWorkloadIcon primary="Hire" />
                <ListItemText primary="Hire me" />
              </ListItemIcon>
             </ListItemButton>
            </ListItem>
        </List>
    </Box>
    </>
  )
}

export default Sidebar