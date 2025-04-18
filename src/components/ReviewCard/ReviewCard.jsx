import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { CardHeader, Box } from '@mui/material';
import MainProfessorDetails from '../MainProfessorDetails/MainProfessorDetails';
import ReviewContent from '../ReviewContent/ReviewContent';

function ReviewCard({ courseName, review, rating, takeAgain, difficulty }) {
  return (
    <Card sx={{ width: {xs: 350, sm: "400", md: 600}, display: "flex", flexDirection: "row", marginBottom: "2rem", bgcolor:"#FAFAFA", overflow: "hidden" }}>
      <CardActionArea sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}>
          <CardHeader title={rating} sx={{bgcolor: "white", padding: "3rem"}} />
        </Box>

        <Box sx={{ flex: 2 }}>
          <CardContent>
            <ReviewContent courseName={courseName} review={review} /> 
            <Typography gutterBottom variant="body2" sx={{ color: 'text.secondary' }}>
              Take again: {takeAgain ? 'Yes' : 'No'} | Difficulty: {difficulty}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default ReviewCard;
