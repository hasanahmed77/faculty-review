import { Box, Button, FormControl, FormControlLabel, Modal, Radio, RadioGroup, TextField, Typography, Rating } from '@mui/material';
import React, { useState } from 'react';

import styles from './formStyle';
import { useNavigate } from 'react-router';

const Form = ({ formIsOpen, setFormIsOpen, id }) => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    courseName: '',
    rating: 1,
    takeAgain: true,
    difficulty: 'easy',
    review: '',
  });
  const [disableSubmitBtn, setDisableSubmitBtn] = useState(false)

  const handleClose = () => setFormIsOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'review') {
      const words = value.trim().split(/\s+/);
      if (words.length > 60) return;
    }

    setFormData({
      ...formData,
      [name]: name === 'takeAgain' ? value === 'true' : value,
    });
  };

  const handleRatingChange = (event, newValue) => {
    setFormData({
      ...formData,
      rating: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisableSubmitBtn(true)

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/reviews/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([formData]),
      });

      if (!response.ok) {
        setDisableSubmitBtn(false)
        throw new Error('Failed to submit form');
      }

      const data = await response.json();
      console.log('Form submitted successfully:', data);
      setDisableSubmitBtn(false)
      handleClose();
      
      navigate(`/${id}`)
      navigate(0)

    } catch (error) {
      setDisableSubmitBtn(false)
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Modal
      aria-labelledby="form-modal-title"
      aria-describedby="form-modal-description"
      open={formIsOpen}
      onClose={handleClose}
    >
      <Box sx={styles.modalBox}>
        <Typography variant="h6" gutterBottom>
          PROF REVIEW
        </Typography>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Course Name"
            variant="outlined"
            fullWidth
            required
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            margin="normal"
          />

          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body1">Rate (1-5)</Typography>
            <Rating
              name="rating"
              value={formData.rating}
              onChange={handleRatingChange}
              precision={1}
              required
            />
          </Box>

          <FormControl sx={styles.formControl} fullWidth required>
            <Typography variant="body1">Choose this prof again?</Typography>
            <RadioGroup
              row
              name="takeAgain"
              value={formData.takeAgain.toString()}
              onChange={handleChange}
              required
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl fullWidth sx={styles.formControl} required>
            <Typography variant="body1">Difficulty</Typography>
            <RadioGroup
              row
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              required
            >
              <FormControlLabel value="easy" control={<Radio />} label="Easy" />
              <FormControlLabel value="medium" control={<Radio />} label="Medium" />
              <FormControlLabel value="hard" control={<Radio />} label="Hard" />
            </RadioGroup>
          </FormControl>

          <TextField
            label="Review"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            required
            name="review"
            value={formData.review}
            onChange={handleChange}
            sx={styles.textField}
            helperText={`${60 - formData.review.trim().split(/\s+/).filter(Boolean).length} words remaining`}
          />

          <Box sx={styles.buttonContainer}>
            <Button
              disabled={disableSubmitBtn}
              type="submit"
              variant="outlined"
              sx={styles.button}
            >
              SUBMIT
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default Form;
