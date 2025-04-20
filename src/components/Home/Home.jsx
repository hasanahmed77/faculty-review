import React from 'react';
import { Box, Pagination } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import useFetchProfessors from '../../hooks/useFetchProfessors';
import useFilteredProfessors from '../../hooks/useFilterProfessors';
import DynamicContent from '../DynamicContent/DynamicContent';
import { setCurrentPage } from '../../redux/reducer';

function Home() {
  const dispatch = useDispatch();

  const {
    professors,
    loading,
    error,
    searchProfessor,
    searchByUniversity,
    totalPages,
    currentPage
  } = useSelector(state => state.professors);

  useFetchProfessors(); 

  const filteredProfessors = useFilteredProfessors({
    professors,
    searchProfessor,
    searchByUniversity,
  });

  const handlePageChange = (event, value) => {
    dispatch(setCurrentPage(value - 1)); 
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '8rem',
        marginBottom: '2rem',
      }}
    >
      <DynamicContent
        error={error}
        loading={loading}
        filteredProfessors={filteredProfessors}
      />

      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={currentPage + 1} 
          onChange={handlePageChange}
          color="tertiary"
          sx={{ marginTop: '2rem' }}
        />
      )}
    </Box>
  );
}

export default Home;
