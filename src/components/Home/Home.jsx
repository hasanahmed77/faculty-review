import { Box } from '@mui/material'
import React, { useState } from 'react'
import ProfCard from '../Card/ProfCard';
import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const { professors, searchProfessor, searchByUniversity} = useSelector(state => state.professors)

  const filteredProfessors = professors.filter(prof => 
    prof.name.toLowerCase().includes(searchProfessor.toLowerCase()) &&
    (prof.university === searchByUniversity || searchByUniversity === "")
  )

  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "2rem", marginBottom: "2rem"}}>
        { !filteredProfessors.length ? <div>Sorry, not available.</div>  : filteredProfessors.map((prof, index) => ( 
            <Link to={`/${prof.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <ProfCard key={index} {...prof} />
            </Link>  
        ))}
    </Box>
  )
}

export default Home