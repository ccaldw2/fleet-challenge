import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

interface NavbarProps {
  handleDrawerToggle: () => void;
  isMobile: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ handleDrawerToggle, isMobile }) => {
  return (
    <AppBar position="fixed" sx={{ width: '100%' }}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <nav style={{ display: isMobile ? 'none' : 'block' }}>
          <Link to="/submission" style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}>Submission</Link>
          <Link to="/archive" style={{ color: 'white', textDecoration: 'none' }}>Archive</Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;