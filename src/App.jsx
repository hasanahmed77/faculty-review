import { useState } from 'react';

// Compoennets
import Navbar from "./components/Navbar/Navbar.jsx";
import { Box, CssBaseline } from '@mui/material';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <CssBaseline />
    <Box sx={{backgroundColor: "black", height: "100vh"}}>
      <Navbar />
    </Box>
    </>
  )
}

export default App
