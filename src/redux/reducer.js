import { createSlice } from "@reduxjs/toolkit"

const initialState = {
     professors: [
    {
      name: "Dr. Mohammad Goku",
      initial: "KAKAROT",
      department: "Martial Arts",
      rating: 10,
      takeAgain: "100",
      difficulty: 10,
      university: "NSU",
      reviews: ["", "", ""],
      id: 0,
    },
    {
      name: "Dr. Mohammad Luffy",
      initial: "Strawhat",
      department: "Pirate King",
      rating: 10,
      takeAgain: "100",
      difficulty: 10,
      university: "NSU",
      reviews: ["", "", ""],
      id: 1,
    },
    {
      name: "Dr. Vegatable Vegeta",
      initial: "Majin",
      department: "Saiyan",
      rating: 7,
      takeAgain: "10",
      difficulty: 10,
      university: "DU",
      reviews: ["", "", ""],
      id: 2,
    },
  ],
  searchProfessor: '',
  searchByUniversity: 'NSU',
}

const professorSlice = createSlice({
    name: "professors",
    initialState,
    reducers: {
        setProfessors: (state, action) => {
            state.searchProfessor = action.payload
        },
        setProfessorsByUni: (state, action) => {
            state.searchByUniversity = action.payload
        },
    },
})

export const { setProfessors, setProfessorsByUni } = professorSlice.actions

export default professorSlice.reducer