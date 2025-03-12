import { configureStore } from '@reduxjs/toolkit'
import professorReducer from './reducer'


export default configureStore({
  reducer: {
    professors: professorReducer
  },
})