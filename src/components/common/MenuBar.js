import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { NavLink } from 'react-router-dom'

// Icons
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import HouseIcon from '@mui/icons-material/House';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import CloudIcon from '@mui/icons-material/Cloud';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
         {/* Home */}
         <NavLink to="/"><ListItem disablePadding>
          <ListItemButton sx={{ py: 2}}>
          <ListItemIcon >
                <HouseIcon  sx={{ color: '#5928E5' }}  />
              </ListItemIcon>
            <ListItemText  primaryTypographyProps={{ fontWeight: '500' }}>Home</ListItemText>
          </ListItemButton>
        </ListItem></NavLink>
        <Divider />

        {/* Project */}
        <NavLink to="/project"><ListItem disablePadding>
          <ListItemButton sx={{ py: 2}}>
          <ListItemIcon>
                 <FolderCopyIcon sx={{ color: '#5928E5' }}/>
              </ListItemIcon>
            <ListItemText  primaryTypographyProps={{ fontWeight: '500' }}>Projects</ListItemText>
          </ListItemButton>
        </ListItem></NavLink>
        <Divider />

        {/* Skills */}
        <NavLink to="/skill"><ListItem disablePadding>
          <ListItemButton sx={{ py: 2}}>
          <ListItemIcon>
                 <CloudIcon sx={{ color: '#5928E5' }}/>
              </ListItemIcon>
            <ListItemText  primaryTypographyProps={{ fontWeight: '500' }}>Skills</ListItemText>
          </ListItemButton>
        </ListItem></NavLink>
        <Divider />

         {/*Experience */}
         <NavLink to="/experience"><ListItem disablePadding>
          <ListItemButton sx={{ py: 2}}>
          <ListItemIcon>
                  <WorkIcon sx={{ color: '#5928E5' }}/>
              </ListItemIcon>
            <ListItemText  primaryTypographyProps={{ fontWeight: '500' }}>Experience</ListItemText>
          </ListItemButton>
        </ListItem></NavLink>
        <Divider />

      {/* Contact */}
      <NavLink to="/contact"><ListItem disablePadding>
          <ListItemButton sx={{ py: 2}}>
          <ListItemIcon>
                <PermPhoneMsgIcon sx={{ color: '#5928E5' }} />
              </ListItemIcon>
            <ListItemText  primaryTypographyProps={{ fontWeight: '500' }}>Contact Me</ListItemText>
          </ListItemButton>
        </ListItem></NavLink>
        <Divider />
      </List>


        {/* About */}
        <NavLink to="/about"><ListItem disablePadding>
          <ListItemButton sx={{ py: 2}}>
          <ListItemIcon>
                  <AccountCircleIcon sx={{ color: '#5928E5' }} />
              </ListItemIcon>
            <ListItemText  primaryTypographyProps={{ fontWeight: '500' }}>About Me</ListItemText>
          </ListItemButton>
        </ListItem></NavLink>
        <Divider />

       
        
      
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} ><div className='text-center text-black text-sm font-black  uppercase  rounded-md py-2 px-8'>Menu</div></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
