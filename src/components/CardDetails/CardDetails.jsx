import { Box, Button, CircularProgress, Typography } from '@mui/material'
import React from 'react'
import MainProfessorDetails from '../MainProfessorDetails/MainProfessorDetails'
import { useParams } from 'react-router'
import ProfCard from '../Card/ProfCard'
import useSingleFetch from '../../hooks/useSingleFetch'
import ReviewCard from '../ReviewCard/ReviewCard'

function CardDetails() {
  const { id } = useParams()

  const { data, loading, error } = useSingleFetch(`${import.meta.env.VITE_API_URL}/${id}`)

  console.log("LEN: ", data?.reviews.length)

  if (error) 
      return <Typography color="error">Server down - could not fetch data.</Typography>
  
  if (loading) {
    return (
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "2rem", marginBottom: "2rem"}}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "2rem", marginBottom: "2rem"}}>
        <MainProfessorDetails name={data.name} initial={data.initial} department={data.initial}/>
        
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

        {data?.reviews?.length > 0 ? (
          data.reviews.map((review, index) => (
            <ReviewCard
              key={index}
              courseName={review.courseName}
              review={review.review}
              rating={review.rating}
              takeAgain={review.takeAgain}
              difficulty={review.difficulty}
            />
          ))
        ) : (
          <Typography>No reviews about this professor yet.</Typography>
        )}

    </Box>
  )
}

export default CardDetails