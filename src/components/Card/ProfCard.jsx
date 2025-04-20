import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { CardHeader, Box } from '@mui/material';
import MainProfessorDetails from '../MainProfessorDetails/MainProfessorDetails';
import calculateTakeAgainPercentage from '../../helper functions/calculateTakeAgainPercentage';
import findDifficulty from '../../helper functions/findDifficulty';
import calculateRating from '../../helper functions/calculateRating';
import profCardStyles from './profCardStyles';

function ProfCard({ name, initial, dept, reviews }) {
  
  const takeAgainPercentage = calculateTakeAgainPercentage(reviews);
  const calculatedDIfficulty = findDifficulty(reviews);
  const calculatedRating = calculateRating(reviews);

  // Use the calculatedRating to determine the style
  const cardStyles = profCardStyles(calculatedRating);

  return (
    <Card sx={cardStyles.card}>
      <CardActionArea sx={cardStyles.cardActionArea}>
        <Box sx={cardStyles.leftBox}>
          <CardHeader title={calculatedRating} sx={cardStyles.cardHeader} />
        </Box>

        <Box sx={cardStyles.rightBox}>
          <CardContent>
            <MainProfessorDetails name={name} initial={initial} department={dept} />

            <Typography gutterBottom variant="body2" sx={cardStyles.typography}>
              <Box component="span" sx={cardStyles.boldText}>Take Again:</Box> {takeAgainPercentage}{takeAgainPercentage === "N/A" ? '' : '%'} | 
              <Box component="span" sx={cardStyles.boldText}> Difficulty:</Box> {calculatedDIfficulty}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default ProfCard;
