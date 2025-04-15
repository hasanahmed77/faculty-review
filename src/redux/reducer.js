import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  professors: [],
  searchProfessor: '',
  searchByUniversity: 'NSU',
  loading: false,
  error: null,
};

// thunk
export const fetchProfessors = createAsyncThunk(
  'professors/fetchProfessors',
  async (university, { rejectWithValue }) => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch professors');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const professorSlice = createSlice({
  name: 'professors',
  initialState,
  reducers: {
    setProfessors: (state, action) => {
      state.searchProfessor = action.payload;
    },
    setProfessorsByUni: (state, action) => {
      state.searchByUniversity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfessors.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProfessors.fulfilled, (state, action) => {
        state.loading = false;
        state.professors = action.payload;
        state.error = null;
      })
      .addCase(fetchProfessors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setProfessors, setProfessorsByUni } = professorSlice.actions;

export default professorSlice.reducer;
