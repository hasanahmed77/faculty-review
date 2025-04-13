import { useState } from 'react';

// Components
import Navbar from "./components/Navbar/Navbar.jsx";
import { Box, CssBaseline } from '@mui/material';
import Home from './components/Home/Home.jsx';
import { Router, Routes } from 'react-router';
import { Route } from 'react-router';
import CardDetails from './components/CardDetails/CardDetails.jsx';

function App() {
  return (
    <>
      <CssBaseline />
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/:id" element={<CardDetails />}/>
        </Routes>
      </Box>
    </>
  )
}

export default App
