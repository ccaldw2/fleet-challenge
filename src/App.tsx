import './App.css'
import Navbar from './components/Navbar.component';
import DrawerMenu from './components/DrawerMenu.component';
import { Toolbar, Box, Container, useMediaQuery, useTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Submission from './views/Submission';
import Archive from './views/Archive';


function App() {
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  
  return (
    <>
      <Router>
        <Navbar handleDrawerToggle={handleDrawerToggle} isMobile={isMobile} />
        <DrawerMenu mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

        {/* push content below the AppBar height */}
        <Toolbar />

        {/* Responsive page wrapper */}
        <Box
          component="main"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            p: { xs: 1, sm: 2, md: 3 }, // padding responsive
          }}
        >
          <Container
            maxWidth="md"
            sx={{
              // improves readability and spacing across devices
              px: { xs: 0.5, sm: 2 },
              py: 2,
            }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="/submission" replace />} />
              <Route path="/submission" element={<Submission />} />
              <Route path="/archive" element={<Archive />} />
            </Routes>
          </Container>
        </Box>
      </Router>

    </>
  )
}

export default App
