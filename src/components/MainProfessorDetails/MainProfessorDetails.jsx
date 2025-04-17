import { Typography } from '@mui/material'
import React from 'react'

const MainProfessorDetails = ({ name, initial, department }) => {
  return (
    <>
    <Typography gutterBottom variant="h5" component="div">
        {name} | {initial}
    </Typography>
    <Typography gutterBottom variant="body2" sx={{ color: 'text.secondary' }}>
        {department}
    </Typography>
    </>
  )
}

export default MainProfessorDetails