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
export interface FilterItem {
    type: string;
    value: string;
  }

const initialState: any = {
    data: [],
    search: '',
    year: 0,
    type:'',
    filter: [{
        type: 's',
        value: 'pokemon'
    }],
    loading: false,
    error: "",
};
const API_URL = 'https://www.omdbapi.com/?apikey=c8f92f6c'

export const fetchMoviesStates = createAsyncThunk(
    "fetchStates",
    async (params: {filter: FilterItem[]}) => {
        let query: string = '';

        if (params.filter?.length) {
            params.filter.map((x:FilterItem) => {
                if (x.type && !x.value) {
                    query += `&${x.type}=pokemon`
                } else {
                    query += `&${x.type}=${x.value}`
                }
            });
        }

        const response = await fetch(`${API_URL}${query}`);
      const data = await response?.json();
      const movies = data?.Search
      return movies
    }
);

export const moviesStatesSlice = createSlice({
    name: "moviesStates",
    initialState,
    reducers: {
        rSearch: (state,action) => {
            state.search = action.payload
        },
        rYear: (state,action) => {
            state.year = action.payload
        },
        rType: (state,action) => {
            state.type = action.payload
        },
        rFilter: (state,action) => {
            state.filter = [...action.payload]
        }
    },
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
export const { rSearch, rYear, rType, rFilter } = moviesStatesSlice.actions

export default moviesStatesSlice.reducer;
