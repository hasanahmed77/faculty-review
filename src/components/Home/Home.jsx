import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProfCard from '../Card/ProfCard';
import { Link } from 'react-router';
import { useSelector } from 'react-redux';
import useFetchProfessors from '../../hooks/useFetchProfessors';
import CircularProgress from '@mui/material/CircularProgress';

function Home() {
  const {
    professors,
    loading,
    error,
    searchProfessor,
    searchByUniversity
  } = useSelector(state => state.professors)

  useFetchProfessors(searchByUniversity);

  const filteredProfessors = professors.filter(prof => 
    prof.name.toLowerCase().includes(searchProfessor.toLowerCase()) &&
    (prof.university === searchByUniversity || searchByUniversity === "")
  )

  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "2rem", marginBottom: "2rem"}}>
        { loading ? <CircularProgress /> :
          ( !filteredProfessors.length ? <Typography>Sorry, not available.</Typography>  : 
            filteredProfessors.map((prof, index) => ( 
              <Link to={`/${prof.id}`} style={{ textDecoration: "none", color: "inherit" }} key={prof.id}>
                  <ProfCard {...prof} />
              </Link>  
        )))
        }
    </Box>
  )
}

export default Home