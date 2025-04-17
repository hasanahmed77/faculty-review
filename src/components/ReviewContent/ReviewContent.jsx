import { Typography } from '@mui/material'
import React from 'react'

const ReviewContent = ({ courseName, review }) => {
  return (
    <>
        <Typography gutterBottom variant="h5" component="div">
            {courseName}
        </Typography>
        <Typography gutterBottom variant="body2" sx={{ color: 'text.secondary' }}>
            {review}
        </Typography>
        </>
  )
}

export default ReviewContent