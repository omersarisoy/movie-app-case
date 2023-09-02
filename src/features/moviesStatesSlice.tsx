// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   search: 'pokemon',
//   year: ''
// }

// export const moviesStates = createSlice({
//   name: 'moviesStates',
//   initialState,
//   reducers: {
//     searchMovies: (state, action) => {
//       state.search = action.payload
//     },
//     selectYear: (state, action) => {
//       state.year = action.payload
//     }
//   },
// })
// export const { searchMovies, selectYear} = moviesStates.actions
// export const getSearchValue = (state:any) => state.movieStates.search
// export const getSelectedYear = (state:any) => state.movieStates.year
// export default moviesStates.reducer

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
    data: [],
    loading: false,
    error: "",
};

export const fetchMoviesStates = createAsyncThunk(
    "fetchStates",
    async (params: any) => {
      const response = await fetch(`http://www.omdbapi.com/?${params}&apikey=c8f92f6c`);
      const data = await response?.json();
      const movies = data?.Search
      return movies
    }
);

export const moviesStatesSlice = createSlice({
    name: "moviesStates",
    initialState,
    reducers: {},
    extraReducers: (builder: any) => {
        builder.addCase(fetchMoviesStates.pending, (state: any) => {
            state.loading = true;
        });
        builder.addCase(
            fetchMoviesStates.fulfilled,
            (state: any, action: PayloadAction<[]>) => {
                state.loading = false;
                state.error = "";
                state.data = action.payload;
            }
        );
        builder.addCase(fetchMoviesStates.rejected, (state: any) => {
            state.loading = false;
            state.data = [];
            state.error = "Yüklenemedi";
        });
    },
});

export default moviesStatesSlice.reducer;
