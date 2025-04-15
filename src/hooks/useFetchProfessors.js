import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProfessors } from '../redux/reducer'

const useFetchProfessors = (searchByUniversity) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (searchByUniversity) {
      dispatch(fetchProfessors(searchByUniversity))
    }
  }, [dispatch, searchByUniversity])
}

export default useFetchProfessors
