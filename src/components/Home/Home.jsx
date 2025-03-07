import { Box } from '@mui/material'
import React, { useState } from 'react'
import ProfCard from '../Card/ProfCard';
import { Link } from 'react-router';

function Home() {
    const [profList, setProfList] = useState([
    {
      name: "Dr. Mohammad Goku",
      initial: "KAKAROT",
      department: "Martial Arts",
      rating: 10,
      takeAgain: "100",
      difficulty: 10,
      university: "NSU",
      reviews: ["", "", ""],
      id: 0,
    },
    {
      name: "Dr. Mohammad Luffy",
      initial: "Strawhat",
      department: "Pirate King",
      rating: 10,
      takeAgain: "100",
      difficulty: 10,
      university: "NSU",
      reviews: ["", "", ""],
      id: 1,
    },
    {
      name: "Dr. Vegatable Vegeta",
      initial: "Majin",
      department: "Saiyan",
      rating: 7,
      takeAgain: "10",
      difficulty: 10,
      university: "NSU",
      reviews: ["", "", ""],
      id: 2,
    },
  ]);
  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "2rem", marginBottom: "2rem"}}>
        { profList.map((prof, index) => ( 
            <Link to={`/${prof.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <ProfCard key={index} {...prof} />
            </Link>  
        ))}
    </Box>
  )
}

export default Home