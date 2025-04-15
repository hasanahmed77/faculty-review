import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import useFetchProfessors from '../../hooks/useFetchProfessors';
import useFilteredProfessors from '../../hooks/useFilterProfessors';
import DynamicContent from '../DynamicContent/DynamicContent';

function Home() {
  const {
    professors,
    loading,
    error,
    searchProfessor,
    searchByUniversity
  } = useSelector(state => state.professors)

  useFetchProfessors(searchByUniversity)

  const filteredProfessors = useFilteredProfessors({ professors, searchProfessor, searchByUniversity })

  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "2rem", marginBottom: "2rem"}}>
          { <DynamicContent 
              error={error}
              loading={loading}
              filteredProfessors={filteredProfessors}
            /> }
    </Box>
  )
}

export default Home