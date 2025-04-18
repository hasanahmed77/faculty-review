import { Box, Button, CircularProgress, Typography } from '@mui/material'
import React from 'react'
import MainProfessorDetails from '../MainProfessorDetails/MainProfessorDetails'
import { useNavigate, useParams } from 'react-router'
import useSingleFetch from '../../hooks/useSingleFetch'
import ReviewCard from '../ReviewCard/ReviewCard'
import useErrorRedirect from '../../hooks/useErrorRedirect'
import { cardDetailsStyles } from './cardDetailsStyle'

function CardDetails() {
  const { id } = useParams()
  const navigate = useNavigate();

  const { data, loading, error } = useSingleFetch(`${import.meta.env.VITE_API_URL}/${id}`)

  useErrorRedirect(error)

  if (error) {
    return (
      <Box sx={cardDetailsStyles.container}>
        <Typography color="error">
          Server down — taking you to Home...
        </Typography>
      </Box>
    );
  }

  if (loading) {
    return (
      <Box sx={cardDetailsStyles.container}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box sx={cardDetailsStyles.container}>
      <MainProfessorDetails name={data.name} initial={data.initial} department={data.dept}/>
        
      <Button variant="outlined" sx={cardDetailsStyles.button}>
        GIVE A REVIEW
      </Button>

      <Typography variant="h5" component="h5" sx={cardDetailsStyles.reviewsHeader}>
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
