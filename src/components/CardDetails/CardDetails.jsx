import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import MainProfessorDetails from '../MainProfessorDetails/MainProfessorDetails'
import { useParams } from 'react-router'
import ProfCard from '../Card/ProfCard'

function CardDetails() {
  const { id } = useParams()
  const name = "Dr X"
  const initial = "MH"
  const department = "MAT"

  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "2rem", marginBottom: "2rem"}}>
        <MainProfessorDetails name={name} initial={initial} department={department}/>
        
        <Button
          variant="outlined"
          sx={{
            marginY: 2,
            marginBottom: 5,
            color: 'black', 
            borderColor: 'black', 
            '&:hover': {
              borderColor: 'black',
              backgroundColor: 'rgba(0,0,0,0.01)', 
            },
          }}
        >
          GIVE A REVIEW
        </Button>

        <Typography 
          variant="h5" 
          component="h5" 
          sx={{ marginBottom: 5, fontStyle: "italic", textDecoration: "underline", fontWeight: "light"}}
          >
             Reviews 
          </Typography>

        <ProfCard reviewType name={name} initial={initial} department={department} rating={1} takeAgain={true} difficulty={1}/>

    </Box>
  )
}

export default CardDetails