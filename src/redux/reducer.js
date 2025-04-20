import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  professors: [],
  searchProfessor: '',
  searchByUniversity: 'NSU',
  loading: false,
  error: null,
  currentPage: 0,
  totalPages: 0,
  totalElements: 0,
};

export const fetchProfessors = createAsyncThunk(
  'professors/fetchProfessors',
  async ({ page = 0, size = 3, university }, { rejectWithValue }) => {
    try {
      const query = new URLSearchParams({
        page,
        size,
      });
      console.log(`${import.meta.env.VITE_API_URL}?${query.toString()}`)
      const response = await fetch(`${import.meta.env.VITE_API_URL}?${query.toString()}`);

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
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfessors.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProfessors.fulfilled, (state, action) => {
        state.loading = false;
        state.professors = action.payload.content;
        state.totalPages = action.payload.totalPages;
        state.totalElements = action.payload.totalElements;
        state.currentPage = action.payload.number;
        state.error = null;
      })
      .addCase(fetchProfessors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setProfessors, setProfessorsByUni, setCurrentPage } = professorSlice.actions;

export default professorSlice.reducer;
