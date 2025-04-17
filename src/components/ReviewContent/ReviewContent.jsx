import { Typography } from '@mui/material'
import React from 'react'

const ReviewContent = () => {
  return (
    <>
        <Typography gutterBottom variant="h5" component="div">
            Course Name
        </Typography>
        <Typography gutterBottom variant="body2" sx={{ color: 'text.secondary' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </Typography>
        </>
  )
}

export default ReviewContent