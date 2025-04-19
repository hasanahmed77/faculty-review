import { Box, Button, CircularProgress, Typography } from '@mui/material'
import React, { useState } from 'react'
import MainProfessorDetails from '../MainProfessorDetails/MainProfessorDetails'
import { useNavigate, useParams } from 'react-router'
import useSingleFetch from '../../hooks/useSingleFetch'
import ReviewCard from '../ReviewCard/ReviewCard'
import useErrorRedirect from '../../hooks/useErrorRedirect'
import { cardDetailsStyles } from './cardDetailsStyle'
import Form from '../Form/Form'

function CardDetails() {
  const { id } = useParams()

  const { data, loading, error } = useSingleFetch(`${import.meta.env.VITE_API_URL}/${id}`)
  const [formIsOpen, setFormIsOpen] = useState(false)

  useErrorRedirect(error)

  const handleClick = () => setFormIsOpen(true)

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
        
      <Button variant="outlined" sx={cardDetailsStyles.button} onClick={handleClick}>
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

      <Form formIsOpen={formIsOpen} setFormIsOpen={setFormIsOpen} id={id}/>
    </Box>
  )
}

export default CardDetails
