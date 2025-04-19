import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { CardHeader, Box } from '@mui/material';
import ReviewContent from '../ReviewContent/ReviewContent';

function ReviewCard({ courseName, review, rating, takeAgain, difficulty }) {
  return (
    <Card sx={{ width: {xs: 350, sm: "400", md: 600}, display: "flex", flexDirection: "row", marginBottom: "2rem", bgcolor:"#FAFAFA", overflow: "hidden" }}>
        <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}>
          <CardHeader title={rating} sx={{bgcolor: rating >= 4 ? '#d6fffe' : rating >= 3 ? '#FFFFBF' : rating <= 2 ? 'red' : '#E78587', padding: "3rem"}} />
        </Box>

        <Box sx={{ flex: 2 }}>
          <CardContent>
            <ReviewContent courseName={courseName} review={review} /> 
            <Typography gutterBottom variant="body2" sx={{ color: 'text.secondary' }}>
              <Box component="span" fontWeight="bold">Take again?</Box>: {takeAgain ? 'Yes' : 'No'} | 
              <Box component="span" fontWeight="bold"> Difficulty:</Box> {difficulty}
            </Typography>
          </CardContent>
        </Box>
    </Card>
  );
}

export default ReviewCard;
