import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfessors } from '../redux/reducer';

const useFetchProfessors = () => {
  const dispatch = useDispatch();

  const { currentPage, searchByUniversity } = useSelector((state) => state.professors);

  useEffect(() => {
    if (searchByUniversity) {
      dispatch(fetchProfessors({
        page: currentPage,
        size: 10, 
        university: searchByUniversity
      }));
    }
  }, [dispatch, currentPage, searchByUniversity]);
};

export default useFetchProfessors;
