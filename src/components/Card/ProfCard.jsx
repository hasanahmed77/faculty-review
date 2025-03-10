import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { CardHeader, Box } from '@mui/material';

function ProfCard({ name, initial, department, rating, takeAgain, difficulty}) {
  return (
    <Card sx={{ width: {xs: 350, sm: "400", md: 600}, display: "flex", flexDirection: "row", marginBottom: "2rem", bgcolor:"#FAFAFA", overflow: "hidden" }}>
      <CardActionArea sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}>
          <CardHeader title={rating} sx={{bgcolor: "white", padding: "3rem"}} />
        </Box>

        <Box sx={{ flex: 2 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name} | {initial}
            </Typography>
            <Typography gutterBottom variant="body2" sx={{ color: 'text.secondary' }}>
              {department}
            </Typography>
            <Typography gutterBottom variant="body2" sx={{ color: 'text.secondary' }}>
              Take again: {takeAgain}% | Difficulty: {difficulty}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default ProfCard;
