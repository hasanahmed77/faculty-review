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

function ProfCard({ name, initial, dept, rating, reviews }) {
  const takeAgainPercentage = calculateTakeAgainPercentage(reviews);
  const calculatedDIfficulty = findDifficulty(reviews);
  const calculatedRating = calculateRating(reviews);

  return (
    <Card sx={profCardStyles.card}>
      <CardActionArea sx={profCardStyles.cardActionArea}>
        <Box sx={profCardStyles.leftBox}>
          <CardHeader title={calculatedRating} sx={profCardStyles.cardHeader} />
        </Box>

        <Box sx={profCardStyles.rightBox}>
          <CardContent>
            <MainProfessorDetails name={name} initial={initial} department={dept} />

            <Typography gutterBottom variant="body2" sx={profCardStyles.typography}>
              <Box component="span" sx={profCardStyles.boldText}>Take Again:</Box> {takeAgainPercentage}% | 
              <Box component="span" sx={profCardStyles.boldText}> Difficulty:</Box> {calculatedDIfficulty}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default ProfCard;
