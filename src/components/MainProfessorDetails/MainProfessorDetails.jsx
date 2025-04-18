import { Typography } from '@mui/material'
import React from 'react'

const MainProfessorDetails = ({ name, initial, department }) => {
  return (
    <>
    <Typography gutterBottom variant="h5" component="div">
      {name} | <Typography component="span"  style={{ fontStyle: 'italic', fontWeight: 400 }}>{initial}</Typography>
    </Typography>
    <Typography gutterBottom variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
        {department}
    </Typography>
    </>
  )
}

export default MainProfessorDetails