import { useState } from 'react';

// Components
import Navbar from "./components/Navbar/Navbar.jsx";
import { Box, CssBaseline } from '@mui/material';
import ProfCard from './components/Card/ProfCard.jsx';

function App() {
  const [profList, setProfList] = useState([
    {
      name: "Dr. Mohammad Goku",
      initial: "KAKAROT",
      department: "Martial Arts",
      rating: 10,
      takeAgain: "100",
      difficulty: 10
    },
    {
      name: "Dr. Mohammad Luffy",
      initial: "Strawhat",
      department: "Pirate King",
      rating: 10,
      takeAgain: "100",
      difficulty: 10
    },
    {
      name: "Dr. Vegatable Vegeta",
      initial: "Majin",
      department: "Saiyan",
      rating: 7,
      takeAgain: "10",
      difficulty: 10
    },
  ]);

  return (
    <>
      <CssBaseline />
      <Box>
        <Navbar />
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "2rem", marginBottom: "2rem"}}>
          { profList.map((prof, index) => ( <ProfCard key={index} {...prof} /> ))}
        </Box>
      </Box>
    </>
  )
}

export default App
