import React from 'react';
import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

interface DrawerMenuProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ mobileOpen, handleDrawerToggle }) => {
  const drawer = (
    <List>
      <ListItemButton component={Link} to="/submission" onClick={handleDrawerToggle}>
        <ListItemText primary="Submission" />
      </ListItemButton>
      <ListItemButton component={Link} to="/archive" onClick={handleDrawerToggle}>
        <ListItemText primary="Archive" />
      </ListItemButton>
    </List>
  );

  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}
      sx={{ display: { xs: 'block', sm: 'none' } }}
    >
      {drawer}
    </Drawer>
  );
};

export default DrawerMenu;